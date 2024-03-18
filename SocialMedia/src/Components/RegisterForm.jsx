import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

function RegisterForm() {
  const router = useNavigate();

  const [userData, setUserData] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  async function handleSubmit(event) {
    event.preventDefault();

    if (userData.email && userData.password && userData.name && userData.confirmPassword) {
      if (userData.password === userData.confirmPassword) {
        try {
          // Simulating registration success
          const response = { data: { success: true, message: 'Registration successful' } };

          if (response.data.success) {
            const newUser = { ...userData }; // Clone the user data object
            setUserData({ name: '', email: '', password: '', confirmPassword: '' });
            toast.success(response.data.message);

            // Retrieve existing registered users from localStorage
            const registeredUsers = JSON.parse(localStorage.getItem('RegisteredUsers')) || [];
            registeredUsers.push(newUser); // Add the new user
            localStorage.setItem('RegisteredUsers', JSON.stringify(registeredUsers)); // Save updated list

            router('/loginForm');
          }
        } catch (error) {
          alert('Registration failed');
        }
      } else {
        alert('Passwords do not match');
      }
    } else {
      alert('All fields are required');
    }
  }

  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  return (
    <div className=' py-16'>
      <div className='w-[500px] border m-auto p-4 rounded-md'>
        <h1 className=' text-center text-2xl mb-6'>RegisterForm</h1>
        <form onSubmit={handleSubmit}>
          <input className='mb-8 border rounded-sm w-full h-10 px-2' type="text" name="name" placeholder={'Name'} value={userData.name} onChange={handleChange} /><br />
          <input className='mb-8 border rounded-sm w-full h-10 px-2' placeholder={'Email'} type="email" name="email" value={userData.email} onChange={handleChange} /><br />
          <input className='mb-8 border rounded-sm w-full h-10 px-2' placeholder={'Password'} type="password" name="password" value={userData.password} onChange={handleChange} /><br />
          <input className='mb-8 border rounded-sm w-full h-10 px-2' placeholder={'Confirm Password'} type="password" name="confirmPassword" value={userData.confirmPassword} onChange={handleChange} /><br />
          <p>login to an account : <Link className=' text-blue-400' to='/loginForm'>Login</Link></p>

          <p className=' mt-6 '>Go to Home : <Link className=' text-blue-400' to={'/'}>Home</Link></p>
          <div className=' flex justify-center'>
            <input className=' bg-gray-700 hover:bg-gray-500 py-2 mt-4 px-4 rounded-sm text-white' type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
