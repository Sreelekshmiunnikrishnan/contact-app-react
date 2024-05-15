
import './App.css';
import React from 'react';
import {HashRouter,Routes,Route } from 'react-router-dom';
import ContactList from './components/ContactList';
 import Header from './components/Header';
 import CreateContact from './components/CreateContact';
 import EditContact from './components/EditContact';
function App() {
  return (
    <div className="App">
      <Header></Header>
   <HashRouter>
      <Router>
        <Routes>
        <Route path ="/" element={<ContactList></ContactList>}></Route>
        <Route path ="/create" element={<CreateContact></CreateContact>}></Route>
        <Route path ="/edit" element={<EditContact></EditContact>}></Route>
        </Routes>
      </Router>
   </HashRouter>
    </div>
  );
}

export default App;

