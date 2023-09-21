import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CrbRecordFileType from './crb-record-file-type';
import CrbRecordFileTypeDetail from './crb-record-file-type-detail';
import CrbRecordFileTypeUpdate from './crb-record-file-type-update';
import CrbRecordFileTypeDeleteDialog from './crb-record-file-type-delete-dialog';

const CrbRecordFileTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CrbRecordFileType />} />
    <Route path="new" element={<CrbRecordFileTypeUpdate />} />
    <Route path=":id">
      <Route index element={<CrbRecordFileTypeDetail />} />
      <Route path="edit" element={<CrbRecordFileTypeUpdate />} />
      <Route path="delete" element={<CrbRecordFileTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CrbRecordFileTypeRoutes;
