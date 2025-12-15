# Rural Pulse

Rural Pulse is a comprehensive web application designed to Agri marketplace MVP. Mobile for consumers (browse/search/tap-to-call). Web portals for producers/wholesalers/retailers (dashboards/reports). This project creates a platform for AgChem companies to connect with farmers, track product performance, manage campaigns, and generate insights through a multi-vendor ecosystem.

## 🏗 Project Architecture

The project is structured into three main components:

1.  **Frontend**: Built with **Next.js (v15)** and **Tailwind CSS**.
2.  **Backend**: A **Node.js/Express** server handling API requests and business logic.
3.  **CMS**: A **Strapi** instance for content management.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

*   [Node.js](https://nodejs.org/) (Recommended: LTS version, or compatible with v18-v22 for Strapi)
*   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
*   Database: PostgreSQL (recommended for Strapi/Backend)

---

## 🛠 Installation & Running


### 1. Strapi (CMS)

Content management is handled by Strapi v5.

```bash
cd Strapi

# Install dependencies
npm install

# Start Strapi in development mode
npm run dev
```

*   The Strapi admin panel will be available at `http://localhost:1337/admin`.

### 2. Backend (Server)

The backend is an Express application supporting authentication, file handling, and database interactions.

```bash
cd Backend

# Install dependencies
npm install

# Run in development mode (with Nodemon)
npm run dev

# Run in production mode
npm start
```

*   **Note**: Ensure you configure your `.env` file in the `Backend` directory with necessary database and secret keys.
*   **Testing**: Run tests using `npm test`.

### 3. Frontend (Client)

The frontend is built using Next.js 15, TypeScript, and Tailwind CSS (v4).

```bash
cd Frontend

# Install dependencies
npm install

# Run the development server
npm run dev
```

*   The application will likely be available at `http://localhost:3000`.



---

## 📦 Tech Stack Details

### Frontend
*   **Framework**: Next.js 15.5.3 (App Router)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS v4

### Backend
*   **Runtime**: Node.js
*   **Framework**: Express 5.1
*   **Database Drivers**: `pg` (PostgreSQL)

### CMS (Strapi)
*   **Version**: Strapi 5.23.5
*   **Database**: PostgreSQL (`pg`)

---

## 📚 API Documentation

A Postman collection is available for testing the API endpoints.

*   **Location**: `Postman_Collection/Postman_Collection.json`
*   **Usage**: Import this file into [Postman](https://www.postman.com/) to explore and test the available API routes.

---