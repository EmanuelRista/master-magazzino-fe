// Importiamo React e i suoi hook. 'useState' ci permette di gestire lo stato all'interno dei componenti, mentre 'useEffect' è usato per gestire effetti collaterali, come il recupero dei dati.
import React, { useState, useEffect } from "react";
// Importiamo axios, una libreria per effettuare richieste HTTP dal browser.
import axios from "axios";
// Importiamo i componenti di routing da react-router-dom. 'Router' gestisce la navigazione, 'Route' definisce le rotte, 'Routes' è un contenitore per più 'Route', 'Navigate' per la navigazione programmata.
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// Importiamo i componenti personalizzati per le diverse parti dell'applicazione.
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Categories from "./components/Categories";
import Suppliers from "./components/Suppliers";
import Orders from "./components/Orders";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Importiamo il file CSS per lo stile dell'app.
import "./App.css";

function App() {
  // Qui usiamo useState per tenere traccia se un utente è autenticato o meno.
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Usiamo useState per gestire lo stato di caricamento mentre verifichiamo l'autenticazione.
  const [loading, setLoading] = useState(true);

  // Questo effetto si esegue una volta quando il componente viene montato per controllare se l'utente è autenticato, cercando un token nel localStorage.
  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          // Facciamo una chiamata API per verificare se il token è valido. Se è valido, l'utente è considerato autenticato.
          await axios.get("http://127.0.0.1:8000/api/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setIsAuthenticated(true);
        } catch (error) {
          // Se il token non è valido (risposta 401 Unauthorized), lo rimuoviamo dal localStorage.
          if (error.response && error.response.status === 401) {
            localStorage.removeItem("token");
          }
          setIsAuthenticated(false);
        }
      }
      // Una volta completata la verifica, impostiamo loading a false per permettere il rendering dell'app.
      setLoading(false);
    };

    checkToken();
  }, []);

  // Se l'app è ancora nel processo di verifica dell'autenticazione, mostriamo un messaggio di caricamento.
  if (loading) return <div>Caricamento...</div>;

  // Questo componente crea una rotta privata. Se l'utente non è autenticato, lo reindirizza alla pagina di login.
  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  // Questo è un componente di layout che avvolge il contenuto principale con Navbar e Footer, garantendo un layout consistente tra le pagine.
  const Layout = ({ children }) => (
    <div className="d-flex flex-column min-vh-100">
      <Navbar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <main className="flex-grow-1">{children}</main>
      <Footer />
    </div>
  );

  // Qui inizia il rendering principale del componente App, dove configuriamo il sistema di routing.
  return (
    <Router>
      <Routes>
        {/*  Rotta per la pagina di login, accessibile a tutti. */}
        <Route path="/login" element={<Login />} />
        {/* /Rotta per il dashboard, avvolta in PrivateRoute e Layout per assicurare autenticazione e layout coerente. */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </PrivateRoute>
          }
        />
        {/* Configurazione simile per le pagine di Prodotti, Categorie, Fornitori e Ordini. */}
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <Layout>
                <Products />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/categories"
          element={
            <PrivateRoute>
              <Layout>
                <Categories />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/suppliers"
          element={
            <PrivateRoute>
              <Layout>
                <Suppliers />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <Layout>
                <Orders />
              </Layout>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

// Esportiamo il componente App in modo che possa essere utilizzato altrove, tipicamente in index.js per il rendering.
export default App;
