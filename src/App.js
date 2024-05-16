
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ContactList from './components/ContactList';
 import Header from './components/Header';
 import CreateContact from './components/CreateContact';
 import EditContact from './components/EditContact';
function App() {
  return (
    <div className="App">
     
       <Router>
    <Header></Header>
        <Routes>
          {/* Homepage - Contact List */}
         <Route path="/contact-app-react/" element={<ContactList />} />


          {/* Route for creating a new contact */}
          <Route path="/create" element={<CreateContact />} />

          {/* Route for editing an existing contact */}
          <Route path="/edit" element={<EditContact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

