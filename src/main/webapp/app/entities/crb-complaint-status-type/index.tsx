import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CrbComplaintStatusType from './crb-complaint-status-type';
import CrbComplaintStatusTypeDetail from './crb-complaint-status-type-detail';
import CrbComplaintStatusTypeUpdate from './crb-complaint-status-type-update';
import CrbComplaintStatusTypeDeleteDialog from './crb-complaint-status-type-delete-dialog';

const CrbComplaintStatusTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CrbComplaintStatusType />} />
    <Route path="new" element={<CrbComplaintStatusTypeUpdate />} />
    <Route path=":id">
      <Route index element={<CrbComplaintStatusTypeDetail />} />
      <Route path="edit" element={<CrbComplaintStatusTypeUpdate />} />
      <Route path="delete" element={<CrbComplaintStatusTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CrbComplaintStatusTypeRoutes;
