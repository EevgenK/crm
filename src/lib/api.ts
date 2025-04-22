import * as ApiTypes from './api-types';

const PROJECT_TOKEN = process.env.NEXT_PUBLIC_PROJECT_TOKEN;

const buildUrl = (...paths: string[]) =>
  `https://${PROJECT_TOKEN}.mockapi.io/api/v1/${paths.join('/')}`;

const stringifyQueryParams = (params: Record<string, string>) =>
  new URLSearchParams(params).toString();

const sendRequest = async <T>(url: string, init?: RequestInit) => {
  const res = await fetch(url, init);
  if (!res.ok) {
    throw new Error(await res.text());
  }

  return (await res.json()) as T;
};

export const getSummaryStats = (
  init?: RequestInit,
): Promise<ApiTypes.SummaryStats> => {
  return sendRequest<ApiTypes.SummaryStats>(
    buildUrl('summary-stats', '1'),
    init,
  );
};

export const getSummarySales = (
  init?: RequestInit,
): Promise<ApiTypes.SummarySales[]> => {
  return sendRequest<ApiTypes.SummarySales[]>(buildUrl('summary-sales'), init);
};

export const getCountries = (init?: RequestInit) => {
  return sendRequest<ApiTypes.Country[]>(buildUrl('countries'), init);
};

export const getCategories = (init?: RequestInit) => {
  return sendRequest<ApiTypes.Category[]>(buildUrl('categories'), init);
};

export const getCompanies = (init?: RequestInit) => {
  return sendRequest<ApiTypes.Company[]>(buildUrl('companies'), init).then(
    (data) => data.filter((el) => el.title.length > 1),
  );
};

export const getCompany = (id: string, init?: RequestInit) => {
  return sendRequest<ApiTypes.Company>(buildUrl('companies', id), init);
};

export const getPromotions = async (
  params: Record<string, string> = {},
  init?: RequestInit,
) => {
  const data = await sendRequest<ApiTypes.Promotion[]>(
    `${buildUrl('promotions')}?${stringifyQueryParams(params)}`,
    init,
  );
  return data.filter((el) => el.title.length > 1);
};

export const createCompany = async (
  data: Omit<ApiTypes.Company, 'id' | 'hasPromotions'>,
  init?: RequestInit,
) => {
  return sendRequest<ApiTypes.Company>(buildUrl('companies'), {
    ...init,
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      ...(init && init.headers),
      'content-type': 'application/json',
    },
  });
};

export const createPromotion = async (
  data: Omit<ApiTypes.Promotion, 'id'>,
  init?: RequestInit,
) => {
  return sendRequest<ApiTypes.Promotion>(buildUrl('promotions'), {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      ...(init && init.headers),
      'content-type': 'application/json',
    },
  });
};
