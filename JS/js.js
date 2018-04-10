/**
 * Created by Dean.
 */


/*var*/

/****---------------BannerHead---------------------********/

mainBanner = document.getElementById("banner"),
imageArray = ["Images/myrtle-beach-glass-company-main-image.jpg", "Images/products-banner2.jpg", "Images/testimonial-banner3.jpg"],
imageIndex = 0

    ;










/*/!***---------------Function***ShowPic***GalleryBull****MainBanner---------------------*/



function displayPic1() {


    /*console.log(document.getElementById("banner").src);*/

    document.getElementById("banner").style.backgroundImage = "url('Images/myrtle-beach-glass-company-main-image.jpg')";

}//displayPic1


function displayPic2() {
    /*console.log(document.getElementById("banner").src);*/

    document.getElementById("banner").style.backgroundImage = "url('Images/products-banner2.jpg')";
}//displayPic2


function displayPic3() {
    /*console.log(document.getElementById("banner").style.backgroundImage);*/

    document.getElementById("banner").style.backgroundImage = "url('Images/testimonial-banner3.jpg')";

}//displayPic3








/*/------------------------- Main Banner AutoChangePic ------------/ */




function changeImageAuto() {
    mainBanner.setAttribute("src", imageArray [ imageIndex]);
    //console.log(document.getElementById("bannerHead"));
    imageIndex++;

    if(imageIndex >= imageArray.length){
        imageIndex = 0;
    }
}//changeImageAuto


var intervalHandle = setInterval(changeImageAuto, 3000);
