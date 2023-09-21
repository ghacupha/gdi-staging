import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import InterestCalcMethod from './interest-calc-method';
import InterestCalcMethodDetail from './interest-calc-method-detail';
import InterestCalcMethodUpdate from './interest-calc-method-update';
import InterestCalcMethodDeleteDialog from './interest-calc-method-delete-dialog';

const InterestCalcMethodRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<InterestCalcMethod />} />
    <Route path="new" element={<InterestCalcMethodUpdate />} />
    <Route path=":id">
      <Route index element={<InterestCalcMethodDetail />} />
      <Route path="edit" element={<InterestCalcMethodUpdate />} />
      <Route path="delete" element={<InterestCalcMethodDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default InterestCalcMethodRoutes;
