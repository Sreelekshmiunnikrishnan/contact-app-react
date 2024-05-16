
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
        <Route path ="contact-app-react/" element={<ContactList></ContactList>}></Route>
        <Route path ="/create" element={<CreateContact></CreateContact>}></Route>
        <Route path ="/edit" element={<EditContact></EditContact>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

