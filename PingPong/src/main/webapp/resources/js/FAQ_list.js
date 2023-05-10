const buttons = document.querySelectorAll('.FAQ-header');
const Abtn = document.querySelectorAll('.Abtn');
const Bbtn = document.querySelectorAll('.Bbtn');

buttons.forEach(function(question) {  /* question 선택한 애 */
    question.lastElementChild.classList.add("Abtn");
    question.addEventListener("click", function() {
        buttons.forEach(function(item) {
            if (item !== question) {  /* item 선택하지 않은 애들 */
                item.parentElement.classList.add("on");
                item.lastElementChild.classList.add("Abtn");
                item.firstElementChild.classList.remove("Abtn");
            } else{
                // if(item.firstElementChild.classList.contains("Abtn"))
                item.firstElementChild.classList.toggle("Abtn");
                item.lastElementChild.classList.toggle("Abtn");
            }
        })
        question.parentElement.classList.toggle("on");
    })
})