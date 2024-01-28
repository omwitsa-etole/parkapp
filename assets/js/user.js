const dashboard = document.getElementById("page-content").innerHTML;
function extendTimer(){
	const min = 5
	const max = 99
	let html = `
		<span class="extend-header">Drag the Slider to Extend Parking Time</span>
		<div class="slidecontainer">
		  <input type="range" min="${min}" max="${max}" value="${min}" class="slider" id="myRange">
		</div>
		<span class="extend-time">Extended Time: <b id="demo"></b></span>
		<div class="extend-buttons" style="display:flex;align-items:right;text-align:right;width:99%;">
		<button id="extend-cancel" data-dismiss="modal">Cancel</button>
		<button id="extend-submit">Submit</button>
		</div>
	`
	const body =document.getElementById("extendTimer");
	const title = body.getElementsByClassName("modal-title")
	const el = body.getElementsByClassName("modal-body")
	title[0].innerHTML = "Extend Park Time"
	el[0].innerHTML = html
	el[0].setAttribute("style","max-height:456px;overflow:auto;")
	
	
	var slider = document.getElementById("myRange");
	var output = document.getElementById("demo");
 
	output.innerHTML = slider.value;
	slider.oninput = function() {
		
		const time = checkTime(this.value);
		console.log(time);
		output.innerHTML = time;
	}
	$("#extend-cancel").click(()=>{
		el.remove();
	});
	$("#extend-submit").click(()=>{
		//handle submit of extending timer
		el.remove();
	});
}

function checkTime(val){
  val = parseInt(val, 10);
  let v = val;
  for(let i =1;i<= v;i++){
	  if(v-i >= 60){
		  v = v-60;
	  }
  }
  
  return parseInt(val/60) + " : Hours :"+ (v) + " Minutes"
  
}

const Qrcode = (qrContent,id)=> {
  const width = 256;
  const height= 256;
  return new QRCode(id, {
	text: qrContent,
	width: width,
	height: height,
	colorDark: "#000000",
	colorLight: "#ffffff",
	correctLevel: QRCode.CorrectLevel.H,
  });
}
function bookingDetails(){
	
	let html = `
		<div style="width:100%;">
			<div style="width:100%;display:grid;place-items:center;">
					<div id="qrcode"></div>
			</div>
		</div>
	`
	const body =document.getElementById("bookingDetail");
	const title = body.getElementsByClassName("modal-title")
	const el = body.getElementsByClassName("modal-body")
	title[0].innerHTML = "Qr CODE"
	el[0].innerHTML = html
	el[0].setAttribute("style","max-height:456px;overflow:auto;")
	
	
	Qrcode("trialbyfire","qrcode");
}

