import placeholder from 'app/entities/erpService/placeholder/placeholder.reducer';
import universallyUniqueMapping from 'app/entities/universally-unique-mapping/universally-unique-mapping.reducer';
import bankBranchCode from 'app/entities/bank-branch-code/bank-branch-code.reducer';
import outletStatus from 'app/entities/outlet-status/outlet-status.reducer';
import outletType from 'app/entities/outlet-type/outlet-type.reducer';
import countyCode from 'app/entities/county-code/county-code.reducer';
import serviceOutlet from 'app/entities/service-outlet/service-outlet.reducer';
import customerIDDocumentType from 'app/entities/customer-id-document-type/customer-id-document-type.reducer';
import institutionCode from 'app/entities/institution-code/institution-code.reducer';
import mfbBranchCode from 'app/entities/mfb-branch-code/mfb-branch-code.reducer';
import isoCountryCode from 'app/entities/iso-country-code/iso-country-code.reducer';
import subCountyCode from 'app/entities/sub-county-code/sub-county-code.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  placeholder,
  universallyUniqueMapping,
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

export default entitiesReducers;
