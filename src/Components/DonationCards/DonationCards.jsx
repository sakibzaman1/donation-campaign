import { useEffect, useState } from "react";
import Card from "../Card/Card";


const DonationCards = () => {

    const [cards, setCards] = useState([]);

    useEffect( ()=> {
        fetch("donation.json")
        .then( res=> res.json() )
        .then( data=> setCards(data) )
    },[])

    return (
        <div>
           
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 lg:gap-8 sm:gap-0">
                {
                    cards.map( card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default DonationCards;