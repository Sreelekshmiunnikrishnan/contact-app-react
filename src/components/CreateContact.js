import { React, useState } from "react";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import users from "./users";


function CreateContact() {
    let history = useNavigate();
    const [name, setName] = useState([""]);
    const [email, setEmail] = useState([""]);
    const [phno, setPhonenumber] = useState([""]);
    const [bday, setBirthDate] = useState([""]);
    var regexPatternemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;


    const handleSubmit = (e) => {
        e.preventDefault();
        const ids = uuid();
        let uni = ids.slice(0, 8);
        let cname = name,
            cemail = email,
            cphno = phno,
            cbday = bday;

        if (!name || !email || !phno || !bday) {
            alert("All fields are mandatory");
            return;
        }
        else if (!regexPatternemail.test(email)) {
            alert("Email is invalid");
            return;
        }
        else if (phno.length !== 10) {
            alert("Phone number must be 10 digit");
            return;
        }
        else {

            users.push({
                id: uni,
                Name: cname,
                Email: cemail,
                PhoneNumber: cphno,
                DateOfBirth: cbday
            })
            history("/")
        }

    }

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
                    <input type="date" name="bday" placeholder="DOB" value={bday} onChange={(e) => setBirthDate(e.target.value)} required /> </div>
                <div style={{ marginTop: '10px' }}>
                    <button className="ui button blue" onClick={(e) => handleSubmit(e)}>Create Contact</button></div>
                <Link className="d-grid gap-2" to="/" style={{ marginTop: "20px" }}>
                    <button className="ui button blue" size="lg">HOME</button>
                </Link>
            </form>
        </div>
    );

}

export default CreateContact;