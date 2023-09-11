import { IBankBranchCode } from 'app/shared/model/standards/bank-branch-code.model';
import { IOutletStatus } from 'app/shared/model/standards/outlet-status.model';
import { IOutletType } from 'app/shared/model/standards/outlet-type.model';
import { ICountyCode } from 'app/shared/model/standards/county-code.model';
import { IServiceOutlet } from 'app/shared/model/standards/service-outlet.model';
import { ICustomerIDDocumentType } from 'app/shared/model/standards/customer-id-document-type.model';
import { IInstitutionCode } from 'app/shared/model/standards/institution-code.model';
import { IMfbBranchCode } from 'app/shared/model/standards/mfb-branch-code.model';
import { IIsoCountryCode } from 'app/shared/model/standards/iso-country-code.model';
import { ISubCountyCode } from 'app/shared/model/standards/sub-county-code.model';
import { IUniversallyUniqueMapping } from 'app/shared/model/service/universally-unique-mapping.model';

export interface IPlaceholder {
  id?: number;
  description?: string;
  token?: string | null;
  containingPlaceholder?: IPlaceholder | null;
  bankBranchCodes?: IBankBranchCode[] | null;
  outletStatuses?: IOutletStatus[] | null;
  outletTypes?: IOutletType[] | null;
  countyCodes?: ICountyCode[] | null;
  serviceOutlets?: IServiceOutlet[] | null;
  customerIDDocumentTypes?: ICustomerIDDocumentType[] | null;
  institutionCodes?: IInstitutionCode[] | null;
  mfbBranchCodes?: IMfbBranchCode[] | null;
  isoCountryCodes?: IIsoCountryCode[] | null;
  subCountyCodes?: ISubCountyCode[] | null;
  universallyUniqueMappings?: IUniversallyUniqueMapping[] | null;
}

export const defaultValue: Readonly<IPlaceholder> = {};
