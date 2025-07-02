import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProductsPage from './modules/products/ProductsPage';
import CategoriesPage from './modules/categories/CategoriesPage';
import StockPage from './modules/stock/StockPage';
import SuppliersPage from './modules/suppliers/SuppliersPage';
import CustomersPage from './modules/customers/CustomersPage';
import SalesPage from './modules/sales/SalesPage';
import PurchasesPage from './modules/purchases/PurchasesPage';
import ReportsPage from './modules/reports/ReportsPage';
import UsersPage from './modules/users/UsersPage';
import SettingsPage from './pages/SettingsPage';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import './App.css';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen((open) => !open);

  return (
    <div className="app">
      <Sidebar open={sidebarOpen} />
      <div className="main-content">
        <Topbar onMenuClick={toggleSidebar} />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/stock" element={<StockPage />} />
          <Route path="/suppliers" element={<SuppliersPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/purchases" element={<PurchasesPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App; 