function rateSettings(){
	const rates = ["hourly","flat","extension"]
	const availableRates = ()=>{
		let row = "";
		for(let i = 1;i<=rates.length;i++){
			let switchid = "switch_tds"+i
			let id = ""+i
			row += "<div class='flexrow'>"
			row += `
				<div class="container py-5">
					<div class="row d-flex justify-content-center">
					  <div class="col-md-8 col-lg-6 col-xl-4" style="width:90%;">
						<div class="card rounded-3">
						  <div class="card-body mx-1 my-2">
							<div class="onoffswitch">
								<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id=${switchid}>
								<label class="onoffswitch-label" for=${switchid}>
								<span class="onoffswitch-inner"></span>
								<span class="onoffswitch-switch"></span>
								</label>
							</div>
							<div class="d-flex align-items-center">
							  <div>
								<i class=""></i>
							  </div>
							  <div>
								<p class="d-flex flex-column mb-0">
								  <b>${rates[i-1].toUpperCase()}</b><span class="small text-muted">rate</span>
								</p>
							  </div>
							</div>

							<div class="pt-3">
							  <div class="d-flex flex-row pb-3">
								<div class="rounded border border-primary border-2 d-flex w-100 p-3 align-items-center"
								  style="background-color: rgba(18, 101, 241, 0.07);">
								  <div class="d-flex align-items-center pe-3">
									<input class="form-check-input" type="radio" name=${"radioNoLabelX"+id} id=${"radioNoLabel"+id}
									  value="" aria-label="..." checked />
								  </div>
								  <div class="d-flex flex-column">
									<p class="mb-1 small text-primary">Total amount paid</p>
									<h6 class="mb-0 text-primary">$8245</h6>
								  </div>
								</div>
							  </div>

							  <div class="d-flex flex-row pb-3">
								<div class="rounded border border-primary border-2 d-flex w-100 p-3 align-items-center"
								  style="background-color: rgba(18, 101, 241, 0.07);">
								  <div class="d-flex align-items-center pe-3">
									<input class="form-check-input" type="radio" name=${"radioNoLabelY"+id} id=${"radioNoLabel"+id}
									  value="" aria-label="..." checked />
								  </div>
								  <div class="d-flex flex-column">
									<p class="mb-1 small text-primary">Rate Value</p>
									<h6 class="mb-0 text-primary">$</h6>
									<input type="text" class="form-control form-control-sm" id="numberExample"
										style="width: 55px;" />
								  </div>
								</div>
							  </div>
							</div>

							<div class="d-flex justify-content-between align-items-center pb-1">
							  <a href="javascript:void(0)" class="text-muted">Delete</a>
							  <button type="button" class="btn btn-primary btn-lg">Save</button>
							</div>
						  </div>
						</div>
					  </div>
					</div>
				  </div>
			`;	
			row+="</div>"
		 }
		return row;
	}
	const body = document.getElementById("page-content");
	body.innerHTML = `
		<div class="content container-fluid" style="margin-top:9%;margin-left:5%;">
		<div class="row">
			<div class="h3 card-title with-switch" style="width:89%;margin-left:15%;">
			Rate Settings&nbsp; <small class="form-text text-muted">Availabe</small>
			<div class="form-group" style="position:absolute;right:5%;margin-top:-45px;">
			<input class="addnew addsave" type="button" value="Save" />
			<input class="addnew" type="button" value="Add New" id="addnew"/>

			</div>
			</div>
			<div class="flexdisplay textleft" id="availablepayment">
			${availableRates()}
			</div>
			
		</div>
	`;
	$("#addnew").click(()=>{
		let id = Math.floor(Math.random() * 999);
		id = ""+id
		const el = document.createElement("div")
		el.setAttribute("class","floating")
		el.setAttribute("id",id)
		el.innerHTML = `
			<div class="" style="width:100%;margin-left:0;" style="position:relative;">

				<div class="flex" id="paymenttab">

				<div class="row row-sm">
					
					<div class="col-sm-4">
						<div class="form-group">
						 <label>Name *</label>
						<input class="form-control" type="text">
						</div>
					</div>
				<div class="col-sm-4">
				<div class="form-group">
				<label>Account *</label>
				<input class="form-control" type="text">
				</div>
				</div>
				<div class="col-sm-2">
				<div class="form-group">
				<label>Paybill</label>
				<input class="form-control" type="text">
				</div>
				</div>
				<div class="col-sm-2">

				<label class="d-none d-sm-block">&nbsp;</label>
				<button class="btn btn-danger w-100 set-btn form-control" type="button" onclick="deletePayment(this.parentElement.parentElement)"><i class="fa fa-trash-o"></i></button>

				</div>
				</div>

				</div>
				<div class="row row-sm">
					<div class="col-sm-2 ms-auto">
						<div class="form-group">
							<button class="btn btn-primary w-100 form-control" type="button" id="addpayment"><i class="fa fa-plus"></i></button>
						</div>
					</div>
				</div>

				<div class="" style="position:absolute;bottom:4%;left:0;width:100%;display:flex;align-items:center;z-index:2;">
							<button class="btn btn-primary w-100 form-control" type="button" onclick="deletePayment(document.getElementById(${id}))" style="background:#23232b;">Cancel</button>
							<button class="btn btn-primary w-100 form-control" type="button" style="float:right;"><i class="fa fa-file"></i> Save</button>						
				</div>
			</div>
		`;
		body.appendChild(el)
	})
}

