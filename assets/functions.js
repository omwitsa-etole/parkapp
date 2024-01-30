let EL = document.getElementById("pageRoot");
const body = EL;

const layouts = ["Parallel","Angled","Single Level Lots","Multi-Level Lots"];
const rates = ["hourly","flat"]
var currentTab = 0;

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tabs");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n > (x.length)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
	document.getElementById("nextBtn").setAttribute("type", "Submit");
	document.getElementById("nextBtn").removeAttribute("onclick");
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tabs");
  // Exit the function if any field in the current tab is invalid:
  
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  console.log(currentTab,x.length)
  if (currentTab === x.length) {
    //...the form gets submitted:
    //document.getElementById("regForm").submit();
	currentTab = currentTab-1;
	newParking()
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
  
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tabs");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

const startFunction =(e)=>{
	EL = document.getElementById("pageRoot");
	
}
window.addEventListener("load",startFunction);

function addParking(){
	addnewPage()
	
}

const loadActivity = () =>{
	res = `<ul class="setting-options">`
	const activity = [1,2,3,4]
	for(const a of activity){
		res+=`
			<li value="slot" onclick="newModal(this.value)">Add Slot </li>
		`;
	}
	res += "</ul>"
	return res
}

function newParking(){
	
	const body =document.getElementById("page-content");
	let id = Math.floor(Math.random() * 999);
	id = ""+id
	const el = document.createElement("div")
	el.setAttribute("class","bookingdetail")
	el.setAttribute("id",id)
	el.innerHTML = `

		<section class="vh-100">
			  <div class="container py-5 h-100 w-100">
				<div class="row d-flex justify-content-center align-items-center" style="width:568px;">
				  <div class="col-md-12 col-xl-4">

					<div class="card" style="border-radius: 15px;min-width:568px;position:relative;height:356px;">
						<button type="button" style=": pointer;" class="dismiss" onclick="document.getElementById(${id}).remove()">×</button> 
						  <div class="header"> 
							<div class="image">
							  
						    </div> 
						    <div class="">
								<span class="title">Parking space added</span> 
								<p class="message">Your parking space has been added, continue to add slots in preview</p> 
							</div> 
							
						  </div> 
						<div class="actions" style=""position:absolute;bottom:1%;>
							<button type="button" class="history" onclick="previewParking()">Preview</button> 
							<button type="button" class="track" onclick="document.getElementById(${id}).remove()">Cancel</button> 
						</div> 
					</div>
					
				  </div>
				</div>
			  </div>
		</section>
	`;
	openTab();
	body.appendChild(el);
}

function previewParking(){
	parkingMap()
}

function closeTab(){
	body.removeAttribute("style");
}
function openTab(){
	body.setAttribute("style","");
}

function parkingMap(){
	const body = document.getElementById("page-content");
	body.innerHTML = `
	<div style="position:relative;width: 100%;margin-top:-35px;">
	<h4>ParkingMap</h4>
	
	<a class="settings-map" id="settings-map">
		<i class="fa-solid fa-bars"></i>
	</a>
	<hr/>
	</div>
	<div class="map-container">
		<div class="parkingmap map-row">
		
			<div class="parking-header">
				<h4>Parking Space Map</h4>
				<a class="refresh-map" onclick="loadMap()">
					<i class="fa-solid fa-rotate"></i>
				</a>
			</div>
			<div class="parking-body" id="container">
				
			</div>
		</div>
		<div class="map-settings map-row" >
			<div class="parking-header">
				<h4>Recent Activity</h4>
				
			</div>
			<div class="settings-body" id="map-settings">
				${loadActivity()}
			</div>
		</div>
	</div>
	`;
	$("#settings-map").click(()=>{
		const el = document.getElementById("map-settings");
		if(el.classList.contains("showing")){
			el.classList.remove("showing");
		}else{
			el.classList.add("showing");
		}
	})
	loadMap()
	
}

function newSlot(){
	const container = document.getElementById("container")
	const bg = "#ff7474";
	const stet = "Free";
	let spot = "";
	let x = Math.floor(Math.random() * 2);
	let i = Math.floor(Math.random() * 99);
	spot = `
			<div class="input-container">
				<div class="popup" id=${"msg"+i} >
					<span class="popuptext" id=${"notify"+i} onclick="closeAction(this)">Popup text...</span>
				  </div>
			  <input id=${"drive"+i} class="radio-button" type="radio" name="radio">
			  <div class="radio-tile">
				<div class="icon car-icon">
				  <svg fill=${bg} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
					<path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"></path>
					<path d="M0 0h24v24H0z" fill=${bg}></path>
				  </svg>
				</div>
				<label for=${"drive"+i} class="radio-tile-label">${stet}</label>
			  </div>
			</div>
		`;
	container.children[0].innerHTML += spot;
}


function loadMap(){
	const container = document.getElementById("container")
	const map = document.createElement("div")
	map.setAttribute("class","radio-tile-group")
	let spot = "";
	const bg = ["none","#ff7474"];
	const stet = ["Parked","Free"];
	for(let i=0;i<18;i++){
		let x = Math.floor(Math.random() * 2);
		spot += `
			<div class="input-container">
				<div class="popup" id=${"msg"+i} >
					<span class="popuptext" id=${"notify"+i} onclick="closeAction(this)">Popup text...</span>
				  </div>
			  <input id=${"drive"+i} class="radio-button" type="radio" name="radio">
			  <div class="radio-tile">
				<div class="icon car-icon">
				  <svg fill=${bg[x]} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
					<path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"></path>
					<path d="M0 0h24v24H0z" fill=${bg[x]}></path>
				  </svg>
				</div>
				<label for=${"drive"+i} class="radio-tile-label">${stet[x]}</label>
			  </div>
			</div>
		`;
	}
	map.innerHTML = spot
	
	if(container.children[0]){
		container.children[0].remove()
		
	}
	container.appendChild(map)
	
	$(document).on('click', '.radio-button', function(e) {
		const el = e.target.parentElement
		
		showContent(e.target)
	});
	container.setAttribute("style","width:99%;height:586px;box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;")
}

function showContent(el){
	let content 
	content = `
		<div class="card-body p-4">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <p class="lead fw-normal mb-0" style="color: #a8729a;">Detail</p>
              <p class="small text-muted mb-0">Slot ID : 1KAU9-84UIL</p>
            </div>
            <div class="card shadow-0 border mb-4" style="min-width:95%;">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-2">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp"
                      class="img-fluid" alt="Phone">
                  </div>
                  <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <p class="text-muted mb-0">KCA 532D</p>
                  </div>
                  <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <p class="text-muted mb-0 small">White</p>
                  </div>
                  <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <p class="text-muted mb-0 small">Status: parked</p>
                  </div>
                  <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <p class="text-muted mb-0 small">Rate: Flat</p>
                  </div>
                  <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <p class="text-muted mb-0 small">KES 499</p>
                  </div>
                </div>
                <hr class="mb-4" style="background-color: #e0e0e0; opacity: 1;">
                <div class="row d-flex align-items-center">
                  <div class="col-md-2">
                    <p class="text-muted mb-0 small">Track time</p>
                  </div>
                  <div class="col-md-10">
                    <div class="progress" style="height: 6px; border-radius: 16px;">
                      <div class="progress-bar" role="progressbar"
                        style="width: 65%; border-radius: 16px; background-color: #a8729a;" aria-valuenow="65"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            

            <div class="d-flex justify-content-between pt-2">
              <p class="fw-bold mb-0">Order Details</p>
              <p class="text-muted mb-0"><span class="fw-bold me-4">Total</span> $898.00</p>
            </div>

            <div class="d-flex justify-content-between pt-2">
              <p class="text-muted mb-0">Invoice Number : 788152</p>
              <p class="text-muted mb-0"><span class="fw-bold me-4">Discount</span> $19.00</p>
            </div>

            <div class="d-flex justify-content-between">
              <p class="text-muted mb-0">Invoice Date : 22 Dec,2019</p>
              <p class="text-muted mb-0"><span class="fw-bold me-4">GST 18%</span> 123</p>
            </div>

            <div class="d-flex justify-content-between mb-5">
              <p class="text-muted mb-0">Booking ID : 18KU-62IIK</p>
              
            </div>
          </div>
	`;
	newModal(content)
}

function showAction(el){
	el.classList.toggle("show");

}
function closeAction(el){
	document.getElementById(el.id).classList.remove('show')
}

function parkingPage(){
	const body = document.getElementById("page-content");
	body.innerHTML =`
		<div class="newcontainer" id="container">
		<div class="contentbox flexcontainer" style="position:absolute;left:5%;top:5%;">
			<div class="contenttop rowcontainer">
				<div class="accountselect">
					<div class="dropdown">
					  <button onclick="dropFunction()" class="dropbtn button-6">
						<span id="selectval">Dropdown</span>
						<span id="selecticon"><i class="fa-solid fa-caret-down"></i></span>
					  </button>
					  <div id="myDropdown" class="dropdown-content">
						<a onclick="changeAccount(this)">Link 1</a>
						<a onclick="changeAccount(this)">Link 2</a>
						<a class="addnew" onclick="addnewPage()">Add new Account</a>
					  </div>
					</div>
				</div>
				<div class="accountsettings">
					<button class="setting-btn" title="account settings" onclick="accountSettings()">
					  <span class="bar bar1"></span>
					  <span class="bar bar2"></span>
					  <span class="bar bar1"></span>
					</button>

				</div>
			</div>
			<div class="rowcontainer actions">
				<div class="bookings">
					<div class="bookingstitle">
						Bookings
					</div>
					<div class="bookingsvalue">
						123
					</div>
				</div>
				<div class="buttons">
					<button class="button-6" onclick="loadMap()">Map</button>
					<button class="button-6" onclick="ParkAnalysis()">Analysis</button>
				</div>
			</div>
			<hr class="rowcontainer"/>
			<div class="rowcontainer">
				<ul class="headmenu">
					<li class="headmenuitem">Parking Info</li>
					<li class="headmenuitem">Perfomance</li>
				</ul>
			</div>
			<div class="rowcontainer accountviewer">
				<ul class="viewerlist">
					<li class="vieweritem">
						<span class="viewertitle">Parking Info</span>
						<span class="viewervalue">12345</span>
					</li>
					<li class="vieweritem">
						<span class="viewertitle">Parking Info</span>
						<span class="viewervalue">12345</span>
					</li>
					<li class="vieweritem">
						<span class="viewertitle">Parking Info</span>
						<span class="viewervalue">12345</span>
					</li>
					<li class="vieweritem">
						<span class="viewertitle">Parking Info</span>
						<span class="viewervalue">12345</span>
					</li>
					<li class="vieweritem">
						<span class="viewertitle">Parking Info</span>
						<span class="viewervalue">12345</span>
					</li>
					
				</ul>
			</div>
		</div>
		</div>
	`;
}
function dropFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  
}
function changeAccount(el) {
  const btn = document.getElementById("selectval")
  btn.innerText = el.innerText
  
}

