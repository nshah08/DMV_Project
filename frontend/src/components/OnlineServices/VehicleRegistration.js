import React from 'react';
import {Link} from 'react-router-dom'
function VehicleRegistration(){
    return(
        <body class="homepage is-preload">
		<div id="page-wrapper">
				<section id="header">
                <img src={"./images/dmvLogo.png"} alt ="logo" height={150}></img>

				</section>

            <div class ="container">
                <article class ="box post">
                    <header>
                        <h2>Customer Information</h2>
                        <li/>
                        <span/>

                        <table>
                            <tr>
                                <td><p><b>VIN</b></p></td>
                                <td><p><b>xxxxxxx</b></p></td>
                            </tr>

                            <tr>
                                <td><p><b>Expire Date</b></p></td>
                                <td><p><b>xxxxxxx</b></p></td>
                            </tr>
                        </table>

                        <Link to="/Pay" className="button">Update</Link>
                        
                    </header>
                </article>
                </div>

				

			
		

			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.dropotron.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>
		</div>	
	</body>
    )
}

export default VehicleRegistration;