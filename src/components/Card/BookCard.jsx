import React from 'react';

export default function BookCard({ books }) {
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

                        <a href="" className="flex bg-indigo-600 px-4 py-2 mt-4 rounded-full font-medium justify-center">
                            Load More
                        </a>
                    </div>
                </div>
            ))}
        </>
    );
}
