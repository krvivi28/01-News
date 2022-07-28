import React, { Component } from 'react';

export class NewsItem extends Component {

 
  render() 
  {
    let {title,desc,imgurl,newsurl}=this.props;
    return (<>
    <div className="card">
            <div className="image"> <img src={imgurl} alt='pic'/></div>
           <div className="heading"><h4>{title}...</h4></div>
            <div className="para"><p>{desc}...</p></div>
            {/* <p className="author">By: {author?author:"unknown"} at {new Date(date).toGMTString()}</p> */}
           <a href={newsurl}>read more</a>
         
        </div>
    </>)
  }
}

export default NewsItem;
