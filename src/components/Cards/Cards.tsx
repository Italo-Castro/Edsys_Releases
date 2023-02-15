import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid, makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

export function Features() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Container
      style={{
        justifyContent: "space-between",
        display: "flex",
        marginTop: "8rem",
      }}
    >
      <Card sx={{ maxWidth: 345 }} style={{ margin: "5px" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Versão 2.1.0
          </Typography>

          <Typography variant="body1" color="text.secondary">
            Gráficos de movimentações financeiras, opção de cancelamento de
            visitas, etc ....
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Ver mais</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }} style={{ margin: "5px" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Manual
          </Typography>

          <Typography variant="body1" color="text.secondary">
            Documnetação de usabilidade do sistema
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => navigate("Manual")}>
            Ver mais
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}

const useStyles = makeStyles({
  main: {
    padding: "15px",
  },
});
