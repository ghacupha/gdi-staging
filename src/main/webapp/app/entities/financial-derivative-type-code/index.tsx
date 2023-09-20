import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import FinancialDerivativeTypeCode from './financial-derivative-type-code';
import FinancialDerivativeTypeCodeDetail from './financial-derivative-type-code-detail';
import FinancialDerivativeTypeCodeUpdate from './financial-derivative-type-code-update';
import FinancialDerivativeTypeCodeDeleteDialog from './financial-derivative-type-code-delete-dialog';

const FinancialDerivativeTypeCodeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<FinancialDerivativeTypeCode />} />
    <Route path="new" element={<FinancialDerivativeTypeCodeUpdate />} />
    <Route path=":id">
      <Route index element={<FinancialDerivativeTypeCodeDetail />} />
      <Route path="edit" element={<FinancialDerivativeTypeCodeUpdate />} />
      <Route path="delete" element={<FinancialDerivativeTypeCodeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default FinancialDerivativeTypeCodeRoutes;
