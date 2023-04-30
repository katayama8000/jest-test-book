import axios from 'axios';

type typeUsers = {
  lastName: string;
  firstName: string;
  age: number;
  isDileted: boolean;
};

export const getNameList = async () => {
  const users = await getUsers();
  return users.map((user) => user.name);
};

export const getUsers = async () => {
  const users: typeUsers[] = await axios.get('/users').then((res) => res.data);

  return users.map((user) => {
    return {
      name: `${user.lastName} ${user.firstName}`,
      age: user.age,
      isDileted: user.isDileted,
    };
  });
};
