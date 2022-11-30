import React from 'react';
import './style.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeView from './Pages/HomePage';
import CategoriesView from './Pages/CategoriesPage';
import ProductsView from './Pages/ProductsPage';
import ProductDetailsView from './Pages/ProductDetailsPage';
import ContactsView from './Pages/ContactsPage';
import SearchView from './Pages/SearchPage';
import CompareView from './Pages/CategoriesPage';
import WishListView from './Pages/WishListPage';
import ShoppingCartView from './Pages/ShoppingCartPage';
import NotFoundView from './Pages/NotFoundPage';
import { ProductProvider } from './contexts/ProductContext';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';

const App: React.FC = () => {

  return (
    <BrowserRouter>
    <ShoppingCartProvider>
    <ProductProvider >
      <Routes>
        <Route path="/" element={<HomeView />}/>
        <Route path="/categories" element={<CategoriesView/>}/>
        <Route path="/products" element={<ProductsView />}/>
        <Route path="/products/:name" element={<ProductDetailsView/>}/>
        <Route path="/contacts" element={<ContactsView/>}/>
        <Route path="/Search" element={<SearchView/>}/>
        <Route path="/compare" element={<CompareView/>}/>
        <Route path="/wishlist" element={<WishListView/>}/>
        <Route path="/shoppingcart" element={<ShoppingCartView/>}/>
        <Route path="*" element={<NotFoundView/>}/>
      </Routes>
    </ProductProvider>
    </ShoppingCartProvider>
  </BrowserRouter>
  );
}

export default App;


/* <BrowserRouter>
<ProductContext.Provider value={products}>
<FeaturedProductsContext.Provider value={featured}>
<ProductSection1Context.Provider value={productSection1}>
  <Routes>
    <Route path="/" element={<HomeView />}/>
    <Route path="/categories" element={<CategoriesView/>}/>
    <Route path="/products" element={<ProductsView />}/>
    <Route path="/products/:name" element={<ProductDetailsView/>}/>
    <Route path="/contacts" element={<ContactsView/>}/>
    <Route path="/Search" element={<SearchView/>}/>
    <Route path="/compare" element={<CompareView/>}/>
    <Route path="/wishlist" element={<WishListView/>}/>
    <Route path="/shoppingcart" element={<ShoppingCartView/>}/>
    <Route path="*" element={<NotFoundView/>}/>
  </Routes>
</ProductSection1Context.Provider >
</FeaturedProductsContext.Provider>
</ProductContext.Provider>
</BrowserRouter> */