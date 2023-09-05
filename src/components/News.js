// import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

// export class News extends Component {

//     // static defaultProps = {               //this is for setting the default value of props
//     //     country: 'in',
//     //     pageSize: 8,
//     //     category: 'science'
//     // }

//     // static defaultProps = {              //this is for setting the data type of variables
//     //     country: PropTypes.string,
//     //     pageSize: PropTypes.number,
//     //     category: PropTypes.string
//     // }

//     constructor() {
//         super();                //you have to write super neither you will get an error , it is syntax
//         this.state = {          //this.state is used to set the state of component
//             articles: [],
//             loading: false,     //this is for spinner
//             page: 1,
//             totalResuls: 0
//         }
//     }

//     //async thi function wait karse data ave tya sudhi , fetch will return a promice
//     //componentDidMount will run after the render method 
//     //data.json() is converting the data into json format

//     async componentDidMount() {
//         this.updateNews();
//     }

//     async updateNews() {
//         let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
//         this.setState({ loading: true });      //this is for spinner
//         let data = await fetch(url);
//         let parseData = await data.json();

//         this.setState({
//             articles: parseData.articles,
//             totalArticles: parseData.totalResuls,
//             loading: false
//         })
//     }

//     // onHandleNextClick = async () => {
//     //     this.setState({ page: this.state.page + 1 });
//     //     this.updateNews();
//     // }

//     // onHandlePrevClick = async () => {
//     //     this.setState({ page: this.state.page - 1 });
//     //     this.updateNews();
//     // }

//     fetchMoreData = async () => {
//         this.setState({ page: this.state.page + 1 })
//         let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
//         let data = await fetch(url);
//         let parseData = await data.json();

//         this.setState({
//             articles: this.state.articles.concat(parseData.articles),    //concat method is used to cancatenate the data
//             totalArticles: parseData.totalResuls
//         })
//     };

//     render() {
//         return (
//             <div className='container my-3'>
//                 <h2 className='text-center'>Inshorts Top headlines</h2>
//                       {/* //this tell that when this.state.loading is true then show the spinner */}
//                 {this.state.loading && <Spinner />}

//                  <div className="row">

//                         {/* iterating through array of objects of news using map function */}
//                         {/* ahi loading true hoy to baki no content show nai karo aena mate !this.state.loading  lakyu che */}
//                           matlab loading false hoy to articles batavo  */}

//                    {!this.state.loading && this.state.articles.map((element) => {
//                         return <div className="col-md-4" key={element.url}>
//                             <NewsItem title={element.title} description={element.description != null ? element.description : ""}
//                                 imageUrl={element.urlToImage === null ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fappgrooves.com%2Frank%2Fnews_and_magazines%2Fworld-news%2Fbest-world-news-apps&psig=AOvVaw3LmC07RMo4SXi2GPi5YLeA&ust=1673168517177000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCV28eMtfwCFQAAAAAdAAAAABAE" : element.urlToImage} 
//                                 newsUrl={element.url} author={element.author} date={element.publishedAt}/>
//                         </div>
//                     })} 
//                 </div>

//                 <div className="container d-flex justify-content-between">
//                     <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.onHandlePrevClick}> &larr; Previous</button>
//                     <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResuls/props.pageSize)} type="button" className="btn btn-dark" onClick={this.onHandleNextClick}> Next &rarr; </button>
//                 </div> 

//                 <InfiniteScroll
//                     dataLength={this.state.articles.length}
//                     next={this.fetchMoreData}
//                     hasMore={this.state.articles.length !== this.state.totalResuls}
//                     loader={<Spinner />} >

//                     <div className="row">
//                           {/* iterating through array of objects of news using map function */}
//                         {this.state.articles.map((element) => {
//                             return <div className="col-md-4" key={element.url}>
//                                 <NewsItem title={element.title} description={element.description != null ? element.description : ""}
//                                     imageUrl={element.urlToImage === null ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fappgrooves.com%2Frank%2Fnews_and_magazines%2Fworld-news%2Fbest-world-news-apps&psig=AOvVaw3LmC07RMo4SXi2GPi5YLeA&ust=1673168517177000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCV28eMtfwCFQAAAAAdAAAAABAE" : element.urlToImage}
//                                     newsUrl={element.url} author={element.author} date={element.publishedAt} />
//                             </div>
//                         })}
//                     </div>
//                 </InfiniteScroll>

//             </div>
//         )
//     }
// }

// export default News

import React, { useEffect, useState } from 'react'

const News = (props) => {

    //instead of constructor , setting the variables its value
    const [articles, setArticles] = useState([]);
    const [loading, setloading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = async () => {
        
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${props.page}&pageSize=${props.pageSize}`;
        setloading(true);      //this is for spinner
        let data = await fetch(url);
        let parseData = await data.json();

        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setloading(false);

    }

    useEffect(() => {            //this is used instead of componentDidMount()
        updateNews();
    }, [])

    // const onHandleNextClick = async () => {
    //     setPage(page+1);             // this.setState({ page: this.state.page + 1 });
    //     updateNews();
    // }

    // const onHandlePrevClick = async () => {
    //     setPage(page-1);           // this.setState({ page: this.state.page - 1 });
    //     updateNews();
    // }

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1);         //this.setState({ page: props.page + 1 })
        let data = await fetch(url);
        let parseData = await data.json();

        setArticles(articles.concat(parseData.articles));
        setTotalResults(parseData.totalResults);

    };

    return (
        <div className='my-3'>
        <h2 className='text-center' style={{ marginTop: "50px", color: "black" }}>{`NewsWave - Top ${props.category} HeadLines`}</h2>
    
        {loading && <Spinner />}
    
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner />}>
    
            <div className="row">
                {articles.map((element) => {
                    return (
                        <div className="col-lg-4 col-md-6 col-sm-12" key={element.url}>
                            <NewsItem
                                title={element.title}
                                description={element.description != null ? element.description : ""}
                                imageUrl={element.urlToImage === null ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fappgrooves.com%2Frank%2Fnews_and_magazines%2Fworld-news%2Fbest-world-news-apps&psig=AOvVaw3LmC07RMo4SXi2GPi5YLeA&ust=1673168517177000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCV28eMtfwCFQAAAAAdAAAAABAE" : element.urlToImage}
                                newsUrl={element.url}
                                author={element.author}
                                date={element.publishedAt}
                            />
                        </div>
                    );
                })}
            </div>
        </InfiniteScroll>
    </div>
    
    )
}

export default News

News.defaultProps = {               //this is for setting the default value of props
    country: 'in',
    pageSize: 8,
    category: 'science'
}

News.defaultProps = {              //this is for setting the data type of variables
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}