function fetchRequest(id,el){
	checkMark(el);
}
function checkMark(child){
	if(child.getAttribute("style") === null){
		child.setAttribute("style","background:#23232b;")
	}else{child.removeAttribute("style")}
}
function fetchRequests(){
	let b = document.getElementById("request-list");
	const x = {}
	//for(const x of rs){
		
		b.innerHTML += `
			<div class="br-mailbox-list-item unread" id="${x.id}" onclick="fetchRequest('${x.id}',this)">
			  <div class="d-flex justify-content-between mg-b-5">
				<div>
				  <a onclick="checkMark(this.children[0])" class="mg-l-5 tx-gray-500"><i class="fa fa-star-o" aria-hidden="true"></i></a>
				  <a><i class="fa fa-paperclip" aria-hidden="true"></i></a>
				</div>
				<span class="tx-12">${x.time}</span>
			  </div><!-- d-flex -->
			<h6 class="tx-14 mg-b-10 tx-gray-800">${x.request}</h6>
			  <p class="tx-12 tx-gray-600 mg-b-5">${x.response}</p>
			</div><!-- br-mailbox-list-item -->
		`;
		
	//}
	
}

window.addEventListener("load",()=>{
	
	const ul = document.getElementById("support-links");
	const opts = ["Payment","Booking","Handlers","Towers","Help"]

	for( const opt of opts){
		
		const li = document.createElement("li")
		li.setAttribute("value",opt)
		li.innerText = opt
		li.addEventListener("click",function(){
			for(const l of ul.children){
				l.classList.remove("checked")
			}
			this.classList.add("checked")
			document.getElementById("support-nav").classList.remove("showleft");
		})
		ul.appendChild(li)
	}
	fetchRequests();
})

$("#showMailBoxLeft").click(()=>{
	document.getElementById("support-nav").classList.add("showleft");
})

function filterData(){
	var input, filter, table, tr, td, i, txtValue;
	 
	  input = document.getElementById("search-query");
	  filter = input.value.toUpperCase();
	  val = input.value;
	  table = document.getElementById('request-list');
	  tr = table.getElementsByClassName("br-mailbox-list-item");
	  let x = tr.length;
	  for (i = 1; i < tr.length; i++) {
	    td = tr[i];
	    if (td) {
	      txtValue = td.textContent || td.innerText;
	      if (txtValue.toUpperCase().indexOf(filter) > -1) {
		tr[i].style.display = "";
	      } else {
		tr[i].style.display = "none";
		x = x -1;	
	      }
	    }
	  }
}
