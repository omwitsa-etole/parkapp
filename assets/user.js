var xValues = ["Completed","Refunded","Incomplete"];
var yValues = [75, 9, 14];
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
		  text: "Transaction analysis"
		}
	  }
	});
	
}

const payImgs = ["mpesa.jpg","airtel.jpg","visa.jpg"]
const payCards = () =>{
	let el = ""
	for(let i=1;i<4;i++){
		el += `
			<div onclick="methodDetails('${payImgs[i-1]}')" class="paycard flexrow" style="background-image:url(assets/images/icons/${payImgs[i-1]});object-fit:contain;">
				<div class="cardtext">Mode</div>
			</div>
		`;
	}
	
	return el
}



const visaPay = ()=>{
	let el = `
		<div class="col-md-7 col-lg-5 col-xl-4" style="min-width:100%;">
			<div class="card" style="border-radius: 15px;">
			  <div class="card-body p-4">
				<form>
				  <div class="d-flex justify-content-between align-items-center mb-3">
					<div class="form-outline">
					  <input type="text" id="typeText" class="form-control form-control-lg" siez="17"
						placeholder="1234 5678 9012 3457" minlength="19" maxlength="19" />
					  <label class="form-label" for="typeText">Card Number</label>
					</div>
					<img src="https://img.icons8.com/color/48/000000/visa.png" alt="visa" width="64px" />
				  </div>

				  <div class="d-flex justify-content-between align-items-center mb-4">
					<div class="form-outline">
					  <input type="text" id="typeName" class="form-control form-control-lg" siez="17"
						placeholder="Cardholder's Name" />
					  <label class="form-label" for="typeName">Cardholder's Name</label>
					</div>
				  </div>

				  <div class="d-flex justify-content-between align-items-center pb-2">
					<div class="form-outline">
					  <input type="text" id="typeExp" class="form-control form-control-lg" placeholder="MM/YYYY"
						size="7" id="exp" minlength="7" maxlength="7" />
					  <label class="form-label" for="typeExp">Expiration</label>
					</div>
					<div class="form-outline">
					  <input type="password" id="typeText2" class="form-control form-control-lg"
						placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3" />
					  <label class="form-label" for="typeText2">Cvv</label>
					</div>
					<button type="button" class="btn btn-info btn-lg btn-rounded">
					  <i class="fas fa-arrow-right"></i>
					</button>
				  </div>
				</form>
			  </div>
			</div>
		  </div>
	`
	return el
}

const mPay = ()=>{
	let el = `
		<div class="col-md-7 col-lg-5 col-xl-4" style="min-width:100%;">
			<div class="card" style="border-radius: 15px;">
			  <div class="card-body p-4">
				<form>
				  <div class="d-flex justify-content-between align-items-center mb-3">
					<div class="form-outline">
					  <input type="text" id="typeText" class="form-control form-control-lg" siez="17"
						placeholder="2547 5678 9012 34" minlength="19" maxlength="19" />
					  <label class="form-label" for="typeText">Mobile Number</label>
					</div>
					<img src="assets/images/icons/mpesa.jpg" alt="mpesa" width="64px" />
				  </div>

				  <div class="d-flex justify-content-between align-items-center mb-4">
					<div class="form-outline">
					  <input type="text" id="typeName" class="form-control form-control-lg" siez="17"
						placeholder="Owner's Name" />
					  <label class="form-label" for="typeName">Mobile's number Name</label>
					</div>
				  </div>

				  <div class="d-flex justify-content-between align-items-center mb-4">
					<div class="form-outline">
					  <input type="text" id="typeName" class="form-control form-control-lg" siez="17"
						placeholder="ID number" />
					  <label class="form-label" for="typeName">Id number</label>
					</div>
					<button type="button" class="btn btn-info btn-lg btn-rounded">
					  <i class="fas fa-arrow-right"></i>
					</button>
				  </div>
				</form>
			  </div>
			</div>
		  </div>
	`
	return el
}

function methodDetails(mode){
	let mod = mPay()
	if(mode.includes("visa")){
		mod = visaPay()
	}
	let html = `
		<div class="container" style="width:100%;">
			<div class="flexdisplay" style="width:100%;display:grid;place-items:center;">
				${mod}
			</div>
		</div>
	`
	const body =document.getElementById("newMethod");
	const title = body.getElementsByClassName("modal-title")
	const el = body.getElementsByClassName("modal-body")
	title[0].innerHTML = "Add Payment Method"
	el[0].innerHTML = html
	el[0].setAttribute("style","max-height:456px;overflow:auto;")
}

