var imageList = ["images/img_1.jpg",
"images/img_2.jpg",
"images/img_3.jpg",
"images/img_4.jpg",
"images/img_5.jpg"];

var count = 0

//Taking the Body element from HTML.

const body = document.querySelector("body");

//Creating Divs for Index.
const galleryDiv = document.createElement("div");
const viewDiv = document.createElement("div"); 
const buttonsDiv = document.createElement("div");

galleryDiv.id = "gallery";
viewDiv.id = "view";
buttonsDiv.id = "buttons";

body.appendChild(galleryDiv);
body.appendChild(viewDiv);

const gallery = document.querySelector("#gallery");
const view = document.querySelector("#view");
const buttons = document.querySelector("#buttons");

//Creating Imgs for Index.

//View.

const viewSpace = document.createElement("img");
viewSpace.id = "viewSpace";
view.appendChild(viewSpace);

const viewSpaceImg = document.querySelector("#viewSpace");

//Gallery.

for (let index = 0; index < imageList.length; index++) {

    let imageSpace = document.createElement("img")   
    let imageSrc = imageList[index];

    imageSpace.src = imageSrc;

//Making an event to put it in a bigger screen.

    imageSpace.addEventListener("click", (event) =>{
        
        count = index;

        viewSpaceImg.src = imageSpace.src;

    });

//Adding to the div.

    galleryDiv.appendChild(imageSpace);

}

//Creating buttons for Index.

//Adding in the View's Div.
viewDiv.appendChild(buttonsDiv);

const buttonPrevious = document.createElement("button");
const buttonNext = document.createElement("button");

buttonPrevious.id = "previous";
buttonNext.id = "next";

buttonPrevious.textContent = "Anterior";
buttonNext.textContent = "Próximo";

buttonsDiv.appendChild(buttonPrevious);
buttonsDiv.appendChild(buttonNext);

const buttonPreviousAction = document.querySelector("#previous");
const buttonNextAction = document.querySelector("#next");

//Creating events for each one.

//Previous.

buttonPreviousAction.addEventListener("click", (event) =>{

    if (count > 0) {

        viewSpaceImg.style.opacity = 0;

        setTimeout(() =>{

            viewSpaceImg.style.opacity = 1;
            count --;
            viewSpaceImg.src = imageList[count];

        }, 500);
    };
});

//Next.

buttonNextAction.addEventListener("click", (event) =>{

    if (count < imageList.length - 1) {

        viewSpaceImg.style.opacity = 0;

        setTimeout(() =>{

            viewSpaceImg.style.opacity = 1;
            count ++;
            viewSpaceImg.src = imageList[count];

        }, 500);
    };
});