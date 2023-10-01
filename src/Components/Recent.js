import React from 'react'
import "../css/custom.css"
export default function Recent(props) {
  let data;

  console.log(props.recent)
  if (props.recent == null) {
    data = '';

  }
  else {
    data = props.recent.map((recentData, id) => {

      return <li className='m-10 dataName'
        key={id} onClick={() => props.research(recentData.lat, recentData.lon)}>
        {recentData.city}</li>
    })
  }
  return (
    <div className='recent-box'>
      <p className='headName'>Recent</p>
      <ul className='list-unstyled '>
        {data}
      </ul>

    </div>
  )
}
