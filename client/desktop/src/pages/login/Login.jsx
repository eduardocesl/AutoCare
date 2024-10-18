import { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loginSucesso, setLoginSucesso] = useState(false);
    const [erroLogin, setErroLogin] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/login', {
                email,
                senha,
            });

            console.log('Login bem-sucedido', response.data);
            localStorage.setItem('token', response.data.token);
            setLoginSucesso(true);
            setErroLogin('');
        } catch (error) {
            console.error('Erro no login', error);
            setErroLogin(error.response?.data.message || 'Erro no login');
            setLoginSucesso(false);
        }
    };

    return (
        <div className="fullscreen-wrapper">
            <div className="welcome-text">
                <h1>Bem-vindo de volta ao Auto<span className="highlight">Care</span></h1>
                <h2>O seu app para gestão de frotas</h2>
            </div>
            <div className="login-container">
                <div className="login-block">
                    <h2 className="login-title">Login</h2>

                    <form className="login-form" onSubmit={handleLogin}>
                        <div className="input-group">
                            <label>E-mail</label>
                            <input
                                className="login-input"
                                type="email"
                                placeholder='E-mail'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Senha</label>
                            <input
                                type="password"
                                placeholder='Senha'
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />
                        </div>
                        <button className="login-button" type="submit">LOGIN</button>
                    </form>

                    {/* Adicionei para mostrar mensagens de erro e sucesso */}
                    {loginSucesso && <p style={{ color: 'green' }}>Login realizado com sucesso!</p>}
                    {erroLogin && <p style={{ color: 'red' }}>{erroLogin}</p>}
                    <p className="signup-text">Ainda não possui uma conta? <a href="#" className="signup-link">Cadastre-se aqui!</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
