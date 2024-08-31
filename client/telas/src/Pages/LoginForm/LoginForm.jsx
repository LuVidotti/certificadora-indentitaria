import react from 'react';
import './LoginForm.css';

const LoginForm = () => {
        return (
            <div className = 'wrapper'>
                <form action="">
                    <h1>Login</h1>
                    <div className = "input-box">
                        <input type="text" placeholder='Username'/>
                    </div>
                </form>
                <form action="">
                    <div className= "input-box">
                        <input type="password" placeholder='Senha'/>
                    </div>
                </form>
                <button type='submit'>Login</button>
            </div>
        );
};

export default LoginForm;