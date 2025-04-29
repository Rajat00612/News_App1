import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    
      let {title, description, imageUrl,newsUrl,author,date,source} = this.props;
      return (
      
        <div className='my-3'>
          <div className="card">
            <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}><span class="  badge rounded-pill bg-danger">{source} </span></div>
          
            <img src={!imageUrl?"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/OLTIDIRIQDVO5ZFWIMSCWRKFUI.jpg&w=1440":imageUrl} className="card-img-top" alt="..." />
            <div className="card-body" >
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} <br />Published at: {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank"className="btn btn-dark btn-sm">Read More</a>
          </div>
        </div>
      </div>

    )
  }
}
// 8cd26a418c6a4326a21605595de2310b api key ``
export default NewsItem
