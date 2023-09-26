import { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer } from "recharts";


const Statistics = () => {

    const [donations, setDonations] = useState([]);
    const COLORS = ['#FF444A', '#00C49F'];

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
            "name": "Total Donation (%)",
            "value": (remainingPercentage.toFixed(2))/1
        },
        {
            "name": "My Donation (%)",
            "value": (donationPercentage.toFixed(2))/1
        },
    ]

    return (
        <div className="w-full flex items-center justify-center">
            
            <div className="w-full">
                <ResponsiveContainer width="100%" height={450}>
                <PieChart width={730} height={450}>
                    {/* <Pie data={data1} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" /> */}
                    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={0} outerRadius={100} fill="#d11b24" label>
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