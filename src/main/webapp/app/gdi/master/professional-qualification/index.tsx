import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import ProfessionalQualification from './professional-qualification';
import ProfessionalQualificationDetail from './professional-qualification-detail';
import ProfessionalQualificationUpdate from './professional-qualification-update';
import ProfessionalQualificationDeleteDialog from './professional-qualification-delete-dialog';

const ProfessionalQualificationRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<ProfessionalQualification />} />
    <Route path="new" element={<ProfessionalQualificationUpdate />} />
    <Route path=":id">
      <Route index element={<ProfessionalQualificationDetail />} />
      <Route path="edit" element={<ProfessionalQualificationUpdate />} />
      <Route path="delete" element={<ProfessionalQualificationDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default ProfessionalQualificationRoutes;
