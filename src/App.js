
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
        <Routes basename={process.env.PUBLIC_URL}>
       <Route path="/" element={<ContactList />} />
          <Route path="/create" element={<CreateContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
        </Routes>
      </Router>
  </div>
  );
}

export default App;

