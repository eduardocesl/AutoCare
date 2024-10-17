const Login = () => {
    return (
      <div>
        <h2>Login</h2>
  
        <form>
          <div>
            <label>Email:</label>
            <input type="email" required />
          </div>
          <div>
            <label>Senha:</label>
            <input type="password" required />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  };
  
  export default Login;
  