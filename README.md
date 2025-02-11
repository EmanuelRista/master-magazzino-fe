# Master Magazzino

**Master Magazzino** è una dimostrazione di un'applicazione di gestione delle scorte di magazzino. Questo progetto si concentra sul frontend realizzato con **React**, che verrà collegato a un backend basato su **Laravel** con un database **MySQL**.

## Panoramica

- **Frontend**: Costruito con React per un'interfaccia utente interattiva e moderna.
- **Backend**: Utilizza Laravel per fornire le API necessarie per la gestione delle scorte.
- **Database**: MySQL per la persistenza dei dati delle scorte.

## Struttura del Progetto

### Frontend (React)

- **Tecnologie Utilizzate**:

  - React
  - Bootstrap 5 per lo styling
  - Vite come strumento di build

- **Componenti Principali**:
  - **Login/Registrazione**: Pagina per l'autenticazione degli utenti.
  - **Gestione Scorte**: Interfaccia per visualizzare, aggiungere, aggiornare e cancellare le scorte.
  - **Gestione Categorie, Fornitori, Ordini e Dettagli Ordini**: Interfacce per la gestione di queste entità.
  - **Report**: Visualizzazione di report sulle scorte.

### Backend (Laravel)

- **Tecnologie Utilizzate**:

  - Laravel Framework
  - MySQL come sistema di gestione del database

- **API Endpoints**:

  - **Pubbliche (non richiedono autenticazione)**:

    - `/login` - Autenticazione dell'utente (POST)
    - `/register` - Registrazione di nuovi utenti (POST)

  - **Autenticate (richiedono autenticazione via Sanctum)**:
    - `/user` - Ottieni informazioni sull'utente corrente (GET)
    - `/logout` - Disconnettere l'utente (POST)
    - `/user-profile` - Ottieni il profilo dell'utente (GET)
    - `/products` - CRUD per i prodotti (GET, POST, PUT, PATCH, DELETE)
    - `/categories` - CRUD per le categorie (GET, POST, PUT, PATCH, DELETE)
    - `/suppliers` - CRUD per i fornitori (GET, POST, PUT, PATCH, DELETE)
    - `/orders` - CRUD per gli ordini (GET, POST, PUT, PATCH, DELETE)
    - `/order-details` - CRUD per i dettagli dell'ordine (GET, POST, PUT, PATCH, DELETE)

### Database (MySQL)

- **Schema**:
  - `users`: Per la gestione degli utenti.
  - `products`: Per le informazioni sul prodotto (nome, quantità, prezzo, ecc.).
  - `categories`: Per categorizzare i prodotti.
  - `suppliers`: Per gestire le informazioni sui fornitori.
  - `orders`: Per tracciare gli ordini.
  - `order_details`: Per i dettagli specifici degli ordini (prodotti associati, quantità, ecc.).

## Installazione e Avvio

### Frontend

1. **Clonare il repository**:
   ```bash
   git clone [URL del repository]
   cd master-magazzino-fe
   ```
