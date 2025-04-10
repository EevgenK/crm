export type SummaryStats = {
  promotions: number;
  categories: number;
  newCompanies: number;
  activeCompanies: number;
};
export type SummarySale = {
  companyId: number;
  companyTitle: string;
  sold: number;
  income: number;
};

export type SummaryPromotions = {
  promotionId: number;
  promotionName: string;
  companyTitle: string;
  discount: number;
};

export type SummaryCategories = {
  categoryId: number;
  categoryTitle: string;
  count: number;
};
export type SummaryCountries = {
  countryId: number;
  countryTitle: string;
  count: number;
};
