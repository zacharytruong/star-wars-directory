'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import {
  availableSearchFields,
  ResponseData,
  SearchFormData,
} from '@/customTypes';
import { useState } from 'react';
import { DataCardGrid, ErrorFetching, SearchForm } from '@/components';
import { getData } from '@/lib';

export default function Home() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SearchFormData>({
    mode: 'onSubmit',
  });

  const [dataCards, setDataCards] = useState<ResponseData[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  // Search mode to control the display of data cards.
  const [searchMode, setSearchMode] = useState<availableSearchFields>();

  const onSubmit: SubmitHandler<SearchFormData> = async (formData) => {
    setIsLoading(true);
    try {
      const data = await getData(formData.searchField, formData.searchValue);
      setDataCards(data);
      setSearchMode(formData.searchField);
    } catch (error) {
      setHasError(true);
      console.error(error);
    }
    reset();
    setIsLoading(false);
  };
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
        onSubmit={handleSubmit(onSubmit)}
        disabled={isLoading}
        register={register}
        errors={errors}
      />
      <DataCardGrid
        dataCards={dataCards}
        isLoading={isLoading}
        searchMode={searchMode}
      />
      {hasError && <ErrorFetching />}
    </main>
  );
}
