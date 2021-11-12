import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let{title,description,imageUrl,newsUrl,date,source}=this.props;
        return (
            <div className="my-3">
                <div className="card" style={{background: 'black'}}>
                    <img style={{height:"180px"}} src={imageUrl==="None"?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnwVoZ1Gm4M0iyL6nPI2goFi5olJ2jdJSRvg&usqp=CAU":imageUrl} className="card-img-top" alt="..."/>
                    <div className ="card-body" style={{background: '#2e2a5e'}}>
                    <h5 className ="card-title" style={{color: 'white'}}>{title} <span className="badge rounded-pill bg-warning text-dark">{source}</span></h5>
                    <p className ="card-text" style={{color: 'white'}}>{description}...</p>
                    <p className="card-text"><small className="text">{/*By {!author?"Unknown":author}*/}Published on : {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className ="btn btn-sm btn-primary">Read More</a>
                    {/* const url =`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=a1b7687c45614adc8ee23afa27f3e209` */}
                    </div>
                </div>
            </div>
        )
    }
}
export default NewsItem