import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let{title,description,imageUrl,newsUrl,author,date,source}=this.props;
        return (
            <div className="my-3">
                <div className="card" style={{background: 'black'}}>
                    <img src={imageUrl==="None"?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnwVoZ1Gm4M0iyL6nPI2goFi5olJ2jdJSRvg&usqp=CAU":imageUrl} className="card-img-top" alt="..."/>
                    <div className ="card-body" style={{background: '#2e2a5e'}}>
                    <h5 className ="card-title" style={{color: 'white'}}>{title} <span className="badge rounded-pill bg-warning text-dark">{source}</span></h5>
                    <p className ="card-text" style={{color: 'white'}}>{description}...</p>
                    <p className="card-text"><small className="text">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className ="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewsItem