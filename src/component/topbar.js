import "./topbar.css";


import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
const src = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png";
function Heading() {
    return (
        <>

            <nav className="navbar navbar-expand-lg  navbar-dark bg-primary fixed-top ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img className='logo' src={require('../tshirt/flip1.png')} alt="logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <form>
                        <div className="input-group ms-5">
                            <input type="search" className="form-control rounded-1"
                                placeholder="Search for products" />
                            <div className="input-group-append">
                                <button className="btn" type="submit">
                                    <img src="https://img.icons8.com/ios-filled/28/FFFFFF/search--v1.png" />
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item  dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Your
                                    Account</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">My Profile</a></li>
                                    <li><a className="dropdown-item" href="#">Super coin zone</a></li>
                                    <li><a className="dropdown-item" href="#">my orders</a></li>
                                    <li><a className="dropdown-item" href="#">track your order</a></li>
                                    <li><a className="dropdown-item" href="#">wishlist</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">become a seller</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button"
                                    data-bs-toggle="dropdown">more</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">notification preference</a></li>
                                    <li><a className="dropdown-item" href="#">24*7 customer care</a></li>
                                    <li><a className="dropdown-item" href="#">adverise</a></li>
                                    <li><a className="dropdown-item" href="#">download app</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="modal" data-bs-target="#myModal">
                                    <LocalMallOutlinedIcon ></LocalMallOutlinedIcon>
                                    <sup><span className="badge badge-secondary "
                                        id="badge">0</span></sup></a>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Heading;