function bookingHistory(){
	const body = document.getElementById("page-content");
	body.innerHTML = `
<div class="col-xl-8 col-lg-7" id="bookingHistory" style="position:relative;" >
	<div class="token-transaction card card-full-height" style="margin-left: 9%;overflow-x:auto;">
		<div class="card-innr">
			<div class="card-head has-aside">
				<h4 class="card-title">Transaction History</h4>
				<div class="card-opt">
					<a href="#transactions.html"  class="link ucap">
						<em class="fas fa-file ml-2" aria-hidden="true"></em>Export Report 
					</a>
				</div>
			</div>
			<table class="table tnx-table">
				<thead>
					<tr>
						<th>Booking Id</th>
						<th>Amount</th>
						<th>Status</th>
						<th>Payment</th>
						<th class="d-none d-sm-table-cell tnx-date">Date</th>
						<th class="tnx-type">
							<div class="tnx-type-text"></div>
						</th>
					</tr>
					<!-- tr -->
				</thead>
				<!-- thead -->
				<tbody>
					<tr>
						<td>
							<div class="d-flex align-items-center">
								<div class="data-state data-state-pending"></div>
								<span class="lead">18750</span>
							</div>
						</td>
						<td>
							<span>
								<span class="lead">3.543</span>
								<span class="sub"> KES </span>
							</span>
						</td>
						<td class="tnx-type">
							<span class="tnx-type-md badge badge-outline badge-success badge-md">Complete</span>
							<span class="tnx-type-sm badge badge-sq badge-outline badge-success badge-md">P</span>
						</td>
						<td class="tnx-type">
							<span class="tnx-type-md badge badge-outline badge-success badge-md">M-Pesa</span>
							<span class="tnx-type-sm badge badge-sq badge-outline badge-success badge-md">P</span>
						</td>
						<td class="d-none d-sm-table-cell tnx-date">
							<span class="sub sub-s2">2018-08-24 10:20 PM</span>
						</td>
						<td class="tnx-type">
							<button class="tnx-type-md badge badge-outline badge-error badge-md" onclick="bookingDetails()">Delete</button>
							<button class="tnx-type-sm badge badge-sq badge-outline badge-success badge-md" onclick="bookingDetails()">D</button>
						</td>
					</tr>
					<!-- tr -->
				   
					<!-- tr -->
				</tbody>
				<!-- tbody -->
			</table>
			<!-- .table -->
		</div>
	</div>
	<div class="token-transaction card card-full-height" style="margin-left: 9%;overflow-x:auto;">
		<div class="card-innr">
			<div class="card-head has-aside">
				<h4 class="card-title">Incomplete Transactions</h4>
				<div class="card-opt">
					<a href="#transactions.html"  class="link ucap">
						<em class="fas fa-file ml-2" aria-hidden="true"></em>Export Report 
					</a>
				</div>
			</div>
		</div>
	</div>
	
	<div class="card-full-height floatright">
		<div class="card-innr">
			<div class="card-head has-aside">
				<h4 class="card-title">Transactions analysis</h4>
				<div class="card-opt">
					<a href="javascript:void(0)" onclick="chartFunction()" class="link ucap">
						<em class="fas fa-file ml-2" aria-hidden="true"></em>Refresh
					</a>
				</div>
				<hr>
			</div>
			<div style="width:100%;height:95%;">
				<canvas id="myChart" style="width:100%;max-width:99%;height:345px;"></canvas>
			</div>
		</div>
	</div>
</div>
`;
	
chartFunction()
}

