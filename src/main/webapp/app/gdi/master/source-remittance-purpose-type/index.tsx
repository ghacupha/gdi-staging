import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import SourceRemittancePurposeType from './source-remittance-purpose-type';
import SourceRemittancePurposeTypeDetail from './source-remittance-purpose-type-detail';
import SourceRemittancePurposeTypeUpdate from './source-remittance-purpose-type-update';
import SourceRemittancePurposeTypeDeleteDialog from './source-remittance-purpose-type-delete-dialog';

const SourceRemittancePurposeTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<SourceRemittancePurposeType />} />
    <Route path="new" element={<SourceRemittancePurposeTypeUpdate />} />
    <Route path=":id">
      <Route index element={<SourceRemittancePurposeTypeDetail />} />
      <Route path="edit" element={<SourceRemittancePurposeTypeUpdate />} />
      <Route path="delete" element={<SourceRemittancePurposeTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default SourceRemittancePurposeTypeRoutes;
