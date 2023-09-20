import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import BankTransactionType from './bank-transaction-type';
import BankTransactionTypeDetail from './bank-transaction-type-detail';
import BankTransactionTypeUpdate from './bank-transaction-type-update';
import BankTransactionTypeDeleteDialog from './bank-transaction-type-delete-dialog';

const BankTransactionTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<BankTransactionType />} />
    <Route path="new" element={<BankTransactionTypeUpdate />} />
    <Route path=":id">
      <Route index element={<BankTransactionTypeDetail />} />
      <Route path="edit" element={<BankTransactionTypeUpdate />} />
      <Route path="delete" element={<BankTransactionTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default BankTransactionTypeRoutes;
