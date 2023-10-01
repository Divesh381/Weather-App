import React from 'react'
import LoderCss from "../Assets/Loader.module.css"

export default function Loader() {
  return (
    <div className={LoderCss.loader}>Loading...
        <span></span>
</div> 
  )
}
