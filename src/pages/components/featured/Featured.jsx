import "./featured.css";

const Featured = () => {
    return(
        <div className="featured">

            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/688591.jpg?k=9a550fedccb750cfa3f2e8eaf507287d4007f21def68e6566cc00b200946e876&o=" alt="" className="featuredImg"></img>
                <div className="featuredTitles">
                    <h1>Makkah</h1>
                    <h2>120 properties</h2>
                </div>
                </div>

                <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/644338.jpg?k=51ec9b834df182428a266d5084a944dca58573a3aad1a2b5993989d3438539fe&o=" alt="" className="featuredImg"></img>
                <div className="featuredTitles">
                    <h1>Hurghada</h1>
                    <h2>150 properties</h2>
                </div>
                </div>    

                <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/644630.jpg?k=700ac1d32a3bab480b14db2cba3050abe5b5bce062911dc4f5b3fdc15d81f007&o=" alt="" className="featuredImg"></img>
                <div className="featuredTitles">
                    <h1>Sharm El Sheikh</h1>
                    <h2>200 properties</h2>
                </div>
                </div>    
                
        </div>
    );
} 

export default Featured;