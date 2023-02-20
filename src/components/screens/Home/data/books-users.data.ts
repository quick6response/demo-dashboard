import { SexType } from "@faker-js/faker";
import { faker } from "@faker-js/faker/locale/ru";

const getFakerUsers = (count: number = 10) => {
  const arrayUsers: IBooksUserColumn[] = [];
  for (let i = 2; i < count; i++) {
    arrayUsers.push({
      id: faker.datatype.uuid(),
      avatar: faker.image.avatar(),
      lastName: faker.name.lastName(),
      firstName: faker.name.firstName(),
      email: faker.internet.email(),
      birthday: faker.date.birthdate(),
      sex: faker.name.sexType(),
    });
  }
  return arrayUsers;
};

interface IBooksUserColumn {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
  sex: SexType;
  birthday: Date;
}
export const booksUsersData = {
  name: "Пользователи",
  type: "books",
  columns: [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "avatar", headerName: "Avatar", width: 130 },
    { field: "email", headerName: "Email", width: 130 },
    { field: "sex", headerName: "Sex", width: 70 },
    { field: "birthday", headerName: "Birthday", width: 100 },
  ],
  rows: [
    { id: 1, firstName: "Андрей", lastName: "Романов" },
    ...getFakerUsers(25000),
  ],
};
