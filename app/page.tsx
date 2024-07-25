'use client';

import { availableSearchFields, ResponseData } from '@/customTypes';
import { useState } from 'react';
import { DataCardGrid, SearchForm } from '@/components';

export default function Home() {
  const [dataCards, setDataCards] = useState<ResponseData[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // Search mode to control the display of data cards.
  const [searchMode, setSearchMode] = useState<availableSearchFields>();

  return (
    <main>
      <h1 className="text-center p-4 text-white text-4xl font-bold">
        Welcome to Star Wars Directory
      </h1>
      <p className="text-center p-4 text-white">
        You can search for Star Wars information by character name, planet, or
        species.
      </p>
      <SearchForm
        isLoading={isLoading}
        setDataCards={setDataCards}
        setIsLoading={setIsLoading}
        setSearchMode={setSearchMode}
      />
      <DataCardGrid
        dataCards={dataCards}
        isLoading={isLoading}
        searchMode={searchMode}
      />
    </main>
  );
}
