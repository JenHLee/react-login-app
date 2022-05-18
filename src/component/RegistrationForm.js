import React from "react";
import '../style.css';

function RegistrationForm() {
    return (
        <div className="form">
            <form>
                <div className="form-body">
                    <label className="form_label">First Name</label>
                    <input className="form_input" type="text" placeholder="First Name"></input>
                </div>

                <div className="form-body">
                    <label className="form_label">Last Name</label>
                    <input className="form_input" type="text" placeholder="Last Name"></input>
                </div>

                <div className="form-body">
                    <label className="form_label">Email</label>
                    <input className="form_input" type="text" placeholder="Email"></input>
                </div>

                <div className="form-body">
                    <label className="form_label">Password</label>
                    <input className="form_input" type="text" placeholder="Password"></input>
                </div>

                <div className="form-body">
                    <label className="form_label">Confirm Password</label>
                    <input className="form_input" type="text" placeholder="Confirm Password"></input>
                </div>
            </form>
            <footer className="footer">
                <button>Register</button>
            </footer>
        </div>
    );
}


export default RegistrationForm;