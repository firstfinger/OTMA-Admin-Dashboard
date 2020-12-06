import React, { useState } from 'react'
import Aux from "../../hoc/_Aux";
import { NavLink, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import '../../assets/scss/style.scss';
import { login } from '../../utilites/API/api';
import Breadcrumb from "../../App/layout/AdminLayout/Breadcrumb";
import { authAction } from '../../store/actions';
import { useDispatch } from 'react-redux';
import { message } from 'antd';


function SignIn() {

    const [email, setEmail] = useState("test@gmail.com");
    const [password, setPassword] = useState("test");
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();

    const checkLogin = () => {
        let data = {
            username: email,
            password: password
        }
    
        if (email === "") {
            message.error('Email cannot be empty!');
        } else if (password === "") {
            message.error('Password cannot be empty!');
        } else {
            handleLogin(data)
        }
    }
    
    const handleLogin = (data) => {
        login(data).then((response) => {
            if (response) {
                message.success('Login Success');
                localStorage.setItem("token", JSON.stringify(response.data.access_token));
                dispatch(authAction(response.data))
                history.push('/dashboard');
            }
        }).catch((err) => {
            message.error(err.response.data.message);
        })
            .finally((response) => {
    
            })
    }
    return (
        <Aux>
            <Breadcrumb />
            <div className="auth-wrapper">
                <div className="auth-content">
                    <div className="auth-bg">
                        <span className="r" />
                        <span className="r s" />
                        <span className="r s" />
                        <span className="r" />
                    </div>
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="mb-4">
                                <i className="feather icon-unlock auth-icon" />
                            </div>
                            <h3 className="mb-4">Login</h3>
                            <div className="input-group mb-3">
                                <input value={email} onChange={email => setEmail(email.target.value)} type="email" className="form-control" placeholder="Email" />
                            </div>
                         
                            <div className="input-group mb-4">
                                <input  value={password}  onChange={password => setPassword(password.target.value)} type="password" className="form-control" placeholder="password" />
                            </div>
                            <div className="form-group text-left">
                                <div className="checkbox checkbox-fill d-inline">
                                    <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                                    <label htmlFor="checkbox-fill-a1" className="cr"> Save credentials</label>
                                </div>
                            </div>
                            <button onClick={()=>checkLogin()} className="btn btn-primary shadow-2 mb-4">Login</button>
                            <p className="mb-2 text-muted">Forgot password? <NavLink to="/auth/reset-password-1">Reset</NavLink></p>

                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default SignIn
