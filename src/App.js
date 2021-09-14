import React from "react";
import "./App.css";
import { useSnackbar } from "notistack";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import { useFetchProductsData } from "./FetchService/useFetchProductsData";
import CardItems from "./components/CardItems";
import Loader from "./components/Loader";
import ShowMoreButton from "./components/icons/ShowMoreButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  titleWrapper: {
    maxWidth: 960,
    margin: "0 auto",
  },
  mainTitle: {
    padding: "8px 24px",
    fontFamily: "Ubuntu",
    fontWeight: "bold",
    lineHeight: "25px",
    fontSize: 22,
    color: "#2C2C2C",
  },
  cardGrid: {
    padding: theme.spacing(0, 3),
  },
  showMoreWrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
}));

const App = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const { cardsData, isLoading, getCardsData } = useFetchProductsData({
    onError: (error) => {
      enqueueSnackbar(error, { variant: "error" });
    },
  });

  return (
    <div className="App">
      <Box className={classes.titleWrapper}>
        <Typography component="h1" className={classes.mainTitle}>
          Похожие объявления
        </Typography>
      </Box>
      <Container className={classes.cardGrid} maxWidth="md" disableGutters>
        <Grid container spacing={4}>
          {cardsData.map((card) => {
            return <CardItems key={card.id} card={card} />;
          })}
        </Grid>
        {isLoading ? (
          <Loader />
        ) : (
          <Box className={classes.showMoreWrapper}>
            <ShowMoreButton onClick={getCardsData} />
          </Box>
        )}
      </Container>
    </div>
  );
};

export default App;
