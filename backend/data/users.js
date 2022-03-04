import bcrypt from "bcryptjs"

const users =[
    {
        name :"Admin user",
        email :"admin@example.com",
        isAdmin : true,
        password :bcrypt.hashSync("123456",12),
    },


    {
        name :"Normal user",
        email :"normal@example.com",
       password :bcrypt.hashSync("123456",12),
    },

    {
        name :"Deerwalk user",
        email :"deerwalk@example.com",
         password :bcrypt.hashSync("123456",12),
    },
]
export default users;