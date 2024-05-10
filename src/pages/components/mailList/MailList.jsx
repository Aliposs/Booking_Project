import "./mailList.css"

const MailList = () =>{
    return(
      <div className="mail">
        <h1 className="mailTitle"> Stay in the know</h1>
        <span className="mailDesc"><h4>Sign up to get marketing emails from Booking.com, including promotions, rewards, travel experiences and information about Booking.com’s and Booking.com Transport Limited’s products and services</h4></span>
        <div className="mailInputCountainer">
            <input type="text" placeholder="Your email adress"/>
            <button>Subscribe</button>
        </div>
      </div>
    );

};
export default MailList;