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

function towerPage(){
	const body = document.getElementById("page-content");
	body.innerHTML = `
	<div class="container-fluid alterpos" style="position:absolute;top: ;max-width: 80%;">
	<div >
	<h4>Towers</h4>
	</div>
	<div class="row" style="min-width: 99%;">                          
		<div class="col-xl-8">
			<div class="card" style="min-width: 99%;">
				<div class="card-header align-items-center d-flex">
					<h4 class="card-title mb-0 flex-grow-1">All Towers</h4>
					<div class="flex-shrink-0">
						<button type="button" class="btn btn-soft-primary btn-sm" onclick="generateReport('Towers')">
							<i class="fa fa-file-list-3-line align-middle"></i> Generate Report
						</button>
					</div>
				</div><!-- end card header -->

				<div class="card-body">
					<div class="table-responsive table-card">
						<table class="table table-borderless table-centered align-middle table-nowrap mb-0">
							<thead class="text-muted table-light">
								<tr>
									<th scope="col">Tower ID</th>
									<th scope="col">Name</th>
									<th scope="col">Tows</th>
									
									<th scope="col">Status</th>
									<th scope="col">Date Created</th>
									
								</tr>
							</thead>
							<tbody>
								<tr class="handlerDetails">
									<td>
										<a href="#" class="fw-medium link-primary">#VZ2112</a>
									</td>
									<td>
										<div class="d-flex align-items-center">
											<div class="flex-shrink-0 me-2">
												<img src="assets/images/users/avatar-1.jpg" alt="" class="avatar-xs rounded-circle">
											</div>
											<div class="flex-grow-1">Tower name</div>
										</div>
									</td>
									<td>12</td>
									
									
									<td>
										<span class="badge bg-success-subtle text-success">active</span>
									</td>
									<td>
										<span class="badge bg-success-subtle"><script>new Date()</script></span>
									</td>
									
								</tr><!-- end tr -->
								

							</tbody><!-- end tbody -->
						</table><!-- end table -->
					</div>
				</div>
			</div> <!-- .card-->
		</div> <!-- .col-->
	</div>
	<div class="row" style="min-width: 99%;margin-top:5%;" >                          
		<div class="col-xl-8">
			<div class="card" style="min-width: 99%;">
				<div class="card-header align-items-center d-flex">
					<h4 class="card-title mb-0 flex-grow-1">Recent Tower Events</h4>
					
				</div><!-- end card header -->

				<div class="card-body">
					
				</div>
			</div> <!-- .card-->
		</div> <!-- .col-->
	</div>
	
	
<div class="row shiftnew" style="">
	
	<div class="col-xxl-4 flex-box" >
			<!-- card -->
			<div class="card card-card card-height-100" style="min-width: 45%;">
				<div class="card-header align-items-center d-flex">
					<h4 class="card-title mb-0 flex-grow-1">Add new Tower</h4>
					<div class="flex-shrink-0">
						<button type="button" id="addhandler" class="btn btn-soft-primary btn-sm">
							Add Tower
						</button>
					</div>
				</div><!-- end card header -->
		
				<!-- card body -->
				<div class="card-body addbg"  style="display:none;" id="handlerPage">
					<div class="form-container">
					  <div class="logo-container">
						New Tower
					  </div>

					  <form class="form">
						<div class="form-group">
						  <label for="email">Email</label>
						  <input type="text" id="email" name="email" placeholder="Enter Tower name" required="">
						   <input type="text" id="email" name="password" placeholder="Enter ID" disabled>
						</div>
						<p class="signup-link">
							<a href="#" class="signup-link link"> Generate Password ID</a>
						  </p>
						<button class="form-submit-btn" type="submit">Send Data</button>
					  </form>

					 
					</div>
					
					
				</div>
				<!-- end card body -->
			</div>
			<!-- end card -->
	</div>
	</div>

</div>
	`;
	$("#addhandler").click(()=>{
		const block = document.getElementById("handlerPage")
		if(block.hasAttribute("style")){
			block.removeAttribute("style")
		}else{
			block.setAttribute("style","display:none;height:1vh;")
		}
	})
	$(".handlerDetails").click(()=>{
		staffDetail()
	})
}

