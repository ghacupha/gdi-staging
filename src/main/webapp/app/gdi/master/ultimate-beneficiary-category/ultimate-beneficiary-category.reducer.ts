import axios from 'axios';
import { createAsyncThunk, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { IQueryParams, createEntitySlice, EntityState, serializeAxiosError } from 'app/shared/reducers/reducer.utils';
import { IUltimateBeneficiaryCategory, defaultValue } from 'app/shared/model/ultimate-beneficiary-category.model';

const initialState: EntityState<IUltimateBeneficiaryCategory> = {
  loading: false,
  errorMessage: null,
  entities: [],
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false,
};

const apiUrl = 'api/ultimate-beneficiary-categories';
const apiSearchUrl = 'api/_search/ultimate-beneficiary-categories';

// Actions

export const searchEntities = createAsyncThunk(
  'ultimateBeneficiaryCategory/search_entity',
  async ({ query, page, size, sort }: IQueryParams) => {
    const requestUrl = `${apiSearchUrl}?query=${query}${sort ? `&page=${page}&size=${size}&sort=${sort}` : ''}`;
    return axios.get<IUltimateBeneficiaryCategory[]>(requestUrl);
  }
);

export const getEntities = createAsyncThunk('ultimateBeneficiaryCategory/fetch_entity_list', async ({ page, size, sort }: IQueryParams) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}&` : '?'}cacheBuster=${new Date().getTime()}`;
  return axios.get<IUltimateBeneficiaryCategory[]>(requestUrl);
});

export const getEntity = createAsyncThunk(
  'ultimateBeneficiaryCategory/fetch_entity',
  async (id: string | number) => {
    const requestUrl = `${apiUrl}/${id}`;
    return axios.get<IUltimateBeneficiaryCategory>(requestUrl);
  },
  { serializeError: serializeAxiosError }
);

export const createEntity = createAsyncThunk(
  'ultimateBeneficiaryCategory/create_entity',
  async (entity: IUltimateBeneficiaryCategory, thunkAPI) => {
    const result = await axios.post<IUltimateBeneficiaryCategory>(apiUrl, cleanEntity(entity));
    thunkAPI.dispatch(getEntities({}));
    return result;
  },
  { serializeError: serializeAxiosError }
);

export const updateEntity = createAsyncThunk(
  'ultimateBeneficiaryCategory/update_entity',
  async (entity: IUltimateBeneficiaryCategory, thunkAPI) => {
    const result = await axios.put<IUltimateBeneficiaryCategory>(`${apiUrl}/${entity.id}`, cleanEntity(entity));
    thunkAPI.dispatch(getEntities({}));
    return result;
  },
  { serializeError: serializeAxiosError }
);

export const partialUpdateEntity = createAsyncThunk(
  'ultimateBeneficiaryCategory/partial_update_entity',
  async (entity: IUltimateBeneficiaryCategory, thunkAPI) => {
    const result = await axios.patch<IUltimateBeneficiaryCategory>(`${apiUrl}/${entity.id}`, cleanEntity(entity));
    thunkAPI.dispatch(getEntities({}));
    return result;
  },
  { serializeError: serializeAxiosError }
);

export const deleteEntity = createAsyncThunk(
  'ultimateBeneficiaryCategory/delete_entity',
  async (id: string | number, thunkAPI) => {
    const requestUrl = `${apiUrl}/${id}`;
    const result = await axios.delete<IUltimateBeneficiaryCategory>(requestUrl);
    thunkAPI.dispatch(getEntities({}));
    return result;
  },
  { serializeError: serializeAxiosError }
);

// slice

export const UltimateBeneficiaryCategorySlice = createEntitySlice({
  name: 'ultimateBeneficiaryCategory',
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

export const { reset } = UltimateBeneficiaryCategorySlice.actions;

// Reducer
export default UltimateBeneficiaryCategorySlice.reducer;
