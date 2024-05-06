import "./featuredProperties.css"

const FeaturedProperties = () => {
    return(
        <div className="fP">

            <div className="fPItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="" className="fPImg"></img>
            <span className="fPName">Aparthotel Stare Miasto</span>
            <span className="fPCity">Old Town, Poland, Krakَom</span>
            <span className="fPPrice">Startting from EGP 8,458</span>
            <div className="fPRatting">
            <button>8.7</button>
            <span>Fabulous</span>
            </div> </div>
            
            <div className="fPItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/121402222.webp?k=f7f266ab09f90ddea4464309eca14d79429afe4218ced6887cb52f82c42c03dc&o=" alt="" className="fPImg"></img>
            <span className="fPName">3 Epoques Apartments by Adrez</span>
            <span className="fPCity">Prague 1, Czech Republic, Praha 1</span>
            <span className="fPPrice">Starting from EGP 8,157</span>
            <div className="fPRatting">
            <button>8.7</button>
            <span>Fabulous</span>
            </div></div>

            <div className="fPItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=" alt="" className="fPImg"></img>
            <span className="fPName">7Sessons Apartments Budapest</span>
            <span className="fPCity">06, Terَezvَaros, Hungary, Budapest</span>
            <span className="fPPrice">Starting from EGP 7,253</span>
            <div className="fPRatting">
            <button>8.8</button>
            <span>Fabulous</span>
            </div></div>

            <div className="fPItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/85257658.webp?k=e3f110e4ed0978310a028465a3bdd609149ecbded601555c881106255556b52e&o=" alt="" className="fPImg"></img>
            <span className="fPName">Leman Locke</span>
            <span className="fPCity">Tower Hamlets, United Kingdom, London</span>
            <span className="fPPrice">Starting from EGP 11,906</span>
            <div className="fPRatting">
            <button>8.8</button>
            <span>Fabulous</span>
            </div></div>

        </div>
    );
}
export default FeaturedProperties;