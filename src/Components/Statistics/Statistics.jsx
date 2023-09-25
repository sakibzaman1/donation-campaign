import { useEffect, useState } from "react";
import { PieChart, Pie } from "recharts";


const Statistics = () => {

    const [donations, setDonations] = useState([])

    useEffect(() => {
        const donationsMade = JSON.parse(localStorage.getItem('donations'));
        if (donationsMade) {
            setDonations(donationsMade)
        }
    }, [])

    const donationPercentage = ((donations.length) * 100) / 12;
    const remainingPercentage = ((12-(donations.length))*100) / 12;

    console.log(donationPercentage);

    const data = [
        {
            "name": "Total Percentage",
            "value": remainingPercentage
        },
        {
            "name": "My Percentage",
            "value": donationPercentage
        },
    ]

    return (
        <div className=" flex items-center justify-between">
            <h1 className="font-semibold text-2xl">The Percentage of My Donation Against Total</h1>
            <div className="">
                <PieChart width={730} height={450}>
                    {/* <Pie data={data1} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" /> */}
                    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#d11b24" label />
                </PieChart>
            </div>
        </div>
    );
};

export default Statistics;