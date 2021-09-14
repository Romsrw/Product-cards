import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@material-ui/core";
import IconComparison from "./icons/IconComparison";
import IconLike from "./icons/IconLike";
import IconCar from "./icons/IconCar";
import IconDeal from "./icons/IconDeal";
import { format } from "date-fns/esm";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    filter: "drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1))",
    borderRadius: "8px",
  },
  cardMedia: {
    position: "relative",
    height: 260,
  },
  IconsMedia: {
    display: "flex",
    position: "absolute",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    right: 12,
    bottom: 34,
  },
  viewed: {
    display: "flex",
    marginTop: 12,
    padding: "5px 8px",
    fontFamily: "Ubuntu",
    fontSize: 12,
    color: "#FFF",
    background: "rgba(44, 44, 44, 0.74)",
    borderRadius: 8,
  },
  cardContent: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 0,
    paddingBottom: `${theme.spacing(1.5)}px!important`,
  },
  cardOldPrice: {
    padding: 0,
    marginLeft: 16,
    textDecoration: "line-through",
    color: "#5A5A5A",
    fontFamily: "Roboto",
    fontSize: 12,
    lineHeight: "14px",
  },
  cardPrice: {
    padding: 0,
    marginLeft: 12,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: "26px",
  },
  cardTitle: {
    padding: "8px 0",
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 14,
    lineHeight: "16px",
  },
  cardTitleWrapper: {
    padding: "0 12px",
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
  },
  localityWrapper: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "flex-end",
  },
  cardLocality: {
    fontFamily: "Roboto",
    fontSize: 12,
    lineHeight: "14px",
    color: "#8F8F8F",
    display: "inline-block",
  },
  cardDate: {
    fontFamily: "Roboto",
    fontSize: 12,
    lineHeight: "14px",
    color: "#8F8F8F",
    display: "inline-block",
  },
  seen: {
    background: "#FFF6A5",
  },
  iconComparison: {
    marginBottom: 16,
    "&:hover": {
      cursor: "pointer",
    },
  },
  iconLike: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  iconCar: {
    marginRight: 8,
    "&:hover": {
      cursor: "pointer",
    },
  },
  iconDeal: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const CardItems = ({ card }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card
        className={clsx(classes.card, card.seen && classes.seen)}
        elevation={0}
      >
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title={card.title}
        >
          {card.seen ? (
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography className={classes.viewed}>Просмотрено</Typography>
            </Box>
          ) : null}
          <Box className={classes.IconsMedia}>
            <IconComparison className={classes.iconComparison} />
            <IconLike className={classes.iconLike} />
          </Box>
        </CardMedia>
        <CardContent className={classes.cardContent}>
          <Box display="flex" flexDirection="row" mt={0.25}>
            <Box flex={1}>
              <Typography className={classes.cardOldPrice}>
                {Math.trunc(card.oldPrice)} ₽
              </Typography>
              <Typography className={classes.cardPrice}>
                {Math.trunc(card.price)} ₽
              </Typography>
            </Box>
            <Box flex={1} display="flex" justifyContent="flex-end" px={1}>
              <IconCar className={classes.iconCar} />
              <IconDeal className={classes.iconDeal} />
            </Box>
          </Box>
          <Box className={classes.cardTitleWrapper}>
            <Typography className={classes.cardTitle}>{card.title}</Typography>
            <Box className={classes.localityWrapper}>
              <Typography className={classes.cardLocality}>
                {card.locality}
              </Typography>
              <Typography className={classes.cardDate}>
                {format(new Date(card.date), "dd.MM.yyyy, HH:mm")}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardItems;
