import CircleKiri from '../../assets/img/circle_kiri.png';
import CircleKanan from '../../assets/img/circle_kanan.png';
import Logo from '../../assets/svg/logo-animation.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function LoginUser() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [msg, setMsg] = useState('');
    const history = useNavigate();

    const Auth = async(e) =>{
        e.preventDefault();
        console.log(email);
        console.log(password);
        try { 
            const response = await axios.post('http://localhost:8000/login', {
                email: email,
                password: password,
            });
            // localStorage.setItem('accessToken', response.data.accessToken)
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
            history("/join");
        } catch (error) {
            if (error.response){
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <main className="relative min-h-screen w-full items-center justify-center flex overflow-y-hidden">
            <img src={CircleKiri} className="absolute top-0 left-0 -mt-20 select-none -z-10" />
            <img src={CircleKanan} className="absolute top-0 right-0 -mt-20 select-none -z-10" />
            <img src={CircleKiri} className="absolute bottom-0 right-0 rotate-180 -mb-20 select-none -z-10" />
            <img src={CircleKanan} className="absolute bottom-0 left-0 rotate-180 -mb-20 select-none -z-10" />

            <div className="w-[42rem] h-[46rem] absolute blur-3xl opacity-20 -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full"></div>

            <form onSubmit={ Auth } className="max-w-3xl flex flex-col bg-[#1C1C65] p-8 justify-center rounded-lg">
                <div className="logo flex justify-center">
                    <img src={Logo} width={142} />
                </div>

                <h1 className="font-semibold text-2xl my-6">Welcome to Upvote Books</h1>
                <p className='text-center'>{msg}</p>
                

                <label htmlFor="email" className="text-sm">
                    Email
                    <input 
                        type="email" 
                        id="email" 
                        className="block w-full bg-white/10 py-2 px-3 mb-4 mt-2 rounded-sm outline-none ring-1 ring-white/30 hover:ring-blue-200/60" 
                        placeholder="youremail@gmail.com"  
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                </label>

                <label htmlFor="password" className="text-sm">
                    Password
                    <input 
                        type="password" 
                        placeholder="Enter your password here" 
                        d="password" 
                        name="password" 
                        className="block w-full bg-white/10 py-2 px-3 mb-4 mt-2 rounded-sm outline-none ring-1 ring-white/30 hover:ring-blue-200/60"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                </label>

                <Link to={'/forgot'} className="text-start underline text-blue-400 mt-3 text-sm">
                    Forgot password?
                </Link>

                <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 px-10 py-2 font-semibold rounded-sm mt-2 cursor-pointer">
                    Login 
                </button>

                <span className="text-center mt-4 text-sm">
                    Don't have an account?{' '}
                    <a href="/signup" className="underline text-blue-400">
                        Signup here
                    </a>
                </span>
            </form>
        </main>
    );
}
