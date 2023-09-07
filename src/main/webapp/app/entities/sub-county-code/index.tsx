import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import SubCountyCode from './sub-county-code';
import SubCountyCodeDetail from './sub-county-code-detail';
import SubCountyCodeUpdate from './sub-county-code-update';
import SubCountyCodeDeleteDialog from './sub-county-code-delete-dialog';

const SubCountyCodeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<SubCountyCode />} />
    <Route path="new" element={<SubCountyCodeUpdate />} />
    <Route path=":id">
      <Route index element={<SubCountyCodeDetail />} />
      <Route path="edit" element={<SubCountyCodeUpdate />} />
      <Route path="delete" element={<SubCountyCodeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default SubCountyCodeRoutes;
