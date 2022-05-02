import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import dmv from "../../dmv";
import web3 from "../../web3";
function VehicleRegistration(){

    const [vin, setVin] = useState(null);
    const [date, setDate] = useState(null);
    const [make, setMake] = useState(null);
    const [makeYear, setMakeYear] = useState(null);
    const [title, setTitle] = useState(null);
    
    async function set(){
        const accounts = await web3.eth.getAccounts();
        const result= await dmv.methods.getreg(accounts[0]).call()
        const {0: vn, 1: dt, 2: mk, 3: mky, 4: tle} = result;
        setVin(vn)
        setDate(converter(dt))
        setMake(mk)
        setMakeYear(mky)
        setTitle(tle)
    }
    function converter(date){
        return (new Intl.DateTimeFormat('en-US').format(date))
    }
    function view(variable){
        if(variable===""){
            return("")
        }
        else if(variable==='12/31/1969'){
            return(null)
        }
        else if(variable==='0'){
            return(null)
        }
        else{
            return(variable)
        }
    }
    set();
    return(
        <body class="homepage is-preload">
		<div id="page-wrapper">
				<section id="header">
                <img src={"./images/dmvLogo.png"} alt ="logo" height={150}></img>

				</section>

            <div class ="container">
                <article class ="box post">
                    <header>
                        <h2>Vehicle Registration Information</h2>
                        <span/>

                        <table>
                            <tr>
                                <td><p><b>VIN</b></p></td>
                                <td><p><b>{view(vin)}</b></p></td>
                            </tr>

                            <tr>
                                <td><p><b>Expire Date</b></p></td>
                                <td><p><b>{view(date)}</b></p></td>
                            </tr>

                            <tr>
                                <td><p><b>Make</b></p></td>
                                <td><p><b>{view(make)}</b></p></td>
                            </tr>

                            <tr>
                                <td><p><b>Make Year</b></p></td>
                                <td><p><b>{view(makeYear)}</b></p></td>
                            </tr>

                            <tr>
                                <td><p><b>Title</b></p></td>
                                <td><p><b>{view(title)}</b></p></td>
                            </tr>
                        </table>

                        <Link to="/VehicleUpdate" className="button">Renew</Link>
                        
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
