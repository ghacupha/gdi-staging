import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CrbFileTransmissionStatus from './crb-file-transmission-status';
import CrbFileTransmissionStatusDetail from './crb-file-transmission-status-detail';
import CrbFileTransmissionStatusUpdate from './crb-file-transmission-status-update';
import CrbFileTransmissionStatusDeleteDialog from './crb-file-transmission-status-delete-dialog';

const CrbFileTransmissionStatusRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CrbFileTransmissionStatus />} />
    <Route path="new" element={<CrbFileTransmissionStatusUpdate />} />
    <Route path=":id">
      <Route index element={<CrbFileTransmissionStatusDetail />} />
      <Route path="edit" element={<CrbFileTransmissionStatusUpdate />} />
      <Route path="delete" element={<CrbFileTransmissionStatusDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CrbFileTransmissionStatusRoutes;
