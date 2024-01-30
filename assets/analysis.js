function analysisPage(){
	const body = document.getElementById("page-content");
	body.setAttribute("style","margin: 1% auto;")
	body.innerHTML = `

	<div class="container-fluid alterpos" >
		<div >
			<h4>Revenue Analysis</h4>
		</div>

		<div class="row">
			<div class="col">

				<div class="h-100">
					

					<div class="row">
						<div class="col-xl-3 col-md-6">
							<!-- card -->
							<div class="card card-animate">
								<div class="card-body">
									<div class="d-flex align-items-center">
										<div class="flex-grow-1 overflow-hidden">
											<p class="text-uppercase fw-medium text-muted text-truncate mb-0">
												Total Earnings</p>
										</div>
										<div class="flex-shrink-0">
											<h5 class="text-success fs-14 mb-0">
												<i class="fa fa-arrow-up fs-13 align-middle"></i>
												+16.24 %
											</h5>
										</div>
									</div>
									<div class="d-flex align-items-end justify-content-between mt-4">
										<div>
											<h4 class="fs-22 fw-semibold ff-secondary mb-4">$<span class="counter-value" data-target="559.25">559.25</span>k
											</h4>
											<a href="#" class="link-secondary text-decoration-underline">View net
												earnings</a>
										</div>
										<div class="avatar-sm flex-shrink-0">
											<span class="avatar-title bg-primary-subtle rounded fs-3">
												<i class="fa fa-dollar-sign text-primary"></i>
											</span>
										</div>
									</div>
								</div><!-- end card body -->
							</div><!-- end card -->
						</div><!-- end col -->

						<div class="col-xl-3 col-md-6">
							<!-- card -->
							<div class="card card-animate"  onclick="this.getElementsByTagName("a")[0].click()">
								<div class="card-body">
									<div class="d-flex align-items-center">
										<div class="flex-grow-1 overflow-hidden">
											<p class="text-uppercase fw-medium text-muted text-truncate mb-0">
												Orders</p>
										</div>
										<div class="flex-shrink-0">
											<h5 class="text-danger fs-14 mb-0">
												<i class="fa fa-arrow-up fs-13 align-middle"></i>
												-3.57 %
											</h5>
										</div>
									</div>
									<div class="d-flex align-items-end justify-content-between mt-4">
										<div>
											<h4 class="fs-22 fw-semibold ff-secondary mb-4"><span class="counter-value" data-target="36894">36,894</span></h4>
											<a href="#" onclick="orderDetails()" data-toggle="modal" data-target="#orderDetails" class="link-secondary text-decoration-underline">View all
												orders</a>
										</div>
										<div class="avatar-sm flex-shrink-0">
											<span class="avatar-title bg-primary-subtle rounded fs-3">
												<i class="fa fa-shopping-bag text-primary"></i>
											</span>
										</div>
									</div>
								</div><!-- end card body -->
							</div><!-- end card -->
						</div><!-- end col -->

						<div class="col-xl-3 col-md-6">
							<!-- card -->
							<div class="card card-animate" onclick="this.getElementsByTagName("a")[0].click()">
								<div class="card-body">
									<div class="d-flex align-items-center">
										<div class="flex-grow-1 overflow-hidden">
											<p class="text-uppercase fw-medium text-muted text-truncate mb-0">
												Customers</p>
										</div>
										<div class="flex-shrink-0">
											<h5 class="text-success fs-14 mb-0">
												<i class="fa fa-arrow-up fs-13 align-middle"></i>
												+29.08 %
											</h5>
										</div>
									</div>
									<div class="d-flex align-items-end justify-content-between mt-4">
										<div>
											<h4 class="fs-22 fw-semibold ff-secondary mb-4"><span class="counter-value" data-target="183.35">183.35</span>M
											</h4>
											<a href="#" onclick="userDetails()" data-toggle="modal" data-target="#userDetails" class="link-secondary text-decoration-underline">See
												details</a>
										</div>
										<div class="avatar-sm flex-shrink-0">
											<span class="avatar-title bg-primary-subtle rounded fs-3">
												<i class="fa fa-user-circle text-primary"></i>
											</span>
										</div>
									</div>
								</div><!-- end card body -->
							</div><!-- end card -->
						</div><!-- end col -->

						<div class="col-xl-3 col-md-6">
							<!-- card -->
							<div class="card card-animate" onclick="this.getElementsByTagName("a")[0].click()">
								<div class="card-body">
									<div class="d-flex align-items-center">
										<div class="flex-grow-1 overflow-hidden">
											<p class="text-uppercase fw-medium text-muted text-truncate mb-0">
												My Balance</p>
										</div>
										<div class="flex-shrink-0">
											<h5 class="text-muted fs-14 mb-0">
												+0.00 %
											</h5>
										</div>
									</div>
									<div class="d-flex align-items-end justify-content-between mt-4">
										<div>
											<h4 class="fs-22 fw-semibold ff-secondary mb-4">$<span class="counter-value" data-target="165.89">165.89</span>k
											</h4>
											<a href="#wallet" onclick="walletAnalysis()" class="link-secondary text-decoration-underline">Withdraw
												money</a>
										</div>
										<div class="avatar-sm flex-shrink-0">
											<span class="avatar-title bg-primary-subtle rounded fs-3">
												<i class="fa fa-wallet text-primary"></i>
											</span>
										</div>
									</div>
								</div><!-- end card body -->
							</div><!-- end card -->
						</div><!-- end col -->
					</div> <!-- end row-->
					
					
					
					<div class="row" style="min-width: 99%;">     
						<div class="col-xl-6" style="min-width: 99%;" id="analysis">
							<div class="card" style="min-width: 99%;">
								<div class="card-header align-items-center d-flex">
									<h4 class="card-title mb-0 flex-grow-1">Top Sellers</h4>
									<div class="flex-shrink-0">
										<div class="dropdown card-header-dropdown">
											<a class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												<span class="text-muted">Report<i class="fa fa-chevron-down ms-1"></i></span>
											</a>
											<div class="dropdown-menu dropdown-menu-end" style="">
												<a class="dropdown-item" href="#">Download Report</a>
												
												<a class="dropdown-item" href="#">Import</a>
											</div>
										</div>
									</div>
								</div><!-- end card header -->

								<div class="card-body">
									<div class="table-responsive table-card">
										<table class="table table-centered table-hover align-middle table-nowrap mb-0">
											<tbody>
												<tr>
													<td>
														<div class="d-flex align-items-center">
															<div class="flex-shrink-0 me-2">
																<img src="assets/images/users/avatar-1.jpg" alt="" class="avatar-sm p-2">
															</div>
															<div>
																<h5 class="fs-14 my-1 fw-medium"><a href="apps-ecommerce-seller-details.html" class="text-reset">Location id</a>
																</h5>
																<span class="text-muted">Parking Name</span>
															</div>
														</div>
													</td>
													<td>
														<span class="text-muted">Nairobi CBD</span>
													</td>
													<td>
														<p class="mb-0">8547</p>
														<span class="text-muted">Bookings</span>
													</td>
													<td>
														<span class="text-muted">$541200</span>
													</td>
													<td>
														<h5 class="fs-14 mb-0">32%<i class="fa fa-arrow-up text-success fs-16 align-middle ms-2"></i>
														</h5>
													</td>
												</tr><!-- end -->
												
											</tbody>
										</table><!-- end table -->
									</div>

								</div> <!-- .card-body-->
							</div> <!-- .card-->
						</div> <!-- .col-->
						</div>
					
			</div>
			</div> <!-- end col -->

			<!-- end col -->
		</div>

	</div>
	<!-- container-fluid -->

	`;
	const date = new Date()
	console.log(date)
	$("#analysis-date").value = date;
	
}

$(document).ready(function(){
	document.body.innerHTML += newModal("userDetails")
	
})

function userDetails(){
	const body =document.getElementById("analysis");
	body.innerHTML = `
		<div class="card" style="min-width:99%;overflow:auto;">
			<div class="card-header d-flex justify-content-between">
			   <div class="header-title">
				  <h4 class="card-title">User List</h4>
				  <div class="form-group mb-0" style="position:absolute;right:1%;top:5%;">
					 <input type="search" class="form-control" id="exampleInputSearch" placeholder="Search" aria-controls="user-list-table">
				  </div>
			   </div>
			</div>
			<div class="card-body">
				   <div class="table-responsive">
					 <table id="user-list-table" class="table table-striped dataTable mt-4" role="grid" aria-describedby="user-list-page-info">
						<thead>
						   <tr class="ligth">
							  <th>Profile</th>
							  <th>Name</th>
							  <th>Contact</th>
							  <th>Email</th>
							  <th>Country</th>
							  <th>Status</th>
							 
							  <th>Join Date</th>
							  <th style="min-width: 100px">Action</th>
						   </tr>
						</thead>
						<tbody>
						   <tr>
							  <td class="text-center"><img class="rounded img-fluid avatar-40" height="46" width="64" src="assets/images/users/avatar-1.jpg" alt="profile"></td>
							  <td>Anna Sthesia</td>
							  <td>(760) 756 7568</td>
							  <td>annasthesia@gmail.com</td>
							  <td>USA</td>
							  <td><span class="badge bg-primary-light">Active</span></td>
							  
							  <td>2019/12/01</td>
							  <td>
								 <div class="flex align-items-center list-user-action">
									<a class="btn btn-sm bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add" href="#"><i class="ri-user-add-line mr-0"></i></a>
									<a class="btn btn-sm bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i class="ri-pencil-line mr-0"></i></a>
									<a class="btn btn-sm bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line mr-0"></i></a>
								 </div>
							  </td>
						   </tr>
						   
						</tbody>
					 </table>
				  </div>
			   <div class="row justify-content-between mt-3">
				  <div id="user-list-page-info" class="col-md-6">
					 <span>Showing 1 to 5 of 5 entries</span>
				  </div>
				  <div class="col-md-6">
					 <nav aria-label="Page navigation example">
						<ul class="pagination justify-content-end mb-0">
						   <li class="page-item disabled">
							  <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
						   </li>
						   <li class="page-item active"><a class="page-link" href="#">1</a></li>
						   <li class="page-item"><a class="page-link" href="#">2</a></li>
						   <li class="page-item"><a class="page-link" href="#">3</a></li>
						   <li class="page-item">
							  <a class="page-link" href="#">Next</a>
						   </li>
						</ul>
					 </nav>
				  </div>
			   </div>
			</div>
		 </div>
	`	
}

