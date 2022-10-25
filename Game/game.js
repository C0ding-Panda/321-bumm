function start() {
setTimeout(
    function show3() {
        document.getElementById("txt_3").style.display = "flex";
    },
    1000
)
setTimeout(
    function show2() {
        document.getElementById("txt_3").style.display = "none";
        document.getElementById("txt_2").style.display = "flex";
    },
    2000
)
setTimeout(
    function show1() {
        document.getElementById("txt_2").style.display = "none";
        document.getElementById("txt_1").style.display = "flex";
    },
    3000
)
setTimeout(
    function show_bumm() {
        document.getElementById("txt_1").style.display = "none  ";
        document.getElementById("txt_bumm").style.display = "flex";
    },
    4000
)
setTimeout(
    function destroy() {
        document.getElementById("txt_bumm").style.display = "none";
    },
    7000
)
}