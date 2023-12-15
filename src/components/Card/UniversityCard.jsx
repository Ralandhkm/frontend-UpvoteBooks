import { Link } from 'react-router-dom';
export default function UniversityCard({ universities }) {
    return (
        <>
            {universities.map((university) => (
                <div key={university.id} className="card p-5 rounded-3xl bg-white/5 justify-around flex flex-col">
                    <div className="card-header">
                        <div className="card-img w-full h-[260px] rounded-2xl overflow-hidden">
                            <img src={university.img} alt={university.name} className="object-cover w-full h-full" />
                        </div>
                    </div>
                    <div className="card-body mt-4 mb-4">
                        <h4 className="font-semibold text-xl">{university.name}</h4>
                        <span className="text-lg text-white/70">{university.libraryName}</span>
                    </div>
                    <Link to={`/join/${university.id}`} className="bg-indigo-600 hover:bg-indigo-700 text-center block py-2 rounded-lg font-medium">
                        Join
                    </Link>
                </div>
            ))}
        </>
    );
}
