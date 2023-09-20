import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CounterPartyDealType from './counter-party-deal-type';
import CounterPartyDealTypeDetail from './counter-party-deal-type-detail';
import CounterPartyDealTypeUpdate from './counter-party-deal-type-update';
import CounterPartyDealTypeDeleteDialog from './counter-party-deal-type-delete-dialog';

const CounterPartyDealTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CounterPartyDealType />} />
    <Route path="new" element={<CounterPartyDealTypeUpdate />} />
    <Route path=":id">
      <Route index element={<CounterPartyDealTypeDetail />} />
      <Route path="edit" element={<CounterPartyDealTypeUpdate />} />
      <Route path="delete" element={<CounterPartyDealTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CounterPartyDealTypeRoutes;
