//aboutByronO java
    //variables
const aboutTitle = document.getElementById("title");
let count = 0;
    //functions
function showAdjectives (id){
    document.getElementsById("id")="The Coolest, Smartes, and Funiest";
}
function changeImage(){
    count=count+1;
    switch (count % 3){
        case 0:
            document.getElementById("meImage").src="me1.png";
            break;
        case 1:
            document.getElementById("meImage").src="me2.png";
            break;
        case 2:
            document.getElementsById("meImage").src="me3.png";
            break;
    }
    print(count);
}