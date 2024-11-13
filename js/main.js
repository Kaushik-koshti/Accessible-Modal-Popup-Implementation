
function change() {
    document.getElementById('modal').style.opacity = ".3"
    document.getElementById('main1').style.backgroundColor = "white";
    document.getElementById('main1').style.borderRadius = "20px";
    document.getElementById('main1').style.alignItems = "center";
    document.getElementById('body').style.backgroundColor = "#00000080"
    document.getElementById('main1').style.border = "3px solid black";
    document.getElementById('main1').style.display = "flex";
    document.getElementById('main1').style.flexDirection = "column";
    console.log('click')
}

    document.getElementById('close').addEventListener("click", function () {
        console.log("click2");
        document.getElementById('main1').style.display = "none";
        document.getElementById('body').style.backgroundColor = "#fff";
        document.getElementById('modal').style.opacity = "1";


})