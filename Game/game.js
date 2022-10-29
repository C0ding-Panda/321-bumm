function start() {
    let color1_1 = Math.floor(Math.random() * 255);
    let color1_2 = Math.floor(Math.random() * 255);
    let color1_3 = Math.floor(Math.random() * 255);
    let color1 =  "rgb(" + color1_1 + "," + color1_2 + ", " + color1_3 + ")";
    //clr1
    let color2_1 = Math.floor(Math.random() * 255);
    let color2_2 = Math.floor(Math.random() * 255);
    let color2_3 = Math.floor(Math.random() * 255);
    let color2 =  "rgb(" + color2_1 + "," + color2_2 + ", " + color2_3 + ")";
    //clr2
    let color3_1 = Math.floor(Math.random() * 255);
    let color3_2 = Math.floor(Math.random() * 255);
    let color3_3 = Math.floor(Math.random() * 255);
    let color3 =  "rgb(" + color3_1 + "," + color3_2 + ", " + color3_3 + ")";
    //clr3
    let color4_1 = Math.floor(Math.random() * 255);
    let color4_2 = Math.floor(Math.random() * 255);
    let color4_3 = Math.floor(Math.random() * 255);
    let color4 =  "rgb(" + color4_1 + "," + color4_2 + ", " + color4_3 + ")";
    //clr4
    let color5_1 = Math.floor(Math.random() * 255);
    let color5_2 = Math.floor(Math.random() * 255);
    let color5_3 = Math.floor(Math.random() * 255);
    let color5 =  "rgb(" + color5_1 + "," + color5_2 + ", " + color5_3 + ")";
    //clr5 
    let all_colors = [color1, color2, color3, color4, color5];
    let color_extra = all_colors[Math.floor(Math.random() * 4)];
    function coloring_divs() {
        let div1 = document.getElementById("clr1");
        let div2 = document.getElementById("clr2");
        let div3 = document.getElementById("clr3");
        let div4 = document.getElementById("clr4");
        let div5 = document.getElementById("clr5");
        let div_extra = document.getElementById("clr_extra");
        div1.style.backgroundColor = color1;
        div2.style.backgroundColor = color2;
        div3.style.backgroundColor = color3;
        div4.style.backgroundColor = color4;
        div5.style.backgroundColor = color5;
        div_extra.style.backgroundColor = color_extra;
    }
    //show divs function
setTimeout(
    function show3() {
        document.getElementById("txt_3").style.display = "flex";
        document.getElementById("colors").style.display = "flex";
        coloring_divs()
    },
    1000
)
setTimeout(
    function show2() {
        document.getElementById("txt_3").style.display = "none";
        document.getElementById("txt_2").style.display = "flex";
        document.getElementById("extra_color").style.display = "flex";
    },
    2100
)
setTimeout(
    function show1() {
        document.getElementById("txt_2").style.display = "none";
        document.getElementById("txt_1").style.display = "flex";
    },
    3100
)
setTimeout(
    function show_bumm() {
        document.getElementById("txt_1").style.display = "none  ";
        document.getElementById("txt_bumm").style.display = "flex";
    },
    4100    
)
setTimeout(
    function destroy() {
        document.getElementById("txt_bumm").style.display = "none";
        document.getElementById("colors").style.display = "none";
        document.getElementById("extra_color").style.display = "none";
    },
    7000
    )
}
function first() {
    if (document.getElementById("clr_extra").style.backgroundColor == document.getElementById("clr1").style.backgroundColor){
        window.alert("you won!");
    }
    
}
function second() {
    if (document.getElementById("clr_extra").style.backgroundColor == document.getElementById("clr2").style.backgroundColor){
        window.alert("you won!");
    }
    
}
function third() {
    if (document.getElementById("clr_extra").style.backgroundColor == document.getElementById("clr3").style.backgroundColor){
        window.alert("you won!");
    }
    
}
function fourth() {
    if (document.getElementById("clr_extra").style.backgroundColor == document.getElementById("clr4").style.backgroundColor){
        window.alert("you won!");
    }
    
}
function fifth() {
    if (document.getElementById("clr_extra").style.backgroundColor == document.getElementById("clr5").style.backgroundColor){
        window.alert("you won!");
    }
    
}