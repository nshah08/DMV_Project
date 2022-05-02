import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import dmv from "../../dmv";
import web3 from "../../web3";
function UserInfo(){
    let navigate = useNavigate();
    const [name, setName] = useState(null);
    const [DOB, setDOB] = useState(null);
    const [street, setStreet] = useState(null);
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [zip, setZip] = useState(null);
    const [vin, setVin] = useState(null);
    const [expDate, setExpDate] = useState(null);
    const [make, setMake] = useState(null);
    const [makeYear, setMakeYear] = useState(null);
    const [title, setTitle] = useState(null);
    const [dlId, setDlId] = useState(null);
    const [dlExpDate, setDlExpDate] = useState(null);
    function getName(val){
        setName(val.target.value)
    }

    function getDOB(val){
        var timestamp = (Date.parse(val.target.value));
        setDOB(timestamp)
    }

    function getStreet(val){
        setStreet(val.target.value)
    }

    function getCity(val){
        setCity(val.target.value)
    }

    function getState(val){
        setState(val.target.value)
    }

    function getZip(val){
        setZip(val.target.value)
    }

    function getVin(val){
        setVin(val.target.value)
    }

    function getExpDate(val){
        var timestamp = (Date.parse(val.target.value));
        setExpDate(timestamp)
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

    function getDlId(val){
        setDlId(val.target.value)
    }

    function getDlExpDate(val){
        var timestamp = (Date.parse(val.target.value));
        setDlExpDate(timestamp)
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
                        <h2>Customer Information</h2>
                        <span/>
						
                        <table>
                            <tr>
                                <td><p><b>Enter Your Name</b></p></td>
                                <input type="text" onChange={getName} />
                            </tr>

                            <tr>
                                <td><p><b>Enter Your Date of Birth</b></p></td>
                                <input type="text" onChange={getDOB} />
                            </tr>

							<tr>
                                <td><p><b>Enter Your Address</b></p></td>
                                <input type="text" placeholder="Street" onChange={getStreet} />
                                <br/>
                                <input type="text" placeholder="City" onChange={getCity} />
                                <br/>
                                <input type="text" placeholder="State" onChange={getState} />
                                <br/>
                                <input type="text" placeholder="Zip" onChange={getZip} />
                            </tr>

                            <tr>
                                <td><p><b>Enter Your Vehicle Registration Info</b></p></td>
                                <input type="text" placeholder="VIN" onChange={getVin} />
                                <br/>
                                <input type="text" placeholder="Expire Date" onChange={getExpDate} />
                                <br/>
                                <input type="text" placeholder="Make" onChange={getMake} />
                                <br/>
                                <input type="text" placeholder="Make Year" onChange={getMakeYear} />
                                <br/>
                                <input type="text" placeholder="Title Number" onChange={getTitle} />
                                <br/>
                            </tr>

                            <tr>
                                <td><p><b>Enter Your Driver License Info</b></p></td>
                                <input type="text" placeholder="Customer Identifier" onChange={getDlId} />
                                <br/>
                                <input type="text" placeholder="Expire Date" onChange={getDlExpDate} />
                            </tr>
                        </table>

                        <button onClick={async ()=>{
                            const accounts = await web3.eth.getAccounts();
                            await dmv.methods.regset(accounts[0],vin, expDate, make, makeYear, title).send({
                                    from: accounts[0]
                            })
                            await dmv.methods.dlset(accounts[0],dlId, name, DOB, dlExpDate).send({
                                    from: accounts[0]
                            })
                            await dmv.methods.addyset(accounts[0],street, city, state, zip).send({
                                from: accounts[0]
                            }).then(()=>{
                                navigate("/Profile");
                            })
                        }}>Confirm</button>
                        
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

export default UserInfo; 