import { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer } from "recharts";


const Statistics = () => {

    const [donations, setDonations] = useState([]);
    const COLORS = ['#067d12', '#f53845'];

    useEffect(() => {
        const donationsMade = JSON.parse(localStorage.getItem('donations'));
        if (donationsMade) {
            setDonations(donationsMade)
        }
    }, [])

    const donationPercentage = ((donations.length) * 100) / 12;
    const remainingPercentage = ((12 - (donations.length)) * 100) / 12;

    console.log(donationPercentage);

    const data = [
        {
            "name": "Remaining Donation (%)",
            "value": remainingPercentage
        },
        {
            "name": "My Donation (%)",
            "value": donationPercentage
        },
    ]

    return (
        <div className=" flex items-center justify-center">
            
            <div className="">
                <ResponsiveContainer width={730} height={450}>
                <PieChart width={730} height={450}>
                    {/* <Pie data={data1} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" /> */}
                    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#d11b24" label>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;