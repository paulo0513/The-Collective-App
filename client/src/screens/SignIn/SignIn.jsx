import './SignIn.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignIn(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const { username, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  } 

  return (
    <div>
      <h3>Login</h3>
      <label>Username:
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
          />
      </label>
      <label>Password:
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          />
      </label>
      <Link>Register</Link>
      <button>Submit</button>
    </div>
  )
}
