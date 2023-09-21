import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import AcademicQualification from './academic-qualification';
import AcademicQualificationDetail from './academic-qualification-detail';
import AcademicQualificationUpdate from './academic-qualification-update';
import AcademicQualificationDeleteDialog from './academic-qualification-delete-dialog';

const AcademicQualificationRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<AcademicQualification />} />
    <Route path="new" element={<AcademicQualificationUpdate />} />
    <Route path=":id">
      <Route index element={<AcademicQualificationDetail />} />
      <Route path="edit" element={<AcademicQualificationUpdate />} />
      <Route path="delete" element={<AcademicQualificationDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default AcademicQualificationRoutes;
