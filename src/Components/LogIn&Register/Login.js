import "./LogIn.css";
const Login = () => {
  return (
    <div className="main">
      <div className="innerdiv">
        <form>
          <label>Email</label>
          <input placeholder="enter email.."></input>
          <label>Password</label>
          <input placeholder="enter password.."></input>
        </form>
      </div>
    </div>
  );
};

export default Login;
