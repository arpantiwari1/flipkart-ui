import './leftpanel.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import EmailIcon from '@mui/icons-material/Email';
import HelpIcon from '@mui/icons-material/Help';
import PolicyIcon from '@mui/icons-material/Policy';
import InfoIcon from '@mui/icons-material/Info';
import BusinessIcon from '@mui/icons-material/Business';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
function Footer() {
    return (
        <section class="lastsec col-12">
            <div class="row">
                <div class="col-md-7 p-5">
                    <div class="row">
                        <div class="col-md-3 p-3">
                            <p class="text-secondary"><InfoIcon color='primary' className='me-1'></InfoIcon>ABOUT</p>
                            <a href="#">Contact us</a><br />
                            <a href="#">about us </a><br />
                            <a href="#">career</a><br />
                            <a href="#">flipkart stories</a><br />
                            <a href="#">flipkart wholeselers</a><br />
                        </div>
                        <div class="col-md-3 p-3">

                            <p class=" text-secondary"><HelpIcon color='primary' className='me-1'></HelpIcon>HELP</p>
                            <a href="#">payment</a><br />
                            <a href="#">shipping </a><br />
                            <a href="#">cancellation & return</a><br />
                            <a href="#">faq</a><br />
                            <a href="#">report infrigenment</a><br />
                        </div>
                        <div class="col-md-3 p-3">
                            <p class=" text-secondary"><PolicyIcon color='primary' className='me-1'></PolicyIcon>CONSUMER POLICY</p>
                            <a href="#">return policy</a><br />
                            <a href="#">terms of use</a><br />
                            <a href="#">security</a><br />
                            <a href="#">privacy</a><br />
                            <a href="#">sitemap</a><br />
                            <a href="#">grievance</a><br />
                            <a href="#">redressal</a><br />
                        </div>
                        <div class="col-md-3 p-3">
                            <p class=" text-secondary"><InsertLinkIcon color='primary' className='me-1'></InsertLinkIcon>SOCIAL</p>
                            <FacebookOutlinedIcon className="me-1" color='primary'></FacebookOutlinedIcon> <a href="#">facebook</a><br />
                            <TwitterIcon className="me-1" color='primary'></TwitterIcon><a href="#">twitter</a><br />
                            <YouTubeIcon className="me-1" color='primary'></YouTubeIcon><a href="#">you tube</a><br />
                        </div>
                    </div>
                </div>
                <div class="col-md-5 p-5">
                    <div class="row">
                        <div class="col-md-6">
                            <p class="text-secondary"><EmailIcon color='primary' className='me-1'></EmailIcon>MAIL US:</p>
                            <p>Flipkart Internet Private Limited,

                                Buildings Alyssa, Begonia &

                                Clove Embassy Tech Village,

                                Outer Ring Road, Devarabeesanahalli Village,

                                Bengaluru, 560103,

                                Karnataka, India</p>
                        </div>
                        <div class="col-md-6">
                            <p class="text-secondary"><BusinessIcon color='primary'></BusinessIcon>Registered Office Address:</p>
                            <p>Flipkart Internet Private Limited,

                                Buildings Alyssa, Begonia &

                                Clove Embassy Tech Village,

                                Outer Ring Road, Devarabeesanahalli Village,

                                Bengaluru, 560103,

                                Karnataka, India

                                CIN : U51109KA2012PTC066107

                                Telephone: 044-45614700</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-3 px-1">
                <hr class="bg-secondary" />

                <p id="fp" class="text-white mx-3">
                    <a href="#"><img className='pb-1' src={require("../tshirt/brief.png")} alt="" /> become a seller</a>
                    <a href="#"><img className='pb-1' alt="" src={require("../tshirt/star.png")} /> advertise</a>
                    <a href="#"><img className='pb-1 me-1' alt="" src={require("../tshirt/gift.png")} />gift card</a>
                    <a href="#"><img className='pb-1 me-1' alt="" src={require("../tshirt/info.png")} />help centre</a>
                    © 2007-2023 Flipkart.com
                    <img src={require('../tshirt/payment.png')}  alt="" />
                </p>


            </div>
        </section>
    )
}
export default Footer;