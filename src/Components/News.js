import React, { Component } from "react";
import NewsList from "./NewsList";
import Spin from "./Spin";
import PropTypes from 'prop-types'


export class News extends Component {
   
    static defaultProps = {
      country: 'in',
      pageSize: 9,
      category:'general'
    }
    static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string,
    }
    constructor(props){
        super(props);
        this.state={
            articles: [],
            loading:false,
            page:1
        }
        document.title=`${this.props.category} - News for US`;
    }
    async updateNews(page){
      const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e91ffc2fd2984f7aa6fe50295b6e2a74&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data= await fetch(url);
      let parsedData = await data.json()
      this.setState({loading:false});  
      this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults})
    }
    async componentDidMount(){
      // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e91ffc2fd2984f7aa6fe50295b6e2a74&page=1&pageSize=${this.props.pageSize}`;
      // let data= await fetch(url);
      // let parsedData = await data.json()
      // this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults})
      this.updateNews();
    }

    handlePrevClick = async()=>{
      // console.log("Previous")
      // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e91ffc2fd2984f7aa6fe50295b6e2a74&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      // let data= await fetch(url);
      // let parsedData = await data.json();
      // this.setState({loading:true});
      // console.log(parsedData);
      // this.setState({
      //   page:this.state.page-1,
      //   articles: parsedData.articles,
      //   loading:false
      // })
      this.setState({page:this.state.page-1})
      this.updateNews();
      this.setState({loading:true});
    }
    
    handleNextClick = async()=>{ 
      console.log("Next")
      // if (!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
      //   this.setState({loading:true});
      //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e91ffc2fd2984f7aa6fe50295b6e2a74&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      //   let data= await fetch(url);
      //   let parsedData = await data.json()
      //   this.setState({loading:false});
      //   this.setState({
      //     page:this.state.page+1,
      //     articles: parsedData.articles,
      //     loading:false
      //   })
      // }
      this.setState({page:this.state.page+1})
      this.updateNews();
      this.setState({loading:true});
    }

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center my-3" style={{margin:'35px'}}>News for US - Today latest {this.props.category} News</h2>
        {this.state.loading && <Spin/>}
        
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-md-4" key = {element.url}>
            <NewsList title={element.title?element.title:""} description={element.description?element.description:""} imageurl={element.urlToImage} Newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
        </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
