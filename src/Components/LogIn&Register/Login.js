import "./LogIn.css";
import LogInBg from "../../assets/LoginBg.jpg";
import bird from "../../assets/bird.gif";
import tree from "../../assets/tree.gif";
const Login = () => {
  return (
    <div className="main-login" style={{ backgroundImage: `url(${LogInBg})` }}>
      <img className="bird" src={bird} alt="birds"></img>
      <img className="tree" src={tree} alt="trees"></img>
      <div className="login-div">
        <div className="login-div-inner">
          <form>
            <label>Email</label>
            <input></input>
            <label>Password</label>
            <input></input>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