function userProfile(){
	const body = document.getElementById("page-content");
	body.innerHTML = `
<div class="page-content"><div class="container"><div class="row"><div class="main-content col-lg-8">
<div class="content-area card"><div class="card-innr"><div class="card-head">
<h4 class="card-title">Profile Details</h4></div><ul class="nav nav-tabs nav-tabs-line" role="tablist"><li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#personal-data">Personal Data</a></li><li class="nav-item"><a class="nav-link" data-toggle="tab" href="#settings">Settings</a></li><li class="nav-item"><a class="nav-link" data-toggle="tab" href="#password">Password</a></li></ul><!-- .nav-tabs-line --><div class="tab-content" id="profile-details"><div class="tab-pane fade show active" id="personal-data"><form action="#"><div class="row"><div class="col-md-6"><div class="input-item input-with-label"><label for="full-name" class="input-item-label">Full Name</label><input class="input-bordered" type="text" id="full-name" name="full-name" value="Stefan Harary"></div><!-- .input-item --></div><div class="col-md-6"><div class="input-item input-with-label"><label for="email-address" class="input-item-label">Email Address</label><input class="input-bordered" type="text" id="email-address" name="email-address" value="info@softnio.com" disabled=""></div><!-- .input-item --></div><div class="col-md-6"><div class="input-item input-with-label"><label for="mobile-number" class="input-item-label">Mobile Number</label><input class="input-bordered" type="text" id="mobile-number" name="mobile-number"></div><!-- .input-item --></div><div class="col-md-6"><div class="input-item input-with-label"><label for="date-of-birth" class="input-item-label">Date of Birth</label><input class="input-bordered date-picker-dob" type="text" id="date-of-birth" name="date-of-birth"></div><!-- .input-item --></div><!-- .col --><div class="col-md-6"><div class="input-item input-with-label"><label for="nationality" class="input-item-label">Nationality</label><select class="select-bordered select-block" name="nationality" id="nationality"><option value="us">United State</option><option value="uk">United KingDom</option><option value="fr">France</option><option value="ch">China</option><option value="cr">Czech Republic</option><option value="cb">Colombia</option></select></div><!-- .input-item --></div><!-- .col --></div><!-- .row --><div class="gaps-1x"></div><!-- 10px gap --><div class="d-sm-flex justify-content-between align-items-center"><button class="btn btn-primary">Update Profile</button><div class="gaps-2x d-sm-none"></div><span class="text-success">
	<em class="fa fa-check-box"></em> All Changes are saved</span></div></form><!-- form --></div><!-- .tab-pane --><div class="tab-pane fade" id="settings"><div class="pdb-1-5x"><h5 class="card-title card-title-sm text-dark">Security Settings</h5>    </div><div class="input-item"><input type="checkbox" class="input-switch input-switch-sm" id="save-log" checked=""><label for="save-log">Save my Activities Log</label></div><div class="input-item"><input type="checkbox" class="input-switch input-switch-sm" id="pass-change-confirm"><label for="pass-change-confirm">Confirm me through email before password change</label></div><div class="pdb-1-5x"><h5 class="card-title card-title-sm text-dark">Manage Notification</h5>    </div><div class="input-item"><input type="checkbox" class="input-switch input-switch-sm" id="latest-news" checked=""><label for="latest-news">Notify me by email about sales and latest news</label></div><div class="input-item"><input type="checkbox" class="input-switch input-switch-sm" id="activity-alert" checked=""><label for="activity-alert">Alert me by email for unusual activity.</label></div><div class="gaps-1x"></div><div class="d-flex justify-content-between align-items-center"><span></span>
	<span class="text-success"><em class="fa fa-check-box"></em> Setting has been updated</span></div></div><!-- .tab-pane --><div class="tab-pane fade" id="password"><div class="row"><div class="col-md-6"><div class="input-item input-with-label"><label for="old-pass" class="input-item-label">Old Password</label><input class="input-bordered" type="password" id="old-pass" name="old-pass"></div><!-- .input-item --></div><!-- .col --></div><!-- .row --><div class="row"><div class="col-md-6"><div class="input-item input-with-label"><label for="new-pass" class="input-item-label">New Password</label><input class="input-bordered" type="password" id="new-pass" name="new-pass"></div><!-- .input-item --></div><!-- .col --><div class="col-md-6"><div class="input-item input-with-label"><label for="confirm-pass" class="input-item-label">Confirm New Password</label><input class="input-bordered" type="password" id="confirm-pass" name="confirm-pass"></div><!-- .input-item --></div><!-- .col --></div><!-- .row --><div class="note note-plane note-info pdb-1x"><em class="fas fa-info-circle"></em><p>Password should be minmum 8 letter and include lower and uppercase letter.</p></div><div class="gaps-1x"></div><!-- 10px gap --><div class="d-sm-flex justify-content-between align-items-center"><button class="btn btn-primary">Update</button><div class="gaps-2x d-sm-none"></div>
	<span class="text-success"><em class="fa fa-check-box"></em>  Changed Password</span></div></div><!-- .tab-pane --></div><!-- .tab-content --></div><!-- .card-innr --></div><!-- .card --><div class="content-area card"><div class="card-innr"><div class="card-head"><h4 class="card-title">Two-Factor Verification</h4></div><p>Two-factor authentication is a method for protection your web account. When it is activated you need to enter not only your password, but also a special code. You can receive this code by in mobile app. Even if third person will find your password, then can't access with that code.</p><div class="d-sm-flex justify-content-between align-items-center pdt-1-5x"><span class="text-light ucap d-inline-flex align-items-center"><span class="mb-0"><small>Current Status:</small></span> <span class="badge badge-disabled ml-2">Disabled</span></span>
	<div class="gaps-2x d-sm-none"></div>
	<button class="order-sm-first btn btn-primary" onclick="enableFA()" data-toggle="modal" data-target="#enableFA">Enable 2FA</button>
	</div></div><!-- .card-innr --></div><!-- .card --></div><!-- .col --><div class="aside sidebar-right col-lg-4"><div class="account-info card"><div class="card-innr"><h6 class="card-title card-title-sm">Your Account Status</h6><ul class="btn-grp">
<li><a href="#" class="btn btn-auto btn-xs btn-success">Email Verified</a></li>
</ul><div class="gaps-2-5x"></div>
<h6 class="card-title card-title-sm">Default Wallet</h6><div class="d-flex justify-content-between"><span><span>0x39deb3.....e2ac64rd</span> 
<em class="fas fa-info-circle text-exlight" data-toggle="tooltip" data-placement="bottom" title="Payment id"></em></span>
	<a href="#" onclick="editWallet()" data-toggle="modal" data-target="#edit-wallet" class="link link-ucap">Edit</a>
</div></div></div><div class="referral-info card">
</div>

	<div class="kyc-info card">
		<div class="card-innr">
			<h6 class="card-title card-title-sm">Payment Details</h6>
			<div class="card-body p-3">
				<div class="row">
				<div class="col-md-6">
					
					<div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
					<img class="w-10 me-3 mb-0" src="assets/images/icons/visa.jpg" alt="logo" width="18" height="16">
					<h6 class="mb-0">****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;5248</h6>
					<i class="fas fa-pencil-alt ms-auto text-dark cursor-pointer" data-bs-toggle="tooltip" data-bs-placement="top" aria-hidden="true" aria-label="Edit Card" data-bs-original-title="Edit Card"></i><span class="sr-only">Edit Card</span>
					</div>
					
				</div>
				</div>
			</div>
			<p class="lead text-light pdb-0-5x">You do not have any payment methods linked to your profile.</p>
			<a href="#" class="btn btn-primary btn-block" onclick="newMethod()" data-toggle="modal" data-target="#newMethod">Add Method</a>
		</div>

	</div>
	
	<div class="kyc-info card">
		<div class="card-innr">
			<h6 class="card-title card-title-sm">Your Vehicles</h6>
			<p>To comply with regulation, participant will have to upload car logbook.</p>
			<p class="lead text-light pdb-0-5x">You do not have any vehicles linked to your profile.</p>
			<a href="#" class="btn btn-primary btn-block" onclick="newVehicle()" data-toggle="modal" data-target="#newVehicle" >Add Vehicle</a><h6 class="kyc-alert text-danger">* Vehicle required in order to book parking</h6>
		</div>

	</div>

</div><!-- .col --></div><!-- .container --></div><!-- .container --></div>
	`;
	
	
}
function userDashboard(){
	const body = document.getElementById("page-content");
	body.innerHTML = dashboard;
}

