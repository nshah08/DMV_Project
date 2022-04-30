import React, {useState} from 'react';
// import dmv from "./dmv";
// import web3 from "./web3";
function UserInfo(){
    const [name, setName] = useState(null);
    const [DOB, setDOB] = useState(null);
    const [address, setAddress] = useState(null);
    // async function  test(){
    //     const balance = await web3.eth.getBalance(dmv.options.address)
    // }
    function getName(val){
        setName(val.target.value)
    }

    function getDOB(val){
        setDOB(val.target.value)
    }

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
                                <td><p><b>Enter Your Name</b></p></td>
                                <input type="text" onChange={getName} />
                            </tr>

                            <tr>
                                <td><p><b>Enter Your Date of Birth</b></p></td>
                                <input type="text" onChange={getDOB} />
                            </tr>

							<tr>
                                <td><p><b>Enter Your Address</b></p></td>
                                <input type="text" onChange={getAddress} />
                            </tr>
                        </table>

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

export default UserInfo; 