function paymentPage(){
	const body = document.getElementById("page-content")
	const availablePayment = ()=>{
		let row = "";
		for(let i = 1;i<5;i++){
			let switchid = "switch_tds"+i
			let id = ""+i
			row += "<div class='flexrow'>"
			row += `
				<div class="container py-5">
					<div class="row d-flex justify-content-center">
					  <div class="col-md-8 col-lg-6 col-xl-4" style="width:90%;">
						<div class="card rounded-3">
						  <div class="card-body mx-1 my-2">
							<div class="onoffswitch">
								<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id=${switchid}>
								<label class="onoffswitch-label" for=${switchid}>
								<span class="onoffswitch-inner"></span>
								<span class="onoffswitch-switch"></span>
								</label>
							</div>
							<div class="d-flex align-items-center">
							  <div>
								<i class="fab fa-cc-visa fa-4x text-black pe-3"></i>
							  </div>
							  <div>
								<p class="d-flex flex-column mb-0">
								  <b>Martina Thomas</b><span class="small text-muted">**** 8880</span>
								</p>
							  </div>
							</div>

							<div class="pt-3">
							  <div class="d-flex flex-row pb-3">
								<div class="rounded border border-primary border-2 d-flex w-100 p-3 align-items-center"
								  style="background-color: rgba(18, 101, 241, 0.07);">
								  <div class="d-flex align-items-center pe-3">
									<input class="form-check-input" type="radio" name=${"radioNoLabelX"+id} id=${"radioNoLabel"+id}
									  value="" aria-label="..." checked />
								  </div>
								  <div class="d-flex flex-column">
									<p class="mb-1 small text-primary">Total amount paid</p>
									<h6 class="mb-0 text-primary">$8245</h6>
								  </div>
								</div>
							  </div>

							  <div class="d-flex flex-row pb-3">
								<div class="rounded border border-primary border-2 d-flex w-100 p-3 align-items-center"
								  style="background-color: rgba(18, 101, 241, 0.07);">
								  <div class="d-flex align-items-center pe-3">
									<input class="form-check-input" type="radio" name=${"radioNoLabelY"+id} id=${"radioNoLabel"+id}
									  value="" aria-label="..." checked />
								  </div>
								  <div class="d-flex flex-column">
									<p class="mb-1 small text-primary">Available Funds</p>
									<h6 class="mb-0 text-primary">$8245</h6>
								  </div>
								</div>
							  </div>
							</div>

							<div class="d-flex justify-content-between align-items-center pb-1">
							  <a href="javascript:void(0)" class="text-muted">Delete</a>
							  <button type="button" class="btn btn-primary btn-lg">Withdraw</button>
							</div>
						  </div>
						</div>
					  </div>
					</div>
				  </div>
			`;	
			row+="</div>"
		 }
		return row;
	}
	body.innerHTML = `
<div class="content container-fluid" style="margin-top:11%;margin-left:5%;">
<div class="row">
<div class="h3 card-title with-switch" style="width:89%;margin-left:15%;">
Payment Modes&nbsp; <small class="form-text text-muted">Availabe</small>
<div class="form-group" style="position:absolute;right:5%;margin-top:-45px;">
<input class="addnew addsave" type="button" value="Save" />
<input class="addnew" type="button" value="Add New" id="addnew"/>

</div>
</div>
<div class="flexdisplay textleft" id="availablepayment">
${availablePayment()}
</div>
</div>


</div>
	`;
	$("#addnew").click(()=>{
		let id = Math.floor(Math.random() * 999);
		id = ""+id
		const el = document.createElement("div")
		el.setAttribute("class","floating")
		el.setAttribute("id",id)
		el.innerHTML = `
			<div class="" style="width:100%;margin-left:0;" style="position:relative;">

				<div class="flex" id="paymenttab">

				<div class="row row-sm">
					
					<div class="col-sm-4">
						<div class="form-group">
						 <label>Name *</label>
						<input class="form-control" type="text">
						</div>
					</div>
				<div class="col-sm-4">
				<div class="form-group">
				<label>Account *</label>
				<input class="form-control" type="text">
				</div>
				</div>
				<div class="col-sm-2">
				<div class="form-group">
				<label>Paybill</label>
				<input class="form-control" type="text">
				</div>
				</div>
				<div class="col-sm-2">

				<label class="d-none d-sm-block">&nbsp;</label>
				<button class="btn btn-danger w-100 set-btn form-control" type="button" onclick="deletePayment(this.parentElement.parentElement)"><i class="fa fa-trash-o"></i></button>

				</div>
				</div>

				</div>
				<div class="row row-sm">
					<div class="col-sm-2 ms-auto">
						<div class="form-group">
							<button class="btn btn-primary w-100 form-control" type="button" id="addpayment"><i class="fa fa-plus"></i></button>
						</div>
					</div>
				</div>

				<div class="" style="position:absolute;bottom:4%;left:0;width:100%;display:flex;align-items:center;z-index:2;">
							<button class="btn btn-primary w-100 form-control" type="button" onclick="deletePayment(document.getElementById(${id}))" style="background:#23232b;">Cancel</button>
							<button class="btn btn-primary w-100 form-control" type="button" style="float:right;"><i class="fa fa-file"></i> Save</button>						
				</div>
			</div>
		`;
		body.appendChild(el)
		$("#addpayment").click(()=>{
			document.getElementById("paymenttab").innerHTML += `
				<div class="row row-sm" >
				<div class="col-sm-4">
				<div class="form-group">
				 <label>Name *</label>
				<input class="form-control" type="text">
				</div>
				</div>
				<div class="col-sm-4">
				<div class="form-group">
				<label>Account *</label>
				<input class="form-control" type="text">
				</div>
				</div>
				<div class="col-sm-2">
				<div class="form-group">
				<label>Paybill </label>
				<input class="form-control" type="text">
				</div>
				</div>
				<div class="col-sm-2">
				<label class="d-none d-sm-block">&nbsp;</label>
				<button class="btn btn-danger w-100 set-btn form-control" type="button" onclick="deletePayment(this.parentElement.parentElement)"><i class="fa fa-trash-o"></i></button>
				</div>
				</div>
			`;
		})
	})
	
}
function deletePayment(el){
	el.remove()
}