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
           
            <div className="grid grid-cols-4 gap-8">
                {
                    cards.map( card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default DonationCards;