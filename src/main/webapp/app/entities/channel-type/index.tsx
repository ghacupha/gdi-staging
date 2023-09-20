import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import ChannelType from './channel-type';
import ChannelTypeDetail from './channel-type-detail';
import ChannelTypeUpdate from './channel-type-update';
import ChannelTypeDeleteDialog from './channel-type-delete-dialog';

const ChannelTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<ChannelType />} />
    <Route path="new" element={<ChannelTypeUpdate />} />
    <Route path=":id">
      <Route index element={<ChannelTypeDetail />} />
      <Route path="edit" element={<ChannelTypeUpdate />} />
      <Route path="delete" element={<ChannelTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default ChannelTypeRoutes;
