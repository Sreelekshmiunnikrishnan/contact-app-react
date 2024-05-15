import { React, useState,useEffect } from "react";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import users from "./users";


function EditContact(){
    let history = useNavigate();
    const [name, setName] = useState([""]);
    const [email, setEmail] = useState([""]);
    const [phno, setPhonenumber] = useState([""]);
    const [bday, setBirthDate] = useState([""]);
    const [id,setId] =  useState([""]);
    var regexPatternemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    let index = users.map(function(e) {
        return e.id;
          }).indexOf(id);

          const handleSubmit = (e) => {
            e.preventDefault();
             if (name === "" || email === ""|| phno === ""|| bday ==="") {
                 alert("All fields are mandatory");
                 return;
                  }
                  else if(!regexPatternemail.test(email)){
                     alert("Email is invalid");
                     return;
                  }
                  else if(phno.length !== 10){
                     alert("Phone number must be 10 digit");
                     return;
                  }
                  
                  else{
               let contact=users[index];
               contact.Name=name;
               contact.Email=email;
               contact.PhoneNumber=phno;
               contact.DateOfBirth=bday;
               history("/")
                  }
           };
    

          useEffect(() =>{
            setName(localStorage.getItem("Name"));
            setEmail(localStorage.getItem("Email"));
            setPhonenumber(localStorage.getItem("PhoneNumber"));
            setBirthDate(localStorage.getItem("DateOfBirth"));
            setId(localStorage.getItem("id"));
    
        },[])
    
    return (
        <div className="main">
            <h2>CREATE CONTACT</h2>
            <form className="ui form" >
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required /></div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /> </div>
                <div className="field">
                    <label htmlFor="phno">Phone Number</label>
                    <input type="number" name="phno" placeholder="Mob No" value={phno} onChange={(e) => setPhonenumber(e.target.value)} required /> </div>
                <div className="field">
                    <label htmlFor="bday">Date Of Birth</label>
                    <input type="date" name="bday" placeholder="DOB" value={bday} onChange={(e) => setBirthDate(e.target.value)} required/> </div>
                <div style={{ marginTop: '10px' }}>
                    <button className="ui button blue" onClick={(e) => handleSubmit(e)}>UPDATE</button></div>
                <Link className="d-grid gap-2" to="/" style={{ marginTop: "20px" }}>
                    <button className="ui button blue" size="lg">HOME</button>
                </Link>
            </form>
        </div>
    );


}

export default EditContact;