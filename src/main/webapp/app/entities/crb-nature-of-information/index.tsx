import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CrbNatureOfInformation from './crb-nature-of-information';
import CrbNatureOfInformationDetail from './crb-nature-of-information-detail';
import CrbNatureOfInformationUpdate from './crb-nature-of-information-update';
import CrbNatureOfInformationDeleteDialog from './crb-nature-of-information-delete-dialog';

const CrbNatureOfInformationRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CrbNatureOfInformation />} />
    <Route path="new" element={<CrbNatureOfInformationUpdate />} />
    <Route path=":id">
      <Route index element={<CrbNatureOfInformationDetail />} />
      <Route path="edit" element={<CrbNatureOfInformationUpdate />} />
      <Route path="delete" element={<CrbNatureOfInformationDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CrbNatureOfInformationRoutes;
