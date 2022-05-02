import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import dmv from '../../dmv';
import web3 from '../../web3';

function Profile(){
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
    async function set(){
        const accounts = await web3.eth.getAccounts();
        var result = await dmv.methods.getdl(accounts[0]).call();
        const {0:dlid, 1: nm, 2:birth, 3:expdate}= result;
        result = await dmv.methods.getreg(accounts[0]).call();
        const {0:vn, 1:xpDate, 2:mk, 3:mkyear, 4:tle} = result;
        result = await dmv.methods.getaddy(accounts[0]).call();
        const {0:st, 1: ct, 2:ste, 3: zp} = result;
        setName(nm);
        setDOB(converter(birth));
        setDlId(dlid);
        setDlExpDate(converter(expdate));
        setVin(vn);
        setExpDate(converter(xpDate));
        setMake(mk);
        setMakeYear(mkyear);
        setTitle(tle);
        setStreet(st);
        setCity(ct);
        setState(ste);
        setZip(zp);
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
    function visible(){
        if(name==='' && DOB==='12/31/1969'){
            return ('visible')
        }
        else if(vin==='' && expDate==='12/31/1969' && make==='' && makeYear==='0' && title===''){
            return('visible');
        }
        else{
            return('hidden')
        }
    }

    function converter(date){
        return (new Intl.DateTimeFormat('en-US').format(date))
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
                        <h2>Customer Information</h2>
                        <br/>
                        <br/>
                        
                        <table>
                            <tr>
                                <td><p><b>Name</b></p></td>
                                <td><p><b>{view(name)}</b></p></td>
                            </tr>

                            <tr>
                                <td><p><b>Date of Birth</b></p></td>
                                <td><p><b>{view(DOB)}</b></p></td>
                            </tr>

                        </table>

                        <h1>Adress</h1>
                        <br/>
                        <br/>
                        
                        <table>
                            <tr>
                                <td><p><b>Street</b></p></td>
                                <td><p><b>{view(street)}</b></p></td>
                            </tr>

                            <tr>
                                <td><p><b>City</b></p></td>
                                <td><p><b>{view(city)}</b></p></td>
                            </tr>
                            
                            <tr>
                                <td><p><b>State</b></p></td>
                                <td><p><b>{view(state)}</b></p></td>
                            </tr>

                            <tr>
                                <td><p><b>Zip Code</b></p></td>
                                <td><p><b>{view(zip)}</b></p></td>
                            </tr>
                        </table>

                        <h1>Vehicle Registration Information</h1>
                        <br/>
                        <br/>
                        
                        <table>
                            <tr>
                                <td><p><b>VIN</b></p></td>
                                <td><p><b>{view(vin)}</b></p></td>
                            </tr>

                            <tr>
                                <td><p><b>Expire Date</b></p></td>
                                <td><p><b>{view(expDate)}</b></p></td>
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
                                <td><p><b>Title Number</b></p></td>
                                <td><p><b>{view(title)}</b></p></td>
                            </tr>

                        </table>

                        <h1>Driver License Information</h1>
                        <br/>
                        <br/>

                        <table>
                            <tr>
                                <td><p><b>Customer Identifier</b></p></td>
                                <td><p><b>{view(dlId)}</b></p></td>
                            </tr>

                            <tr>
                                <td><p><b>Expire Date</b></p></td>
                                <td><p><b>{view(dlExpDate)}</b></p></td>
                            </tr>

                        </table>
                        <Link to="/" className="button">Back</Link> 
                        <span/>
                        <Link to="/UserInfo"><button style={{visibility: visible() }}>Edit</button></Link>  
                      
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

export default Profile; 