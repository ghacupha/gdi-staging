import axios from 'axios';
import { createAsyncThunk, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { IQueryParams, createEntitySlice, EntityState, serializeAxiosError } from 'app/shared/reducers/reducer.utils';
import { IAccountOwnershipType, defaultValue } from 'app/shared/model/account-ownership-type.model';

const initialState: EntityState<IAccountOwnershipType> = {
  loading: false,
  errorMessage: null,
  entities: [],
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false,
};

const apiUrl = 'api/account-ownership-types';
const apiSearchUrl = 'api/_search/account-ownership-types';

// Actions

export const searchEntities = createAsyncThunk('accountOwnershipType/search_entity', async ({ query, page, size, sort }: IQueryParams) => {
  const requestUrl = `${apiSearchUrl}?query=${query}${sort ? `&page=${page}&size=${size}&sort=${sort}` : ''}`;
  return axios.get<IAccountOwnershipType[]>(requestUrl);
});

export const getEntities = createAsyncThunk('accountOwnershipType/fetch_entity_list', async ({ page, size, sort }: IQueryParams) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}&` : '?'}cacheBuster=${new Date().getTime()}`;
  return axios.get<IAccountOwnershipType[]>(requestUrl);
});

export const getEntity = createAsyncThunk(
  'accountOwnershipType/fetch_entity',
  async (id: string | number) => {
    const requestUrl = `${apiUrl}/${id}`;
    return axios.get<IAccountOwnershipType>(requestUrl);
  },
  { serializeError: serializeAxiosError }
);

// slice

export const AccountOwnershipTypeSlice = createEntitySlice({
  name: 'accountOwnershipType',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getEntity.fulfilled, (state, action) => {
        state.loading = false;
        state.entity = action.payload.data;
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
      .addMatcher(isPending(getEntities, getEntity, searchEntities), state => {
        state.errorMessage = null;
        state.updateSuccess = false;
        state.loading = true;
      });
  },
});

export const { reset } = AccountOwnershipTypeSlice.actions;

// Reducer
export default AccountOwnershipTypeSlice.reducer;
