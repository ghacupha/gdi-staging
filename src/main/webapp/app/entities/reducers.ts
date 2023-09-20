import placeholder from 'app/entities/service/placeholder/placeholder.reducer';
import bankBranchCode from 'app/entities/standards/bank-branch-code/bank-branch-code.reducer';
import outletStatus from 'app/entities/outlet-status/outlet-status.reducer';
import outletType from 'app/entities/outlet-type/outlet-type.reducer';
import countyCode from 'app/entities/standards/county-code/county-code.reducer';
import serviceOutlet from 'app/entities/standards/service-outlet/service-outlet.reducer';
import customerIDDocumentType from 'app/entities/standards/customer-id-document-type/customer-id-document-type.reducer';
import institutionCode from 'app/entities/institution-code/institution-code.reducer';
import mfbBranchCode from 'app/entities/mfb-branch-code/mfb-branch-code.reducer';
import isoCountryCode from 'app/entities/iso-country-code/iso-country-code.reducer';
import subCountyCode from 'app/entities/sub-county-code/sub-county-code.reducer';
import universallyUniqueMapping from 'app/entities/service/universally-unique-mapping/universally-unique-mapping.reducer';
import legalStatus from 'app/entities/legal-status/legal-status.reducer';
import insiderCategoryTypes from 'app/entities/insider-category-types/insider-category-types.reducer';
import genderType from 'app/entities/gender-type/gender-type.reducer';
import institutionContactDetails from 'app/entities/institution-contact-details/institution-contact-details.reducer';
import isicEconomicActivity from 'app/entities/isic-economic-activity/isic-economic-activity.reducer';
import institutionStatusType from 'app/entities/institution-status-type/institution-status-type.reducer';
import snaSectorCode from 'app/entities/sna-sector-code/sna-sector-code.reducer';
import businessSegmentTypes from 'app/entities/business-segment-types/business-segment-types.reducer';
import isoCurrencyCode from 'app/entities/iso-currency-code/iso-currency-code.reducer';
import partyRelationType from 'app/entities/party-relation-type/party-relation-type.reducer';
import contractStatus from 'app/entities/contract-status/contract-status.reducer';
import accountType from 'app/entities/account-type/account-type.reducer';
import accountStatusType from 'app/entities/account-status-type/account-status-type.reducer';
import accountOwnershipType from 'app/entities/account-ownership-type/account-ownership-type.reducer';
import loanProductType from 'app/entities/loan-product-type/loan-product-type.reducer';
import loanPerformanceClassification from 'app/entities/loan-performance-classification/loan-performance-classification.reducer';
import chartOfAccountsCode from 'app/entities/chart-of-accounts-code/chart-of-accounts-code.reducer';
import loanRepaymentFrequency from 'app/entities/loan-repayment-frequency/loan-repayment-frequency.reducer';
import glMapping from 'app/entities/gl-mapping/gl-mapping.reducer';
import moratoriumItem from 'app/entities/moratorium-item/moratorium-item.reducer';
import collateralType from 'app/entities/collateral-type/collateral-type.reducer';
import loanApplicationType from 'app/entities/loan-application-type/loan-application-type.reducer';
import loanApplicationStatus from 'app/entities/loan-application-status/loan-application-status.reducer';
import loanRestructureItem from 'app/entities/loan-restructure-item/loan-restructure-item.reducer';
import loanDeclineReason from 'app/entities/loan-decline-reason/loan-decline-reason.reducer';
import loanRestructureFlag from 'app/entities/loan-restructure-flag/loan-restructure-flag.reducer';
import cardTypes from 'app/entities/card-types/card-types.reducer';
import cardBrandType from 'app/entities/card-brand-type/card-brand-type.reducer';
import cardStatusFlag from 'app/entities/card-status-flag/card-status-flag.reducer';
import cardCharges from 'app/entities/card-charges/card-charges.reducer';
import cardCategoryType from 'app/entities/card-category-type/card-category-type.reducer';
import cardClassType from 'app/entities/card-class-type/card-class-type.reducer';
import cardPerformanceFlag from 'app/entities/card-performance-flag/card-performance-flag.reducer';
import terminalFunctions from 'app/entities/terminal-functions/terminal-functions.reducer';
import terminalTypes from 'app/entities/terminal-types/terminal-types.reducer';
import customerComplaintStatusType from 'app/entities/customer-complaint-status-type/customer-complaint-status-type.reducer';
import channelType from 'app/entities/channel-type/channel-type.reducer';
import fxCustomerType from 'app/entities/fx-customer-type/fx-customer-type.reducer';
import fxTransactionType from 'app/entities/fx-transaction-type/fx-transaction-type.reducer';
import fxTransactionRateType from 'app/entities/fx-transaction-rate-type/fx-transaction-rate-type.reducer';
import fxRateType from 'app/entities/fx-rate-type/fx-rate-type.reducer';
import fxTransactionChannelType from 'app/entities/fx-transaction-channel-type/fx-transaction-channel-type.reducer';
import fxReceiptPurposeType from 'app/entities/fx-receipt-purpose-type/fx-receipt-purpose-type.reducer';
import fraudType from 'app/entities/fraud-type/fraud-type.reducer';
import fraudCategoryFlag from 'app/entities/fraud-category-flag/fraud-category-flag.reducer';
import shareholderType from 'app/entities/shareholder-type/shareholder-type.reducer';
import merchantType from 'app/entities/merchant-type/merchant-type.reducer';
import cardFraudIncidentCategory from 'app/entities/card-fraud-incident-category/card-fraud-incident-category.reducer';
import academicQualification from 'app/entities/academic-qualification/academic-qualification.reducer';
import professionalQualification from 'app/entities/professional-qualification/professional-qualification.reducer';
import employmentTerms from 'app/entities/employment-terms/employment-terms.reducer';
import committeeType from 'app/entities/committee-type/committee-type.reducer';
import executiveCategoryType from 'app/entities/executive-category-type/executive-category-type.reducer';
import departmentType from 'app/entities/department-type/department-type.reducer';
import shareHoldingFlag from 'app/entities/share-holding-flag/share-holding-flag.reducer';
import anticipatedMaturityPeriood from 'app/entities/anticipated-maturity-periood/anticipated-maturity-periood.reducer';
import interestCalcMethod from 'app/entities/interest-calc-method/interest-calc-method.reducer';
import securityType from 'app/entities/security-type/security-type.reducer';
import securityTenure from 'app/entities/security-tenure/security-tenure.reducer';
import financialDerivativeTypeCode from 'app/entities/financial-derivative-type-code/financial-derivative-type-code.reducer';
import securityClassificationType from 'app/entities/security-classification-type/security-classification-type.reducer';
import derivativeSubType from 'app/entities/derivative-sub-type/derivative-sub-type.reducer';
import derivativeUnderlyingAsset from 'app/entities/derivative-underlying-asset/derivative-underlying-asset.reducer';
import currencyAuthenticityFlag from 'app/entities/currency-authenticity-flag/currency-authenticity-flag.reducer';
import kenyanCurrencyDenomination from 'app/entities/kenyan-currency-denomination/kenyan-currency-denomination.reducer';
import currencyServiceabilityFlag from 'app/entities/currency-serviceability-flag/currency-serviceability-flag.reducer';
import remittanceFlag from 'app/entities/remittance-flag/remittance-flag.reducer';
import sourcesOfFundsTypeCode from 'app/entities/sources-of-funds-type-code/sources-of-funds-type-code.reducer';
import sourceRemittancePurposeType from 'app/entities/source-remittance-purpose-type/source-remittance-purpose-type.reducer';
import staffCurrentEmploymentStatus from 'app/entities/staff-current-employment-status/staff-current-employment-status.reducer';
import staffRoleType from 'app/entities/staff-role-type/staff-role-type.reducer';
import managementMemberType from 'app/entities/management-member-type/management-member-type.reducer';
import ultimateBeneficiaryTypes from 'app/entities/ultimate-beneficiary-types/ultimate-beneficiary-types.reducer';
import bouncedChequeCategories from 'app/entities/bounced-cheque-categories/bounced-cheque-categories.reducer';
import reasonsForBouncedCheque from 'app/entities/reasons-for-bounced-cheque/reasons-for-bounced-cheque.reducer';
import crbAccountHolderType from 'app/entities/crb-account-holder-type/crb-account-holder-type.reducer';
import crbAccountStatus from 'app/entities/crb-account-status/crb-account-status.reducer';
import crbSubmittingInstitutionCategory from 'app/entities/crb-submitting-institution-category/crb-submitting-institution-category.reducer';
import crbAmountCategoryBand from 'app/entities/crb-amount-category-band/crb-amount-category-band.reducer';
import crbReportRequestReasons from 'app/entities/crb-report-request-reasons/crb-report-request-reasons.reducer';
import crbComplaintType from 'app/entities/crb-complaint-type/crb-complaint-type.reducer';
import crbComplaintStatusType from 'app/entities/crb-complaint-status-type/crb-complaint-status-type.reducer';
import crbRecordFileType from 'app/entities/crb-record-file-type/crb-record-file-type.reducer';
import crbCreditApplicationStatus from 'app/entities/crb-credit-application-status/crb-credit-application-status.reducer';
import crbCustomerType from 'app/entities/crb-customer-type/crb-customer-type.reducer';
import crbSubscriptionStatusTypeCode from 'app/entities/crb-subscription-status-type-code/crb-subscription-status-type-code.reducer';
import crbNatureOfInformation from 'app/entities/crb-nature-of-information/crb-nature-of-information.reducer';
import crbSourceOfInformationType from 'app/entities/crb-source-of-information-type/crb-source-of-information-type.reducer';
import crbProductServiceFeeType from 'app/entities/crb-product-service-fee-type/crb-product-service-fee-type.reducer';
import crbFileTransmissionStatus from 'app/entities/crb-file-transmission-status/crb-file-transmission-status.reducer';
import crbAgentServiceType from 'app/entities/crb-agent-service-type/crb-agent-service-type.reducer';
import crbCreditFacilityType from 'app/entities/crb-credit-facility-type/crb-credit-facility-type.reducer';
import crbGlCode from 'app/entities/crb-gl-code/crb-gl-code.reducer';
import crbAgingBands from 'app/entities/crb-aging-bands/crb-aging-bands.reducer';
import crbReportViewBand from 'app/entities/crb-report-view-band/crb-report-view-band.reducer';
import crbDataSubmittingInstitutions from 'app/entities/crb-data-submitting-institutions/crb-data-submitting-institutions.reducer';
import bankTransactionType from 'app/entities/bank-transaction-type/bank-transaction-type.reducer';
import agriculturalEnterpriseActivityType from 'app/entities/agricultural-enterprise-activity-type/agricultural-enterprise-activity-type.reducer';
import interbankSectorCode from 'app/entities/interbank-sector-code/interbank-sector-code.reducer';
import ultimateBeneficiaryCategory from 'app/entities/ultimate-beneficiary-category/ultimate-beneficiary-category.reducer';
import issuersOfSecurities from 'app/entities/issuers-of-securities/issuers-of-securities.reducer';
import loanAccountCategory from 'app/entities/loan-account-category/loan-account-category.reducer';
import counterpartyType from 'app/entities/counterparty-type/counterparty-type.reducer';
import counterPartyDealType from 'app/entities/counter-party-deal-type/counter-party-deal-type.reducer';
import counterPartyCategory from 'app/entities/counter-party-category/counter-party-category.reducer';
import acquiringIssuingFlag from 'app/entities/acquiring-issuing-flag/acquiring-issuing-flag.reducer';
import creditCardOwnership from 'app/entities/credit-card-ownership/credit-card-ownership.reducer';
import categoryOfSecurity from 'app/entities/category-of-security/category-of-security.reducer';
import natureOfCustomerComplaints from 'app/entities/nature-of-customer-complaints/nature-of-customer-complaints.reducer';
import settlementCurrency from 'app/entities/settlement-currency/settlement-currency.reducer';
import customerType from 'app/entities/customer-type/customer-type.reducer';
import gdiMasterDataIndex from 'app/entities/gdi-master-data-index/gdi-master-data-index.reducer';
import gdiTransactionDataIndex from 'app/entities/gdi-transaction-data-index/gdi-transaction-data-index.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  placeholder,
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
  universallyUniqueMapping,
  legalStatus,
  insiderCategoryTypes,
  genderType,
  institutionContactDetails,
  isicEconomicActivity,
  institutionStatusType,
  snaSectorCode,
  businessSegmentTypes,
  isoCurrencyCode,
  partyRelationType,
  contractStatus,
  accountType,
  accountStatusType,
  accountOwnershipType,
  loanProductType,
  loanPerformanceClassification,
  chartOfAccountsCode,
  loanRepaymentFrequency,
  glMapping,
  moratoriumItem,
  collateralType,
  loanApplicationType,
  loanApplicationStatus,
  loanRestructureItem,
  loanDeclineReason,
  loanRestructureFlag,
  cardTypes,
  cardBrandType,
  cardStatusFlag,
  cardCharges,
  cardCategoryType,
  cardClassType,
  cardPerformanceFlag,
  terminalFunctions,
  terminalTypes,
  customerComplaintStatusType,
  channelType,
  fxCustomerType,
  fxTransactionType,
  fxTransactionRateType,
  fxRateType,
  fxTransactionChannelType,
  fxReceiptPurposeType,
  fraudType,
  fraudCategoryFlag,
  shareholderType,
  merchantType,
  cardFraudIncidentCategory,
  academicQualification,
  professionalQualification,
  employmentTerms,
  committeeType,
  executiveCategoryType,
  departmentType,
  shareHoldingFlag,
  anticipatedMaturityPeriood,
  interestCalcMethod,
  securityType,
  securityTenure,
  financialDerivativeTypeCode,
  securityClassificationType,
  derivativeSubType,
  derivativeUnderlyingAsset,
  currencyAuthenticityFlag,
  kenyanCurrencyDenomination,
  currencyServiceabilityFlag,
  remittanceFlag,
  sourcesOfFundsTypeCode,
  sourceRemittancePurposeType,
  staffCurrentEmploymentStatus,
  staffRoleType,
  managementMemberType,
  ultimateBeneficiaryTypes,
  bouncedChequeCategories,
  reasonsForBouncedCheque,
  crbAccountHolderType,
  crbAccountStatus,
  crbSubmittingInstitutionCategory,
  crbAmountCategoryBand,
  crbReportRequestReasons,
  crbComplaintType,
  crbComplaintStatusType,
  crbRecordFileType,
  crbCreditApplicationStatus,
  crbCustomerType,
  crbSubscriptionStatusTypeCode,
  crbNatureOfInformation,
  crbSourceOfInformationType,
  crbProductServiceFeeType,
  crbFileTransmissionStatus,
  crbAgentServiceType,
  crbCreditFacilityType,
  crbGlCode,
  crbAgingBands,
  crbReportViewBand,
  crbDataSubmittingInstitutions,
  bankTransactionType,
  agriculturalEnterpriseActivityType,
  interbankSectorCode,
  ultimateBeneficiaryCategory,
  issuersOfSecurities,
  loanAccountCategory,
  counterpartyType,
  counterPartyDealType,
  counterPartyCategory,
  acquiringIssuingFlag,
  creditCardOwnership,
  categoryOfSecurity,
  natureOfCustomerComplaints,
  settlementCurrency,
  customerType,
  gdiMasterDataIndex,
  gdiTransactionDataIndex,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;
