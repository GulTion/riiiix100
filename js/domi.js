(()=>{
	this.solutionreport =  function solutionreport() {
       // $("#preloader1").show();
        console.log("sdf")
        showLoader();
  
        hideLoader();

     $("#overallreport").hide();
        $("#comparisionreport").hide();
        $("#solutionreport").show();
        //$("#preloader11").hide();
        
        $("#tab1").removeClass('active');
        $("#tab2").removeClass('active');
        $("#tab3").addClass('active');
    }

    document.showme=(i, show, cb=()=>{})=>{
        document.querySelectorAll(".otrbx_answrs")[i].style.display=show
        document.querySelectorAll(".rockyou")[i].className = ['option','rockyou'].join(" ")
        let e = document.querySelectorAll(".optionsdiv")[i];
        // [...e.querySelectorAll(".solutioncontent")].forEach(e=>e.style.display=show)
        let f = document.querySelectorAll(".rockyou")[i]
        // f.style.display=show
        f.querySelector(".solutioncontent").style.display=show;
            let k = e.querySelectorAll(".option")
            if(k[4]) k[4].style.display=show
            if(k.length==1) k[0].style.display=show;

            

            cb()
    }

	let a = [...document.querySelectorAll(".solutioncontent")].forEach(e=>e.style.display="none")
	let aa = [...document.querySelectorAll(".otrbx_answrs")].forEach(e=>e.style.display="none")
    let b = [...document.querySelectorAll(".correctoption")].forEach(e=>e.className = ["option", "rockyou"].join(" "))
let c = [...document.querySelectorAll(".optionsdiv")].forEach((e,i)=>{
    e.innerHTML = `<button id="block" onclick="showme(${i},this.id, ()=>{this.id=this.id=='none'?'block':'none'})">SHOW</button>${e.innerHTML}`
    let k = e.querySelectorAll(".option")
    if(k[4]) k[4].style.display="none"
    if(k.length==1) k[0].style.display="none"})


})()