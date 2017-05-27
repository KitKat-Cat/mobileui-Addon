/**All Css Code Made By @KitKat-Cat Will Go Here And Any Or All Code May Break At Any Time In The Future.**/
window.onload = function(){
document.getElementsByTagName("body").appendChild(''+
'<!-- The Modal -->'+
'<div id="myModal" class="modal" style="">'+
  '<!-- Modal content -->'+
  '<div id="modal-content">'+
    '<div id="modal-header" class="white">'+
      '<h3 id="modal-title"></h3>'+
    '</div>'+
    '<div>'+
    '<p id="modal-body"></p>'+
    '<div class="actions">'+
	    '<button class="close" title="Close">OK</button>'+
    '</div>'+
    '</div>'+
  '</div>'+
'</div>');
	
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
