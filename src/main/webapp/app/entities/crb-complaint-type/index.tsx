import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CrbComplaintType from './crb-complaint-type';
import CrbComplaintTypeDetail from './crb-complaint-type-detail';
import CrbComplaintTypeUpdate from './crb-complaint-type-update';
import CrbComplaintTypeDeleteDialog from './crb-complaint-type-delete-dialog';

const CrbComplaintTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CrbComplaintType />} />
    <Route path="new" element={<CrbComplaintTypeUpdate />} />
    <Route path=":id">
      <Route index element={<CrbComplaintTypeDetail />} />
      <Route path="edit" element={<CrbComplaintTypeUpdate />} />
      <Route path="delete" element={<CrbComplaintTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CrbComplaintTypeRoutes;
