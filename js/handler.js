function newEntry(){
	const body = document.getElementById("root")
	body.innerHTML = `
		<Modal is-open={modalIsOpen} onRequestClose={closeModal}  content-label="Example Modal">
          <div class="modal-container">
            <div class="modal-title">
              Manual Entry
              <i onclick="userDashboard()" class="fa fa-window-close red-close-icon" aria-hidden="true"></i>
            </div>
            <div class="modal-content">
              <form onSubmit={paySubscription}>
                <div class="user-details">
                  <div class="input-box">
                    <span class="details">Booking Id</span>
                    <input type="text" placeholder="Enter paying phone number" value=1234 onChange={handlePhoneChange} />
                  </div>
                </div>
                
                 <div class="user-details">
                  <div class="input-box">
                    <span class="details">Time In</span>
                    <select class='selecttxt' type="tel" value={selectedItem} onChange={handleSelectionChange}>
                      <option key={index} value={pk.Description} id={pk.Code}></option>                      
                    </select>
					<span class="details">Time Out</span>
					<select class='selecttxt' type="tel" value={selectedItem}>                        
                    <option value={selectedItem}></option>                    
                  </select>
                   
                  </div>
                </div>
                <div class="user-details">
                  <div class="input-box">
                    <span class="details">Vehicle Registartion</span>
                    <input type='text' value="KCD 512B" onChange={handlePkgChange} />
                  </div>
                </div>
                
               
                <div class="button">
                  <input type="submit" value={loading ? 'Submitting...' : 'Submit'} disabled={loading || !isInputValid} />
                </div>
              </form>
            </div>
          </div>

        </Modal>
	`;
}

function changePassword(){
	const body = document.getElementById("root")
	body.innerHTML = `
		<Modal is-open={modal2IsOpen} onRequestClose={closeModal2}  content-label="Example Modal" // id='change_WIFIPass'
  >
          <div class="modal-container">
            <div class="modal-title">
            Change WIFI password
              <i onclick="userDashboard()" class="fa fa-window-close red-close-icon" aria-hidden="true"></i>
            </div>
            <div class="modal-content">
              <form onSubmit={changeWifiPass}>

                <div class="user-details">
                  <div class="input-box">
                    <span class="details">Current Password</span>
                    <input type="text" read-only value="wifipassword" />
                  </div>
                  <div class='passvalidator'>{offlineMsg}</div>
                </div>
                <div class="user-details">
                  <div class="input-box">
                    <span class="details">Enter New  Password</span>
                    <input type="text" placeholder="Enter NewPassword" required onKeyDown={handlekeydown} onKeyUp={handleFocus} onChange={handleChange} id='newpass' />
                  </div>
                  <div class='passvalidator'>{validatorMsg}</div>

                </div>
                <div class="user-details">
                  <div class="input-box">
                    <span class="details">Confirm Password</span>
                    <input type="text" placeholder="Confirm Password" required onKeyDown={handlekeydown} onChange={handleChange} id='confirm_pass' />
                  </div>
                  <div class='passvalidator'>{errorMessage}</div>  
                </div>                     
               
                <div class="button">
                  <input type="submit" value={loading ? 'Submitting...' : 'Submit'} disabled={loading} />
                </div>
              </form>
            </div>
          </div>

        </Modal>
	`;
}

function userDashboard(){
	document.getElementById("actionbtns").style.display = "block"
	const body = document.getElementById("root")
	body.innerHTML = `
		<div class="home-content">
        <img src={avatar} alt='' />
        <div class="text-wrapper-2">Welcome, : "Handler"</div> 
        <div class='usercardData'>
            <span class='homeHeadings'>Account No:</span> {logeduserData ? logeduserData.Customer_no : ""}
            <br />
            <span class='homeHeadings'>Email:</span> {details ? details?.email_address : ""}
            <br />
            <span class='homeHeadings'>Phone:</span> {logeduserData ? logeduserData.phone : ""}
            <br />
            <span class='homeHeadings'>Current Packages:</span> {details ? details?.package_code.split('-')[1] : ""}
            <br />
            <span class='homeHeadings'>Renewal date:</span> {formattedDate}
            <br />
        </div>
       
        <div class='actionbtns'>
            <button class='userActions' id='change_Pass' onclick="changePassword()"> Change<br /> yout Password</button>
            <button class='userActions' onclick="newEntry()">Make <br /> Entry</button>
        </div> 

        <div class='actionbtns'> 
            <button class='userActions' onclick="handleInvoicesClick()"> Download <br />invoice</button>
            <button class='userActions' onclick="handleReceiptsClick()"> Download <br />Receipts</button>
        </div>
                              
                
        <div class="support-call">
            Support:
            <br />
            Call/Whatsapp: 12345678
            <br />
            Email: info@Wepark.co
        </div>
        <div class="copyright">Copyright © {currentYear}-Wepark</div>
        </div>
	`
	
}