function handlerPage(){
	const body = document.getElementById("page-content");
	body.innerHTML = `
	<div class="container-fluid alterpos" style="position:absolute;top: ;max-width: 80%;">
	<div >
	<h4>Handlers</h4>
	</div>
	<div class="row" style="min-width: 99%;">                          
		<div class="col-xl-8">
			<div class="card" style="min-width: 99%;">
				<div class="card-header align-items-center d-flex">
					<h4 class="card-title mb-0 flex-grow-1">All Handlers</h4>
					<div class="flex-shrink-0">
						<button type="button" class="btn btn-soft-primary btn-sm" onclick="generateReport('Haandlers')">
							<i class="fa fa-file-list-3-line align-middle"></i> Generate Report
						</button>
					</div>
				</div><!-- end card header -->

				<div class="card-body">
					<div class="table-responsive table-card">
						<table class="table table-borderless table-centered align-middle table-nowrap mb-0">
							<thead class="text-muted table-light">
								<tr>
									<th scope="col">Handler ID</th>
									<th scope="col">Name</th>
									<th scope="col">Working Location</th>
									
									<th scope="col">Status</th>
									
								</tr>
							</thead>
							<tbody>
								<tr class="handlerDetails">
									<td>
										<a href="apps-ecommerce-order-details.html" class="fw-medium link-primary">#VZ2112</a>
									</td>
									<td>
										<div class="d-flex align-items-center">
											<div class="flex-shrink-0 me-2">
												<img src="assets/images/users/avatar-1.jpg" alt="" class="avatar-xs rounded-circle">
											</div>
											<div class="flex-grow-1">Handler name</div>
										</div>
									</td>
									<td>Nairobi CBD</td>
									
									
									<td>
										<span class="badge bg-success-subtle text-success">active</span>
									</td>
									
								</tr><!-- end tr -->
								

							</tbody><!-- end tbody -->
						</table><!-- end table -->
					</div>
				</div>
			</div> <!-- .card-->
		</div> <!-- .col-->
	</div>
	
	<div class="row" style="min-width: 99%;margin-top:5%;" >                          
		<div class="col-xl-8">
			<div class="card" style="min-width: 99%;">
				<div class="card-header align-items-center d-flex">
					<h4 class="card-title mb-0 flex-grow-1">Recent Handler Events</h4>
					<div class="flex-shrink-0">
						
					</div>
				</div><!-- end card header -->

				<div class="card-body">
					
				</div>
			</div> <!-- .card-->
		</div> <!-- .col-->
	</div>
	
	
<div class="row shiftnew" style="">
	
	<div class="col-xxl-4 flex-box" >
			<!-- card -->
			<div class="card card-card card-height-100" style="min-width: 45%;">
				<div class="card-header align-items-center d-flex">
					<h4 class="card-title mb-0 flex-grow-1">Add new Handler</h4>
					<div class="flex-shrink-0">
						<button type="button" id="addhandler" class="btn btn-soft-primary btn-sm">
							Add handler
						</button>
					</div>
				</div><!-- end card header -->
		
				<!-- card body -->
				<div class="card-body addbg" style="display:none;" id="handlerPage">
					<div class="form-container">
					  <div class="logo-container">
						New Handler
					  </div>

					  <form class="form">
						<div class="form-group">
						  <label for="email">Email</label>
						  <input type="text" id="email" name="email" placeholder="Enter handler name" required="">
						   <input type="text" id="email" name="password" placeholder="Enter ID" disabled>
						</div>
						<p class="signup-link">
							<a href="#" class="signup-link link"> Generate Password ID</a>
						  </p>
						<button class="form-submit-btn" type="submit">Send Data</button>
					  </form>

					 
					</div>
					
					
				</div>
				<!-- end card body -->
			</div>
			<!-- end card -->
	</div>
	</div>
	
	
</div>
	`;
	$("#addhandler").click(()=>{
		const block = document.getElementById("handlerPage")
		if(block.hasAttribute("style")){
			block.removeAttribute("style")
		}else{
			block.setAttribute("style","display:none;height:1vh;")
		}
	})
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
	}else{
		adminDashboard();
	}
}
window.addEventListener("hashchange",(e)=>{
	
	hashChange();
})

hashChange();



