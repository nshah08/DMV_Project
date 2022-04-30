import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'

function AddressUpdate(){
    const navigate = useNavigate();
    const [address, setAddress] = useState(null);
    function getAddress(val){
        setAddress(val.target.value)
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
                        <li/>
                        <span/>
						
                        <table>
                            <tr>
                                <td><p><b>New Address</b></p></td>
                                <input type="text" onChange={getAddress} />
                            </tr>

                        </table>

                        <button onClick={()=>navigate(-1)}>Cancel</button>
                        <span/>
                        <button onClick={()=>{
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

export default AddressUpdate; 