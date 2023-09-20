import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import FxReceiptPurposeType from './fx-receipt-purpose-type';
import FxReceiptPurposeTypeDetail from './fx-receipt-purpose-type-detail';
import FxReceiptPurposeTypeUpdate from './fx-receipt-purpose-type-update';
import FxReceiptPurposeTypeDeleteDialog from './fx-receipt-purpose-type-delete-dialog';

const FxReceiptPurposeTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<FxReceiptPurposeType />} />
    <Route path="new" element={<FxReceiptPurposeTypeUpdate />} />
    <Route path=":id">
      <Route index element={<FxReceiptPurposeTypeDetail />} />
      <Route path="edit" element={<FxReceiptPurposeTypeUpdate />} />
      <Route path="delete" element={<FxReceiptPurposeTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default FxReceiptPurposeTypeRoutes;
