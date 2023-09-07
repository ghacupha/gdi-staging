import { IPlaceholder } from 'app/shared/model/erpService/placeholder.model';

export interface ICustomerIDDocumentType {
  id?: number;
  documentCode?: string;
  documentType?: string;
  documentTypeDescription?: string | null;
  placeholders?: IPlaceholder[] | null;
}

export const defaultValue: Readonly<ICustomerIDDocumentType> = {};
