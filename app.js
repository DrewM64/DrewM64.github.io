const home = document.getElementById("navHome");

// Create a media condition that targets viewports at least 1024px wide
const mediaQuery = window.matchMedia('(min-width: 1024px)')
// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert
  home.addEventListener("click", function(){
    alert("This is a Home button.");
  });
}


// Modal functionality 
var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = recipient
  modalBodyInput.value = recipient
})