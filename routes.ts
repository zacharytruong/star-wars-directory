const apiRoute = 'https://swapi.dev/api';

export const APIRoutes = {
  people: (id?: string) =>
    !id ? `${apiRoute}/people` : `${apiRoute}/people/${id}`,
  planets: (id?: string) =>
    !id ? `${apiRoute}/planets` : `${apiRoute}/planets/${id}`,
  species: (id?: string) =>
    !id ? `${apiRoute}/species` : `${apiRoute}/species/${id}`,
};
