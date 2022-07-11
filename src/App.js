import React from 'react';
import './App.css';

const products = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Meats", price: "$5", stocked: true, name: "Chicken" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

const productCategories = [...new Set(products.map(product => product.category))];

console.log(products);
console.log(productCategories);

function ProductsTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <TableCategories/>
      </tbody>
    </table>
  );
}

function TableProducts({productCategory}) {

  console.log(productCategory);
  const productsArray = [];
  products.forEach(product => {
    if (product.category === productCategory) {
      productsArray.push(
        <tr key={product.name}>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      );
    }
  });

  console.log(productsArray);

  return (
    <>{productsArray}</>
  );
}

function TableCategories() {
  //const products = productCategories.forEach(category => <TableProducts productCategory="{category}"/>);
  const tableCategories = productCategories.map(category => {
    console.log(category);
    
    return (
      <React.Fragment key={category}>
        <tr>
          <th className="fullwidth" colSpan="2">{category}</th>
        </tr>
        <TableProducts productCategory={category}/>
      </React.Fragment>
    );
  });
  console.log(tableCategories);

  return (
    <>{tableCategories}</>
  );
}

function App() {
  return (
    <div className="App">
      <ProductsTable/>
    </div>
  );
}

export default App;
