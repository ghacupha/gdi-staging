import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CrbAgingBands from './crb-aging-bands';
import CrbAgingBandsDetail from './crb-aging-bands-detail';
import CrbAgingBandsUpdate from './crb-aging-bands-update';
import CrbAgingBandsDeleteDialog from './crb-aging-bands-delete-dialog';

const CrbAgingBandsRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CrbAgingBands />} />
    <Route path="new" element={<CrbAgingBandsUpdate />} />
    <Route path=":id">
      <Route index element={<CrbAgingBandsDetail />} />
      <Route path="edit" element={<CrbAgingBandsUpdate />} />
      <Route path="delete" element={<CrbAgingBandsDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CrbAgingBandsRoutes;
