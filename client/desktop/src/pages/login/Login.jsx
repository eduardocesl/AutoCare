import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loginSucesso, setLoginSucesso] = useState(false); // Estado para controlar o sucesso do login
  const [erroLogin, setErroLogin] = useState(''); // Estado para controlar mensagem de erro

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login bem-sucedido', data);
        localStorage.setItem('token', data.token);
        setLoginSucesso(true); // Define login como bem-sucedido
        setErroLogin('');
      } else {
        setErroLogin(data.message); // Exibe a mensagem de erro
        setLoginSucesso(false);
      }
    } catch (error) {
      console.error('Erro na requisição', error);
      setErroLogin('Erro na requisição ao servidor.');
      setLoginSucesso(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>

      {/* Exibe alerta de sucesso */}
      {loginSucesso && (
        <div style={{ color: 'green' }}>
          <p>Login realizado com sucesso!</p>
        </div>
      )}

      {/* Exibe alerta de erro */}
      {erroLogin && (
        <div style={{ color: 'red' }}>
          <p>{erroLogin}</p>
        </div>
      )}

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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
