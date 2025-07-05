
const boxes = document.querySelectorAll(".box");
const radios = document.querySelectorAll("input[type=radio]");

boxes.forEach((box, idx) => {
    box.addEventListener("click", () => {
        boxes.forEach(b => b.classList.remove("active"));
        radios.forEach(r => r.checked = false);
        box.classList.add("active");
        box.querySelector("input[type=radio]").checked = true;
    });
});