






const Login = () => {
  return (
    <div className="login-container">
      <div className="login">
        <h1>Login</h1>
        <form action="">
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="Enter email" />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter password" />
          </div>
          <button className="btn btn-block">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;