const newaddform = ()=>{
	let res = `
		<form class="newform" id="regForm" action="">

			<h1>New Parking Station:</h1>

			<!-- One "tab" for each step in the form: -->
			<div class="tabs">Name:
			  <p><input placeholder="Parking name..." oninput="this.className = ''"></p>
			  <p><input placeholder="Description..." oninput="this.className = ''"></p>
			</div>

			<div class="tabs">Contact Info:
			  <p><input placeholder="E-mail..." oninput="this.className = ''"></p>
			  <p><input placeholder="Phone..." oninput="this.className = ''"></p>
			</div>

			<div class="tabs">Rate:
			  <p>Rate type<select><option>Flat</option></select></p>
			  <p>Rate other<select><option>Flat</option></select></p>
			  <p>Rate value<input placeholder="" oninput="this.className = ''"></p>
			</div>

						
			<div class="tabs">
				${newformdata()}
			</div>

			<div style="overflow:auto;">
			  <div style="width:99%;display:flex;align-items:center;">
			  <button type="button" class="button-6" id="cancelBtn" onclick="location.href='admin.html#dashboard'">Cancel</button>
				<button type="button" class="button-6" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
				<button type="button" class="button-6" id="nextBtn" onclick="nextPrev(1)">Next</button>
			  </div>
			</div>

			<!-- Circles which indicates the steps of the form: -->
			<div style="text-align:center;margin-top:40px;">
			  <span class="step"></span>
			  <span class="step"></span>
			  <span class="step"></span>
			  <span class="step"></span>
			</div>

			</form>
	`;
	return res;
}

