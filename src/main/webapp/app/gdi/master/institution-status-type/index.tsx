import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import InstitutionStatusType from './institution-status-type';
import InstitutionStatusTypeDetail from './institution-status-type-detail';
import InstitutionStatusTypeUpdate from './institution-status-type-update';
import InstitutionStatusTypeDeleteDialog from './institution-status-type-delete-dialog';

const InstitutionStatusTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<InstitutionStatusType />} />
    <Route path="new" element={<InstitutionStatusTypeUpdate />} />
    <Route path=":id">
      <Route index element={<InstitutionStatusTypeDetail />} />
      <Route path="edit" element={<InstitutionStatusTypeUpdate />} />
      <Route path="delete" element={<InstitutionStatusTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default InstitutionStatusTypeRoutes;
