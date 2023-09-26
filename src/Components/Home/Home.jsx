import DonationCards from "../DonationCards/DonationCards";
import Hero from "../Hero/Hero";
import { useState } from "react";


const Home = () => {

    const [filter, setFilter] = useState('');
    const [searchClicked, setSearchClicked] = useState(false);

    const handleSearch = (searchValue) => {
        setFilter(searchValue);
        setSearchClicked(true);
    };

    return (
        <div>
            <section>
                <Hero onSearch={handleSearch}></Hero>
            </section>
            <section className="mt-20">
                <DonationCards filter={filter} searchClicked={searchClicked}></DonationCards>
            </section>
        </div>
    );
};

export default Home;