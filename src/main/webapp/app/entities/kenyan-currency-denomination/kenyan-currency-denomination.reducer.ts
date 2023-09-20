import axios from 'axios';
import { createAsyncThunk, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { IQueryParams, createEntitySlice, EntityState, serializeAxiosError } from 'app/shared/reducers/reducer.utils';
import { IKenyanCurrencyDenomination, defaultValue } from 'app/shared/model/kenyan-currency-denomination.model';

const initialState: EntityState<IKenyanCurrencyDenomination> = {
  loading: false,
  errorMessage: null,
  entities: [],
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false,
};

const apiUrl = 'api/kenyan-currency-denominations';
const apiSearchUrl = 'api/_search/kenyan-currency-denominations';

// Actions

export const searchEntities = createAsyncThunk(
  'kenyanCurrencyDenomination/search_entity',
  async ({ query, page, size, sort }: IQueryParams) => {
    const requestUrl = `${apiSearchUrl}?query=${query}${sort ? `&page=${page}&size=${size}&sort=${sort}` : ''}`;
    return axios.get<IKenyanCurrencyDenomination[]>(requestUrl);
  }
);

export const getEntities = createAsyncThunk('kenyanCurrencyDenomination/fetch_entity_list', async ({ page, size, sort }: IQueryParams) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}&` : '?'}cacheBuster=${new Date().getTime()}`;
  return axios.get<IKenyanCurrencyDenomination[]>(requestUrl);
});

export const getEntity = createAsyncThunk(
  'kenyanCurrencyDenomination/fetch_entity',
  async (id: string | number) => {
    const requestUrl = `${apiUrl}/${id}`;
    return axios.get<IKenyanCurrencyDenomination>(requestUrl);
  },
  { serializeError: serializeAxiosError }
);

export const createEntity = createAsyncThunk(
  'kenyanCurrencyDenomination/create_entity',
  async (entity: IKenyanCurrencyDenomination, thunkAPI) => {
    const result = await axios.post<IKenyanCurrencyDenomination>(apiUrl, cleanEntity(entity));
    thunkAPI.dispatch(getEntities({}));
    return result;
  },
  { serializeError: serializeAxiosError }
);

export const updateEntity = createAsyncThunk(
  'kenyanCurrencyDenomination/update_entity',
  async (entity: IKenyanCurrencyDenomination, thunkAPI) => {
    const result = await axios.put<IKenyanCurrencyDenomination>(`${apiUrl}/${entity.id}`, cleanEntity(entity));
    thunkAPI.dispatch(getEntities({}));
    return result;
  },
  { serializeError: serializeAxiosError }
);

export const partialUpdateEntity = createAsyncThunk(
  'kenyanCurrencyDenomination/partial_update_entity',
  async (entity: IKenyanCurrencyDenomination, thunkAPI) => {
    const result = await axios.patch<IKenyanCurrencyDenomination>(`${apiUrl}/${entity.id}`, cleanEntity(entity));
    thunkAPI.dispatch(getEntities({}));
    return result;
  },
  { serializeError: serializeAxiosError }
);

export const deleteEntity = createAsyncThunk(
  'kenyanCurrencyDenomination/delete_entity',
  async (id: string | number, thunkAPI) => {
    const requestUrl = `${apiUrl}/${id}`;
    const result = await axios.delete<IKenyanCurrencyDenomination>(requestUrl);
    thunkAPI.dispatch(getEntities({}));
    return result;
  },
  { serializeError: serializeAxiosError }
);

// slice

export const KenyanCurrencyDenominationSlice = createEntitySlice({
  name: 'kenyanCurrencyDenomination',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getEntity.fulfilled, (state, action) => {
        state.loading = false;
        state.entity = action.payload.data;
      })
      .addCase(deleteEntity.fulfilled, state => {
        state.updating = false;
        state.updateSuccess = true;
        state.entity = {};
      })
      .addMatcher(isFulfilled(getEntities, searchEntities), (state, action) => {
        const { data, headers } = action.payload;

        return {
          ...state,
          loading: false,
          entities: data,
          totalItems: parseInt(headers['x-total-count'], 10),
        };
      })
      .addMatcher(isFulfilled(createEntity, updateEntity, partialUpdateEntity), (state, action) => {
        state.updating = false;
        state.loading = false;
        state.updateSuccess = true;
        state.entity = action.payload.data;
      })
      .addMatcher(isPending(getEntities, getEntity, searchEntities), state => {
        state.errorMessage = null;
        state.updateSuccess = false;
        state.loading = true;
      })
      .addMatcher(isPending(createEntity, updateEntity, partialUpdateEntity, deleteEntity), state => {
        state.errorMessage = null;
        state.updateSuccess = false;
        state.updating = true;
      });
  },
});

export const { reset } = KenyanCurrencyDenominationSlice.actions;

// Reducer
export default KenyanCurrencyDenominationSlice.reducer;
