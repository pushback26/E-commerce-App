import React, { useState } from 'react';


function Login({ login }) {  
    const [details, setDetails] = useState({name: "", email: "", password: ""});
    
    const submitHandler = e => {
        e.preventDefault();
        login(details);
    }

    return (
        <div class="login-wrapper">
            <h4>Login</h4>
                <form onSubmit={submitHandler}>
                    <div>
                        <label for="user-name">
                            <p>Username</p>
                            <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value,})} value={details.name}/>
                        </label>
                    </div>
                    <div>
                        <label for="email">
                            <p>Email</p>
                            <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value,})} value={details.email}/>
                        </label>
                    </div>
                    
                        <label for="password">
                            <p>Password</p>
                            <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value,})} value={details.password}/>
                        </label>
                    
                    
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                
            </form>
        </div>
    )
}

export default Login
