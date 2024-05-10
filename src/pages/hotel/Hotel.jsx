import "./hotel.css";
import Navbar from "../components/navbar/Navbar";
import Header from '../components/header/Header';
import MailList from "../components/mailList/MailList";
import Footer from "../components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLandmark, faLemon, faLocationDot, faLocationPinLock, faParking} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
    const[slideNumber, setSlideNumber] = useState(0)
    const[open, setOpen] = useState(false)

    const photos = [
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/433549863.jpg?k=700614758f04f1f4519af397fff31b23ce54855ac5df74c0eaa3ee7f3c7815d4&o=&hp=1"  
        },
        {
          src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/433549715.jpg?k=81c267d6e91c892840f0ffba225dea3542c08567a56f0947f6ff878ed163be8c&o=&hp=1"
        },
        {
          src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/433550291.jpg?k=e828949bea6d742914a030b1139ebdee2289c1fb56940832e05719cffa5c6e54&o=&hp=1"
        },
        {
          src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/433550877.jpg?k=39a1d57c70f03b13300ad8690dcd229bd1e368323c9e2d79591680500362e972&o=&hp=1"  
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/525961927.jpg?k=82bbee3eb70d001f49ec54eb33f358b004d9bd7c330fdf9c4a879fb1b8839fc2&o=&hp=1"  
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/433571128.jpg?k=f9dc7fd0116ce243c17a700d1590176d3cb2540e2d040352419524092c4b41aa&o=&hp=1"  
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/433561305.jpg?k=07820e7d400e0481d68a493e37879de27e0b5c2e61220182ced6922f3ce9f81a&o=&hp=1"  
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/433550812.jpg?k=8779606e8cc6b5edaeed715a9eb8ba640b6b2cf996afa3547fad78dde9c495a3&o=&hp=1"  
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/433549693.jpg?k=fed211b20f4b4c23ddd27cdfef71708f6b7b46e4404eae3587de3d8aaaded169&o=&hp=1"  
        },
    ];
const handleOpen = (i)=>{
    setSlideNumber(i);
    setOpen(true);
};
const handleMove = (direction) =>{
    let newSlideNumber;

    if (direction==="l"){
        newSlideNumber = slideNumber === 0 ? 4: slideNumber-1;
    }
    else{
        newSlideNumber = slideNumber === 4 ? 0: slideNumber+1;
    }
    setSlideNumber(newSlideNumber)
}
    return(
        <div>
            <Navbar/>
            <Header type = "list"/>
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" className="sliderImg"/>
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">
                        Reserve
                    </button>
                    <h1 className="hotelTitle">
                        El Gouna Sea & Garden Elite Villa's & Apartment's 
                    Private Residence - Hurghada</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} color="#0000ff"/>
                        <span>El Gouna Entrance El Gouna, Red Sea, El Gouna, 84513 Hurghada, Egypt</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location - show map
                    </span>
                    <span className="hotelPriceHighlight">
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo,i)=>(
                            <div className="hotelImgWrapper">
                                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg"/>
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Get the celebrity treatment with world-class service at El Gouna Sea & Garden Elite Villa's & Apartment's Private Residence - Hurghada</h1>
                            <p className="hotelDesc">
Facing the beachfront, El Gouna Sea & Garden Elite Villa's & Apartment's Private Residence - Hurghada offers 5-star accommodation in Hurghada and has a garden, terrace and bar. 
Boasting an ATM, this property also provides guests with a children's playground. 
The accommodation offers room service, a 24-hour front desk and currency exchange for guests.

<p>Certain rooms also offer a kitchen with a fridge, an oven and a microwave.</p>
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <div className="hotelDetailsHighlights">
                            <h3>Property highlights</h3>
                            <FontAwesomeIcon icon={faLocationDot}/>
                            <span>Top location: Highly rated by recent guests (9.2)</span>
                            </div>
                            <div className="hotelDetailsInfo">
                            <h3>Breakfast Info</h3>
                            <span>Continental, Halal, Asian, American, Buffet, Breakfast to go</span>
                           </div>
                           <div className="hotelDetailsPark"> 
                           <FontAwesomeIcon icon={faParking}/>
                            <span>Free parking available at the hotel </span>
                            </div>
                            <button>Reserve</button>
                        </div>
                    </div>
                </div>      
            </div>
            <MailList/>
            <Footer/>
        </div>
    );
} 

export default Hotel;