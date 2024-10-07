const userController = require('../controller/userController')
const userRoute = require('express').Router()

// read all users
userRoute.get(`/all` , userController.readAll)

//read single user
userRoute.get(`/single/:id` , userController.readSingle)

// create new user
userRoute.post(`/create`, userController.createUser)

// update user
userRoute.patch(`/update/:id`, userController.updateUser)

// delete user
userRoute.delete(`/delete/:id`, userController.deleteUser)

module.exports = userRoute;
