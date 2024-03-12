import './leftpanel.css';
import Cards from './cards';
import Button from '@mui/material/Button';
import { FormControlLabel, Checkbox } from '@mui/material';
function Left_panel() {

    return (
        <section className="sec2 bg-light mt-2">
            <div className="row">
                <div className="col-md-2 ps-4 pt-3 col2">
                    <div className="fw-bold">Filters
                        <hr />
                    </div>
                    <div className="dropdown">
                        <a className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            GENDER
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#"> <FormControlLabel control={<Checkbox color='success' size='small' defaultChecked />} label="MALE" /> </a>
                            </li>
                            <li><a className="dropdown-item" href="#"><FormControlLabel control={<Checkbox color='success' size='small' defaultChecked />} label="FEMALE" /></a></li>
                        </ul>
                        {/* <Button variant="contained">Contained</Button> */}
                    </div>
                    <hr />
                    <div>
                        <FormControlLabel control={<Checkbox size='small' />} /> <img
                            className='fassured' src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fa_8b4b59.png" alt="" />
                    </div>
                    <hr />

                    <div className="dropdown">

                        <a className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            DISCOUNT
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#"><input className="disc" type="checkbox" id="cb1"
                                value="30" name="30" /> 30% or more</a></li>
                            <li><a className="dropdown-item" href="#"><input className="disc" type="checkbox" id="cb2"
                                value="40" name="40" /> 40% or more</a></li>
                            <li><a className="dropdown-item" href="#"><input className="disc" type="checkbox" id="cb3"
                                value="50" name="50" /> 50% or more</a></li>
                            <li><a className="dropdown-item" href="#"><input className="disc" type="checkbox" id="cb4"
                                value="60" name="60" /> 60% or more</a></li>
                        </ul>
                    </div>
                    <hr />
                    <div className="dropdown">
                        <a className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            SIZE
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#"><input className="size" value="s" type="checkbox"
                                name="male" id="" /> S (small)</a></li>
                            <li><a className="dropdown-item" href="#"><input className="size" value="m" type="checkbox"
                                name="male" id="" /> M (medium)</a></li>
                            <li><a className="dropdown-item" href="#"><input className="size" value="l" type="checkbox"
                                name="male" id="" /> (large)</a></li>
                            <li><a className="dropdown-item" href="#"><input className="size" value="xl" type="checkbox"
                                name="male" id="" /> XL (extra large)</a></li>
                        </ul>
                    </div>
                    <hr />
                    <div>
                        <span>PRICE</span>
                        <input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange3" />
                        <select className="min_price form-select" id="" aria-label="MIN">
                            <option value="500">₹500</option>
                            <option value="1000">₹1000</option>
                            <option value="1500">₹1500</option>
                            <option value="2000">₹2000</option>
                            <option value="2500">₹2500</option>
                        </select>
                        <span className="text-secondary"> to </span>
                        <select className="max_price form-select" id="max_price" aria-label="max">
                            <option selected>Max</option>
                            <option value="500">₹500</option>
                            <option value="1000">₹1000</option>
                            <option value="1500">₹1500</option>
                            <option value="2000">₹2000</option>
                            <option selected value="2500">₹2500</option>
                        </select>
                    </div>
                    <hr />
                    <div className="dropdown">
                        <a className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            BRAND
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item"><input className="form-input" type="checkbox" name="male" />
                                adidas</a></li>
                            <li><a className="dropdown-item"><input className="form-input" type="checkbox" name="male" /> PUMA</a>
                            </li>
                            <li><a className="dropdown-item"><input className="form-input" type="checkbox" name="male" />
                                LEVIS</a></li>
                            <li><a className="dropdown-item"><input className="form-input" type="checkbox" name="male" /> FLYING
                                MACHINE</a></li>
                        </ul>
                    </div>
                    <hr />
                    <div className="dropdown">
                        <a className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            OCCASION
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item"><input className="form-input" type="checkbox" name="30" /> PARTY
                                WEAR</a></li>
                            <li><a className="dropdown-item"><input className="form-input" type="checkbox" name="40" />CASOUAL</a>
                            </li>
                            <li><a className="dropdown-item"><input className="form-input" type="checkbox" name="50" /> SPORTS</a>
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="dropdown">
                        <a className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            COLOR
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item"><input className="form-input" type="checkbox" name="male" /> BLUE</a>
                            </li>
                            <li><a className="dropdown-item"><input className="form-input" type="checkbox" name="male" />
                                GREEN</a></li>
                            <li><a className="dropdown-item"><input className="form-input" type="checkbox" name="male" />
                                ORANGE</a></li>
                            <li><a className="dropdown-item"><input className="form-input" type="checkbox" name="male" />
                                YELLOW</a></li>
                        </ul>
                    </div>
                    <hr />
                    <div className="dropdown">
                        <a className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            PATTERN
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item"><input className="form-input" type="checkbox" name="male" />
                                <div className="dropdown">
                                    <a className="dropdown-toggle" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        DISCOUNT
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#"><input className="form-input"
                                            type="checkbox" name="30" /> 30% or more</a></li>
                                        <li><a className="dropdown-item" href="#"><input className="form-input"
                                            type="checkbox" name="40" /> 40% or more</a></li>
                                        <li><a className="dropdown-item" href="#"><input className="form-input"
                                            type="checkbox" name="50" /> 50% or more</a></li>
                                        <li><a className="dropdown-item" href="#"><input className="form-input"
                                            type="checkbox" name="60" /> 60% or more</a></li>
                                    </ul>
                                </div>
                                <hr />
                                <div className="dropdown">
                                    <a className="dropdown-toggle" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        SIZE
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#"><input className="form-input"
                                            type="checkbox" name="male" /> S (small)</a></li>
                                        <li><a className="dropdown-item" href="#"><input className="form-input"
                                            type="checkbox" name="male" /> M (medium)</a></li>
                                        <li><a className="dropdown-item" href="#"><input className="form-input"
                                            type="checkbox" name="male" /> (large)</a></li>
                                        <li><a className="dropdown-item" href="#"><input className="form-input"
                                            type="checkbox" name="male" /> XL (extra large)</a></li>
                                    </ul>
                                </div>
                                <hr />
                                <div className="dropdown">
                                    <a className="dropdown-toggle" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        BRAND
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#"><input className="form-input"
                                            type="checkbox" name="male" /> adidas</a></li>
                                        <li><a className="dropdown-item" href="#"><input className="form-input"
                                            type="checkbox" name="male" /> PUMA</a></li>
                                        <li><a className="dropdown-item" href="#"><input className="form-input"
                                            type="checkbox" name="male" /> LEVIS</a></li>
                                        <li><a className="dropdown-item" href="#"><input className="form-input"
                                            type="checkbox" name="male" /> FLYING MACHINE</a></li>
                                    </ul>
                                </div>
                                <hr />
                            </a></li>
                            <li><a className="dropdown-item" href="#"><input className="form-input" type="checkbox" name="male" />
                                PUMA</a></li>
                            <li><a className="dropdown-item" href="#"><input className="form-input" type="checkbox" name="male" />
                                LEVIS</a></li>
                            <li><a className="dropdown-item" href="#"><input className="form-input" type="checkbox" name="male" />
                                FLYING MACHINE</a></li>
                        </ul>
                    </div>
                    <hr />
                </div>
                <Cards />

            </div>
        </section>


    )
}

export default Left_panel;