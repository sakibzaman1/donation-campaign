import { useEffect, useState } from "react";
import DonationMade from "../DonationMade/DonationMade";



const Donation = () => {

    const [donations, setDonations] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [donationLength, setDonationLength] = useState(4);

    useEffect(() => {
        const donationsMade = JSON.parse(localStorage.getItem('donations'));

        if (donationsMade) {
            setDonations(donationsMade)
        }
        else {
            setNoFound("No Data Found")
        }
    }, [])

    const handleRemove = () => {
        localStorage.clear()
        setDonations([])
        setNoFound("No Data Found")
    }


    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Total Donations : {donations.length} </h1>

                <div>
                    {
                        donations.length > 0 && <button onClick={handleRemove} className="bg-red-500 text-white p-2 overflow-hidden hover:scale-105 transition-transform transform origin-center">Remove All</button>
                    }
                </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-10">
                {

                    donations.slice(0,donationLength).map(donation => <DonationMade key={donation.id} donation={donation}></DonationMade>)
                }
            </div>
            <div>
            {
                donationLength < 5? <div className="flex justify-center my-10">
                <button onClick={()=> setDonationLength(donations.length)} className="bg-red-500 text-white p-2 overflow-hidden hover:scale-105 transition-transform transform origin-center">Show All</button>
            </div> : <div className="flex justify-center my-10">
                <button onClick={()=> setDonationLength(4)} className="bg-red-500 text-white p-2 overflow-hidden hover:scale-105 transition-transform transform origin-center">Show Less</button>
            </div>
            }
            </div>
        </div>
    );
};

export default Donation;