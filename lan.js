var nom = document.getElementById("nom");
var title = document.getElementById("title");
var title2 =document.getElementById("title2");
var btn2 = document.getElementById("btn2");
var arabic = document.getElementById("arabic");
var english = document.getElementById("english");

arabic.onclick = ()=>{
    setLanugage("arabic");
    localStorage.setItem("lang","arabic");

}

english.onclick = ()=>{
    setLanugage("english");
    localStorage.setItem("lang","english");

}
onload = ()=>{
    setLanugage(localStorage.getItem("lang"));
}

function setLanugage(getLanugage) {
    if(getLanugage === "arabic"){
        nom.innerHTML = "الحسن عاشيري";
        title.innerHTML = "مرحبا بكم في موقع الحسن عاشيري";
        title2.innerHTML = `هده الصفحة الرسمية لحسن عاشيري ستجد في هده الصفحة
        تصميم الجرافيك بشكل راقي وعصري أنت الآن بالمكان المناسب
       لاختيار ما هو أفضل لكم ولمشروعكم. ولأنكم تستحقون هذا يمكننا
       تقديم ما هو أفضل لكم من ناحية الجودة والدقة والاتقان`;
       btn2.innerHTML = "انقر هنا";
    }
    else if(getLanugage === "english"){
        nom.innerHTML = "HASSAN ACHIRI";
        title.innerHTML = "Welcome to website of hassan achiri";
        title2.innerHTML = `This is the official page of Hassan Asheri you will find on this page
        Graphic design in a sophisticated and modern way You are now in the right place
        To choose what is best for you and your project. And because you deserve it, we can
        Providing what is best for you in terms of quality, accuracy and workmanship`;
       btn2.innerHTML = "Click Here";
    }
    
}