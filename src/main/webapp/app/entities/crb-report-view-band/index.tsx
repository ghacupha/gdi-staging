import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CrbReportViewBand from './crb-report-view-band';
import CrbReportViewBandDetail from './crb-report-view-band-detail';
import CrbReportViewBandUpdate from './crb-report-view-band-update';
import CrbReportViewBandDeleteDialog from './crb-report-view-band-delete-dialog';

const CrbReportViewBandRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CrbReportViewBand />} />
    <Route path="new" element={<CrbReportViewBandUpdate />} />
    <Route path=":id">
      <Route index element={<CrbReportViewBandDetail />} />
      <Route path="edit" element={<CrbReportViewBandUpdate />} />
      <Route path="delete" element={<CrbReportViewBandDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CrbReportViewBandRoutes;
