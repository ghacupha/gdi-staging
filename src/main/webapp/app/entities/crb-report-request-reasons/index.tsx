import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CrbReportRequestReasons from './crb-report-request-reasons';
import CrbReportRequestReasonsDetail from './crb-report-request-reasons-detail';
import CrbReportRequestReasonsUpdate from './crb-report-request-reasons-update';
import CrbReportRequestReasonsDeleteDialog from './crb-report-request-reasons-delete-dialog';

const CrbReportRequestReasonsRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CrbReportRequestReasons />} />
    <Route path="new" element={<CrbReportRequestReasonsUpdate />} />
    <Route path=":id">
      <Route index element={<CrbReportRequestReasonsDetail />} />
      <Route path="edit" element={<CrbReportRequestReasonsUpdate />} />
      <Route path="delete" element={<CrbReportRequestReasonsDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CrbReportRequestReasonsRoutes;
