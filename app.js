const $acordion = document.getElementsByClassName("acordion");

const arrayAcordion = [...$acordion];
for (let element = 0; element < arrayAcordion.length; element++) {
  arrayAcordion[element].addEventListener("click", (evento) => {
    arrayAcordion[element].classList.toggle("active");

    for (let secElement = 0; secElement < arrayAcordion.length; secElement++) {
      
      if (element !== secElement) {
        arrayAcordion[secElement].className = "acordion";
      }
    }
  })
}
