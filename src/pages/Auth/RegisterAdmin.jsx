import CircleKiri from '../../assets/img/circle_kiri.png';
import CircleKanan from '../../assets/img/circle_kanan.png';

const RegisterAdmin = () => {
    return (
        <main className="relative min-h-screen w-full items-center justify-center flex overflow-y-hidden backdrop-blur-3xl">
            <img src={CircleKiri} className="absolute top-0 left-0 -mt-20 select-none -z-10" />
            <img src={CircleKanan} className="absolute top-0 right-0 -mt-20 select-none -z-10" />
            <img src={CircleKiri} className="absolute bottom-0 right-0 rotate-180 -mb-20 select-none -z-10" />
            <img src={CircleKanan} className="absolute bottom-0 left-0 rotate-180 -mb-20 select-none -z-10" />

            <div className="w-[42rem] h-[46rem] absolute blur-3xl opacity-20 -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full"></div>

            <div className="max-w-7xl flex flex-col bg-[#1C1C65] px-8 py-5 justify-center rounded-lg">
                <h1 className="text-center font-bold text-2xl mb-3">Create your account</h1>
                <span className="text-center mb-4 text-white/70">Let's create an account to Upvote books to get in features</span>
                <div className="w-full grid grid-cols-2 gap-4">
                    <div className="admin-info w-[400px] flex flex-col">
                        <label htmlFor="name" className="text-sm">
                            Name
                            <input type="text" placeholder="Enter your name here" id="name" name="name" className="block w-full bg-white/10 py-2 px-3 mb-4 mt-2 rounded-sm outline-none ring-1 ring-white/30 hover:ring-blue-200/60" />
                        </label>

                        <label htmlFor="email" className="text-sm">
                            Email
                            <input type="email" placeholder="youremail@gmail.com" id="email" name="email" className="block w-full bg-white/10 py-2 px-3 mb-4 mt-2 rounded-sm outline-none ring-1 ring-white/30 hover:ring-blue-200/60" />
                        </label>

                        <label htmlFor="nip" className="text-sm">
                            NIP
                            <input type="text" placeholder="Enter your NIP" id="nip" name="nip" className="block w-full bg-white/10 py-2 px-3 mb-4 mt-2 rounded-sm outline-none ring-1 ring-white/30 hover:ring-blue-200/60" />
                        </label>

                        <label htmlFor="password" className="text-sm">
                            Password
                            <input type="password" placeholder="Enter your password here" id="password" name="password" className="block w-full bg-white/10 py-2 px-3 mb-4 mt-2 rounded-sm outline-none ring-1 ring-white/30 hover:ring-blue-200/60" />
                        </label>

                        <label htmlFor="re-password" className="text-sm">
                            Confirm Password
                            <input
                                type="password"
                                placeholder="Re-enter your password here"
                                id="re-password"
                                name="re-password"
                                className="block w-full bg-white/10 py-2 px-3 mb-4 mt-2 rounded-sm outline-none ring-1 ring-white/30 hover:ring-blue-200/60"
                            />
                        </label>
                    </div>

                    <div className="university-info">
                        <label for="image" class="group h-[224px] border-2 border-dashed border-white/50 hover:border-indigo-600/50 cursor-pointer rounded-xl flex flex-col items-center justify-center py-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="100" viewBox="0 0 24 24" class="text-white/50 group-hover:text-indigo-600/50">
                                <path
                                    fill="currentColor"
                                    fill-rule="evenodd"
                                    d="M7.268 4.658a54.647 54.647 0 0 1 9.465 0l1.51.132a3.138 3.138 0 0 1 2.831 2.66a30.604 30.604 0 0 1 0 9.1c-.04.264-.112.517-.212.754c-.066.157-.27.181-.386.055l-4.421-4.864a.75.75 0 0 0-.792-.207l-2.531.844l-3.671-4.13A.75.75 0 0 0 7.97 8.97l-4.914 4.914a.246.246 0 0 1-.422-.159a30.601 30.601 0 0 1 .292-6.276a3.138 3.138 0 0 1 2.831-2.66l1.51-.13ZM14 9a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Z"
                                    clip-rule="evenodd"
                                />
                                <path
                                    fill="currentColor"
                                    d="M2.961 16.1a.249.249 0 0 0-.07.21l.035.24a3.138 3.138 0 0 0 2.831 2.66l1.51.131c3.15.274 6.316.274 9.466 0l1.51-.131a3.13 3.13 0 0 0 1.185-.347c.137-.071.16-.252.056-.366l-4.1-4.51a.25.25 0 0 0-.265-.07l-2.382.794a.75.75 0 0 1-.798-.213l-3.295-3.707a.25.25 0 0 0-.364-.01l-5.319 5.318Z"
                                />
                            </svg>
                            <h1 class="text-white/50 group-hover:text-indigo-600/50">University Image</h1>
                            <input type="file" id="image" name="cover" accept="image" required hidden />
                        </label>
                        <label htmlFor="universityName" className="text-sm block mt-4">
                            University Name
                            <input type="text" placeholder="Enter university name" id="university" name="university" className="block w-full bg-white/10 py-2 px-3 mb-4 mt-2 rounded-sm outline-none ring-1 ring-white/30 hover:ring-blue-200/60" />
                        </label>
                        <label htmlFor="libraryName" className="text-sm block mt-4">
                            Library Name
                            <input type="text" placeholder="Enter library name" id="library" name="university" className="block w-full bg-white/10 py-2 px-3 mb-4 mt-2 rounded-sm outline-none ring-1 ring-white/30 hover:ring-blue-200/60" />
                        </label>
                    </div>
                </div>
                <div className="flex flex-col">
                    <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 px-10 py-2 font-semibold rounded-sm mt-2 cursor-pointer">
                        Signup
                    </button>
                    <span className="text-center mt-4">
                        Already have an account?{' '}
                        <a href="/admin/login" className="underline text-blue-400">
                            Login here
                        </a>
                    </span>
                </div>
            </div>
        </main>
    );
};

export default RegisterAdmin;
