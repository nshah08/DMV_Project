import React, {useState} from 'react';
import web3 from '../../web3';
import dmv from '../../dmv';
function PracticeExam(){
    const [visible, setVisible] = useState(false);
    const pay = '0.035760';

    return(
        <body class="homepage is-preload">
		<div id="page-wrapper">
				<section id="header">
                <img src={"./images/dmvLogo.png"} alt ="logo" height={150}></img>

				</section>

            <div class ="container">
                <article class ="box post">
                    <header>
                        <h2>Obtain a Practice Exam</h2>
                        <span/>
                        
                        <table>
                        <tr>
                                <td><p><b>Amount Need to Pay</b></p></td>
                                <td><p><b></b>0.035760 ETH</p></td>
                            </tr>
                        <tr>
                        <a href="/PracticeExam.pdf" download="PracticeExam.pdf" style={{display: visible ? 'block' : 'none'}}> Practice Exam </a>
                        </tr>
                        </table>

                        <button onClick={async()=>{
                            const accounts = await web3.eth.getAccounts();
                            await dmv.methods.pracexampay().send({
                                from: accounts[0],
                                value: web3.utils.toWei(pay, 'ether'),
                            }).then(()=>{
                                setVisible(true);
                            })
                        }}>Obtain</button>
                        
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

export default PracticeExam; 