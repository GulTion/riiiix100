document.addEventListener("DOMContentLoaded", function () {
    // Get the button and Christmas tree elements
    // const showTreeButton = document.getElementById("showTreeButton");
    // const christmasTree = document.getElementById("christmas-tree");

    // // Hide the Christmas tree initially
    // christmasTree.style.display = "none";

    // // Add a click event listener to the button
    // showTreeButton.addEventListener("click", function () {
    //     // Hide the button
    //     showTreeButton.style.display = "none";
    //     // Show the Christmas tree
    //     christmasTree.style.display = "block";
    // });

    let x = new XMAS();

});

class XMAS {
    auto = !true
    seq = [
        {
            ele:"body",
            cmd:"style",
            next:"Push me Hard",
            text:"Something Empty!!, ugh? Try to Press that Button, may something will happen",
            style:{
                "background":"radial-gradient(#2c437e, #000755)"
            }
        },
      
    
        {
            ele: ".shadow",
            cmd: "show",
            text:"what is it? ig, it's look like shadow. but which thing? try to hit that button again",
            next: "opo, Just kill me"
        },
        
        {
            ele: ".tree",
            cmd: "show",
            next: "opo, ik, by hitting me again and again",
            text:"ohh, it's a tree. but looks so simple na. let's decorate something, but how? anybody know?"
        },
       
        {
            ele: ".balls",
            cmd: "show",
            next: "hey, just turn on me with ur fingers",
            text:"ohh yeah, those balls , but not mine hehe. we need lights ig."
        },
        {
            ele: ".lights",
            cmd: "show",
            next: "ik ik, it's star",
            text:"hmm, looks fine, but something is missing? what is it?"
        },

        {
            ele: ".star",
            cmd: "show",
            next: "you know, but i will not tell u. (hit me)",
            text:"now, it's pretty. just like my po. but where's the snow? help me po to find it"
        },

        {
            ele: ".snow",
            cmd: "show",
            text: "that's cool rn. but why is it all? something surprise? ",
            next:"i also don't know, but keep hitting me."
        },


        {
            ele: ".container",
            cmd: "show",
            next: "fix me na po",
            text:"what is it? ig, it's stuck, try to fix it."
        },
        {
            ele: ".container",
            cmd: "update",
            content: ` <h1 class="neon">MARRY ME 💍</h1>`,
            next: "don't forget to hit me po",
            text:"Merry Ch...., wtf!, damn, that's not me. yeah, that's me, my bad hehe. idk, who changed it"
        },
        {
            ele: ".container",
            cmd: "update",
            jump:true,
            next:"",
            text:"",
            content: `<h1 class="neon">Merry Merry <br> Christmas 🦌, My Riiiiiiii</h1>`,
        },
        {
            ele:"music",
            cmd:"fun",
            fun:()=>{
                let music = document.querySelector(".music");
                music.play()
            },
            next: "Open Card by hitting me",
            text:"Surprise!!! Merry Merry 🎅🏻 Christmas 🦌,my Riiiiiiii 😇, my little baby👼<br> here's ur card with wishes"


        },
      
        {
            ele: ".xmasCard",
            cmd: "show",
            next: "Close The Card",
            text:"Click on this card for opening it."
        },
        {
            ele: ".xmasCard",
            cmd: "hide",
            text: "i wanna present u, something from my heart for us.",
            next:"why r u hitting? (hit me)"
        },
        {
            ele:".christmas-tree",
            cmd:"hide",
            next:"SHOW",
            text:"",
            jump:true
          
        },
        {
            ele:".express",
            next:"NEXT PAGE (1/19)>>",
            text:"",
            cmd:"show"

        },
        ...`I have my gift already for this Christmas.
        You should know that you are the greatest gift of all.
        opo, You are a gift I never want to take for granted, and ....
        u r a gem I want to hold close forever without loosing hand.
        You r like the ribbon that ties everything together,by ...
        making each moment special with your quality of time and ...
        wings giving sweets that make me fly.
        the 11 months we have shared and build so much memories together. 
        each moment has been a gift, a treasure of joy, laughter, and ...
        an unspoken bond between us that's a lot for me.
        so, yeah, you have already given a gift to me, and that's you, My Riiiiiiii , My little baby.
        I don't know that, i have already given a gift to u or not. 
        I m not santa or not as enough capable to give u. but ...
        I am committed to caring for you, ensuring your happiness, and ...
        sharing countless smiles and ...
        making beautiful memories together as a gift.
        I eagerly look forward to creating more beautiful memories with you and ...
        cherishing the gift of your presence for me.`.split('\n').map((content,i)=>({
            ele: ".express",
            cmd: "update",
            next:`NEXT PAGE (${i+2}/19)`,
            text:"",
            content: `<h1 class="neon">${content}</h1>`,
        })),
        {
            ele:".express",
            cmd:"update",
            content: `<h1 class="neon">thanks for this patience and finishing it till end!!</h1>`,
            text:"Just Once more Christmas Tree",
            next:"c lick me for a last look",
            
        },{
            ele:".express",
            cmd:"hide",
            jump:true
        },{
            ele:".christmas-tree",
            cmd:"show",
            text:"",
            next:""
        },

    ]
    i = 0;
    constructor() {

        let nextBtn = document.querySelector("#next");
        let leftBtn = document.querySelector("#left");
        let buttons = document.querySelector(".buttons");
        
        const nextFn =()=> this.next({target:nextBtn, left:leftBtn, btn:buttons})
        this.seq = this.seq;
        nextBtn.addEventListener("click", nextFn);

        if (this.auto) {
            for (let j = 0; j <this.seq.length-3; j++) {
                nextFn()
            }
        }
    }

    next = (e) => {
        let s = this.seq[this.i];
        let ele = document.querySelector(s.ele);
        // console.log(s,ele,e.target);

        switch (s.cmd) {
            case "show":
                ele.style.display = "block"
                break;
            case "hide":
                ele.style.display = "none";
                break;
            case "update":
                ele.innerHTML = s.content;
                break;
            
            case "style":
                Object.keys(s.style).forEach(sp=>{
                    ele.style[sp] = s.style[sp];
                })
                break;

            case "fun":
                s.fun()
                break;
            default:
                break;
        };


        e.btn.style.opacity = 0;
        setTimeout(()=>{
            e.btn.style.opacity = 1;
            e.target.innerHTML = s.next;
            e.left.innerHTML = `<div class="leftText">${s.text}</div>`
            this.i = (this.i + 1) % this.seq.length;
    
            if(s.jump){
                this.next(e);
            }
        },2000)

      
    }
}
