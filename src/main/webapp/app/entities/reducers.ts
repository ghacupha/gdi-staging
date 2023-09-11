import placeholder from 'app/entities/service/placeholder/placeholder.reducer';
import bankBranchCode from 'app/entities/standards/bank-branch-code/bank-branch-code.reducer';
import outletStatus from 'app/entities/standards/outlet-status/outlet-status.reducer';
import outletType from 'app/entities/standards/outlet-type/outlet-type.reducer';
import countyCode from 'app/entities/standards/county-code/county-code.reducer';
import serviceOutlet from 'app/entities/standards/service-outlet/service-outlet.reducer';
import customerIDDocumentType from 'app/entities/standards/customer-id-document-type/customer-id-document-type.reducer';
import institutionCode from 'app/entities/standards/institution-code/institution-code.reducer';
import mfbBranchCode from 'app/entities/standards/mfb-branch-code/mfb-branch-code.reducer';
import isoCountryCode from 'app/entities/standards/iso-country-code/iso-country-code.reducer';
import subCountyCode from 'app/entities/standards/sub-county-code/sub-county-code.reducer';
import universallyUniqueMapping from 'app/entities/service/universally-unique-mapping/universally-unique-mapping.reducer';
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
