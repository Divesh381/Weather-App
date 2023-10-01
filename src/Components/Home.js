import React, { Component } from 'react'
import { WiCloudy } from "react-icons/wi";
class Home extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid '>
                    <div className='d-flex justify-content-center bg-white content-container'>
                        <div className=' align-self-center' style={{ color: 'black' }}>
                            <h1 className='brand-font d-inline pr-3' style={{ fontSize: '54px' }}>
                                Weather App<WiCloudy style={{ width: "150px", height: "150px" }} /></h1>
                                <p className='brand-font  pl-4'style={{ fontSize: '34px' }}>Free Weather App </p>
                        </div>
                    </div>
                </div>
            </div>

        );

    }
}

export default Home
