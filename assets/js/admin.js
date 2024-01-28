var xValues = ["Occupied","Reserved","Vacant"];
var yValues = [55, 49, 44];
var barColors = ["#FF7474", "#23274E","#28282B"];


const chartFunction = () =>{
	new Chart("myChart", {
	  type: "pie",
	  data: {
		labels: xValues,
		datasets: [{
		  backgroundColor: barColors,
		  data: yValues
		}]
	  },
	  options: {
		title: {
		  display: true,
		  text: "Anything can do"
		}
	  }
	});
	
}
chartFunction()

function bookingDetail(){
	const body =document.body;
	let id = Math.floor(Math.random() * 999);
	id = ""+id
	const el = document.createElement("div")
	el.setAttribute("id",id)
	el.setAttribute("class","bookingdetail")
	el.innerHTML = `
		<section class="vh-100">
			  <div class="container py-5 h-100 w-100">
				<div class="row d-flex justify-content-center align-items-center" style="min-width:522px;">
				  <div class="col-md-10 col-lg-8 col-xl-6">
					<div class="card card-stepper" style="border-radius: 16px;min-width:522px;margin-top:-10%;">
					  <div class="card-header p-4">
						<div class="d-flex justify-content-between align-items-center">
						  <div>
							<p class="text-muted mb-2"> Order ID <span class="fw-bold text-body">1222528743</span></p>
							<p class="text-muted mb-0"> Place On <span class="fw-bold text-body">12,March 2019</span> </p>
						  </div>
						  <div>
							
							<h6 class="mb-0"> <a href="#">View on Map</a> </h6>
							
							<h6 class="mb-0"> <a  onclick="document.getElementById(${id}).remove()"  >Cancel</a> </h6>
						  </div>
						</div>
					  </div>
					  <div class="card-body p-4">
						<div class="d-flex flex-row mb-4 pb-2">
						  <div class="flex-fill">
							<p class="text-muted">Tracking Status on: <span class="text-body" id="tracktime">11:30pm, Today</span></p>
							<h5 class="bold">Location</h5>
							<p class="text-muted"> Nairobi CBD</p>
							<h5 class="bold">Slot</h5>
							<p class="text-muted"> A4</p>
							<h4 class="mb-3"> 324 <span class="small text-muted"> flat (KES) </span></h4>
							
							<h5 class="bold">Parking Time</h5>
							<p class="text-muted"> 12,March 2019:11:30pm</p>
						  </div>
						  <div>
							<img class="align-self-center img-fluid"
							  src="assets/images/background.jpg" width="250"/>
						  </div>
						</div>
						<ul id="progressbar-1" class="mx-0 mt-0 mb-5 px-0 pt-0 pb-4">
						  <li class="step0 active" id="step1"><span
							  style="margin-left: 22px; margin-top: 12px;">PLACED</span></li>
						  <li class="step0 text-center" id="step2"><span>PAID</span></li>
						  <li class="step0 text-muted text-end" id="step3"><span
							  style="margin-right: 22px;">PARKED</span></li>
						</ul>
					  </div>
					  <div class="card-footer p-4">
						<div class="d-flex justify-content-between">
						  <h5 class="fw-normal mb-0"><a href="#!">Track</a></h5>
						  <div class="border-start h-100"></div>
						  <h5 class="fw-normal mb-0"><a href="#!" onclick="document.getElementById(${id}).remove()" style="color:;cursor:pointer;">Cancel</a></h5>
						  <div class="border-start h-100"></div>
						  <h5 class="fw-normal mb-0"><a href="#!">Flag</a></h5>
						  
						</div>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</section>
	
	`
	
	body.appendChild(el)
}
window.addEventListener("load",()=>{
	const details = document.getElementsByClassName("booking-detail")
	for(const detail of details){
		
		detail.addEventListener("click",()=>{
			bookingDetail()
		})
	}
});

function refreshChart(){
	chartFunction()
}

function generateReport(module){
	const body =document.body;
	let id = Math.floor(Math.random() * 999);
	id = ""+id
	const el = document.createElement("div")
	el.setAttribute("id",id)
	el.innerHTML = `
	
	<div class="modal__content">
	<h1 translate="account-popup.title-rename" class="modal__title">${module}</h1>
	
	<div class="actions-wrapper actions-wrapper--popup">
		<button class="account-button" type="submit"  translate="account-popup.button.confirm" >Download</button>
		<button  type="button" onclick="document.getElementById(${id}).remove()"  translate="account-popup.button.cancel" class="link button--link">Cancel</button>
	</div>
	</div>
	`
	el.setAttribute("class","floating")
	el.setAttribute("style","width:45%;")
	body.appendChild(el)
}

