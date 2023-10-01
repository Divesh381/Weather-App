import React from 'react'
import Loader from './Loader';

 function Reasult(props) {
       
      const {weatherData: data} = props
      const  kvc =(k)=>
       {
         let c= Math.floor(k-273.15).toFixed(2) +" °C";
        //  c=c*9/5+32;
         return c;
       } 
   const getTime =(stamp)=>{
      const date = new Date(stamp*1000);
      return date.toLocaleTimeString();
   }

   let showOnPage;
   if(props.weatherData === null)
   {
    if(props.isSearch === true)
    {
    //    showOnPage= <p className='text-center'> <b>Click on Get-coordinate button.....</b></p>
       showOnPage= <Loader/>

    }else
    {    showOnPage=<div className='text-center'>
    
        <div className='container '> <b>Please search a city Name</b></div>
                     <b className='text-center'>OR</b>
        <p className='text-center'> <b>Click on Get-coordinate button to get current weather data...</b></p>
        </div>
    }
   }
   else{
    return (
     
        <div className=' container-center row mt-2 '>
            <div className='col'>
                <div className='card '>
                    <div className='card-body'>
                        <h4 name='name' className='card-title' value="">
                            <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt=''/>
                               {data.name}  {kvc(data.main.temp)}
                         <span className='pl-2'>{data.weather[0].description}</span>
                         </h4>
                        <div className='row'>
                            <div className='col'>
                                <div className='row'>
                                    <table className='table'>
                                       <tbody>
                                        <tr>
                                            <th>Feels like</th>
                                            <td>{kvc(data.main.feels_like)}</td>
                                        </tr>
                                        <tr>
                                            <th>Min Temp</th>
                                            <td>{kvc(data.main.temp_min)}</td>
                                        </tr>
                                        <tr>
                                            <th>Max Temp</th>
                                            <td>{kvc(data.main.temp_max)}</td>
                                        </tr>
                                        <tr>
                                            <th>Sun Rise </th>
                                            <td>{getTime(data.sys.sunrise)}</td>
                                        </tr>
                                        <tr>
                                            <th>Sun Set </th>
                                            <td>{getTime(data.sys.sunset)}</td>
                                        </tr>
                                       </tbody>
                                   
                                    </table>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
   }
      
return(
    <>
     
    {showOnPage}</>
);
    
}
export default Reasult;