import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CounterPartyCategory from './counter-party-category';
import CounterPartyCategoryDetail from './counter-party-category-detail';
import CounterPartyCategoryUpdate from './counter-party-category-update';
import CounterPartyCategoryDeleteDialog from './counter-party-category-delete-dialog';

const CounterPartyCategoryRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CounterPartyCategory />} />
    <Route path="new" element={<CounterPartyCategoryUpdate />} />
    <Route path=":id">
      <Route index element={<CounterPartyCategoryDetail />} />
      <Route path="edit" element={<CounterPartyCategoryUpdate />} />
      <Route path="delete" element={<CounterPartyCategoryDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CounterPartyCategoryRoutes;
