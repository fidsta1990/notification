const notify = document.querySelector(".notification");
// console.log(notify);
const saveQty = document.querySelector("#qty");
// console.log(saveQty);
const albums = document.querySelectorAll(".album");
// console.log(albums);
const saveBtn = document.querySelector(".btn");
// console.log(btn);
// ========================================

let albumsSelected = [];
let i = 0;

while (i < albums.length) {
  albums[i].onclick = function () {
    let albumTitle = this.querySelector(".album-title").textContent;
    // console.log(albumTitle);
    if (this.classList.contains("selected") !== true) {
      this.classList.add("selected");
      albumsSelected.push(albumTitle);
    } else {
      this.classList.remove("selected");
      albumsSelected = albumsSelected.filter(function (item) {
        return item !== albumTitle;
      });
    }
    console.log(albumsSelected);
  };
  console.log(i);
  i++;
}

saveBtn.addEventListener("click", () => {
  saveQty.textContent = albumsSelected.length + " items saved";
  notify.classList.add("active");

  setTimeout(function () {
    notify.classList.remove("active");
  }, 4000);
});

// notify.addEventListener("click", () => {
//   notify.classList.remove("active");
// });

// click album

// show user they selected the album, so we add  class to the album div

// add an array and then add the album we selected to the array.

//find out the total of the album selected

//save button is clicked, then when clicked, show notification with saved items total
