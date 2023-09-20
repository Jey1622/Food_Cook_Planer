const formEl=document.forms.feedback;
const formBtn=document.querySelector("form button");

//Object Destructing

const handleSubmit= (event)=>{
    event.preventDefault();

    const formData=new FormData(formEl);

    alert("Thank you for your feedback😊")

    console.log(datastring);
}


formEl.addEventListener("submit",handleSubmit)


