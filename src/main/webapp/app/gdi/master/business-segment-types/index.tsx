import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import BusinessSegmentTypes from './business-segment-types';
import BusinessSegmentTypesDetail from './business-segment-types-detail';
import BusinessSegmentTypesUpdate from './business-segment-types-update';
import BusinessSegmentTypesDeleteDialog from './business-segment-types-delete-dialog';

const BusinessSegmentTypesRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<BusinessSegmentTypes />} />
    <Route path="new" element={<BusinessSegmentTypesUpdate />} />
    <Route path=":id">
      <Route index element={<BusinessSegmentTypesDetail />} />
      <Route path="edit" element={<BusinessSegmentTypesUpdate />} />
      <Route path="delete" element={<BusinessSegmentTypesDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default BusinessSegmentTypesRoutes;
