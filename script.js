function showSection(id) {
  document.querySelectorAll('.content').forEach(s => s.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function answer(message) {
  alert(message);
}

document.getElementById('themeBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