function orderDetails(){
	const body =document.getElementById("analysis");
	body.innerHTML = `
<div class="container-xxl flex-grow-1 container-p-y" style="width:99%;">
<div class="card mb-4" style="min-width:99%;">
  <div class="card-widget-separator-wrapper">
    <div class="card-body card-widget-separator">
      <div class="row gy-4 gy-sm-1">
        <div class="col-sm-6 col-lg-3">
          <div class="d-flex justify-content-between align-items-start card-widget-1 border-end pb-3 pb-sm-0">
            <div>
              <h3 class="mb-2">56</h3>
              <p class="mb-0">Pending Payment</p>
            </div>
            <div class="avatar me-sm-4">
              <span class="avatar-initial rounded bg-label-secondary">
                <i class="fa fa-calendar bx-sm"></i>
              </span>
            </div>
          </div>
          <hr class="d-none d-sm-block d-lg-none me-4">
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="d-flex justify-content-between align-items-start card-widget-2 border-end pb-3 pb-sm-0">
            <div>
              <h3 class="mb-2">12,689</h3>
              <p class="mb-0">Completed</p>
            </div>
            <div class="avatar me-lg-4">
              <span class="avatar-initial rounded bg-label-secondary">
                <i class="fa fa-check-double bx-sm"></i>
              </span>
            </div>
          </div>
          <hr class="d-none d-sm-block d-lg-none">
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="d-flex justify-content-between align-items-start border-end pb-3 pb-sm-0 card-widget-3">
            <div>
              <h3 class="mb-2">124</h3>
              <p class="mb-0">Refunded</p>
            </div>
            <div class="avatar me-sm-4">
              <span class="avatar-initial rounded bg-label-secondary">
                <i class="fa fa-wallet bx-sm"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="d-flex justify-content-between align-items-start">
            <div>
              <h3 class="mb-2">32</h3>
              <p class="mb-0">Failed</p>
            </div>
            <div class="avatar">
              <span class="avatar-initial rounded bg-label-secondary">
                <i class="fa-solid fa-circle-exclamation bx-sm"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Order List Table -->
<div class="card" style="min-width:99%;">
  <div class="card-datatable table-responsive">
    <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap5 no-footer"><div class="card-header d-flex flex-column flex-md-row align-items-start align-items-md-center"><div class="ms-n2">
	<div id="DataTables_Table_0_filter" class="dataTables_filter">
	<label><input type="search" class="form-control" placeholder="Search Order" aria-controls="DataTables_Table_0"></label>
	</div></div><div class="d-flex align-items-md-center justify-content-md-end mt-2 mt-md-0"><div class="dataTables_length mt-0 mt-md-3 me-3" id="DataTables_Table_0_length"><label></label></div>
	<div class="dt-action-buttons pt-0"></div></div></div><table class="datatables-order table border-top dataTable no-footer dtr-column collapsed" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info" style="width: 1034px;">
      <thead>
        <tr><th class="control sorting_disabled" rowspan="1" colspan="1" style="width: 4px;" aria-label=""></th>
		<th class="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all" rowspan="1" colspan="1" style="width: 18px;" data-col="1" aria-label=""><input type="checkbox" class="form-check-input"></th>
		<th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style="width: 54px;" aria-label="order: activate to sort column ascending">order</th><th class="sorting sorting_asc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style="width: 131px;" aria-label="date: activate to sort column descending" aria-sort="ascending">date</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style="width: 265px;" aria-label="customers: activate to sort column ascending">customers</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style="width: 106px;" aria-label="payment: activate to sort column ascending">payment</th><th class="sorting dtr-hidden" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style="width: 138px; display: none;" aria-label="status: activate to sort column ascending">status</th><th class="sorting dtr-hidden" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style="width: 0px; display: none;" aria-label="method: activate to sort column ascending">method</th><th class="sorting_disabled dtr-hidden" rowspan="1" colspan="1" style="width: 0px; display: none;" aria-label="Actions">Actions</th></tr>
      </thead><tbody><tr class="odd"><td class="control" tabindex="0" style=""></td>
	  <td class="  dt-checkboxes-cell"><input type="checkbox" class="dt-checkboxes form-check-input"></td>
	  <td><a href="app-ecommerce-order-details.html"><span class="fw-medium">#6979</span></a></td>
	  <td class="sorting_1"><span class="text-nowrap">Apr 15, 2023, 10:21</span></td>
	  <td><div class="d-flex justify-content-start align-items-center order-name text-nowrap"><div class="avatar-wrapper"><div class="avatar me-2"><img src="assets/images/users/avatar-1.jpg" width="18" height="18" alt="Avatar" class="rounded-circle"></div></div>
	  <div class="d-flex flex-column"><h6 class="m-0"><a href="profile.html" class="text-body">Cristine Easom</a></h6><small class="text-muted">ceasomw@theguardian.com</small></div></div></td>
	  
	  <td><h6 class="mb-0 w-px-100 text-warning"><i class="fa fas-circle fs-tiny me-2"></i>Pending</h6></td><td class="dtr-hidden" style="color: #fff;"><span class="badge px-2 bg-label-success" text-capitalized="">Delivered</span></td><td class="dtr-hidden" style="display: ;"><div class="d-flex align-items-center text-nowrap"><img src="assets/images/icons/visa.jpg" alt="mastercard" class="me-2" width="16"><span><i class="bx bx-dots-horizontal-rounded"></i>2356</span></div></td>
	  <td class="dtr-hidden" style="display: ;"><div class="d-flex justify-content-sm-center align-items-sm-center"><button class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="fa-solid fa-ellipsis-vertical"></i></button><div class="dropdown-menu dropdown-menu-end m-0"><a href="app-ecommerce-order-details.html" class="dropdown-item">View</a><a href="javascript:0;" class="dropdown-item delete-record">Delete</a></div></div></td></tr>
	  <tr class="even"><td class="control" tabindex="0" style=""></td><td class="  dt-checkboxes-cell"><input type="checkbox" class="dt-checkboxes form-check-input"></td><td><a href="order-details.html"><span class="fw-medium">#6624</span></a></td>
	  <td class="sorting_1"><span class="text-nowrap">Apr 17, 2023, 6:43 </span></td><td><div class="d-flex justify-content-start align-items-center order-name text-nowrap"><div class="avatar-wrapper"><div class="avatar me-2"><span class="avatar-initial rounded-circle bg-label-danger">FS</span></div></div><div class="d-flex flex-column"><h6 class="m-0"><a href="pages-profile-user.html" class="text-body">Fayre Screech</a></h6><small class="text-muted">fscreechs@army.mil</small></div></div></td>
	  <td><h6 class="mb-0 w-px-100 text-danger"><i class="fa fas-circle fs-tiny me-2"></i>Failed</h6></td><td class="dtr-hidden" style="color: #fff;"><span class="badge px-2 bg-label-success" text-capitalized="">Delivered</span></td>
	  <td class="dtr-hidden" style="display: ;"><div class="d-flex align-items-center text-nowrap"><img src="assets/images/icons/visa.jpg" alt="mastercard" class="me-2" width="16"><span><i class="bx bx-dots-horizontal-rounded"></i>2077</span></div></td><td class="dtr-hidden" style="display: ;"><div class="d-flex justify-content-sm-center align-items-sm-center"><button class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="fa-solid fa-ellipsis-vertical"></i></button><div class="dropdown-menu dropdown-menu-end m-0"><a href="app-ecommerce-order-details.html" class="dropdown-item">View</a><a href="javascript:0;" class="dropdown-item delete-record">Delete</a></div></div></td></tr><tr class="odd"><td class="control" tabindex="0" style=""></td>
	  </tr></tbody>
    </table><div class="row mx-2"><div class="col-sm-12 col-md-6"><div class="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Displaying 1 to 10 of 100 entries</div></div><div class="col-sm-12 col-md-6"><div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate"><ul class="pagination"><li class="paginate_button page-item previous disabled" id="DataTables_Table_0_previous"><a aria-controls="DataTables_Table_0" aria-disabled="true" role="link" data-dt-idx="previous" tabindex="0" class="page-link">Previous</a></li><li class="paginate_button page-item active"><a href="#" aria-controls="DataTables_Table_0" role="link" aria-current="page" data-dt-idx="0" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" role="link" data-dt-idx="1" tabindex="0" class="page-link">2</a></li><li class="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" role="link" data-dt-idx="2" tabindex="0" class="page-link">3</a></li><li class="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" role="link" data-dt-idx="3" tabindex="0" class="page-link">4</a></li><li class="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" role="link" data-dt-idx="4" tabindex="0" class="page-link">5</a></li><li class="paginate_button page-item disabled" id="DataTables_Table_0_ellipsis"><a aria-controls="DataTables_Table_0" aria-disabled="true" role="link" data-dt-idx="ellipsis" tabindex="0" class="page-link">…</a></li><li class="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" role="link" data-dt-idx="9" tabindex="0" class="page-link">10</a></li><li class="paginate_button page-item next" id="DataTables_Table_0_next"><a href="#" aria-controls="DataTables_Table_0" role="link" data-dt-idx="next" tabindex="0" class="page-link">Next</a></li></ul></div></div></div></div>
  </div>
</div>
	`
}


const parkedList = ()=>{
	let el = `
		<div class="d-flex guest-list mb-4" onclick="this.children[0].click()">
			<a onclick="guestDetail()" data-toggle="modal" data-target="#guestModal"><img src="assets/images/users/avatar-1.jpg" alt="image"></a>
			<div>
				<h4 class="m-0">Jordyn George</h4>
				<span class="text-primary">#GS-2234</span>
			</div>
		</div>
	`
	return el
}

