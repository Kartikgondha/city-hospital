import React, { useState } from 'react';
import "./Loginform.css";



function Loginform(props) {



    const [useType, setuseType] = useState('Login')
    const [password, setPassword] = useState(false);

    return (
        <div className='background'>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        {
                            useType === 'Login' && password === false ?
                                <h2>Login</h2>
                                : password === true ?
                                    <h2>Forgot password</h2> :
                                    <h2>Signup</h2>
                        }

                        <div action method="post" role="form" className="php-email-form">
                            {
                                useType === 'Signup' ?

                                    <div className="row">
                                        <div className="col-md-4 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                            <div className="validate" />
                                        </div>
                                    </div> :null
                            }
                            <div className="row">
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                    <div className="validate" />
                                </div>
                            </div>
                            {
                                password === true ? null :
                            <div className="row">
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="password" className="form-control" name="password" id="password" placeholder="Your password" data-rule="password" data-msg="Please enter a valid email" />
                                    <div className="validate" />
                                </div>
                            </div>
                            }

                            {
                                useType === 'Login' && password === false ?
                                    <>
                                        <a onClick={() => setuseType('Signup')} className="linkcolor">Creat Have An Account ?</a><br/>
                                        <a onClick={() => setPassword(true)} className="linkcolor">Forgot password ?</a></>
                                    :password === true ?
                                        <a onClick={() => setPassword(false)} className="linkcolor">Remember Your Password ?</a> :
                                        <a onClick={() => setuseType('Login')} className="linkcolor">Already Have An Account ?</a>

                            }




                            <div className='row'>
                                {
                                    useType === 'Login' ?
                                        <div className="text-center"><button type="submit">Login</button></div>
                                        :
                                        <div className="text-center"><button type="submit">Signup</button></div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    );
}

export default Loginform;