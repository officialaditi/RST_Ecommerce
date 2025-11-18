import bcrypt from "bcryptjs";

const users = [
      { 
            name: 'Admin',
            email: 'admin@example.com',
            password: bcrypt.hashSync('12345', 10), // 10 is salt
            isAdmin: true
      },
      {
            name: 'John Doe',
            email: 'john@example.com',
            password: bcrypt.hashSync('12345', 10),
            isAdmin: false
      }, 
      {
            name: 'Mary Jonas',
            email: 'mary@example.com',
            password: bcrypt.hashSync('12345', 10),
            isAdmin: false
      }
]


export default users;