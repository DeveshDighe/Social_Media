import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link, Route, useNavigate } from 'react-router-dom';
import { myContext } from '../Store/Data';

function LoginForm() {

    const [registeredUsers, SetregisteredUsers] = useState(null)

    let { state, dispatch } = useContext(myContext)
    // console.log(state, '-state');

    const [Text, SetText] = useState({ email: '', password: '' })
    // console.log(Text);

    const router = useNavigate();

    function detectChange(event) {
        SetText({ ...Text, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        SetregisteredUsers(JSON.parse(localStorage.getItem('RegisteredUsers')))
        // console.log(registeredUsers, 'rerererrerer');
    }, [])


    async function submitDetect(event) {
        event.preventDefault();

        if (Text.email && Text.password) {
            try {

                // const response = await axios.post('http://localhost:8000/login', { loginData })
                // if (registeredUsers.includes(Text.email)) {
                //     console.log('kakakakakakak');
                // }

                const isUserExist = registeredUsers.filter((val) => val.email == Text.email)
                // console.log(isUserExist, 'kakakakakakakakakakakakakhahahahahaha');
                const user = isUserExist[0]
                // console.log(user, 'NPNPNPNPNPNPNPNPNPNPNPNNP');

                if (!user) {
                    return toast.error('User do not exist')
                }

                // if (user.email != Text.email) {
                //     return toast.error('Email Do Not Matched')
                // }

                if (user.password != Text.password || user.email != Text.email) {
                    return toast.error('Email And PassWord Did Not Matched')
                }

                const response = { data: { success: true, message: 'Login Successful', user: { name: user.name, email: user.email } } }

                if (response.data.success == true) {
                    toast.success(response.data.message)
                     // ********* removing it(dispatch) becase it is showing name and email on home page so i am getting problem for loginformbackend************************
                    dispatch({ type: 'LOGIN', payload: response.data.user }) //payload is a key and we are assigning value to the key
                    localStorage.setItem('currentUser', JSON.stringify(response.data.user))
                    SetText({ email: '', password: '' })
                    router('/')
                }


            } catch (error) {
                // console.log(error)
                toast.error(error.response.data.error)
            }
        }

        else {
            toast('All Fields Are Mandatory')
        }

    }
    return (
        <div className=' py-16'>
            <div className='w-[500px] border m-auto p-4 rounded-md'>
            <h1 className=' text-center text-2xl mb-6'>LoginForm</h1>
            <form action="" onSubmit={submitDetect}>
                {/* <label htmlFor="">Email</label><br /> */}
                <input className='mb-8 border rounded-sm w-full h-10 px-2' placeholder={'Email'} type="email" onChange={detectChange} name='email' value={Text.email} /><br />
                {/* <label htmlFor="">Password</label><br /> */}
                <input type="password" className='mb-8 border rounded-sm w-full h-10 px-2' onChange={detectChange} placeholder={'Password'} name='password' value={Text.password} /><br />
                <p>Create an account : <Link className=' text-blue-400' to='/register'>Register</Link></p>
                <p className=' mt-6 '>Go to Home : <Link className=' text-blue-400' to={'/'}>Home</Link></p>
                <div className=' flex justify-center'>
                <input className=' bg-gray-700 hover:bg-gray-500 py-2 mt-4 px-4 rounded-sm text-white' type="submit" />

                </div>

            </form>
            </div>
        </div>
    )
}

export default LoginForm