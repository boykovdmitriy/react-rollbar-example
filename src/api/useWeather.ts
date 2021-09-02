import { useQuery } from 'react-query';

const BASE_URL = 'https://community-open-weather-map.p.rapidapi.com/';

export const useWeather = (city: string) => {
  const { isLoading, error, data, isFetching } = useQuery('repoData', () =>
    fetch(`${BASE_URL}/find?q=${city}&cnt=1&mode=null&lon=0&type=link%2C%20accurate&lat=0&units=metric`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': process.env.REACT_APP_RAPID_HOST || '',
        'x-rapidapi-key': process.env.REACT_APP_RAPID_KEY || '',
      },
    }).then((res) => res.json()),
  );
  return { isLoading, error, data, isFetching };
};
