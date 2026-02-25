// --- MASTER LIST DATA ---
const masterData = {
    "Essentials": [
        { id: "E01", name: "Aftercare", desc: "Physical and emotional care after a scene." },
        { id: "E02", name: "Safe Words", desc: "Predetermined signals (Red/Yellow/Green)." }
    ],
    "Impact Play": [
        { id: "I01", name: "Spanking", desc: "Striking with hand or flat implement." },
        { id: "I02", name: "Cane Play", desc: "High-intensity impact using thin implements." }
    ],
    "Sensation": [
        { id: "S01", name: "Blindfolds", desc: "Removing sight to heighten other senses." },
        { id: "S02", name: "Wax Play", desc: "Dripping low-temp wax onto skin." }
    ]
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    renderSurvey();
    setupEventListeners();
});

function renderSurvey() {
    const container = document.getElementById('survey-container');
    for (const [category, items] of Object.entries(masterData)) {
        let sectionHtml = `
            <div class="category-block">
                <div class="category-header">${category} <span>+</span></div>
                <div class="category-content">
                    <table>
                        <thead>
                            <tr><th rowspan="2">Activity</th><th colspan="2">GIVING</th><th colspan="2">RECEIVING</th></tr>
                            <tr><th>Hist</th><th>Int</th><th>Hist</th><th>Int</th></tr>
                        </thead>
                        <tbody>`;
        
        items.forEach(item => {
            sectionHtml += `
                <tr>
                    <td class="act-name" data-tooltip="${item.desc}">${item.name}</td>
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

function setupEventListeners() {
    // Accordion Toggles
    document.querySelectorAll('.category-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.classList.toggle('open');
            header.querySelector('span').innerText = content.classList.contains('open') ? '-' : '+';
        });
    });

    // Tab Switching
    document.getElementById('tab-survey').addEventListener('click', () => showPage('survey-page', 'tab-survey'));
    document.getElementById('tab-matrix').addEventListener('click', () => showPage('matrix-page', 'tab-matrix'));

    // Buttons
    document.getElementById('btn-generate').addEventListener('click', generateShortCode);
    document.getElementById('btn-compare').addEventListener('click', runComparison);
}

function showPage(pageId, tabId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

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
    const codes = document.getElementById('compareBox').value.trim().split('\n');
    const participants = codes.map(c => {
        try {
            const bin = new Uint8Array(atob(c.trim()).split('').map(x => x.charCodeAt(0)));
            return JSON.parse(pako.inflate(bin, { to: 'string' }));
        } catch(e) { return null; }
    }).filter(p => p !== null);

    if (participants.length === 0) return;

    let html = "<table><thead><tr><th rowspan='2'>Activity</th>";
    participants.forEach(p => html += `<th colspan='2'>${p.n}</th>`);
    html += "</tr><tr>";
    participants.forEach(() => html += "<th>Give</th><th>Rec</th>");
    html += "</tr></thead><tbody>";

    Object.values(masterData).forEach(items => {
        items.forEach(item => {
            let row = `<tr><td class='act-name' data-tooltip="${item.desc}">${item.name}</td>`;
            let show = false;
            participants.forEach(p => {
                const d = p.r[item.id] || [0,1,0,1];
                if (d[1] >= 3 || d[3] >= 3) show = true;
                row += `<td class="m-${d[1]}">${d[1] >= 3 ? d[1] : ''}</td>`;
                row += `<td class="m-${d[3]}">${d[3] >= 3 ? d[3] : ''}</td>`;
            });
            if (show) html += row + "</tr>";
        });
    });
    document.getElementById('matrix-results').innerHTML = html + "</tbody></table>";
}
