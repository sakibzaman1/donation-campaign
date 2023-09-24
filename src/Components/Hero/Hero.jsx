

const Hero = () => {
    return (
        <div className="hero h-96" style={{ backgroundImage: 'url(https://i.ibb.co/JvP50yt/children-428909-1280.jpg)' }}>
            <div className="hero-overlay bg-opacity-95 bg-white"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
                    <div className="flex items-center justify-center mt-12">
                    <input className="border-gray-200 border-2 h-10 w-64 rounded-l-lg" type="text" name="" id="" placeholder="   Search here" />
                    <button className="rounded-r-lg h-10 w-24 bg-red-500 text-white">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;