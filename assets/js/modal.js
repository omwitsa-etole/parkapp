const addModal = (id)=>{
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

$(document).ready(function(){
	document.body.innerHTML += addModal("slotsModal")
	document.body.innerHTML += addModal("guestModal")
	document.body.innerHTML += addModal("editModal")
	document.body.innerHTML += addModal("bookingsModal")
	document.body.innerHTML += addModal("invoiceModal")
	document.body.innerHTML += addModal("withdrawModal")
})

const parkSlots = ()=>{
	let el = ""
	for(let i=1;i<5;i++){
		el += `
			<div class="main-grid">
				<div class="grid-info">
					<div class="popular-rooms">
						<div class="dropdown dropstart">
							<a href="javascript:void(0);" class="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
								<path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
								<path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
								</svg>
							</a>
							<div class="dropdown-menu">
								<a class="dropdown-item" href="javascript:void(0);">Edit</a>
								<a class="dropdown-item" href="javascript:void(0);">Delete</a>
							</div>
						</div>
						<img height="24" src="assets/images/users/avatar-1.jpg" alt="image">
						<div class="badgecontent">
							<span class="badge badge-success badge-primary">AVAILABLE</span>
							<h3 class="font-w500 text-white pt-3 pb-2 m-0 text-nowrap">04 Brrom Str, Fl2</h3>
							<span class="font-w400 text-white">Flat</span>
						</div>
					</div>
					<div class="review-area">
						<div class="star-rate">
							<h4 class="mb-0 font-w500">KES 35</h4>
							
						</div>
						<p class="mb-0 font-w400">245 Parkings</p>
					</div>
					<ul class="feature-list">
						<li>Name <span>G-05</span></li>
						
						<li>Status <span>Active</span></li>
					</ul>
				</div>
			</div>
		`
	}
	return el
}

function slotsModal(){
	
	let html = `
		<div class="container" style="width:100%;">
			<div class="row">
				<div class="input-group mb-3">
				  <div class="input-group-prepend">
					<span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-magnifying-glass fa-2x"></i></span>
				  </div>
				  <input type="text" class="form-control" placeholder="Search" aria-label="Searchslots" aria-describedby="basic-addon1">
				</div>
			</div>
			<div class="row flexdisplay" style="width:100%;">
					${parkSlots()}
			</div>
		</div>
	`
	const body =document.getElementById("slotsModal");
	const title = body.getElementsByClassName("modal-title")
	const el = body.getElementsByClassName("modal-body")
	title[0].innerHTML = "Parking Slots"
	el[0].innerHTML = html
	el[0].setAttribute("style","max-height:456px;overflow:auto;")
	body.setAttribute("style","min-width:456px;")
}

const parkDetail =()=>{
	let el = `
		<div class="col-xl-4">
			<div class="card h-auto">
				<div class="card-body profile-bx">
					<div class="profile-media">
						<div class="d-flex align-items-center align-items-sm-start">
							<img src="assets/images/users/avatar.jpg" alt="">
							<div class="media-content">
								<h3 class="fs-21">Thomas Braun</h3>
								<p class="fs-16 mb-0">#G-001234125</p>
							</div>
						</div>	
						<div class="dropdown dropstart">
							<a href="javascript:void(0);" class="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
								<svg class="prof-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
									<path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
									<path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
								</svg>
							</a>
							<div class="dropdown-menu" style="margin: 0px;">
								<a class="dropdown-item" href="javascript:void(0);">Edit</a>
								<a class="dropdown-item" href="javascript:void(0);">Delete</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="card h-auto">
				<div class="card-header border-0 pb-0">
					<h4 class="fs-24 font-w500">Marcella Court</h4>
				</div>
				<div class="card-body pt-0">
					<div class="d-flex align-items-center justify-content-between mb-4">
						<p class="m-0">#R-245T345</p>
						<a href="javascript:void(0);" class="btn btn-primary btn-sm">BOOKED</a>
					</div>
					<div class="d-flex align-items-center">
						<div class="me-5">
							<p class="fs-12">Type</p>
							<div class="d-flex">
								
								<h5 class="fs-15 mb-4 ms-3">Flat Rate</h5>
							</div>
						</div>
							<div class="ms-3">
							<p class="fs-12">Duration</p>
							<div class="d-flex">
								
								<h5 class="fs-15 mb-4 ms-3">4 Hours</h5>
							</div>
						</div>
					</div>
					<div>
						<p class="fs-12">Date Booking</p>
						<div class="d-flex">
							<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6667 1.8V0.9C10.6667 0.4032 11.0649 0 11.5556 0C12.0462 0 12.4444 0.4032 12.4444 0.9V1.8C14.408 1.8 16 3.4119 16 5.4V14.4C16 16.3881 14.408 18 12.4444 18C9.90222 18 6.09689 18 3.55556 18C1.592 18 0 16.3881 0 14.4V5.4C0 3.4119 1.592 1.8 3.55556 1.8V0.9C3.55556 0.4032 3.95378 0 4.44444 0C4.93511 0 5.33333 0.4032 5.33333 0.9V1.8H10.6667ZM14.2222 9H1.77778V14.4C1.77778 15.3936 2.57333 16.2 3.55556 16.2H12.4444C13.4258 16.2 14.2222 15.3936 14.2222 14.4V9ZM12.4444 3.6V4.5C12.4444 4.9968 12.0462 5.4 11.5556 5.4C11.0649 5.4 10.6667 4.9968 10.6667 4.5V3.6H5.33333V4.5C5.33333 4.9968 4.93511 5.4 4.44444 5.4C3.95378 5.4 3.55556 4.9968 3.55556 4.5V3.6C2.57333 3.6 1.77778 4.4055 1.77778 5.4V7.2H14.2222V5.4C14.2222 4.4055 13.4258 3.6 12.4444 3.6Z" fill="#F66F4D"></path>
							</svg>
							<h5 class="fs-15 mb-4 ms-3">Thursday, February 4 2021 at 2:24 AM</h5>
						</div>
					</div>
					
					</div>
				</div>
				
			</div>
		</div>
	`
	return el
}

function guestDetail(){
	let html = `
		<div class="container" style="width:100%;">
			<div class="row">
				${parkDetail()}
			</div>
		</div>
	`
	const body =document.getElementById("guestModal");
	const title = body.getElementsByClassName("modal-title")
	const el = body.getElementsByClassName("modal-body")
	title[0].innerHTML = "Guest Detail"
	el[0].innerHTML = html
	el[0].setAttribute("style","max-height:456px;overflow:auto;")
}

function editHandler(){
	let html = `
		<div class="container" style="width:100%;">
			<div class="row">
				
			</div>
		</div>
	`
	const body =document.getElementById("editModal");
	const title = body.getElementsByClassName("modal-title")
	const el = body.getElementsByClassName("modal-body")
	title[0].innerHTML = "Edit Handler/Tower"
	el[0].innerHTML = html
	el[0].setAttribute("style","max-height:456px;overflow:auto;")
}
const getBookings =()=>{
	let el = `
		<tr role="row" class="odd">
			<td class="sorting_1">
				<div class="form-check style-3">
					<input class="form-check-input" type="checkbox" value="">
				</div>
			</td>
			<td>
				<div class="media-bx d-flex py-3 ">
					<div>
						<span class="text-primary fs-16 font-w400 text-nowrap">#GS-2234</span>
						<h4 class="mb-0 mt-1 fs-15 font-w500 text-nowrap text-nowrap"><a class="text-black" href="https://kamr.dexignlab.com/codeigniter/demo/guest_details">Kierra Geidt</a></h4>
					</div>
				</div>
			</td>
			<td>
				<div>
					<h5 class="fs-15 font-w500 text-nowrap">Sunday, Oct 24th, 2020</h5>
					<span class="fs-14 font-w400 text-nowrap">08:29 AM</span>
				</div>
			</td>
			<td>
				<div>
					<h5 class="fs-15 font-w500 text-nowrap">Oct 29th, 2020</h5>
					<span class="fs-14 font-w400 text-nowrap">08:29 AM</span>
				</div>
			</td>
			<td>
				<div>
					<h5 class="fs-15 font-w500 text-nowrap">KCA 432D</h5>
					<span class="fs-14 font-w400 text-nowrap">Grey BMW</span>
				</div>
			</td>
			<td><a href="javascript:void(0);" class="btn-link text-nowrap">Extension</a></td>
			<td>
				<div>
					<h5 class="fs-15 font-w500 text-nowrap">Queen A-2345</h5>
					<span class="fs-14 font-w400 text-nowrap">Room No. 0024</span>
				</div>
			</td>
			<td><span class="badge badge-xl light badge-warning badge-sm">Pending</span></td>
			<td>
				<div class="dropdown dropstart">
					<a href="javascript:void(0);" class="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
							<path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
							<path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
						</svg>
					</a>
					<div class="dropdown-menu">
						<a class="dropdown-item" onclick="invoiceDetail()" data-toggle="modal" data-target='#invoiceModal'>Detail</a>
						<a class="dropdown-item" href="javascript:void(0);">Delete</a>
					</div>
				</div>
			</td>
		</tr>
	`
	return el
}
function activeBookings(){
	let html = `
		<div class="container" style="width:100%;display:flex;">
			<div class="row" style="width:99vh;">
				<div class="card" style="min-width:99%;">
					<div class="card-body p-0">
						<div class="table-responsive">
							<div id="guestTable-all3_wrapper" class="dataTables_wrapper no-footer">
								<table class="table table-list i-table style-1 mb-4 border-0 dataTable no-footer" id="guestTable-all3" role="grid" aria-describedby="guestTable-all3_info">
									<thead>
										<tr role="row"><th class="bg-none sorting_asc" tabindex="0" aria-controls="guestTable-all3" rowspan="1" colspan="1" aria-sort="ascending" aria-label=": activate to sort column descending" style="width: 25.1875px;">
											<div class="form-check style-3">
												<input class="form-check-input" type="checkbox" value="" id="checkAll">
											</div>
										</th><th class="sorting" tabindex="0" aria-controls="guestTable-all3" rowspan="1" colspan="1" aria-label="Guest: activate to sort column ascending" style="width: 161.156px;">Guest</th><th class="sorting" tabindex="0" aria-controls="guestTable-all3" rowspan="1" colspan="1" aria-label="Date Order: activate to sort column ascending" style="width: 122.062px;">Date Order</th><th class="sorting" tabindex="0" aria-controls="guestTable-all3" rowspan="1" colspan="1" aria-label="Check In: activate to sort column ascending" style="width: 76.8906px;">Check In</th><th class="sorting" tabindex="0" aria-controls="guestTable-all3" rowspan="1" colspan="1" aria-label="Check Out: activate to sort column ascending" style="width: 76.8906px;">Vehicle</th><th class="sorting" tabindex="0" aria-controls="guestTable-all3" rowspan="1" colspan="1" aria-label="Request: activate to sort column ascending" style="width: 59.8125px;">Request</th>
										<th class="sorting" tabindex="0" aria-controls="guestTable-all3" rowspan="1" colspan="1" aria-label="Room Type: activate to sort column ascending" style="width: 81.2812px;">Location</th><th class="sorting" tabindex="0" aria-controls="guestTable-all3" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style="width: 102.219px;">Status</th><th class="bg-none sorting" tabindex="0" aria-controls="guestTable-all3" rowspan="1" colspan="1" aria-label=": activate to sort column ascending" style="width: 20.5px;">
										</th>
										</tr>
									</thead>
									<tbody>
										${getBookings()}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	`
	const body =document.getElementById("bookingsModal");
	const title = body.getElementsByClassName("modal-title")
	const el = body.getElementsByClassName("modal-body")
	const content = body.getElementsByClassName("modal-content")
	content[0].setAttribute("style","min-width:99vh;")
	title[0].innerHTML = "Active Bookings"
	el[0].innerHTML = html
	el[0].setAttribute("style","max-height:456px;overflow:auto;")
	
}

const getInvoice =()=>{
	let el = `
		<div class="col-xl-6" style="min-width:99vh;">
			<div class="card  " style="min-width:99%;">
				<div class="card-header">
					<div>
						<span class="font-w400 d-block">ID Payment</span>
						<h4 class="fs-24 font-w600 mb-0 d-inline-flex me-2">#00123521</h4>
					</div>
					<div class="add-btn me-2" style="position:absolute;right:1%;top:1%;">
						<button class="btn btn-primary"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path opacity="1" d="M2 13C2 12.5 2.5 12 3 12C3.5 12 4 12.5 4 13C4 13.3333 4 15 4 18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V13C20 12.4477 20.4477 12 21 12C21.5523 12 22 12.4477 22 13V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18C2 15 2 13.3333 2 13Z" fill="white"></path>
							<path opacity="1" d="M11 14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14L13 2C13 1.44771 12.5523 1 12 1C11.4477 1 11 1.44771 11 2L11 14Z" fill="white"></path>
							<path d="M16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289C18.0976 9.68341 18.0976 10.3166 17.7071 10.7071L12.7071 15.7071C12.331 16.0832 11.7264 16.0991 11.331 15.7433L6.33104 11.2433C5.92053 10.8738 5.88725 10.2415 6.25671 9.83103C6.62617 9.42052 7.25845 9.38724 7.66896 9.7567L11.9638 13.622L16.2929 9.29289Z" fill="white"></path>
							</svg> Download PDF</button>
					</div>
				</div>
				<div class="card-body d-flex align-items-center justify-content-between flex-wrap pt-0" style="position:relative;">
					<div class="d-flex py-sm-3 py-1 align-items-center flex-wrap student none">
						<span class=" me-3">
							<img src="assets/images/users/avatar-1.jpg" alt="" width="50">
						</span>
						<div >
							<h6 class="font-w500 fs-16 mb-0"><a href="app-profile.html">Thomas Khun</a></h6>
							<span class="fs-14 font-w400">@thomaskhuncoro</span>
							
						</div>
																									
					</div>
					<div class="price ms-auto res" style="position:absolute;right:1%;top:1%;" >
							
						<a href="#" >
							<span class="d-block">Amount</span>
								776
						</a>
						
					</div>	
					
					<div class="row">
						<!----column-- -->
						<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
							<div class="card info">
								<div class="card-body d-flex align-items-center p-3">
									<div class="info-icon pe-3 ">
										<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path opacity="0.4" d="M19.224 7.31991C18.5893 7.20266 18.0064 7.60772 17.8855 8.22729C17.7647 8.84686 18.171 9.45178 18.7885 9.57303C20.6475 9.93545 22.0829 11.3745 22.4468 13.2398V13.2412C22.5503 13.7781 23.0231 14.1685 23.5675 14.1685C23.6405 14.1685 23.7135 14.1619 23.7879 14.1486C24.4054 14.0246 24.8117 13.4211 24.6909 12.8001C24.1478 10.0141 22.0033 7.86221 19.224 7.31991" fill="#53CAFD"></path>
											<path opacity="0.4" d="M19.1415 2.67723C18.844 2.63459 18.5452 2.72253 18.3076 2.91174C18.0632 3.1036 17.9105 3.38075 17.8773 3.6912C17.807 4.31877 18.2598 4.88638 18.8865 4.957C23.2087 5.43933 26.5682 8.80635 27.0542 13.142C27.1193 13.723 27.6066 14.1613 28.1882 14.1613C28.232 14.1613 28.2745 14.1587 28.3184 14.1533C28.6224 14.12 28.8933 13.9695 29.0845 13.7296C29.2744 13.4898 29.3607 13.1913 29.3262 12.8862C28.7207 7.4766 24.5339 3.27815 19.1415 2.67723" fill="#53CAFD"></path>
											<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7093 17.2965C20.0281 22.6138 21.2347 16.4623 24.6212 19.8464C27.886 23.1103 29.7625 23.7643 25.626 27.8996C25.1078 28.316 21.8158 33.3257 10.2465 21.7596C-1.32431 10.192 3.68244 6.89659 4.09895 6.3786C8.24548 2.23179 8.88814 4.11918 12.153 7.38311C15.5395 10.7687 9.39054 11.9792 14.7093 17.2965Z" fill="#53CAFD"></path>
										</svg>   
									</div>
									<div class="info-content">
										<span class="fs-16">Telephone</span>
										<h4 class="">+12 345 5662 66</h4>
									</div>
								</div>
							</div>
						</div>
						<!----/column-- -->
						<!----column-- -->
						<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
							<div class="card info">
								<div class="card-body d-flex align-items-center p-3">
									<div class="info-icon pe-3 ">
										<svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M20.0457 5.48343C19.2874 3.98839 18.1655 2.70797 16.783 1.75986C15.4005 0.811764 13.8019 0.226414 12.1341 0.0576295C11.3796 -0.0180705 10.6195 -0.0180705 9.86498 0.0576295C8.1972 0.226525 6.5986 0.811858 5.21608 1.75985C3.83357 2.70783 2.71146 3.98807 1.95288 5.48293C0.998475 7.39028 0.629827 9.5374 0.89337 11.6539C1.15691 13.7703 2.04086 15.7615 3.43388 17.3765L10.2268 25.6353C10.3206 25.7494 10.4385 25.8414 10.5721 25.9045C10.7057 25.9676 10.8516 26.0003 10.9993 26.0003C11.147 26.0003 11.2929 25.9676 11.4265 25.9045C11.56 25.8414 11.678 25.7494 11.7718 25.6353L18.5647 17.3765C19.9577 15.7616 20.8416 13.7705 21.1052 11.6541C21.3687 9.53774 21.0001 7.3907 20.0457 5.48343ZM10.9993 14C10.2082 14 9.4348 13.7654 8.777 13.3259C8.11921 12.8864 7.60652 12.2617 7.30377 11.5308C7.00102 10.7999 6.9218 9.99559 7.07614 9.21967C7.23048 8.44374 7.61145 7.73101 8.17086 7.1716C8.73027 6.61219 9.443 6.23123 10.2189 6.07689C10.9948 5.92255 11.7991 6.00176 12.53 6.30451C13.2609 6.60726 13.8856 7.11995 14.3252 7.77775C14.7647 8.43555 14.9993 9.2089 14.9993 10C14.998 11.0605 14.5762 12.0772 13.8263 12.8271C13.0765 13.577 12.0598 13.9988 10.9993 14Z" fill="#53CAFD"></path>
										</svg>    
									</div>
									<div class="info-content">
										<span class="fs-16">Address</span>
										<h4 class="text-break">774 Ora Brooks London</h4>
									</div>
								</div>
							</div>
						</div>
						<!----/column-- -->
						<!----column-- -->
						<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
							<div class="card info">
								<div class="card-body d-flex align-items-center p-3">
									<div class="info-icon pe-3 ">
										<svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path opacity="0.4" d="M30 19.4109C30 23.5959 26.64 26.9859 22.455 27.0009H22.44H7.575C3.405 27.0009 0 23.6259 0 19.4409V19.4259C0 19.4259 0.009 12.7869 0.021 9.44792C0.0225 8.82092 0.7425 8.46992 1.233 8.85992C4.797 11.6874 11.1705 16.8429 11.25 16.9104C12.315 17.7639 13.665 18.2454 15.045 18.2454C16.425 18.2454 17.775 17.7639 18.84 16.8939C18.9195 16.8414 25.1505 11.8404 28.7685 8.96642C29.2605 8.57492 29.9835 8.92592 29.985 9.55142C30 12.8649 30 19.4109 30 19.4109Z" fill="#53CAFD"></path>
											<path d="M29.2133 4.011C27.9143 1.563 25.3583 0 22.5443 0H7.57434C4.76034 0 2.20434 1.563 0.905337 4.011C0.614337 4.5585 0.752337 5.241 1.23684 5.628L12.3743 14.5365C13.1543 15.1665 14.0993 15.48 15.0443 15.48C15.0503 15.48 15.0548 15.48 15.0593 15.48C15.0638 15.48 15.0698 15.48 15.0743 15.48C16.0193 15.48 16.9643 15.1665 17.7443 14.5365L28.8818 5.628C29.3663 5.241 29.5043 4.5585 29.2133 4.011Z" fill="#53CAFD"></path>
										</svg>
									</div>
									<div class="info-content">
										<span class="fs-16">Email</span>
										<h4 class="text-break">demo@mail.com</h4>
									</div>
								
								</div>
							</div>
						</div>
						<!----/column-- -->
						<!----column-- -->
						<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
							<div class="card info">
								<div class="card-body d-flex align-items-center p-3">
									<div class="info-icon pe-3 ">
										<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path opacity="0.3" d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z" fill="#53CAFD"></path>
											<path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M19.5596 34.9937C11.479 34.7606 5 28.1369 5 20C5 19.8614 5.00188 19.7232 5.00562 19.5855C6.10388 19.6906 8.09395 19.929 8.18771 20.7007C8.31749 21.7682 8.18771 23.1027 9.09674 23.503C10.0058 23.9032 10.2655 21.9016 11.0446 22.4354C11.8236 22.9693 13.9014 23.4832 13.9014 24.427C13.9014 25.3707 13.5119 26.8391 13.9014 27.106C14.291 27.373 15.8483 29.2411 15.8487 29.508C15.8493 29.7749 16.3976 31.1322 16.234 31.6511C16.0984 32.0812 15.4143 33.4169 14.751 34.0243C16.2553 34.6034 17.8726 34.9432 19.5596 34.9937ZM13.8046 6.3352C15.6931 5.47761 17.7908 5 20 5C25.8524 5 30.922 8.35162 33.3941 13.2401C33.4494 14.5402 33.4397 15.6523 33.7269 16.0546C35.1887 18.1001 30.1659 19.5072 30.9289 22.6009C31.2649 23.9658 27.588 23.5328 26.69 24.8107C25.7913 26.0879 23.5958 25.2297 23.0867 24.9841C22.5776 24.7386 20.6278 25.5569 20.7982 24.1659C20.9676 22.7744 22.1538 22.6927 23.4259 22.1199C24.6975 21.5478 26.5315 19.6453 25.6303 19.3967C21.3872 18.2271 19.9396 14.1309 19.9396 14.1309C19.6851 14.0817 19.749 11.2352 18.6473 11.1534C17.5446 11.0713 16.9508 11.4807 15.3406 11.1534C13.7294 10.8262 14.0691 9.76239 13.8145 7.47093C13.7576 6.95693 13.7603 6.59528 13.8046 6.3352ZM34.9986 19.7951C34.9995 19.8633 35 19.9316 35 20C35 28.2345 28.3647 34.9192 20.1492 34.9993C28.2837 34.9172 34.8895 28.1474 34.9986 19.7951Z" fill="#53CAFD"></path>
										</svg>      
									</div>
									<div class="info-content">
										<span class="fs-16">Name</span>
										<h4 class="text-break">Maili CBD</h4>
									</div>
								</div>
							</div>
						</div>
						<!----/column-- -->
					</div>
					<div class="d-flex w-100 justify-content-between  flex-wrap pyment-card">
						<div class="pe-4 py-2 py-sm-0">
							<span class="fs-16">Payment Method</span>
							<h4 class="mb-0">MasterCard 404</h4>
						</div>
						<div class="pe-4 py-2 py-sm-0">
							<span class="fs-16">Invoice Date</span>
							<h4 class="mb-0">April 29, 2020</h4>
						</div>
						<div class="pe-4 py-2 py-sm-0">
							<span class="fs-16">Booked Date</span>
							<h4 class="mb-0">June 5, 2020</h4>
						</div>
						<div class="pe-4 py-2 py-sm-0">
							<span class="fs-16">Date Paid</span>
							<h4 class="mb-0">June 4, 2020</h4>
						</div>
					</div>
				</div>
			
			</div>	
		</div>
	`
	return el
}

function invoiceDetail(){
	console.log("clicked")
	let html = `
		<div class="container" style="width:100%;">
			<div class="row" style="min-width:99vh;">
				${getInvoice()}
			</div>
		</div>
	`
	const body =document.getElementById("invoiceModal");
	const title = body.getElementsByClassName("modal-title")
	const el = body.getElementsByClassName("modal-body")
	const content = body.getElementsByClassName("modal-content")
	content[0].setAttribute("style","min-width:99vh;")
	title[0].innerHTML = "Invoice Detail"
	el[0].innerHTML = html
	el[0].setAttribute("style","min-height:456px;")
}