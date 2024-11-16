const data = [
  {
    title: "Calculator",
    description:
      "A project showcasing a simple calculator using HTML, CSS, and JavaScript.",
    imgSrc: "calculator.jpg",
    codeLink: "https://github.com/nikshay444/Calculator",
    demoLink: "https://nikshay444.github.io/Calculator/",
  },
  {
    title: "Todo App",
    description: "An interactive to-do list built using modern JavaScript.",
    imgSrc: "todolist.jpg",
    codeLink: "https://github.com/nikshay444/TodoList",
    demoLink: "https://nikshay444.github.io/TodoList/",
  },
  {
    title: "Flash Card",
    description: "An interactive flash card built using modern JavaScript.",
    imgSrc: "note.jpg",
    codeLink: "https://github.com/nikshay444/FlashCard",
    demoLink: "https://nikshay444.github.io/FlashCard/",
  },
  {
    title: "Timer",
    description:
      "A project showcasing a simple Timer using HTML, CSS, and JavaScript.",
    imgSrc: "timer.jpg",
    codeLink: "https://github.com/nikshay444/Timer",
    demoLink: "https://nikshay444.github.io/Timer/",
  },
  {
    title: "Sticky Note",
    description: "An interactive Sticky Note built using modern JavaScript.",
    imgSrc: "stickyNote.jpg",
    codeLink: "https://github.com/nikshay444/Sticky-Note",
    demoLink: "https://nikshay444.github.io/Sticky-Note/",
  },
  {
    title: "Grocery List",
    description: "An interactive Grocery List built using modern JavaScript.",
    imgSrc: "groceryList.jpg",
    codeLink: "https://github.com/nikshay444/Grocery-List",
    demoLink: "https://nikshay444.github.io/Grocery-List/",
  },
  {
    title: "Images Generate",
    description:
      "A project showcasing a imageGenerate using HTML and CSS,javascript and Api",
    imgSrc: "loading.jpg",
    codeLink: "https://github.com/nikshay444/Loading-system",
    demoLink: "https://nikshay444.github.io/Loading-system/",
  },
  {
    title: "Quote Generator",
    description:
      "An interactive Quote Generator built using modern JavaScript.",
    imgSrc: "quoteGenerator.jpg",
    codeLink: "https://github.com/nikshay444/Quote-Generator",
    demoLink: "https://nikshay444.github.io/Quote-Generator/",
  },
];

const container = document.querySelector(".container");

data.forEach((item) => {
  const imgContainer = document.createElement("div");
  imgContainer.className = "imgContainer";
  imgContainer.innerHTML = `
    <div class="imgFill">
    <img src="${item.imgSrc}"alt="${item.title}" ></div>
    <div class="textBox">
    <h2>${item.title}</h2>
    <p>${item.description}</p>
    <button class="btnCode" onclick="window.location.href='${item.codeLink}'">Code</button>
      <button class="btnCode" onclick="window.location.href='${item.demoLink}'">Demo</button>
    </div>`;

  container.appendChild(imgContainer);
});
