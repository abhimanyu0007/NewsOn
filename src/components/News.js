import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

const News= (props) =>{

    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    
    const capitalize = (string) => {
        return (string.charAt(0).toUpperCase() + string.slice(1))
    }

    
    useEffect(() => {
        const updateNews = async ()=>{
            props.setProgress(10);
            const url = `https://api.currentsapi.services/v1/search/?country=${props.country}&language=en&category=${props.category}&apiKey=kDXbsms2DfRmMFpZwAZAjFzyNEqf9BaQ2KqWHqskd8Une1Kk&page_size=40`
            setLoading(true)
            let data = await fetch(url);
            props.setProgress(30);
            let parsedData = await data.json();
            props.setProgress(70);

            setNews(parsedData.news)
            setLoading(false)

            props.setProgress(100);
            
        }
        updateNews();
        //eslint-disable-next-line
    }, [])
    
    return (
        <>
            <h1 className="text-center" style={{ margin: '22px 0px',marginTop:'87px', color: 'white' }}>{props.countryName} - Top {capitalize(props.category)} Headlines</h1>
            {loading && <Spinner/>}       
                    <div className="container-fluid" style={{padding:'0px 40px'}}>     
                    <div className="row">
                        {news.map((element) => {
                            return <div className="col-md-3" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.image}
                                    newsUrl={element.url} author={element.author} date={element.published} source={element.author} />
                                </div>
                            })}
                    </div>
                    </div>
            {loading===false && news.length===0?
            <div className="container-sm bg-info animate__animated animate__zoomInDown" 
            style={{width:"306px",borderRadius:"7px",height:"88px",marginTop:"50px"}}>
            <h4 style={{color:"#b5142b",textDecoration:"underline"}}>NO NEWS AVAILABLE!</h4>
            <h5 style={{color:"white"}}>Try with general category or other country.</h5>
            </div>
            :
            ""
            }
                    
        </>
    )
}
export default News