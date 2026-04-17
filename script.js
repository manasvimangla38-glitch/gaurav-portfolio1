// SMOOTH SCROLL
function scrollToSection(id){
    document.getElementById(id).scrollIntoView({
        behavior:"smooth"
    });
}

// FORM ALERT
document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Message Sent!");
});

// TYPING EFFECT
const text = ["Web Developer", "Arduino Expert", "Pi Pico Enthusiast"];
let i=0, j=0, currentText="", isDeleting=false;

function type(){
    if(i < text.length){
        if(!isDeleting && j <= text[i].length){
            currentText = text[i].substring(0,j++);
        } else if(isDeleting && j >= 0){
            currentText = text[i].substring(0,j--);
        }

        document.getElementById("typing").innerHTML = currentText;

        if(j == text[i].length){
            isDeleting = true;
            setTimeout(type,1000);
            return;
        }

        if(j == 0){
            isDeleting = false;
            i++;
        }
    } else {
        i = 0;
    }

    setTimeout(type,100);
}

type();