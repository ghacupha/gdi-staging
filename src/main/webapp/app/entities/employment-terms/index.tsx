import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import EmploymentTerms from './employment-terms';
import EmploymentTermsDetail from './employment-terms-detail';
import EmploymentTermsUpdate from './employment-terms-update';
import EmploymentTermsDeleteDialog from './employment-terms-delete-dialog';

const EmploymentTermsRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<EmploymentTerms />} />
    <Route path="new" element={<EmploymentTermsUpdate />} />
    <Route path=":id">
      <Route index element={<EmploymentTermsDetail />} />
      <Route path="edit" element={<EmploymentTermsUpdate />} />
      <Route path="delete" element={<EmploymentTermsDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default EmploymentTermsRoutes;
