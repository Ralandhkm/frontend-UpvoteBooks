import { Link } from 'react-router-dom';
import SearchBooks from '../../components/Search/SearchBooks';
import Universities from '../../data/Universities';
import UniversityCard from '../../components/Card/UniversityCard';

export default function JoinUniversity() {
    return (
        <main className="max-w-5xl mx-auto">
            <h1 className="text-center mt-32 font-bold text-4xl mb-10">Choose the place where you study</h1>
            <SearchBooks placeholder={'Search your university'} />
            <UniversityList />
        </main>
    );
}

function UniversityList() {
    return (
        <section id="university" className="grid grid-cols-2 md:grid-cols-3 mt-10 gap-6">
            <UniversityCard universities={Universities} />
        </section>
    );
}
