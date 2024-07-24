import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks.js/useAuth";

const LoginPage = () => {

    const navigate = useNavigate();
    const { setAuth } = useAuth();

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [count, setCount] = useState(0);


    const submit = (e) => {
        e.preventDefault();

        if (username === 'admin') {

            setAuth({ user: username, roles: [5150] });
            navigate('layout');
            localStorage.setItem('auth', JSON.stringify({ user: username, roles: [5150] }));

        } else if (username === 'manager') {

            setAuth({ user: username, roles: [1984] });
            navigate('layout');
            localStorage.setItem('auth', JSON.stringify({ user: username, roles: [1984] }));

        } else if (username === 'user') {

            setAuth({ user: username, roles: [2001] });
            navigate('layout');
            localStorage.setItem('auth', JSON.stringify({ user: username, roles: [2001] }));

        } else {
            alert("Wrong Username or Password");
        }
    }

    return (
        <main className="login-page">
            <div className="login-container">

                <div className="login-image-container">

                </div>


                <form className="login-form" onSubmit={submit}>

                    <h2>Giris</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, fugiat.</p>

                    <div className="user-info">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>

                    <div className="user-info">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button>Submit</button>

                </form>
            </div>
        </main>
    )
};

export default LoginPage;