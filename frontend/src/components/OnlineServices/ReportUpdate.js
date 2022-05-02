import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import dmv from '../../dmv';
import web3 from '../../web3';
function ReportUpdate(){
    const navigate = useNavigate();
    const [status, setStatus] = useState(null);
    const [secondAddy, setSecondAddy] = useState(null);
    const handleStatusChange = (event) => {
        setStatus(event.target.value);
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
      function getSecondAddy(val){
        setSecondAddy(val.target.value)
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
                        <h2>Report a Vehicle Sold</h2>
                        <span/>
						
                        <table>
                            <tr>
                                <td><p><b>Sold or Traded?</b></p></td>
                                <Dropdown 
                                options={[
                                    {label: "Sold", value: 'Sold'},
                                    {label: "Traded", value: 'Traded'}
                                ]}
                                value={status}
                                onChange={handleStatusChange}
                                />
                            </tr>
                            <tr>
                                <td><p><b>Enter Address of New Car Owner</b></p></td>
                                <input type="text" onChange={getSecondAddy} />
                            </tr>

                        </table>
                        
                        <button onClick={()=>navigate(-1)}>Cancel</button>
                        <span/>
                        <button onClick={async()=>{
                            const accounts = await web3.eth.getAccounts();
                            await dmv.methods.report(accounts[0], secondAddy).send({
                                from: accounts[0]
                            })
                        }}>Report</button>
                        
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

export default ReportUpdate; 