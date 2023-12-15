import BookCard from '../../components/Card/BookCard';
import books from '../../data/Api';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

export default function Home() {
    const getUser = async () => {
        try {
            const response = await axios.get('http://localhost:8000/user', {
                email:'satrio@gmail.com'
            })
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        getUser()
    },[])
    return (
        <>
            <HeroSection />
            <RecomendationSection books={books} />
            <AnimationSection />
            <PopularSection books={books} />
            <WorkSection />
            <DownloadSection />
        </>
    );
}

function HeroSection() {
    return (
        <section id="hero-section" className="flex flex-col-reverse md:flex-row max-w-5xl mx-auto mt-32 md:mt-10 items-center gap-10 md:gap-0">
            <div className="hero-description max-w-xl px-8">
                <h1 className="text-4xl font-bold mb-4">Request Book Here !</h1>
                <p className="text-lg mb-6">You are welcome to request the books you want! Every request is a new opportunity to explore infinite literacy adventures together. Ask us what you want, and we'll try to make it happen for you.</p>
                <button className="px-4 py-3 bg-indigo-500 hover:bg-indigo-600 font-bold rounded-lg">Request Now</button>
            </div>
            <div className="hero-img relative">
                <img src="/src/assets/svg/gradient-hero.svg" alt="gradient hero" className="absolute top-[30%] -right-0" />
                <img src="/src/assets/svg/hero-img.svg" alt="hero-img" id="hero-illustration" />
            </div>
        </section>
    );
}

function RecomendationSection({ books }) {
    const recomendationBooks = books.filter((book) => book.id <= 3);
    return (
        <section id="recomendations" className="mx-auto max-w-5xl px-8 mt-32">
            <h1 className="text-center font-semibold text-3xl mb-10">Recomendation</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                <BookCard books={recomendationBooks} />
            </div>
        </section>
    );
}

function AnimationSection() {
    return (
        <section id="animation" className="w-full h-[500px] bg-[#2F2F8A] mt-20 flex gap-x-20 items-center justify-center">
            <div className="animation-left relative">
                <div className="absolute bg-sky-500/50 blur-3xl w-[350px] h-[300px] top-1/2 -translate-y-1/2 -left-9 rounded-full z-10]"></div>
                <img src="/src/assets/svg/logo-animation.svg" alt="logo animation left" className="relative" />
                <h4 className="text-center font-bold text-3xl relative">Upvote Books</h4>
            </div>

            <div className="animation-right">
                <img src="/src/assets/img/Animation-vote.png" alt="vote animation" />
            </div>
        </section>
    );
}

function PopularSection({ books }) {
    // Sorting book terpopuler
    let sortedBooks = books.sort((a, b) => b.countVote - a.countVote);

    // Ambil 6 teratas
    const popularBooks = sortedBooks.filter((_, index) => index < 6);

    return (
        <section id="popular" className="mx-auto max-w-5xl px-8 mt-32">
            <h1 className="text-center font-semibold text-3xl mb-10">Most Popular</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <BookCard books={popularBooks} />
            </div>
        </section>
    );
}

function WorkSection() {
    return (
        <section id="how" className="w-full justify-center items-center flex flex-col bg-[#2F2F8A] mt-32 py-32">
            <h1 className="font-bold text-5xl mb-4">How it Works?</h1>
            <p className="text-xl text-white/70 text-center max-w-4xl mb-6">
                At UpBooks, user voting takes precedence! Books that receive the highest votes from the community of students and users will be the primary consideration for the library staff.
            </p>
            <div className="flex md:flex-row flex-col mt-16 gap-x-8 gap-y-6">
                <div className="md:w-[300px] w-full h-auto p-6 relative bg-white/10 rounded-md">
                    <div className="absolute w-10 h-10 bg-indigo-600 -top-4 left-1/2 -translate-x-1/2 justify-center items-center flex rounded-md font-semibold text-lg">1</div>
                    <div className="relative mt-4">
                        <h2 className="font-medium text-lg">Request</h2>
                        <p className="text-white/70">Request books that you would like to see in the library to increase your interest in reading.</p>
                    </div>
                </div>
                <span className="font-poppins hidden md:inline-flex my-auto text-3xl text-white/50">{'>'}</span>
                <div className="md:w-[300px] w-full h-auto p-6 relative bg-white/10 rounded-md">
                    <div className="absolute w-10 h-10 bg-indigo-600 -top-4 left-1/2 -translate-x-1/2 justify-center items-center flex rounded-md font-semibold text-lg">2</div>
                    <div className="relative mt-4">
                        <h2 className="font-medium text-lg">Vote</h2>
                        <p className="text-white/70">Vote for books to increase book purchasing opportunities at libraries.</p>
                    </div>
                </div>
                <span className="font-poppins hidden md:inline-flex my-auto text-3xl text-white">{'>'}</span>
                <div className="md:w-[300px] w-full h-auto p-6 relative bg-white/10 rounded-md">
                    <div className="absolute w-10 h-10 bg-indigo-600 -top-4 left-1/2 -translate-x-1/2 justify-center items-center flex rounded-md font-semibold text-lg">3</div>
                    <div className="relative mt-4">
                        <h2 className="font-medium text-lg">Confirm</h2>
                        <p className="text-white/70">then the library will consider and confirm the purchase of books with the highest vote.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function DownloadSection() {
    return (
        <section id="download" className="flex md:flex-row flex-col w-full items-center justify-center mt-20 py-16 gap-8">
            <div className="download-img">
                <img src="/src/assets/img/mockup.png" alt="mockup" />
            </div>
            <div className="download-description">
                <h1 className="font-bold text-5xl mb-8">What's Included!</h1>
                <ul className="gap-y-4 flex flex-col">
                    <li className="text-xl">
                        <i className="bi bi-check text-base mr-3 px-2 py-1 bg-white text-black rounded-full"></i>
                        Request your favorite Book
                    </li>
                    <li className="text-xl">
                        <i className="bi bi-check text-base mr-3 px-2 py-1 bg-white  text-black rounded-full"></i>
                        Create your favorite Book
                    </li>
                    <li className="text-xl">
                        <i className="bi bi-check text-base mr-3 px-2 py-1 bg-white text-black rounded-full"></i>
                        Vote Book
                    </li>
                    <li className="text-xl">
                        <i className="bi bi-check text-base mr-3 px-2 py-1 bg-white text-black rounded-full"></i>
                        View the status of purchased books
                    </li>
                </ul>
                <Link className="px-6 py-2 bg-white text-black block mt-8 w-fit rounded-md font-medium">
                    <i className="bi bi-google-play mr-3"></i>
                    Download App
                </Link>
            </div>
        </section>
    );
}
