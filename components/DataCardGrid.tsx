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
        <div className="gap-4 m-4 p-4 glass rounded-xl min-h-40 flex items-center justify-center">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      )}
      {!isLoading && (
        <div className="m-4 p-4 glass rounded-xl">
          {/*Initial page load, display message to encourage users to action*/}
          {!Array.isArray(dataCards) && (
            <div className="text-white w-full">
              Enrich your Star Wars with our data.
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
                  className="card bg-base-100 shadow-xl transform transition-transform duration-300 hover:translate-y-2 hover:opacity-80 gap-8"
                >
                  <figure className="px-10 pt-10">
                    <div className="avatar">
                      <div className="avatar placeholder">
                        <div className="bg-primary text-neutral-content w-24 rounded-full">
                          <span className="text-3xl">
                            {getNameAbbreviation(dataCard.name) || (
                              <CiCircleQuestion />
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title p-4">
                      {dataCard.name || 'No name found!'}
                    </h2>
                    {searchMode === 'people' && (
                      <div>
                        Home-world: <AdditionalData url={dataCard.homeworld} />
                      </div>
                    )}
                    {searchMode === 'people' && (
                      <div>
                        Species:
                        <div>
                          {/*Handle when no species data specified.*/}
                          {!Boolean(dataCard.species?.length) && (
                            <span className="text-secondary">
                              This data is a mystery.
                            </span>
                          )}
                          {dataCard.species?.map((specie, index) => (
                            <AdditionalData
                              key={index}
                              url={dataCard.homeworld}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    {searchMode === 'planets' && (
                      <div>
                        Population:{' '}
                        <span>
                          {Number.isFinite(Number(dataCard.population))
                            ? Number(dataCard.population).toLocaleString()
                            : 'Unknown'}
                        </span>
                      </div>
                    )}
                    {searchMode === 'planets' && (
                      <div>
                        Climate:{' '}
                        <span>
                          {startCase(dataCard.climate).split(' ').join(', ') ||
                            'Unknown.'}
                        </span>
                      </div>
                    )}
                    {searchMode === 'species' && (
                      <div>
                        Classification:{' '}
                        <span>
                          {startCase(dataCard.classification) ||
                            'Classification is unknown.'}
                        </span>
                      </div>
                    )}
                    {searchMode === 'species' && (
                      <div>
                        Language:{' '}
                        <span>
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
