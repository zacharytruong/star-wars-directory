import axios from 'axios';
import { getAPIRoute } from '@/routes';
import { ResponseData } from '@/customTypes';

export const getData = async (searchField: string, searchValue: string) => {
  const data = await axios.get(getAPIRoute(searchField), {
    params: { search: searchValue },
  });
  return data.data.results as ResponseData[];
};
