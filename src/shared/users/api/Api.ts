import axios from 'axios';
import { useEffect, useState } from 'react';

export type TypeUsers = {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  password?: string;
};

type apiProps = {
  usersFromApi: (users: TypeUsers[]) => any;
};

const Api = ({ usersFromApi }: apiProps) => {
  const [users, setUsers] = useState<TypeUsers[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/users',
        );
        setUsers(res.data);
        usersFromApi(res.data);
      } catch (error) {
        console.log(new Error());
      }
    };
    getUsers();
  }, [usersFromApi]);

  return null;
};
export default Api;
