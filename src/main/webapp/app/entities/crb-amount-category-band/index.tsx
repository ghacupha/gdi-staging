import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CrbAmountCategoryBand from './crb-amount-category-band';
import CrbAmountCategoryBandDetail from './crb-amount-category-band-detail';
import CrbAmountCategoryBandUpdate from './crb-amount-category-band-update';
import CrbAmountCategoryBandDeleteDialog from './crb-amount-category-band-delete-dialog';

const CrbAmountCategoryBandRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CrbAmountCategoryBand />} />
    <Route path="new" element={<CrbAmountCategoryBandUpdate />} />
    <Route path=":id">
      <Route index element={<CrbAmountCategoryBandDetail />} />
      <Route path="edit" element={<CrbAmountCategoryBandUpdate />} />
      <Route path="delete" element={<CrbAmountCategoryBandDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CrbAmountCategoryBandRoutes;
