import { User } from '../types';

export async function registerUser(userData: Omit<User, 'id' | 'createdAt'>): Promise<User> {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const newUser: User = {
    ...userData,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString()
  };

  // Get existing users from localStorage
  const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
  
  // Add new user
  const updatedUsers = [...existingUsers, newUser];
  
  // Save to localStorage
  localStorage.setItem('users', JSON.stringify(updatedUsers));
  
  return newUser;
}

export function getUsers(): User[] {
  return JSON.parse(localStorage.getItem('users') || '[]');
}