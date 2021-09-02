import React, { useCallback, useState } from 'react';
import { Box, Button, createStyles, makeStyles, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

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

export const Home = () => {
  const styles = useStyles();
  const history = useHistory();
  const [value, setValue] = useState('');

  const handleOnChange = useCallback(
    ({ target: { value: newValue } }: any) => {
      setValue(newValue);
    },
    [setValue],
  );

  const handleSelect = () => {
    if (value !== '') history.push(`/city/${value}`);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="100%">
      <Box display="flex" flexDirection="column" className={styles.form}>
        <TextField value={value} onChange={handleOnChange} label="Enter a city" fullWidth />
        <Box marginTop={2}>
          <Button variant="contained" color="primary" fullWidth onClick={handleSelect}>
            Show weather
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
