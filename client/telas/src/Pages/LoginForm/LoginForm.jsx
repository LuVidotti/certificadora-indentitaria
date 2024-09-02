import react from 'react';
import './LoginForm.css';

const LoginForm = () => {
    return (
        <div className='body'>
            <div className = 'wrapper'>
                <form>
                    <h1>Login</h1>
                        <div className = "input-box">
                            <input type="text" placeholder='Username'/>
                        </div>
                        <div className= "input-box">
                            <input type="password" placeholder='Senha'/>
                        </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;