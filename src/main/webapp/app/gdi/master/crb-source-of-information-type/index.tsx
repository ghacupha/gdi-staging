import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CrbSourceOfInformationType from './crb-source-of-information-type';
import CrbSourceOfInformationTypeDetail from './crb-source-of-information-type-detail';
import CrbSourceOfInformationTypeUpdate from './crb-source-of-information-type-update';
import CrbSourceOfInformationTypeDeleteDialog from './crb-source-of-information-type-delete-dialog';

const CrbSourceOfInformationTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CrbSourceOfInformationType />} />
    <Route path="new" element={<CrbSourceOfInformationTypeUpdate />} />
    <Route path=":id">
      <Route index element={<CrbSourceOfInformationTypeDetail />} />
      <Route path="edit" element={<CrbSourceOfInformationTypeUpdate />} />
      <Route path="delete" element={<CrbSourceOfInformationTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CrbSourceOfInformationTypeRoutes;
