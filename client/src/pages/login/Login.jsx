import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <div className='container'>
       
      <div className="Login">
        <h1>Login</h1>
        <div className="log">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">
              <i className="fa fa-id-badge"></i>
            </label>
            <input
              type="text"
              className="id_username"
              placeholder="Type email"
              {...register('email')}
            />
            <br />
            <label htmlFor="password">
              <i className="fa fa-lock"></i>
            </label>
            <input
              type="password"
              className="password"
              name="password"
              id="pwd"
              placeholder="Password"
              required
              {...register('password')}
            />
            <br />
            <div className="forgot">
              <div>
                <input type="checkbox" className="checkMe" id="checkMe" />
                <span>Remember me</span>
              </div>
              <Link to="/change_password">Forgot password ?</Link>
            </div>
            <h3></h3>
            <input
              type="submit"
              value="Login"
              className="loginBtn"
              id="LogInBtn"
            />
          </form>
        </div>

        <h3>Don't have an account?</h3>
        <div className="sin">
          <Link className="LetSin" to="/jedr-tech-signup">Create account</Link>
        </div>
        <div className="followUs">
          <h4>Follow us</h4>
          <br />
          <Link>
            <i className="fa fa-linkedin"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
