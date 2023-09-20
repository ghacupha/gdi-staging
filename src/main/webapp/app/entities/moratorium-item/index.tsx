import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import MoratoriumItem from './moratorium-item';
import MoratoriumItemDetail from './moratorium-item-detail';
import MoratoriumItemUpdate from './moratorium-item-update';
import MoratoriumItemDeleteDialog from './moratorium-item-delete-dialog';

const MoratoriumItemRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<MoratoriumItem />} />
    <Route path="new" element={<MoratoriumItemUpdate />} />
    <Route path=":id">
      <Route index element={<MoratoriumItemDetail />} />
      <Route path="edit" element={<MoratoriumItemUpdate />} />
      <Route path="delete" element={<MoratoriumItemDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default MoratoriumItemRoutes;