const Notifications = ()=>{
	let el = ``
	for(let i=1;i<8;i++){
		el+= `
			<div class="card">
				<div class="card-body d-flex justify-content-between align-items-center flex-wrap">
					<div class="">
						<h5 class="mb-1">Chat Notification</h5>
						<p class="mb-0">It is a long established fact that a reader will be distracted.</p>
					</div>
					<div class="d-flex mt-2 mt-md-0">
						
						<button type="button" class="btn btn-outline-primary" data-toggle="status" data-status="0">Delete</button>
					</div>  
				</div>
			</div>
		`
	}
	return el
}

function userActivity(){
	const body = document.getElementById("page-content");
	body.innerHTML = `
	<div style="width: 80%;background: white;margin: 1% auto;border-radius: 10px;">
		<h4>Notification (s)</h4>
		<hr/>
		<div class="list animate__animated animate__fadeIn">
                
            ${Notifications()}
                
            </div>
	</div>
	`;
}

const newModal = (id)=>{
	let el = `
		<div id=${id} class="modal fade" role="dialog">
		  <div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
			  <div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" style="position:absolute;right:2%;">&times;</button>
				<h4 class="modal-title">Modal Header</h4>
			  </div>
			  <div class="modal-body" >
				<p>Some text in the modal.</p>
			  </div>
			  <div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal" >Close</button>
			  </div>
			</div>

		  </div>
		</div>
	`
	return el
}

const locationBox =()=>{
	let el = ``
	for(let i =1;i<5;i++){
		el+= `
			<div class="well well-sm flexrow">
				<div class="row setrelative">
					<div class="block-rate">	
						<span class="">KES 355 <i>flat</i></span>
					</div>
					<div class="col-sm-6 col-md-4">
						<img src="http://placehold.it/380x500" alt="" class="img-rounded img-responsive" />
					</div>
					<div class="col-sm-6 col-md-8">
						<h4>
							Bhaumik Patel</h4>
						<small><cite title="San Francisco, USA">San Francisco, USA <i class="glyphicon glyphicon-map-marker">
						</i></cite></small>
						<p>
							<i class="glyphicon glyphicon-envelope"></i>email@example.com
							<br />
							<i class="glyphicon glyphicon-globe"></i><a href="profile.html?location=">www.jquery2dotnet.com</a>
							<br />
							<i class="glyphicon glyphicon-gift"></i>June 02, 1988</p>
						<!-- Split button -->
						<div class="btn-group">
							<button type="button" class="btn btn-primary" onclick="bookModal()" data-toggle="modal" data-target="#bookModal">Book</button>
							<button type="button" class="btn drop-toggle"  style="width:15px;" data-toggle="dropdown">
								<span class="caret"></span>
							</button>
							<ul class="dropdown-menu" role="menu">
								<li><a href="#">Follow</a></li>
								<li><a href="#">Rate</a></li>
								<li><a href="#">Link</a></li>
								<li class="divider"></li>
								<li><a href="#">Report</a></li>
							</ul>
							
						</div>
					</div>
				</div>
			</div>
		`
	}
	return el
}

