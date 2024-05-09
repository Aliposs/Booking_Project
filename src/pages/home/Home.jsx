import "./home.css";
import Featured from "../components/propertyList/Featured";
import FeaturedProperties from "../components/featuredProperties/FeaturedProperties";
import PropertyList from "../components/propertyList/PropertyList";


const Home = () => {
    return(
        <div>
            <div className="homeContainer">
            <h1 className="homeTitle"> Browes by property type</h1>
            <PropertyList/>
            <h1 className="homeTitle"> Trending destination</h1>
            <Featured/>
            <h1 className="homeTitle"> Homes Guests Love</h1>
            <FeaturedProperties/>
            </div>
        </div>
    );
}; 
export default Home;