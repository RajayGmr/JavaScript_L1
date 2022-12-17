var getacctitles=document.getElementsByClassName("acctitle");
//console.log(getacctitles); //HTML Collection
var getacccontent=document.querySelectorAll(".acccontent");
//console.log(getacccontent);//NodeList

for (var i = 0; i < getacctitles.length; i++) {
  getacctitles[i].addEventListener('click',function(e){
    //console.log(e.target);
    //console.log(this);
    this.classList.toggle("active");
    var getcontent=this.nextElementSibling;
    console.log(getcontent);

    if(getcontent.style.height){
      getcontent.style.height=null;  //beware can't set 0
    }else{
      //console.log(getcontent.scrollHeight);
      getcontent.style.height=getcontent.scrollHeight+ "px";
    }
  });

  if(getacctitles[i].classList.contains("active")){
    getacccontent[i].style.height=getacccontent[i].scrollHeight+ "px";
  }

}
