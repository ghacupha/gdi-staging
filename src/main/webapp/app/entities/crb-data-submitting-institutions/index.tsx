import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CrbDataSubmittingInstitutions from './crb-data-submitting-institutions';
import CrbDataSubmittingInstitutionsDetail from './crb-data-submitting-institutions-detail';
import CrbDataSubmittingInstitutionsUpdate from './crb-data-submitting-institutions-update';
import CrbDataSubmittingInstitutionsDeleteDialog from './crb-data-submitting-institutions-delete-dialog';

const CrbDataSubmittingInstitutionsRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CrbDataSubmittingInstitutions />} />
    <Route path="new" element={<CrbDataSubmittingInstitutionsUpdate />} />
    <Route path=":id">
      <Route index element={<CrbDataSubmittingInstitutionsDetail />} />
      <Route path="edit" element={<CrbDataSubmittingInstitutionsUpdate />} />
      <Route path="delete" element={<CrbDataSubmittingInstitutionsDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CrbDataSubmittingInstitutionsRoutes;
