import { SubmitHandler, useForm } from 'react-hook-form';
import {
  availableSearchFields,
  ResponseData,
  SearchFormData,
} from '@/customTypes';
import { FaSearchengin } from 'react-icons/fa';
import { getData } from '@/lib';
import { Dispatch, SetStateAction, useState } from 'react';
import { ErrorFetching } from '@/components/index';

export default function SearchForm({
  isLoading,
  setDataCards,
  setIsLoading,
  setSearchMode,
}: {
  isLoading: boolean;
  setDataCards: Dispatch<SetStateAction<ResponseData[] | null>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setSearchMode: Dispatch<SetStateAction<availableSearchFields | undefined>>;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SearchFormData>({
    mode: 'onSubmit',
  });

  const [hasError, setHasError] = useState<boolean>(false);

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col md:flex-row gap-4 m-4 p-4 glass rounded-xl">
        <div>
          <select
            className="select select-bordered w-full md:w-auto"
            defaultValue=""
            disabled={isLoading}
            {...register('searchField', {
              required: true,
            })}
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
              {...register('searchValue', {
                required: true,
              })}
            />
          </label>
          {errors.searchValue && (
            <div className="text-error py-4">This field is required.</div>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-primary w-full tracking-[0.75em]"
            disabled={isLoading}
          >
            SEARCH <FaSearchengin />
          </button>
        </div>
      </div>
      {hasError && <ErrorFetching />}
    </form>
  );
}
