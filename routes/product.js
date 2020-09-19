const express = require("express")
const router = express.Router()
const { check, validationResult } = require("express-validator");


const { getProductById, 
        createProduct, 
        updateProduct,
        getProduct,
        photo,
        deleteProduct,
        getAllProducts,
        getAllUniqueCategories} = require("../controllers/product")
const {isSignedIn, isAuthenticated, isAdmin} = require("../controllers/auth")
const {getUserById} = require("../controllers/user")

router.param("userId", getUserById);
router.param("productId", getProductById);

//post route
router.post("/product/create/:userId", isSignedIn, isAuthenticated, isAdmin, createProduct);

// read routes
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId",photo)

//delete route
router.delete("/product/:productId/:userId", isSignedIn ,isAuthenticated ,isAdmin, deleteProduct)

//update route
router.put(
    "/product/:productId/:userId", 
    isSignedIn ,
    isAuthenticated ,
    isAdmin, 
    updateProduct
);


//listing route

router.get("/products",getAllProducts);
router.get("/product/categories",getAllUniqueCategories);

module.exports = router;

