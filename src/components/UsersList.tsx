import React from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../api/users';
import { User } from '../types';

export function UsersList() {
  const users = getUsers();

  return (
    <div className="max-w-4xl w-full">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Registered Users</h2>
        <Link
          to="/"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Register New User
        </Link>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        {users.length === 0 ? (
          <p className="text-center py-8 text-gray-500">No users registered yet.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {users.map((user: User) => (
              <li key={user.id} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{user.name}</h3>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}