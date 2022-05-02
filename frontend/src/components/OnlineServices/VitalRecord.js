import React, {useState} from 'react';
import web3 from '../../web3';
import dmv from '../../dmv';
function VitalRecord(){
    const [record, setRecord] = useState('Birth');
    const [Birth, setBirth] = useState(false);
    const [Death, setDeath] = useState(false);
    const [Divorce, setDivorce] = useState(false);
    const [Marriage, setMarriage] = useState(false);
    const pay = '0.004280'
    const handleStatusChange = (event) => {
        setRecord(event.target.value);
        console.log(record)
    }
    const Dropdown = ({ label, value, options, onChange }) => {
        return (
          <label>
            {label}
            <select value={value} onChange={onChange}>
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </label>
        );
      };

    function visible(){
        if(record === 'Birth'){
            setBirth(!Birth)
            setDeath(false)
            setMarriage(false)
            setDivorce(false)
        }
        else if(record === 'Death'){
            setDeath(!Death)
            setBirth(false)
            setMarriage(false)
            setDivorce(false)
        }
        else if(record === 'Marriage'){
            setMarriage(!Marriage)
            setDeath(false)
            setBirth(false)
            setDivorce(false)
        }
        else if(record === 'Divorce'){
            setDivorce(!Divorce)
            setDeath(false)
            setMarriage(false)
            setBirth(false)
        }
    }
    return(
        <body class="homepage is-preload">
		<div id="page-wrapper">
				<section id="header">
                <img src={"./images/dmvLogo.png"} alt ="logo" height={150}></img>

				</section>

            <div class ="container">
                <article class ="box post">
                    <header>
                        <h2>Obtain a Vital Record</h2>
                        <span/>
                        
                        <table>
                        <tr>
                                <td><p><b>Birth, Death, Marriage, or Divorce Record?</b></p></td>
                                <Dropdown 
                                options={[
                                    {label: "Birth", value: 'Birth'},
                                    {label: "Death", value: 'Death'},
                                    {label: "Marriage", value: 'Marriage'},
                                    {label: "Divorce", value: 'Divorce'},
                                ]}
                                value={record}
                                onChange={handleStatusChange}
                                />
                            </tr>
                            <tr>
                                <td><p><b>Amount Need to Pay</b></p></td>
                                <td><p><b></b>0.004280 ETH</p></td>
                            </tr>
                            <tr>
                            <a href="/images/Birth.jpg" download="Birth.jpg" style={{display: Birth ? 'block' : 'none'}}> Birth </a>
                            <a href="/images/Death.jpg" download="Death.jpg" style={{display: Death ? 'block' : 'none'}}> Death </a>
                            <a href="/images/Marriage.jpg" download="Marriage.jpg" style={{display: Marriage ? 'block' : 'none'}}> Marraige </a>
                            <a href="/images/Divorce.jpg" download="Divorce.jpg" style={{display: Divorce ? 'block' : 'none'}}> Divorce </a>
                            </tr>
                        </table>

                        <button onClick={async()=>{
                            const accounts = await web3.eth.getAccounts();
                            await dmv.methods.recordpay().send({
                                from: accounts[0],
                                value: web3.utils.toWei(pay, 'ether'),
                            }).then(()=>{
                                visible();
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

export default VitalRecord; 