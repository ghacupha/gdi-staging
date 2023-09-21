import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import FxTransactionChannelType from './fx-transaction-channel-type';
import FxTransactionChannelTypeDetail from './fx-transaction-channel-type-detail';
import FxTransactionChannelTypeUpdate from './fx-transaction-channel-type-update';
import FxTransactionChannelTypeDeleteDialog from './fx-transaction-channel-type-delete-dialog';

const FxTransactionChannelTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<FxTransactionChannelType />} />
    <Route path="new" element={<FxTransactionChannelTypeUpdate />} />
    <Route path=":id">
      <Route index element={<FxTransactionChannelTypeDetail />} />
      <Route path="edit" element={<FxTransactionChannelTypeUpdate />} />
      <Route path="delete" element={<FxTransactionChannelTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default FxTransactionChannelTypeRoutes;
