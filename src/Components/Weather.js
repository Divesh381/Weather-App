import React, { Component } from 'react'
import Reasult from './Reasult'
import Search from './Search'
import axios from 'axios'
import Recent from './Recent'
class Weather extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lat: "",
            lon: "",
            city: "",
            weatherData: null,
            isSearch: false,
            recent:[],
        }
    }
    changeHandler = (event) => {
        event.preventDefault()
        const name = event.target.name;
        if (name === 'city') {
            this.setState({ city: event.target.value });
        }
        else if (name === 'lat') {
            this.setState({ lat: event.target.value });
        }
        else if (name === 'lon') {
            this.setState({ lon: event.target.value });
        }

    };
    // searchCityNameHandler =(e)=>{
    //     e.preventDefault();
    //     this.setState({

    //         lat: "",
    //         lon: "",
    //         city: "",
    //         weatherData: null,
    //     });
    //     axios.get(
    //         `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=167f9d38c5504910ed62953b1fa143c9`) 
    //         .then(reasult => {
    //             this.setState({
    //                 city: reasult.data.name,
    //                 weatherData: reasult.data
    //             })
    //         }).catch
    //         ((error) => {
    //             console.log(error)
    //         })          
    // }


    searchHandler = () => {
        this.setState({

            weatherData: null,
           
        });

        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=167f9d38c5504910ed62953b1fa143c9`)
            .then(reasult => {
                this.setState({
                    city: reasult.data.name,
                    weatherData: reasult.data
                },()=>{
                    this.addDataToRecent();
                })
            }).catch((error) => {
                console.log(error)
            })
    }
     reSearchHandler = (lat,lon)=>{
        this.setState({
         weatherData:null
        },()=>{
        this.setState({lat, lon},()=>{
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=167f9d38c5504910ed62953b1fa143c9`)
            .then(reasult => {
                this.setState({
                    city: reasult.data.name,
                    weatherData: reasult.data
                });
            }).catch((error) => {
                console.log(error)
            });
        });
    });
     }

     componentDidMount()
     {
        const data =window.localStorage.getItem("recent");
        if(data)
        {
            this.setState({
                recent:JSON.parse(data)
            })
        }
        else
        {
            this.setState({
                recent:[]
            })
        }
     }
    addDataToRecent = () =>
    {
        let recent =this.state.recent;
        recent.push({
            city: this.state.city,
            lat: this.state.lat,
            lon: this.state.lon,
        });
        this.setState({recent: recent},()=>{
            window.localStorage.setItem('recent', JSON.stringify(this.state.recent));
        })
      

    }

    locationHandler = (e) => {
        e.preventDefault();
        this.setState({

            lat: "",
            lon: "",
            city: "",
            isSearch: true,
            weatherData: null,
        });
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (res) => {
                    setTimeout(() => {
                        this.setState({
                            lat: res.coords.latitude,
                            lon: res.coords.longitude,
                        });
                        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${res.coords.latitude}&lon=${res.coords.longitude}&appid=167f9d38c5504910ed62953b1fa143c9`)
                            .then(reasult => {
                                this.setState({
                                    city: reasult.data.name,
                                    weatherData: reasult.data
                                },()=>{
                                    this.addDataToRecent();
                                })
                            }).catch((error) => {
                                console.log(error)
                            })
                    }, 100);
                },
                (err) => {
                    console.log(err)
                }
            );
        }
        else {
            console.log("Geolocation is not supported by this browser")
        }
    }


    render() {
        return (
            <div>
                <Recent recent={this.state.recent} research={this.reSearchHandler}></Recent>
                <div className='pt-2 mt-3 container' style={{ height: '500px' }}>
                    
                    <Search
                        lat={this.state.lat}
                        lon={this.state.lon}
                        weatherData={this.state.weatherData}
                        city={this.state.city}
                        change={this.changeHandler}
                        getLocation={this.locationHandler}
                        search={this.searchHandler}
                    // cityName={this.searchCityNameHandler}
                    ></Search>

                    <Reasult
                        weatherData={this.state.weatherData}
                        isSearch={this.state.isSearch}
                    ></Reasult>
                </div>
            </div>
        )
    }
}

export default Weather
