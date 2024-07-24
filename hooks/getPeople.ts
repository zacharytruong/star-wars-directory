'use client';

import { useQuery } from '@tanstack/react-query';
import { APIRoutes } from '@/routes';
import axios from 'axios';

export default function useGetPeople(characterId?: string) {
  const getPeople = async () =>
    await axios.get(APIRoutes.people(), {
      params: characterId,
    });
  return useQuery({
    queryKey: [APIRoutes.people()],
    queryFn: getPeople,
  });
}
