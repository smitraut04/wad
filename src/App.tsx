import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegistrationForm } from './components/RegistrationForm';
import { UsersList } from './components/UsersList';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/users" element={<UsersList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;