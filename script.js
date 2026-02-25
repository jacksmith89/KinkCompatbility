// --- MASTER LIST DATA ---
// You can expand this list as much as you want. 
// Just ensure every 'id' is unique (e.g., E01, E02).
const masterData = {
    "Essentials": [
        { id: "E01", name: "Aftercare", desc: "Physical and emotional care provided after a scene to help everyone ground and decompress." },
        { id: "E02", name: "Safe Words", desc: "A system (like Red/Yellow/Green) used to communicate limits and intensity during play." }
    ],
    "Impact Play": [
        { id: "I01", name: "Spanking", desc: "Striking the buttocks with an open hand or flat implement for sensation or discipline." },
        { id: "I02", name: "Cane Play", desc: "High-intensity impact using thin, flexible implements that create a 'stingy' sensation." }
    ],
    "Sensation": [
        { id: "S01", name: "Blindfolds", desc: "The use of fabric or masks to remove sight, heightening other senses and anticipation." },
        { id: "S02", name: "Wax Play", desc: "Dripping specialized low-temperature candle wax onto the skin for sensory stimulation." }
    ]
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    renderSurvey();
    setupEventListeners();
});

// --- SURVEY RENDERING ---
function renderSurvey() {
    const container = document.getElementById('survey-container');
    container.innerHTML = ''; // Clear existing content

    for (const [category, items] of Object.entries(masterData)) {
        let sectionHtml = `
            <div class="category-block" data-category="${category}">
                <div class="category-header">${category} <span>+</span></div>
                <div class="category-content">
                    <table>
                        <thead>
                            <tr>
                                <th rowspan="2">Activity</th>
                                <th colspan="2">GIVING</th>
                                <th colspan="2">RECEIVING</th>
                            </tr>
                            <tr>
                                <th>Hist</th><th>Int</th><th>Hist</th><th>Int</th>
                            </tr>
                        </thead>
                        <tbody>`;
        
        items.forEach(item => {
            sectionHtml += `
                <tr class="activity-row" data-name="${item.name.toLowerCase()}">
                    <td class="act-name" onclick="showInfo('${item.name.replace(/'/g, "\\'")}', '${item.desc.replace(/'/g, "\\")}')">
                        ${item.name} <span class="info-icon">ⓘ</span>
                    </td>
                    <td><input type="checkbox" id="gh-${item.id}"></td>
                    <td><select id="gs-${item.id}">${[1,2,3,4,5].map(v => `<option value="${v}" ${v==3?'selected':''}>${v}</option>`).join('')}</select></td>
                    <td><input type="checkbox" id="rh-${item.id}"></td>
                    <td><select id="rs-${item.id}">${[1,2,3,4,5].map(v => `<option value="${v}" ${v==3?'selected':''}>${v}</option>`).join('')}</select></td>
                </tr>`;
        });
        sectionHtml += `</tbody></table></div></div>`;
        container.innerHTML += sectionHtml;
    }
}

// --- CORE LOGIC & EVENT LISTENERS ---
function setupEventListeners() {
    // Accordion Toggles
    document.addEventListener('click', (e) => {
        if (e.target.closest('.category-header')) {
            const header = e.target.closest('.category-header');
            const content = header.nextElementSibling;
            content.classList.toggle('open');
            header.querySelector('span').innerText = content.classList.contains('open') ? '-' : '+';
        }
    });

    // Tab Switching
    document.getElementById('tab-survey').addEventListener('click', () => showPage('survey-page', 'tab-survey'));
    document.getElementById('tab-matrix').addEventListener('click', () => showPage('matrix-page', 'tab-matrix'));

    // Buttons
    document.getElementById('btn-generate').addEventListener('click', generateShortCode);
    document.getElementById('btn-compare').addEventListener('click', runComparison);

    // Modal Close (Outside click)
    window.onclick = function(event) {
        const modal = document.getElementById('info-modal');
        if (event.target == modal) closeModal();
    }
}

// --- SEARCH / FILTER LOGIC ---
// You will need to add <input type="text" id="searchInput"> to your index.html to use this
function filterActivities(query) {
    const q = query.toLowerCase();
    document.querySelectorAll('.activity-row').forEach(row => {
        const name = row.getAttribute('data-name');
        row.style.display = name.includes(q) ? '' : 'none';
    });

    // Hide categories that have no visible activities
    document.querySelectorAll('.category-block').forEach(block => {
        const hasVisible = Array.from(block.querySelectorAll('.activity-row')).some(r => r.style.display !== 'none');
        block.style.display = hasVisible ? '' : 'none';
        
        // Auto-open categories if searching
        if (q.length > 0 && hasVisible) {
            block.querySelector('.category-content').classList.add('open');
            block.querySelector('span').innerText = '-';
        }
    });
}

// --- UI HELPERS ---
function showPage(pageId, tabId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

function showInfo(name, desc) {
    const modal = document.getElementById('info-modal');
    document.getElementById('modal-title').innerText = name;
    document.getElementById('modal-desc').innerText = desc;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('info-modal').style.display = 'none';
}

// --- DATA PROCESSING (Pako/Compression) ---
function generateShortCode() {
    const name = document.getElementById('userName').value || "Anon";
    const responses = {};
    Object.values(masterData).forEach(items => {
        items.forEach(item => {
            responses[item.id] = [
                document.getElementById(`gh-${item.id}`).checked ? 1 : 0,
                parseInt(document.getElementById(`gs-${item.id}`).value),
                document.getElementById(`rh-${item.id}`).checked ? 1 : 0,
                parseInt(document.getElementById(`rs-${item.id}`).value)
            ];
        });
    });
    const blob = pako.deflate(JSON.stringify({ n: name, r: responses }));
    const code = btoa(String.fromCharCode.apply(null, blob));
    document.getElementById('outputCode').innerText = code;
    document.getElementById('outputContainer').style.display = 'block';
}

function runComparison() {
    const rawCodes = document.getElementById('compareBox').value.trim().split('\n');
    const participants = rawCodes.map(c => {
        try {
            const bin = new Uint8Array(atob(c.trim()).split('').map(x => x.charCodeAt(0)));
            return JSON.parse(pako.inflate(bin, { to: 'string' }));
        } catch(e) { return null; }
    }).filter(p => p !== null);

    if (participants.length === 0) return;

    let html = "<table><thead><tr><th rowspan='2'>Shared Activity</th>";
    participants.forEach(p => html += `<th colspan='2'>${p.n}</th>`);
    html += "</tr><tr>";
    participants.forEach(() => html += "<th>Give</th><th>Rec</th>");
    html += "</tr></thead><tbody>";

    Object.values(masterData).forEach(items => {
        items.forEach(item => {
            let row = `<tr><td class='act-name' onclick="showInfo('${item.name.replace(/'/g, "\\'")}', '${item.desc.replace(/'/g, "\\")}')">${item.name}</td>`;
            let showRow = false;
            participants.forEach(p => {
                const d = p.r[item.id] || [0,1,0,1];
                if (d[1] >= 3 || d[3] >= 3) showRow = true;
                row += `<td class="m-${d[1]}">${d[1] >= 3 ? d[1] : ''}</td>`;
                row += `<td class="m-${d[3]}">${d[3] >= 3 ? d[3] : ''}</td>`;
            });
            if (showRow) html += row + "</tr>";
        });
    });
    document.getElementById('matrix-results').innerHTML = html + "</tbody></table>";
}