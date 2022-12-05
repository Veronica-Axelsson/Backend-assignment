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
import ProductProvider from './contexts/ProductContext';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import ManageProductsPage from './Pages/ManageProductsPage';
import ProductManageProvider from './ManageProducts/ProductContextManage';

const App: React.FC = () => {

  return (
    <BrowserRouter>
    <ShoppingCartProvider>
    <ProductProvider>
    <ProductManageProvider>
      <Routes>
        <Route path="/" element={<HomeView />}/>
        <Route path="/categories" element={<CategoriesView/>}/>
        <Route path="/products" element={<ProductsView />}/>
        <Route path="/products/:name" element={<ProductDetailsView/>}/>
        <Route path="/contacts" element={<ContactsView/>}/>
        <Route path="/manage" element={<ManageProductsPage />}/>
        <Route path="/Search" element={<SearchView/>}/>
        <Route path="/compare" element={<CompareView/>}/>
        <Route path="/wishlist" element={<WishListView/>}/>
        <Route path="/shoppingcart" element={<ShoppingCartView/>}/>
        <Route path="*" element={<NotFoundView/>}/>
      </Routes>
    </ProductManageProvider>
    </ProductProvider>
    </ShoppingCartProvider>
  </BrowserRouter>
  );
}

export default App;