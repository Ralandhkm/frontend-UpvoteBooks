export default function Vote() {
    return (
        <form action="" method="POST" enctype="multipart/form-data" class="max-w-5xl mx-auto mt-20 px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-4 gap-10 md:gap-6 items-center text-gray-300">
                <label for="image" class="group md:col-span-1 md:row-span-4 border-2 border-dashed border-white/50 hover:border-indigo-600/50 cursor-pointer rounded-xl h-full flex flex-col items-center justify-center py-5">
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
                    <h1 class="text-white/50 group-hover:text-indigo-600/50">Drag and drop your image here</h1>
                    <input type="file" id="image" name="cover" accept="image" required hidden />
                </label>

                <div class="col-span-1 row-span-4 h-full space-y-4">
                    <label class="flex flex-col gap-2" for="title">
                        <span>Book Title</span>
                        <input class="input" type="text" name="book_title" placeholder="Input book title here..." required />
                    </label>
                    <label class="flex flex-col gap-2" for="author">
                        <span>Author of books</span>
                        <input class="input focus:ring-blue-500 focus:ring-1" type="text" name="author" placeholder="Input author title here..." required />
                    </label>
                    <label class="flex flex-col w-full" for="category">
                        Category
                    </label>

                    {/* category */}
                    <Categories />

                    <label class="block gap-2 w-full" for="description">
                        Book Description
                    </label>
                    <textarea class="w-full bg-transparent input" name="books_description" id="description" rows="5"></textarea>
                    <button class="px-4 py-2 block w-full bg-indigo-600 hover:bg-indigo-700 rounded-md text-white" type="submit">
                        Create Voting
                    </button>
                </div>
            </div>
        </form>
    );
}

function Categories() {
    const categories = ['Romance', 'Fiction', 'Mystery', 'Fantasy', 'Science Fiction'];

    return (
        <select class="input cursor-pointer w-full" name="category" id="category" required>
            <option class="bg-[#101012] py-4" selected disabled hidden>
                Category
            </option>

            {categories.map((category) => (
                <option class="bg-[#242426] py-4" id={categories.toString().toLowerCase} value={category}>
                    {category}
                </option>
            ))}
        </select>
    );
}
