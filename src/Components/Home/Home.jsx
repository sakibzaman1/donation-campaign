import DonationCards from "../DonationCards/DonationCards";
import Hero from "../Hero/Hero";


const Home = () => {
    return (
        <div>
            <section>
                <Hero></Hero>
            </section>
            <section className="mt-20">
                <DonationCards></DonationCards>
            </section>
        </div>
    );
};

export default Home;