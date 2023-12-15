export default function PurchasedCard({ books }) {
    let purchasedBooks = books.filter((book) => book.status === 'Purchased');
    const filteredBooks = purchasedBooks;

    return (
        <>
            {filteredBooks?.map((book) => (
                <div className="card inline-flex flex-col justify-around p-5 rounded-[48px] bg-white/5" key={book.id}>
                    <div className={`card-header w-full flex justify-center items-center rounded-[32px] min-h-[300px]`} style={{ backgroundColor: book?.color }}>
                        <div className="card-img rounded-md m-auto overflow-hidden w-full h-full flex justify-center items-center">
                            <img src={book.img} alt={book.title} />
                        </div>
                    </div>
                    <div className="card-body w-full mt-2">
                        <h4 className="mt-4 font-bold text-xl truncate">{book.title}</h4>
                        <h6 className="text-lg truncate">{book.author}</h6>

                        <a href="" className="flex bg-indigo-600 hover:bg-indigo-700 px-4 py-2 mt-4 rounded-full font-medium justify-center">
                            Load More
                        </a>
                    </div>
                </div>
            ))}
        </>
    );
}
