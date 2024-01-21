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

window.addEventListener("load",chartFunction);

function hardwarePage(){
	
	const body = document.getElementById("page-content");
	body.innerHTML = `
	<div >
	<h4>Hardware</h4>
	</div>
	`;
}

function analysisPage(){
	const body = document.getElementById("page-content");
	body.setAttribute("style","margin: 1% auto;")
	body.innerHTML = `

	<div class="container-fluid alterpos" style="position:absolute;top: -10%;max-width: 80%;">
		<div >
			<h4>Revenue Analysis</h4>
		</div>

		<div class="row">
			<div class="col">

				<div class="h-100">
					<div class="row mb-3 pb-1">
						<div class="col-12">
							<div class="d-flex align-items-lg-center flex-lg-row flex-column">
								<div class="flex-grow-1">
									<h4 class="fs-16 mb-1">Good Morning, Admin!</h4>
									<p class="text-muted mb-0">Here's what's happening with your parking
										today.</p>
								</div>
								<div class="mt-3 mt-lg-0">
									<form action="javascript:void(0);">
										<div class="row g-3 mb-0 align-items-center">
											<div class="col-sm-auto">
												<div class="input-group">
													<input type="text" class="form-control border dash-filter-picker flatpickr-input" id="analysis-date" readonly="readonly">
													<div class="input-group-text bg-primary border-primary text-white">
														<i class="fa fa-calendar-2-line"></i>
													</div>
												</div>
											</div>
											<!--end col-->
											<div class="col-auto">
												<button type="button" class="btn btn-soft-primary"><i class="fa fa-add-circle-line align-middle me-1"></i>
													Add Expense</button>
											</div>
											<!--end col-->
											<div class="col-auto">
												<button type="button" class="btn btn-soft-secondary btn-icon waves-effect waves-light layout-rightside-btn"><i class="fa fa-pulse-line"></i></button>
											</div>
											<!--end col-->
										</div>
										<!--end row-->
									</form>
								</div>
							</div><!-- end card header -->
						</div>
						<!--end col-->
					</div>
					<!--end row-->

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
							<div class="card card-animate">
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
											<a href="#" class="link-secondary text-decoration-underline">View all
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
							<div class="card card-animate">
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
											<a href="" class="link-secondary text-decoration-underline">See
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
						<div class="col-xl-8">
							<div class="card" style="min-width: 99%;">
								<div class="card-header align-items-center d-flex">
									<h4 class="card-title mb-0 flex-grow-1">Recent Bookings</h4>
									<div class="flex-shrink-0">
										<button type="button" class="btn btn-soft-primary btn-sm">
											<i class="fa fa-file-list-3-line align-middle"></i> Generate Report
										</button>
									</div>
								</div><!-- end card header -->

								<div class="card-body">
									<div class="table-responsive table-card">
										<table class="table table-borderless table-centered align-middle table-nowrap mb-0">
											<thead class="text-muted table-light">
												<tr>
													<th scope="col">Booking ID</th>
													<th scope="col">Customer</th>
													<th scope="col">Parking</th>
													<th scope="col">Amount</th>
													<th scope="col">Vehicle</th>
													<th scope="col">Status</th>
													
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<a href="apps-ecommerce-order-details.html" class="fw-medium link-primary">#VZ2112</a>
													</td>
													<td>
														<div class="d-flex align-items-center">
															<div class="flex-shrink-0 me-2">
																<img src="assets/images/users/avatar-1.jpg" alt="" class="avatar-xs rounded-circle">
															</div>
															<div class="flex-grow-1">Alex Smith</div>
														</div>
													</td>
													<td>Nairobi CBD</td>
													<td>
														<span class="text-success">$109.00</span>
													</td>
													<td>KCD 512D</td>
													<td>
														<span class="badge bg-success-subtle text-success">Paid</span>
													</td>
													
												</tr><!-- end tr -->
												

											</tbody><!-- end tbody -->
										</table><!-- end table -->
									</div>
								</div>
							</div> <!-- .card-->
						</div> <!-- .col-->
					</div>
					
					<div class="row" style="min-width: 99%;">     
						<div class="col-xl-6" style="min-width: 99%;">
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
					<div class="row" style="min-width: 99%;">
						<div class="col-xl-8">
							<div class="card" style="min-width: 99%;">
								<div class="card-header border-0 align-items-center d-flex">
									<h4 class="card-title mb-0 flex-grow-1">Revenue</h4>
									<div>
										<button type="button" class="btn btn-soft-secondary btn-sm">
											ALL
										</button>
										<button type="button" class="btn btn-soft-secondary btn-sm">
											1M
										</button>
										<button type="button" class="btn btn-soft-secondary btn-sm">
											6M
										</button>
										<button type="button" class="btn btn-soft-primary btn-sm">
											1Y
										</button>
									</div>
								</div><!-- end card header -->

								<div class="card-header p-0 border-0 bg-light-subtle">
									<div class="row g-0 text-center">
										<div class="col-6 col-sm-3">
											<div class="p-3 border border-dashed border-start-0">
												<h5 class="mb-1"><span class="counter-value" data-target="7585">7,585</span></h5>
												<p class="text-muted mb-0">Orders</p>
											</div>
										</div>
										<!--end col-->
										<div class="col-6 col-sm-3">
											<div class="p-3 border border-dashed border-start-0">
												<h5 class="mb-1">$<span class="counter-value" data-target="22.89">22.89</span>k</h5>
												<p class="text-muted mb-0">Earnings</p>
											</div>
										</div>
										<!--end col-->
										<div class="col-6 col-sm-3">
											<div class="p-3 border border-dashed border-start-0">
												<h5 class="mb-1"><span class="counter-value" data-target="367">367</span></h5>
												<p class="text-muted mb-0">Refunds</p>
											</div>
										</div>
										<!--end col-->
										<div class="col-6 col-sm-3">
											<div class="p-3 border border-dashed border-start-0 border-end-0">
												<h5 class="mb-1 text-primary"><span class="counter-value" data-target="18.92">18.92</span>%</h5>
												<p class="text-muted mb-0">Conversation Ratio</p>
											</div>
										</div>
										<!--end col-->
									</div>
								</div><!-- end card header -->

								<div class="card-body p-0 pb-2">
									<div class="w-100">
										<div id="customer_impression_charts" data-colors="[&quot;--vz-light&quot;, &quot;--vz-primary&quot;, &quot;--vz-info&quot;]" class="apex-charts" dir="ltr" style="min-height: 385px;"><div id="apexchartsrt859wy7" class="apexcharts-canvas apexchartsrt859wy7 apexcharts-theme-light" style="width: 682px; height: 370px;"><svg id="SvgjsSvg1634" width="682" height="370" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg apexcharts-zoomable" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><foreignObject x="0" y="0" width="682" height="370"><div class="apexcharts-legend apexcharts-align-center apx-legend-position-bottom" xmlns="http://www.w3.org/1999/xhtml" style="inset: auto 0px 10px 20px; position: absolute; max-height: 185px;"><div class="apexcharts-legend-series" rel="1" seriesname="Orders" data:collapsed="false" style="margin: 0px 10px;"><span class="apexcharts-legend-marker" rel="1" data:collapsed="false" style="background: rgb(243, 246, 249) !important; color: rgb(243, 246, 249); height: 9px; width: 9px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 6px;"></span><span class="apexcharts-legend-text" rel="1" i="0" data:default-text="Orders" data:collapsed="false" style="color: rgb(55, 61, 63); font-size: 12px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;">Orders</span></div><div class="apexcharts-legend-series" rel="2" seriesname="Earnings" data:collapsed="false" style="margin: 0px 10px;"><span class="apexcharts-legend-marker" rel="2" data:collapsed="false" style="background: rgb(37, 160, 226) !important; color: rgb(37, 160, 226); height: 9px; width: 9px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 6px;"></span><span class="apexcharts-legend-text" rel="2" i="1" data:default-text="Earnings" data:collapsed="false" style="color: rgb(55, 61, 63); font-size: 12px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;">Earnings</span></div><div class="apexcharts-legend-series" rel="3" seriesname="Refunds" data:collapsed="false" style="margin: 0px 10px;"><span class="apexcharts-legend-marker" rel="3" data:collapsed="false" style="background: rgb(50, 204, 255) !important; color: rgb(50, 204, 255); height: 9px; width: 9px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 6px;"></span><span class="apexcharts-legend-text" rel="3" i="2" data:default-text="Refunds" data:collapsed="false" style="color: rgb(55, 61, 63); font-size: 12px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;">Refunds</span></div></div><style type="text/css">	

.apexcharts-legend {	
display: flex;	
overflow: auto;	
padding: 0 10px;	
}	
.apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {	
flex-wrap: wrap	
}	
.apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {	
flex-direction: column;	
bottom: 0;	
}	
.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {	
justify-content: flex-start;	
}	
.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {	
justify-content: center;  	
}	
.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {	
justify-content: flex-end;	
}	
.apexcharts-legend-series {	
cursor: pointer;	
line-height: normal;	
}	
.apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{	
display: flex;	
align-items: center;	
}	
.apexcharts-legend-text {	
position: relative;	
font-size: 14px;	
}	
.apexcharts-legend-text *, .apexcharts-legend-marker * {	
pointer-events: none;	
}	
.apexcharts-legend-marker {	
position: relative;	
display: inline-block;	
cursor: pointer;	
margin-right: 3px;	
border-style: solid;
}	

.apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{	
display: inline-block;	
}	
.apexcharts-legend-series.apexcharts-no-click {	
cursor: auto;	
}	
.apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {	
display: none !important;	
}	
.apexcharts-inactive-legend {	
opacity: 0.45;	
}</style></foreignObject><rect id="SvgjsRect1639" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect><g id="SvgjsG1741" class="apexcharts-yaxis" rel="0" transform="translate(31.34375, 0)"><g id="SvgjsG1742" class="apexcharts-yaxis-texts-g"><text id="SvgjsText1744" font-family="Helvetica, Arial, sans-serif" x="20" y="31.4" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1745">120.00</tspan><title>120.00</title></text><text id="SvgjsText1747" font-family="Helvetica, Arial, sans-serif" x="20" y="97.52350000000001" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1748">90.00</tspan><title>90.00</title></text><text id="SvgjsText1750" font-family="Helvetica, Arial, sans-serif" x="20" y="163.64700000000002" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1751">60.00</tspan><title>60.00</title></text><text id="SvgjsText1753" font-family="Helvetica, Arial, sans-serif" x="20" y="229.77050000000003" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1754">30.00</tspan><title>30.00</title></text><text id="SvgjsText1756" font-family="Helvetica, Arial, sans-serif" x="20" y="295.894" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1757">0.00</tspan><title>0.00</title></text></g></g><g id="SvgjsG1636" class="apexcharts-inner apexcharts-graphical" transform="translate(79.48799715909091, 30)"><defs id="SvgjsDefs1635"><clipPath id="gridRectMaskrt859wy7"><rect id="SvgjsRect1641" width="619.13359375" height="266.694" x="-19.24424715909091" y="-1.1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMaskrt859wy7"></clipPath><clipPath id="nonForecastMaskrt859wy7"></clipPath><clipPath id="gridRectMarkerMaskrt859wy7"><rect id="SvgjsRect1642" width="584.6450994318182" height="268.494" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><line id="SvgjsLine1640" x1="0" y1="0" x2="0" y2="264.494" stroke="#b6b6b6" stroke-dasharray="3" stroke-linecap="butt" class="apexcharts-xcrosshairs" x="0" y="0" width="1" height="264.494" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1"></line><g id="SvgjsG1683" class="apexcharts-grid"><g id="SvgjsG1684" class="apexcharts-gridlines-horizontal"></g><g id="SvgjsG1685" class="apexcharts-gridlines-vertical"><line id="SvgjsLine1687" x1="0" y1="0" x2="0" y2="264.494" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1688" x1="52.785918130165285" y1="0" x2="52.785918130165285" y2="264.494" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1689" x1="105.57183626033057" y1="0" x2="105.57183626033057" y2="264.494" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1690" x1="158.35775439049587" y1="0" x2="158.35775439049587" y2="264.494" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1691" x1="211.14367252066114" y1="0" x2="211.14367252066114" y2="264.494" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1692" x1="263.9295906508264" y1="0" x2="263.9295906508264" y2="264.494" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1693" x1="316.7155087809917" y1="0" x2="316.7155087809917" y2="264.494" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1694" x1="369.50142691115695" y1="0" x2="369.50142691115695" y2="264.494" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1695" x1="422.2873450413222" y1="0" x2="422.2873450413222" y2="264.494" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1696" x1="475.0732631714875" y1="0" x2="475.0732631714875" y2="264.494" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1697" x1="527.8591813016528" y1="0" x2="527.8591813016528" y2="264.494" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1698" x1="580.6450994318182" y1="0" x2="580.6450994318182" y2="264.494" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line></g><line id="SvgjsLine1700" x1="0" y1="264.494" x2="580.6450994318182" y2="264.494" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line><line id="SvgjsLine1699" x1="0" y1="1" x2="0" y2="264.494" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line></g><g id="SvgjsG1643" class="apexcharts-area-series apexcharts-plot-series"><g id="SvgjsG1644" class="apexcharts-series" seriesName="Orders" data:longestSeries="true" rel="1" data:realIndex="0"><path id="SvgjsPath1647" d="M 0 264.494 L 0 189.55403333333334 L 52.785918130165285 121.2264166666667 L 105.57183626033057 163.10463333333337 L 158.35775439049587 114.61406666666667 L 211.14367252066114 156.49228333333335 L 263.9295906508264 130.04288333333335 L 316.71550878099174 171.92110000000002 L 369.501426911157 167.5128666666667 L 422.2873450413223 92.5729 L 475.0732631714876 149.87993333333335 L 527.8591813016528 125.63465000000002 L 580.6450994318182 116.81818333333334 L 580.6450994318182 264.494M 580.6450994318182 116.81818333333334z" fill="rgba(243,246,249,0.1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" class="apexcharts-area" index="0" clip-path="url(#gridRectMaskrt859wy7)" pathTo="M 0 264.494 L 0 189.55403333333334 L 52.785918130165285 121.2264166666667 L 105.57183626033057 163.10463333333337 L 158.35775439049587 114.61406666666667 L 211.14367252066114 156.49228333333335 L 263.9295906508264 130.04288333333335 L 316.71550878099174 171.92110000000002 L 369.501426911157 167.5128666666667 L 422.2873450413223 92.5729 L 475.0732631714876 149.87993333333335 L 527.8591813016528 125.63465000000002 L 580.6450994318182 116.81818333333334 L 580.6450994318182 264.494M 580.6450994318182 116.81818333333334z" pathFrom="M -1 264.494 L -1 264.494 L 52.785918130165285 264.494 L 105.57183626033057 264.494 L 158.35775439049587 264.494 L 211.14367252066114 264.494 L 263.9295906508264 264.494 L 316.71550878099174 264.494 L 369.501426911157 264.494 L 422.2873450413223 264.494 L 475.0732631714876 264.494 L 527.8591813016528 264.494 L 580.6450994318182 264.494"></path><path id="SvgjsPath1648" d="M 0 189.55403333333334 L 52.785918130165285 121.2264166666667 L 105.57183626033057 163.10463333333337 L 158.35775439049587 114.61406666666667 L 211.14367252066114 156.49228333333335 L 263.9295906508264 130.04288333333335 L 316.71550878099174 171.92110000000002 L 369.501426911157 167.5128666666667 L 422.2873450413223 92.5729 L 475.0732631714876 149.87993333333335 L 527.8591813016528 125.63465000000002 L 580.6450994318182 116.81818333333334" fill="none" fill-opacity="1" stroke="#f3f6f9" stroke-opacity="1" stroke-linecap="butt" stroke-width="2" stroke-dasharray="0" class="apexcharts-area" index="0" clip-path="url(#gridRectMaskrt859wy7)" pathTo="M 0 189.55403333333334 L 52.785918130165285 121.2264166666667 L 105.57183626033057 163.10463333333337 L 158.35775439049587 114.61406666666667 L 211.14367252066114 156.49228333333335 L 263.9295906508264 130.04288333333335 L 316.71550878099174 171.92110000000002 L 369.501426911157 167.5128666666667 L 422.2873450413223 92.5729 L 475.0732631714876 149.87993333333335 L 527.8591813016528 125.63465000000002 L 580.6450994318182 116.81818333333334" pathFrom="M -1 264.494 L -1 264.494 L 52.785918130165285 264.494 L 105.57183626033057 264.494 L 158.35775439049587 264.494 L 211.14367252066114 264.494 L 263.9295906508264 264.494 L 316.71550878099174 264.494 L 369.501426911157 264.494 L 422.2873450413223 264.494 L 475.0732631714876 264.494 L 527.8591813016528 264.494 L 580.6450994318182 264.494" fill-rule="evenodd"></path><g id="SvgjsG1645" class="apexcharts-series-markers-wrap apexcharts-hidden-element-shown" data:realIndex="0"><g class="apexcharts-series-markers"><circle id="SvgjsCircle1761" r="0" cx="0" cy="0" class="apexcharts-marker wceinssma" stroke="#ffffff" fill="#f3f6f9" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="0"></circle></g></g></g></g><g id="SvgjsG1649" class="apexcharts-bar-series apexcharts-plot-series"><g id="SvgjsG1650" class="apexcharts-series" rel="1" seriesName="Earnings" data:realIndex="1"><path id="SvgjsPath1655" d="M -7.917887719524792 264.495 L -7.917887719524792 67.77758750000001 L 7.917887719524792 67.77758750000001 L 7.917887719524792 264.495 Z" fill="rgba(37,160,226,0.9)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaskrt859wy7)" pathTo="M -7.917887719524792 264.495 L -7.917887719524792 67.77758750000001 L 7.917887719524792 67.77758750000001 L 7.917887719524792 264.495 Z" pathFrom="M -7.917887719524792 264.495 L -7.917887719524792 264.495 L 7.917887719524792 264.495 L 7.917887719524792 264.495 L 7.917887719524792 264.495 L 7.917887719524792 264.495 L 7.917887719524792 264.495 L -7.917887719524792 264.495 Z" cy="67.7765875" cx="7.917887719524792" j="0" val="89.25" barHeight="196.71741250000002" barWidth="15.835775439049584"></path><path id="SvgjsPath1657" d="M 44.86803041064049 264.495 L 44.86803041064049 47.21317900000002 L 60.70380584969008 47.21317900000002 L 60.70380584969008 264.495 Z" fill="rgba(37,160,226,0.9)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaskrt859wy7)" pathTo="M 44.86803041064049 264.495 L 44.86803041064049 47.21317900000002 L 60.70380584969008 47.21317900000002 L 60.70380584969008 264.495 Z" pathFrom="M 44.86803041064049 264.495 L 44.86803041064049 264.495 L 60.70380584969008 264.495 L 60.70380584969008 264.495 L 60.70380584969008 264.495 L 60.70380584969008 264.495 L 60.70380584969008 264.495 L 44.86803041064049 264.495 Z" cy="47.21217900000002" cx="60.70380584969008" j="1" val="98.58" barHeight="217.281821" barWidth="15.835775439049584"></path><path id="SvgjsPath1659" d="M 97.65394854080577 264.495 L 97.65394854080577 112.98402033333338 L 113.48972397985536 112.98402033333338 L 113.48972397985536 264.495 Z" fill="rgba(37,160,226,0.9)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaskrt859wy7)" pathTo="M 97.65394854080577 264.495 L 97.65394854080577 112.98402033333338 L 113.48972397985536 112.98402033333338 L 113.48972397985536 264.495 Z" pathFrom="M 97.65394854080577 264.495 L 97.65394854080577 264.495 L 113.48972397985536 264.495 L 113.48972397985536 264.495 L 113.48972397985536 264.495 L 113.48972397985536 264.495 L 113.48972397985536 264.495 L 97.65394854080577 264.495 Z" cy="112.98302033333337" cx="113.48972397985536" j="2" val="68.74" barHeight="151.51097966666666" barWidth="15.835775439049584"></path><path id="SvgjsPath1661" d="M 150.43986667097107 264.495 L 150.43986667097107 24.532818499999987 L 166.27564211002067 24.532818499999987 L 166.27564211002067 264.495 Z" fill="rgba(37,160,226,0.9)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaskrt859wy7)" pathTo="M 150.43986667097107 264.495 L 150.43986667097107 24.532818499999987 L 166.27564211002067 24.532818499999987 L 166.27564211002067 264.495 Z" pathFrom="M 150.43986667097107 264.495 L 150.43986667097107 264.495 L 166.27564211002067 264.495 L 166.27564211002067 264.495 L 166.27564211002067 264.495 L 166.27564211002067 264.495 L 166.27564211002067 264.495 L 150.43986667097107 264.495 Z" cy="24.531818499999986" cx="166.27564211002067" j="3" val="108.87" barHeight="239.96218150000004" barWidth="15.835775439049584"></path><path id="SvgjsPath1663" d="M 203.22578480113634 264.495 L 203.22578480113634 93.58779366666667 L 219.06156024018594 93.58779366666667 L 219.06156024018594 264.495 Z" fill="rgba(37,160,226,0.9)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaskrt859wy7)" pathTo="M 203.22578480113634 264.495 L 203.22578480113634 93.58779366666667 L 219.06156024018594 93.58779366666667 L 219.06156024018594 264.495 Z" pathFrom="M 203.22578480113634 264.495 L 203.22578480113634 264.495 L 219.06156024018594 264.495 L 219.06156024018594 264.495 L 219.06156024018594 264.495 L 219.06156024018594 264.495 L 219.06156024018594 264.495 L 203.22578480113634 264.495 Z" cy="93.58679366666667" cx="219.06156024018594" j="4" val="77.54" barHeight="170.90720633333336" barWidth="15.835775439049584"></path><path id="SvgjsPath1665" d="M 256.0117029313016 264.495 L 256.0117029313016 79.28307650000002 L 271.8474783703512 79.28307650000002 L 271.8474783703512 264.495 Z" fill="rgba(37,160,226,0.9)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaskrt859wy7)" pathTo="M 256.0117029313016 264.495 L 256.0117029313016 79.28307650000002 L 271.8474783703512 79.28307650000002 L 271.8474783703512 264.495 Z" pathFrom="M 256.0117029313016 264.495 L 256.0117029313016 264.495 L 271.8474783703512 264.495 L 271.8474783703512 264.495 L 271.8474783703512 264.495 L 271.8474783703512 264.495 L 271.8474783703512 264.495 L 256.0117029313016 264.495 Z" cy="79.28207650000002" cx="271.8474783703512" j="5" val="84.03" barHeight="185.2119235" barWidth="15.835775439049584"></path><path id="SvgjsPath1667" d="M 308.79762106146694 264.495 L 308.79762106146694 151.55606200000003 L 324.63339650051654 151.55606200000003 L 324.63339650051654 264.495 Z" fill="rgba(37,160,226,0.9)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaskrt859wy7)" pathTo="M 308.79762106146694 264.495 L 308.79762106146694 151.55606200000003 L 324.63339650051654 151.55606200000003 L 324.63339650051654 264.495 Z" pathFrom="M 308.79762106146694 264.495 L 308.79762106146694 264.495 L 324.63339650051654 264.495 L 324.63339650051654 264.495 L 324.63339650051654 264.495 L 324.63339650051654 264.495 L 324.63339650051654 264.495 L 308.79762106146694 264.495 Z" cy="151.55506200000002" cx="324.63339650051654" j="6" val="51.24" barHeight="112.93893800000001" barWidth="15.835775439049584"></path><path id="SvgjsPath1669" d="M 361.5835391916322 264.495 L 361.5835391916322 201.52338683333338 L 377.4193146306818 201.52338683333338 L 377.4193146306818 264.495 Z" fill="rgba(37,160,226,0.9)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaskrt859wy7)" pathTo="M 361.5835391916322 264.495 L 361.5835391916322 201.52338683333338 L 377.4193146306818 201.52338683333338 L 377.4193146306818 264.495 Z" pathFrom="M 361.5835391916322 264.495 L 361.5835391916322 264.495 L 377.4193146306818 264.495 L 377.4193146306818 264.495 L 377.4193146306818 264.495 L 377.4193146306818 264.495 L 377.4193146306818 264.495 L 361.5835391916322 264.495 Z" cy="201.52238683333337" cx="377.4193146306818" j="7" val="28.57" barHeight="62.97161316666667" barWidth="15.835775439049584"></path><path id="SvgjsPath1671" d="M 414.3694573217975 264.495 L 414.3694573217975 60.4599201666667 L 430.2052327608471 60.4599201666667 L 430.2052327608471 264.495 Z" fill="rgba(37,160,226,0.9)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaskrt859wy7)" pathTo="M 414.3694573217975 264.495 L 414.3694573217975 60.4599201666667 L 430.2052327608471 60.4599201666667 L 430.2052327608471 264.495 Z" pathFrom="M 414.3694573217975 264.495 L 414.3694573217975 264.495 L 430.2052327608471 264.495 L 430.2052327608471 264.495 L 430.2052327608471 264.495 L 430.2052327608471 264.495 L 430.2052327608471 264.495 L 414.3694573217975 264.495 Z" cy="60.4589201666667" cx="430.2052327608471" j="8" val="92.57" barHeight="204.03507983333333" barWidth="15.835775439049584"></path><path id="SvgjsPath1673" d="M 467.1553754519628 264.495 L 467.1553754519628 171.12861800000005 L 482.9911508910124 171.12861800000005 L 482.9911508910124 264.495 Z" fill="rgba(37,160,226,0.9)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaskrt859wy7)" pathTo="M 467.1553754519628 264.495 L 467.1553754519628 171.12861800000005 L 482.9911508910124 171.12861800000005 L 482.9911508910124 264.495 Z" pathFrom="M 467.1553754519628 264.495 L 467.1553754519628 264.495 L 482.9911508910124 264.495 L 482.9911508910124 264.495 L 482.9911508910124 264.495 L 482.9911508910124 264.495 L 482.9911508910124 264.495 L 467.1553754519628 264.495 Z" cy="171.12761800000004" cx="482.9911508910124" j="9" val="42.36" barHeight="93.366382" barWidth="15.835775439049584"></path><path id="SvgjsPath1675" d="M 519.9412935821281 264.495 L 519.9412935821281 69.40863383333334 L 535.7770690211777 69.40863383333334 L 535.7770690211777 264.495 Z" fill="rgba(37,160,226,0.9)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaskrt859wy7)" pathTo="M 519.9412935821281 264.495 L 519.9412935821281 69.40863383333334 L 535.7770690211777 69.40863383333334 L 535.7770690211777 264.495 Z" pathFrom="M 519.9412935821281 264.495 L 519.9412935821281 264.495 L 535.7770690211777 264.495 L 535.7770690211777 264.495 L 535.7770690211777 264.495 L 535.7770690211777 264.495 L 535.7770690211777 264.495 L 519.9412935821281 264.495 Z" cy="69.40763383333334" cx="535.7770690211777" j="10" val="88.51" barHeight="195.0863661666667" barWidth="15.835775439049584"></path><path id="SvgjsPath1677" d="M 572.7272117122934 264.495 L 572.7272117122934 183.8904535 L 588.562987151343 183.8904535 L 588.562987151343 264.495 Z" fill="rgba(37,160,226,0.9)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaskrt859wy7)" pathTo="M 572.7272117122934 264.495 L 572.7272117122934 183.8904535 L 588.562987151343 183.8904535 L 588.562987151343 264.495 Z" pathFrom="M 572.7272117122934 264.495 L 572.7272117122934 264.495 L 588.562987151343 264.495 L 588.562987151343 264.495 L 588.562987151343 264.495 L 588.562987151343 264.495 L 588.562987151343 264.495 L 572.7272117122934 264.495 Z" cy="183.8894535" cx="588.562987151343" j="11" val="36.57" barHeight="80.60454650000001" barWidth="15.835775439049584"></path><g id="SvgjsG1652" class="apexcharts-bar-goals-markers" style="pointer-events: none"><g id="SvgjsG1654" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskrt859wy7)"></g><g id="SvgjsG1656" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskrt859wy7)"></g><g id="SvgjsG1658" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskrt859wy7)"></g><g id="SvgjsG1660" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskrt859wy7)"></g><g id="SvgjsG1662" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskrt859wy7)"></g><g id="SvgjsG1664" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskrt859wy7)"></g><g id="SvgjsG1666" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskrt859wy7)"></g><g id="SvgjsG1668" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskrt859wy7)"></g><g id="SvgjsG1670" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskrt859wy7)"></g><g id="SvgjsG1672" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskrt859wy7)"></g><g id="SvgjsG1674" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskrt859wy7)"></g><g id="SvgjsG1676" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskrt859wy7)"></g></g><g id="SvgjsG1653" class="apexcharts-bar-shadows apexcharts-hidden-element-shown" style="pointer-events: none"></g></g></g><g id="SvgjsG1678" class="apexcharts-line-series apexcharts-plot-series"><g id="SvgjsG1679" class="apexcharts-series" seriesName="Refunds" data:longestSeries="true" rel="1" data:realIndex="2"><path id="SvgjsPath1682" d="M 0 246.8610666666667 L 52.785918130165285 238.04460000000003 L 105.57183626033057 249.06518333333335 L 158.35775439049587 227.02401666666668 L 211.14367252066114 218.20755000000003 L 263.9295906508264 240.2487166666667 L 316.71550878099174 253.4734166666667 L 369.501426911157 244.65695000000002 L 422.2873450413223 249.06518333333335 L 475.0732631714876 200.57461666666669 L 527.8591813016528 238.04460000000003 L 580.6450994318182 187.34991666666667" fill="none" fill-opacity="1" stroke="rgba(50,204,255,1)" stroke-opacity="1" stroke-linecap="butt" stroke-width="2.2" stroke-dasharray="8" class="apexcharts-line" index="2" clip-path="url(#gridRectMaskrt859wy7)" pathTo="M 0 246.8610666666667 L 52.785918130165285 238.04460000000003 L 105.57183626033057 249.06518333333335 L 158.35775439049587 227.02401666666668 L 211.14367252066114 218.20755000000003 L 263.9295906508264 240.2487166666667 L 316.71550878099174 253.4734166666667 L 369.501426911157 244.65695000000002 L 422.2873450413223 249.06518333333335 L 475.0732631714876 200.57461666666669 L 527.8591813016528 238.04460000000003 L 580.6450994318182 187.34991666666667" pathFrom="M -1 264.494 L -1 264.494 L 52.785918130165285 264.494 L 105.57183626033057 264.494 L 158.35775439049587 264.494 L 211.14367252066114 264.494 L 263.9295906508264 264.494 L 316.71550878099174 264.494 L 369.501426911157 264.494 L 422.2873450413223 264.494 L 475.0732631714876 264.494 L 527.8591813016528 264.494 L 580.6450994318182 264.494" fill-rule="evenodd"></path><g id="SvgjsG1680" class="apexcharts-series-markers-wrap apexcharts-hidden-element-shown" data:realIndex="2"><g class="apexcharts-series-markers"><circle id="SvgjsCircle1762" r="0" cx="0" cy="0" class="apexcharts-marker w6gz4i0pc" stroke="#ffffff" fill="#32ccff" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="0"></circle></g></g></g><g id="SvgjsG1646" class="apexcharts-datalabels" data:realIndex="0"></g><g id="SvgjsG1651" class="apexcharts-datalabels apexcharts-hidden-element-shown" data:realIndex="1"></g><g id="SvgjsG1681" class="apexcharts-datalabels" data:realIndex="2"></g></g><g id="SvgjsG1686" class="apexcharts-grid-borders"></g><line id="SvgjsLine1701" x1="-16.14424715909091" y1="0" x2="596.7893465909091" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine1702" x1="-16.14424715909091" y1="0" x2="596.7893465909091" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG1703" class="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG1704" class="apexcharts-xaxis-texts-g" transform="translate(0, -4)"><text id="SvgjsText1706" font-family="Helvetica, Arial, sans-serif" x="0" y="293.494" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1707">Jan</tspan><title>Jan</title></text><text id="SvgjsText1709" font-family="Helvetica, Arial, sans-serif" x="52.78591813016529" y="293.494" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1710">Feb</tspan><title>Feb</title></text><text id="SvgjsText1712" font-family="Helvetica, Arial, sans-serif" x="105.57183626033057" y="293.494" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1713">Mar</tspan><title>Mar</title></text><text id="SvgjsText1715" font-family="Helvetica, Arial, sans-serif" x="158.35775439049584" y="293.494" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1716">Apr</tspan><title>Apr</title></text><text id="SvgjsText1718" font-family="Helvetica, Arial, sans-serif" x="211.1436725206611" y="293.494" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1719">May</tspan><title>May</title></text><text id="SvgjsText1721" font-family="Helvetica, Arial, sans-serif" x="263.92959065082636" y="293.494" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1722">Jun</tspan><title>Jun</title></text><text id="SvgjsText1724" font-family="Helvetica, Arial, sans-serif" x="316.7155087809916" y="293.494" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1725">Jul</tspan><title>Jul</title></text><text id="SvgjsText1727" font-family="Helvetica, Arial, sans-serif" x="369.5014269111569" y="293.494" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1728">Aug</tspan><title>Aug</title></text><text id="SvgjsText1730" font-family="Helvetica, Arial, sans-serif" x="422.28734504132217" y="293.494" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1731">Sep</tspan><title>Sep</title></text><text id="SvgjsText1733" font-family="Helvetica, Arial, sans-serif" x="475.07326317148744" y="293.494" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1734">Oct</tspan><title>Oct</title></text><text id="SvgjsText1736" font-family="Helvetica, Arial, sans-serif" x="527.8591813016527" y="293.494" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1737">Nov</tspan><title>Nov</title></text><text id="SvgjsText1739" font-family="Helvetica, Arial, sans-serif" x="580.645099431818" y="293.494" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1740">Dec</tspan><title>Dec</title></text></g></g><g id="SvgjsG1758" class="apexcharts-yaxis-annotations"></g><g id="SvgjsG1759" class="apexcharts-xaxis-annotations"></g><g id="SvgjsG1760" class="apexcharts-point-annotations"></g><rect id="SvgjsRect1763" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe" class="apexcharts-zoom-rect"></rect><rect id="SvgjsRect1764" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe" class="apexcharts-selection-rect"></rect></g></svg><div class="apexcharts-tooltip apexcharts-theme-light"><div class="apexcharts-tooltip-title" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div><div class="apexcharts-tooltip-series-group" style="order: 1;"><span class="apexcharts-tooltip-marker" style="background-color: rgb(243, 246, 249);"></span><div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label"></span><span class="apexcharts-tooltip-text-y-value"></span></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label"></span><span class="apexcharts-tooltip-text-goals-value"></span></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span></div></div></div><div class="apexcharts-tooltip-series-group" style="order: 2;"><span class="apexcharts-tooltip-marker" style="background-color: rgb(37, 160, 226);"></span><div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label"></span><span class="apexcharts-tooltip-text-y-value"></span></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label"></span><span class="apexcharts-tooltip-text-goals-value"></span></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span></div></div></div><div class="apexcharts-tooltip-series-group" style="order: 3;"><span class="apexcharts-tooltip-marker" style="background-color: rgb(50, 204, 255);"></span><div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label"></span><span class="apexcharts-tooltip-text-y-value"></span></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label"></span><span class="apexcharts-tooltip-text-goals-value"></span></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span></div></div></div></div><div class="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light"><div class="apexcharts-xaxistooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div></div><div class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div class="apexcharts-yaxistooltip-text"></div></div></div></div>
									</div>
								</div><!-- end card body -->
							</div><!-- end card -->
						</div><!-- end col -->

					   
						<!-- end col -->
					</div>

				  
				</div> <!-- end .h-100-->

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