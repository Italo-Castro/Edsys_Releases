import { Grid, Link } from "@material-ui/core";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export function Banner() {
  return (
    <Grid container spacing={2}>
      <Grid
        style={{
          backgroundColor: "#2196f3",
          padding: "20px",
          margin: "20px ",
          borderRadius: 15,
          width: "100%",
          minHeight: "14rem",
        }}
      >
        <Typography
          variant="h3"
          component="div"
          style={{
            marginTop: "25px",
            color: "white",
            fontFamily: "sans-serif",
          }}
        >
          Um sistema completo para sua empresa.
          <Typography
            style={{
              marginTop: "15px",
              color: "white",
              fontFamily: "sans-serif",
            }}
          >
            Tenha tudo sobre controle com os sistemas Edil System para pequenas,
            médias e grandes empresas.
          </Typography>
        </Typography>
      </Grid>
    </Grid>

    // </Grid>
  );
}
