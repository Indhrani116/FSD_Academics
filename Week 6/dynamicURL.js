const express = require("express");

const dynamicApp = express();

dynamicApp.get(
    "/product/:productId/:productName",
    function (productRequest, productResponse) {

        const selectedProductId = productRequest.params.productId;
        const selectedProductName = productRequest.params.productName;

        productResponse.send(
            "Product ID: " +
            selectedProductId +
            "<br>Product Name: " +
            selectedProductName
        );
    }
);

dynamicApp.listen(5000, function () {
    console.log("Dynamic URL server running at http://localhost:5000");
});