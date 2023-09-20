import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CountyCode from './county-code';
import CountyCodeDetail from './county-code-detail';
import CountyCodeUpdate from './county-code-update';
import CountyCodeDeleteDialog from './county-code-delete-dialog';

const CountyCodeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CountyCode />} />
    <Route path="new" element={<CountyCodeUpdate />} />
    <Route path=":id">
      <Route index element={<CountyCodeDetail />} />
      <Route path="edit" element={<CountyCodeUpdate />} />
      <Route path="delete" element={<CountyCodeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CountyCodeRoutes;