function showResult(){
	let html = `
		<div class="container" style="width:100%;">
			<div class="row">
				<div class="col-xs-12 flexdisplay">
					${locationBox()}
				</div>
			</div>
		</div>
	`
	const body =document.getElementById("searchModal");
	const title = body.getElementsByClassName("modal-title")
	const el = body.getElementsByClassName("modal-body")
	title[0].innerHTML = "Available Results"
	el[0].innerHTML = html
	el[0].setAttribute("style","max-height:456px;overflow:auto;")
	
	return false;
}


const bookReceipt = ()=>{
	
	let el = `
		<div class="col-lg-8 col-xl-6" style="min-width: 99%;">
			<div class="card border-top border-bottom border-3" style="border-color: #f37a27 !important;">
			  <div class="card-body p-5">
				<p class="lead fw-bold mb-5" style="color: #f37a27;">Purchase Reciept</p>

				<div class="row">
				  <div class="col mb-3">
					<p class="small text-muted mb-1">Date</p>
					<p>10 April 2021</p>
					<p class="small text-muted mb-1">Period</p>
					<p> 4 Hours</p>
				  </div>
				  <div class="col mb-3">
					<p class="small text-muted mb-1">Slot ID.</p>
					<p>012j1gvs356c</p>
					<p class="small text-muted mb-1">Vehicle</p>
					<p>KCA DFGE</p>
				  </div>
				</div>

				<div class="mx-n5 px-5 py-4" style="background-color: #f2f2f2;">
				  <div class="row">
					<div class="col-md-8 col-lg-9">
					  <p>Rate</p>
					</div>
					<div class="col-md-4 col-lg-3">
					  <p>KES 25.99</p>
					</div>
				  </div>
				  <div class="row">
					<div class="col-md-8 col-lg-9">
					  <p class="mb-0">Period</p>
					</div>
					<div class="col-md-4 col-lg-3">
					  <p class="mb-0">Hours 4</p>
					</div>
				  </div>
				</div>

				<div class="row my-4">
				  <div class="col-md-4 offset-md-8 col-lg-3 offset-lg-9">
					<p class="lead fw-bold mb-0" style="color: #f37a27;">KES 111</p>
				  </div>
				</div>

				
				<div class="row">
					<div class="btn-group btns">
						<button type="button" class="btn receipt-btns" >Pay Later</button>
						<button type="button" class="btn receipt-btns" data-toggle="modal" data-target="#payModal" onclick="payBooking()"  style="background:#ff7474;" data-toggle="dropdown">Pay Now</button>
					</div>
				</div>

				<p class="mt-4 pt-2 mb-0">Want any help? <a href="#!" style="color: #f37a27;">Please contact
					us</a></p>

			  </div>
			</div>
		  </div>
	`
	return el
}

function bookModal(){
	
	let html = `
		<div class="container" style="width:100%;">
			<div class="row" style="width:100%;">
					${bookReceipt()}
			</div>
		</div>
	`
	const body =document.getElementById("bookModal");
	const title = body.getElementsByClassName("modal-title")
	const el = body.getElementsByClassName("modal-body")
	title[0].innerHTML = "Book Slot"
	el[0].innerHTML = html
	el[0].setAttribute("style","max-height:456px;overflow:auto;")
	
}

