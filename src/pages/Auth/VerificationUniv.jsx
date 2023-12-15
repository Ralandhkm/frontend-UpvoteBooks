import { useParams } from 'react-router-dom';
import Universities from '../../data/Universities';
import { Link } from 'react-router-dom';

export default function VerificationUniv() {
    const { universityId } = useParams();
    const university = Universities.find((university) => university.id == universityId);

    return (
        <main className="max-w-5xl mx-auto px-8">
            <div className="flex flex-col justify-center mt-20 max-w-2xl mx-auto">
                <div className="university-img h-[350px] rounded-2xl overflow-hidden bg-white/70">
                    <img src={university.img} alt={university.name} className="object-cover w-full h-full select-none" />
                </div>
                <div className="token-input mt-6 font-medium">
                    <label htmlFor="token" className="text-xl">
                        {university.name}
                        <input type="token" id="token" className="block w-full bg-white/10 py-2 px-3 rounded-sm outline-none ring-1 ring-white/30 hover:ring-blue-200/60 text-base mt-6" placeholder="Enter your university code ID" />
                    </label>
                    <Link to={'/'} className="px-8 py-2 mt-6 ml-auto w-fit rounded-md block bg-indigo-600 hover:bg-indigo-700">
                        Join
                    </Link>
                </div>
            </div>
        </main>
    );
}
