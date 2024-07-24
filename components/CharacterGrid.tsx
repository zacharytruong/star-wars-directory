'use client';

import getNameAbbreviation from '@/lib/getNameAbbreviation';
import { CiCircleQuestion } from 'react-icons/ci';

interface Character {
  id?: string;
  name?: string;
  homeWorld?: string;
  specie?: string;
}

export default function CharacterGrid({
  // characters = [
  //   {
  //     id: '1',
  //     name: 'Andrew Addison',
  //     homeWorld: 'Earth',
  //     specie: 'Human',
  //   },
  //   {},
  // ],
  characters,
}: {
  characters?: Character[] | null;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4 p-4 glass rounded-xl">
      {!characters && (
        <div className="text-white">You can start searching anytime!</div>
      )}
      {characters &&
        characters.map((character: Character) => (
          <div
            key={character.id}
            className="card bg-base-100 shadow-xl transform transition-transform duration-300 hover:scale-105 gap-8"
          >
            <figure className="px-10 pt-10">
              <div className="avatar">
                <div className="avatar placeholder">
                  <div className="bg-primary text-neutral-content w-24 rounded-full">
                    <span className="text-3xl">
                      {getNameAbbreviation(character.name) || (
                        <CiCircleQuestion />
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title p-4">
                {character.name || 'No name found!'}
              </h2>
              <p>
                Home-world:{' '}
                <span>
                  {character.homeWorld ||
                    `This character's home-world is a mystery!`}
                </span>
              </p>
              <p>
                Species:{' '}
                <span>
                  {character.specie || `This character's specie is a mystery!`}
                </span>
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