function hardwarePage(){
	
	const body = document.getElementById("page-content");
	body.innerHTML = `
	<div >
	<h4>Hardware</h4>
	</div>
	`;
}

function staffDetail(){
	const body =document.body;
	let id = Math.floor(Math.random() * 999);
	id = ""+id
	const el = document.createElement("div")
	el.setAttribute("id",id)
	el.setAttribute("class","bookingdetail")
	el.innerHTML = `
		<section class="vh-100">
			  <div class="container py-5 h-100 w-100">
				<div class="row d-flex justify-content-center align-items-center" style="min-width:522px;">
				  <div class="col-md-12 col-xl-4">

					<div class="card" style="border-radius: 15px;min-width:452px;position:relative;">
						<a class="mb-4" onclick="document.getElementById(${id}).remove()" style="position:absolute;right2%;" href="javascript:void(0)">close</a>
					  <div class="card-body text-center">
						<div class="mt-3 mb-4">
						  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
							class="rounded-circle img-fluid" style="width: 100px;" />
						</div>
						<h4 class="mb-2">Julie L. Arsenault</h4>
						<p class="text-muted mb-4">@Handler <span class="mx-2">|</span> <a
							href="profile.html">company.com</a></p>
						
						<button type="button" class="btn btn-primary btn-rounded btn-lg" onclick="chatWindow()">
						  Message now
						</button>
						<button type="button" class="button-6" onclick="confirmDeactivate(${id})">
						  Deactivate
						</button>
						<div class="d-flex justify-content-between text-center mt-5 mb-2">
						  <div>
							<p class="mb-2 h5">8471</p>
							<p class="text-muted mb-0">Bookings handled</p>
						  </div>
						  <div class="px-3">
							<p class="mb-2 h5">8512</p>
							<p class="text-muted mb-0">Parking Entries</p>
						  </div>
						  <div>
							<p class="mb-2 h5">4751</p>
							<p class="text-muted mb-0">Parking Exits</p>
						  </div>
						</div>
					  </div>
					</div>

				  </div>
				</div>
			  </div>
			</section>
	
	`
	
	body.appendChild(el)
}

function chatWindow(){
	const body = document.getElementById("page-content");
	let id = Math.floor(Math.random() * 999);
	id = ""+id
	const el = document.createElement("div")
	el.setAttribute("id",id)
	el.innerHTML = `
		<div class="form-popup" id=${id}>
		  <form action="/action_page.php" class="form-container">
			<h1>Chat</h1>

			<label for="msg"><b>Message</b></label>
			<textarea placeholder="Type message.." name="msg" required></textarea>

			<button type="submit" class="btn">Send</button>
			<button type="button" class="btn cancel" onclick="document.getElementById(${id}).remove()">Close</button>
		  </form>
		</div>
	`;
	body.appendChild(el)
}


function confirmDeactivate(module){
	const body =document.body;
	let id = Math.floor(Math.random() * 999);
	id = ""+id
	const el = document.createElement("div")
	el.setAttribute("id",id)
	el.setAttribute("class","bookingdetail")
	el.innerHTML = `
	
	<div class="modal__content">
	<h1 translate="account-popup.title-rename" class="modal__title">Deactivation Confirmation</h1>
		<h3>${module}</h3>
	<div class="actions-wrapper actions-wrapper--popup">
		<button class="account-button" type="submit"  translate="account-popup.button.confirm" onclick="newAlert('error','Could not deactivate')">Deactivate</button>
		<button  type="button" onclick="document.getElementById(${id}).remove()"  translate="account-popup.button.cancel" class="link button--link">Cancel</button>
	</div>
	</div>
	`
	el.setAttribute("class","floating")
	el.setAttribute("style","width:45%;")
	body.appendChild(el)
	document.getElementById(module).remove()
}

function newAlert(condition,message){
	const body =document.body;
	let id = Math.floor(Math.random() * 999);
	id = ""+id
	const el = document.createElement("div")
	el.setAttribute("id",id)
	el.setAttribute("class","notification")
	let msg = `<strong>Success!</strong> ${message}`
	let type = `alert-success`
	if(condition==="error"){
		msg = `<strong>Error!</strong>  ${message}`
		type = `alert-danger`
	}
	el.innerHTML = `
		<div >
			<div class="alert ${type} alert-dismissible ">
			  <a href="#" class="close notificationclose" data-dismiss="alert" aria-label="close">&times;</a>
			  ${msg}
			</div>
		</div>
	`
	body.appendChild(el)
	setTimeout(()=>{
		document.getElementById(id).remove()
	},1500)
}

