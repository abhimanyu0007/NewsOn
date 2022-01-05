import React from 'react'
import loadingImg from './loadingImg.gif'

const Spinner = () =>{
    return(
        <div className="text-center">
            <img  className="my-3" src={loadingImg} alt="loadingImg"/>
        </div>
    )
}

export default Spinner