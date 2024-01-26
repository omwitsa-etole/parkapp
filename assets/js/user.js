const dashboard = document.getElementById("page-content").innerHTML;
function extendTimer(){
	const el = document.createElement("div");
	el.classList.add("normal");
	el.classList.add("normal-active");
	const min = 1;
	const max = 320;
	el.innerHTML = 	`
	<span class="extend-header">Drag the Slider to Extend Parking Time</span>
<div class="slidecontainer">
  <input type="range" min="${min}" max="${max}" value="1" class="slider" id="myRange">
</div>
<span class="extend-time">Extended Time: <b id="demo"></b></span>
<div class="extend-buttons">
<button id="extend-cancel">Cancel</button>
<button id="extend-submit">Submit</button>
</div>
	`;
	document.body.appendChild(el);
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

function bookingDetails(){
	const width = 256;
	const height= 256;
	const content = "trialbyfire"
	const el = document.createElement("div");
	el.classList.add("normal");
	el.classList.add("normal-active");
	el.setAttribute("style","background-image:linear-gradient(45deg, #1c65c9 0%, #FF7474 100%);color:#fff;")
	el.innerHTML = `
	<a href="javascript:void(0)" style="position:absolute;cursor:pointer;left: 10%;top: 4%;color:red;" onclick="this.parentElement.remove()"><i class="fa fa-times"></i></a>
	<main>
        <div id="qrcode"></div>
    </main>
	
	`;
	document.body.appendChild(el)
	const Qrcode = (qrContent)=> {
	  return new QRCode("qrcode", {
		text: qrContent,
		width: width,
		height: height,
		colorDark: "#000000",
		colorLight: "#ffffff",
		correctLevel: QRCode.CorrectLevel.H,
	  });
	}
	Qrcode("trialbyfire");
}

function bookingHistory(){
	const body = document.getElementById("page-content");
	body.innerHTML = `
<div class="col-xl-8 col-lg-7" id="bookingHistory" style="margin: 1% auto;">
	<div class="token-transaction card card-full-height">
		<div class="card-innr">
			<div class="card-head has-aside">
				<h4 class="card-title">Transaction History</h4>
				<div class="card-opt">
					<a href="#transactions.html" onclick="bookingHistory()" class="link ucap">
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
</div>
`;
	
	
}

function userProfile(){
	const body = document.getElementById("page-content");
	body.innerHTML = `
<div class="page-content"><div class="container"><div class="row"><div class="main-content col-lg-8">
<div class="content-area card"><div class="card-innr"><div class="card-head">
<h4 class="card-title">Profile Details</h4></div><ul class="nav nav-tabs nav-tabs-line" role="tablist"><li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#personal-data">Personal Data</a></li><li class="nav-item"><a class="nav-link" data-toggle="tab" href="#settings">Settings</a></li><li class="nav-item"><a class="nav-link" data-toggle="tab" href="#password">Password</a></li></ul><!-- .nav-tabs-line --><div class="tab-content" id="profile-details"><div class="tab-pane fade show active" id="personal-data"><form action="#"><div class="row"><div class="col-md-6"><div class="input-item input-with-label"><label for="full-name" class="input-item-label">Full Name</label><input class="input-bordered" type="text" id="full-name" name="full-name" value="Stefan Harary"></div><!-- .input-item --></div><div class="col-md-6"><div class="input-item input-with-label"><label for="email-address" class="input-item-label">Email Address</label><input class="input-bordered" type="text" id="email-address" name="email-address" value="info@softnio.com" disabled=""></div><!-- .input-item --></div><div class="col-md-6"><div class="input-item input-with-label"><label for="mobile-number" class="input-item-label">Mobile Number</label><input class="input-bordered" type="text" id="mobile-number" name="mobile-number"></div><!-- .input-item --></div><div class="col-md-6"><div class="input-item input-with-label"><label for="date-of-birth" class="input-item-label">Date of Birth</label><input class="input-bordered date-picker-dob" type="text" id="date-of-birth" name="date-of-birth"></div><!-- .input-item --></div><!-- .col --><div class="col-md-6"><div class="input-item input-with-label"><label for="nationality" class="input-item-label">Nationality</label><select class="select-bordered select-block" name="nationality" id="nationality"><option value="us">United State</option><option value="uk">United KingDom</option><option value="fr">France</option><option value="ch">China</option><option value="cr">Czech Republic</option><option value="cb">Colombia</option></select></div><!-- .input-item --></div><!-- .col --></div><!-- .row --><div class="gaps-1x"></div><!-- 10px gap --><div class="d-sm-flex justify-content-between align-items-center"><button class="btn btn-primary">Update Profile</button><div class="gaps-2x d-sm-none"></div><span class="text-success">
	<em class="fa fa-check-box"></em> All Changes are saved</span></div></form><!-- form --></div><!-- .tab-pane --><div class="tab-pane fade" id="settings"><div class="pdb-1-5x"><h5 class="card-title card-title-sm text-dark">Security Settings</h5>    </div><div class="input-item"><input type="checkbox" class="input-switch input-switch-sm" id="save-log" checked=""><label for="save-log">Save my Activities Log</label></div><div class="input-item"><input type="checkbox" class="input-switch input-switch-sm" id="pass-change-confirm"><label for="pass-change-confirm">Confirm me through email before password change</label></div><div class="pdb-1-5x"><h5 class="card-title card-title-sm text-dark">Manage Notification</h5>    </div><div class="input-item"><input type="checkbox" class="input-switch input-switch-sm" id="latest-news" checked=""><label for="latest-news">Notify me by email about sales and latest news</label></div><div class="input-item"><input type="checkbox" class="input-switch input-switch-sm" id="activity-alert" checked=""><label for="activity-alert">Alert me by email for unusual activity.</label></div><div class="gaps-1x"></div><div class="d-flex justify-content-between align-items-center"><span></span><span class="text-success"><em class="ti ti-check-box"></em> Setting has been updated</span></div></div><!-- .tab-pane --><div class="tab-pane fade" id="password"><div class="row"><div class="col-md-6"><div class="input-item input-with-label"><label for="old-pass" class="input-item-label">Old Password</label><input class="input-bordered" type="password" id="old-pass" name="old-pass"></div><!-- .input-item --></div><!-- .col --></div><!-- .row --><div class="row"><div class="col-md-6"><div class="input-item input-with-label"><label for="new-pass" class="input-item-label">New Password</label><input class="input-bordered" type="password" id="new-pass" name="new-pass"></div><!-- .input-item --></div><!-- .col --><div class="col-md-6"><div class="input-item input-with-label"><label for="confirm-pass" class="input-item-label">Confirm New Password</label><input class="input-bordered" type="password" id="confirm-pass" name="confirm-pass"></div><!-- .input-item --></div><!-- .col --></div><!-- .row --><div class="note note-plane note-info pdb-1x"><em class="fas fa-info-circle"></em><p>Password should be minmum 8 letter and include lower and uppercase letter.</p></div><div class="gaps-1x"></div><!-- 10px gap --><div class="d-sm-flex justify-content-between align-items-center"><button class="btn btn-primary">Update</button><div class="gaps-2x d-sm-none"></div><span class="text-success"><em class="ti ti-check-box"></em>  Changed Password</span></div></div><!-- .tab-pane --></div><!-- .tab-content --></div><!-- .card-innr --></div><!-- .card --><div class="content-area card"><div class="card-innr"><div class="card-head"><h4 class="card-title">Two-Factor Verification</h4></div><p>Two-factor authentication is a method for protection your web account. When it is activated you need to enter not only your password, but also a special code. You can receive this code by in mobile app. Even if third person will find your password, then can't access with that code.</p><div class="d-sm-flex justify-content-between align-items-center pdt-1-5x"><span class="text-light ucap d-inline-flex align-items-center"><span class="mb-0"><small>Current Status:</small></span> <span class="badge badge-disabled ml-2">Disabled</span></span><div class="gaps-2x d-sm-none"></div><button class="order-sm-first btn btn-primary">Enable 2FA</button></div></div><!-- .card-innr --></div><!-- .card --></div><!-- .col --><div class="aside sidebar-right col-lg-4"><div class="account-info card"><div class="card-innr"><h6 class="card-title card-title-sm">Your Account Status</h6><ul class="btn-grp">
<li><a href="#" class="btn btn-auto btn-xs btn-success">Email Verified</a></li>
</ul><div class="gaps-2-5x"></div>
<h6 class="card-title card-title-sm">Payment Wallet</h6><div class="d-flex justify-content-between"><span><span>0x39deb3.....e2ac64rd</span> 
<em class="fas fa-info-circle text-exlight" data-toggle="tooltip" data-placement="bottom" title="Payment id"></em></span>
	<a href="#" data-toggle="modal" data-target="#edit-wallet" class="link link-ucap">Detail</a>
</div></div></div><div class="referral-info card">
</div><div class="kyc-info card">
<div class="card-innr">
	<h6 class="card-title card-title-sm">Your Vehicles</h6>
	<p>To comply with regulation, participant will have to upload car logbook.</p>
	<p class="lead text-light pdb-0-5x">You do not have any vehicles linked to your profile.</p>
	<a href="#" class="btn btn-primary btn-block">Add Vehicle</a><h6 class="kyc-alert text-danger">* Vehicle required in order to book parking</h6>
</div>


</div></div><!-- .col --></div><!-- .container --></div><!-- .container --></div>
	`;
	
}
function userDashboard(){
	const body = document.getElementById("page-content");
	body.innerHTML = dashboard;
}

function userActivity(){
	const body = document.getElementById("page-content");
	body.innerHTML = `
	<div style="width: 80%;background: white;margin: 1% auto;border-radius: 10px;">
		<h4>Notification (s)</h4>
		<hr/>
	</div>
	`;
}

function showResult(){
	const body =document.getElementById("page-content");
	let id = Math.floor(Math.random() * 999);
	id = ""+id
	const el = document.createElement("div")
	el.setAttribute("class","floating")
	el.setAttribute("id",id)
	el.innerHTML = `
		<section class="vh-100" style="background-color: #eee;">
			<div class="container py-5 h-100" style="display:flex;flex-direction:row;width:99%;">
			
	`
	for(let i=1;i<4;i++){
		el.innerHTML += `
		<div class="row d-flex justify-content-center align-items-center h-50" style="flex:auto;max-width:545px;">
			
				<div class="col col-md-9 col-lg-7 col-xl-6">
				  <div class="card" style="border-radius: 15px; background-color: #93e2bb;">
					<div class="card-body p-4 text-black">
					  <div>
						<h6 class="mb-4">Exquisite hand henna tattoo</h6>
						<div class="d-flex align-items-center justify-content-between mb-3">
						  <p class="small mb-0"><i class="far fa-clock me-2"></i>3 hrs</p>
						  <p class="fw-bold mb-0">$90</p>
						</div>
					  </div>
					  <div class="d-flex align-items-center mb-4">
						<div class="flex-shrink-0">
						  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp" alt="Generic placeholder image" class="img-fluid rounded-circle border border-dark border-3" style="width: 70px;">
						</div>
						<div class="flex-grow-1 ms-3">
						  <div class="d-flex flex-row align-items-center mb-2">
							<p class="mb-0 me-2">@sheisme</p>
							<ul class="mb-0 list-unstyled d-flex flex-row" style="color: #1B7B2C;">
							  <li>
								<i class="fas fa-star fa-xs"></i>
							  </li>
							  <li>
								<i class="fas fa-star fa-xs"></i>
							  </li>
							  <li>
								<i class="fas fa-star fa-xs"></i>
							  </li>
							  <li>
								<i class="fas fa-star fa-xs"></i>
							  </li>
							  <li>
								<i class="fas fa-star fa-xs"></i>
							  </li>
							</ul>
						  </div>
						  <div>
							<button type="button" class="btn btn-outline-dark btn-rounded btn-sm" data-mdb-ripple-color="dark">+
							  Follow</button>
							<button type="button" class="btn btn-outline-dark btn-rounded btn-sm" data-mdb-ripple-color="dark">See profile</button>
							<button type="button" class="btn btn-outline-dark btn-floating btn-sm" data-mdb-ripple-color="dark"><i class="fas fa-comment"></i></button>
						  </div>
						</div>
					  </div>
					  <hr>
					  <p class="my-4 pb-1">52 comments</p>
					  <button type="button" class="btn btn-success btn-rounded btn-block btn-lg"><i class="far fa-clock me-2"></i>Book now</button>
					</div>
				  </div>
				 </div>
				</div>
			`;
	}
	el.innerHTML += `		 </div>
		</section>`;
	body.appendChild(el)
	return false;
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
				<label for="search">
					<input  autocomplete="off" placeholder="Parking Location" id="search" type="text">
					<div class="icon">
						<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" data-movable-handle="true"><title>Radio button selected</title><path fill-rule="evenodd" clip-rule="evenodd" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="currentColor"></path>
						</svg>
						
					</div>
					
				</label>
				<label for="dates">
					<input type="date"  id="dates" placeholder="Parking Date">
					<div class="icon" style="float:right;">
						<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none"><title>Clock</title><path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm6 13h-8V4h3v7h5v3Z" fill="currentColor"></path>
						</svg>
						
					</div>
					
				</label>
				<label for="time">
					<input type="time" id="time" placeholder="Parking Time">
					<div class="icon" style="float:right;">
						<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none"><title>Clock</title><path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm6 13h-8V4h3v7h5v3Z" fill="currentColor"></path>
						</svg>
						
					</div>
					
				</label>
				<label for="dates">
					<button type="submit" class="submit-btn">
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
	
	/*let map;

	async function initMap() {
	  const { Map } = await google.maps.importLibrary("maps");

	  map = new Map(document.getElementById("map"), {
		center: { lat: -1.315926, lng: 36.8255 },
		zoom: 12,
	  });
	}

	initMap();
	*/
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
		  mapId: 'DEMO_MAP_ID',
		}
	  );

	  // The marker, positioned at Uluru
	  const marker = new AdvancedMarkerElement({
		map: map,
		position: position,
		title: 'Nairobi'
	  });
	}

	initMap();
	document.getElementById("search-map").classList.add("show-full");
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