const newformdata = ()=>{
	res = `
			<div class="steps">
				  <div class="stepp">
					<div>
					  <span class="floatright"><button onclick="newModal('address')"> Select</button></span>
					  
					  <p>221B Baker Street, W1U 8ED</p>
					  <p>London, United Kingdom</p>
					</div>
					<hr>
					<div>
					  <span class="floatright"><button onclick="newModal('payment')">Select</button></span>
					  <span>PAYMENT METHOD</span>
					  <p>Visa</p>
					  <p>**** **** **** 4243</p>
					</div>
					<hr>
					<div class="promo">
					  <span>No of Slots available?</span>
					  
						<input type="number" id="slots" placeholder="Enter" min="1" value="5" class="input_field">
					
					</div>
					<hr>
					
					
					<div class="checkout">
						
					</div>
				  </div>
				</div>
	`
	return res;
}
function addnewPage() {
  const body = document.getElementById("page-content");
	let types = ""
	
	let rateType = ""
	for(const layout of layouts.keys()){
		console.log(layouts[layout])
		types +=`<option value=${layouts[layout]}>${layouts[layout]}</option>`; 
	} 
	for(const rate of rates){
		rateType += `<option value=${rate}>${rate}</option>`
	}
	body.innerHTML = `
		<div class="newcontainer " id="container" >
			<div class="flexbox" >
				<div class="rowbox datas" >
					${newaddform()}
				</div>
				<div class="rowbox checkdetails">
					
					
				</div>
				
			</div>	
		</div>
  `;
  showTab(currentTab);
 }
 
