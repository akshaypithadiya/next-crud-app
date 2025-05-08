# Next.js + MongoDB CRUD App

A simple full-stack CRUD application built with Next.js App Router and MongoDB.

## Features

- Create, Read, Update, Delete topics
- REST API with Next.js Route Handlers
- MongoDB with Mongoose
- Server and Client Components

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env` file :

```
MONGODB_URL=mongodb_connection_string
```

### 3. Run the dev server

```bash
npm run dev
```

Visit `http://localhost:3000`

## Folder Structure

```
/app           – App Router pages and API routes
/models        – Mongoose models
/libs          – MongoDB connection helper
/components    – React components
```

## Resources

- Building APIs with Next.js - https://nextjs.org/blog/building-apis-with-nextjs

- Youtube - https://www.youtube.com/watch?v=wNWyMsrpbz0
