import "./list.css";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import SearchItem from "../components/searchitem/SearchItem";

const List = () => {
    const location= useLocation();
    const [Destination, setDestination] = useState(location.state.Destination)
    const[openDate, setOpenDate] = useState(false)
    const[date, setDate] = useState(location.state.date)
    const [options, setOptions] = useState(location.state.options)
    return(
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="listContaniner">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label>Destination</label>
                            <input placeholder= {Destination} type="text"/>
                        </div>
                        <div className="lsItem">
                         <label>Check-in Date</label>
                            
                    <span onClick={()=>setOpenDate(!openDate)} 
                    className="headerSearchText"> 
                    {format(date[0].startDate, "dd/mm/yyyy")}
                     to {format(date[0].endDate, "dd/mm/yyyy")}</span>
                     {openDate && 
                     (<DateRange 
                     onChange={(item) => setDate([item.selection])}
                     minDate={new Date()} 
                     ranges={date}/>)
                     }
                    </div>

                    <div className="lsItem">
                        <label>Options</label>
                        <div className="lsOptions">
                        <div className="lsOptionItem" >
                            <span className="lsOptionText">
                                Min Price <small>per night</small></span>
                                <input type="number" className="lsOptionInput"/>
                        </div>

                        <div className="lsOptionItem" >
                            <span className="lsOptionText">
                                Max Price<small>per night</small></span>
                                <input type="number" className="lsOptionInput"/>
                        </div>

                        <div className="lsOptionItem" >
                            <span className="lsOptionText">
                                Adult </span>
                                <input type="number" min={1} 
                                className="lsOptionInput" 
                                placeholder={options.adult}/>
                        </div>

                        <div className="lsOptionItem" >
                            <span className="lsOptionText">
                                Children</span>
                                <input type="number" min={0} 
                                className="lsOptionInput" 
                                placeholder={options.children}/>
                        </div>

                        <div className="lsOptionItem" >
                            <span className="lsOptionText">
                                Room</span>
                            <input 
                            type="number" min={1}  
                            className="lsOptionInput"
                            placeholder={options.room}/>
                        </div>

                      </div>
                    </div>
                    <button>Search</button>
                  </div>
                <div className="listResult">
                <SearchItem/>
                </div>
            </div>
          </div>
        </div>
    );
} 

export default List;