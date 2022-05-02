import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import dmv from '../../dmv';
import web3 from '../../web3';

function AddressUpdate(){
    const navigate = useNavigate();
    const [street, setStreet] = useState(null);
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [zip, setZip] = useState(null);
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
                        <span/>
						
                        <table>
                        <tr>
                                <td><p><b>Enter Your New Address</b></p></td>
                                <input type="text" placeholder="Street" onChange={getStreet} />
                                <br/>
                                <input type="text" placeholder="City" onChange={getCity} />
                                <br/>
                                <input type="text" placeholder="State" onChange={getState} />
                                <br/>
                                <input type="text" placeholder="Zip" onChange={getZip} />
                        </tr>

                        </table>

                        <button onClick={()=>navigate(-1)}>Cancel</button>
                        <span/>
                        <button onClick={async ()=>{
                            const accounts = await web3.eth.getAccounts();
                            await dmv.methods.addyset(accounts[0],street, city, state, zip).send({
                                from: accounts[0]
                            }).then(() => {
                                navigate('/AddressInfo');
                            })

                        }}>Update</button>
                        
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

export default AddressUpdate; 