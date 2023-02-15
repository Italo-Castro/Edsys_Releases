import { Grid } from "@material-ui/core";
import { Banner } from "./Banner";
import { Features } from "./Cards/Cards";

export function InicioPage() {
  return (
    <Grid>
      <Banner />
      <Features />
    </Grid>
  );
}
