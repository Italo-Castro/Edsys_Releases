import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@material-ui/core";

export default function MediaCard() {
  return (
    <Container
      style={{
        justifyContent: "space-around",
        display: "flex",
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
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

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140, width: 140 }}
          image="https://cdn-icons-png.flaticon.com/512/1284/1284454.png"
          title="manual"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Manual
          </Typography>

          <Typography variant="body1" color="text.secondary">
            Documnetação de usabilidade do sistema
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Ver mais</Button>
        </CardActions>
      </Card>
    </Container>
  );
}
