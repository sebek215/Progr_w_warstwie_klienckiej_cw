{/* <script>
document.write("Witaj świecie")
document.getElementById("Wyświetlacz").innerHTML = "Witaj świecie. Ala ma kota!"
alert("Uwaga!")
window.alert("Uwaga2!!!")
console.log("A tutaj konsola log")
</script> */}

function zmianaKoloru() {
    randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
    document.documentElement.style.setProperty('--main-bg-color', randomColor);
}

function zmianaPolozenia() {
    document.getElementById('box2').style.left = '200px';
    
}

document.addEventListener("scroll", function () {
    const header = document.querySelector(".sticky-header");

    if (window.screenY > 50) {
        header.style.height = "45px"
        header.style.transition = "all 0.3s ease-in-out"
    }
    else {
        header.style.height = "60px"
    }
})

document.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const backToTopButton = document.querySelector(".to-top");

    if (scrollPosition > 150) { 
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});
