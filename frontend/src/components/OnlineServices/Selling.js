import React, {useState} from 'react';
import dmv from '../../dmv';
import web3 from '../../web3';
function Selling(){
    const [secondAddy, setSecondAddy] = useState(null);
    const [amount, setAmount] = useState(null);
    function getSecondAddy(val){
        setSecondAddy(val.target.value)
    }
    function getAmount(val){
        setAmount(val.target.value);
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
                        <h2>Selling a Vehicle</h2>
                        <span/>
                        
                        <table>
                            <tr>
                                <td><p><b>Enter Address of New Car Owner</b></p></td>
                                <input type="text" onChange={getSecondAddy} />
                            </tr>
                            <tr>
                                <td><p><b>Amount Payed</b></p></td>
                                <input type="text" onChange={getAmount} />
                            </tr>
                        </table>

                        <button onClick={async()=>{
                            const accounts = await web3.eth.getAccounts();
                            await dmv.methods.sell(accounts[0], secondAddy, amount).send({
                                from: accounts[0],
                            }).then(console.log)
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

export default Selling; 