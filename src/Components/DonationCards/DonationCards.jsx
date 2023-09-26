/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Card from "../Card/Card";



const DonationCards = ({ filter, searchClicked }) => {

    const [cards, setCards] = useState([]);

    useEffect( ()=> {
        fetch("donation.json")
        .then( res=> res.json() )
        .then( data=> setCards(data) )
    },[])

    const filteredData = cards.filter((filtered)=> filtered.category.toLowerCase().includes(filter.toLowerCase()));

    return (
        <div>
           
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-4 lg:gap-8 p-5 lg:p-0 md:p-2">
                {
                    searchClicked? filteredData.map( card => <Card key={card.id} card={card}></Card>) :
                    cards.map( card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default DonationCards;