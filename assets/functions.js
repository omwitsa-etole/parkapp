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
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
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
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
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

function newParking(){
	
	let el = document.createElement("div");
	el.classList.add("normal");
	el.innerHTML = `

<div class="card"> 
  <button type="button" class="dismiss" onclick="addParking()">×</button> 
  <div class="header"> 
    <div class="image">
      
	  </div> 
      <div class="content">
         <span class="title">Parking space added</span> 
         <p class="message">Your parking space has been added, continue to add slots in preview</p> 
         </div> 
         <div class="actions">
            <button type="button" class="history" onclick="previewParking()">Preview</button> 
            <button type="button" class="track" onclick="addParking()">Back</button> 
</div> 
</div> 
</div>

	`;
	openTab();
	body.appendChild(el);
}

function previewParking(){
	let el = document.createElement("div");
	el.classList.add("normal");
	el.innerHTML = `Preview parking spots`;
	openTab();
	body.appendChild(el);
}

function closeTab(){
	body.removeAttribute("style");
}
function openTab(){
	body.setAttribute("style","display:block");
}

function parkingMap(){
	const body = document.getElementById("page-content");
	body.innerHTML = `
	<div style="position:relative;width: 100%;">
	<h4>ParkingMap</h4>
	<div class="savebtn">
		<input type="button" class="" value="Save Updates">
	</div>
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
		<div class="map-settings map-row" id="map-settings">
			<div class="parking-header">
				<h4>Settings</h4>
				
			</div>
			<div class="settings-body" id="content">
				<ul class="setting-options">
					<li value="path" onclick="newContext(this.value)">Add Path </li>
					<li value="slot" onclick="newSlot(this.value)">Add Slot </li>
				</ul>
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
		showAction(el.children[0].children[0])
		showContent(e.target)
	});
	container.setAttribute("style","width:99%;height:586px;box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;")
}

function showContent(el){
	const content = document.getElementById("content")
	content.innerHTML = `
	
		<div style="width:100%;">
			  <div class="p-3" style="background-color: #eee;">
				<span class="fw-bold">Order Recap</span>
				 <div class="d-flex justify-content-between mt-2">
				  <span>Booking ID </span> <span>${el.id}</span>
				</div>
				<div class="d-flex justify-content-between mt-2">
				  <span class="lh-sm">Text here   </span>
				  <span>$40.00</span>
				</div>
				<hr />
				<div class="d-flex justify-content-between mt-2">
				  <span>Text here </span> <span>$71.76</span>
				</div>
				<div class="d-flex justify-content-between mt-2">
				  <span>Text here </span> <span>$71.76</span>
				</div>
				<hr />
				<div class="d-flex justify-content-between mt-2">
				  <span>Text here </span> <span class="text-success">$85.00</span>
				</div>
			  </div>
			</div>
	`;
	
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
		<div class="contentbox flexcontainer">
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
					<button class="setting-btn" title="account settings" onclick="newModal('settings')">
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
					<button class="button-6" onclick="analysisPage()">Analysis</button>
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
			  <p><input placeholder="Other name..." oninput="this.className = ''"></p>
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

			<div class="tabs">Login Info:
			  <p><input placeholder="Username..." oninput="this.className = ''"></p>
			  <p><input placeholder="Password..." oninput="this.className = ''"></p>
			</div>

			<div style="overflow:auto;">
			  <div style="float:right;">
			  <button type="button" id="cancelBtn" onclick="location.hash='dashboard'">Cancel</button>
				<button type="button" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
				<button type="button" id="nextBtn" onclick="nextPrev(1)">Next</button>
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
		<div class="container">
			  <div class="card cardcontainer cart">
				<label class="title">CHECKOUT</label>
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
					  <form class="form">
						<input type="number" placeholder="Enter" min="1" value="5" class="input_field">
						<button type="button">Apply</button>
					  </form>
					</div>
					<hr>
					<div class="payments">
					  <span>SUMMARY</span>
					  <div class="details">
						<span>Name:</span>
						<span class="">NAIROBI CBD</span>
						<span>Rate:</span>
						<span>KES 240.00</span>
						<span>Type:</span>
						<span>Flat</span>
						<span>Tax:</span>
						<span>$30.40</span>
					  </div>
					</div>
					<hr>
					<div class="checkout">
						<div class="footerz">
						  
						  <button class="checkout-btn">Save</button>
						  <button class="checkout-btn cancel">Cancel</button>
						</div>
					</div>
				  </div>
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
					${newformdata()}
				</div>
			</div>	
		</div>
  `;
  showTab(currentTab);
 }
 
function newModal(flow){
	const body =document.getElementById("page-content");
	let id = Math.floor(Math.random() * 999);
	id = ""+id
	const el = document.createElement("div")
	el.setAttribute("class","floating")
	el.setAttribute("id",id)
	el.innerHTML = `
		<div>
			<div class="floatheader">Title: ${flow.toUpperCase()}</div>
			<div class="floatheaderfooter">
				<button class="button-25" role="button" onclick="document.getElementById(${id}).remove()">Cancel</button>
			</div>
		</div>
	`
	body.appendChild(el)
 }