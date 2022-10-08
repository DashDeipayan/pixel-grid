const canvas = document.getElementById("canvas");
const dimension = document.getElementById("dimension");
const generate = document.getElementById("generate");
const pallete = document.getElementById("pallete");
let color = "#000";

const colorPallete = [
  "FF1744",
  "D500F9",
  "3D5AFE",
  "00E676",
  "FFFF00",
  "FF6D00",
  "78909C",
  "3E2723",
  "212121",
  "E91E63",
];

generate.addEventListener("click", e => {
  e.preventDefault();
  generateGrid(Number(dimension.value));
  generatePallete();
});

const generateGrid = dimension => {
  canvas.innerHTML = "";

  for (let i = 0; i < dimension; i++) {
    const row = canvas.insertRow(i);
    for (let j = 0; j < dimension; j++) {
      const pixel = row.insertCell(j);
      pixel.id = `${i}-${j}`;
      sizeGenerator(pixel, dimension);
    }
  }
  canvas.addEventListener("mousedown", e => {
    let cell = e.target;
    cell.style.backgroundColor = color;
    canvas.addEventListener("mouseover", e => {
      let hoveredCell = e.target;
      if (e.buttons === 1) hoveredCell.style.backgroundColor = color;
    });
  });
};

const generatePallete = () => {
  pallete.innerHTML = "";

  const colorCellRow = pallete.insertRow(0);
  for (let item = 0; item < colorPallete.length; item++) {
    const colorCell = colorCellRow.insertCell(item);
    sizeGenerator(colorCell, colorPallete.length);
    colorCell.style.backgroundColor = `#${colorPallete[item]}`;
  }
  pallete.addEventListener("click", e => {
    let pickedColor = e.target;
    color = pickedColor.style.backgroundColor;
  });
};

const sizeGenerator = (el, size) => {
  el.style.width = el.style.height = `${800 / size}px`;
};
