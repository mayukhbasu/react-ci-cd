import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useAppDispatch';
import { fetchUsers } from '../features/users/usersSlice';

const UserList:FC = () => {
  const dispatch = useAppDispatch();
  const {data, loading, error} = useAppSelector(state => state.users);
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch]);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
       <ul>
      {data.map(user => (
        <li key={user.id}>{user.name} - {user.email}</li>
      ))}
    </ul>
    </div>
  );
};

export default UserList;