import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import dmv from '../../dmv';
import web3 from '../../web3';
function DLInfo(){
    const [dlId, setDlId] = useState(null);
    const [dlExpDate, setDlExpDate] = useState(null);
    const [name, setName] = useState(null);
    const [DOB, setDOB] = useState(null);

    async function set(){
        const accounts = await web3.eth.getAccounts();
        var result = await dmv.methods.getdl(accounts[0]).call();
        const {0:dlid, 1: nm, 2:birth, 3:expdate}= result;
        setName(nm);
        setDOB(converter(birth));
        setDlId(dlid);
        setDlExpDate(converter(expdate));
    }
    set();
    function converter(date){
        return (new Intl.DateTimeFormat('en-US').format(date))
    }
    return(
        <body class="homepage is-preload">
		<div id="page-wrapper">
				<section id="header">
                <img src={"./images/dmvLogo.png"} alt ="logo" height={150}/>

				</section>

            <div class ="container">
                <article class ="box post">
                    <header>
                        <h2>Driver License Information</h2>
                        <li/>
                        <span/>

                        <table>
                            <tr>
                                <td><p><b>Name</b></p></td>
                                <td><p><b>{name}</b></p></td>
                            </tr>
                            <tr>
                                <td><p><b>Date of Birth</b></p></td>
                                <td><p><b>{DOB}</b></p></td>
                            </tr>
                            <tr>
                                <td><p><b>Driver License ID</b></p></td>
                                <td><p><b>{dlId}</b></p></td>
                            </tr>

                            <tr>
                                <td><p><b>Expire Date</b></p></td>
                                <td><p><b>{dlExpDate}</b></p></td>
                            </tr>
                        </table>

                        <Link to="/DLUpdate" className="button">Renew</Link>
                        
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

export default DLInfo; 