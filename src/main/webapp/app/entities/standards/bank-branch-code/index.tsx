import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import BankBranchCode from './bank-branch-code';
import BankBranchCodeDetail from './bank-branch-code-detail';
import BankBranchCodeUpdate from './bank-branch-code-update';
import BankBranchCodeDeleteDialog from './bank-branch-code-delete-dialog';

const BankBranchCodeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<BankBranchCode />} />
    <Route path="new" element={<BankBranchCodeUpdate />} />
    <Route path=":id">
      <Route index element={<BankBranchCodeDetail />} />
      <Route path="edit" element={<BankBranchCodeUpdate />} />
      <Route path="delete" element={<BankBranchCodeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default BankBranchCodeRoutes;