const payModal = ()=>{
	let el = `
		<div class="col-md-12 col-lg-10 col-xl-8" style="min-width:99%;">
        <div class="card">
          <div class="card-body p-md-5">
            <div>
              <h4>Pay for your parking</h4>
              <p class="text-muted pb-2">
                Please make the payment to ensure your booking as soon as possible
              </p>
            </div>

            <div class="px-3 py-4 border border-primary border-2 rounded mt-4 d-flex justify-content-between">
              <div class="d-flex flex-row align-items-center">
                <img src="assets/images/users/avatar-1.jpg" class="rounded" width="60" />
                <div class="d-flex flex-column ms-4">
                  <span class="h5 mb-1">Small Business</span>
                  <span class="small text-muted">CHANGE PLAN</span>
                </div>
              </div>
              <div class="d-flex flex-row align-items-center">
                <sup class="dollar font-weight-bold text-muted">KES</sup>
                <span class="h2 mx-1 mb-0">234</span>
                <span class="text-muted font-weight-bold mt-2">/ flat</span>
              </div>
            </div>

            <h4 class="mt-5">Payment details</h4>

            <div class="mt-4 d-flex justify-content-between align-items-center">
              <div class="d-flex flex-row align-items-center">
                <img src="https://i.imgur.com/qHX7vY1.webp" class="rounded" width="70" />
                <div class="d-flex flex-column ms-3">
                  <span class="h5 mb-1">Credit Card</span>
                  <span class="small text-muted">1234 XXXX XXXX 2570</span>
                </div>
              </div>
              <div>
                <input type="text" class="form-control" placeholder="CVC" style="width: 70px;" />
              </div>
            </div>

            <div class="mt-2 d-flex justify-content-between align-items-center">
              <div class="d-flex flex-row align-items-center">
                <img src="https://i.imgur.com/qHX7vY1.webp" class="rounded" width="70" />
                <div class="d-flex flex-column ms-3">
                  <span class="h5 mb-1">M-PESA</span>
                  <span class="small text-muted">2547 XXXX XXXX</span>
                </div>
              </div>
              <div>
                <input type="button" class="form-control" value="Edit" style="width: 70px;" />
              </div>
            </div>

           
            <div class="mt-3">
              <button class="btn btn-primary btn-block btn-lg">
                Pay <i class="fas fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
	`
	return el
}

function payBooking(){
	
	let html = `
		<div class="container" style="width:100%;">
			<div class="row" style="width:100%;">
					${payModal()}
			</div>
		</div>
	`
	const body =document.getElementById("payModal");
	const title = body.getElementsByClassName("modal-title")
	const el = body.getElementsByClassName("modal-body")
	title[0].innerHTML = "Payment"
	el[0].innerHTML = html
	el[0].setAttribute("style","max-height:456px;overflow:auto;")
}

function bookSpot(){
	const spots = () => {
		let res = ""
		for(let i=0;i<=10;i++){
			res += `
			<div class="bookingspace" id="${i}">
				<div class="book-buttons"><button>Book Now</button></div>
			</div>`;
		}
		return res;
	}
	const body = document.getElementById("page-content");
	body.innerHTML = `
		<div style="margin: 1% auto;width: 100%;position:relative;">
			<a style="position: absolute;bottom: 102%;left: 10%;cursor:pointer;color:green;font-weight: 19px;" href="#dashboard">Go Back</a>
			
		</div>
	<div style="width: 95%;background: #ddd;margin: 1% auto;border-radius: 10px;position:relative;display:flex;flex-direction:row;">
		<div class="search-booking">
			
			<form class="form" onsubmit="showResult()">
				<label for="location" class="dropdown" style="width:99%;">
					<input type="button" data-toggle="dropdown" name="location" value="Parking Location">
					<div class="dropdown-menu" style="width:99%;">
					  <input class="form-control searchlocation" id="location" type="text" placeholder="Search..">
					  <p><a href="#">HTML</a></p>
					  <p><a href="#">CSS</a></p>
					  
					</div>
				</label>
				<label for="Vehicle" class="dropdown" style="width:99%;">
					<input type="button" data-toggle="dropdown" id="vehiclevalue" name="vehicle" value="Vehicle Select">
					<div class="dropdown-menu" style="width:99%;">
					  <input class="form-control searchlocation" id="vehicle" type="text" placeholder="Search..">
					  <p><a href="#">KCA 512D</a></p>
					  <p><a href="#">KCS 342S</a></p>
					  
					</div>
					
				</label>
				<label for="dates">
					<input type="date"  id="dates" name="date" placeholder="Parking Date">
								
				</label>
				<label for="time">
					<input type="number" id="time" name="time" placeholder="Parking Time Hour">
					
				</label>
				<label for="dates">
					<button type="button" class="submit-btn" onclick="showResult()" data-toggle="modal" data-target="#searchModal">
						Submit
					</button>
				</label>
			</form>
		</div>
		<div class="search-map" id="search-map">
		<div id="map"></div>
		</div>
	</div>
	`;
	
	body.innerHTML +=newModal("searchModal")
	body.innerHTML +=newModal("bookModal")
	document.body.innerHTML += newModal('payModal')
	const position = { lat: -1.315926, lng: 36.8255 }
	const zoom = 12
	
	let map;
	async function initMap() {
	 
	  // Request needed libraries.
	  //@ts-ignore
	  const { Map } = await google.maps.importLibrary("maps") ;
	  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") ;

	  // The map, centered at location
	  map = new Map(
		document.getElementById('map'),
		{
		  zoom: zoom,
		  center: position,
		  mapId: '4504f8b37365c3d0',
		}
	  );
	  
	  
	
	  const parkTag = document.createElement('div');
		parkTag.className = 'price-tag';
		parkTag.innerHTML = `
			<div class="btn-group dropup">
			  <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				<i class="fa-solid fa-square-parking"></i>
			  </a>
			  <div class="dropdown-menu">
				<a class="dropdown-item" href="#">Action</a>
				<a class="dropdown-item" href="#">Something else here</a>
			  </div>
			</div>
		`;
	  // The marker, positioned at Uluru
	  /*
	  const marker = new AdvancedMarkerElement({
		map: map,
		position: position,
		content: parkTag,
		title: 'Nairobi'
	  });
	  */
	  var myParser = new geoXML3.parser({map: map});
	  myParser.parse('data.xml');
	  const kmlLayer = new google.maps.KmlLayer({
		url: "data.xml",
		suppressInfoWindows: true,
		map: map,
	  });
	  var transitLayer = new google.maps.TransitLayer();
		transitLayer.setMap(map);
	  
	}

	initMap();
	document.getElementById("search-map").classList.add("show-full");
	
	$("#location").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		$(".dropdown-menu li").filter(function() {
		  $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	  });
	
}


