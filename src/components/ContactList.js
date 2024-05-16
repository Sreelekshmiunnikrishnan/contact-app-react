import React from 'react';
import Table from 'react-bootstrap/Table';

import "bootstrap/dist/css/bootstrap.min.css";
import users from './users';
import { Link, useNavigate } from "react-router-dom";

function ContactList() {
    let history = useNavigate();
    function setId(id,Name,Email,PhoneNumber,DateOfBirth){
        localStorage.setItem("id",id);
        localStorage.setItem("Name",Name);
        localStorage.setItem("Email",Email);
        localStorage.setItem("PhoneNumber",PhoneNumber);
        localStorage.setItem("DateOfBirth",DateOfBirth);
        
    
        }
    
   function deleteHandler(id) {
    let index = users.map(function(e) {
  return e.id;
    }).indexOf(id);
    users.splice(index,1);
    history("/contact-app-react");

   }
    return (
        <div style={{ margin: "5rem" }}>
            <Table bordered striped hover size="lg">
                <thead className="thead-dark">

                    <tr>

                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Date of Birth</th>
                    </tr></thead>
                <tbody>
                    {
                       users.map((item) =>{
                            return (
                                <tr>
                                    <td>{item.Name}</td>
                                    <td>{item.Email}</td>
                                    <td>{item.PhoneNumber}</td>
                                    <td>{item.DateOfBirth}</td>
                                    <td>
                                        <button className='ui button red' onClick={() => deleteHandler( item.id)}>DELETE</button>
                                    </td>
                                    <td>
                                        <Link to={"/edit"}>
                                            <button className='ui button yellow' onClick={(e) => setId(item.id,item.Name,item.Email,item.PhoneNumber, item.DateOfBirth)}>EDIT</button>
                                        </Link>
                                    </td></tr>

                            );
                        })
                    }

                </tbody></Table>
               <Link className='d-grid gap-2' style={{textDecoration:"none"}} to="/create">
                  <button className="ui button blue" size="lg" >ADD CONTACT</button>
               </Link>
        </div>
    );
}
export default ContactList;
