import { Grid, makeStyles } from "@material-ui/core";
import MediaControlCard from "./MediaControlCard";

export function Features() {
  const classes = useStyles();

  return (
    <Grid className={classes.main}>
      <MediaControlCard />
    </Grid>
  );
}

const useStyles = makeStyles({
  main: {
    padding: "15px",
  },
});
