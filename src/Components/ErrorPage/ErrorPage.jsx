import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="p-16">
            <div className="card  lg:card-side bg-base-100 shadow-xl">
                <figure><img src="/src/assets/Resources/children-428909_1280.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-5xl">Opps! Something went wrong.</h2>
                    <p className="italic font-mono mt-16">“It is easier to take than to give. It is nobler to give than to take. The thrill of taking lasts a day. The thrill of giving lasts a lifetime.

                        - Joan Marques</p>
                    <div className="card-actions justify-center">
                        <Link to="/"><button className="text-white overflow-hidden hover:scale-105 transition-transform transform origin-center bg-red-500 p-2 rounded-xl w-full">Go Back to Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;