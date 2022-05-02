import React, {useState} from 'react';
import web3 from '../../web3';
import dmv from '../../dmv';
function RealId(){
    const [dlId, setDlId] = useState(null);
    const [ssn, setSSN] = useState(null);
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const pay = '0.003527'

    function getDlId(val){
        setDlId(val.target.value)
    }
    function getSSN(val){
        setSSN(val.target.value)
    }
    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};
    return(
        <body class="homepage is-preload">
		<div id="page-wrapper">
				<section id="header">
                <img src={"./images/dmvLogo.png"} alt ="logo" height={150}></img>

				</section>

            <div class ="container">
                <article class ="box post">
                    <header>
                        <h2>Real ID Application</h2>
                        <span/>

                        <table>
                            <tr>
                                <td><p><b>Driver License Number</b></p></td>
                                <input type="text" onChange={getDlId} />
                            </tr>
                            <tr>
                                <td><p><b>Social Security Number</b></p></td>
                                <input type="text" onChange={getSSN} />
                            </tr>
                            <tr>
                                <td><p><b>Attach a U.S. Passport or U.S. Birth Certificate</b></p></td>
                                <input type="file" name='file' onChange={changeHandler} />
                            </tr>
                            <tr>
                                <td><p><b>Amount Need to Pay</b></p></td>
                                <td><p><b></b>0.003527 ETH</p></td>
                            </tr>
                        </table>

                        <button onClick={async ()=>{
                            const accounts = await web3.eth.getAccounts();
                            await dmv.methods.setrealid(accounts[0], dlId, ssn).send({
                                from: accounts[0],
                                value: web3.utils.toWei(pay, 'ether'),
                            }).then(()=>{
                                alert("Application Sumbitted");
                            })
                        }}>Apply</button>
                        
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

export default RealId; 