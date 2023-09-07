import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import IsoCountryCode from './iso-country-code';
import IsoCountryCodeDetail from './iso-country-code-detail';
import IsoCountryCodeUpdate from './iso-country-code-update';
import IsoCountryCodeDeleteDialog from './iso-country-code-delete-dialog';

const IsoCountryCodeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<IsoCountryCode />} />
    <Route path="new" element={<IsoCountryCodeUpdate />} />
    <Route path=":id">
      <Route index element={<IsoCountryCodeDetail />} />
      <Route path="edit" element={<IsoCountryCodeUpdate />} />
      <Route path="delete" element={<IsoCountryCodeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default IsoCountryCodeRoutes;
