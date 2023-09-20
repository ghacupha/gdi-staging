import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CrbSubscriptionStatusTypeCode from './crb-subscription-status-type-code';
import CrbSubscriptionStatusTypeCodeDetail from './crb-subscription-status-type-code-detail';
import CrbSubscriptionStatusTypeCodeUpdate from './crb-subscription-status-type-code-update';
import CrbSubscriptionStatusTypeCodeDeleteDialog from './crb-subscription-status-type-code-delete-dialog';

const CrbSubscriptionStatusTypeCodeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CrbSubscriptionStatusTypeCode />} />
    <Route path="new" element={<CrbSubscriptionStatusTypeCodeUpdate />} />
    <Route path=":id">
      <Route index element={<CrbSubscriptionStatusTypeCodeDetail />} />
      <Route path="edit" element={<CrbSubscriptionStatusTypeCodeUpdate />} />
      <Route path="delete" element={<CrbSubscriptionStatusTypeCodeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CrbSubscriptionStatusTypeCodeRoutes;
