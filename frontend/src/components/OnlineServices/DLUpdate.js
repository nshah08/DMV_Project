import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import dmv from '../../dmv';
import web3 from '../../web3'; 
function DLUpate(){
    const navigate = useNavigate();
    const [name, setName] = useState(null);
    const [DOB, setDOB] = useState(null);
    const [dlId, setDlId] = useState(null);
    const [dlExpDate, setDlExpDate] = useState(null);
    const pay = '0.011276';
    function getName(val){
        setName(val.target.value)
    }

    function getDOB(val){
        var timestamp = (Date.parse(val.target.value));
        setDOB(timestamp)
    }
    function getDlId(val){
        setDlId(val.target.value)
    }

    async function datepusher(){
        const accounts = await web3.eth.getAccounts();
        const result = await dmv.methods.getdl(accounts[0]).call()
        var { 3: dt} = result;
        dt = new Intl.DateTimeFormat('en-US').format(dt)
        dt = new Date(dt)
        dt = dt.setFullYear(dt.getFullYear() +1)
        setDlExpDate(dt);
        
    }
    datepusher();
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
                        
                        <span/>
						
                        <table>
                            <tr>
                                <td><p><b>Name</b></p></td>
                                <input type="text" onChange={getName} />
                            </tr>
                            <tr>
                                <td><p><b>Date of Birth</b></p></td>
                                <input type="text" onChange={getDOB} />
                            </tr>
                            <tr>
                                <td><p><b>Driver's License ID</b></p></td>
                                <input type="text" onChange={getDlId} />
                            </tr>
							<tr>
                                <td><p><b>Amount Need to Pay</b></p></td>
                                <td><p><b></b>0.00036 ETH</p></td>
                            </tr>
                        </table>

                        <button onClick={()=>navigate(-1)}>Cancel</button>
                        <span/>
                        <button onClick={async ()=>{
                            const accounts = await web3.eth.getAccounts();
                            await dmv.methods.dlset(accounts[0], dlId, name, DOB, dlExpDate).send({
                                from:accounts[0]
                            })
                            await dmv.methods.dlpay().send({
                                from: accounts[0],
                                value: web3.utils.toWei(pay, "ether"),
                            }).then(() =>{
                                navigate("/DLInfo");
                            })
                        }}>Renew and Pay</button>
                        
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

export default DLUpate; 