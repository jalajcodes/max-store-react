import bcrypt from "bcryptjs";

const users = [
  {
    name: "Jalaj",
    email: "jalaj@maxstore.com",
    password: bcrypt.hashSync("test1234@", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@maxstore.com",
    password: bcrypt.hashSync("test1234", 10),
  },
  {
    name: "Jane Doe",
    email: "Jane@maxstore.com",
    password: bcrypt.hashSync("test1234", 10),
  },
];

export default users;
