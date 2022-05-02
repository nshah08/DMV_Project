import React, {useState} from 'react';
import dmv from "../../dmv";
import web3 from "../../web3";
function Titling(){
    const [title, setTitle] = useState(null);
    const [make, setMake] = useState(null);
    const [makeYear, setMakeYear] = useState(null);
    const pay ='0.005306'
    function getMake(val){
        setMake(val.target.value)
    }
    function getMakeYear(val){
        setMakeYear(val.target.value)
    }

    function getTitle(val){
        setTitle(val.target.value)
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
                        <h2>Titling a Vehicle</h2>
                        <span/>
                        
                        <table>
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
                                <td><p><b></b>0.005306 ETH</p></td>
                            </tr>
                        </table>

                        <button onClick={async()=>{
                            const accounts = await web3.eth.getAccounts();
                            await dmv.methods.settitle(accounts[0], make, makeYear, title).send({
                                from: accounts[0],
                                value: web3.utils.toWei(pay, "ether")
                            }).then(()=>{
                                alert("New Title Created")
                            })
                        }}>Create</button>
                        
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

export default Titling; 