import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Profile from './Pages/Profile';
import Settings from './Pages/Settings';
import Login from './Pages/Login';
import Layout from './Layout';
import { useRecoilValue } from 'recoil';
import { isLoggedInState } from './atom';   

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useRecoilValue(isLoggedInState); 

  if (!isLoggedIn) {
    return <Navigate to="/" />; 
  }

  return children; 
};

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<LoginRedirect />} />
          <Route path="/login" element={<Login />} />

          <Route element={<Layout />}>
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />
            <Route
              path="/services"
              element={
                <ProtectedRoute>
                  <Services />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}
function LoginRedirect() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? <Navigate to="/home" /> : <Login />;
}

export default App;
