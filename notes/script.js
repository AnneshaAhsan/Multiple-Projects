const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Show notes from localStorage
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes") || "";
  bindNoteEvents(); // rebind delete and keyup events
}

// Save to localStorage
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

// Create a new note
createBtn.addEventListener("click", () => {
  const inputBox = document.createElement("div");
  inputBox.className = "input-box";

  const note = document.createElement("p");
  note.setAttribute("contenteditable", "true");
  note.classList.add("note-text");

  const img = document.createElement("img");
  img.src = "images/delete.png";

  img.addEventListener("click", () => {
    inputBox.remove();
    updateStorage();
  });

  note.addEventListener("keyup", updateStorage);

  inputBox.appendChild(note);
  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);
  updateStorage();
});

// Rebind events for stored notes
function bindNoteEvents() {
  const allNotes = notesContainer.querySelectorAll(".input-box");
  allNotes.forEach((box) => {
    const p = box.querySelector("p");
    const img = box.querySelector("img");

    p.addEventListener("keyup", updateStorage);
    img.addEventListener("click", () => {
      box.remove();
      updateStorage();
    });
  });
}

// Prevent Enter from adding a new note
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});

showNotes(); // load notes on page load
