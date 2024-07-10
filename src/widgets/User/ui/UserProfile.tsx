import { useState } from 'react';
import { Api } from '../../../shared/users';
import { TypeUsers } from '../../../shared/users/api/Api';

export default function UserProfile() {
  const [users, setUsers] = useState<TypeUsers[]>([]);

  const getUsers = (Users: TypeUsers[]) => {
    setUsers(Users);
  };

  return (
    <>
      <Api usersFromApi={getUsers} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.password}</p>
          </div>
        ))}
      </div>
    </>
  );
}
