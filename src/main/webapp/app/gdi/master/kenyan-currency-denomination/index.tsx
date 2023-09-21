import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import KenyanCurrencyDenomination from './kenyan-currency-denomination';
import KenyanCurrencyDenominationDetail from './kenyan-currency-denomination-detail';
import KenyanCurrencyDenominationUpdate from './kenyan-currency-denomination-update';
import KenyanCurrencyDenominationDeleteDialog from './kenyan-currency-denomination-delete-dialog';

const KenyanCurrencyDenominationRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<KenyanCurrencyDenomination />} />
    <Route path="new" element={<KenyanCurrencyDenominationUpdate />} />
    <Route path=":id">
      <Route index element={<KenyanCurrencyDenominationDetail />} />
      <Route path="edit" element={<KenyanCurrencyDenominationUpdate />} />
      <Route path="delete" element={<KenyanCurrencyDenominationDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default KenyanCurrencyDenominationRoutes;
