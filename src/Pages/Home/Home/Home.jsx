import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <div id="services">
            <Services></Services>
            </div>
        </div>
    );
};

export default Home;