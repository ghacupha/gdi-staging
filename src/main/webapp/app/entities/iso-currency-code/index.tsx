import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import IsoCurrencyCode from './iso-currency-code';
import IsoCurrencyCodeDetail from './iso-currency-code-detail';
import IsoCurrencyCodeUpdate from './iso-currency-code-update';
import IsoCurrencyCodeDeleteDialog from './iso-currency-code-delete-dialog';

const IsoCurrencyCodeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<IsoCurrencyCode />} />
    <Route path="new" element={<IsoCurrencyCodeUpdate />} />
    <Route path=":id">
      <Route index element={<IsoCurrencyCodeDetail />} />
      <Route path="edit" element={<IsoCurrencyCodeUpdate />} />
      <Route path="delete" element={<IsoCurrencyCodeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default IsoCurrencyCodeRoutes;
