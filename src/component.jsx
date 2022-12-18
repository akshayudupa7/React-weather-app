import React,{useState,useEffect} from "react";



function Component(){
    let [search,setSearch]= useState("");
  let [city,setCity]=useState("")

  
    
    useEffect(()=>{
        let WeatherApi=async()=>{
            let response=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a1318520b8d01fd8a766b89f2745696a`
            let body=await fetch(response)
            console.log(body)
              let info=await body.json();
              console.log(info)
              
            setCity(info.main)
          
            console.log(info.weather)
              
        }
        WeatherApi();
    },[search])

    return(
      <div className="container-fluid">
         <div className="square">
      
             <div className="search-box">
               <input 
               type="text"
               className="form-control"
               onChange={(event)=>setSearch(event.target.value)}/>
             </div>

              <div className="container mt-20">
                {!city?(<p>No data found</p>):(
                  <div>
                  <div className="row">
                    <div className="col-lg-6 ">
                        <div className="info">
                              <h1><i class="fa-solid fa-sun"></i>{search}</h1>
                              <h5>Humidity: {city.humidity}</h5>
                        </div>
                    </div>
                        <div className="col-lg-6 celsius">
                            <h2>{city.temp} c</h2>  
                            <p>Max:{city.temp_max} c| Min: {city.temp_min} c</p>
                        </div>
                  </div>
                  </div>    
                 
                    )}
              </div>
          
             
          
            

         </div>
         </div>
    )
}
export default  Component