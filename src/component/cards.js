import MultiActionAreaCard from './card_pro';
import './leftpanel.css';
function Cards() {
    return (
        <div class="col-md-10 p-4 cards_main">


            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">men</a></li>
                    <li class="breadcrumb-item"><a href="#">cloths</a></li>
                    <li class="breadcrumb-item " aria-current="page">t-shirts</li>
                </ol>
            </nav>

            <h6>Men's T Shirts <span class="p10">(Showing 1 – 40 products of 484 products)</span></h6>
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <a class="nav-link active" data-bs-toggle="pill" href="#menu">recommended</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="pill" href="#menu1">popularity</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="pill" href="#menu2">price-high to low</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="pill" href="#menu2">price-low to high</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="pill" href="#menu2">newest first</a>
                </li>
            </ul>
            <hr />

            <div class="tab-content">
                <div class="tab-pane  active" id="menu">
                    <div class="row" id="c">

                        <div class="row" id="card">
                            <MultiActionAreaCard />
                        </div>



                    </div>

                </div>
                <div class="tab-pane container fade" id="menu1">
                    <div class="tab-content">
                        <div class="tab-pane container active" id="home">
                            <div class="row" id="c2">
                                <div class="row" id="card1">
                                </div>

                            </div>

                        </div>
                    </div>
                    <div class="tab-pane container fade" id="menu2">...</div>
                </div>
            </div>
        </div>
    )
}

export default Cards;