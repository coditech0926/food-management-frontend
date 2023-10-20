import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Category } from '../pages/Category';
import { Filter } from '../pages/Filter';
import { Meal } from '../pages/Meal';
import { Ingredient } from '../pages/Ingredient';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { AuthLayout } from '../components/AuthLayout';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/" element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/home" element={<Home />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/category" element={<Category />} />
        <Route path="/meals/:id" element={<Meal />} />
        <Route path="/ingredients/:name" element={<Ingredient />} />
      </Routes>
    </BrowserRouter >
  );
};
