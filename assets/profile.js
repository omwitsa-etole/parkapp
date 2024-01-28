function chatWindow(){
	const body = document.body;
	let id = Math.floor(Math.random() * 999);
	id = ""+id
	const el = document.createElement("div")
	el.setAttribute("id",id)
	el.innerHTML = `
		<div class="form-popup" id=${id}>
		  <form action="/action_page.php" class="form-container">
			<h1>Chat</h1>

			<label for="msg"><b>Message</b></label>
			<textarea placeholder="Type message.." name="msg" required></textarea>

			<button type="submit" class="btn">Send</button>
			<button type="button" class="btn cancel" onclick="document.getElementById(${id}).remove()">Close</button>
		  </form>
		</div>
	`;
	body.appendChild(el)
}
