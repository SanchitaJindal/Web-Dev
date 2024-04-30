let form=document.querySelector("form")
form.addEventListener("submit",function (event){
    event.preventDefault()
    const formData= new FormData(form);
    let name=formData.get("name");
    let email=formData.get("email");
    let pass=formData.get("pass");
    let c_pass=formData.get("c_pass");
    data={name,email,pass,c_pass};
    localStorage.setItem("data",JSON.stringify(data));
})
let card4=document.querySelector("card4");
card4.addEventListener("mouseover",function (){
    document.querySelector("card4").style.width= "250px";
    document.querySelector("card4").style.height= "250px";
});


