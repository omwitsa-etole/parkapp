const dashboard = document.getElementById("page-content").innerHTML;

function adminDashboard(){
	const body = document.getElementById("page-content");
	body.innerHTML = dashboard;
}


function earningsPage(){
	const body = document.getElementById("page-content");
	body.innerHTML = `
	<div >
	<h4>Earning (s)</h4>
	</div>
	`;
}

function expensePage(){
	const body = document.getElementById("page-content");
	body.innerHTML = `
	<div >
	<h4>Expense (s)</h4>
	</div>
	`;
}


function adminSetting(){
	const body = document.getElementById("page-content");
	body.innerHTML = `
	<div >
	<h4>Settings</h4>
	</div>
	`;
	location.url = "settings.html"
}

const getDetail = ()=>{
	let el = ``
	for(let i=1;i<5;i++){
		el+= `
			<div class="col-xl-3 col-sm-6">
				<div class="card main-card ">
					<div class="card-body">
						<div class="concierge-bx">
							<div class="concierge-img">
								<img src="assets/images/users/avatar-1.jpg" alt="images">
							</div>
							<div class="concierge-content">
								<h2>Alfonso Franci</h2>
								<p>#EMP-00025</p>
							</div>
							<div class="concierge-icon">
								<ul class="d-flex align-items-center justify-content-center detaillist">
									<li onclick="staffDetail()"><a href="javascript:void(0);" class="concierge-list ">
										<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M16.5848 3.47492H15.6483V1.60201C15.6483 1.35365 15.5496 1.11546 15.374 0.939839C15.1984 0.76422 14.9602 0.665558 14.7119 0.665558C14.4635 0.665558 14.2253 0.76422 14.0497 0.939839C13.8741 1.11546 13.7754 1.35365 13.7754 1.60201V3.47492H6.28376V1.60201C6.28376 1.35365 6.1851 1.11546 6.00948 0.939839C5.83386 0.76422 5.59567 0.665558 5.34731 0.665558C5.09895 0.665558 4.86076 0.76422 4.68514 0.939839C4.50952 1.11546 4.41086 1.35365 4.41086 1.60201V3.47492H3.4744C2.72931 3.47492 2.01474 3.77091 1.48788 4.29776C0.961025 4.82462 0.665039 5.53919 0.665039 6.28428V7.22074H19.3941V6.28428C19.3941 5.53919 19.0981 4.82462 18.5713 4.29776C18.0444 3.77091 17.3298 3.47492 16.5848 3.47492Z" fill="#16B455"></path>
										<path d="M0.665039 16.5852C0.665039 17.3303 0.961025 18.0449 1.48788 18.5718C2.01474 19.0986 2.72931 19.3946 3.4744 19.3946H16.5848C17.3298 19.3946 18.0444 19.0986 18.5713 18.5718C19.0981 18.0449 19.3941 17.3303 19.3941 16.5852V9.09363H0.665039V16.5852Z" fill="#16B455"></path>
										</svg>
									</a></li>
									<li><a href="javascript:void(0);" class="concierge-list">
										<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M22.0202 17.2472L18.9572 14.1949C18.3521 13.6005 17.3828 13.6005 16.7777 14.1949L14.8339 16.1869C14.6358 16.3583 14.3466 16.3583 14.1485 16.1869C12.708 15.0357 11.3265 13.8147 10.0145 12.5189C8.70259 11.2176 7.47097 9.84677 6.31432 8.40631C6.13225 8.21354 6.13225 7.91366 6.31432 7.72089L8.34917 5.73423C8.94356 5.11842 8.94356 4.14383 8.34917 3.52802L5.28618 0.465026C4.66502 -0.113301 3.70114 -0.113301 3.07997 0.465026L0.563181 2.99253C0.563181 2.99253 0.450729 3.09963 0.413245 3.14247C-1.0058 4.84532 1.25932 10.2484 6.75342 15.7104C10.7535 19.7319 15.273 22.4254 17.9719 22.4254C18.4217 22.4682 18.8929 22.4147 19.2678 22.163C19.3427 22.1094 19.5516 21.922 19.5516 21.922L22.0202 19.4427C22.6199 18.8323 22.6199 17.8577 22.0202 17.2472Z" fill="#16B455"></path>
										</svg>
									</a></li>
									<li>
										<div class="dropdown dropstart">
											<a href="javascript:void(0);" class="btn-link concierge-list-2" data-bs-toggle="dropdown" aria-expanded="false">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#717579" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
												<path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#717579" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
												<path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#717579" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
												</svg>
											</a>
											<div class="dropdown-menu" style="margin: 0px;">
												<a class="dropdown-item" href="javascript:void(0);" onclick="editHandler()" data-bs-toggle="modal" data-bs-target="editModal">Edit</a>
												<a class="dropdown-item" href="javascript:void(0);">Delete</a>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div class="d-flex align-items-center justify-content-between py-4 concierge-title">
								<h4 class="mb-0">Created January, 2014</h4>
								<span class=" badge badge-success font-w400 font-w400">Active</span>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		`
	}
	return el
}

