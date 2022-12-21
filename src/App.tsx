import React, { useEffect } from 'react';
import './style.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeView from './Pages/HomePage';
import CategoriesView from './Pages/CategoriesPage';
import ProductsView from './Pages/ProductsPage';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import ContactsView from './Pages/ContactsPage';
import SearchView from './Pages/SearchPage';
import CompareView from './Pages/CategoriesPage';
import WishListView from './Pages/WishListPage';
import ShoppingCartView from './Pages/ShoppingCartPage';
import NotFoundView from './Pages/NotFoundPage';
import ProductProvider from './contexts/ProductContext';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import ManageProductsPage from './Pages/ManageProductsPage';
import ProductManageProvider, { IProductContext, ProductManageContext } from './ManageProducts/ProductContextManage';
import UpdateForm from './ManageProducts/UpdateForms';
import { ProductItem } from './models/ProductModel';
import ProductDetails from './sections/ProductDetails';
import ProductDetailsPage2 from './Pages/ProductdetailsPage2';

interface AppType {
  articleNumber: ProductItem[]
  tag: string
  name: string
  description: string
  category: string
  price: number
  rating: number
  imageName: string
}

const App: React.FC<AppType> = () => {

  return (
    <BrowserRouter>
    <ShoppingCartProvider>
    <ProductProvider>
    <ProductManageProvider>
      <Routes>
        <Route path="/" element={<HomeView />}/>
        <Route path="/categories" element={<CategoriesView/>}/>
        <Route path="/products" element={<ProductsView />}/>
        <Route path="/productdetailspage/:articleNumber" element={<ProductDetailsPage />}/>
        <Route path="/contacts" element={<ContactsView/>}/>
        <Route path="/manage" element={<ManageProductsPage />}/>
        <Route path="/Search" element={<SearchView/>}/>
        <Route path="/compare" element={<CompareView/>}/>
        <Route path="/wishlist" element={<WishListView/>}/>
        <Route path="/updateforms/:articleNumber" element={<UpdateForm/>}/>
        <Route path="/manageproductspage" element={<ManageProductsPage/>}/>
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