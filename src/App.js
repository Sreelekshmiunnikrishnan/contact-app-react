
import './App.css';
import React from 'react';
import {HashRouter as Router,Routes,Route } from 'react-router-dom';
import ContactList from './components/ContactList';
 import Header from './components/Header';
 import CreateContact from './components/CreateContact';
 import EditContact from './components/EditContact';
function App() {
  return (
    <div className="App">
      <Header></Header>
       <Router>
         <Routes>
   
          {/* Homepage - Contact List */}
         <Route path="contact-app-react/" element={<ContactList/>} />


          {/* Route for creating a new contact */}
          <Route path="contact-app-react/create" element={<CreateContact/>} />

          {/* Route for editing an existing contact */}
          <Route path="contact-app-react/edit" element={<EditContact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

