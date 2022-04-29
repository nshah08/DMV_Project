import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Routing/Navbar';
function Home(){
    return(
    <body class="homepage is-preload">
		    <div id="page-wrapper">

				<section id="header">
				<img src={"./images/dmvLogo.png"} height={150}></img>
						<section id="banner">
							<header>
								<h2>Drive Safe</h2>
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