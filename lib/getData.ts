import axios from 'axios';
import { getAPIRoute } from '@/routes';
import { ResponseData } from '@/customTypes';

const getData = async (searchField: string, searchValue: string) => {
  const data = await axios.get(getAPIRoute(searchField), {
    params: { search: searchValue },
  });
  return data.data.results as ResponseData[];
};

export default getData;
