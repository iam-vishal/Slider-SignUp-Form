    let overlayBtn = document.getElementById("overlayBtn");
    let overlay = document.getElementById("overlay");
        
    overlayBtn.addEventListener("click",()=>{
            if (overlay.classList.contains("overlay-right-active")) {
                overlay.classList.add("overlay-left-active");
                overlay.classList.remove("overlay-right-active");
                overlayBtn.innerHTML = "Sign Up";
            } else {
                overlay.classList.add("overlay-right-active");
                overlay.classList.remove("overlay-left-active");
                overlayBtn.innerHTML = "Sign In";
            }
        })