function loginDashboard(){
	document.getElementById("actionbtns").style.display = "none"
	const body = document.getElementById("root")
	body.innerHTML = `
		<div style="width:100%;height:100%;display:flex;align-items:center;">
		<div class="row auth-container">
		<div class="col-6 login-content"><div class="logForm rectangle"><form><img src="/static/media/Mawingubluelogo.d37244fd9b14e70aed20.png" alt=""><div class="text-wrapper-2">Karibu To Self-Care Portal</div><div class="log-in">Log In</div><label for="cust_no" class="input-label">Enter Customer Number:</label><input type="text" class="form-control formInfor" placeholder="Customer Number" id="cust_no" required=""><label for="password" class="input-label">Enter Pin:</label><div class="passiniput"><input type="password" pattern="^[0-9]{4}$" maxlength="4" class="form-control formInfor" placeholder="Pin" id="password" required=""><span class="flex justify-around items-center"><i class="showpassicon" fill="currentColor" style="display: inline-block;"><svg fill="none" height="20" width="20" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle;"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg></i></span></div><div class="forgot-password"><div class="overlap-group"><input type="checkbox" class="checkbox-instance" checked=""><div class="remember-me"><div class="div">Remember Me</div></div></div><div class=" forgotpass">Forgot Password?</div></div>
		<input type="button" onclick="loginFunction()"class="Auth-btn" value="Log In"></form>
		<div class="support-call">Support:<br>Call/Whatsapp: 12345678<br>Email: info@Wepark.co</div><div class="copyright">Copyright © 2024-Wepark</div></div></div>
		<div class="col-6 Loginpageimg"><img src="assets/images/users/avatar-1.jpg" alt=""></div>
		</div>
		</div>
	`
}

function loginFunction(){
	
	userDashboard()
	return false
} 
	
function handleReceiptsClick(){
	document.getElementById("actionbtns").style.display = "none"
	const body = document.getElementById("root")
	body.innerHTML = `
		<div class="overlap-group1"><div>
		<button onclick="userDashboard()" class="back-button">&lt;&lt; Back</button></div>
		<img src="logo" alt="logo"><div class="div23">
			<div class="text1-wrapper">Payment Receipts</div>
			<div class="wraprshead">
				<div class="text1-wrapper-3">RECEIPT NUMBER</div>
				<div class="text1-wrapper-3">DATE</div>
				<div class="text1-wrapper-3">DESCRIPTION</div>
				<div class="text1-wrapper-3">AMOUNT</div>
				<div class="text1-wrapper-3">ACTION</div>
			</div>
			<div class="wraprs">
				<div class="list-item">RCT254404</div>
				<div class="list-item">01/18/24</div>
				<div class="list-item">KCD 512G</div>
				<div class="list-item">5,500</div>
				<div class="list-item"><a class="btn btn-sm btn-info">view</a></div>
				</div></div>
		<div class="copyright">Copyright © 2024-Wepark</div></div>
	`;
	
}

function handleInvoicesClick(){
	document.getElementById("actionbtns").style.display = "none"
	const body = document.getElementById("root")
	body.innerHTML = `
		<div class="overlap-group1">
		  <div class="actionbtns">
			<button onclick="userDashboard()" class="back-button">
			  &lt;&lt; Back
			</button>
		  </div>
		  <img src={avatar} alt='' />
		  <div class="div23">
		  <div class="text1-wrapper">Invoices</div>    
		  <div class="wraprshead">
			
			<div class="text1-wrapper-3">INVOICE NUMBER</div>
			<div class="text1-wrapper-3">DATE</div>
			<div class="text1-wrapper-3">AMOUNT</div>
			<div class="text1-wrapper-3">ACTION</div>
		  </div>
		  
		  <div class="wraprs">
			<div class="list-item">{inv_number}</div>
			<div class="list-item">{inv_date}</div>
			<div class="list-item">{inv_amount}</div>
			<div class="list-item "><a onclick="getInvoicePDF(invoice.inv_number)" class="btn btn-sm btn-info">view</a></div>
			
		  </div>;
		
		  </div>
		  <div class="copyright">Copyright © {currentYear}-Wepark</div>
		</div>
	`;
	
}

loginDashboard()