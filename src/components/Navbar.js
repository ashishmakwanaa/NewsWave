import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../components/Navbar.css';

//class based component
// export class Navbar extends Component {

//     render() {
//         return (
//             <div>
//                 <nav className="navbar navbar-expand-lg bg-body-tertiary">
//                     <div className="container-fluid">
//                         <Link className="navbar-brand" to="/"> Inshorts </Link>
//                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                                 <li className="nav-item">
//                                     <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
//                                 </li><li className="nav-item">
//                                     <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
//                                 </li><li className="nav-item">
//                                     <Link className="nav-link active" aria-current="page" to="/general">General</Link>
//                                 </li><li className="nav-item">
//                                     <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
//                                 </li><li className="nav-item">
//                                     <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
//                                 </li><li className="nav-item">
//                                     <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </nav>
//             </div>
//         )
//     }
// }
// export default Navbar

//function based component
const Navbar = () => {

        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary ">
                    <div className="container-fluid">
                        <Link className="navbar-brand " to="/">  NewsWave  </Link>
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/"><ion-icon name="home-sharp"></ion-icon> Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/business"><ion-icon name="business-sharp"></ion-icon> Business</Link>
                                </li><li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/entertainment"><ion-icon name="videocam-sharp"></ion-icon> Entertainment</Link>
                                </li><li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/general"><ion-icon name="arrow-down-circle-sharp"></ion-icon> General</Link>
                                </li><li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/health"><ion-icon name="medkit-sharp"></ion-icon> Health</Link>
                                </li><li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/science"><ion-icon name="book-sharp"></ion-icon> Science</Link>
                                </li><li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/sports"><ion-icon name="football-sharp"></ion-icon> Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/technology"><ion-icon name="podium-sharp"></ion-icon> Technology</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
}
export default Navbar