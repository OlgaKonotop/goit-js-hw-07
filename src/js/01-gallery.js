import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector(".gallery");

//console.log(galleryBox)
const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item"> 
<a class="gallery__link" href="${original}"> 
  <img 
    class="gallery__image" 
    src="${preview}" 
    data-source="${original}" 
    alt="Image ${description}" 
  /> 
</a> 
</div>`
  )
  .join("");
//console.log(markup);
galleryBox.insertAdjacentHTML("beforeend", markup);
galleryBox.addEventListener("click", onSearch);

let instance;

function onSearch(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const url = e.target.dataset.source;
  console.log(url);
  console.log("click");
  instance = basicLightbox.create(` 
 <img src =${e.target.dataset.source}>`);
  instance.show();
  // onCloseEsc(e);

  onAddKeyListener();
  // onRemoveKeyListener();
}

function onAddKeyListener() {
  galleryBox.addEventListener("keydown", onCloseEsc);
}

function onRemoveKeyListener() {
  galleryBox.removeEventListener("keydown", onCloseEsc);
}

function onCloseEsc(e) {
  console.log(e.code);
  if (e.code === "Escape") {
    instance.close();
    onRemoveKeyListener();
    console.log(e.code);
  }
}

//onRemoveEventToEsc();
