// Student Task Planner - vanilla JavaScript, tanpa library eksternal.

const STORAGE_KEY = "student-task-planner";

const form = document.getElementById("task-form");
const titleInput = document.getElementById("task-title");
const dueInput = document.getElementById("task-due");
const listEl = document.getElementById("task-list");
const emptyEl = document.getElementById("empty");
const summaryEl = document.getElementById("summary");
const filterButtons = document.querySelectorAll(".filter");

let currentFilter = "all";

// Tanggal contoh dibuat relatif terhadap hari ini supaya selalu relevan.
function dateFromNow(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

function defaultTasks() {
  return [
    { id: 1, title: "Kumpulkan laporan Kalkulus", due: dateFromNow(-1), completed: false },
    { id: 2, title: "Baca bab 3 Pengantar Pemrograman", due: dateFromNow(2), completed: false },
    { id: 3, title: "Kuis Fisika Dasar", due: dateFromNow(5), completed: false },
    { id: 4, title: "Daftar akun GitHub", due: dateFromNow(-3), completed: true },
  ];
}

function loadTasks() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(saved)) return saved;
  } catch (err) {
    // data rusak atau storage tidak tersedia: pakai data contoh
  }
  return defaultTasks();
}

function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (err) {
    // abaikan jika storage tidak tersedia
  }
}

let tasks = loadTasks();

function todayString() {
  return new Date().toISOString().slice(0, 10);
}

function formatDate(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString("id-ID", {
    weekday: "short", day: "numeric", month: "short", year: "numeric",
  });
}

function visibleTasks() {
  const filtered = tasks.filter((t) => {
    if (currentFilter === "pending") return !t.completed;
    if (currentFilter === "completed") return t.completed;
    return true;
  });
  return filtered.sort((a, b) => a.due.localeCompare(b.due));
}

function render() {
  const items = visibleTasks();
  listEl.replaceChildren();

  items.forEach((task) => {
    const overdue = !task.completed && task.due < todayString();

    const li = document.createElement("li");
    li.className = "task" + (task.completed ? " is-completed" : "") + (overdue ? " is-overdue" : "");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.setAttribute("aria-label", "Tandai selesai: " + task.title);
    checkbox.addEventListener("change", () => toggleTask(task.id));

    const info = document.createElement("div");
    const title = document.createElement("div");
    title.className = "task-title";
    title.textContent = task.title;
    const due = document.createElement("div");
    due.className = "task-due";
    due.textContent = "Tenggat: " + formatDate(task.due);
    info.append(title, due);

    const badge = document.createElement("span");
    badge.className = "badge " + (task.completed ? "completed" : overdue ? "overdue" : "pending");
    badge.textContent = task.completed ? "Selesai" : overdue ? "Terlambat" : "Belum selesai";

    li.append(checkbox, info, badge);
    listEl.append(li);
  });

  emptyEl.hidden = items.length > 0;
  if (items.length === 0) {
    emptyEl.textContent = tasks.length === 0
      ? "Belum ada tugas. Tambahkan tugas pertamamu di atas."
      : "Tidak ada tugas pada filter ini.";
  }

  const pending = tasks.filter((t) => !t.completed).length;
  summaryEl.textContent = pending + " dari " + tasks.length + " tugas belum selesai";
}

function toggleTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (!task) return;
  task.completed = !task.completed;
  saveTasks();
  render();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = titleInput.value.trim();
  if (!title || !dueInput.value) return;
  const id = tasks.reduce((max, t) => Math.max(max, t.id), 0) + 1;
  tasks.push({ id, title, due: dueInput.value, completed: false });
  saveTasks();
  form.reset();
  render();
});

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;
    filterButtons.forEach((b) => {
      const active = b === btn;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", String(active));
    });
    render();
  });
});

render();