function towerPage(){
	const body = document.getElementById("page-content");
	body.innerHTML = `
		<div class="container" style="width:100%;">
			<div class="row" style="margin-top:-44px;">
				<div class="row">
					<div class="input-group mb-3">
					  <div class="input-group-prepend">
						<span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-magnifying-glass fa-2x"></i></span>
					  </div>
					  <input type="text" class="form-control" placeholder="Search" aria-label="Searchslots" aria-describedby="basic-addon1">
					</div>
				</div>
				<div class="coin-tabs mb-5 mt-3 mt-sm-0 d-block d-md-flex align-items-center justify-content-between">
					<div class="coin-tabs">
						<ul class="nav nav-tabs" id="myTab" role="tablist">
							<li class="nav-item" role="presentation">
							<button class="nav-link active" id="all-status-tab" data-bs-toggle="tab" data-bs-target="#all-status" type="button" role="tab" aria-controls="all-status" aria-selected="true">All Status</button>
							</li>
							<li class="nav-item" role="presentation">
							<button class="nav-link" id="active-tab" data-bs-toggle="tab" data-bs-target="#active" type="button" role="tab" aria-controls="active" aria-selected="false">Active</button>
							</li>
							<li class="nav-item" role="presentation">
							<button class="nav-link" id="inactive-tab" data-bs-toggle="tab" data-bs-target="#inactive" type="button" role="tab" aria-controls="inactive" aria-selected="false">inactive</button>
							</li>
						</ul>
					</div>
					<div class="form-head d-block d-sm-flex align-items-center mt-md-0 mt-3">
						<a href="javascript:void(0);" class="btn btn-primary ms-0  ms-sm-0 ms-md-3">Add New Tower</a>
					</div>
				</div>
				${getDetail()}
			</div>
		</div>
	`;
	
	$(".handlerDetails").click(()=>{
		console.log("click")
		staffDetail()
	})
}

function handlerPage(){
	const body = document.getElementById("page-content");
	body.innerHTML = `
		<div class="container" style="width:100%;">
			<div class="row"  style="margin-top:-44px;">
				<div class="row">
					<div class="input-group mb-3">
					  <div class="input-group-prepend">
						<span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-magnifying-glass fa-2x"></i></span>
					  </div>
					  <input type="text" class="form-control" placeholder="Search" aria-label="Searchslots" aria-describedby="basic-addon1">
					</div>
				</div>
				<div class="coin-tabs mb-5 mt-3 mt-sm-0 d-block d-md-flex align-items-center justify-content-between">
					<div class="coin-tabs">
						<ul class="nav nav-tabs" id="myTab" role="tablist">
							<li class="nav-item" role="presentation">
							<button class="nav-link active" id="all-status-tab" data-bs-toggle="tab" data-bs-target="#all-status" type="button" role="tab" aria-controls="all-status" aria-selected="true">All Status</button>
							</li>
							<li class="nav-item" role="presentation">
							<button class="nav-link" id="active-tab" data-bs-toggle="tab" data-bs-target="#active" type="button" role="tab" aria-controls="active" aria-selected="false">Active</button>
							</li>
							<li class="nav-item" role="presentation">
							<button class="nav-link" id="inactive-tab" data-bs-toggle="tab" data-bs-target="#inactive" type="button" role="tab" aria-controls="inactive" aria-selected="false">inactive</button>
							</li>
						</ul>
					</div>
					<div class="form-head d-block d-sm-flex align-items-center mt-md-0 mt-3">
						<a href="javascript:void(0);" class="btn btn-primary ms-0  ms-sm-0 ms-md-3">Add New Handler</a>
					</div>
				</div>
				${getDetail()}
			</div>
		</div>
	`;
	
	$(".handlerDetails").click(()=>{
		staffDetail()
	})
}



function hashChange(){
	let hash =  window.location.hash;
	
	hash = hash.replace("#","");
	console.log(hash)
	if(hash.includes("parking")){
		parkingMap();
	}else if(hash.includes("dashboard")){
		adminDashboard();
	}else if(hash.includes("earnings")){
		earningsPage();
	}else if(hash.includes("expenses")){
		expensePage();
	}else if(hash.includes("analysis")){
		analysisPage();
	}else if(hash.includes("settings")){
		adminSetting();
	}else if(hash.includes("hardware")){
		hardwarePage();
	}else if(hash.includes("towers")){
		towerPage();
	}else if(hash.includes("handlers")){
		handlerPage();
	}else if(hash.includes("account")){
		parkingPage();
	}else if(hash.includes("addnew")){
		addnewPage();
	}else if(hash.includes("profile")){
		location.href = "profile.html"
	}else if(hash.includes("order")){
		orderDetail();
	}else if(hash.includes("wallet")){
		walletAnalysis();
	}else{
		adminDashboard();
	}
}
window.addEventListener("hashchange",(e)=>{
	
	hashChange();
})

hashChange();



