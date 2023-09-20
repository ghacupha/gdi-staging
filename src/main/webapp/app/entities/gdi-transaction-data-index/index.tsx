import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import GdiTransactionDataIndex from './gdi-transaction-data-index';
import GdiTransactionDataIndexDetail from './gdi-transaction-data-index-detail';
import GdiTransactionDataIndexUpdate from './gdi-transaction-data-index-update';
import GdiTransactionDataIndexDeleteDialog from './gdi-transaction-data-index-delete-dialog';

const GdiTransactionDataIndexRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<GdiTransactionDataIndex />} />
    <Route path="new" element={<GdiTransactionDataIndexUpdate />} />
    <Route path=":id">
      <Route index element={<GdiTransactionDataIndexDetail />} />
      <Route path="edit" element={<GdiTransactionDataIndexUpdate />} />
      <Route path="delete" element={<GdiTransactionDataIndexDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default GdiTransactionDataIndexRoutes;
