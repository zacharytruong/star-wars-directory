'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import {
  availableSearchFields,
  ResponseData,
  SearchFormData,
} from '@/customTypes';
import { useState } from 'react';
import { DataCardGrid, ErrorFetching } from '@/components';
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
        You can search any Star Wars character by name, planets, or species.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row gap-4 m-4 p-4 glass rounded-xl">
          <div>
            <select
              className="select select-bordered w-full md:w-auto"
              defaultValue=""
              disabled={isLoading}
              {...register('searchField', { required: true })}
            >
              <option disabled value="">
                Please select a category
              </option>
              <option value="people">Name</option>
              <option value="planets">Planets</option>
              <option value="species">Species</option>
            </select>
            {errors.searchField && (
              <div className="text-error py-4">This field is required.</div>
            )}
          </div>
          <div className="md:flex-1">
            <label className="input input-bordered flex items-center gap-4 w-full">
              <input
                type="text"
                disabled={isLoading}
                className="grow"
                placeholder="Enter your search here"
                {...register('searchValue', { required: true })}
              />
            </label>
            {errors.searchValue && (
              <div className="text-error py-4">This field is required.</div>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={isLoading}
            >
              Search
            </button>
          </div>
        </div>
      </form>
      <DataCardGrid
        dataCards={dataCards}
        isLoading={isLoading}
        searchMode={searchMode}
      />
      {hasError && <ErrorFetching />}
    </main>
  );
}
