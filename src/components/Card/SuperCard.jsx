import { Link } from 'react-router-dom';

export default function SuperCard({ universities }) {
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
                    <div className="action gap-4 flex">
                        <div className="inline-flex flex-1 w-10 h-10 justify-center items-center bg-green-700 hover:bg-green-800 cursor-pointer rounded-full">
                            <i className="bi bi-check text-2xl"></i>
                            Confirm
                        </div>
                        <div className="inline-flex flex-1 w-10 h-10 justify-center items-center bg-red-700 hover:bg-red-800 cursor-pointer rounded-full">
                            <i className="bi bi-x text-2xl"></i>
                            Reject
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
