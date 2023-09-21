import axios from 'axios';
import { createAsyncThunk, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { IQueryParams, createEntitySlice, EntityState, serializeAxiosError } from 'app/shared/reducers/reducer.utils';
import { ICrbSubmittingInstitutionCategory, defaultValue } from 'app/shared/model/crb-submitting-institution-category.model';

const initialState: EntityState<ICrbSubmittingInstitutionCategory> = {
  loading: false,
  errorMessage: null,
  entities: [],
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false,
};

const apiUrl = 'api/crb-submitting-institution-categories';
const apiSearchUrl = 'api/_search/crb-submitting-institution-categories';

// Actions

export const searchEntities = createAsyncThunk(
  'crbSubmittingInstitutionCategory/search_entity',
  async ({ query, page, size, sort }: IQueryParams) => {
    const requestUrl = `${apiSearchUrl}?query=${query}${sort ? `&page=${page}&size=${size}&sort=${sort}` : ''}`;
    return axios.get<ICrbSubmittingInstitutionCategory[]>(requestUrl);
  }
);

export const getEntities = createAsyncThunk(
  'crbSubmittingInstitutionCategory/fetch_entity_list',
  async ({ page, size, sort }: IQueryParams) => {
    const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}&` : '?'}cacheBuster=${new Date().getTime()}`;
    return axios.get<ICrbSubmittingInstitutionCategory[]>(requestUrl);
  }
);

export const getEntity = createAsyncThunk(
  'crbSubmittingInstitutionCategory/fetch_entity',
  async (id: string | number) => {
    const requestUrl = `${apiUrl}/${id}`;
    return axios.get<ICrbSubmittingInstitutionCategory>(requestUrl);
  },
  { serializeError: serializeAxiosError }
);

export const createEntity = createAsyncThunk(
  'crbSubmittingInstitutionCategory/create_entity',
  async (entity: ICrbSubmittingInstitutionCategory, thunkAPI) => {
    const result = await axios.post<ICrbSubmittingInstitutionCategory>(apiUrl, cleanEntity(entity));
    thunkAPI.dispatch(getEntities({}));
    return result;
  },
  { serializeError: serializeAxiosError }
);

export const updateEntity = createAsyncThunk(
  'crbSubmittingInstitutionCategory/update_entity',
  async (entity: ICrbSubmittingInstitutionCategory, thunkAPI) => {
    const result = await axios.put<ICrbSubmittingInstitutionCategory>(`${apiUrl}/${entity.id}`, cleanEntity(entity));
    thunkAPI.dispatch(getEntities({}));
    return result;
  },
  { serializeError: serializeAxiosError }
);

export const partialUpdateEntity = createAsyncThunk(
  'crbSubmittingInstitutionCategory/partial_update_entity',
  async (entity: ICrbSubmittingInstitutionCategory, thunkAPI) => {
    const result = await axios.patch<ICrbSubmittingInstitutionCategory>(`${apiUrl}/${entity.id}`, cleanEntity(entity));
    thunkAPI.dispatch(getEntities({}));
    return result;
  },
  { serializeError: serializeAxiosError }
);

export const deleteEntity = createAsyncThunk(
  'crbSubmittingInstitutionCategory/delete_entity',
  async (id: string | number, thunkAPI) => {
    const requestUrl = `${apiUrl}/${id}`;
    const result = await axios.delete<ICrbSubmittingInstitutionCategory>(requestUrl);
    thunkAPI.dispatch(getEntities({}));
    return result;
  },
  { serializeError: serializeAxiosError }
);

// slice

export const CrbSubmittingInstitutionCategorySlice = createEntitySlice({
  name: 'crbSubmittingInstitutionCategory',
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

export const { reset } = CrbSubmittingInstitutionCategorySlice.actions;

// Reducer
export default CrbSubmittingInstitutionCategorySlice.reducer;
