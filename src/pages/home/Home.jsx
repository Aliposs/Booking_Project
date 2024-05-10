import "./home.css";
import Featured from "../components/propertyList/Featured";
import FeaturedProperties from "../components/featuredProperties/FeaturedProperties";
import PropertyList from "../components/propertyList/PropertyList";
import Navbar from "../components/navbar/Navbar";
import Header from '../components/header/Header';
import MailList from "../components/mailList/MailList";
import Footer from "../components/footer/Footer";

const Home = () => {
    return(
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
            <h1 className="homeTitle"> Browes by property type</h1>
            <PropertyList/>
            <h1 className="homeTitle"> Trending destination</h1>
            <Featured/>
            <h1 className="homeTitle"> Homes Guests Love</h1>
            <FeaturedProperties/>
            <MailList/>
            <Footer/>
            </div>
        </div>
    );
}; 
export default Home;