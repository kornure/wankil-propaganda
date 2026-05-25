// ---------------- MAP ----------------

const map = L.map('map').setView([48.8566, 2.3522], 3);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap © CARTO'
}).addTo(map);

// ---------------- SIDEBAR ELEMENTS ----------------

const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleSidebar");
const overlay = document.getElementById("overlay");

// état
let isOpen = true;

// ouvrir / fermer
function openSidebar(){
    sidebar.classList.remove("closed");
    overlay.classList.add("active");
    isOpen = true;
    setTimeout(() => map.invalidateSize(), 250);
}

function closeSidebar(){
    sidebar.classList.add("closed");
    overlay.classList.remove("active");
    isOpen = false;
    setTimeout(() => map.invalidateSize(), 250);
}

function toggleSidebar(){
    isOpen ? closeSidebar() : openSidebar();
}

// bouton + overlay
toggleBtn.addEventListener("click", toggleSidebar);
overlay.addEventListener("click", closeSidebar);

// ---------------- SWIPE (TOUCH) ----------------

let startX = 0;
let currentX = 0;
let dragging = false;

sidebar.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    dragging = true;
});

sidebar.addEventListener("touchmove", (e) => {
    if (!dragging) return;

    currentX = e.touches[0].clientX;
    let diff = currentX - startX;

    // si fermé → swipe droite ouvre
    if (!isOpen) {
        diff = Math.min(diff, 280);
        if (diff > 0) {
            sidebar.style.transform = `translateX(${diff - 280}px)`;
        }
    }

    // si ouvert → swipe gauche ferme
    if (isOpen) {
        diff = Math.min(diff, 0);
        sidebar.style.transform = `translateX(${diff}px)`;
    }
});

sidebar.addEventListener("touchend", (e) => {
    dragging = false;
    sidebar.style.transform = "";

    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;

    // seuil swipe
    if (!isOpen && diff > 80) openSidebar();
    else if (isOpen && diff < -80) closeSidebar();
});

// ---------------- ICON ----------------

const icon = L.divIcon({
    className: "",
    html: `<div class="custom-marker"></div>`,
    iconSize: [18, 18]
});

let markers = [];

// ---------------- MARKERS ----------------

function createMarker(loc, index){

    const marker = L.marker(loc.coords, {icon}).addTo(map);

    marker.bindPopup(`
        <div>
            <img src="${loc.image}" style="width:100%;border-radius:8px;">
            <h3>${loc.title}</h3>
        </div>
    `);

    marker.on("click", () => {

        L.popup({
            maxWidth: 400,
            className: "big-popup"
        })
        .setLatLng(loc.coords)
        .setContent(`
            <div class="big-popup">
                <img src="${loc.image}">
                <h2>${loc.title}</h2>
                <div class="desc">${loc.description}</div>
            </div>
        `)
        .openOn(map);

        setActive(index);
    });

    markers.push(marker);
}

locations.forEach(createMarker);

// ---------------- LIST ----------------

function renderList(list = locations){

    const container = document.getElementById("list");

    container.innerHTML = list.map((loc, i) => `
        <div class="item" data-index="${i}">
            📍 ${loc.title}
        </div>
    `).join("");

    document.querySelectorAll(".item").forEach((el, i) => {

        el.addEventListener("click", () => {

            const m = markers[i];

            map.setView(m.getLatLng(), 10);
            m.openPopup();

            setActive(i);

            // mobile: ferme après sélection
            if (window.innerWidth < 768) closeSidebar();
        });
    });
}

renderList();

// ---------------- SEARCH ----------------

document.getElementById("searchInput").addEventListener("input", (e)=>{

    const q = e.target.value.toLowerCase();

    const filtered = locations.filter(loc =>
        (loc.title + loc.description).toLowerCase().includes(q)
    );

    renderList(filtered);
});

// ---------------- GALLERY ----------------

function renderGallery(filter = ""){

    const g = document.getElementById("gallery");

    const q = filter.toLowerCase();

    const filtered = locations
        .map((loc, i) => ({...loc, i}))
        .filter(loc =>
            (loc.title + loc.description).toLowerCase().includes(q)
        );

    g.innerHTML = filtered.map(loc => `
        <img src="${loc.image}" data-index="${loc.i}" />
    `).join("");

    document.querySelectorAll("#gallery img").forEach(img => {

        img.addEventListener("click", () => {

            const i = img.dataset.index;

            const m = markers[i];

            map.setView(m.getLatLng(), 10);
            m.openPopup();

            setActive(i);

            if (window.innerWidth < 768) closeSidebar();
        });
    });
}

renderGallery();

// ---------------- ACTIVE ----------------

function setActive(index){

    document.querySelectorAll("#gallery img").forEach(img => {
        img.classList.remove("gallery-active");
    });

    const el = document.querySelector(`#gallery img[data-index="${index}"]`);
    if(el) el.classList.add("gallery-active");
}

// ---------------- GALLERY SEARCH ----------------

document.getElementById("gallerySearch").addEventListener("input", (e)=>{
    renderGallery(e.target.value);
});
