import React,{useState} from 'react';


const Login = (props) => {
  const [user,setUser] = useState({
    email:'',
    password:''
  });



  const {email,password} = user;

  const changehandler = e =>{
    setUser({...user,[e.target.name]:e.target.value})
  }

  const submitHandler = e =>{
    e.preventDefault();
    console.log('Login submit');
  }
  return (
    <div className="form-container">
      <h1>Account <span className="text-success">Login</span></h1>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" value={email} name="email" onChange={changehandler} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" value={password} name="password" onChange={changehandler} />
        </div>

        <input type="submit" value="Register" className="btn btn-success btn-block" />
      </form>
    </div>
  )
}

export default Login
