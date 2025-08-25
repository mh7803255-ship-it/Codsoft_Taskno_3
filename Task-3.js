let display=document.getElementById("display"),input="";
document.querySelectorAll(".btn").forEach(b=>b.onclick=()=> {
  let v=b.dataset.value;
  if(v=="C") input="",display.value="";
  else if(v=="=") display.value=eval(input),input=display.value;
  else display.value=input+=v;
});


