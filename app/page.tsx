import { CiSearch } from 'react-icons/ci';
import CharacterGrid from '@/components/CharacterGrid';

export default function Home() {
  return (
    <main>
      <h1 className="text-center p-4 text-white text-4xl font-bold">
        Welcome to Star Wars Directory
      </h1>
      <p className="text-center p-4 text-white">
        You can search any Star Wars character by name, home-world, or species.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 p-4">
        <label className="input input-bordered flex items-center gap-4">
          Name:
          <input type="text" className="grow" />
        </label>
        <label className="input input-bordered flex items-center gap-4">
          Home-world:
          <input type="text" className="grow" />
        </label>
        <label className="input input-bordered flex items-center gap-4">
          Species:
          <input type="text" className="grow" />
        </label>
        <button className="btn btn-primary text-lg">
          Search <CiSearch />
        </button>
      </div>
      <CharacterGrid />
    </main>
  );
}
