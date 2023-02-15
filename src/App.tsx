import "./App.css";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Grid } from "@material-ui/core";
import { Features } from "./components/Cards/Features";
import { Banner } from "./components/Banner";

function App() {
  return (
    <>
      <Header />
      <Banner />

      <Features />
      <Footer />
    </>
  );
}

export default App;
