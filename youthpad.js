// document.querySelector("#show-sign").addEventListener("click", function(){
//     document.querySelector(".popup").classList.add("active");
// });

// document.querySelector(".popup .close-btn").addEventListener("click", function(){
//     document.querySelector(".popup").classList.remove("active");
// });
const btn = document.getElementById('show-sign');

btn.addEventListener('click', () => {
  const form = document.getElementById('sign');

  if (form.style.display === 'none') {
    //showing the form
    form.style.display = 'block';
  } else {
    //hiding the form
    form.style.display = 'none';
  }
});