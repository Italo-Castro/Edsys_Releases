import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { InicioPage } from "./components/InicioPage";
import Manual from "./components/Manual/Clientes/Manual";

import { NewClient } from "./components/Manual/Clientes/NewClient";

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route index element={<InicioPage />} />
          <Route path="Manual" element={<Manual />} />
          <Route path="NewClient" element={<NewClient />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
