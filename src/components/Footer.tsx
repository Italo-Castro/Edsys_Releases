import { Link, makeStyles, Typography } from "@material-ui/core";
import EdilSystemLogo from "../assets/logo-edilsystem.png";

export function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Copyright />
    </footer>
  );
}

const Copyright: React.FC = () => {
  return (
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
      <Typography variant="body2" color="textSecondary" align="center">
        Copyright ©
      </Typography>
      <img
        src={EdilSystemLogo}
        style={{
          maxHeight: 25,
          objectFit: "contain",
          marginLeft: 5,
          marginRight: 5,
        }}
        alt="logo"
      />
      <Typography variant="body2" color="textSecondary" align="center">
        {new Date().getFullYear()}.
      </Typography>
    </Link>
  );
};

const useStyles = makeStyles({
  footer: {
    bottom: 0,
    position: "fixed",
    width: "100%",
    textAlign: "center",
  },
});
