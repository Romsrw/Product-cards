import { Box } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  loaderContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(3)
  },
}));

const Loader = () => {
  const classes = useStyles();
  return (
    <Box className={classes.loaderContainer}>
      <CircularProgress />
    </Box>
  )
};

export default Loader;