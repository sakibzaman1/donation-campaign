import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="p-48">
            <div className="card  lg:card-side bg-base-100 shadow-xl">
                <figure><img src="/src/assets/Resources/children-428909_1280.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <Link to="/"><button className="btn btn-primary">Go Back to Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;