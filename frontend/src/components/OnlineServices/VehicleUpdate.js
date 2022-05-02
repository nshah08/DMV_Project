import React, {useState} from 'react';
import dmv from "../../dmv";
import web3 from "../../web3";
import {useNavigate} from 'react-router-dom'
function VehicleUpdate(){
    let navigate = useNavigate();
    const [vin, setVin] = useState(null);
    const [make, setMake] = useState(null);
    const [makeYear, setMakeYear] = useState(null);
    const [title, setTitle] = useState(null);
    const [date, setDate] = useState(null);
    const pay = '0.014096'
    function getVin(val){
        setVin(val.target.value)
    }
    function getMake(val){
        setMake(val.target.value)
    }
    function getMakeYear(val){
        setMakeYear(val.target.value)
    }

    function getTitle(val){
        setTitle(val.target.value)
    }

    async function datepusher(){
        const accounts = await web3.eth.getAccounts();
        const result = await dmv.methods.getreg(accounts[0]).call()
        var { 1: dt} = result;
        dt = new Intl.DateTimeFormat('en-US').format(dt)
        dt = new Date(dt)
        dt = dt.setFullYear(dt.getFullYear() +1)
        setDate(dt);
        
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
                        <h2>Vehicle Registration Information</h2>
                        <span/>
						
                        <table>
                            <tr>
                                <td><p><b>VIN</b></p></td>
                                <input type="text" onChange={getVin} />
                            </tr>

                            <tr>
                                <td><p><b>Make</b></p></td>
                                <input type="text" onChange={getMake} />
                            </tr>
                            <tr>
                                <td><p><b>Make Year</b></p></td>
                                <input type="text" onChange={getMakeYear} />
                            </tr>
                            <tr>
                                <td><p><b>Title</b></p></td>
                                <input type="text" onChange={getTitle} />
                            </tr>

							<tr>
                                <td><p><b>Amount Need to Pay</b></p></td>
                                <td><p><b></b>0.014096 ETH</p></td>
                            </tr>
                        </table>

                        <button onClick={async ()=>{
                            const accounts = await web3.eth.getAccounts();
                            await dmv.methods.regset(accounts[0], vin, date, make, makeYear, title).send({
                                from: accounts[0]
                            })
                            await dmv.methods.regpay().send({
                                from: accounts[0],
                                value: web3.utils.toWei(pay, "ether"),
                            }).then(()=>{
                                navigate("/VehicleRegistration");
                            })
                        /*
                            const result= await dmv.methods.getreg(accounts[0]).call()
                            const {0: test1, 1: test2} = result;
                            console.log("Test 1: ", test1)
                            console.log("Test 2: ", test2)
                        */
                        }}>Pay</button>
                        
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

export default VehicleUpdate; 