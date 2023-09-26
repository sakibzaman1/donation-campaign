/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const DonationMade = ({ donation }) => {

    const { id, picture, price, title, category, category_bg, card_bg, text_button_bg } = donation;

    const cardBg = { backgroundColor: card_bg };
    const categoryBg = { backgroundColor: category_bg, color: text_button_bg };
    const textColor = { color: text_button_bg };
    const buttonBg = { backgroundColor: text_button_bg };

    return (
        <div>
            <div className={`shadow-xl h-60 lg:h-52 md:h-52 overflow-hidden hover:scale-105 transition-transform transform origin-center`} style={cardBg}>
                <div className={`flex h-full`}>
                    <figure className="w-2/5 h-full"><img className="h-full w-full" src={picture} alt="Shoes" /></figure>
                    <div className="flex flex-col ml-8 gap-y-2">
                        <div className={`rounded-sm w-20 mt-10 flex items-center justify-center`} style={categoryBg}>
                            <div className="text-center ">{category}</div>
                        </div>
                        <div className={`text-lg font-semibold`}>
                            <h2 className={`text-${text_button_bg}`}>
                                {title}
                            </h2>
                        </div>
                        <div>
                            <p style={textColor}>$ {price}</p>
                        </div>
                        <div>
                            <Link to={`/makedonation/${id}`}>
                            <button className={`h-8 w-28 border-none text-white overflow-hidden hover:scale-105 transition-transform transform origin-center`} style={buttonBg}>View Details</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DonationMade;