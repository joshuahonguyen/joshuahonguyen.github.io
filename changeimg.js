const project1 = document.getElementById("project1");

// HARDCODED
const imgs_project1 = [
  {
    image: "images/project1/IMG_2784.jpeg",
    href: "videos/00280af5034f4336b3c2d704ebd950a1.mp4",
    download: null,
    id: "project1",
    title: "click me! (credit to @monet_casas)"
  },
  {
    image: "images/project1/image.png",
    href: "resources/digitalstopwatch.ms14",
    download: "digitalstopwatch.ms14",
    id: "project1",
    title: "click me!"
  },
];

function changeImg(container, source, index) {
  const anchor = document.createElement("a");
  anchor.href = source[index].href;
  anchor.title = source[index].title;

  if (source[index].download) {
    anchor.download = source[index].download;
  } else {
    anchor.target = "_blank";
  }

  const img = document.createElement("img");
  img.src = source[index].image;
  img.className = "content_img";
  img.id = source[index].id;

  anchor.appendChild(img);

  container.replaceChildren(anchor);
}

async function fadeImg(source) {
  return new Promise((resolve) => {
    source.addEventListener("transitionend", function handler(e) {
      if (e.propertyName === "opacity") {
        changeImg(project1, imgs_project1, pos1);
        source.removeEventListener("transitionend", handler);
        resolve();
      }
    });

    source.style.transition = "opacity 0.5s";
    source.style.opacity = 0;
  });
}

let pos1 = 0;
changeImg(project1, imgs_project1, pos1);
setInterval(async () => {
  const proj1 = document.getElementById("project1");
  pos1 = (pos1 + 1) % imgs_project1.length;

  await fadeImg(proj1);
  proj1.style.transition = "none";
  proj1.style.opacity = 1;
}, 10000);
