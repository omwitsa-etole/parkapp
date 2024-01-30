const payMethods = ()=>{
	const icons = ["mpesa","airtel","visa","mastercard"]
	let el = ""
	for(const icon of icons){
		el += `
			<div class="col-xl-3 col-lg-6 col-md-6 col-sm-6" onclick="this.children[0].click()">
				<a onclick="makeWithdraw('${icon}')" data-toggle="modal" data-target="#withdrawModal" ></a>
				<div class="card mt-1 mt-md-3" style="background-image:url(assets/images/icons/${icon}.jpg);background-repeat:no-repeat;">
					<div class="card-body p-3">
						<div class="align-items-center h-100 d-flex flex-wrap">
							<div class="d-inline-block position-relative donut-chart-sale me-2">
							</div>
							<div class=" ">
								<h4 class="fs-18 font-w600 mb-1 text-break">${icon.toUpperCase()}</h4>
								<span class="fs-14">KES 55</span>
							</div>	
						</div>
					</div>
				</div>
			</div>
		`
	}
	return el
}

function walletAnalysis(){
	const body = document.getElementById("page-content");
	body.innerHTML = `
		<div class="container-fluid">
			<button class="button-6 btn-back">Back</button>
			<div class="row">
			
				<div class="col-xl-9">
					<div class="row">
						<!----column-- -->
						
						<!----/column-- -->
						<!----column-- -->
						<div class="col-xl-8 col-lg-7 col-md-12 col-sm-12">
							<div class="card ">
								<div class="card-header border-0 align-items-start pb-0">
									<div>
										<span class="fs-18 d-block mb-2">Main Balance</span>
										<h4 class="fs-28 font-w600 ">$ 98,452.44</h4>
									</div>
									<div class="dropdown">
										<a href="javascript:void(0);" class="btn-link btn sharp tp-btn-light btn-primary pill" data-bs-toggle="dropdown" aria-expanded="false">
										<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M8.33319 9.99985C8.33319 10.9203 9.07938 11.6665 9.99986 11.6665C10.9203 11.6665 11.6665 10.9203 11.6665 9.99986C11.6665 9.07938 10.9203 8.33319 9.99986 8.33319C9.07938 8.33319 8.33319 9.07938 8.33319 9.99985Z" fill="#ffffff"></path>
										<path d="M8.33319 3.33329C8.33319 4.25376 9.07938 4.99995 9.99986 4.99995C10.9203 4.99995 11.6665 4.25376 11.6665 3.33329C11.6665 2.41282 10.9203 1.66663 9.99986 1.66663C9.07938 1.66663 8.33319 2.41282 8.33319 3.33329Z" fill="#ffffff"></path>
										<path d="M8.33319 16.6667C8.33319 17.5871 9.07938 18.3333 9.99986 18.3333C10.9203 18.3333 11.6665 17.5871 11.6665 16.6667C11.6665 15.7462 10.9203 15 9.99986 15C9.07938 15 8.33319 15.7462 8.33319 16.6667Z" fill="#ffffff"></path>
										</svg>

										</a>
										<div class="dropdown-menu dropdown-menu-end">
											<a class="dropdown-item" href="javascript:void(0);">Delete</a>
											<a class="dropdown-item" href="javascript:void(0);">Edit</a>
										</div>
									</div>
								</div>
								<div class="card-body py-4 py-md-2">
									<div class="progress default-progress">
										<div class="progress-bar-primary rounded-0 bg-vigit progress-animated" style="width: 90%; height:8px;" role="progressbar">
											<span class="sr-only">90% Complete</span>
										</div>
									</div>
									
								</div>
							</div>
						</div>
						<!----/column-- -->
						<div class="col-xl-12">
							<div class="card">	
								<div class="card-body py-3 py-md-2 px-4">	
									<div class="row">
										<!--column-->
										${payMethods()}
										
									</div>
									<!-- --/row-- -->
								</div>
							</div>
						</div>
						<!--column-->
						<div class="col-xl-12">
							<div class="card user-data-table" style="min-width:99%;">
								<div class="card-header pb-0 d-block d-sm-flex border-0">
									<div class="me-3">
										<h4 class="card-title mb-2">Latest Transaction</h4>
										<span class="fs-12">Lorem ipsum dolor sit amet, consectetur</span>
									</div>
									<div class="card-tabs mt-3 mt-sm-0">
										<ul class="nav nav-tabs" role="tablist">
											<li class="nav-item">
												<a class="nav-link underline active" data-bs-toggle="tab" href="#monthly" role="tab">Monthly</a>
											</li>
											<li class="nav-item">
												<a class="nav-link underline" data-bs-toggle="tab" href="#Weekly" role="tab">Weekly</a>
											</li>
											<li class="nav-item">
												<a class="nav-link underline" data-bs-toggle="tab" href="#Today" role="tab">Today</a>
											</li>
										</ul>
									</div>
								</div>
								<div class="card-body tab-content p-0" style="overflow:auto;">
									<!-- tab-pane -->
									<div class="tab-pane fade active show" id="monthly" role="tabpanel">
										<div id="accordion-one" class="accordion style-1">
											<div class="accordion-item bg-transparent mb-0" style="cursor:pointer;">
												
												<div class="accordion-header collapsed my-2">
													
													<a></a>
													<div class="d-flex align-items-center">
														<div class="profile-image">
															<img src="assets/images/users/avatar-1.jpg" alt="">	
														</div>
														<div class="user-info">
															<h6 class="fs-16 font-w500 mb-0"><a href="javascript:void(0)">Livia Bator</a></h6>
															<span class="fs-14">Online Shop</span>
														</div>
													</div>
													<span>June 5, 2020, 08:22 AM</span>
													<span>+$5,553</span>
													<span>MasterCard 404</span>
													<a class="btn btn-warning" href="javascript:void(0);">Pending</a>
													<a class="btn btn-primary" href="javascript:void(0);" onclick="invoiceDetail()" data-toggle="modal" data-target="#invoiceModal">Detail</a>
													<span class="accordion-header-indicator"></span>
												</div>
												
											</div>
										
										</div>
									</div>
									
									<!--/ tab-pane -->
									<!-- tab-pane -->
									
									<!--/ tab-pane -->
								</div>
								


							</div>	

						</div>
						<!--/column-->
					</div>
					<!-- --/row-- -->
				<!--/column-->		
				</div>
			
			</div>
		</div>
	`
}