function newMethod(){
	let html = `
		<div class="container" style="width:100%;">
			<div class="flexdisplay" style="width:100%;">
				${payCards()}
			</div>
		</div>
	`
	const body =document.getElementById("newMethod");
	const title = body.getElementsByClassName("modal-title")
	const el = body.getElementsByClassName("modal-body")
	title[0].innerHTML = "New Payment Method"
	el[0].innerHTML = html
	el[0].setAttribute("style","max-height:456px;overflow:auto;")
}



function newVehicle(){	
	let html = `
		<div class="container" style="width:100%;">
			<div class="flexdisplay" style="width:100%;">
				<div class="col-md-7 col-lg-5 col-xl-4" style="min-width:100%;">
					<div class="card" style="border-radius: 15px;">
					  <div class="card-body p-4">
						<form>
						  <div class="d-flex justify-content-between align-items-center mb-3">
							<div class="form-outline">
							  <input type="text" id="typeText" class="form-control form-control-lg" siez="17"
								placeholder="KAA 123B" minlength="19" maxlength="19" />
							  <label class="form-label" for="typeText">Vehicle Registration</label>
							</div>
							<img src="assets/images/icons/vehicle.jpg" alt="car" width="64px" />
						  </div>

						  <div class="d-flex justify-content-between align-items-center mb-4">
							<div class="form-outline">
							  <input type="text" id="typeName" class="form-control form-control-lg" siez="17"
								placeholder="description" />
							  <label class="form-label" for="typeName">Vehicle Description</label>
							</div>
						  </div>

						  <div class="d-flex justify-content-between align-items-center pb-2">
							<div class="form-outline">
							  <input type="text" id="typeExp" class="form-control form-control-lg" placeholder="Color"
								size="7" id="exp" minlength="7" maxlength="7" />
							  <label class="form-label" for="typeExp">Color</label>
							</div>
							
							<button type="button" class="btn btn-info btn-lg btn-rounded" id="vehiclecreate">
							  <i class="fas fa-arrow-right"></i>
							</button>
						  </div>
						</form>
					  </div>
					</div>
				  </div>
			</div>
		</div>
	`
	const body =document.getElementById("newVehicle");
	const title = body.getElementsByClassName("modal-title")
	const el = body.getElementsByClassName("modal-body")
	title[0].innerHTML = "New Vehicle"
	el[0].innerHTML = html
	el[0].setAttribute("style","max-height:456px;overflow:auto;")
	$("vehiclecreate").click(()=>{
		//
	})
}

function enableFA(){
	let html = `
		<div class="container" style="width:100%;">
			<div class="flexdisplay" style="width:100%;">
				<div class="col-md-7 col-lg-5 col-xl-4" style="min-width:100%;">
					<div class="card" style="border-radius: 15px;">
					  <div class="card-body p-4">
						<form>
						  <div class="d-flex justify-content-between align-items-center mb-3">
							<div class="form-outline">
							  <input type="text" id="typeText" class="form-control form-control-lg" siez="17"
								placeholder="254712345678" minlength="9" maxlength="19" />
							  <label class="form-label" for="typeText">Mobile number</label>
							</div>
							<img src="assets/images/icons/2fa.jpg" alt="2fa" width="64px" />
						  </div>

						  <div class="d-flex justify-content-between align-items-center mb-4">
							<div class="form-outline">
							  <input type="text" id="typeName" class="form-control form-control-lg" siez="17"
								placeholder="Email address" />
							  <label class="form-label" for="typeName">Email</label>
							</div>
						  </div>

						  <div class="d-flex justify-content-between align-items-center pb-2">
							
							<button type="button" class="btn btn-info btn-lg btn-rounded" id="vehiclecreate">
							  <i class="fas fa-arrow-right"></i>
							</button>
						  </div>
						</form>
					  </div>
					</div>
				  </div>
			</div>
		</div>
	`
	const body =document.getElementById("enableFA");
	const title = body.getElementsByClassName("modal-title")
	const el = body.getElementsByClassName("modal-body")
	title[0].innerHTML = "Enable 2FA "
	el[0].innerHTML = html
	el[0].setAttribute("style","max-height:456px;overflow:auto;")
}