// HARDCODED
const imgs_project1 = [
  {
    image: "images/project1/IMG_2784.jpeg",
    href: "videos/00280af5034f4336b3c2d704ebd950a1.mp4",
    download: null,
    id: "project1",
    title: "click me! (credit to @monet_casas)",
  },
  {
    image: "images/project1/image.png",
    href: null,
    download: null,
    id: "project1",
    title: null,
  },
];

function changeImg(container, source, index) {
  const img = document.createElement("img");
  img.src = source[index].image;
  img.className = "content_img";
  img.id = source[index].id;

  if (source[index].href) {
    const anchor = document.createElement("a");
    anchor.title = source[index].title;
    anchor.href = source[index].href;

    if (source[index].download) {
      anchor.download = source[index].download;
    } else {
      anchor.target = "_blank";
    }

    anchor.appendChild(img);

    container.replaceChildren(anchor);
  }
  else {
    container.replaceChildren(img);
  }
}

async function fadeImg(source) {
  return new Promise((resolve) => {
    source.addEventListener("transitionend", function handler(e) {
      if (e.propertyName === "opacity") {
        source.removeEventListener("transitionend", handler);
        resolve();
      }
    });

    source.style.transition = "opacity 0.5s";
    source.style.opacity = 0;
  });
}

const project1 = document.getElementById("project1");

let pos1 = 0;

changeImg(project1, imgs_project1, pos1);
setInterval(async () => {
  pos1 = (pos1 + 1) % imgs_project1.length;
  await fadeImg(project1);
  changeImg(project1, imgs_project1, pos1);
  project1.style.transition = "opacity 0.5s";
  project1.style.opacity = 1;
}, 10000);
