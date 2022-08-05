import React, { Component } from 'react'

export class NewsList extends Component {
    
    render() {
        let{title , description , imageurl , Newsurl, author, date, source } = this.props;
        return (
            <div className="my-3">
             <div className="card" > {/*style={{width: "18rem"}} */}
            <img src={!imageurl?"https://img.mensxp.com/media/content/2017/Dec/famous-people-who-dared-to-be-different-1400x653-1512138418.jpg":imageurl}className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <h6><span className="badge rounded-pill bg-warning">{source}</span></h6>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
              <a href={Newsurl} target= "_blank" rel="noreferrer"className="btn btn-sm btn-info">Read more...</a>
            </div>
          </div>
          </div>
        )
    }
}

export default NewsList
