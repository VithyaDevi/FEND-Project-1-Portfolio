// Show/hide contact details
function myContact(){
    var content = document.getElementById("contact-desc");
    if (content.style.display == 'none') {
        content.style.display = 'block';
        content.innerHTML="Email ID : vithya.vinayagaa@gmail.com <br> Phone number : 647-749-6600";
    } else {
        content.style.display = 'none';
    }
}