function hashChange(){
	
	let hash =  window.location.hash;
	hash = hash.replace("#","");
	if(hash.includes("transactions")){
		bookingHistory();
	}else if(hash.includes("profile")){
		userProfile();
	}else if(hash.includes("activity")){
		userActivity();
	}else if(hash.includes("dashboard")){
		userDashboard();
	}else if(hash.includes("book")){
		bookSpot();
	}else{
		userDashboard();
	}
}
window.addEventListener("hashchange",(e)=>{
	hashChange()
})
hashChange()

$(document).ready(function(){
	document.body.innerHTML += newModal("bookingDetail")
	document.body.innerHTML += newModal("extendTimer")
	document.body.innerHTML += newModal("newMethod")
	document.body.innerHTML += newModal("newVehicle")
	document.body.innerHTML += newModal("enableFA")
	document.body.innerHTML += newModal("edit-wallet")
})

function searchResults(){
	
}
function editWallet(){
	let html = `
		<div style="width:100%;">
			<div style="width:100%;display:grid;place-items:center;">
			<form class="pb-3" style="width:100%;">
				<div class="d-flex flex-row pb-3" onclick="this.children[0].children[0].click()">
				  <div class="d-flex align-items-center pe-2">
					<input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1"
					  value="" aria-label="..." checked />
				  </div>
				  <div class="rounded border d-flex w-100 p-3 align-items-center">
					<p class="mb-0">
					  <i class="fab fa-cc-visa fa-lg text-primary pe-2"></i>Visa Debit
					  Card
					</p>
					<div class="ms-auto">************3456</div>
				  </div>
				</div>

				<div class="d-flex flex-row" onclick="this.children[0].children[0].click()">
				  <div class="d-flex align-items-center pe-2">
					<input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel2"
					  value="" aria-label="..." />
				  </div>
				  <div class="rounded border d-flex w-100 p-3 align-items-center">
					<p class="mb-0">
					  <i class="fab fa-cc-mastercard fa-lg text-dark pe-2"></i>Mastercard
					  Office
					</p>
					<div class="ms-auto">************1038</div>
				  </div>
				</div>
			  </form>
			  <input type="button" value="Set to Default" class="btn btn-primary btn-block btn-lg" />
           </div>
		</div>   
	`
	const body =document.getElementById("edit-wallet");
	const title = body.getElementsByClassName("modal-title")
	const el = body.getElementsByClassName("modal-body")
	title[0].innerHTML = "Edit Default Wallet "
	el[0].innerHTML = html
	el[0].setAttribute("style","max-height:456px;overflow:auto;")
}