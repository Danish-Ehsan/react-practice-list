import React from 'react';
import { useState } from 'react';
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

console.log(products);
//console.log(productCategories);

function ProductsTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  if (inStockOnly) {
    products = products.filter(value => value.stocked === true);
  }

  if (filterText) {
    products = products.filter(value => value.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1);
  }

  const productCategories = [...new Set(products.map(product => product.category))];

  return (
    <div className="table-cont">
      <TableFilter 
        filterText={filterText} 
        inStockOnly={inStockOnly} 
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <CategoriesRow products={products} productCategories={productCategories}/>
        </tbody>
      </table>
    </div>
  );
}

function TableFilter({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}) {
  return (
    <form className="table-filter">
      <input 
        type="text" 
        value={filterText} 
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)} />
      <label>
        <input type="checkbox" checked={inStockOnly} onChange={(e) => onInStockOnlyChange(e.target.checked)}/>
        Only show products in stock
      </label>
    </form>
  )
}

function CategoriesRow({productCategories, products}) {
  const tableCategories = productCategories.map(category => {
    console.log(category);
    
    return (
      <React.Fragment key={category}>
        <tr>
          <th className="fullwidth" colSpan="2">{category}</th>
        </tr>
        <ProductRows productCategory={category} products={products}/>
      </React.Fragment>
    );
  });
  console.log(tableCategories);

  return (
    <>{tableCategories}</>
  );
}

function ProductRows({productCategory, products}) {

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

function App() {
  return (
    <div className="App">
      <ProductsTable products={products}/>
    </div>
  );
}

export default App;
