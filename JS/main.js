// // first excersise
// var firstName = document.getElementById('fn');
// var secondName = document.getElementById('ln');

// function sayHello(){
//     var firstNameValue = firstName.value;
//     var secondNameValue = secondName.value;

//     console.log("Hello " + firstNameValue + " " + secondNameValue)
// }

// function Clear(){

//     // any html attribute you can get a value from it or set a value to it

//     firstName.value = "" ;
//     secondName.value = "";
// }















// second Excersise

// CRUD Operations ( create(create new product), read(display of the elements) , update , delete) in addition to search

var productName = document.getElementById("pn");
var productPrice = document.getElementById("pp");
var productCategory = document.getElementById("pc");
var productDesc = document.getElementById("pd");
// must be declared as global var , it will be declared once when i make refresh
var productArr = [];
var updatedRowIndex;

function addNewProduct() {
  var product = {
    name: productName.value,
    price: Number(productPrice.value),
    category: productCategory.value,
    description: productDesc.value,
  };

  var buttonContent = document.getElementById("productBtn").innerHTML;
  if (buttonContent == "Add Product") {
    productArr.push(product);
  } else {
    displayUpdatedProduct(updatedRowIndex);
    document.getElementById("productBtn").innerHTML = "Add Product";
  }

  clear();
  displayAllProducts();
}

function clear() {
  // any html attribute you can get a value from it or set a value to it

  productName.value = "";
  productPrice.value = "";
  productCategory.value = "";
  productDesc.value = "";
}

function displayAllProducts() {
  var cartoona = "";

  for (var i = 0; i < productArr.length; i++) {
    cartoona += `<tr>
        <td> ${productArr[i].name} </td>
        <td>  ${productArr[i].price} </td>
        <td> ${productArr[i].category} </td>
        <td> ${productArr[i].description} </td>
        <td>
            <button onclick="deleteProduct(${i})" class=" btn btn-danger">Delete</button>
        </td>

        <td>
            <button onclick="updateProduct(${i})" class=" btn btn-warning">Update</button>
        </td>

    </tr>`;
  }

  document.getElementById("tbody").innerHTML = cartoona;
}

function deleteProduct(idx) {
  productArr.splice(idx, 1);
  // after i delete from array , the table that appear to user must be affected by deleting the required row
  displayAllProducts();
}

// update: when click on the button take the values of the row and put
//         them in the inputs, and the button add converts automatically to update
//         when click on the update , the values in the table change at the same place.

//The button text will change, when click on it, he will check if it is add so he will make add function
// and if it is update, it will make the update function

function updateProduct(idx) {
  productName.value = productArr[idx].name;
  productPrice.value = productArr[idx].price;
  productCategory.value = productArr[idx].category;
  productDesc.value = productArr[idx].description;

  document.getElementById("productBtn").innerHTML = "Update";
  updatedRowIndex = idx;
}



function displayUpdatedProduct(idx) {
  productArr[idx].name = productName.value;
  productArr[idx].price = productPrice.value;
  productArr[idx].category = productCategory.value;
  productArr[idx].description = productDesc.value;
  displayAllProducts();
}
