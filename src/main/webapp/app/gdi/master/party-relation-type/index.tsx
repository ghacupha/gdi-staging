import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import PartyRelationType from './party-relation-type';
import PartyRelationTypeDetail from './party-relation-type-detail';
import PartyRelationTypeUpdate from './party-relation-type-update';
import PartyRelationTypeDeleteDialog from './party-relation-type-delete-dialog';

const PartyRelationTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<PartyRelationType />} />
    <Route path="new" element={<PartyRelationTypeUpdate />} />
    <Route path=":id">
      <Route index element={<PartyRelationTypeDetail />} />
      <Route path="edit" element={<PartyRelationTypeUpdate />} />
      <Route path="delete" element={<PartyRelationTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default PartyRelationTypeRoutes;
