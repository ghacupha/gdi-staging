import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import InstitutionContactDetails from './institution-contact-details';
import InstitutionContactDetailsDetail from './institution-contact-details-detail';
import InstitutionContactDetailsUpdate from './institution-contact-details-update';
import InstitutionContactDetailsDeleteDialog from './institution-contact-details-delete-dialog';

const InstitutionContactDetailsRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<InstitutionContactDetails />} />
    <Route path="new" element={<InstitutionContactDetailsUpdate />} />
    <Route path=":id">
      <Route index element={<InstitutionContactDetailsDetail />} />
      <Route path="edit" element={<InstitutionContactDetailsUpdate />} />
      <Route path="delete" element={<InstitutionContactDetailsDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default InstitutionContactDetailsRoutes;
