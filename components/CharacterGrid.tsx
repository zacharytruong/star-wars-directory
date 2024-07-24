'use client';

import useGetPeople from '@/hooks/getPeople';

export default function CharacterGrid({ id }: { id?: string }) {
  const peopleQuery = useGetPeople(id);
  if (!id) {
    return 'No results.';
  }
  if (peopleQuery.data) {
    console.log(peopleQuery.data.data);
  }
  return <div>Grid</div>;
}
