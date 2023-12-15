import { Link } from 'react-router-dom';

export default function VoteCard({ books }) {
    return (
        <>
            {books.map((book) => (
                <Link to={`/book/${book.id}`} className="card inline-flex flex-col p-5 rounded-[48px] bg-white/5" key={book.id}>
                    <div className="card-header w-full flex justify-center items-center rounded-[32px] min-h-[300px]" style={{ backgroundColor: book.color }}>
                        <div className="card-img rounded-md m-auto overflow-hidden w-full h-full flex justify-center items-center">
                            <img src={book.img} alt={book.title} x />
                        </div>
                    </div>
                    <div className="card-body w-full mt-3">
                        <h4 className="mt-4 font-bold text-lg md:text-xl truncate">{book.title}</h4>
                        <h6 className="text-base md:text-lg truncate">{book.author}</h6>

                        <div className="flex mt-4 w-full items-end justify-between">
                            <a href="" className="px-4 py-2 font-semibold bg-white/10 hover:bg-white/20 border border-[#4E46DF4D] rounded-full text-sm">
                                {book.category}
                            </a>
                            <a href="" className="w-14 h-14 rounded-full flex flex-col text-center bg-white/10 hover:bg-white/20 border border-[#4E46DF4D] text-xs justify-center items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                                    <path d="M6.40192 1.5C7.55662 -0.499999 10.4434 -0.499999 11.5981 1.5L16.7942 10.5C17.9489 12.5 16.5056 15 14.1962 15H3.80385C1.49445 15 0.0510712 12.5 1.20577 10.5L6.40192 1.5Z" fill="white" />
                                </svg>
                                {book.countVote}
                            </a>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    );
}
