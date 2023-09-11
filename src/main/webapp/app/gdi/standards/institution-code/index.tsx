import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import InstitutionCode from './institution-code';
import InstitutionCodeDetail from './institution-code-detail';
import InstitutionCodeUpdate from './institution-code-update';
import InstitutionCodeDeleteDialog from './institution-code-delete-dialog';

const InstitutionCodeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<InstitutionCode />} />
    <Route path="new" element={<InstitutionCodeUpdate />} />
    <Route path=":id">
      <Route index element={<InstitutionCodeDetail />} />
      <Route path="edit" element={<InstitutionCodeUpdate />} />
      <Route path="delete" element={<InstitutionCodeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default InstitutionCodeRoutes;
