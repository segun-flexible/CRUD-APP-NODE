document.addEventListener("DOMContentLoaded",()=>{
  const form = document.querySelector('form');
  const input = form.querySelector('input');
  
  
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const data = {item:input.value};
  fetch("/todo",{method:"POST",body:JSON.stringify(data),headers:{'Content-Type': 'application/json'}}).then(res =>{
    return res.json()
  }).then(data =>{
    window.location = "/todo"
  })
})


document.querySelectorAll("ul li").forEach(li =>{
  li.addEventListener("click",(e)=>{
    let url = `/todo/${e.target.textContent.replace(/ /g,"-")}`;
    fetch(url,{method:"DELETE"}).then(res =>{
      window.location = "/todo"
    })
  })
})


})