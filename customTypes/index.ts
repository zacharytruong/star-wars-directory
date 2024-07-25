export interface ResponseData {
  name?: string;
  homeworld?: string;
  species?: string[];
  population?: string;
  climate?: string;
  classification?: string;
  language?: string;
}

export type availableSearchFields = 'people' | 'planets' | 'species';

export type SearchFormData = {
  searchField: availableSearchFields;
  searchValue: string;
};
