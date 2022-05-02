import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import dmv from '../../dmv';
import web3 from '../../web3';

function AddressInfo(){
    const [street, setStreet] = useState(null);
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [zip, setZip] = useState(null);

    async function set(){
        const accounts = await web3.eth.getAccounts();
        const result = await dmv.methods.getaddy(accounts[0]).call();
        const {0:st, 1: ct, 2:ste, 3: zp} = result;
        setStreet(st);
        setCity(ct);
        setState(ste);
        setZip(zp);
    }
    set();
    return(
        
        <body class="homepage is-preload">
		<div id="page-wrapper">
				<section id="header">

                <img src={"./images/dmvLogo.png"} alt ="logo" height={150}/>

				</section>

            <div class ="container">
                <article class ="box post">
                    <header>
                        <h2>Address Information</h2>
                        <li/>
                        <span/>
                        
                        <table>
                            <tr>
                                <td><p><b>Street</b></p></td>
                                <td><p><b>{street}</b></p></td>
                            </tr>
                            <tr>
                                <td><p><b>City</b></p></td>
                                <td><p><b>{city}</b></p></td>
                            </tr>
                            <tr>
                                <td><p><b>State</b></p></td>
                                <td><p><b>{state}</b></p></td>
                            </tr>
                            <tr>
                                <td><p><b>Zip Code</b></p></td>
                                <td><p><b>{zip}</b></p></td>
                            </tr>
                            
                        </table>
                        
                        <Link to="/AddressUpdate" className="button">Update Address</Link>                        
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

export default AddressInfo; 