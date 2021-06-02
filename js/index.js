var modal = document.getElementById("myModal");
var img1 = document.getElementById("page1");
var img2 = document.getElementById("page2");
var modalImg1 = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");
var captionText = document.getElementById("caption")

img1.onclick = function(){
    modal.style.display = "block";
    modalImg1.src = this.src;
    captionText.innerHTML = this.alt;
}
img2.onclick = function(){
    modal.style.display = "block";
    modalImg2.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
    modal.style.display = "none";
}

var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
          console.log("Status 400, response OK");
        Swal.fire('Yay...', 'Order has been placed', 'success')
        form.reset()
      }).catch(error => {
         console.log(error);
        Swal.fire('Could not order', 'Try ordering using swiggy or Zomato', 'error')
        form.reset();
    });
    }
    form.addEventListener("submit", handleSubmit)
