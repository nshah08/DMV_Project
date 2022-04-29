import React, {useState} from 'react';

function Pay(){
    const [vin, setVin] = useState(null);
    const [pay, setPay] = useState(null);
    function getVin(val){
        setVin(val.target.value)
    }
    function getPay(val){
        setPay(val.target.value)
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
                                <td><p><b>VIN</b></p></td>
                                <input type="text" onChange={getVin} />
                            </tr>

							<tr>
                                <td><p><b>Amount Need to Pay</b></p></td>
                                <input type="text" onChange={getPay} />
                            </tr>
                        </table>

                        <button onClick={()=>{
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

export default Pay; 