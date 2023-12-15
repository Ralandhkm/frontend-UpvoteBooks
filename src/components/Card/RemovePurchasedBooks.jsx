export default function RemovePurchasedBooks({ books }) {
    return (
        <>
            {books?.map((book) => (
                <div className="card inline-flex flex-col justify-around p-5 rounded-[48px] bg-white/5" key={book.id}>
                    <div className={`card-header w-full flex justify-center items-center rounded-[32px] min-h-[300px]`} style={{ backgroundColor: book?.color }}>
                        <div className="card-img rounded-md m-auto overflow-hidden w-full h-full flex justify-center items-center">
                            <img src={book.img} alt={book.title} />
                        </div>
                    </div>
                    <div className="card-body w-full mt-2">
                        <h4 className="mt-4 font-bold text-xl truncate">{book.title}</h4>
                        <h6 className="text-lg truncate">{book.author}</h6>

                        <div className="flex items-stretch mt-4">
                            <a href="" className="inline-flex bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full font-medium justify-center flex-1">
                                Load More
                            </a>
                            <button href="" className="inline-flex justify-center items-center px-3 bg-red-500 hover:bg-red-600 cursor-pointer ml-3 rounded-full">
                                <i className="bi bi-cart-x-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