function ParkAnalysis(){
	const body = document.getElementById("page-content");
	body.setAttribute("style","margin: ;")
	body.innerHTML =`
	<button class="button-6 btn-back">Back</button>
	<div class="container-fluid">
		
		<div class="row">
			<div class="col-xl-12">
				<div class="col-xl-12 card h-auto">
				
					<div class="card-body">
						<div class="row align-items-center">
							<div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
								<div class="income-data d-flex align-items-center justify-content-xl-start justify-content-between mb-xl-0 mb-3">
									<span class=" income-icon style-1 me-4">
									<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M20.4764 0.97345C20.4255 0.974639 20.3747 0.978331 20.3241 0.984696C19.9555 1.02962 19.6167 1.20961 19.3732 1.48989C19.1297 1.77018 18.9988 2.13096 19.0057 2.50219V29.4991C19.0077 29.8041 19.1026 30.1012 19.2778 30.3509C19.453 30.6006 19.7001 30.7909 19.9862 30.8966C20.2723 31.0022 20.5838 31.0183 20.8792 30.9424C21.1746 30.8665 21.4398 30.7023 21.6395 30.4718L30.6425 19.9748C30.7704 19.8249 30.8676 19.6513 30.9284 19.4639C30.9893 19.2765 31.0126 19.079 30.9971 18.8825C30.9816 18.6861 30.9276 18.4946 30.8381 18.319C30.7486 18.1435 30.6254 17.9875 30.4755 17.8595C30.3257 17.7316 30.1521 17.6344 29.9647 17.5735C29.7773 17.5127 29.5797 17.4893 29.3833 17.5048C29.1869 17.5204 28.9954 17.5745 28.8199 17.664C28.6443 17.7535 28.4882 17.8766 28.3602 18.0265L21.994 25.4444V2.50219C21.9976 2.30152 21.9608 2.10206 21.8859 1.91585C21.811 1.72965 21.6995 1.56043 21.5579 1.41809C21.4164 1.27576 21.2478 1.16328 21.062 1.08729C20.8763 1.01131 20.6771 0.973336 20.4764 0.975699L20.4764 0.97345ZM11.453 1.00736C11.2441 1.01319 11.0388 1.0627 10.8501 1.15252C10.6614 1.24234 10.4935 1.37054 10.3573 1.52899L1.3661 12.026C1.22021 12.1722 1.10608 12.3469 1.03084 12.5392C0.955604 12.7315 0.920883 12.9374 0.928852 13.1437C0.936821 13.3501 0.98731 13.5526 1.07716 13.7385C1.167 13.9245 1.29427 14.0897 1.45099 14.2242C1.60771 14.3587 1.79051 14.4595 1.98794 14.52C2.18537 14.5806 2.39318 14.5997 2.59835 14.5763C2.80352 14.5528 3.00163 14.4871 3.18029 14.3835C3.35895 14.2799 3.51429 14.1407 3.6366 13.9743L10.0028 6.55623V29.4988C9.99838 29.6986 10.0339 29.8972 10.1073 30.0831C10.1807 30.2689 10.2905 30.4383 10.4302 30.5812C10.5699 30.724 10.7368 30.8374 10.921 30.9149C11.1052 30.9924 11.303 31.0324 11.5028 31.0324C11.7026 31.0324 11.9005 30.9924 12.0847 30.9149C12.2689 30.8374 12.4357 30.724 12.5754 30.5812C12.7152 30.4383 12.8249 30.2689 12.8983 30.0831C12.9717 29.8972 13.0072 29.6986 13.0028 29.4988V2.50167C13.0021 2.30093 12.9611 2.10237 12.8823 1.91775C12.8035 1.73314 12.6884 1.56607 12.5439 1.42674C12.3993 1.28741 12.2283 1.17853 12.041 1.1065C11.8536 1.03447 11.6536 1.00089 11.453 1.00753V1.00736Z" fill="#fff"></path>
										</svg>
									</span>
									<div>
										<h2 class="font-w600 mb-0 income-value">$45,945</h2>
										<span class=" fs-6 font-w500">Total incomes</span>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
								<div class="d-flex align-items-end justify-content-xl-start justify-content-between mb-xl-0 mb-3" style="position: relative;">
										<div id="NewCustomers" style="min-height: 80px;"><div id="apexchartss179bfjh" class="apexcharts-canvas apexchartss179bfjh apexcharts-theme-light" style="width: 156px; height: 80px;"><svg id="SvgjsSvg1428" width="156" height="80" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG1430" class="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)"><defs id="SvgjsDefs1429"><clipPath id="gridRectMasks179bfjh"><rect id="SvgjsRect1433" width="164" height="84" x="-4" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="gridRectMarkerMasks179bfjh"><rect id="SvgjsRect1434" width="160" height="84" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><g id="SvgjsG1441" class="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG1442" class="apexcharts-xaxis-texts-g" transform="translate(0, -4)"></g></g><g id="SvgjsG1451" class="apexcharts-grid"><g id="SvgjsG1452" class="apexcharts-gridlines-horizontal" style="display: none;"><line id="SvgjsLine1454" x1="0" y1="0" x2="156" y2="0" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine1455" x1="0" y1="16" x2="156" y2="16" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine1456" x1="0" y1="32" x2="156" y2="32" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine1457" x1="0" y1="48" x2="156" y2="48" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine1458" x1="0" y1="64" x2="156" y2="64" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine1459" x1="0" y1="80" x2="156" y2="80" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line></g><g id="SvgjsG1453" class="apexcharts-gridlines-vertical" style="display: none;"></g><line id="SvgjsLine1461" x1="0" y1="80" x2="156" y2="80" stroke="transparent" stroke-dasharray="0"></line><line id="SvgjsLine1460" x1="0" y1="1" x2="0" y2="80" stroke="transparent" stroke-dasharray="0"></line></g><g id="SvgjsG1435" class="apexcharts-area-series apexcharts-plot-series"><g id="SvgjsG1436" class="apexcharts-series" seriesName="NetxProfit" data:longestSeries="true" rel="1" data:realIndex="0"><path id="SvgjsPath1439" d="M 0 80L 0 68C 9.1 68 16.9 36 26 36C 35.1 36 42.9 56 52 56C 61.1 56 68.9 16 78 16C 87.1 16 94.9 56 104 56C 113.1 56 120.9 36 130 36C 139.1 36 146.9 36 156 36C 156 36 156 36 156 80M 156 36z" fill="rgba(22,180,85,0.1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" class="apexcharts-area" index="0" clip-path="url(#gridRectMasks179bfjh)" pathTo="M 0 80L 0 68C 9.1 68 16.9 36 26 36C 35.1 36 42.9 56 52 56C 61.1 56 68.9 16 78 16C 87.1 16 94.9 56 104 56C 113.1 56 120.9 36 130 36C 139.1 36 146.9 36 156 36C 156 36 156 36 156 80M 156 36z" pathFrom="M -1 96L -1 96L 26 96L 52 96L 78 96L 104 96L 130 96L 156 96"></path><path id="SvgjsPath1440" d="M 0 68C 9.1 68 16.9 36 26 36C 35.1 36 42.9 56 52 56C 61.1 56 68.9 16 78 16C 87.1 16 94.9 56 104 56C 113.1 56 120.9 36 130 36C 139.1 36 146.9 36 156 36" fill="none" fill-opacity="1" stroke="#16b455" stroke-opacity="1" stroke-linecap="butt" stroke-width="4" stroke-dasharray="0" class="apexcharts-area" index="0" clip-path="url(#gridRectMasks179bfjh)" pathTo="M 0 68C 9.1 68 16.9 36 26 36C 35.1 36 42.9 56 52 56C 61.1 56 68.9 16 78 16C 87.1 16 94.9 56 104 56C 113.1 56 120.9 36 130 36C 139.1 36 146.9 36 156 36" pathFrom="M -1 96L -1 96L 26 96L 52 96L 78 96L 104 96L 130 96L 156 96"></path><g id="SvgjsG1437" class="apexcharts-series-markers-wrap" data:realIndex="0"></g></g><g id="SvgjsG1438" class="apexcharts-datalabels" data:realIndex="0"></g></g><line id="SvgjsLine1462" x1="0" y1="0" x2="156" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine1463" x1="0" y1="0" x2="156" y2="0" stroke-dasharray="0" stroke-width="0" class="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG1464" class="apexcharts-yaxis-annotations"></g><g id="SvgjsG1465" class="apexcharts-xaxis-annotations"></g><g id="SvgjsG1466" class="apexcharts-point-annotations"></g></g><g id="SvgjsG1450" class="apexcharts-yaxis" rel="0" transform="translate(-18, 0)"></g><g id="SvgjsG1431" class="apexcharts-annotations"></g></svg><div class="apexcharts-legend" style="max-height: 40px;"></div></div></div>
									<div class=" ms-3">
										<h6 class="fs-18 font-w600 mb-0 text-success">+2.4%</h6>
										<span class="fs-14 font-w400">Than last week</span>
									</div>
								<div class="resize-triggers"><div class="expand-trigger"><div style="width: 299px; height: 81px;"></div></div><div class="contract-trigger"></div></div></div>
							</div>
							<div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
								<div class="card trading mb-sm-0 mb-3" onclick="this.children[0].click()">
									<a onclick="activeBookings()" data-toggle="modal" data-target="#bookingsModal"></a>
									<div class="card-body">
										<div class="income-data d-flex justify-content-between align-items-center mb-sm-0 mb-2 ps-lg-0">
											<div>
												<h3 class="font-w600 fs-2 mb-0 text-white">45</h3>
												<span class="fs-6 font-w500 text-white">Active Bookings</span>
											</div>
											<span class="income-icon style-2">
												<svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M33.5 22.5C33.5 22.8978 33.342 23.2793 33.0607 23.5606C32.7794 23.8419 32.3978 24 32 24H14C13.6022 24 13.2206 23.8419 12.9393 23.5606C12.658 23.2793 12.5 22.8978 12.5 22.5C12.5 20.113 13.4482 17.8238 15.136 16.136C16.8239 14.4482 19.1131 13.5 21.5 13.5H24.5C26.8869 13.5 29.1761 14.4482 30.864 16.136C32.5518 17.8238 33.5 20.113 33.5 22.5ZM23 0C21.8133 0 20.6533 0.351893 19.6666 1.01118C18.6799 1.67047 17.9108 2.60754 17.4567 3.7039C17.0026 4.80025 16.8838 6.00665 17.1153 7.17053C17.3468 8.33442 17.9182 9.40352 18.7574 10.2426C19.5965 11.0817 20.6656 11.6532 21.8295 11.8847C22.9933 12.1162 24.1997 11.9974 25.2961 11.5433C26.3925 11.0891 27.3295 10.3201 27.9888 9.33341C28.6481 8.34672 29 7.18668 29 5.99999C29 4.4087 28.3679 2.88257 27.2426 1.75736C26.1174 0.63214 24.5913 0 23 0ZM9.5 0C8.31331 0 7.15327 0.351893 6.16658 1.01118C5.17988 1.67047 4.41085 2.60754 3.95672 3.7039C3.5026 4.80025 3.38378 6.00665 3.61529 7.17053C3.8468 8.33442 4.41824 9.40352 5.25736 10.2426C6.09647 11.0817 7.16557 11.6532 8.32946 11.8847C9.49334 12.1162 10.6997 11.9974 11.7961 11.5433C12.8925 11.0891 13.8295 10.3201 14.4888 9.33341C15.1481 8.34672 15.5 7.18668 15.5 5.99999C15.5 4.4087 14.8679 2.88257 13.7426 1.75736C12.6174 0.63214 11.0913 0 9.5 0ZM9.5 22.5C9.49777 20.9244 9.80818 19.364 10.4133 17.9093C11.0183 16.4545 11.9061 15.1342 13.025 14.025C12.1093 13.6793 11.1388 13.5014 10.16 13.5H8.84C6.62931 13.504 4.5103 14.3839 2.94711 15.9471C1.38391 17.5103 0.503965 19.6293 0.5 21.84V22.5C0.5 22.8978 0.658035 23.2793 0.93934 23.5606C1.22064 23.8419 1.60218 24 2 24H9.77C9.59537 23.519 9.50406 23.0117 9.5 22.5Z" fill="#FFFFFF"></path>
												</svg>
											</span>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
								<div class="card booking mb-0" style="background-color: #FAF8ED;" onclick="this.children[0].click()">
									<a onclick="slotsModal()" data-toggle="modal" data-target="#slotsModal"></a>
									<div class="card-body">
										<div class="income-data d-flex justify-content-between align-items-center mb-sm-0 mb-2  mb-sm-0 mb-2 ps-lg-0 ">
											<div>
												<h3 class="font-w600 fs-2 mb-0">195</h3>
												<span class="fs-6 font-w500">Slots</span>
											</div>
											<span class="income-icon style-3">
											<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M20.0734 0C15.6988 0 12.1485 3.54844 12.1485 7.92443C12.1485 9.14474 12.4477 10.2895 12.9391 11.3213L0.516482 23.7488C-0.172161 24.4374 -0.172161 25.5504 0.516482 26.239L1.76163 27.4841C2.09101 27.8152 2.53822 28 3.00678 28C3.47341 28 3.92084 27.8152 4.25193 27.4841L7.02037 24.7158L9.551 27.2516C9.88209 27.581 10.3292 27.7658 10.7962 27.7658C11.2648 27.7658 11.7119 27.5827 12.0413 27.2516L12.6649 26.6284C13.3535 25.9398 13.3535 24.8269 12.6649 24.1382L10.1306 21.6024L16.6763 15.0566C17.7118 15.5497 18.853 15.8489 20.0751 15.8489C24.453 15.8489 28 12.3004 28 7.92443C28 3.54844 24.4533 0 20.0734 0ZM20.0734 12.3269C17.6448 12.3269 15.6706 10.3509 15.6706 7.92443C15.6706 5.49796 17.6448 3.52197 20.0734 3.52197C22.502 3.52197 24.4761 5.49796 24.4761 7.92443C24.4761 10.3509 22.502 12.3269 20.0734 12.3269Z" fill="var(--primary)"></path>
											</svg>	
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				
				
				</div>
			</div>
		</div>
		<div class="row">
			${guestActivity()}
			<div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
				<div class="card availability line">
					<div class="card-header border-0">
						<h3>Rooms Availability</h3>	
					</div>
					<div class="card-body pb-2" style="position: relative;">
						<div id="analysisChart" style="min-height: 182.8px;">
						</div>
						<div class="d-flex justify-content-between pt-3 pt-sm-5 flex-wrap">
							<span><span class="pills-lable bg-dark me-2"></span>Available</span>
							<h4>66 Slots</h4>
						</div>
						<div class="d-flex justify-content-between flex-wrap">
							<span><span class="pills-lable me-2"></span>Booked</span>
							<h4>129 Slots</h4>
						</div>
						<div class="d-flex justify-content-between flex-wrap">
							<span><span class="pills-lable me-2"></span>Inactive</span>
							<h4>1 Slots</h4>
						</div>
					<div class="resize-triggers"><div class="expand-trigger"><div style="width: 330px; height: 346px;"></div></div><div class="contract-trigger"></div></div></div>
				</div>
			</div>
			
			<div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
				<div class="card">
					<div class="card-header border-0 pb-0">
						<h3 class="mb-0">Parkings</h3>	
					</div>
					<div class="card-body pt-2 pb-2" style="position: relative;">
						<h2 class="text">12,456</h2>
						<div id="columnChart" class="crd-coloum" style="min-height: 315px;">
						</div>
					<div class="resize-triggers"><div class="expand-trigger"><div style="width: 330px; height: 374px;"></div></div><div class="contract-trigger"></div></div></div>
				</div>
			</div>
		</div>
		
		<div class="row">
			
			<div class="col-xl-3">
				<div class="card">
					<div class="card-header border-0 pb-0">
						<h3>Parked List</h3>
						<a href="javascript:void(0);" class="btn btn-primary light btn-sm">More</a>
					</div>
					<div class="card-body">
						<div class="flex-column d-block nav-pills gap dz-scroll ps ps--active-y" id="Customerslist1">
							${parkedList()}
							
							
						<div class="ps__rail-x" style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 0px; height: 338px; left: 0px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 298px;"></div></div></div>
					</div>
				</div>
			</div>
		
			${analysisReviews()}
		</div>
		
	</div>
	`
	setTimeout(analysisChart(),1000)
	
}
const guestActivity =()=>{
	let el = `
		<div class="col-xl-6">
			<div class="card">
				<div class="card-header border-0 pb-0 flex-wrap">
					<h3 class="mb-1">Guest Activity</h3>
					<div class="card-action coin-tabs mt-3 mt-sm-0">
						<ul class="nav nav-tabs" role="tablist">
							<li class="nav-item">
								<a class="nav-link" data-bs-toggle="tab" href="?month" role="tab" aria-selected="false">Month</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" data-bs-toggle="tab" href="?weekly" role="tab" aria-selected="false">Weekly</a>
							</li>
							<li class="nav-item">
								<a class="nav-link active" data-bs-toggle="tab" href="?day" role="tab" aria-selected="true">Day</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="card-body pb-2">
					<div class="d-flex align-items-center mb-5">
						<div class="d-flex align-items-center flex-lg-wrap me-5 flex-wrap">
							<span class="me-3 d-flex align-items-center">
								<svg class="me-2" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect y="0.716797" width="12" height="12" rx="4" fill="var(--primary)"></rect>
								</svg>
								Check In
							</span>
							<h4 class="mb-0">457 Guest</h4>
						</div>
						<div class="d-flex align-items-center flex-lg-wrap flex-wrap">
							<span class=" squre me-3 d-flex align-items-center">
								<svg class="me-2" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect y="0.716797" width="12" height="12" rx="4" fill="#ff9d43"></rect>
								</svg>
								Check Out
							</span>
							<h4 class="mb-0">157 Guest</h4>
						</div>
					</div>
					<div class="tab-content">
						<div class="tab-pane active show" id="month" style="position: relative;">
							<div id="activityChart" class="reservationChart" style="min-height: 315px;"></div>
						<div class="resize-triggers"><div class="expand-trigger"><div style="width: 449px; height: 316px;"></div></div><div class="contract-trigger"></div></div></div>	
					</div>
				</div>
			</div>
		</div>
	`
	return el
}