function orderDetail(){
	const body = document.getElementById("page-content");
	body.innerHTML = `
<div class="container" style="min-width:99%;">
	<div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">

	  <div class="d-flex flex-column justify-content-center">
		<h5 class="mb-1 mt-3">Order #32543 <span class="badge bg-label-success me-2 ms-2">Paid</span> <span class="badge bg-label-info">Ready to Pickup</span></h5>
		<p class="text-body">Aug 17, <span id="orderYear">2024</span>, 5:48 (ET)</p>
	  </div>
	  <div class="d-flex align-content-center flex-wrap gap-2">
		<button class="btn btn-label-danger delete-order">Delete Order</button>
	  </div>
	</div>
	<div class="row" style="min-width:99%;display:flex;text-align:left;align-items:left;margin-top:-4%;">
	  <div class="col-12 col-lg-8">
		
		<div class="card mb-4" style="min-width:424px;">
		  <div class="card-header">
			<h5 class="card-title m-0">Order activity</h5>
		  </div>
		  <div class="card-body">
			<ul class="timeline pb-0 mb-0">
			  <li class="timeline-item timeline-item-transparent border-primary">
				<span class="timeline-point-wrapper"><span class="timeline-point timeline-point-primary"></span></span>
				<div class="timeline-event">
				  <div class="timeline-header">
					<h6 class="mb-0">Order was placed (Order ID: #32543)</h6>
					<span class="text-muted">Tuesday 11:29 AM</span>
				  </div>
				  <p class="mt-2">Your order has been placed successfully</p>
				</div>
			  </li>
			  <li class="timeline-item timeline-item-transparent border-primary">
				<span class="timeline-point-wrapper"><span class="timeline-point timeline-point-primary"></span></span>
				<div class="timeline-event">
				  <div class="timeline-header">
					<h6 class="mb-0">Parked</h6>
					<span class="text-muted">Wednesday 11:29 AM</span>
				  </div>
				  <p class="mt-2">Pick-up scheduled with courier</p>
				</div>
			  </li>
			  <li class="timeline-item timeline-item-transparent border-primary">
				<span class="timeline-point-wrapper"><span class="timeline-point timeline-point-primary"></span></span>
				<div class="timeline-event">
				  <div class="timeline-header">
					<h6 class="mb-0">Dispatched</h6>
					<span class="text-muted">Thursday 11:29 AM</span>
				  </div>
				  <p class="mt-2">Item has been picked up by courier</p>
				</div>
			  </li>
			  
			</ul>
		  </div>
		</div>
	  </div>
	  <div class="col-12 col-lg-4">
		<div class="card mb-4"  style="min-width:264px;">
		  <div class="card-header">
			<h6 class="card-title m-0">Customer details</h6>
		  </div>
		  <div class="card-body">
			<div class="d-flex justify-content-start align-items-center mb-4">
			  <div class="avatar me-2">
				<img src="assets/images/users/avatar-1.jpg" width="18" height="18" alt="Avatar" class="rounded-circle">
			  </div>
			  <div class="d-flex flex-column">
				<a href="profile.html" class="text-body text-nowrap">
				  <h6 class="mb-0">Shamus Tuttle</h6>
				</a>
				<small class="text-muted">Customer ID: #58909</small></div>
			</div>
			<div class="d-flex justify-content-start align-items-center mb-4">
			  <span class="avatar rounded-circle bg-label-success me-2 d-flex align-items-center justify-content-center"><i class="fa fa-cart-alt bx-sm lh-sm"></i></span>
			  <h6 class="text-body text-nowrap mb-0">12 Orders</h6>
			</div>
			<div class="d-flex justify-content-between">
			  <h6>Contact info</h6>
			  
			</div>
			<p class=" mb-1">Email: Shamus889@yahoo.com</p>
			<p class=" mb-0">Mobile: +1 (609) 972-22-22</p>
		  </div>
		</div>

		<div class="card mb-4"  style="min-width:264px;">

		  <div class="card-header d-flex justify-content-between">
			<h6 class="card-title m-0">Parking Station</h6>
		
		  </div>
		  <div class="card-body">
			<p class="mb-0">45 Roker Terrace <br>Latheronwheel <br>KW5 8NW,London <br>UK</p>
		  </div>

		</div>
		<div class="card mb-4"  style="min-width:264px;">
		  <div class="card-header d-flex justify-content-between">
			<h6 class="card-title m-0">Billing information</h6>
		  </div>
		  <div class="card-body">
			<p class="mb-4">45 Roker Terrace <br>Latheronwheel <br>KW5 8NW,London <br>UK</p>
			<h6 class="mb-0 pb-2">Mastercard</h6>
			<p class="mb-0">Card Number: ******4291</p>
		  </div>

		</div>
	  </div>
	</div>
</div>
	`
}
newAlert("success","login successfull")