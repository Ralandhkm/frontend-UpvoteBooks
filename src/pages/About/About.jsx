export default function About() {
    return (
        <section id="about" className="flex flex-col max-w-5xl mx-auto mt-28 md:mt-20">
            <h1 className="text-center font-bold text-2xl md:text-4xl mb-6">About Upvote Books</h1>
            <p className="text-center text-sm px-4 md:text-xl text-white/70 mb-10">
                Upvote Books gives students the power to influence their campus library's collection. By suggesting and voting for book titles, you can ensure that the books you are most interersted in reading are made available to you. It's a simple
                and effective way to have a direct say in shaping your library's collection.
            </p>

            <div id="features" class="w-full grid grid-cols-2 grid-rows-2 lg:grid-cols-3 md:grid-rows-1 gap-4 mb-10 mx-auto px-4 mt-4">
                <Features />
            </div>
        </section>
    );
}

function Features() {
    const featuresDetails = [
        {
            number: '#1 Feature',
            title: 'Have a say in what you read',
            description:
                "Tired of searching for books that interest you? With UpBooks, you have the power to shape your campus library's collection. Recommend and vote for the books you want to see on the shelves. Your voice matters, and now you can ensure that the books you're most interested in are made available to you.",
        },
        {
            number: '#2 Feature',
            title: 'Keep up to date',
            description:
                'Based on the results of the voting system, the system displays the latest purchases made by the library. This feature keeps students up-to-date with the latest additions to the library and helps them discover new books that they might be interested in.',
        },
        {
            number: '#3 Feature',
            title: 'Tracking student interest',
            description:
                'The system tracks the voting scores of each book to determine which books generate the most interest among students. This feature helps libraries keep up with the latest trends and preferences of their student body, ensuring that they are stocking books that are relevant and popular among their users.',
        },
    ];

    return (
        <>
            <h2 class="col-span-3 row-span-2 text-lg">What we deserve</h2>
            {featuresDetails.map((feature) => (
                <div class="feature w-full col-span-3 md:col-span-2 lg:col-span-1 p-6 bg-gradient-to-br from-white/10 from-10% to-transparent via-white/5 hover:from-10% transition-all duration-300 rounded-md" key={feature.number}>
                    <h6 class="text-sm">{feature.number}</h6>
                    <h4 class="text-xl leading-relaxed mt-4 mb-2 font-bold">{feature.title}</h4>
                    <p class="text-sm text-white/60 mt-auto">{feature.description}</p>
                </div>
            ))}
        </>
    );
}
