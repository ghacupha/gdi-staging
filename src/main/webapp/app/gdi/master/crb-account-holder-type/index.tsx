import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CrbAccountHolderType from './crb-account-holder-type';
import CrbAccountHolderTypeDetail from './crb-account-holder-type-detail';
import CrbAccountHolderTypeUpdate from './crb-account-holder-type-update';
import CrbAccountHolderTypeDeleteDialog from './crb-account-holder-type-delete-dialog';

const CrbAccountHolderTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CrbAccountHolderType />} />
    <Route path="new" element={<CrbAccountHolderTypeUpdate />} />
    <Route path=":id">
      <Route index element={<CrbAccountHolderTypeDetail />} />
      <Route path="edit" element={<CrbAccountHolderTypeUpdate />} />
      <Route path="delete" element={<CrbAccountHolderTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CrbAccountHolderTypeRoutes;
