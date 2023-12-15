import React from 'react';

export default function StatusCard({ books }) {
    const styles = {
        purchased: 'status flex w-full justify-between bg-white/10 px-4 py-2  text-green-500 rounded-md',
        unPurchased: 'status flex w-full justify-between bg-white/10 px-4 py-2 text-red-500 rounded-md',
    };

    return (
        <>
            {books.map((book) => (
                <div className="card p-5 rounded-3xl bg-white/5" key={book.id}>
                    <div className={`card-header w-full flex justify-center items-center rounded-2xl p-4 h-[340px]`} style={{ backgroundColor: book.color }}>
                        <div className="card-img rounded-md m-auto overflow-hidden w-full h-full flex justify-center items-center">
                            <img src={book.img} alt={book.title} className="w-full h-full object-contain" />
                        </div>
                    </div>
                    <div className="card-body w-full mt-4">
                        <div className={book.status === 'Purchased' ? styles.purchased : styles.unPurchased}>
                            <span>{book.status}</span>
                            <span>{book.countVote} Vote</span>
                        </div>

                        <h4 className="mt-4 font-bold text-xl truncate">{book.title}</h4>
                        <h6 className="text-lg truncate">{book.author}</h6>

                        <div className="flex items-stretch mt-4">
                            <a href="" className="inline-flex bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md font-medium justify-center flex-1">
                                Load More
                            </a>
                            <div className="inline-flex justify-center items-center px-3 bg-red-500 hover:bg-red-600 cursor-pointer ml-3 rounded-md rotate-180">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                                    <path d="M6.40192 1.5C7.55662 -0.499999 10.4434 -0.499999 11.5981 1.5L16.7942 10.5C17.9489 12.5 16.5056 15 14.1962 15H3.80385C1.49445 15 0.0510712 12.5 1.20577 10.5L6.40192 1.5Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
