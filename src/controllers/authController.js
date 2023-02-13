//TODO: Login!
// const login = async (req, res) => {
//     try {
//         const { user, password } = req.body

//         const dataUser = await userService.userExisting(user);

//         if (!dataUser) {
//             res.status(404)
//             res.send({ error: 'User not found' })
//             return ;
//         }

//         const checkPassword = await compare(password, dataUser.password) //TODO: Contraseña!

//         //TODO JWT 👉
//         const tokenSession = await tokenSign(dataUser) //TODO: 2d2d2d2d2d2d2
        
//         if (checkPassword) { //TODO Contraseña es correcta!
//             res.send({ status: "OK" , data: dataUser, tokenSession })
//             return ;
//         }

//         if (!checkPassword) {
//             res.status(409)
//             res.send({
//                 error: 'Invalid password'
//             })
//             return ;
//         }
//     } catch (e) {
//         httpError(res, e)
//     }
// }