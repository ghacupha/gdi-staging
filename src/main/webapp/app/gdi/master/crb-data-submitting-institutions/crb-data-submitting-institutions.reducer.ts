import axios from 'axios';
import { createAsyncThunk, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { IQueryParams, createEntitySlice, EntityState, serializeAxiosError } from 'app/shared/reducers/reducer.utils';
import { ICrbDataSubmittingInstitutions, defaultValue } from 'app/shared/model/crb-data-submitting-institutions.model';

const initialState: EntityState<ICrbDataSubmittingInstitutions> = {
  loading: false,
  errorMessage: null,
  entities: [],
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false,
};

const apiUrl = 'api/crb-data-submitting-institutions';
const apiSearchUrl = 'api/_search/crb-data-submitting-institutions';

// Actions

export const searchEntities = createAsyncThunk(
  'crbDataSubmittingInstitutions/search_entity',
  async ({ query, page, size, sort }: IQueryParams) => {
    const requestUrl = `${apiSearchUrl}?query=${query}${sort ? `&page=${page}&size=${size}&sort=${sort}` : ''}`;
    return axios.get<ICrbDataSubmittingInstitutions[]>(requestUrl);
  }
);

export const getEntities = createAsyncThunk(
  'crbDataSubmittingInstitutions/fetch_entity_list',
  async ({ page, size, sort }: IQueryParams) => {
    const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}&` : '?'}cacheBuster=${new Date().getTime()}`;
    return axios.get<ICrbDataSubmittingInstitutions[]>(requestUrl);
  }
);

export const getEntity = createAsyncThunk(
  'crbDataSubmittingInstitutions/fetch_entity',
  async (id: string | number) => {
    const requestUrl = `${apiUrl}/${id}`;
    return axios.get<ICrbDataSubmittingInstitutions>(requestUrl);
  },
  { serializeError: serializeAxiosError }
);

export const createEntity = createAsyncThunk(
  'crbDataSubmittingInstitutions/create_entity',
  async (entity: ICrbDataSubmittingInstitutions, thunkAPI) => {
    const result = await axios.post<ICrbDataSubmittingInstitutions>(apiUrl, cleanEntity(entity));
    thunkAPI.dispatch(getEntities({}));
    return result;
  },
  { serializeError: serializeAxiosError }
);

export const updateEntity = createAsyncThunk(
  'crbDataSubmittingInstitutions/update_entity',
  async (entity: ICrbDataSubmittingInstitutions, thunkAPI) => {
    const result = await axios.put<ICrbDataSubmittingInstitutions>(`${apiUrl}/${entity.id}`, cleanEntity(entity));
    thunkAPI.dispatch(getEntities({}));
    return result;
  },
  { serializeError: serializeAxiosError }
);

export const partialUpdateEntity = createAsyncThunk(
  'crbDataSubmittingInstitutions/partial_update_entity',
  async (entity: ICrbDataSubmittingInstitutions, thunkAPI) => {
    const result = await axios.patch<ICrbDataSubmittingInstitutions>(`${apiUrl}/${entity.id}`, cleanEntity(entity));
    thunkAPI.dispatch(getEntities({}));
    return result;
  },
  { serializeError: serializeAxiosError }
);

export const deleteEntity = createAsyncThunk(
  'crbDataSubmittingInstitutions/delete_entity',
  async (id: string | number, thunkAPI) => {
    const requestUrl = `${apiUrl}/${id}`;
    const result = await axios.delete<ICrbDataSubmittingInstitutions>(requestUrl);
    thunkAPI.dispatch(getEntities({}));
    return result;
  },
  { serializeError: serializeAxiosError }
);

// slice

export const CrbDataSubmittingInstitutionsSlice = createEntitySlice({
  name: 'crbDataSubmittingInstitutions',
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

export const { reset } = CrbDataSubmittingInstitutionsSlice.actions;

// Reducer
export default CrbDataSubmittingInstitutionsSlice.reducer;
