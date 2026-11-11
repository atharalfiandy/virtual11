async function loadFiles() {
  const grid = document.querySelector('#file-grid');
  const search = document.querySelector('#file-search');
  const empty = document.querySelector('#empty-state');
  const count = document.querySelector('#file-count');
  if (!grid || !search || !empty || !count) return;

  try {
    const response = await fetch('./data/files.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const files = await response.json();
    count.textContent = files.length;

    function render() {
      const query = search.value.trim().toLowerCase();
      const visible = files.filter((file) =>
        `${file.name} ${file.category} ${file.description}`.toLowerCase().includes(query)
      );
      grid.replaceChildren(...visible.map((file) => {
        const card = document.createElement('a');
        card.className = 'file-card';
        card.href = file.href;
        const icon = document.createElement('span');
        icon.className = 'file-icon';
        icon.textContent = file.type.toUpperCase();
        const title = document.createElement('strong');
        title.textContent = file.name;
        const detail = document.createElement('small');
        detail.textContent = file.category;
        card.append(icon, title, detail);
        return card;
      }));
      empty.hidden = visible.length > 0;
    }

    search.addEventListener('input', render);
    render();
  } catch (error) {
    grid.textContent = 'Daftar berkas tidak dapat dimuat. Jalankan server lokal agar fetch JSON berfungsi.';
    console.error('Gagal memuat data berkas:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadFiles);
