import { IGdiMasterDataIndex } from 'app/shared/model/gdi-master-data-index.model';
import { UpdateFrequencyTypes } from 'app/shared/model/enumerations/update-frequency-types.model';
import { DatasetBehaviorTypes } from 'app/shared/model/enumerations/dataset-behavior-types.model';

export interface IGdiTransactionDataIndex {
  id?: number;
  datasetName?: string;
  databaseName?: string;
  updateFrequency?: UpdateFrequencyTypes;
  datasetBehavior?: DatasetBehaviorTypes;
  minimumDatarowsPerRequest?: number | null;
  maximumDataRowsPerRequest?: number | null;
  datasetDescription?: string | null;
  dataTemplateContentType?: string | null;
  dataTemplate?: string | null;
  masterDataItems?: IGdiMasterDataIndex[] | null;
}

export const defaultValue: Readonly<IGdiTransactionDataIndex> = {};
