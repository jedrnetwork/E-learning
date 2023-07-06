import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './signup.css'

const Signup = () => {
  const schema = yup.object().shape({
    firstName: yup.string().min(3).required('First Name is empty or less than 3 characters !'),
    lastName: yup.string().required().min(3).required('Last Name is empty or less than 3 characters !'),
    email: yup.string().email().required("Email is incorrect !"),
    username: yup.string().min(2).required("Username is empty or less than 2 characters !"),
    gender: yup.string().required(),
    nationality: yup.string().required("Nationality must be completed !"),
    college: yup.string().required("College must be completed !"),
    major: yup.string().required("Major must be completed !"),
    password: yup.string().min(8).max(20).required("You need to enter a password !"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null],"Password do not match !").required(),
  });

  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="signup__page">
      <div className='form-container'>
      <h1 className='gradient__text'>Discover endless possibilities by registering here and hack the future with us!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign up</h1>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="id_first_name">First Name:</label>
            <input type="text" id="id_first_name" placeholder='First name...'{...register('firstName')} />
            <p>{errors.firstName?.message}</p>
          </div>
          <div className="form-group">
            <label htmlFor="id_last_name">Last Name:</label>
            <input type="text" id="id_last_name" placeholder='Last name...'{...register('lastName')} />
            <p>{errors.lastName?.message}</p>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="id_email">Email:</label>
            <input type="email" id="id_email" placeholder="Email..."{...register('email')} />
            <p>{errors.email?.message}</p>
          </div>

          <div className="form-group">
            <label htmlFor="id_username">Username:</label>
            <input type="text" id="id_username" placeholder="Username..."{...register('username')} />
            <p>{errors.username?.message}</p>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="id_gender">Gender:</label>
            <select name="gender" id="id_gender" {...register('gender')}>
            <p>{errors.gender?.message}</p>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="O">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="id_nationality">Nationality:</label>
            <input type="text" id="id_nationality" placeholder="Nationality..."{...register('nationality')} />
            <p>{errors.nationality?.message}</p>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="id_enrolled_school">School/College:</label>
            <input type="text" id="id_enrolled_school" placeholder="School/College..."{...register('college')} />
            <p>{errors.college?.message}</p>
          </div>

          <div className="form-group">
            <label htmlFor="id_field_of_study">Major:</label>
            <input type="text" id="id_field_of_study" placeholder="Major..."{...register('major')} />
            <p>{errors.major?.message}</p>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="id_password1">Password:</label>
            <input type="password" id="id_password1" placeholder="Password..."{...register('password')} />
            <p>{errors.password?.message}</p>
          </div>
          <div className="form-group">
            <label htmlFor="id_password2">Confirm Password:</label>
            <input type="password" id="id_password2" placeholder="Confirm password.."{...register('confirmPassword')} />
            <p>{errors.confirmPassword?.message}</p>
          </div>
        </div>
        <input type="submit" value="Register" className='registerBtn'/>
      </form>
      </div>
    </div>
  );
};

export default Signup;
