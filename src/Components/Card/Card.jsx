/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Card = ({ card }) => {

    const { id, picture, title, category, category_bg, card_bg, text_button_bg } = card;
   
    const cardBg = {backgroundColor: card_bg};
    const categoryBg = {backgroundColor: category_bg,color:text_button_bg};
    const textColor = {color: text_button_bg};

    return (
        <section>
            <Link to={`/makedonation/${id}`}>

                <div className={`card shadow-xl lg:h-96 overflow-hidden hover:scale-105 transition-transform transform origin-center`} style={cardBg}>
                    <div className={`rounded-lg`}>
                        <figure><img className="h-48 w-full" src={picture} alt="Shoes" /></figure>
                        <div className={`rounded-sm w-20 mt-10 ml-5 flex items-center justify-center`} style={categoryBg}>
                            <div className="text-center ">{category}</div>
                        </div>
                        <div className={`card-body pl-5`}>
                            <h2 className={`card-title text-${text_button_bg}`} style={textColor}>
                                {title}
                            </h2>
                        </div>
                    </div>
                </div>

            </Link>
        </section>
    );
};

export default Card;