# Task Manager

A web-based application for managing tasks, built with Next.js and Prisma.

## Features

- **Task Management**: Create, read, update, and delete tasks.
- **User Authentication**: Secure login and registration system. (To be added)
- **Responsive Design**: Optimized for various device sizes.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/gabrielcampostrybe/task-manager.git
   cd task-manager
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up the database**:

   - Ensure you have a PostgreSQL database running.
   - Create a `.env` file in the root directory and add your database connection string:

     ```env
     DATABASE_URL=postgresql://user:password@localhost:5432/mydatabase
     ```

   - Run Prisma migrations:

     ```bash
     npx prisma migrate dev
     ```

4. **Start the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `src/`: Contains the main application code.
- `lib/`: Utility functions and helpers.
- `migrations/`: Database migration files.
- `schema.prisma`: Prisma schema definition.
- `next.config.js`: Next.js configuration file.
- `tsconfig.json`: TypeScript configuration file.

## Technologies Used

- [Next.js](https://nextjs.org/): React framework for server-side rendering.
- [Prisma](https://www.prisma.io/): ORM for database management.
- [TypeScript](https://www.typescriptlang.org/): Typed JavaScript.
- [PostgreSQL](https://www.postgresql.org/): Relational database.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Vercel](https://vercel.com/) for deployment