const analysisReviews = () =>{
	let el = `
		<div class="col-xl-9">
			<div class="card">
				<div class="card-header border-0 pb-0 flex-wrap">
					<h3>Customer Reviews</h3>
					<div class="d-flex">
						<a href="javascript:void(0);" onclick="allReview()"class="btn btn-primary light text-nowrap">View more</a>
					</div>
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col-xl-4 col-sm-5"> 
							<div class="nav review-tab flex-column d-block nav-pills gap dz-scroll mb-3 ps ps--active-y" id="Customerslist2">
								<a href="#v-pills-bella" data-bs-toggle="pill" class="nav-link show active">
									<div class="d-flex guest-list">
										<img src="https://kamr.dexignlab.com/codeigniter/demo/public/assets/images/review1.jpg" alt="image">
										<div>
											<h4 class="m-0">Bella Morgan</h4>
											<span>24min ago</span>
										</div>
									</div>
								</a>
								<a href="#v-pills-louis" data-bs-toggle="pill" class="nav-link">
									<div class="d-flex guest-list">
										<img src="https://kamr.dexignlab.com/codeigniter/demo/public/assets/images/review2.jpg" alt="image">
										<div>
											<h4 class="m-0">Louis Pattinson</h4>
											<span>24min ago</span>
										</div>
									</div>
								</a>
								<a href="#v-pills-hans" data-bs-toggle="pill" class="nav-link">
									<div class="d-flex guest-list">
										<img src="https://kamr.dexignlab.com/codeigniter/demo/public/assets/images/review3.jpg" alt="image">
										<div>
											<h4 class="m-0">Hans Takeshi</h4>
											<span>24min ago</span>
										</div>
									</div>
								</a>
								
							<div class="ps__rail-x" style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 0px; height: 338px; left: 0px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 329px;"></div></div></div>
						</div>
						<div class="col-xl-8 col-sm-7">
							<div class="tab-content">
								
								<div id="v-pills-morgan" class="tab-pane r-tab fade active show">
									<h3>I love that room service</h3>
									<ul class="star-review">
										<li><i class="fas fa-star"></i></li>
										<li><i class="fas fa-star"></i></li>
										<li><i class="fas fa-star"></i></li>
										<li><i class="fas fa-star"></i></li>
									</ul>
									<p class="review-para mt-xl-4 mt-md-3 mt-sm-2 mt-2">
										We were totally refreshed and rejuvenated for the whole of next year and it was due to the relaxing stay at the hotel. The hotel is absolutely marvelous! We liked absolutely everything, starting from the breakfast through to the perfect room service including the cleanliness and extra services such as
									</p>
									<div>
										<a href="javascript:void(0);" class="btn btn-dark light border-0 mb-2 btn-sm">Great Service</a>
										<a href="javascript:void(0);" class="btn btn-dark light border-0 mb-2 btn-sm mx-xl-3 mx-md-0">Recomended</a>
										<a href="javascript:void(0);" class="btn btn-dark light border-0 mb-2 btn-sm ">Best Price</a>
									</div>
									<div class="d-flex align-items-center justify-content-between flex-md-wrap flex-sm-wrap flex-wrap mt-3 mt-sm-5 pt-xl-5 pt-lg-0 mb-0 mb-sm-0">
										<div class="d-flex guest-list mb-xl-0 mb-md-2 mb-sm-2 mb-2">
											<img src="https://kamr.dexignlab.com/codeigniter/demo/public/assets/images/review1.jpg" alt="image">
											<div>
												<h4 class="m-0">Bella Morgan</h4>
												<span>24min ago</span>
											</div>
										</div>
										<div>
											<a href="javascript:void(0);" class="btn btn-success border-0 me-sm-3 me-0">Accept
												<svg class="ms-2" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M10 0.5C4.50742 0.5 0 5.00742 0 10.5C0 15.9926 4.50742 20.5 10 20.5C15.4926 20.5 20 15.9926 20 10.5C20 5.00742 15.4926 0.5 10 0.5ZM8.7898 15.0484L4.4107 10.6694L6.06781 9.01227L8.86648 11.8109L14.485 6.70344L16.062 8.43723L8.7898 15.0484Z" fill="white"></path>
												</svg>
											</a>
											<a href="javascript:void(0);" class="btn btn-primary border-0">Reject
												<svg class="ms-2" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M10 0.5C4.50742 0.5 0 5.00742 0 10.5C0 15.9926 4.50742 20.5 10 20.5C15.4926 20.5 20 15.9926 20 10.5C20 5.00742 15.4926 0.5 10 0.5ZM14.9719 13.8148L13.3148 15.4719L10 12.1571L6.68523 15.4719L5.02812 13.8148L8.34289 10.5L5.02812 7.18523L6.68523 5.52812L10 8.84289L13.3148 5.52812L14.9719 7.18523L11.6571 10.5L14.9719 13.8148Z" fill="white"></path>
												</svg>
											</a>
										</div>
									</div>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	`
	return el
}