function accountSettings(){
	const body = document.getElementById("page-content");
	body.innerHTML =`
		<div class="newcontainer" id="container">
		<div class="flexcontainer" style="position:absolute;left:5%;top:5%;width:65%;">
				<div class="rowcontainer">
				<div class="card-style account-page__top">
					<div class="account-page__top-about">
					
						<div class="account-page__logo">
							<div class="account-page__icon i-acc i-acc--stand"></div>
						</div>
						<div class="account-page__info">
							<div class="account-page__name">
								<span class="account-page__name-account">
									KILELESHWA PARKING
								</span>
								<div class="light-link account-page__rename" onclick="editName()">
								</div>
							</div>
							<div class="account-page__balance">
								<div class="account-page__balance-money">
									<span>KES 545</span>
								</div>
							</div>
						</div>
					</div>
					
					<div class="account-page__top-info">
						<div class="account-page__button-box ng-star-inserted">
							<div class="account-page__action-buttons ng-star-inserted">
								<div class="account-page__button-wrapper">
									<btn type="button"  blueborder="true" class="account-page__button account-page__button--action" tabindex="0">
									<button class="button button--border button-6" type="button" style="transition: background-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s;">
									<spantranslate="account.link.withdraw" class="account-page__button-text">Map</span>
									</button>
									</btn>
								</div>
								<div class="account-page__button-wrapper">
									<btn  type="button"  class="account-page__button account-page__button--action" tabindex="0">
									<button class="button button-6" type="button" style="transition: background-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s;text-align:center;color:red;">
									<span translate="account.link.deposit" class="account-page__button-text">Delete</span>
									</button>
									</btn>
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
				
				<div class="rowcontainer">
					<div class="card-style account-page__funds">
						<div class="card-style account-page__funds-amount">
							<div class="card-style account-page__funds-name">
								<span>Occupied</span>
							</div>
							<div class="card-style account-page__funds-info">
								<span>24</span>
							</div>
						</div>
						<div class="card-style account-page__funds-amount">
							<div class="card-style account-page__funds-name">
								<span>Available</span>
							</div>
							<div class="card-style account-page__funds-info">
								<span>4</span>
							</div>
						</div>
					</div>
				</div>
				<div class="row-header">Description</div>
				
				<div class="rowcontainer">
					<div class="card-style account-page__description">
						<div class="account-page__description-name">
							<span >Description</span>
						</div>
						<div class="account-page__commentary">
							<span class="light-link account-page__edit" onclick="newDescription()">Add description</span>
						</div>
					</div>
				</div>
		</div>
		<div class="flexleft">
			<div class="row-header">Latest Transactions</div>
		<div>
		</div>
	`;
}

