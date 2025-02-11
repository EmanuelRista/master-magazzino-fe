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
  - **Report**: Visualizzazione di report sulle scorte.

### Backend (Laravel)

- **Tecnologie Utilizzate**:

  - Laravel Framework
  - MySQL come sistema di gestione del database

- **API Endpoints**:
  - `/api/auth/login` - Autenticazione dell'utente
  - `/api/auth/register` - Registrazione di nuovi utenti
  - `/api/inventory` - Gestione delle scorte (GET, POST, PUT, DELETE)
  - `/api/reports` - Generazione di report sulle scorte

### Database (MySQL)

- **Schema**:
  - `users`: Per la gestione degli utenti.
  - `products`: Per le informazioni sul prodotto (nome, quantità, prezzo, ecc.).
  - `categories`: Per categorizzare i prodotti.
  - `inventory_logs`: Per tracciare le modifiche alle scorte.

## Installazione e Avvio

### Frontend

1. **Clonare il repository**:
   ```bash
   git clone [URL del repository]
   cd master-magazzino-fe
   ```
