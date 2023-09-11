import bankBranchCode from 'app/gdi/standards/bank-branch-code/bank-branch-code.reducer';
import outletStatus from 'app/gdi/standards/outlet-status/outlet-status.reducer';
import outletType from 'app/gdi/standards/outlet-type/outlet-type.reducer';
import countyCode from 'app/gdi/standards/county-code/county-code.reducer';
import serviceOutlet from 'app/gdi/standards/service-outlet/service-outlet.reducer';
import customerIDDocumentType from 'app/gdi/standards/customer-id-document-type/customer-id-document-type.reducer';
import institutionCode from 'app/gdi/standards/institution-code/institution-code.reducer';
import mfbBranchCode from 'app/gdi/standards/mfb-branch-code/mfb-branch-code.reducer';
import isoCountryCode from 'app/gdi/standards/iso-country-code/iso-country-code.reducer';
import subCountyCode from 'app/gdi/standards/sub-county-code/sub-county-code.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const standardEntitiesReducers = {
  bankBranchCode,
  outletStatus,
  outletType,
  countyCode,
  serviceOutlet,
  customerIDDocumentType,
  institutionCode,
  mfbBranchCode,
  isoCountryCode,
  subCountyCode,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default standardEntitiesReducers;
