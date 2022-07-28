import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

export class NewsComp extends Component {
  static defaultProps=
  {
    country:'in',
    category:'general'

  }
  static propTypes=
  {
    country:PropTypes.string,
    category:PropTypes.string
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4e3b51d456f542d38e47c80339a223be&pageSize=8`;
      this.setState({loading:true});
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: parseddata.articles,
      totalarticles: parseddata.totalResults,
      loading:false
    });
  }
  handlenext = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalarticles / 8)) {
    }
     else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4e3b51d456f542d38e47c80339a223be&page=${
        this.state.page + 1}&pageSize=8`;
      let data = await fetch(url);
      let parseddata = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parseddata.articles,
      });
    }
    if (!(this.state.page + 1 > Math.ceil(this.state.totalarticles / 8))) 
    {
  
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4e3b51d456f542d38e47c80339a223be&page=${
        this.state.page + 1}&pageSize=8`;
        this.setState({loading:true});
      let data = await fetch(url);
      let parseddata = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parseddata.articles,
        loading:false
      });
    }
  };
  handleprev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4e3b51d456f542d38e47c80339a223be&page=${
      this.state.page - 1
    }&pageSize=8`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({ page: this.state.page - 1, articles: parseddata.articles,loading:false });
  };
  render() {
    return (
      <>
         
        <h1><span id="fake"> 01 News :</span> Top Headlines on <span id="cat">{this.props.category}</span></h1>
        <hr />
        <div className="boxcont">
          {!this.state.loading&&this.state.articles.map((e) => {
            return (
              <NewsItem
                key={e.url}
                title={e.title ? e.title.slice(0, 70) : ""}
                desc={e.description ? e.description.slice(0, 120) : ""}
                imgurl={e.urlToImage}
                newsurl={e.url}
                author={e.author}
                date={e.publishedAt}
              />
            );
          })}
        </div>
        <div className="boxcont sec">
          
          <button
            disabled={this.state.page <= 1}
            className="next"
            type="button"
            onClick={this.handleprev}
          >
            &larr;prev
          </button>
         
          <p>you are @ page: {this.state.page}</p>
          {this.state.loading && <Spinner/>}
          <button
            disabled={(this.state.page + 1 )> Math.ceil(this.state.totalarticles / 8)}
            className="next"
            type="button"
            onClick={this.handlenext}
          >
            next &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default NewsComp;
