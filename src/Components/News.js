import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes, { string } from 'prop-types'


export class News extends Component {
 static defaultProps = {
  country: "in",
  pageSize: 8,
  category: 'general'
 }
 static propsTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
 }
 captilizeFirstLetter =(string)=>{
  return string.charAt(0).toUpperCase()+string.slice(1);
 }
  constructor(props){
    super(props);
    this.state={
      articles:[],
      loading:false,
      page:1
    }
    document.title=` ${this.captilizeFirstLetter(this.props.category)} - NewsMonkey`;
  }
  async updateNews(props){
    this.props.setprogress(10);
    const url = `https://newsapi.org/v2/top-headlines/?country=${this.props.country}&category=${this.props.category}&apiKey=8cd26a418c6a4326a21605595de2310b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   this.setState({loading:true})
   let data = await fetch(url);
   this.props.setprogress(30);
   let parseddata = await data.json()
   this.props.setprogress(70);
   this.setState({articles:parseddata.articles,
    totalArticles:parseddata.totalResults,
 loading:false })
 this.props.setprogress(100);
  }
  async componentDidMount(){
//    let url = `https://newsapi.org/v2/top-headlines/?country=${this.props.country}&category=${this.props.category}&apiKey=8cd26a418c6a4326a21605595de2310b&pageSize=${this.props.pageSize}`;
//    this.setState({loading:true})
//    let data = await fetch(url);
//    let parseddata = await data.json()
   
//    this.setState({articles:parseddata.articles,
//     totalArticles:parseddata.totalResults,
//  loading:false })
this.updateNews();
  }
 handleNextClick = async()=>{
//   if(!(this.state.page+1 > Math.ceil(this.state.totalArticles/this.props.pageSize))){

 
//   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8cd26a418c6a4326a21605595de2310b&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
//   this.setState({loading:true})
//   let data = await fetch(url);
//   let parseddata = await data.json()
//   console.log(parseddata)
//   this.setState({articles:parseddata.articles})

//   this.setState({
//   page: this.state.page+1,
//   articles:parseddata.articles,
//  loading:false
// })
// }
this.setState({page:this.state.page+1})
this.updateNews();
  }

  handlePreviousClick=  async()=>{
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8cd26a418c6a4326a21605595de2310b&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
//     this.setState({loading:true})
//   let data = await fetch(url);
//   let parseddata = await data.json()
//   console.log(parseddata)
//   this.setState({articles:parseddata.articles})

//   this.setState({
//   page: this.state.page-1,
//   articles:parseddata.articles,
//   loading:false
 
// })
this.setState({page:this.state.page-1})
this.updateNews();
  }
  render() {

    return (
      
      <div className='container my-3'>
      <h1 className="text-center my-3">NewsMonkey - Top   {this.captilizeFirstLetter(this.props.category)} Headlines</h1>
     {this.state.loading&&<Spinner/>}
      <div className="row">
      {!this.state.loading && this.state.articles.map((elements)=>{
return  <div className="col-md-4" key = {elements.url}>
<NewsItem  title={elements.title?elements.title  :""} description={elements.description?elements.description:""} imageUrl={elements.urlToImage} newsUrl={elements.url} author={elements.author} date={elements.publishedAt} source={elements.source.name}/>
</div>
        })}
       
        
      
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark mx-2" onClick={this.handlePreviousClick}> &larr;Previous</button>
        <button type="button"  disabled={(this.state.page+1 > Math.ceil(this.state.totalArticles/this.props.pageSize))}className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
