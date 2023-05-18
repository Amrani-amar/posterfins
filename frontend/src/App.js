
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbare from './composant/navbar';
// import Footer from './composant/footer';
// import Baches from './composant/taches';
import RegisterForm from './composant/register';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ConnexionForm from './composant/connexion';
import Articles from './composant/articles';

const queryClient = new QueryClient() 
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <Router>
      <Navbare />
        <Routes>
          <Route path="/S'enregistrer" element={<RegisterForm />} />
          <Route path="/CONNEXION" element={<ConnexionForm />} />
          <Route path="/Articles" element={<Articles />} />
        </Routes>
      </Router>
      {/* <RegisterForm /> */}
      
    </div>
    </QueryClientProvider>
  );
}

export default App;



