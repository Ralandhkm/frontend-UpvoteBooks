import CircleKiri from '../../assets/img/circle_kiri.png';
import CircleKanan from '../../assets/img/circle_kanan.png';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const RegisterUser = () => {
    const [ nama, setNama ] = useState('');
    const [ npm_nis, setNpmnis ] = useState('');
    const [ email, setEmail ] = useState(' ');
    const [ password, setPassword ] = useState('');
    const [ confPassword, setConfPassword ] = useState('');
    const [msg, setMsg] = useState('');
    const history = useNavigate();

    const Register = async(e) =>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/users', {
                nama: nama,
                npm_nis: npm_nis,
                email: email,
                password: password,
                confPassword: confPassword,
            })
            console.log(response);
            history("/login");
        } catch (error) {
            if (error.response){
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <main className="relative min-h-screen w-full items-center justify-center flex overflow-y-hidden backdrop-blur-3xl">
            <img src={CircleKiri} className="absolute top-0 left-0 -mt-20 select-none -z-10" />
            <img src={CircleKanan} className="absolute top-0 right-0 -mt-20 select-none -z-10" />
            <img src={CircleKiri} className="absolute bottom-0 right-0 rotate-180 -mb-20 select-none -z-10" />
            <img src={CircleKanan} className="absolute bottom-0 left-0 rotate-180 -mb-20 select-none -z-10" />

            <div className="w-[42rem] h-[46rem] absolute blur-3xl opacity-20 -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full"></div>

            <form onSubmit={ Register } className="max-w-lg flex flex-col bg-[#1C1C65] px-8 py-5 justify-center rounded-lg">
                
                <h1 className="text-center font-bold text-2xl mb-3">Create your account</h1>
                <span className="text-center mb-4 text-white/70">Let's create an account to Upvote books to get in features</span>
                <p className='text-center'>{msg}</p>  

                <label htmlFor="name" className="text-sm">
                    Name
                    <input type="text" placeholder="Enter your name here" id="name" name="name" className="block w-full bg-white/10 py-2 px-3 mb-4 mt-2 rounded-sm outline-none ring-1 ring-white/30 hover:ring-blue-200/60" required
                    value={nama} onChange={(e) => setNama(e.target.value)}
                    />
                </label>

                <label htmlFor="email" className="text-sm">
                    Email
                    <input type="email" placeholder="youremail@gmail.com" id="email" name="email" className="block w-full bg-white/10 py-2 px-3 mb-4 mt-2 rounded-sm outline-none ring-1 ring-white/30 hover:ring-blue-200/60" required
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label htmlFor="npm" className="text-sm flex-1">
                    NPM/NIS
                    <input type="text" placeholder="Enter your NPM/NIS" id="npm" name="npm" className="block w-full bg-white/10 py-2 px-3 mb-4 mt-2 rounded-sm outline-none ring-1 ring-white/30 hover:ring-blue-200/60" required
                    value={npm_nis} onChange={(e) => setNpmnis(e.target.value)}
                    />
                </label>

                <label htmlFor="password" className="text-sm">
                    Password
                    <input type="password" placeholder="Enter your password here" id="password" name="password" className="block w-full bg-white/10 py-2 px-3 mb-4 mt-2 rounded-sm outline-none ring-1 ring-white/30 hover:ring-blue-200/60" required
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                </label>

                <label htmlFor="re-password" className="text-sm">
                    Confirm Password
                    <input type="password" placeholder="Re-enter your password here" id="re-password" name="re-password" className="block w-full bg-white/10 py-2 px-3 mb-4 mt-2 rounded-sm outline-none ring-1 ring-white/30 hover:ring-blue-200/60" required
                    value={confPassword} onChange={(e) => setConfPassword(e.target.value)} 
                    />
                </label>

                <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 px-10 py-2 font-semibold rounded-sm mt-2 cursor-pointer">
                    Signup
                </button>
                <span className="text-center mt-4">
                    Already have an account?{' '}
                    <a href="/login" className="underline text-blue-400">
                        Login here
                    </a>
                </span>
            </form>
        </main>
    );
};

export default RegisterUser;