function newDescription(){
	const body =document.body;
	let id = Math.floor(Math.random() * 999);
	id = ""+id
	const el = document.createElement("div")
	el.setAttribute("id",id)
	el.innerHTML = `
	
	<div class="modal__content">
	<h1 translate="account-popup.title-rename" class="modal__title">Account Description</h1>
	<form novalidate="" class="ng-pristine ng-invalid ng-touched">
	<div class="form-group"><div  class="form-field form-field--border-radius">
	<app-form-field  class="ng-star-inserted" style="">
	<div class="form-field form-field--border-radius ng-star-inserted">
	<div _ngcontent-fbs-cabinet-global-c164="" class="modal__row modal__row--small-text ng-star-inserted">
	<label _ngcontent-fbs-cabinet-global-c164="" for="name" translate="account-popup.field.name" class="">New Description</label>
	<span _ngcontent-fbs-cabinet-global-c164="" translate="account-popup.label.symbols-left">Characters left: 40</span>
	</div>
		<textarea type="text" id="comment" formcontrolname="comment" rows="3" autocomplete="comment" class="form-control ng-pristine ng-invalid ng-star-inserted ng-touched" maxlength="255" placeholder="Add a description">            
		</textarea>
	
	</div>
	</app-form-field>
	</div></div><div class="actions-wrapper actions-wrapper--popup">
	<button class="account-button" type="submit"  translate="account-popup.button.confirm" >Confirm</button>
	<button  type="button" onclick="document.getElementById(${id}).remove()"  translate="account-popup.button.cancel" class="link button--link">Cancel</button></div>
	</form></div>
	`
	el.setAttribute("class","floating")
	body.appendChild(el)
}

function editName(){
	const body =document.body;
	let id = Math.floor(Math.random() * 999);
	id = ""+id
	const el = document.createElement("div")
	el.setAttribute("id",id)
	el.innerHTML = `
	
	<div class="modal__content">
	<h1 translate="account-popup.title-rename" class="modal__title">Rename account</h1>
	<form novalidate="" class="ng-pristine ng-invalid ng-touched">
	<div class="form-group"><div  class="form-field form-field--border-radius">
	<app-form-field  class="ng-star-inserted" style="">
	<div class="form-field form-field--border-radius ng-star-inserted">
	<div _ngcontent-fbs-cabinet-global-c164="" class="modal__row modal__row--small-text ng-star-inserted">
	<label _ngcontent-fbs-cabinet-global-c164="" for="name" translate="account-popup.field.name" class="">New account name</label>
	<span _ngcontent-fbs-cabinet-global-c164="" translate="account-popup.label.symbols-left">Characters left: 40</span>
	</div><input type="text" id="name" formcontrolname="name" autocomplete="name" class="form-control ng-pristine ng-invalid ng-star-inserted ng-touched" maxlength="40" placeholder="New account name">
	</div>
	</app-form-field>
	</div></div><div class="actions-wrapper actions-wrapper--popup">
	<button class="account-button" type="submit"  translate="account-popup.button.confirm" >Confirm</button>
	<button  type="button" onclick="document.getElementById(${id}).remove()"  translate="account-popup.button.cancel" class="link button--link">Cancel</button></div>
	</form></div>
	`
	el.setAttribute("class","floating")
	body.appendChild(el)
}
 
function newModal(flow){
	const body =document.getElementById("page-content");
	let id = Math.floor(Math.random() * 999);
	id = ""+id
	const el = document.createElement("div")
	el.setAttribute("class","bookingdetail")
	el.setAttribute("id",id)
	el.innerHTML = `
		<section class="vh-100">
			  <div class="container py-5 h-100 w-100">
				<div class="row d-flex justify-content-center align-items-center" style="width:568px;position:fixed;right:15%;">
				  <div class="col-md-12 col-xl-4">

					<div class="card" style="border-radius: 15px;min-width:568px;position:relative;">
						${flow}
						
						<div class="floatheaderfooter">
							<button class="button-6" role="button" onclick="document.getElementById(${id}).remove()">Cancel</button>
						</div>
					</div>
					
				  </div>
				</div>
			  </div>
		</section>
	`
	body.appendChild(el)
 }