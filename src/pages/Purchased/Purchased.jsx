import SearchBooks from '../../components/Search/SearchBooks';
import PurchasedCard from '../../components/Card/PurchasedCard';

import books from '../../data/Api';

export default function Purchased() {
    return (
        <>
            <div className="mx-auto max-w-5xl px-8 mt-20">
                <SearchBooks />
            </div>
            <PurchasedBooksList />
        </>
    );
}

function PurchasedBooksList() {
    return (
        <section id="purchased-cards" className="mx-auto max-w-5xl px-8 mt-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <PurchasedCard books={books} />
            </div>
        </section>
    );
}
