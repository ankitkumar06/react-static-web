import React from 'react'
import kh from './img/iphone_img.jpg';
import kl from "./img/mockup3-phone.png";
import ml from "./img/app-screen.png";
import lp from "./img/data_7.png";
import sr1 from "./img/screenshot/interface_1.png"
import sr2 from "./img/screenshot/interface_1.png"
import sr3 from "./img/screenshot/interface_1.png"
import im1 from "./img/partner/brand-1.png"
import im2 from "./img/partner/brand-2.png"
import im3 from "./img/partner/brand-3.png"
import im4 from "./img/partner/brand-4.png"
import im5 from "./img/partner/brand-5.png"
import pl from "./img/pay store.png"
import cl from "./img/testimonial/1.jpg"
import wt from "./img/video.jpg"
import "./App.css";

function App() {
  return (
   <>
   <div class="component">
   <div className="header">
    
  <div className="header-right">
     
    <a className="active" href="#">Home</a>
    <a href="#feature">Features</a>
    <a href="#screenshot">Screenshot</a>
    <a href="#pricing">Pricing</a>
    <a href="#">Download</a>
    <a href="#angle">Contact</a>
  </div>
</div>
<div className="bg">
		
		<div className="mcontent" >
		<h1>No Complexity, Easy Integrate</h1>
		<p>Quality control of your data including read length distribution and uniformity
         assessment in a few clicks and choose your favorite technology.
          </p>

         <button className="btn">DOWNLOAD NOW</button>
     </div>
     <div className="image">
		<img src={kh}/>
    </div>
       
	</div>
  <div className="dummy">
	<p>Dummy is clean app landing page ideal for promoting your Android apps,
	as well as web services and software. The features and sections let you present the App.</p>
</div>
<div className="card">
	<div className="card_main card1">
	<i className="fa fa-window-maximize"></i>
     <h2>Data in Cloud</h2>
     <p>The Data Cloud eliminates these silos, allowing you to seamlessly and even monetize your data. </p>
</div>
<div className="card_main card2">
	<i className="fa fa-soccer-ball-o"></i>
     <h2>Exclusive Design</h2>
     <p>The Data Cloud eliminates these silos, allowing you to seamlessly and even monetize your data.</p>
</div>
<div className="card_main card3">
	<i className="fa fa-paper-plane-o"></i>
     <h2>Enjoy It</h2>
     <p>The Data Cloud eliminates these silos, allowing you to seamlessly and even monetize your data.</p>
</div>
<div className="card_main card4">
	<i className="fa fa-file-code-o"></i>
     <h2>24/7 Support</h2>
     <p>The Data Cloud eliminates these silos, allowing you to seamlessly and even monetize your data.</p>
</div>
</div>
<div className="tools">
		
		<div className="tcontent">
		<h1>Simplest way to build tools</h1>
		<p>The Data Cloud eliminates these silos, allowing you to seamlessly unify, analyze, share, and even monetize your data. The Data Cloud allows organizations to unify and connect to a single copy of all of their data with ease.
          </p>

         <button className="btn">DOWNLOAD NOW</button>
     </div>
     <div className="timg">
		<img src={kl}/> </div>
       
	</div>

  <div class="data">
		
		<div className="dimg">
		<img src={ml} /></div>
		<div className="dcontent">
		<h1>Quality control of your data with support</h1>
		<p>The Data Cloud eliminates these silos, allowing you to seamlessly unify, analyze, share, and even monetize your data. The Data Cloud allows organizations to unify and connect to a single copy of all of their data with ease.
          </p>

         <button className="btn">DOWNLOAD NOW</button>
     </div>
       
	</div>
  <div className="featureimg" id="feature">
	 	<div className="text">
	 	<h1>Amazing <span>Features</span></h1></div>
	 <div className="feature">
	 	<div className="icon">
	<i className="	fa fa-circle-o-notch"></i></div>
	<div className="main_feature">
	{/* <!-- <i className="fa fa-window-maximize"></i> --> */}
     <h2>Made With Love </h2>
     <p>The Data Cloud eliminates these silos, allowing you to seamlessly and even monetize your data.</p>
</div>
<div className="icon">
	<i className="fa fa-keyboard-o"></i></div>
<div className="main_feature">
	{/* <!-- <i className="fa fa-soccer-ball-o"></i> --> */}
     <h2>Powerful</h2>
     <p>The Data Cloud eliminates these silos, allowing you to seamlessly and even monetize your data.</p>
</div>
<div className="icon">
	<i className="fa fa-bullhorn"></i></div>
<div className="main_feature">
	{/* <!-- <i className="fa fa-paper-plane-o"></i> --> */}
     <h2>Send Messages</h2>
     <p>The Data Cloud eliminates these silos, allowing you to seamlessly and even monetize your data.</p>
</div>
<div className="icon">
	<i className="fa fa-dot-circle-o"></i></div>
<div className="main_feature">
	{/* <!-- <i className="	fa fa-file-code-o"></i> --> */}
     <h2>Save Money</h2>
     <p>The Data Cloud eliminates these silos, allowing you to seamlessly and even monetize your data.</p>
</div>
</div>
</div>
<div class="place">
		
		<div class="pimg">
		<img src={lp} /></div>
		<div class="pcontent">
			
		<h1>Manage Everything In One Place</h1>
		<p>The Data Cloud eliminates these silos, allowing you to seamlessly unify, analyze, share, and even monetize your data. The Data Cloud allows organizations to unify and connect to a single copy of all of their data with ease.
          </p>

         <button class="btn">DOWNLOAD NOW</button>
     </div>
       
	</div>
  <div class="screentext" id="screenshot">
	 	<div class="text">
	 	<h1>App <span>Screenshot</span></h1></div>
	 <div class="screen">
	
	<div class="main_screen">
	 <img src={sr1} />
</div>
<div class="main_screen">
	 <img src={sr2}/>
</div>
<div class="main_screen">
	 <img src={sr3}/>
</div>
</div>
</div>
<div class="watch">
		
		<div class="wimg">
		<img src={wt} /></div>
		<div class="wcontent">
		
		<h1>Watch Video for company overview</h1>
		<p>The Data Cloud eliminates these silos, allowing you to seamlessly unify, analyze, share, and even monetize your data. The Data Cloud allows organizations to unify and connect to a single copy of all of their data with ease.</p>

			<p>Cras interdum ante vel aliquet euismod. Curabitur accumson vita augue vitae eleifend. Nam nisl massa, malesuada id imperdiet ac.
          </p>

         <h3><a href="image.jpg" data-fancybox data-caption="Caption for single image">
</a><i class="	fa fa-play"></i><span>Watch Video</span></h3>
     </div>
       
	</div>
  <div class="pricing" id="pricing">
  <div class="text">
	 	<h1>Affordable <span>Pricing</span> for All</h1></div>
     <div class="price">
	
	<div class="main_price card1">
	
     <h2>Starter</h2>
     <h3></h3>
     <span>$29</span>
     <h4>Monthly</h4>
     <p>15 website<br></br>
 50GB Disk Space<br></br>
 50 Email Accounts</p>
  <button class="btn">Get Started</button>
</div>
<div class="main_price card2">
	
     <h2>Popular</h2>
     <h3></h3>
     <span>$49</span>
     <h4>Monthly</h4>
     <p>15 website<br></br>
 50GB Disk Space<br></br>
 50 Email Accounts<br></br>
 50GB Monthly Bandwidth<br></br>
 10 Subdomains
</p>
  <button class="btn">Get Started</button>
</div>
<div class="main_price card3">
	
     <h2>Advance</h2>
     <h3></h3>
     <span>$69</span>
     <h4>Monthly</h4>
     <p>15 website<br></br>
 50GB Disk Space<br></br>
 50 Email Accounts<br></br>
 50GB Monthly Bandwidth<br></br>
 10 Subdomains<br></br>
 15 Domains<br></br>
 Unlimited Support</p>
   <button class="btn">Get Started</button>
</div>

</div>
<div class="author">
		
		<div class="client">
		<h1>Check what our client say</h1>
		<p>Quality control of your data including read length distribution and uniformity
         assessment in a few clicks and choose your favorite technology.
          </p>

         
     </div>
     <div class="clientcard">
		<div class="photo">
			<img src={cl} />
			
		</div>
		<h1>Mithila Nihad</h1>
		<h3> FOUNDER</h3>
		<p>The Data Cloud eliminates these silos, allowing you to seamlessly unify, analyze, share, and even monetize your data. </p>
		<div class="list">
			<i class="	fa fa-star"></i>
			<i class="	fa fa-star"></i>
			<i class="	fa fa-star"></i>
			<i class="	fa fa-star"></i>
		</div>
	</div>
</div>
<div class="available">
	<div>
		<h1>Now Available</h1>
</div>
<div className="abutton">
<button className="button button1">
<p>Download on the</p><i className="	fa fa-apple"></i>

App Store</button>
<button className="button button2">
<p>Download on the</p><img src={pl} />Google Play</button>
</div>
	</div>
 
  <div className="item">
		
    <h2>Frequently Asked<span> Questions</span></h2>
    
    <button className="accordion"><i class="fa fa-plus"></i><span>Clean code</span></button>
    <div className="panel">
      <p>The Data Cloud eliminates these silos, allowing you to seamlessly unify, analyze, share, and even monetize your data.</p>
    </div>
    
    <button className="accordion"><i class="fa fa-plus"></i><span>Great design out of box</span></button>
    <div className="panel">
      <p>The Data Cloud eliminates these silos, allowing you to seamlessly unify, analyze, share, and even monetize your data. </p>
    </div>
    
    <button className="accordion"><i className="fa fa-plus"></i> <span>Fit on all devices</span></button>
    <div class="panel">
      <p>The Data Cloud eliminates these silos, allowing you to seamlessly unify, analyze, share, and even monetize your data. </p>
    </div>
    <button className="accordion"><i className="fa fa-plus"></i> <span>Made with passion</span></button>
    <div className="panel">
      <p>The Data Cloud eliminates these silos, allowing you to seamlessly unify, analyze, share, and even monetize your data. </p>
    </div>
        
    </div>

    <div className="ang" id="angle">
	<div className="text">
	 	<h1>Contact <span>Angle</span></h1></div>
<div className="angle">
	<div className="angle_main card1">
	
     <h4>Our Location</h4>
     <div className="para">
     <p>3397 boy street toranto</p>
     <p>ON M5J 280</p>
 </div>
</div>
<div className="angle_main card2">
	
    <h4>Call Us On</h4>
    <div className="para">
     <p>(+1) 517 397 7100</p>
     <p>(+1) 617 497 8200</p>
 </div>
</div>
<div class="angle_main card3">
	
    <h4>Send Your Message</h4>
    <div className="para">
     <p>info@angle.com</p>
     <p>admin@angle.com</p>
 </div>
</div>
<div className="angle_main card4">
	
    <h4>Work Time</h4>
    <div className="para">
     <p>Mon-Fri: 08.00 - 16.00.</p>
     <p>Sat: 10.00 - 14.00</p>
 </div>
</div>
</div>
</div>

<div className="gets">
		
		<div className="gcontent">
		<h1>Get In <br></br>Touch</h1>
		<p>The Data Cloud eliminates these silos, allowing you to seamlessly unify, analyze, share, and even monetize your data. 
          </p>
     
       <a href="#" class="fa fa-facebook"></a>
<a href="#" className="fa fa-twitter"></a>
<a href="#" className="fa fa-linkedin"></a>
<a href="#" className="fa fa-youtube"></a>
<a href="#" className="fa fa-instagram"></a>
     </div>
     <div className="gimg">
	  <div className="container">
  <form>
    <div className="row">
     
      <div className="col-75">
        <input type="text" id="fname" name="name" placeholder="Name" required />
      </div>
    </div>
    <div className="row">
      
      <div className="col-75">
        <input type="text" id="lname" name="email" placeholder="Email" required />
      </div>
    </div>
    <div className="row">
      
      <input type="text" name="sub" placeholder="Subject" required />
    </div>
    <div className="row">

      <div className="col-75">
        <textarea id="subject" name="subject" placeholder="Your Message" required style={{height:"100px"}}></textarea>
      </div>
    </div>
    <div className="row">
      <input type="submit" value="Submit" />
    </div>
  </form>
</div>

	 </div>
       
	</div>
 
  <div className="partner">
		<img src={im1} />
		<img src={im2} />
        <img src={im3} />
        <img src={im4} />
        <img src={im5}/>


	</div>
  {/* <div classN="mapouter"><div className="gmap_canvas"><iframe className="gmap_iframe" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Mumbai&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.fridaynightfunkin.net/">Friday Night Funkin Download</a></div><style>.mapouter{position="relative",textAlign="right",width="1040px",height="400px"}.gmap_canvas {overflow="hidden",background="none!important",width="1040px",height="400px"}.gmap_iframe {width="1040px!important",height="400px!important"}</style></div> */}

<footer> &copy; Copyright 2022, Powered By ATCS Technologies<br/>
Developed by Ankit kumar </footer>

  </div>
</div>
   </>
  )
}

export default App