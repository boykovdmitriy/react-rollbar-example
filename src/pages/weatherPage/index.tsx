import React from 'react';
import {Box, createStyles, makeStyles} from "@material-ui/core";
import {useLocation} from "react-router-dom";

const useStyles = makeStyles(() => createStyles({
    form: {
        background: `#e4e4e4c7`,
        padding: 30,
        borderRadius: 15,
        minWidth: '60%',
        maxWidth: '600px'
    }
}))

export const WeatherPage = () => {
    const styles = useStyles();
    const location = useLocation();

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="100%"
        >
            <Box
                display="flex"
                flexDirection="column"
                className={styles.form}
            >
                {JSON.stringify(location)}
            </Box>
        </Box>
    )
}
