import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Placeholder from './service/placeholder';
import BankBranchCode from './standards/bank-branch-code';
import OutletStatus from './outlet-status';
import OutletType from './outlet-type';
import CountyCode from './standards/county-code';
import ServiceOutlet from './standards/service-outlet';
import CustomerIDDocumentType from './standards/customer-id-document-type';
import InstitutionCode from './institution-code';
import MfbBranchCode from './mfb-branch-code';
import IsoCountryCode from './iso-country-code';
import SubCountyCode from './sub-county-code';
import UniversallyUniqueMapping from './service/universally-unique-mapping';
import LegalStatus from './legal-status';
import InsiderCategoryTypes from './insider-category-types';
import GenderType from './gender-type';
import InstitutionContactDetails from './institution-contact-details';
import IsicEconomicActivity from './isic-economic-activity';
import InstitutionStatusType from './institution-status-type';
import SnaSectorCode from './sna-sector-code';
import BusinessSegmentTypes from './business-segment-types';
import IsoCurrencyCode from './iso-currency-code';
import PartyRelationType from './party-relation-type';
import ContractStatus from './contract-status';
import AccountType from './account-type';
import AccountStatusType from './account-status-type';
import AccountOwnershipType from './account-ownership-type';
import LoanProductType from './loan-product-type';
import LoanPerformanceClassification from './loan-performance-classification';
import ChartOfAccountsCode from './chart-of-accounts-code';
import LoanRepaymentFrequency from './loan-repayment-frequency';
import GlMapping from './gl-mapping';
import MoratoriumItem from './moratorium-item';
import CollateralType from './collateral-type';
import LoanApplicationType from './loan-application-type';
import LoanApplicationStatus from './loan-application-status';
import LoanRestructureItem from './loan-restructure-item';
import LoanDeclineReason from './loan-decline-reason';
import LoanRestructureFlag from './loan-restructure-flag';
import CardTypes from './card-types';
import CardBrandType from './card-brand-type';
import CardStatusFlag from './card-status-flag';
import CardCharges from './card-charges';
import CardCategoryType from './card-category-type';
import CardClassType from './card-class-type';
import CardPerformanceFlag from './card-performance-flag';
import TerminalFunctions from './terminal-functions';
import TerminalTypes from './terminal-types';
import CustomerComplaintStatusType from './customer-complaint-status-type';
import ChannelType from './channel-type';
import FxCustomerType from './fx-customer-type';
import FxTransactionType from './fx-transaction-type';
import FxTransactionRateType from './fx-transaction-rate-type';
import FxRateType from './fx-rate-type';
import FxTransactionChannelType from './fx-transaction-channel-type';
import FxReceiptPurposeType from './fx-receipt-purpose-type';
import FraudType from './fraud-type';
import FraudCategoryFlag from './fraud-category-flag';
import ShareholderType from './shareholder-type';
import MerchantType from './merchant-type';
import CardFraudIncidentCategory from './card-fraud-incident-category';
import AcademicQualification from './academic-qualification';
import ProfessionalQualification from './professional-qualification';
import EmploymentTerms from './employment-terms';
import CommitteeType from './committee-type';
import ExecutiveCategoryType from './executive-category-type';
import DepartmentType from './department-type';
import ShareHoldingFlag from './share-holding-flag';
import AnticipatedMaturityPeriood from './anticipated-maturity-periood';
import InterestCalcMethod from './interest-calc-method';
import SecurityType from './security-type';
import SecurityTenure from './security-tenure';
import FinancialDerivativeTypeCode from './financial-derivative-type-code';
import SecurityClassificationType from './security-classification-type';
import DerivativeSubType from './derivative-sub-type';
import DerivativeUnderlyingAsset from './derivative-underlying-asset';
import CurrencyAuthenticityFlag from './currency-authenticity-flag';
import KenyanCurrencyDenomination from './kenyan-currency-denomination';
import CurrencyServiceabilityFlag from './currency-serviceability-flag';
import RemittanceFlag from './remittance-flag';
import SourcesOfFundsTypeCode from './sources-of-funds-type-code';
import SourceRemittancePurposeType from './source-remittance-purpose-type';
import StaffCurrentEmploymentStatus from './staff-current-employment-status';
import StaffRoleType from './staff-role-type';
import ManagementMemberType from './management-member-type';
import UltimateBeneficiaryTypes from './ultimate-beneficiary-types';
import BouncedChequeCategories from './bounced-cheque-categories';
import ReasonsForBouncedCheque from './reasons-for-bounced-cheque';
import CrbAccountHolderType from './crb-account-holder-type';
import CrbAccountStatus from './crb-account-status';
import CrbSubmittingInstitutionCategory from './crb-submitting-institution-category';
import CrbAmountCategoryBand from './crb-amount-category-band';
import CrbReportRequestReasons from './crb-report-request-reasons';
import CrbComplaintType from './crb-complaint-type';
import CrbComplaintStatusType from './crb-complaint-status-type';
import CrbRecordFileType from './crb-record-file-type';
import CrbCreditApplicationStatus from './crb-credit-application-status';
import CrbCustomerType from './crb-customer-type';
import CrbSubscriptionStatusTypeCode from './crb-subscription-status-type-code';
import CrbNatureOfInformation from './crb-nature-of-information';
import CrbSourceOfInformationType from './crb-source-of-information-type';
import CrbProductServiceFeeType from './crb-product-service-fee-type';
import CrbFileTransmissionStatus from './crb-file-transmission-status';
import CrbAgentServiceType from './crb-agent-service-type';
import CrbCreditFacilityType from './crb-credit-facility-type';
import CrbGlCode from './crb-gl-code';
import CrbAgingBands from './crb-aging-bands';
import CrbReportViewBand from './crb-report-view-band';
import CrbDataSubmittingInstitutions from './crb-data-submitting-institutions';
import BankTransactionType from './bank-transaction-type';
import AgriculturalEnterpriseActivityType from './agricultural-enterprise-activity-type';
import InterbankSectorCode from './interbank-sector-code';
import UltimateBeneficiaryCategory from './ultimate-beneficiary-category';
import IssuersOfSecurities from './issuers-of-securities';
import LoanAccountCategory from './loan-account-category';
import CounterpartyType from './counterparty-type';
import CounterPartyDealType from './counter-party-deal-type';
import CounterPartyCategory from './counter-party-category';
import AcquiringIssuingFlag from './acquiring-issuing-flag';
import CreditCardOwnership from './credit-card-ownership';
import CategoryOfSecurity from './category-of-security';
import NatureOfCustomerComplaints from './nature-of-customer-complaints';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default () => {
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        <Route path="placeholder/*" element={<Placeholder />} />
        <Route path="bank-branch-code/*" element={<BankBranchCode />} />
        <Route path="outlet-status/*" element={<OutletStatus />} />
        <Route path="outlet-type/*" element={<OutletType />} />
        <Route path="county-code/*" element={<CountyCode />} />
        <Route path="service-outlet/*" element={<ServiceOutlet />} />
        <Route path="customer-id-document-type/*" element={<CustomerIDDocumentType />} />
        <Route path="institution-code/*" element={<InstitutionCode />} />
        <Route path="mfb-branch-code/*" element={<MfbBranchCode />} />
        <Route path="iso-country-code/*" element={<IsoCountryCode />} />
        <Route path="sub-county-code/*" element={<SubCountyCode />} />
        <Route path="universally-unique-mapping/*" element={<UniversallyUniqueMapping />} />
        <Route path="legal-status/*" element={<LegalStatus />} />
        <Route path="insider-category-types/*" element={<InsiderCategoryTypes />} />
        <Route path="gender-type/*" element={<GenderType />} />
        <Route path="institution-contact-details/*" element={<InstitutionContactDetails />} />
        <Route path="isic-economic-activity/*" element={<IsicEconomicActivity />} />
        <Route path="institution-status-type/*" element={<InstitutionStatusType />} />
        <Route path="sna-sector-code/*" element={<SnaSectorCode />} />
        <Route path="business-segment-types/*" element={<BusinessSegmentTypes />} />
        <Route path="iso-currency-code/*" element={<IsoCurrencyCode />} />
        <Route path="party-relation-type/*" element={<PartyRelationType />} />
        <Route path="contract-status/*" element={<ContractStatus />} />
        <Route path="account-type/*" element={<AccountType />} />
        <Route path="account-status-type/*" element={<AccountStatusType />} />
        <Route path="account-ownership-type/*" element={<AccountOwnershipType />} />
        <Route path="loan-product-type/*" element={<LoanProductType />} />
        <Route path="loan-performance-classification/*" element={<LoanPerformanceClassification />} />
        <Route path="chart-of-accounts-code/*" element={<ChartOfAccountsCode />} />
        <Route path="loan-repayment-frequency/*" element={<LoanRepaymentFrequency />} />
        <Route path="gl-mapping/*" element={<GlMapping />} />
        <Route path="moratorium-item/*" element={<MoratoriumItem />} />
        <Route path="collateral-type/*" element={<CollateralType />} />
        <Route path="loan-application-type/*" element={<LoanApplicationType />} />
        <Route path="loan-application-status/*" element={<LoanApplicationStatus />} />
        <Route path="loan-restructure-item/*" element={<LoanRestructureItem />} />
        <Route path="loan-decline-reason/*" element={<LoanDeclineReason />} />
        <Route path="loan-restructure-flag/*" element={<LoanRestructureFlag />} />
        <Route path="card-types/*" element={<CardTypes />} />
        <Route path="card-brand-type/*" element={<CardBrandType />} />
        <Route path="card-status-flag/*" element={<CardStatusFlag />} />
        <Route path="card-charges/*" element={<CardCharges />} />
        <Route path="card-category-type/*" element={<CardCategoryType />} />
        <Route path="card-class-type/*" element={<CardClassType />} />
        <Route path="card-performance-flag/*" element={<CardPerformanceFlag />} />
        <Route path="terminal-functions/*" element={<TerminalFunctions />} />
        <Route path="terminal-types/*" element={<TerminalTypes />} />
        <Route path="customer-complaint-status-type/*" element={<CustomerComplaintStatusType />} />
        <Route path="channel-type/*" element={<ChannelType />} />
        <Route path="fx-customer-type/*" element={<FxCustomerType />} />
        <Route path="fx-transaction-type/*" element={<FxTransactionType />} />
        <Route path="fx-transaction-rate-type/*" element={<FxTransactionRateType />} />
        <Route path="fx-rate-type/*" element={<FxRateType />} />
        <Route path="fx-transaction-channel-type/*" element={<FxTransactionChannelType />} />
        <Route path="fx-receipt-purpose-type/*" element={<FxReceiptPurposeType />} />
        <Route path="fraud-type/*" element={<FraudType />} />
        <Route path="fraud-category-flag/*" element={<FraudCategoryFlag />} />
        <Route path="shareholder-type/*" element={<ShareholderType />} />
        <Route path="merchant-type/*" element={<MerchantType />} />
        <Route path="card-fraud-incident-category/*" element={<CardFraudIncidentCategory />} />
        <Route path="academic-qualification/*" element={<AcademicQualification />} />
        <Route path="professional-qualification/*" element={<ProfessionalQualification />} />
        <Route path="employment-terms/*" element={<EmploymentTerms />} />
        <Route path="committee-type/*" element={<CommitteeType />} />
        <Route path="executive-category-type/*" element={<ExecutiveCategoryType />} />
        <Route path="department-type/*" element={<DepartmentType />} />
        <Route path="share-holding-flag/*" element={<ShareHoldingFlag />} />
        <Route path="anticipated-maturity-periood/*" element={<AnticipatedMaturityPeriood />} />
        <Route path="interest-calc-method/*" element={<InterestCalcMethod />} />
        <Route path="security-type/*" element={<SecurityType />} />
        <Route path="security-tenure/*" element={<SecurityTenure />} />
        <Route path="financial-derivative-type-code/*" element={<FinancialDerivativeTypeCode />} />
        <Route path="security-classification-type/*" element={<SecurityClassificationType />} />
        <Route path="derivative-sub-type/*" element={<DerivativeSubType />} />
        <Route path="derivative-underlying-asset/*" element={<DerivativeUnderlyingAsset />} />
        <Route path="currency-authenticity-flag/*" element={<CurrencyAuthenticityFlag />} />
        <Route path="kenyan-currency-denomination/*" element={<KenyanCurrencyDenomination />} />
        <Route path="currency-serviceability-flag/*" element={<CurrencyServiceabilityFlag />} />
        <Route path="remittance-flag/*" element={<RemittanceFlag />} />
        <Route path="sources-of-funds-type-code/*" element={<SourcesOfFundsTypeCode />} />
        <Route path="source-remittance-purpose-type/*" element={<SourceRemittancePurposeType />} />
        <Route path="staff-current-employment-status/*" element={<StaffCurrentEmploymentStatus />} />
        <Route path="staff-role-type/*" element={<StaffRoleType />} />
        <Route path="management-member-type/*" element={<ManagementMemberType />} />
        <Route path="ultimate-beneficiary-types/*" element={<UltimateBeneficiaryTypes />} />
        <Route path="bounced-cheque-categories/*" element={<BouncedChequeCategories />} />
        <Route path="reasons-for-bounced-cheque/*" element={<ReasonsForBouncedCheque />} />
        <Route path="crb-account-holder-type/*" element={<CrbAccountHolderType />} />
        <Route path="crb-account-status/*" element={<CrbAccountStatus />} />
        <Route path="crb-submitting-institution-category/*" element={<CrbSubmittingInstitutionCategory />} />
        <Route path="crb-amount-category-band/*" element={<CrbAmountCategoryBand />} />
        <Route path="crb-report-request-reasons/*" element={<CrbReportRequestReasons />} />
        <Route path="crb-complaint-type/*" element={<CrbComplaintType />} />
        <Route path="crb-complaint-status-type/*" element={<CrbComplaintStatusType />} />
        <Route path="crb-record-file-type/*" element={<CrbRecordFileType />} />
        <Route path="crb-credit-application-status/*" element={<CrbCreditApplicationStatus />} />
        <Route path="crb-customer-type/*" element={<CrbCustomerType />} />
        <Route path="crb-subscription-status-type-code/*" element={<CrbSubscriptionStatusTypeCode />} />
        <Route path="crb-nature-of-information/*" element={<CrbNatureOfInformation />} />
        <Route path="crb-source-of-information-type/*" element={<CrbSourceOfInformationType />} />
        <Route path="crb-product-service-fee-type/*" element={<CrbProductServiceFeeType />} />
        <Route path="crb-file-transmission-status/*" element={<CrbFileTransmissionStatus />} />
        <Route path="crb-agent-service-type/*" element={<CrbAgentServiceType />} />
        <Route path="crb-credit-facility-type/*" element={<CrbCreditFacilityType />} />
        <Route path="crb-gl-code/*" element={<CrbGlCode />} />
        <Route path="crb-aging-bands/*" element={<CrbAgingBands />} />
        <Route path="crb-report-view-band/*" element={<CrbReportViewBand />} />
        <Route path="crb-data-submitting-institutions/*" element={<CrbDataSubmittingInstitutions />} />
        <Route path="bank-transaction-type/*" element={<BankTransactionType />} />
        <Route path="agricultural-enterprise-activity-type/*" element={<AgriculturalEnterpriseActivityType />} />
        <Route path="interbank-sector-code/*" element={<InterbankSectorCode />} />
        <Route path="ultimate-beneficiary-category/*" element={<UltimateBeneficiaryCategory />} />
        <Route path="issuers-of-securities/*" element={<IssuersOfSecurities />} />
        <Route path="loan-account-category/*" element={<LoanAccountCategory />} />
        <Route path="counterparty-type/*" element={<CounterpartyType />} />
        <Route path="counter-party-deal-type/*" element={<CounterPartyDealType />} />
        <Route path="counter-party-category/*" element={<CounterPartyCategory />} />
        <Route path="acquiring-issuing-flag/*" element={<AcquiringIssuingFlag />} />
        <Route path="credit-card-ownership/*" element={<CreditCardOwnership />} />
        <Route path="category-of-security/*" element={<CategoryOfSecurity />} />
        <Route path="nature-of-customer-complaints/*" element={<NatureOfCustomerComplaints />} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </ErrorBoundaryRoutes>
    </div>
  );
};
