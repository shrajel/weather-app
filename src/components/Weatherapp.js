import React,{useState,useEffect} from 'react';
import"./css/style.css";

const Weatherapp = () => {

const[city,setcity] = useState(null);
const[search,setsearch]= useState("Lucknow");

useEffect(() => {

    const fetchApi= async () => { 
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a3af1f6670d721b3ee5a160bb1353fea`
        const response = await fetch(url);
      const resJson = await response.json();
     // console.log(resJson);
     setcity(resJson.main);

    }
    
    fetchApi();
},[search])

    return (
        <>
        <div className='box'>
            <div className="inputData">
                <input 
                type="search"
                className="inputFeild"
                value = {search}
                onChange = {(event) => {setsearch(event.target.value)}}/>
            </div>

            {!city? (
                    <p className="errorMsg">No Data Found</p>
                ) : (
                    <div>
                        
         <div className="info">
            <h2 className="location">
            <i className="fa fa-street-view" aria-hidden="true"></i>{search}
            </h2>
            <h1 className="temp">{city.temp}°Cel</h1>
            <h3 className="tempmin_max">Min :{city.temp_min}°Cel | max :{city.temp_max}°Cel</h3>
        </div>

        <div className = "wave -one"></div>
        <div className = "wave -two"></div>
        <div className = "wave -three"></div>
        </div>
                    
                )}
            

        </div>
        </>
    )
}
export default Weatherapp;