import React, { Component } from 'react'

//class based component
// export class NewsItem extends Component {
//     render() {
//         let { title, description, imageUrl , newsUrl , author , date} = this.props;      
//         //anathi title,.., ne aeni value malse props mathi 

//         return (
//             <div className='my-3'>
//                 <div className="card" style={{ width: "18rem" }}>
//                     <img src={imageUrl} style={{height : "13rem"}} className="card-img-top" alt="..."  />
//                     <div className="card-body">
//                         <h5 className="card-title" style={{height : "3rem",overflow : "hidden"}}>{title}</h5>
//                         <p className="card-text" style={{height : "7.9rem",overflow : "hidden"}}>{description}</p>
//                         <p className='card-text'><small className='text-muted'>By {author!=null ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
//                         <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
// export default NewsItem;


//function based component
const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date } = props;
    //anathi title,.., ne aeni value malse props mathi 

    return (
        <div className='my-4 mx-4 sticky'>
            <div className="card" style={{ width: "25rem"}}>
                <img src={imageUrl} style={{ height: "13rem" }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" style={{ height: "3rem", overflow: "hidden" }}>{title}</h5>
                    <p className="card-text" style={{ height: "7.9rem", overflow: "hidden" }}>{description}</p>
                    <p className='card-text'><small className='text-muted'>By {author != null ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem

