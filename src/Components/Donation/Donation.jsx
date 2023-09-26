import { useEffect, useState } from "react";
import DonationMade from "../DonationMade/DonationMade";
import { Link } from "react-router-dom";




const Donation = () => {

    const [donations, setDonations] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        const donationsMade = JSON.parse(localStorage.getItem('donations'));

        if (donationsMade) {
            setDonations(donationsMade)
        }
        else {
            setNoFound("Make Some Donation")
        }
    }, [])

    const handleRemove = () => {
        localStorage.clear()
        setDonations([])
        setNoFound("Make Some Donation")
    }


    return (
        <div className="p-6 md:p-4 lg:p-0">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Total Donations : {donations.length} </h1>
                <div>
                {
                    noFound? <Link to="/"><button className="bg-red-500 p-2 text-white overflow-hidden hover:scale-105 transition-transform transform origin-center">{noFound}</button></Link> : ""
                }
                </div>

                <div>
                    {
                        donations.length > 0 && <button onClick={handleRemove} className="bg-red-500 text-white p-2 overflow-hidden hover:scale-105 transition-transform transform origin-center rounded-sm">Remove All</button>
                    }
                </div>
            </div>

            <div className="grid md:grid-cols-1 grid-cols-1 lg:grid-cols-2 space-y-8 lg:space-y-0 md:space-y-4 md:gap-4 lg:gap-8 mt-10">
                {
                    donations.length > 0 && showMore? donations.map(donation => <DonationMade key={donation.id} donation={donation}></DonationMade>) :
                    donations.slice(0,4).map(donation => <DonationMade key={donation.id} donation={donation}></DonationMade>)
                    
                }
            </div>
            <div>
                {
                    donations.length > 4 && <button className="bg-[#009444] w-28 rounded-sm text-white p-2 overflow-hidden hover:scale-105 transition-transform transform origin-center mt-10 block mx-auto" onClick={()=> setShowMore(!showMore)}>{showMore? "See Less" : "See All"}</button>
                }
            </div>
        </div>
    );
};

export default Donation;