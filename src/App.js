import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login';
import Dashboard from './components/Dashboard'
import AddProduct from './components/Add-Product';


const PRODUCT_LIST = [
  {
      stock_id: 1,
      name: 'AA Battery',
      cost: 1.99,
      image: 'https://images-na.ssl-images-amazon.com/images/I/71%2BKso958zL._AC_SL1500_.jpg'
  },
  {
      stock_id: 2,
      name: 'Blanket',
      cost: 19.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj0LAESkBPiaehu64TKO2jy9Iy6FtfjGjioA&usqp=CAU'
  },
  {
      stock_id: 3,
      name: 'Pringles',
      cost: 2.99,
      image: 'https://www.londondrugs.com/on/demandware.static/-/Sites-londondrugs-master/default/dw6677bbf5/products/L6716153/large/L6716153.JPG'
  },
  {
      stock_id: 4,
      name: 'Grey Backpack',
      cost: 49.99,
      image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1596126474-matein-travel-college-backpack-1596126459.jpg?crop=1xw:0.9989304812834224xh;center,top&resize=480:*'
  }
]

const STOCK = [
  {
    id: 1,
    stock: 10
  },
  {
    id: 2,
    stock: 5
  },
  {
    id: 3,
    stock: 10
  },
  {
    id: 4,
    stock: 5
  }
]

const adminUser = {
  email: "admin@admin",
  password: "admin123"
}

function App() {
  
  const [products, setProducts] = useState(PRODUCT_LIST)
  const [cart, setCart] = useState([])
  const [inventory, setInventory] = useState(STOCK)
  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");
  const [newCost, setNewCost] = useState(products.cost)

  const handleChange = (event) => {
    setNewCost(event.target.value)
    console.log(event.target.value)
  }

  const editCost = (id) => {
    const productsCopy = [...products]
    const newProducts = productsCopy.map(
      (product) => {
        if (product.stock_id === id){
          product.cost = 3;
        console.log(product.cost)}
      }
    )
  }

  const login = (details) => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      })
    } else {
      console.log("Email or Password Does not match")
    }
  };

  const logout = () => {
      console.log("Logged out");
      setUser({name: "", email: ""})
  };

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++
      console.log('ItmInCart' , itemInCart)

      //console.log('qwersthasdgh')
    } else {
      itemInCart = {
        ...product,
        quantity: 1
      };
      console.log(itemInCart)
      newCart.push(itemInCart);
    }
    console.log(newCart)
    setCart(newCart);
  };

  const reduceQty = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity--;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
        
      };
      newCart.pop(itemInCart);
    }
    setCart(newCart);
  };

  const stockAdditionHandler = (product) => {
    console.log('product..', product)
    // const productToUpdate = {...products.find(
    //   (item) => product.name === item.name)}
    // // console.log(productToUpdate.stock + 'stock before')
    // productToUpdate.stock += 1;
    // // console.log(productToUpdate.stock + 'stock after')
    // const newProducts = {...products.filter(
    //   (item) => product.name !== item.name
    // )}

    // console.log('new products ', newProducts)
    const newProducts = [...products]
    const productToUpdate = newProducts.map(
      (item) => {
        console.log('item', product)
        if (product.stock_id === item.stock_id){
         console.log('foundItem..', item) 
         return item.stock += 1;
         
      } return item;
    }
    )

    console.log('reduce stock..', productToUpdate)
    // setProducts(productToUpdate)
  }

  const stockReductionHandler = (product) => {
    const newProducts = [...products]
    const prodToUpdate = newProducts.map(
      (item) => {
        if(product.stock_id === item.stock_id){
         item.stock -=1;
      } return item;
      }
    
    ) 
    
    // console.log('adding stock...',prodToUpdate)

    setProducts(prodToUpdate)
  }

  const removeFromCart = (productToRemove) => {
    const removeProductsInCart = cart.filter((product) => product.name !== productToRemove.name)
    console.log('removefromCart' ,removeProductsInCart)
    setCart(removeProductsInCart) 

    
  };

  const StockResetHandler = (productToReset) => {
    const productInCart = {...cart.find((element) => productToReset.name === element.name)}
    console.log('prodRemoved ', productInCart )
    
    const newProducts = [...products]
    const productsToSet = newProducts.filter((product) => product.name !== productToReset.name)
    console.log('newley Products ',productsToSet)
    productsToSet.push(productInCart)

    setProducts(productsToSet)
    
  };  

const clearCart = () => {
  // const newProd = [...products]
  // console.log(newProd + ' clearing cart..')
  // setProducts(newProd)
  
  const productsToReset = products.map((e) => {
    const stockObj = {...inventory.find((element) => element.id === e.stock_id)}
        if (stockObj.stock) {
          e.stock = stockObj.stock
        }
        return e;
      }
    )
    console.log(productsToReset + ' reseting...')
    setCart([])
    setProducts(productsToReset)
}

const combineStockToProductHandler = ()=> {
  const productsWithStock = products.map((e) => {
    const stockObj = {...inventory.find((element) => element.id === e.stock_id)}
        if (stockObj.stock) {
          e.stock = stockObj.stock
        }
        return e;
      }
    )
    // console.log(productsWithStock + ' render')
    setProducts(productsWithStock)
}
  
  useEffect(() => {
    combineStockToProductHandler()
    console.log('render')
  },[])

  return (
      <Router>
            <Navbar 
              cart={cart}
              user={user}
              logout={logout} />
              {(user.email !== "") ? (
              <main>
              <Route exact path="/cart" >
                <Cart 
                products={products}
                addToCart={addToCart}
                cart={cart}
                reduceQty={reduceQty}
                stockReductionHandler={stockReductionHandler}
                stockAdditionHandler={stockAdditionHandler}
                removeFromCart={removeFromCart}
                StockResetHandler={StockResetHandler} 
                clearCart={clearCart} 
                />  
              </Route>
              <Route exact path="/" component={Home} />
              <Route exact path="/login">
                {/* <Login login={login}/> */}
              </Route>
              <Route exact path="/dashboard">
                <Dashboard
                  editCost={editCost} 
                  handleChange={handleChange}
                  products={products}
                  newCost={newCost}
                />
              </Route>
              {/* <Route exact path="/add-products">
                <AddProduct />
              </Route> */}
              <Route exact path="/products" >
                <Products 
                  products={products}
                  addToCart={addToCart}
                  stockReductionHandler={stockReductionHandler} />
              </Route>
              </main>
               ) : ( <Login login={login} error={error}/> )} 
              <Footer />
      </Router>
    )
 }

export default App;
