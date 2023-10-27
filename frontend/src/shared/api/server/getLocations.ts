import { GETLocationsResponse } from './types';

export async function getLocations() {
  const data: GETLocationsResponse = await fetch(`/api/get-locations/`)
    .then((res) => res.json())
    .catch((error) => console.error(error));

  return data;
}
