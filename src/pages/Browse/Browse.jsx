import SearchBooks from '../../components/Search/SearchBooks';
import VoteCard from '../../components/Card/VoteCard';
import books from '../../data/Api';

export default function Browse() {
    const filteredBook = books.filter((books) => books.status === 'Not Purchased');

    return (
        <>
            <div className="mx-auto max-w-5xl px-8 mt-20">
                <SearchBooks />
            </div>
            <VoteList books={filteredBook} />
        </>
    );
}

function VoteList({ books }) {
    return (
        <section id="list-vote" className="mx-auto max-w-5xl px-8 mt-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <VoteCard books={books} />
            </div>
        </section>
    );
}
