import { Grid, Link, makeStyles } from "@material-ui/core";
import EdilSystemLogo from "../assets/logo-edilsystem.png";
export function Header() {
  const classes = useStyles();

  return (
    <Grid xs={12} className={classes.header}>
      <Grid>
        <h1 className={classes.title}>
          <Link
            color="inherit"
            href="https://edilsystem.com.br/site/contato/"
            target="_blank"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={EdilSystemLogo}
              style={{
                maxHeight: 35,
              }}
              alt="logo"
            />
          </Link>
        </h1>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles({
  header: {
    backgroundColor: "#2196f3",
    height: "80px",
  },
  title: {
    fontWeight: 25,
    textAlign: "center",
    fontFamily: "Inconsolata",
    color: "white",
    marginTop: "0px",
    padding: "25px",
    justifyContent: "center",
  },
});
// color:"#2196f3"
