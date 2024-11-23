import React from 'react';
import '../styles/globals.scss';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Task Manager</title>
        <meta name="description" content="A simple task manager application." />
      </head>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;