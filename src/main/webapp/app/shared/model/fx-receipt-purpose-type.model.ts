export interface IFxReceiptPurposeType {
  id?: number;
  itemCode?: string;
  attribute1ReceiptPaymentPurposeCode?: string | null;
  attribute1ReceiptPaymentPurposeType?: string | null;
  attribute2ReceiptPaymentPurposeCode?: string | null;
  attribute2ReceiptPaymentPurposeDescription?: string | null;
  attribute3ReceiptPaymentPurposeCode?: string | null;
  attribute3ReceiptPaymentPurposeDescription?: string | null;
  attribute4ReceiptPaymentPurposeCode?: string | null;
  attribute4ReceiptPaymentPurposeDescription?: string | null;
  attribute5ReceiptPaymentPurposeCode?: string | null;
  attribute5ReceiptPaymentPurposeDescription?: string | null;
  lastChild?: string | null;
}

export const defaultValue: Readonly<IFxReceiptPurposeType> = {};
