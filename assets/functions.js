let EL = document.getElementById("pageRoot");
const body = EL;

const layouts = ["Parallel","Angled","Single Level Lots","Multi-Level Lots"];
const rates = ["hourly","flat"]


const startFunction =(e)=>{
	EL = document.getElementById("pageRoot");
	
}
window.addEventListener("load",startFunction);

function addParking(){
	let el = document.createElement("div");
	el.classList.add("normal")
	el.setAttribute("style","width: 620px;")
	let types = ""
	
	let rateType = ""
	for(const layout of layouts.keys()){
		console.log(layouts[layout])
		types +=`<option value=${layouts[layout]}>${layouts[layout]}</option>`; 
	} 
	for(const rate of rates){
		rateType += `<option value=${rate}>${rate}</option>`
	}
	el.innerHTML = `
<div class="page-content" style="width: 600px;">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10 col-xl-9" style="width: 100%;height: 100%;position:relative;">
        <div class="card-new" style="width: 100%;">
          <div class="form-step form-step1">
            <div class="form-step-head card-innr">
              <div class="step-head">
                <div class="step-number">01</div>
                <div class="step-head-text">
                  <h4>Parking Details</h4>
                  
                </div>
              </div>
            </div>
           
            <div class="form-step-fields card-innr">
              <div class="note note-plane note-light-alt note-md pdb-1x">
                
                
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="input-item input-with-label">
                    <label class="input-item-label">
                      Name <span class="text-danger">*</span>
                    </label>
                    <input class="input-bordered" type="text" id="name" />
                  </div>
                 
                </div>
              
               
              
                <div class="col-md-6">
                  <div class="input-item input-with-label">
                    <label class="input-item-label">
                      Address <span class="text-danger">*</span>
                    </label>
                    <input class="input-bordered" type="text" id="address" />
                  </div>
                 
                </div>
               
                <div class="col-md-6">
                  <div class="input-item input-with-label">
                    <label class="input-item-label">
                     Slots <span class="text-danger">*</span>
                    </label>
                    <input class="input-bordered" type="number" id="slots"/>
                  </div>
                
                </div>
               
                
				
				<div class="col-md-6">
                  <div class="input-item input-with-label">
                    <label class="input-item-label">
                      Type <span class="text-danger">*</span>
                    </label>
                    <select>
						${types}
					</select>
                  </div>
                  
                </div>
				
				<div class="col-md-6">
                  <div class="input-item input-with-label">
                    <label class="input-item-label">
                      Rate <span class="text-danger">*</span>
                    </label>
                    <input class="input-bordered date-picker" type="number" id="rate-value" />
                  </div>
                  
                </div>
				
				<div class="col-md-6">
                  <div class="input-item input-with-label">
                    <label class="input-item-label">
                      Rate type <span class="text-danger">*</span>
                    </label>
                    <select id="rate-type">${rateType}</select>
                  </div>
                  
                </div>
              
              </div>
              <div class="btn-card">
              <button class="btn-submit" onclick="newParking()">Submit</button>
			  <button class="btn-submit cancel" onclick="closeTab()">Cancel</button>
			  </div>
            
          </div>
        </div>
       
      </div>
    </div>
  </div>
  
</div>
	
	`;
	body.innerHTML = "";
	
	body.appendChild(el);
	body.setAttribute("style","display:block;")
	
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
					<li value="slot" onclick="newContext(this.value)">Add Slot </li>
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