import { useEffect, useState } from 'react';
import UsersList from '../../components/UsersList';
import UsersRegister from '../../components/UsersRegister';
import { UsersListProvider } from '../../contexts/UsersListContexts'
import './styles.css';

export default function Main() {




  return (
    <UsersListProvider>
      <div className="container-main">
      <UsersRegister/>
      <UsersList />
      </div>
    </UsersListProvider>
  );
}
