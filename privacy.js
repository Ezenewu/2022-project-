// form check


// privacy policy coding 
document.getElementById("form").onsubmit = function result(){

	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var site_name = document.getElementById("site-name").value;
	var site_url = document.getElementById("site-url").value;

	document.getElementById("company-name").innerHTML = name;
	document.getElementById("section").style.display = "block";

	site_len = document.getElementsByClassName("site-name-text").length;
    url_len = document.getElementsByClassName("site-url-text").length;
    email_len = document.getElementsByClassName("email-text").length;

	for(var i = 0; i < site_len; i++){
		document.getElementsByClassName("site-name-text")[i].innerHTML = site_name;
	}

	for(var j = 0; j < url_len; j++){
		document.getElementsByClassName("site-url-text")[j].innerHTML = site_url;
	}

	for(var k = 0; k < email_len; k++){
		document.getElementsByClassName("email-text")[k].innerHTML = email;
	}

    return false;
    
}


/* copy Coding */
function privacy_policy(){
  var policy = document.getElementById("privacy-policy-box").innerHTML.replace(/id="company-name"/g, '').replace(/class="site-name-text"/g, '').replace(/class="site-url-text"/g, '').replace(/class="email-text"/g, '');
  copy(policy);
}

function contact_us(){
  var contact = document.getElementById("contact-us-box").innerHTML.replace(/class="email-text"/g,"");
  copy(contact);
}

function about_us(){
  var about = document.getElementById("about-us-box").innerHTML.replace(/class="email-text"/g,"");
  copy(about);
}

function dmca_copy(){
  var dmca = document.getElementById("dmca-box").innerHTML.replace(/class="email-text"/g,"");
  copy(dmca);
}

function copy(text){
  var textarea = document.createElement("input");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}