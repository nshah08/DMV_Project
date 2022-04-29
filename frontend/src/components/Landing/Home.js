import React from 'react';
import {Link} from 'react-router-dom';
function Home(){
    return(
    <body class="homepage is-preload">
		    <div id="page-wrapper">

				<section id="header">
						<nav id="nav">
							<ul>
								<li class="current">
									<Link to="/">Home</Link></li>
                                
								<li>
								<Link to="/VehicleRegistration">Registration</Link>
									<ul>
										<li><a href="addresschange.html">Address Change</a></li>
										<li><a href="DLRenew.html">Driver License Renew</a></li>
										<li><a href="reportvehicle.html">Report a Vehicle</a></li>
									</ul>
								</li>
								<li>
									<a href="#">Driver/ID Services</a>
									<ul>
										<li><a href="practice.html">Practice Exam</a></li>
										<li><a href="realid.html">Real ID</a></li>
										<li><a href="vital.html">Obtaining Vital Record</a></li>
									</ul>
								</li>
								<li>
									<a href="#">Vehicle Services</a>
									<ul>
										<li><a href="selling.html">Selling/Donating</a></li>
										<li><a href="titling.html">Titling</a></li>
									</ul>
								</li>
                                
							</ul>
						</nav>
						<section id="banner">
							<header>
								<h2>DMV</h2>
								<p style={{color:"deepskyblue"}}>Virginia Department of Motor Vehicle</p>
							</header>
						</section>

					

				</section>

			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.dropotron.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>
            </div>
	</body>
    );
}


export default Home;