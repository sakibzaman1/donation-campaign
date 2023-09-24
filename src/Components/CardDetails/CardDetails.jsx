import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {

    const cards = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const card = cards.find(card => card.id === idInt);

    const {picture, title,  description, price, text_button_bg} = card;
    const buttonBg = {backgroundColor: text_button_bg}
    console.log(cards, id);

    return (
        <div>
            <div className="hero relative">
                <div className="hero-overlay"><img className="w-full h-[460px]" src={picture} alt="" /></div>
                
                <div className="bg-black bg-opacity-25 w-full h-20 absolute bottom-0">
                <button className={`btn border-none absolute bottom-4 left-6 text-white`} style={buttonBg}>Donate $ {price}</button>
                </div>
            
            </div>
            <div className="mt-16">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">{description}</p>
                    </div>
                </div>
        </div>
    );
};

export default CardDetails;