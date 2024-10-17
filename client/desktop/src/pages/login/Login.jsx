import { useState } from 'react';
import axios from 'axios';

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
        <div>
            <h2>Login</h2>

            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Entrar</button>
            </form>

            {/* Adicionei para mostrar mensagens de erro e sucesso */}
            {loginSucesso && <p style={{ color: 'green' }}>Login realizado com sucesso!</p>}
            {erroLogin && <p style={{ color: 'red' }}>{erroLogin}</p>}
        </div>
    );
};

export default Login;
