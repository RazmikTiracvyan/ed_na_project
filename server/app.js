const express = require("express")
const app = express()

const signupRouter = require("./requests/users/sign-up")
const signinRouter = require("./requests/users/sign-in")
const profileRouter = require("./requests/users/get-user")
const verificationRouter = require("./requests/users/user-verification")
const addToBasket = require("./requests/users/add-to-basket")
const removeFromBasket = require("./requests/users/remove-from-basket")
const orderItems = require("./requests/users/order")
const quantityIncrease = require("./requests/users/quantityIncrease")
const qunatityDecrease = require("./requests/users/quantityDecrease")


const generateAdmin = require("./requests/admin/generate-admin")
const loginAdmin = require("./requests/admin/login-admin")
const addProduct = require("./requests/admin/add-product")
const getLastUsers = require("./requests/admin/get-users")



const getProducts = require("./requests/products/get-all-products")
const removeProduct = require("./requests/products/remove-product")
const editProduct = require("./requests/products/edit-product")
const getProduct = require("./requests/products/get-product")
const getOrders = require("./requests/admin/get-order")
const confirmOrder = require("./requests/admin/confirm-order")


const connectDB =require("./connection/db")

const cors = require("cors")
require('dotenv').config();

app.use(express.json());
app.use(cors())

app.use("/uploads", express.static("uploads"));

connectDB()

//user routes
app.use('/', signupRouter);
app.use('/', signinRouter);
app.use('/', profileRouter);
app.use('/', verificationRouter);
app.use('/', addToBasket);
app.use('/', removeFromBasket);
app.use('/', orderItems);
app.use('/', quantityIncrease)
app.use('/', qunatityDecrease)


//admin routes
app.use('/admin', generateAdmin);
app.use('/admin', loginAdmin);
app.use('/admin', addProduct);
app.use('/admin', getLastUsers);
app.use('/admin', getOrders);
app.use('/admin', confirmOrder);

//products routes

app.use('/products', getProducts);
app.use('/products', removeProduct);
app.use('/products', editProduct);
app.use('/products', getProduct);



app.listen(process.env.PORT , ()=>{
    console.log(`the server is running on the port http://localhost:${process.env.PORT}`);
})