const analysisChart = () =>{
	
	var barColors = ["#FF7474", "#23274E"];
	var analysischart = new CanvasJS.Chart("analysisChart", {
		animationEnabled: true,
		title: {
			text: "Current Status"
		},
		data: [{
			type: "pie",
			startAngle: 240,
			yValueFormatString: "##0.00\"%\"",
			indexLabel: "{label} {y}",
			dataPoints: [
				{y: 75, label: "Booked"},
				{y: 35, label: "Available"},
				{y: 1, label: "Inactive"},
				
			]
		}]
	});
	analysischart.render();
	var chart = new CanvasJS.Chart("columnChart", {
		animationEnabled: true,
		theme: "light2", // "light1", "light2", "dark1", "dark2"
		title:{
			text: "Total "
		},
		axisY: {
			title: "Parkings"
		},
		data: [{        
			type: "column",  
			showInLegend: true, 
			legendMarkerColor: "grey",
			//legendText: "MMbbl = one million barrels",
			dataPoints: [      
				{ y: 800,  label: "Sunday" },
				{ y: 300, label: "Monday" },
				{ y: 266,  label: "Tuesday" },
				{ y: 169,  label: "Wednesday" },
				{ y: 158,  label: "Thursday" },
				{ y: 142,  label: "Friday" },
				{ y: 101, label: "Saturday" },
				
			]
		}]
	});
	chart.render();
	var activitychart = new CanvasJS.Chart("activityChart", {
		
		animationEnabled: true,
		
		axisY: {
			title: "Checkin",
			titleFontColor: "#4F81BC",
			lineColor: "#4F81BC",
			labelFontColor: "#4F81BC",
			tickColor: "#4F81BC"
		},
		axisY2: {
			title: "Checkout",
			titleFontColor: "#C0504E",
			lineColor: "#C0504E",
			labelFontColor: "#C0504E",
			tickColor: "#C0504E"
		},	
		toolTip: {
			shared: true
		},
		legend: {
			cursor:"pointer",
			
		},
		data: [{        
			type: "line",
			axisYIndex: 1,
			name: "Checkin",
			showInLegend: true,
			markerSize: 0,
			
			dataPoints: [
				{ x: new Date(2017, 00, 7), y: 84 }, 
				{ x: new Date(2017, 00, 14), y: 97 },
				{ x: new Date(2017, 00, 21), y: 69 },
				{ x: new Date(2017, 00, 28), y: 58 },
				{ x: new Date(2017, 01, 4), y: 64 },
				{ x: new Date(2017, 01, 11), y: 69 },
				{ x: new Date(2017, 01, 18), y: 89 }
				
			]
		},
		{        
			type: "line",
			axisYIndex: 0,
			name: "Checkout",
			showInLegend: true,
			markerSize: 0,
			
			dataPoints: [
				{ x: new Date(2017, 00, 7), y: 64 }, 
				{ x: new Date(2017, 00, 14), y: 77 },
				{ x: new Date(2017, 00, 21), y: 69 },
				{ x: new Date(2017, 00, 28), y: 50 },
				{ x: new Date(2017, 01, 4), y: 74 },
				{ x: new Date(2017, 01, 11), y: 59 },
				{ x: new Date(2017, 01, 18), y: 49 }
				
			]
		}
		
		]
	});
	activitychart.render()
}

