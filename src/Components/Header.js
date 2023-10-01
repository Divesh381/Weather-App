import React, { Component } from 'react'
import { WiCloudy} from "react-icons/wi";
import { RiHome8Line} from "react-icons/ri";
import { Link } from 'react-router-dom';

// import { a } from 'react-router-dom';

 class Header extends Component {
  render() {
    return (
        <>
          <div className='container-fluid text-white bg-secondary'>
                <nav className="navbar navbar-expand-lg navbar-light pt-0">
                    <div className="container-fluid ">
                        <Link className="navbar-brand text-white" style={{fontSize:'34px'}} >Weather <WiCloudy style={{width:"50px", height:"50px"}}/> </Link>

                        <div className=" float-end m-100 " style={{fontSize:'26px'}}id="navbarSupportedContent" >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active text-white" aria-current="page" to="/home">Home <RiHome8Line style={{width:"25px", height:"25px"}}/></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/weather">weather<WiCloudy style={{width:"30px", height:"30px"}}/> </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
               
            </div>          
            </>
      
    )
  }
}

export default Header
