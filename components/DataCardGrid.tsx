'use client';

import { CiCircleQuestion } from 'react-icons/ci';
import { availableSearchFields, ResponseData } from '@/customTypes';
import { startCase } from 'lodash';
import { AdditionalData } from '@/components';
import { getNameAbbreviation } from '@/lib';

export default function DataCardGrid({
  dataCards,
  isLoading,
  searchMode,
}: {
  dataCards?: ResponseData[] | null;
  isLoading?: boolean;
  searchMode?: availableSearchFields;
}) {
  return (
    <>
      {isLoading && (
        <div className="gap-4 m-4 p-4 rounded-xl min-h-40 flex items-center justify-center bg-opacity-25 bg-white shadow-xl backdrop-blur-2xl border border-opacity-20 border-white">
          <span className="loading loading-spinner loading-lg text-white"></span>
        </div>
      )}
      {!isLoading && (
        <div className="m-4 p-4 rounded-xl ">
          {/*Initial page load, display message to encourage users to action*/}
          {!Array.isArray(dataCards) && (
            <div className="text-white w-full">
              Enrich your Star Wars knowledge with our data.
            </div>
          )}
          {/*Only display grid title when data is available.*/}
          {Array.isArray(dataCards) && (
            <h2 className="text-white text-3xl pb-8">
              Available {startCase(searchMode)}
            </h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/*Page loaded and got no results.*/}
            {Array.isArray(dataCards) && !Boolean(dataCards?.length) && (
              <div className="text-white">No results.</div>
            )}
            {/*Page loaded and got results.*/}
            {dataCards &&
              dataCards.map((dataCard: ResponseData) => (
                <div
                  key={dataCard.name}
                  tabIndex={0}
                  aria-label={dataCard.name}
                  className="card bg-white shadow-xl transform transition-transform duration-300 hover:translate-y-2 hover:opacity-80 gap-8
                  bg-opacity-25 backdrop-blur-2xl border border-opacity-20 border-white
                  "
                >
                  <figure className="px-10 pt-10">
                    <div className="avatar">
                      <div className="avatar placeholder">
                        <div className="bg-primary w-24 rounded-full">
                          <span className="text-3xl text-amber-400">
                            {getNameAbbreviation(dataCard.name) || (
                              <CiCircleQuestion />
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title p-4 text-white">
                      {dataCard.name || 'No name found!'}
                    </h2>
                    {searchMode === 'people' && (
                      <div>
                        <span className="text-white">Homeworld</span>:{' '}
                        <AdditionalData url={dataCard.homeworld} />
                      </div>
                    )}
                    {searchMode === 'people' && (
                      <div>
                        <span className="text-white">Species:</span>
                        <div>
                          {/*Handle when no species data specified.*/}
                          {!Boolean(dataCard.species?.length) && (
                            <span className="text-amber-400">
                              This data is a mystery.
                            </span>
                          )}
                          {dataCard.species?.map((specie, index) => (
                            <AdditionalData key={index} url={specie} />
                          ))}
                        </div>
                      </div>
                    )}
                    {searchMode === 'planets' && (
                      <div className="text-white">
                        Population:{' '}
                        <span className="text-amber-400">
                          {Number.isFinite(Number(dataCard.population))
                            ? Number(dataCard.population).toLocaleString()
                            : 'Unknown'}
                        </span>
                      </div>
                    )}
                    {searchMode === 'planets' && (
                      <div className="text-white">
                        Climate:{' '}
                        <span className="text-amber-400">
                          {startCase(dataCard.climate).split(' ').join(', ') ||
                            'Unknown.'}
                        </span>
                      </div>
                    )}
                    {searchMode === 'species' && (
                      <div className="text-white">
                        Classification:{' '}
                        <span className="text-amber-400">
                          {startCase(dataCard.classification) ||
                            'Classification is unknown.'}
                        </span>
                      </div>
                    )}
                    {searchMode === 'species' && (
                      <div className="text-white">
                        Language:{' '}
                        <span className="text-amber-400">
                          {startCase(dataCard.language) ||
                            'Language is unknown.'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}
