import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import SourcesOfFundsTypeCode from './sources-of-funds-type-code';
import SourcesOfFundsTypeCodeDetail from './sources-of-funds-type-code-detail';
import SourcesOfFundsTypeCodeUpdate from './sources-of-funds-type-code-update';
import SourcesOfFundsTypeCodeDeleteDialog from './sources-of-funds-type-code-delete-dialog';

const SourcesOfFundsTypeCodeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<SourcesOfFundsTypeCode />} />
    <Route path="new" element={<SourcesOfFundsTypeCodeUpdate />} />
    <Route path=":id">
      <Route index element={<SourcesOfFundsTypeCodeDetail />} />
      <Route path="edit" element={<SourcesOfFundsTypeCodeUpdate />} />
      <Route path="delete" element={<SourcesOfFundsTypeCodeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default SourcesOfFundsTypeCodeRoutes;
