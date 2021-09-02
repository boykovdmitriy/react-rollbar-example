import React from 'react';
import { Box, Button, createStyles, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import { toObject } from '../../utils';
import { useWeather } from '../../api/useWeather';

const useStyles = makeStyles(() =>
  createStyles({
    form: {
      background: `#e4e4e4c7`,
      padding: 30,
      borderRadius: 15,
      minWidth: '60%',
      maxWidth: '600px',
    },
  }),
);

const WeatherItem = ({ name, value }: { name: string; value: string | number }) => {
  return (
    <Box display="flex">
      <Box width="50%">
        <Typography>{name}:</Typography>
      </Box>
      <Typography>{value}</Typography>
    </Box>
  );
};

export const WeatherPage = () => {
  const styles = useStyles();
  const location = useLocation();
  const history = useHistory();
  const { city } = toObject(location.search);
  const { data, isLoading } = useWeather(city);
  if (isLoading && !data) return <div>...loading</div>;

  const {
    list: [firstItem],
  } = data;

  if (!firstItem) {
    return <div>bad request</div>;
  }

  return (
    <Box flexDirection="column" display="flex" alignItems="center" justifyContent="center" width="100%" height="100%">
      <Button onClick={() => history.push('/')}>Back</Button>
      <Box display="flex" flexDirection="column" className={styles.form}>
        <Typography>{firstItem.name}</Typography>
        <Box paddingLeft="10px" paddingTop="10px">
          <WeatherItem name="temp" value={firstItem.main.temp} />
          <WeatherItem name="feels_like" value={firstItem.main.feels_like} />
          <WeatherItem name="humidity" value={firstItem.main.humidity} />
        </Box>
      </Box>
    </Box>
  );
};
