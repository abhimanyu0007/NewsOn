import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
    /*news=[
        {
            "source": {
            "id": "bbc-news",
            "name": "BBC News"
            },
            "author": "BBC News",
            "title": "India travel row: UK recognises Covishield but isolation rules confusion remains",
            "description": "People vaccinated in India may still have to isolate for 10 days on arrival when UK rules change next month",
            "url": "http://www.bbc.co.uk/news/live/uk-58648466",
            "urlToImage": "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.2.0/bbc_news_logo.png",
            "publishedAt": "2021-09-22T10:07:32.8518021Z f8ef3facc9764e0397cc7e9f9eac1c2d",
            "content": "The UK government has this morning amended its foreign travel guidance to clarify that Covishield is an approved vaccine.\r\nBut it's not clear whether people living in India, where the jab is made, wi… [+759 chars]"
        },
    ]*/
    static defaultProps = {
        country: 'in',
        page_size : 8,
        category: "general",
    }

    static propTypes = {
        country: PropTypes.string,
        page_size : PropTypes.number,
        category: PropTypes.string,
    }

    constructor() {
        super();
        this.state = {
            // news: this.news,
            news: [],
            loading: true,
            page_number: 1,
            totalResults: 0
        }
    }

    capitalize = (string) => {
        return (string.charAt(0).toUpperCase() + string.slice(1))
    }

    async componentDidMount() {
        // this code runs after render
        this.props.setProgress(10);
        const url = `https://api.currentsapi.services/v1/latest-news?country=in&category=${this.props.category}&apiKey=kDXbsms2DfRmMFpZwAZAjFzyNEqf9BaQ2KqWHqskd8Une1Kk&page_size=100`
        //const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=233480721f484de398729b84b3073655&page=${this.state.page+1}&page_size =${this.props.page_size }`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);
        console.log(parsedData); /*use console to see what output api is giving, it is in objects.*/
        this.setState({ news: parsedData.news, totalResults: parsedData.totalResults, loading: false })
        //how i wrote 100, refer documentation of "react top loading bar"
        this.props.setProgress(100);
    }
    // handlePrevClick= async ()=>{
    //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&page_size =${this.props.page_size }`;
    //     this.setState({loading: true});
    //     let data = await fetch(url);
    //     let parsedData= await data.json()
    //     // console.log(parsedData);
    //     // this.setState({news: parsedData.news}) this is written in below code
    //     this.setState({
    //         page: this.state.page - 1,
    //         news: parsedData.news,
    //         loading: false
    //     })
    // }

    // handleNextClick= async ()=>{
    //     if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.page_size ))){    
    //          let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&page_size =${this.props.page_size }`;
    //          this.setState({loading: true});
    //          let data = await fetch(url);
    //          let parsedData= await data.json()
    //          // console.log(parsedData);
    //          // this.setState({news: parsedData.news}) this is written in below code
    //          this.setState({
    //              page: this.state.page + 1,
    //              news: parsedData.news,
    //              loading: false
    //         })
    //     }
    // }

    /*fetchMoreData = async() => {
        this.setState({ page_number: this.state.page_number + 1})
        // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2009321247d646449fa8b447fef46a2f&page=${this.state.page+1}&page_size =${this.props.page_size }`;
        const url = 'https://api.currentsapi.services/v1/latest-news?country=in&category=business&apiKey=kDXbsms2DfRmMFpZwAZAjFzyNEqf9BaQ2KqWHqskd8Une1Kk&page_size=8&page_number =1'
        // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=233480721f484de398729b84b3073655&page=${this.state.page+1}&page_size =${this.props.page_size }`;
        //this.setState({ page_number: this.state.page_number + 1})
        // this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData); /*use console to see what output api is giving, it is in objects.////
        this.setState({ news: this.state.news.concat(parsedData.news), totalResults: parsedData.totalResults, 
        /*loading: false//// })
      };*/

    
    render() {
        return (
            <>
                {/* <h1 className="text-center" style={{margin: '35px 0px',color: 'white'}}>NewsOn - Top Headlines</h1> */}
                <h1 className="text-center" style={{ margin: '35px 0px',marginTop:'90px', color: 'white' }}>NewsOn - Top {this.capitalize(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner/>}       
                        {/*<InfiniteScroll
                            dataLength={this.state.news.length}
                            next={this.fetchMoreData}
                            hasMore={this.state.news.length !== this.state.totalResults}
                            loader={<Spinner/>}
                        > */}
                        {/* for earlier design className="container" */}
                        <div className="container-fluid" style={{padding:'0px 40px'}}>     
                        <div className="row">
                            { this.state.news.map((element) => {
                                return <div className="col-md-3" key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.image}
                                        newsUrl={element.url} author={element.author} date={element.published} source={element.source} />
                                    </div>
                                })}
                        </div>
                        </div>
                        {/* </InfiniteScroll> */}
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.page_size )} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
            </>
        )
    }
}
export default News