import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { SearchFormData } from '@/customTypes';
import { FaSearchengin } from 'react-icons/fa';

export default function SearchForm({
  onSubmit,
  disabled,
  register,
  errors,
}: {
  onSubmit: () => void;
  disabled: boolean;
  register: UseFormRegister<SearchFormData>;
  errors: FieldErrors<SearchFormData>;
}) {
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col md:flex-row gap-4 m-4 p-4 glass rounded-xl">
        <div>
          <select
            className="select select-bordered w-full md:w-auto"
            defaultValue=""
            disabled={disabled}
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
              disabled={disabled}
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
            disabled={disabled}
          >
            SEARCH <FaSearchengin />
          </button>
        </div>
      </div>
    </form>
  );
}