function allReview(){
	const body = document.getElementById("page-content");
	body.innerHTML = `
		
		<div class="container-fluid">
		<button class="button-6 btn-back">Back</button>
		<div class="row">
			<div class="mt-3 mt-sm-0 d-inline-block d-sm-flex align-items-center justify-content-between mb-5">
				<div class="coin-tabs">
					<ul class="nav nav-tabs" id="myTab" role="tablist">
						<li class="nav-item" role="presentation">
						<button class="nav-link active" id="all-status-tab" data-bs-toggle="tab" data-bs-target="#all-status" type="button" role="tab" aria-controls="all-status" aria-selected="true">All Status</button>
						</li>
						<li class="nav-item" role="presentation">
						<button class="nav-link" id="published-tab" data-bs-toggle="tab" data-bs-target="#published" type="button" role="tab" aria-controls="published" aria-selected="false">published</button>
						</li>
						<li class="nav-item" role="presentation">
						<button class="nav-link" id="archived-tab" data-bs-toggle="tab" data-bs-target="#archived" type="button" role="tab" aria-controls="archived" aria-selected="false">Archived</button>
						</li>
					</ul>
				</div>
				
			</div>
			<div class="tab-content" id="myTabContent">
				<div class="tab-pane fade active show" id="all-status" role="tabpanel" aria-labelledby="all-status-tab">
					<div class="card">
						<div class="card-body">
							<div class="row">
								<div class="col-xl-3 col-lg-3">
									<div class="review-bx d-flex align-items-center">
										<div class="review-img">
											<img src="https://kamr.dexignlab.com/codeigniter/demo/public/assets/images/review-img/pic-1.jpg" alt="images">
										</div>
										<div class="review-content">
											<h2 class="font-w500">Zain Torff</h2>
											<p class="font-w400 m-0">#EMP-00025</p>
										</div>
									</div>
									<p class="review-date font-w400">Tuesday, January 24th 2021 at 2:56 AM</p>
								</div>
								<div class="col-xl-9 col-lg-9">
									<div class="description-bx d-inline-block d-sm-flex align-items-center">
										<div class="description-content">
											<h3 class="font-w500">I love that room service</h3>
											<p class=" sub-title font-w400 lh-2">We were totally refreshed and rejuvenated for the whole of next year and it was due to the relaxing stay at the hotel. The hotel is absolutely marvelous! We liked absolutely everything, starting from the breakfast through to the perfect room service including the cleanliness and extra services such as dry cleaning and laundry. In general all the staff at the hotel were professional, friendly and provided excellent service. We will return for sure</p>
											<div class="d-inline-block d-xl-flex align-items-center justify-content-between">
												<div class="badge-bx">
													<span class="btn btn-dark light border-0 btn-sm">Great Service</span>
													<span class="btn btn-dark light border-0 btn-sm">Recomended</span>
													<span class="btn btn-dark light border-0 btn-sm">Best Price</span>
												</div>
												<div class="button-bx mt-2 mt-xl-0">
													<button class="btn btn-success">Accept
														<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10 0C4.50742 0 0 4.50742 0 10C0 15.4926 4.50742 20 10 20C15.4926 20 20 15.4926 20 10C20 4.50742 15.4926 0 10 0ZM8.7898 14.5484L4.4107 10.1694L6.06781 8.51227L8.86648 11.3109L14.485 6.20344L16.062 7.93723L8.7898 14.5484Z" fill="white"></path>
														</svg>
													</button>
													<button class="btn btn-primary ms-sm-3 ms-0">Reject
														<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10 0C4.50742 0 0 4.50742 0 10C0 15.4926 4.50742 20 10 20C15.4926 20 20 15.4926 20 10C20 4.50742 15.4926 0 10 0ZM14.9719 13.3148L13.3148 14.9719L10 11.6571L6.68523 14.9719L5.02812 13.3148L8.34289 10L5.02812 6.68523L6.68523 5.02812L10 8.34289L13.3148 5.02812L14.9719 6.68523L11.6571 10L14.9719 13.3148Z" fill="white"></path>
														</svg>
													</button>
												</div>
											</div>
										</div>
										<div class="rating-bx">
											<div class="rating-content d-flex d-sm-block mt-2 mt-sm-0 d-flex d-sm-block mt-2 mt-sm-0">
												<h2 class="font-w600">4.1</h2>
												<ul class="d-flex">
													<li><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10.4423 1.09747L13.1198 6.52747C13.1549 6.59864 13.2066 6.66032 13.2706 6.70731C13.3345 6.75431 13.4089 6.78523 13.4873 6.79747L19.4873 7.66747C19.5753 7.68403 19.6573 7.72418 19.7243 7.78364C19.7913 7.8431 19.841 7.91964 19.8679 8.00509C19.8949 8.09055 19.8981 8.18172 19.8773 8.26887C19.8565 8.35603 19.8124 8.4359 19.7498 8.49997L15.4148 12.7225C15.3578 12.7782 15.315 12.8468 15.2902 12.9225C15.2654 12.9982 15.2593 13.0789 15.2723 13.1575L16.2923 19.1575C16.3118 19.2526 16.3029 19.3514 16.2667 19.4416C16.2304 19.5317 16.1685 19.6092 16.0885 19.6644C16.0085 19.7195 15.9141 19.75 15.817 19.7519C15.7199 19.7537 15.6243 19.727 15.5423 19.675L10.1873 16.855C10.1167 16.8182 10.0382 16.799 9.95854 16.799C9.87889 16.799 9.80042 16.8182 9.72979 16.855L4.41229 19.6525C4.33025 19.7045 4.23471 19.7312 4.13758 19.7294C4.04045 19.7275 3.94603 19.697 3.86607 19.6419C3.78611 19.5867 3.72415 19.5092 3.68791 19.4191C3.65168 19.3289 3.64276 19.2301 3.66229 19.135L4.68229 13.135C4.6953 13.0564 4.68915 12.9757 4.66434 12.9C4.63953 12.8243 4.5968 12.7557 4.53979 12.7L0.249786 8.49997C0.184967 8.43563 0.139215 8.35461 0.11759 8.26587C0.0959658 8.17714 0.0993131 8.08415 0.127262 7.9972C0.15521 7.91025 0.20667 7.83273 0.275947 7.77321C0.345224 7.71369 0.429616 7.6745 0.519786 7.65998L6.51978 6.78998C6.5982 6.77773 6.67252 6.74681 6.73648 6.69982C6.80044 6.65283 6.85216 6.59114 6.88729 6.51997L9.56479 1.08997C9.60734 1.01017 9.67094 0.943542 9.74869 0.897337C9.82644 0.851131 9.91537 0.827111 10.0058 0.827884C10.0962 0.828657 10.1847 0.854194 10.2617 0.901721C10.3386 0.949249 10.4011 1.01695 10.4423 1.09747Z" fill="#F66F4D"></path>
													</svg></li>
													<li><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10.4423 1.09747L13.1198 6.52747C13.1549 6.59864 13.2066 6.66032 13.2706 6.70731C13.3345 6.75431 13.4089 6.78523 13.4873 6.79747L19.4873 7.66747C19.5753 7.68403 19.6573 7.72418 19.7243 7.78364C19.7913 7.8431 19.841 7.91964 19.8679 8.00509C19.8949 8.09055 19.8981 8.18172 19.8773 8.26887C19.8565 8.35603 19.8124 8.4359 19.7498 8.49997L15.4148 12.7225C15.3578 12.7782 15.315 12.8468 15.2902 12.9225C15.2654 12.9982 15.2593 13.0789 15.2723 13.1575L16.2923 19.1575C16.3118 19.2526 16.3029 19.3514 16.2667 19.4416C16.2304 19.5317 16.1685 19.6092 16.0885 19.6644C16.0085 19.7195 15.9141 19.75 15.817 19.7519C15.7199 19.7537 15.6243 19.727 15.5423 19.675L10.1873 16.855C10.1167 16.8182 10.0382 16.799 9.95854 16.799C9.87889 16.799 9.80042 16.8182 9.72979 16.855L4.41229 19.6525C4.33025 19.7045 4.23471 19.7312 4.13758 19.7294C4.04045 19.7275 3.94603 19.697 3.86607 19.6419C3.78611 19.5867 3.72415 19.5092 3.68791 19.4191C3.65168 19.3289 3.64276 19.2301 3.66229 19.135L4.68229 13.135C4.6953 13.0564 4.68915 12.9757 4.66434 12.9C4.63953 12.8243 4.5968 12.7557 4.53979 12.7L0.249786 8.49997C0.184967 8.43563 0.139215 8.35461 0.11759 8.26587C0.0959658 8.17714 0.0993131 8.08415 0.127262 7.9972C0.15521 7.91025 0.20667 7.83273 0.275947 7.77321C0.345224 7.71369 0.429616 7.6745 0.519786 7.65998L6.51978 6.78998C6.5982 6.77773 6.67252 6.74681 6.73648 6.69982C6.80044 6.65283 6.85216 6.59114 6.88729 6.51997L9.56479 1.08997C9.60734 1.01017 9.67094 0.943542 9.74869 0.897337C9.82644 0.851131 9.91537 0.827111 10.0058 0.827884C10.0962 0.828657 10.1847 0.854194 10.2617 0.901721C10.3386 0.949249 10.4011 1.01695 10.4423 1.09747Z" fill="#F66F4D"></path>
													</svg></li>
													<li><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10.4423 1.09747L13.1198 6.52747C13.1549 6.59864 13.2066 6.66032 13.2706 6.70731C13.3345 6.75431 13.4089 6.78523 13.4873 6.79747L19.4873 7.66747C19.5753 7.68403 19.6573 7.72418 19.7243 7.78364C19.7913 7.8431 19.841 7.91964 19.8679 8.00509C19.8949 8.09055 19.8981 8.18172 19.8773 8.26887C19.8565 8.35603 19.8124 8.4359 19.7498 8.49997L15.4148 12.7225C15.3578 12.7782 15.315 12.8468 15.2902 12.9225C15.2654 12.9982 15.2593 13.0789 15.2723 13.1575L16.2923 19.1575C16.3118 19.2526 16.3029 19.3514 16.2667 19.4416C16.2304 19.5317 16.1685 19.6092 16.0885 19.6644C16.0085 19.7195 15.9141 19.75 15.817 19.7519C15.7199 19.7537 15.6243 19.727 15.5423 19.675L10.1873 16.855C10.1167 16.8182 10.0382 16.799 9.95854 16.799C9.87889 16.799 9.80042 16.8182 9.72979 16.855L4.41229 19.6525C4.33025 19.7045 4.23471 19.7312 4.13758 19.7294C4.04045 19.7275 3.94603 19.697 3.86607 19.6419C3.78611 19.5867 3.72415 19.5092 3.68791 19.4191C3.65168 19.3289 3.64276 19.2301 3.66229 19.135L4.68229 13.135C4.6953 13.0564 4.68915 12.9757 4.66434 12.9C4.63953 12.8243 4.5968 12.7557 4.53979 12.7L0.249786 8.49997C0.184967 8.43563 0.139215 8.35461 0.11759 8.26587C0.0959658 8.17714 0.0993131 8.08415 0.127262 7.9972C0.15521 7.91025 0.20667 7.83273 0.275947 7.77321C0.345224 7.71369 0.429616 7.6745 0.519786 7.65998L6.51978 6.78998C6.5982 6.77773 6.67252 6.74681 6.73648 6.69982C6.80044 6.65283 6.85216 6.59114 6.88729 6.51997L9.56479 1.08997C9.60734 1.01017 9.67094 0.943542 9.74869 0.897337C9.82644 0.851131 9.91537 0.827111 10.0058 0.827884C10.0962 0.828657 10.1847 0.854194 10.2617 0.901721C10.3386 0.949249 10.4011 1.01695 10.4423 1.09747Z" fill="#F66F4D"></path>
													</svg></li>
													<li><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10.4423 1.09747L13.1198 6.52747C13.1549 6.59864 13.2066 6.66032 13.2706 6.70731C13.3345 6.75431 13.4089 6.78523 13.4873 6.79747L19.4873 7.66747C19.5753 7.68403 19.6573 7.72418 19.7243 7.78364C19.7913 7.8431 19.841 7.91964 19.8679 8.00509C19.8949 8.09055 19.8981 8.18172 19.8773 8.26887C19.8565 8.35603 19.8124 8.4359 19.7498 8.49997L15.4148 12.7225C15.3578 12.7782 15.315 12.8468 15.2902 12.9225C15.2654 12.9982 15.2593 13.0789 15.2723 13.1575L16.2923 19.1575C16.3118 19.2526 16.3029 19.3514 16.2667 19.4416C16.2304 19.5317 16.1685 19.6092 16.0885 19.6644C16.0085 19.7195 15.9141 19.75 15.817 19.7519C15.7199 19.7537 15.6243 19.727 15.5423 19.675L10.1873 16.855C10.1167 16.8182 10.0382 16.799 9.95854 16.799C9.87889 16.799 9.80042 16.8182 9.72979 16.855L4.41229 19.6525C4.33025 19.7045 4.23471 19.7312 4.13758 19.7294C4.04045 19.7275 3.94603 19.697 3.86607 19.6419C3.78611 19.5867 3.72415 19.5092 3.68791 19.4191C3.65168 19.3289 3.64276 19.2301 3.66229 19.135L4.68229 13.135C4.6953 13.0564 4.68915 12.9757 4.66434 12.9C4.63953 12.8243 4.5968 12.7557 4.53979 12.7L0.249786 8.49997C0.184967 8.43563 0.139215 8.35461 0.11759 8.26587C0.0959658 8.17714 0.0993131 8.08415 0.127262 7.9972C0.15521 7.91025 0.20667 7.83273 0.275947 7.77321C0.345224 7.71369 0.429616 7.6745 0.519786 7.65998L6.51978 6.78998C6.5982 6.77773 6.67252 6.74681 6.73648 6.69982C6.80044 6.65283 6.85216 6.59114 6.88729 6.51997L9.56479 1.08997C9.60734 1.01017 9.67094 0.943542 9.74869 0.897337C9.82644 0.851131 9.91537 0.827111 10.0058 0.827884C10.0962 0.828657 10.1847 0.854194 10.2617 0.901721C10.3386 0.949249 10.4011 1.01695 10.4423 1.09747Z" fill="#F66F4D"></path>
													</svg></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div class="card">
						<div class="card-body">
							<div class="row review-action">
								<div class="col-xl-3 col-lg-3">
									<div class="review-bx d-flex align-items-center">
										<div class="review-img">
											<img src="https://kamr.dexignlab.com/codeigniter/demo/public/assets/images/review-img/pic-3.jpg" alt="images">
										</div>
										<div class="review-content">
											<h2 class="font-w500">Emery Dias</h2>
											<p class="font-w400 m-0">#EMP-00025</p>
										</div>
									</div>
									<p class="review-date font-w400">Tuesday, January 24th 2021 at 2:56 AM</p>
								</div>
								<div class="col-xl-9 col-lg-9">
									<div class="description-bx d-inline-block d-sm-flex align-items-center ">
										<div class="description-content">
											<h3 class="font-w500">Best Hotel In London! Recomended</h3>
											<p class="font-w400 sub-title lh-2">Error expedita voluptatibus et qui molestias numquam dolorem ullam voluptas. Quo error dicta corporis quo alias consequatur debitis aspernatur et. Cum magnam qui accusantium voluptatem. Cupiditate est odit eos suscipit consequatur. Qui voluptas qui iusto omnis tempore cupiditate ea natus voluptatibus.</p>
											<div class="d-inline-block d-xl-flex align-items-center justify-content-between">
												<div class="badge-bx">
													<span class="btn btn-dark light border-0 btn-sm">Great Service</span>
													<span class="btn btn-dark light border-0 btn-sm">Recomended</span>
													<span class="btn btn-dark light border-0 btn-sm">Best Price</span>
												</div>
												<div class="button-bx mt-2 mt-xl-0">
													<button class="btn btn-success">Accept
														<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10 0C4.50742 0 0 4.50742 0 10C0 15.4926 4.50742 20 10 20C15.4926 20 20 15.4926 20 10C20 4.50742 15.4926 0 10 0ZM8.7898 14.5484L4.4107 10.1694L6.06781 8.51227L8.86648 11.3109L14.485 6.20344L16.062 7.93723L8.7898 14.5484Z" fill="white"></path>
														</svg>
													</button>
													<button class="btn btn-primary ms-sm-3 ms-0">Reject
														<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10 0C4.50742 0 0 4.50742 0 10C0 15.4926 4.50742 20 10 20C15.4926 20 20 15.4926 20 10C20 4.50742 15.4926 0 10 0ZM14.9719 13.3148L13.3148 14.9719L10 11.6571L6.68523 14.9719L5.02812 13.3148L8.34289 10L5.02812 6.68523L6.68523 5.02812L10 8.34289L13.3148 5.02812L14.9719 6.68523L11.6571 10L14.9719 13.3148Z" fill="white"></path>
														</svg>
													</button>
												</div>
											</div>
										</div>
										<div class="rating-bx">
											<div class="rating-content d-flex d-sm-block mt-2 mt-sm-0 text-center">
												<h2 class="font-w600">4.5</h2>
												<ul class="d-flex">
													<li><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10.4423 1.09747L13.1198 6.52747C13.1549 6.59864 13.2066 6.66032 13.2706 6.70731C13.3345 6.75431 13.4089 6.78523 13.4873 6.79747L19.4873 7.66747C19.5753 7.68403 19.6573 7.72418 19.7243 7.78364C19.7913 7.8431 19.841 7.91964 19.8679 8.00509C19.8949 8.09055 19.8981 8.18172 19.8773 8.26887C19.8565 8.35603 19.8124 8.4359 19.7498 8.49997L15.4148 12.7225C15.3578 12.7782 15.315 12.8468 15.2902 12.9225C15.2654 12.9982 15.2593 13.0789 15.2723 13.1575L16.2923 19.1575C16.3118 19.2526 16.3029 19.3514 16.2667 19.4416C16.2304 19.5317 16.1685 19.6092 16.0885 19.6644C16.0085 19.7195 15.9141 19.75 15.817 19.7519C15.7199 19.7537 15.6243 19.727 15.5423 19.675L10.1873 16.855C10.1167 16.8182 10.0382 16.799 9.95854 16.799C9.87889 16.799 9.80042 16.8182 9.72979 16.855L4.41229 19.6525C4.33025 19.7045 4.23471 19.7312 4.13758 19.7294C4.04045 19.7275 3.94603 19.697 3.86607 19.6419C3.78611 19.5867 3.72415 19.5092 3.68791 19.4191C3.65168 19.3289 3.64276 19.2301 3.66229 19.135L4.68229 13.135C4.6953 13.0564 4.68915 12.9757 4.66434 12.9C4.63953 12.8243 4.5968 12.7557 4.53979 12.7L0.249786 8.49997C0.184967 8.43563 0.139215 8.35461 0.11759 8.26587C0.0959658 8.17714 0.0993131 8.08415 0.127262 7.9972C0.15521 7.91025 0.20667 7.83273 0.275947 7.77321C0.345224 7.71369 0.429616 7.6745 0.519786 7.65998L6.51978 6.78998C6.5982 6.77773 6.67252 6.74681 6.73648 6.69982C6.80044 6.65283 6.85216 6.59114 6.88729 6.51997L9.56479 1.08997C9.60734 1.01017 9.67094 0.943542 9.74869 0.897337C9.82644 0.851131 9.91537 0.827111 10.0058 0.827884C10.0962 0.828657 10.1847 0.854194 10.2617 0.901721C10.3386 0.949249 10.4011 1.01695 10.4423 1.09747Z" fill="#F66F4D"></path>
													</svg></li>
													<li><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10.4423 1.09747L13.1198 6.52747C13.1549 6.59864 13.2066 6.66032 13.2706 6.70731C13.3345 6.75431 13.4089 6.78523 13.4873 6.79747L19.4873 7.66747C19.5753 7.68403 19.6573 7.72418 19.7243 7.78364C19.7913 7.8431 19.841 7.91964 19.8679 8.00509C19.8949 8.09055 19.8981 8.18172 19.8773 8.26887C19.8565 8.35603 19.8124 8.4359 19.7498 8.49997L15.4148 12.7225C15.3578 12.7782 15.315 12.8468 15.2902 12.9225C15.2654 12.9982 15.2593 13.0789 15.2723 13.1575L16.2923 19.1575C16.3118 19.2526 16.3029 19.3514 16.2667 19.4416C16.2304 19.5317 16.1685 19.6092 16.0885 19.6644C16.0085 19.7195 15.9141 19.75 15.817 19.7519C15.7199 19.7537 15.6243 19.727 15.5423 19.675L10.1873 16.855C10.1167 16.8182 10.0382 16.799 9.95854 16.799C9.87889 16.799 9.80042 16.8182 9.72979 16.855L4.41229 19.6525C4.33025 19.7045 4.23471 19.7312 4.13758 19.7294C4.04045 19.7275 3.94603 19.697 3.86607 19.6419C3.78611 19.5867 3.72415 19.5092 3.68791 19.4191C3.65168 19.3289 3.64276 19.2301 3.66229 19.135L4.68229 13.135C4.6953 13.0564 4.68915 12.9757 4.66434 12.9C4.63953 12.8243 4.5968 12.7557 4.53979 12.7L0.249786 8.49997C0.184967 8.43563 0.139215 8.35461 0.11759 8.26587C0.0959658 8.17714 0.0993131 8.08415 0.127262 7.9972C0.15521 7.91025 0.20667 7.83273 0.275947 7.77321C0.345224 7.71369 0.429616 7.6745 0.519786 7.65998L6.51978 6.78998C6.5982 6.77773 6.67252 6.74681 6.73648 6.69982C6.80044 6.65283 6.85216 6.59114 6.88729 6.51997L9.56479 1.08997C9.60734 1.01017 9.67094 0.943542 9.74869 0.897337C9.82644 0.851131 9.91537 0.827111 10.0058 0.827884C10.0962 0.828657 10.1847 0.854194 10.2617 0.901721C10.3386 0.949249 10.4011 1.01695 10.4423 1.09747Z" fill="#F66F4D"></path>
													</svg></li>
													<li><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10.4423 1.09747L13.1198 6.52747C13.1549 6.59864 13.2066 6.66032 13.2706 6.70731C13.3345 6.75431 13.4089 6.78523 13.4873 6.79747L19.4873 7.66747C19.5753 7.68403 19.6573 7.72418 19.7243 7.78364C19.7913 7.8431 19.841 7.91964 19.8679 8.00509C19.8949 8.09055 19.8981 8.18172 19.8773 8.26887C19.8565 8.35603 19.8124 8.4359 19.7498 8.49997L15.4148 12.7225C15.3578 12.7782 15.315 12.8468 15.2902 12.9225C15.2654 12.9982 15.2593 13.0789 15.2723 13.1575L16.2923 19.1575C16.3118 19.2526 16.3029 19.3514 16.2667 19.4416C16.2304 19.5317 16.1685 19.6092 16.0885 19.6644C16.0085 19.7195 15.9141 19.75 15.817 19.7519C15.7199 19.7537 15.6243 19.727 15.5423 19.675L10.1873 16.855C10.1167 16.8182 10.0382 16.799 9.95854 16.799C9.87889 16.799 9.80042 16.8182 9.72979 16.855L4.41229 19.6525C4.33025 19.7045 4.23471 19.7312 4.13758 19.7294C4.04045 19.7275 3.94603 19.697 3.86607 19.6419C3.78611 19.5867 3.72415 19.5092 3.68791 19.4191C3.65168 19.3289 3.64276 19.2301 3.66229 19.135L4.68229 13.135C4.6953 13.0564 4.68915 12.9757 4.66434 12.9C4.63953 12.8243 4.5968 12.7557 4.53979 12.7L0.249786 8.49997C0.184967 8.43563 0.139215 8.35461 0.11759 8.26587C0.0959658 8.17714 0.0993131 8.08415 0.127262 7.9972C0.15521 7.91025 0.20667 7.83273 0.275947 7.77321C0.345224 7.71369 0.429616 7.6745 0.519786 7.65998L6.51978 6.78998C6.5982 6.77773 6.67252 6.74681 6.73648 6.69982C6.80044 6.65283 6.85216 6.59114 6.88729 6.51997L9.56479 1.08997C9.60734 1.01017 9.67094 0.943542 9.74869 0.897337C9.82644 0.851131 9.91537 0.827111 10.0058 0.827884C10.0962 0.828657 10.1847 0.854194 10.2617 0.901721C10.3386 0.949249 10.4011 1.01695 10.4423 1.09747Z" fill="#F66F4D"></path>
													</svg></li>
													<li><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10.4423 1.09747L13.1198 6.52747C13.1549 6.59864 13.2066 6.66032 13.2706 6.70731C13.3345 6.75431 13.4089 6.78523 13.4873 6.79747L19.4873 7.66747C19.5753 7.68403 19.6573 7.72418 19.7243 7.78364C19.7913 7.8431 19.841 7.91964 19.8679 8.00509C19.8949 8.09055 19.8981 8.18172 19.8773 8.26887C19.8565 8.35603 19.8124 8.4359 19.7498 8.49997L15.4148 12.7225C15.3578 12.7782 15.315 12.8468 15.2902 12.9225C15.2654 12.9982 15.2593 13.0789 15.2723 13.1575L16.2923 19.1575C16.3118 19.2526 16.3029 19.3514 16.2667 19.4416C16.2304 19.5317 16.1685 19.6092 16.0885 19.6644C16.0085 19.7195 15.9141 19.75 15.817 19.7519C15.7199 19.7537 15.6243 19.727 15.5423 19.675L10.1873 16.855C10.1167 16.8182 10.0382 16.799 9.95854 16.799C9.87889 16.799 9.80042 16.8182 9.72979 16.855L4.41229 19.6525C4.33025 19.7045 4.23471 19.7312 4.13758 19.7294C4.04045 19.7275 3.94603 19.697 3.86607 19.6419C3.78611 19.5867 3.72415 19.5092 3.68791 19.4191C3.65168 19.3289 3.64276 19.2301 3.66229 19.135L4.68229 13.135C4.6953 13.0564 4.68915 12.9757 4.66434 12.9C4.63953 12.8243 4.5968 12.7557 4.53979 12.7L0.249786 8.49997C0.184967 8.43563 0.139215 8.35461 0.11759 8.26587C0.0959658 8.17714 0.0993131 8.08415 0.127262 7.9972C0.15521 7.91025 0.20667 7.83273 0.275947 7.77321C0.345224 7.71369 0.429616 7.6745 0.519786 7.65998L6.51978 6.78998C6.5982 6.77773 6.67252 6.74681 6.73648 6.69982C6.80044 6.65283 6.85216 6.59114 6.88729 6.51997L9.56479 1.08997C9.60734 1.01017 9.67094 0.943542 9.74869 0.897337C9.82644 0.851131 9.91537 0.827111 10.0058 0.827884C10.0962 0.828657 10.1847 0.854194 10.2617 0.901721C10.3386 0.949249 10.4011 1.01695 10.4423 1.09747Z" fill="#F66F4D"></path>
													</svg></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-body">
							<div class="row">
								<div class="col-xl-3 col-lg-3">
									<div class="review-bx d-flex align-items-center">
										<div class="review-img">
											<img src="https://kamr.dexignlab.com/codeigniter/demo/public/assets/images/review-img/pic-4.jpg" alt="images">
										</div>
										<div class="review-content">
											<h2 class="font-w500">Livia Korsgaard</h2>
											<p class="font-w400 m-0">#EMP-00025</p>
										</div>
									</div>
									<p class="review-date font-w400">Tuesday, January 24th 2021 at 2:56 AM</p>
								</div>
								<div class="col-xl-9 col-lg-9">
									<div class="description-bx d-inline-block d-sm-flex align-items-center">
										<div class="description-content">
											<h3 class="font-w500">You Get Great View at the Top of Buildings</h3>
											<p class="font-w400 sub-title lh-2">Omnis adipisci molestias. Velit officia architecto voluptatibus. Harum excepturi laborum qui ut non ut nesciunt ea repellendus. Accusantium necessitatibus similique id dolorem id enim ut magnam deserunt. Sed aliquid qui quis praesentium asperiores deserunt laborum consequuntur explicabo.</p>
											<div class="d-inline-block d-xl-flex align-items-center justify-content-between">
												<div class="badge-bx">
													<span class="btn btn-dark light border-0 btn-sm">Great Service</span>
													<span class="btn btn-dark light border-0 btn-sm">Recomended</span>
													<span class="btn btn-dark light border-0 btn-sm">Best Price</span>
												</div>
												<div class="button-bx mt-2 mt-xl-0">
													<button class="btn btn-success light">Published
														<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M10 0C4.50742 0 0 4.50742 0 10C0 15.4926 4.50742 20 10 20C15.4926 20 20 15.4926 20 10C20 4.50742 15.4926 0 10 0ZM8.7898 14.5484L4.4107 10.1694L6.06781 8.51227L8.86648 11.3109L14.485 6.20344L16.062 7.93723L8.7898 14.5484Z" fill="#16B455"></path>
														</svg>
													</button>
													<button class="btn btn-outline-light ms-sm-3 ms-0">Archive</button>
												</div>
											</div>
										</div>
										<div class="rating-bx">
											<div class="rating-content d-flex d-sm-block mt-2 mt-sm-0 text-center">
												<h2 class="font-w600">3.4</h2>
												<ul class="d-flex">
													<li><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10.4423 1.09747L13.1198 6.52747C13.1549 6.59864 13.2066 6.66032 13.2706 6.70731C13.3345 6.75431 13.4089 6.78523 13.4873 6.79747L19.4873 7.66747C19.5753 7.68403 19.6573 7.72418 19.7243 7.78364C19.7913 7.8431 19.841 7.91964 19.8679 8.00509C19.8949 8.09055 19.8981 8.18172 19.8773 8.26887C19.8565 8.35603 19.8124 8.4359 19.7498 8.49997L15.4148 12.7225C15.3578 12.7782 15.315 12.8468 15.2902 12.9225C15.2654 12.9982 15.2593 13.0789 15.2723 13.1575L16.2923 19.1575C16.3118 19.2526 16.3029 19.3514 16.2667 19.4416C16.2304 19.5317 16.1685 19.6092 16.0885 19.6644C16.0085 19.7195 15.9141 19.75 15.817 19.7519C15.7199 19.7537 15.6243 19.727 15.5423 19.675L10.1873 16.855C10.1167 16.8182 10.0382 16.799 9.95854 16.799C9.87889 16.799 9.80042 16.8182 9.72979 16.855L4.41229 19.6525C4.33025 19.7045 4.23471 19.7312 4.13758 19.7294C4.04045 19.7275 3.94603 19.697 3.86607 19.6419C3.78611 19.5867 3.72415 19.5092 3.68791 19.4191C3.65168 19.3289 3.64276 19.2301 3.66229 19.135L4.68229 13.135C4.6953 13.0564 4.68915 12.9757 4.66434 12.9C4.63953 12.8243 4.5968 12.7557 4.53979 12.7L0.249786 8.49997C0.184967 8.43563 0.139215 8.35461 0.11759 8.26587C0.0959658 8.17714 0.0993131 8.08415 0.127262 7.9972C0.15521 7.91025 0.20667 7.83273 0.275947 7.77321C0.345224 7.71369 0.429616 7.6745 0.519786 7.65998L6.51978 6.78998C6.5982 6.77773 6.67252 6.74681 6.73648 6.69982C6.80044 6.65283 6.85216 6.59114 6.88729 6.51997L9.56479 1.08997C9.60734 1.01017 9.67094 0.943542 9.74869 0.897337C9.82644 0.851131 9.91537 0.827111 10.0058 0.827884C10.0962 0.828657 10.1847 0.854194 10.2617 0.901721C10.3386 0.949249 10.4011 1.01695 10.4423 1.09747Z" fill="#F66F4D"></path>
													</svg></li>
													<li><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10.4423 1.09747L13.1198 6.52747C13.1549 6.59864 13.2066 6.66032 13.2706 6.70731C13.3345 6.75431 13.4089 6.78523 13.4873 6.79747L19.4873 7.66747C19.5753 7.68403 19.6573 7.72418 19.7243 7.78364C19.7913 7.8431 19.841 7.91964 19.8679 8.00509C19.8949 8.09055 19.8981 8.18172 19.8773 8.26887C19.8565 8.35603 19.8124 8.4359 19.7498 8.49997L15.4148 12.7225C15.3578 12.7782 15.315 12.8468 15.2902 12.9225C15.2654 12.9982 15.2593 13.0789 15.2723 13.1575L16.2923 19.1575C16.3118 19.2526 16.3029 19.3514 16.2667 19.4416C16.2304 19.5317 16.1685 19.6092 16.0885 19.6644C16.0085 19.7195 15.9141 19.75 15.817 19.7519C15.7199 19.7537 15.6243 19.727 15.5423 19.675L10.1873 16.855C10.1167 16.8182 10.0382 16.799 9.95854 16.799C9.87889 16.799 9.80042 16.8182 9.72979 16.855L4.41229 19.6525C4.33025 19.7045 4.23471 19.7312 4.13758 19.7294C4.04045 19.7275 3.94603 19.697 3.86607 19.6419C3.78611 19.5867 3.72415 19.5092 3.68791 19.4191C3.65168 19.3289 3.64276 19.2301 3.66229 19.135L4.68229 13.135C4.6953 13.0564 4.68915 12.9757 4.66434 12.9C4.63953 12.8243 4.5968 12.7557 4.53979 12.7L0.249786 8.49997C0.184967 8.43563 0.139215 8.35461 0.11759 8.26587C0.0959658 8.17714 0.0993131 8.08415 0.127262 7.9972C0.15521 7.91025 0.20667 7.83273 0.275947 7.77321C0.345224 7.71369 0.429616 7.6745 0.519786 7.65998L6.51978 6.78998C6.5982 6.77773 6.67252 6.74681 6.73648 6.69982C6.80044 6.65283 6.85216 6.59114 6.88729 6.51997L9.56479 1.08997C9.60734 1.01017 9.67094 0.943542 9.74869 0.897337C9.82644 0.851131 9.91537 0.827111 10.0058 0.827884C10.0962 0.828657 10.1847 0.854194 10.2617 0.901721C10.3386 0.949249 10.4011 1.01695 10.4423 1.09747Z" fill="#F66F4D"></path>
													</svg></li>
													<li><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10.4423 1.09747L13.1198 6.52747C13.1549 6.59864 13.2066 6.66032 13.2706 6.70731C13.3345 6.75431 13.4089 6.78523 13.4873 6.79747L19.4873 7.66747C19.5753 7.68403 19.6573 7.72418 19.7243 7.78364C19.7913 7.8431 19.841 7.91964 19.8679 8.00509C19.8949 8.09055 19.8981 8.18172 19.8773 8.26887C19.8565 8.35603 19.8124 8.4359 19.7498 8.49997L15.4148 12.7225C15.3578 12.7782 15.315 12.8468 15.2902 12.9225C15.2654 12.9982 15.2593 13.0789 15.2723 13.1575L16.2923 19.1575C16.3118 19.2526 16.3029 19.3514 16.2667 19.4416C16.2304 19.5317 16.1685 19.6092 16.0885 19.6644C16.0085 19.7195 15.9141 19.75 15.817 19.7519C15.7199 19.7537 15.6243 19.727 15.5423 19.675L10.1873 16.855C10.1167 16.8182 10.0382 16.799 9.95854 16.799C9.87889 16.799 9.80042 16.8182 9.72979 16.855L4.41229 19.6525C4.33025 19.7045 4.23471 19.7312 4.13758 19.7294C4.04045 19.7275 3.94603 19.697 3.86607 19.6419C3.78611 19.5867 3.72415 19.5092 3.68791 19.4191C3.65168 19.3289 3.64276 19.2301 3.66229 19.135L4.68229 13.135C4.6953 13.0564 4.68915 12.9757 4.66434 12.9C4.63953 12.8243 4.5968 12.7557 4.53979 12.7L0.249786 8.49997C0.184967 8.43563 0.139215 8.35461 0.11759 8.26587C0.0959658 8.17714 0.0993131 8.08415 0.127262 7.9972C0.15521 7.91025 0.20667 7.83273 0.275947 7.77321C0.345224 7.71369 0.429616 7.6745 0.519786 7.65998L6.51978 6.78998C6.5982 6.77773 6.67252 6.74681 6.73648 6.69982C6.80044 6.65283 6.85216 6.59114 6.88729 6.51997L9.56479 1.08997C9.60734 1.01017 9.67094 0.943542 9.74869 0.897337C9.82644 0.851131 9.91537 0.827111 10.0058 0.827884C10.0962 0.828657 10.1847 0.854194 10.2617 0.901721C10.3386 0.949249 10.4011 1.01695 10.4423 1.09747Z" fill="#F66F4D"></path>
													</svg></li>
													<li><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10.4423 1.09747L13.1198 6.52747C13.1549 6.59864 13.2066 6.66032 13.2706 6.70731C13.3345 6.75431 13.4089 6.78523 13.4873 6.79747L19.4873 7.66747C19.5753 7.68403 19.6573 7.72418 19.7243 7.78364C19.7913 7.8431 19.841 7.91964 19.8679 8.00509C19.8949 8.09055 19.8981 8.18172 19.8773 8.26887C19.8565 8.35603 19.8124 8.4359 19.7498 8.49997L15.4148 12.7225C15.3578 12.7782 15.315 12.8468 15.2902 12.9225C15.2654 12.9982 15.2593 13.0789 15.2723 13.1575L16.2923 19.1575C16.3118 19.2526 16.3029 19.3514 16.2667 19.4416C16.2304 19.5317 16.1685 19.6092 16.0885 19.6644C16.0085 19.7195 15.9141 19.75 15.817 19.7519C15.7199 19.7537 15.6243 19.727 15.5423 19.675L10.1873 16.855C10.1167 16.8182 10.0382 16.799 9.95854 16.799C9.87889 16.799 9.80042 16.8182 9.72979 16.855L4.41229 19.6525C4.33025 19.7045 4.23471 19.7312 4.13758 19.7294C4.04045 19.7275 3.94603 19.697 3.86607 19.6419C3.78611 19.5867 3.72415 19.5092 3.68791 19.4191C3.65168 19.3289 3.64276 19.2301 3.66229 19.135L4.68229 13.135C4.6953 13.0564 4.68915 12.9757 4.66434 12.9C4.63953 12.8243 4.5968 12.7557 4.53979 12.7L0.249786 8.49997C0.184967 8.43563 0.139215 8.35461 0.11759 8.26587C0.0959658 8.17714 0.0993131 8.08415 0.127262 7.9972C0.15521 7.91025 0.20667 7.83273 0.275947 7.77321C0.345224 7.71369 0.429616 7.6745 0.519786 7.65998L6.51978 6.78998C6.5982 6.77773 6.67252 6.74681 6.73648 6.69982C6.80044 6.65283 6.85216 6.59114 6.88729 6.51997L9.56479 1.08997C9.60734 1.01017 9.67094 0.943542 9.74869 0.897337C9.82644 0.851131 9.91537 0.827111 10.0058 0.827884C10.0962 0.828657 10.1847 0.854194 10.2617 0.901721C10.3386 0.949249 10.4011 1.01695 10.4423 1.09747Z" fill="#d3d3d3"></path>
													</svg></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
		<div class="d-flex align-items-center justify-content-between flex-wrap">
			<div class="mb-sm-0 mb-3">
				<h5 class="mb-0">Showing 5 of 102 Data</h5>
			</div>
			<nav>
				<ul class="pagination pagination-gutter pagination-primary style-1">
					<li class="page-item page-indicator job-search-page">
						<a class="page-link" href="javascript:void(0)">Prev</a>
					</li>
					<li class="page-item active"><a class="page-link" href="javascript:void(0)">1</a>
					</li>
					<li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
					<li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
					<li class="page-item"><a class="page-link" href="javascript:void(0)">4</a></li>
					<li class="page-item page-indicator job-search-page">
						<a class="page-link" href="javascript:void(0)">Next</a>
					</li>
				</ul>
			</nav>
		</div>
	</div>
	`
}