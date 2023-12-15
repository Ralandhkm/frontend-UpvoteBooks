import CircleKiri from '../../assets/img/circle_kiri.png';
import CircleKanan from '../../assets/img/circle_kanan.png';

export default function ForgotPassword() {
    return (
        <main className="min-h-screen w-full flex justify-center items-center relative overflow-x-hidden md:overflow-hidden">
            <div className="container flex flex-col md:flex-row max-w-5xl mx-auto items-center py-20 md:py-8 px-8 rounded-xl gap-10 md:gap-0">
                <img src="/src/assets/img/forgot-il.png" alt="Forgot pass il" className="select-none" />
                <div className="forgot-input mt-1 md:mt-0">
                    <h1 className="font-medium text-3xl mb-4">Forgot Password</h1>
                    <p className="mb-6">Enter your Email and we’ll send you a link to reset your password</p>
                    <label htmlFor="email" className="relative group">
                        <i class="bi bi-envelope absolute left-3 top-1/2 -translate-y-1/2 text-white/50 group-hover:text-white"></i>
                        <input type="email" name="email" id="email" className="block w-full bg-white/10 py-2 pl-10 pr-3 rounded-sm outline-none ring-1 ring-white/30 hover:ring-blue-200/60" placeholder="Enter your email address..." />
                    </label>
                    <button className="px-3 py-2 bg-indigo-600 rounded-md mt-6 block">Reset Password</button>
                </div>
            </div>
        </main>
    );
}
