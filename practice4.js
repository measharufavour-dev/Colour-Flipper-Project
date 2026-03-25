const textarea = document.getElementById("noteInput");
const button = document.getElementById("btn");
const para = document.getElementById("status");

button.addEventListener("click", function takenote() {
  const toSaveNote = textarea.value;
  localStorage.setItem("myNote", toSaveNote);
  para.innerText = `"✅ ${toSaveNote} Saved to browser memory!"`;
});
const toSaveNote = localStorage.getItem("myNote");
if (toSaveNote) {
  noteInput.value = toSaveNote;
} else {
  ("We can't your note");
}