const makeMpesa =()=>{
	let el = `
		<div class="card w-100"><div  class="card-body">
		<div class="withdraw-heading"><h4 _ngcontent-hno-c63="">Withdraw Money</h4></div>
		<div  class="withdraw-form form-group">
		<label _ngcontent-hno-c63="">Enter the Money</label><input _ngcontent-hno-c63="" type="number" name="from" title="amount_to_withdraw" class="form-control ng-pristine ng-valid ng-touched"><!---->
		</div>
		<div class="row"><div  class="col-lg-4 col-md-6 ng-star-inserted">
		<a _ngcontent-hno-c63="" href="javascript:void(0);"><div _ngcontent-hno-c63="" class="withdraw-box"><p _ngcontent-hno-c63="">$1,000.00</p></div>
		</a>
		</div><div _ngcontent-hno-c63="" class="col-lg-4 col-md-6 ng-star-inserted"><a _ngcontent-hno-c63="" href="javascript:void(0);"><div _ngcontent-hno-c63="" class="withdraw-box"><p _ngcontent-hno-c63="">$5,000.00</p></div></a></div><div _ngcontent-hno-c63="" class="col-lg-4 col-md-6 ng-star-inserted"><a _ngcontent-hno-c63="" href="javascript:void(0);"><div _ngcontent-hno-c63="" class="withdraw-box"><p _ngcontent-hno-c63="">$10,000.00</p></div></a></div><div _ngcontent-hno-c63="" class="col-lg-4 col-md-6 ng-star-inserted"><a _ngcontent-hno-c63="" href="javascript:void(0);"><div _ngcontent-hno-c63="" class="withdraw-box"><p _ngcontent-hno-c63="">$25,000.00</p></div></a></div><div _ngcontent-hno-c63="" class="col-lg-4 col-md-6 ng-star-inserted"><a _ngcontent-hno-c63="" href="javascript:void(0);"><div _ngcontent-hno-c63="" class="withdraw-box"><p _ngcontent-hno-c63="">$50,000.00</p></div></a></div><div _ngcontent-hno-c63="" class="col-lg-4 col-md-6 ng-star-inserted"><a _ngcontent-hno-c63="" href="javascript:void(0);"><div _ngcontent-hno-c63="" class="withdraw-box"><p _ngcontent-hno-c63="">$100,000.00</p></div></a></div><!----></div>
		<div _ngcontent-hno-c63="" class="withdraw-btn"><button _ngcontent-hno-c63="" type="submit" class="btn btn-primary w-100"> Submit </button></div></div></div>
	`
	return el
	
	
}

function makeWithdraw(mode){
	
	let html = `
		${makeMpesa()}
	`
	const body =document.getElementById("withdrawModal");
	const title = body.getElementsByClassName("modal-title")
	const el = body.getElementsByClassName("modal-body")
	
	title[0].innerHTML = " withdraw"
	el[0].innerHTML = html
	el[0].setAttribute("style","max-height:456px;")
}