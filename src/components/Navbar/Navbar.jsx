import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import LogoSmall from '../../assets/svg/logo-animation.svg';
import Profile from '../../assets/img/profile.png';

export default function Navbar() {
    const menus = [
        { name: 'Home', linkTo: '/' },
        { name: 'Browse', linkTo: '/browse' },
        { name: 'Purchased', linkTo: '/purchased' },
        { name: 'Create Vote', linkTo: '/vote' },
        { name: 'About', linkTo: '/about' },
    ];

    return (
        <nav className="flex items-center justify-between px-10 py-6 sticky top-0 bg-[#050426] border-b border-white/5 backdrop-blur-3xl z-50">
            <a href="/" className="order-2 md:order-1">
                <img src={Logo} alt="logo" />
            </a>
            <ul
                className={`flex flex-row max-md:absolute max-md:top-full max-md:left-0 max-md:px-10 py-4 sm:py-8 md:py-0 max-md:bg-[#050426] max-md:border-y max-md:border-white/5 z-50 max-md:w-full items-center gap-4 md:-ml-36 order-1 md:order-2 justify-center`}
            >
                {menus.map((menu, index) => (
                    <li key={index}>
                        <NavLink to={menu.linkTo} className={({ isActive }) => (isActive ? 'active' : '')}>
                            {menu.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <a href="/profile" className="profile rounded-full order-3">
                <img src={Profile} />
            </a>
        </nav>
    );
}
