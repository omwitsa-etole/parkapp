function analysisPage(){
	const body = document.getElementById("page-content");
	body.setAttribute("style","margin: 1% auto;")
	body.innerHTML = `

	<div class="container-fluid alterpos" style="position:absolute;top: 1%;max-width: 80%;">
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
							<div class="card card-animate">
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
											<a href="" class="link-secondary text-decoration-underline">Withdraw
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