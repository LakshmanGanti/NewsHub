import React, { Component } from 'react'
import './card.css';

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date,source } = this.props;

        return (
            <div className='my -3'>
                <div className="card shadow-lg">
                <span class="position-absolute top-0  translate-middle badge rounded-pill btn" style={{left:'90%',zIndex:'1'}}>
                           {source}
                            
                        </span>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className='card-text'><small className='text-muted'>By {!author ? "Unkown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn  ">Load more</a>
                    </div>
                </div>
            </div>
        )
    }
}


export default NewsItem