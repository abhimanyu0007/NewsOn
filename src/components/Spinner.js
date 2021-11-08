import React,{Component} from 'react'
import loadingImg from './loadingImg.gif'

export class Spinner extends Component{
    render(){
        return(
            <div className="text-center">
                <img  className="my-3" src={loadingImg} alt="loadingImg"/>
            </div>
        )
    }
}

export default Spinner