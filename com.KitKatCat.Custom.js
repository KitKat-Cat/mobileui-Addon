/**All Javascript Code Made By @KitKat-Cat Will Go Here And Any Or All Code May Break At Any Time In The Future.**/
	
// Get the modal
var MODAL = document.getElementById('myModal');

// Get the <button> element that closes the modal
var closeButton = document.getElementsByClassName("close")[0];

// When the user clicks on the close button then close the modal
closeButton.onclick = function() {
    MODAL.style.display = "none";
}

function UIalert(Message, title) {
	var Modal = document.getElementById('myModal');
	if (title === undefined) {
		title = "This page says:";
	}
	var modalTitle = document.getElementById("modal-title");
	var modalBody = document.getElementById("modal-body");
        modalBody.innerHTML = Message; 
        modalTitle.innerHTML = title;
	Modal.style.display = "block";
};
  
};
