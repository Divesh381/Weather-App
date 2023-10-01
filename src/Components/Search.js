import React from 'react'
import { RiSearchLine } from "react-icons/ri"
import { HiOutlineCubeTransparent } from "react-icons/hi2"

export default function Search(props) {
    return (
        <div className='container-center '>
            <div className='row ' style={{ width: "80%" }}>
                <div className="col-lg-4 ml-5 ">
                    <div className="form-group">
                        <label htmlFor="">Type City Name</label>
                        <input type="text" id="city" name="city" onClick={props.getLocation} value={props.city} onChange={props.change} className="form-control" aria-describedby='helpId' placeholder='City name..' />
                    </div>
                </div>
                <div className="col-lg-1 text-center">
                    <label htmlFor=""></label>
                    <h5>Or</h5>
                </div>
                <div className="col-lg-5">
                    <div className="form-group ">
                        <label htmlFor=''>Get Co-ordinate</label>
                        <button className='btn' onClick={props.getLocation}><HiOutlineCubeTransparent /></button>

                        <div className='row'>
                            <div className='bg-dark text-white rounded pt-1 pr-1'>Lat:</div>
                            <input type='number' id="lat" step="any" value={props.lat} onChange={props.change} className='form-control col mr-1' name='lat' aria-describedby='helpId' placeholder='' />
                            <div className='bg-dark text-white rounded pt-1 pr-1'>Lon:</div>
                            <input type='number' id="lon" step="any" value={props.lon} onChange={props.change} className='form-control col mr-1' name='lon' aria-describedby='helpId' placeholder='' />
                        </div>
                    </div>
                </div>

                <div className="col-lg-1">
                    <label htmlFor="" >Search</label>
                    <button type="submit" className="btn btn-primary mb-2" onClick={props.search}  ><RiSearchLine /></button>
                </div>
            </div>
        </div>
    )
}
