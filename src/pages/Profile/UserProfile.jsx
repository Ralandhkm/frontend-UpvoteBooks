import Profile from '../../assets/img/ProfileMedium.png';
import { NavLink, useLocation } from 'react-router-dom';
import StatusCard from '../../components/Card/StatusCard';
import BookCard from '../../components/Card/BookCard';
import books from '../../data/Api';

export default function UserProfile() {
    const profileDatas = {
        name: 'Dedi Afrizal',
        img: Profile,
        university: 'Institut Teknologi Bandung',
        email: 'dediafrizal@gmail.com',
        pass: 'kurakuraninja12',
    };

    const location = useLocation();
    const path = location.pathname;

    return (
        <div className="mx-auto max-w-6xl px-8 md:mt-10 flex flex-col items-center md:rounded-xl py-10">
            <Header profile={profileDatas} />
            <section id="book" className="w-full">
                <hr className="my-10 border-white/10" />
                <SectionBook books={books} path={path} />
            </section>
        </div>
    );
}

function Header({ profile }) {
    return (
        <>
            <div className="profile mt-20 w-24 h-24 rounded-full bg-slate-400 object-cover">
                <img src={profile.img} alt={profile.name} />
            </div>
            <h2 className="text-xl font-semibold mt-4 mb-1">{profile.name}</h2>
            <h4 className="text-xl text-white/70 font-semibold">{profile.university}</h4>
            <div className="w-3/4 md:w-1/2 mt-8">
                <label htmlFor="name">
                    Name
                    <input type="text" id="name" className="block w-full bg-white/10 py-2 px-3 mb-4 mt-2 rounded-sm outline-none ring-1 ring-white/30 hover:ring-blue-200/60" name="name" placeholder={profile.name} />
                </label>
                <label htmlFor="email">
                    Email
                    <input type="email" id="email" className="block w-full bg-white/10 py-2 px-3 mb-4 mt-2 rounded-sm outline-none ring-1 ring-white/30 hover:ring-blue-200/60" name="email" placeholder={profile.email} />
                </label>
                <label htmlFor="university">
                    University
                    <input type="text" id="university" className="block w-full bg-white/10 py-2 px-3 mb-4 mt-2 rounded-sm outline-none ring-1 ring-white/30 hover:ring-blue-200/60" name="university" placeholder={profile.university} />
                </label>
                <button className="bg-indigo-500 hover:bg-indigo-600 block ml-auto px-6 py-2 font-semibold rounded-md">Save</button>
            </div>
        </>
    );
}

function SectionBook({ books, path }) {
    return (
        <>
            <NavSectionBook />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">{path == '/profile' ? <StatusCard books={books} /> : <BookCard books={books} />}</div>
        </>
    );
}

function NavSectionBook() {
    const activeStyles = 'bg-indigo-600 px-6 py-3 rounded-md';
    const normalStyles = 'bg-white/10 px-6 py-3 rounded-md';

    return (
        <div className="flex gap-x-4 justify-center md:justify-start">
            <div className="flex gap-x-4">
                <NavLink to="/profile" end className={({ isActive }) => (isActive ? activeStyles : normalStyles)}>
                    History Vote
                </NavLink>
                <NavLink to="/profile/request" className={({ isActive }) => (isActive ? activeStyles : normalStyles)}>
                    Request Book
                </NavLink>
            </div>
            <div className="px-4 py-2 cursor-pointer bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md flex justify-center items-center ml-auto">Logout</div>
        </div>
    );
}
