const startFunction = (e) =>{
		console.log(e);
		
	
}

function handleLogin(response){
	console.log(response);
	if(response.status === 400){
		alert(response.message);
	}else if(response.status === 200){
		console.log(response.token);
	}
	
}


const url= "http://10.20.96.98:8081"
async function fetchFunction(route,action,data,next){
	try{
		fetch(url+route,{
				method:action,
				headers:{
					"Content-Type":"application/json",
				},
				body:JSON.stringify(data),
		})
		.then((res)=>{
			
			res.json().then((r)=>{
				r.status = res.status
				
				next(r)
				
			})
		})
	}catch(e){
		console.log("error=",e);
	}
}

document.addEventListener("load",startFunction);
if(document.getElementById("loginForm")){
	let f = document.getElementById("loginForm")
	f.addEventListener("submit",async (e) => {
		e.preventDefault();
		console.log(e);
		
		const loginForm = document.getElementById("loginForm");
		const phone = document.getElementById("phone").value;
		const Password  = document.getElementById("password-input").value;
		const data = {"phone":phone,"password":Password}
		await fetchFunction("/api/auth","post",data,handleLogin);

		
		e.preventDefault();
		
		return false;
	});
}else if(document.getElementById("registerForm")){
	let f = document.getElementById("registerForm")
	f.addEventListener("submit",async (e) => {
		e.preventDefault();
		
		const registerForm = document.getElementById("registerForm");
		const firstname = document.getElementById("firstname").value;
		const lastname = document.getElementById("lastname").value;
		const email = document.getElementById("email").value;
		const phone = document.getElementById("phone").value;
		const Password  = document.getElementById("password").value;
		const confirmPassword  = document.getElementById("password-confirm").value;
		console.log(Password,confirmPassword)
		if(Password!==confirmPassword){
			console.log(Password,confirmPassword)
			alert("password incorrect");
			return false;
		}
		let name = firstname + " "+lastname;
		console.log({"phone":phone,"password":Password, "firstname":firstname,"lastname":lastname,"confirmPassword":confirmPassword});
		const data = {"phone":phone,"password":Password, "name":name,"email":email};
		await fetchFunction("/api/users/register","post",data,handleLogin);
		e.preventDefault();
		
		return false;
	});
	
}

