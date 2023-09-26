import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const CardDetails = () => {

    const cards = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const card = cards.find(card => card.id === idInt);

    const {picture, title,  description, price, text_button_bg} = card;
    const buttonBg = {backgroundColor: text_button_bg};

    // Add to Donation

    const handleAddToDonation = () => {
        

        const addededDonations = [];

        const donationsMade = JSON.parse(localStorage.getItem('donations'));

        if (!donationsMade) {
            addededDonations.push(card)
            localStorage.setItem('donations',JSON.stringify(addededDonations))
            toast("Successfully Donated");
        }
        else{

            const doesExist = donationsMade.find(card => card.id === idInt);
            // console.log(doesExist);
            if(!doesExist){
                addededDonations.push(...donationsMade,card)
                localStorage.setItem('donations',JSON.stringify(addededDonations))
                toast("Successfully Donated");
            }
            else{
                toast("Already Donated For This Purpose")
            }
            

           
        }
    }
    

    return (
        <div>
            <div className="hero relative">
                <div className="hero-overlay"><img className="w-full h-[460px]" src={picture} alt="" /></div>
                
                <div className="bg-black bg-opacity-25 w-full h-20 absolute bottom-0">
                <button onClick={handleAddToDonation} className={`btn border-none absolute bottom-4 left-6 text-white overflow-hidden hover:scale-105 transition-transform transform origin-center`} style={buttonBg}>Donate $ {price}</button>
                </div>
            
            </div>
            <div className="mt-16">
                    <div className="p-6 md:p-4 lg:p-0">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">{description}</p>
                    </div>
                </div>
                <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                ></ToastContainer>
        </div>
    );
};

export default CardDetails;