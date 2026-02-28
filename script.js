/* =========================================================
   MASTER DATA
========================================================= */

const masterData = {
    "Physical Sexual Acts": {
    "Anal": [
        { "id": "PA01", "name": "Anal Chastity", "desc": "Restricting anal sexual access using a device." },
        { "id": "PA02", "name": "Anal Creampie", "desc": "Ejaculating inside the anus." },
        { "id": "PA03", "name": "Anal Fingering", "desc": "Manual stimulation of the anus with fingers." },
        { "id": "PA04", "name": "Anal Fisting", "desc": "Insertion of the hand into the anus." },
        { "id": "PA05", "name": "Anal Sex", "desc": "Penetrative sexual activity involving the anus." },
        { "id": "PA06", "name": "Anal Stretching", "desc": "Gradual expansion or preparation of anal muscles." },
        { "id": "PA07", "name": "Ass Licking", "desc": "Oral stimulation of the buttocks or anus." },
        { "id": "PA08", "name": "Ass to Mouth", "desc": "Oral contact following anal contact." },
        { "id": "PA09", "name": "Pegging", "desc": "Anal penetration of a male partner using a strap-on." },
        { "id": "PA10", "name": "Prostate Massage", "desc": "Stimulation of the prostate gland through the anus." }
    ],

    "Group/Multi-Partner": [
        { "id": "PG01", "name": "Gangbangs", "desc": "Multiple partners engaging sexually with one person." },
        { "id": "PG02", "name": "Glory Hole", "desc": "Sexual activity through an anonymous barrier." },
        { "id": "PG03", "name": "Group Sex", "desc": "Sexual activity involving more than two people." },
        { "id": "PG04", "name": "Orgy", "desc": "Unrestricted multi-partner sexual activity." },
        { "id": "PG05", "name": "Sex with Strangers", "desc": "Sexual activity with unfamiliar partners." },
        { "id": "PG06", "name": "Swinging", "desc": "Consensual partner exchange between couples." },
        { "id": "PG07", "name": "Threesomes", "desc": "Sexual activity involving three people." }
    ],

    "Manual Stimulation": [
        { "id": "PM01", "name": "Fingering", "desc": "Manual genital stimulation using fingers." },
        { "id": "PM02", "name": "Handjobs", "desc": "Manual stimulation of the penis using hands." },
        { "id": "PM03", "name": "Masturbation", "desc": "Self-stimulation of one's own genitals." },
        { "id": "PM04", "name": "Mutual Masturbation", "desc": "Partners masturbating together." },
        { "id": "PM05", "name": "Ordered to Masturbate", "desc": "Being instructed to masturbate." },
        { "id": "PM06", "name": "Tit Fucking", "desc": "Penis stimulation between breasts." }
    ],

    "Oral": [
        { "id": "PO01", "name": "Blow Jobs", "desc": "Oral stimulation of the penis." },
        { "id": "PO02", "name": "Deep Throating", "desc": "Penis oral penetration of the throat." },
        { "id": "PO03", "name": "Eating Pussy", "desc": "Oral stimulation of the vulva." },
        { "id": "PO04", "name": "Face Fucking", "desc": "Deep oral penetration of the mouth." },
        { "id": "PO05", "name": "Face Riding", "desc": "Oral stimulation while sitting on the face." },
        { "id": "PO06", "name": "Gagging/Choked by Cock", "desc": "Gag reflex stimulation during oral sex." },
        { "id": "PO07", "name": "Road Head", "desc": "Oral sex performed while traveling." },
        { "id": "PO08", "name": "Throat Fucking", "desc": "Deep penetration of the throat." }
    ],

    "Orgasm & Ejaculatory Focus": [
        { "id": "PE01", "name": "Being Cummed On", "desc": "Ejaculating onto a partner's body." },
        { "id": "PE02", "name": "Cum", "desc": "Ejaculation." },
        { "id": "PE03", "name": "Edging", "desc": "Approaching orgasm without climaxing." },
        { "id": "PE04", "name": "Facials", "desc": "Ejaculation onto the face." },
        { "id": "PE05", "name": "Female Ejaculation", "desc": "Release of fluid during female orgasm." },
        { "id": "PE06", "name": "Multiple Orgasms", "desc": "Experiencing orgasm more than once." },
        { "id": "PE07", "name": "Orgasm Control", "desc": "Managing timing or intensity of orgasm." },
        { "id": "PE08", "name": "Orgasm Denial", "desc": "Preventing orgasm." },
        { "id": "PE09", "name": "Swallowing Cum", "desc": "Ingesting semen." },
        { "id": "PE10", "name": "Tease & Denial", "desc": "Alternating arousal and prevention of orgasm." }
    ],

    "Vaginal/Genital Penetration": [
        { "id": "PV01", "name": "Bareback", "desc": "Unprotected penetrative sex." },
        { "id": "PV02", "name": "Creampie", "desc": "Ejaculating inside the vagina." },
        { "id": "PV03", "name": "Double Penetration", "desc": "Two penetrations simultaneously." },
        { "id": "PV04", "name": "PiV Intercourse", "desc": "Penis-in-vagina sexual intercourse." },
        { "id": "PV05", "name": "Triple Penetration", "desc": "Three simultaneous penetrations." },
        { "id": "PV06", "name": "Vaginal Fisting", "desc": "Insertion of the hand into the vagina." },
        { "id": "PV07", "name": "Vaginal Stretching", "desc": "Gradual vaginal expansion or preparation." }
    ]
},
    "Impact Play": [
        { id: "I01", name: "Spanking", desc: "Striking for sensation or discipline." },
        { id: "I02", name: "Cane Play", desc: "High-intensity sting-focused impact." }
    ],
    "Sensation": [
        { id: "S01", name: "Blindfolds", desc: "Removing sight to heighten anticipation." },
        { id: "S02", name: "Wax Play", desc: "Dripping low-temp wax for stimulation." }
    ]
};

const scaleLabels = {
    0: "No Selection",
    1: "Hard Limit",
    2: "Maybe",
    3: "Sometimes",
    4: "Like It",
    5: "Favorite",
    6: "Curious"
};

/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    setupHero();
    renderSurvey();
    setupEventListeners();
});

/* =========================================================
   HERO LOGIC
========================================================= */

function setupHero() {
    const btn = document.getElementById("btn-begin");
    if (!btn) return;

    btn.addEventListener("click", () => {

        const heroSection = document.getElementById("hero-section");
        const app = document.getElementById("app-container");

        if (!heroSection || !app) return;

        heroSection.classList.add("hero-exiting");

        app.classList.remove("hidden");
        app.classList.remove("display-none");

        requestAnimationFrame(() => {
            app.classList.add("visible");
        });
    });
}

/* =========================================================
   SURVEY RENDERING
========================================================= */

function renderSurvey() {
    const container = document.getElementById("survey-container");
    if (!container) return;
    container.innerHTML = "";

    for (const [category, content] of Object.entries(masterData)) {
        const catBlock = document.createElement("div");
        catBlock.className = "category-block";

        catBlock.innerHTML = `
            <div class="category-header">
                <div class="header-left">
                    <span class="chevron">▸</span>
                    ${category}
                </div>
            </div>
            <div class="category-content">
                <div class="subcategory-wrapper"></div>
            </div>
        `;

        const subWrapper = catBlock.querySelector(".subcategory-wrapper");

        // Check if the content is an Array (Flat) or an Object (Nested Subcategories)
        if (Array.isArray(content)) {
            // Flat Category: Create one "General" grid
            // Add filters to the Category Header
            const filterBar = renderHeaderFilters(content, "activity");
            catBlock.querySelector(".category-header").appendChild(filterBar);

            const grid = document.createElement("div");
            grid.className = "activity-grid";
            content.forEach(item => grid.appendChild(renderActivityCard(item)));
            subWrapper.appendChild(grid);
        } else {
            // Nested Category: Loop through subcategories
            const subCats = Object.keys(content).map(k => ({ name: k, id: "sub-" + k.replace(/[^a-zA-Z0-9]/g, '-') }));
            
            // Add Subcategory filters to the Category Header
            const filterBar = renderHeaderFilters(subCats, "subcategory");
            catBlock.querySelector(".category-header").appendChild(filterBar);

            for (const [subCat, items] of Object.entries(content)) {
                const subBlock = document.createElement("div");
                subBlock.className = "subcategory-block";
                subBlock.id = "sub-" + subCat.replace(/[^a-zA-Z0-9]/g, '-');

                subBlock.innerHTML = `
                    <div class="subcategory-header">
                        <div class="header-left">
                            <span class="sub-chevron">▸</span>
                            <span class="subcategory-title">${subCat}</span>
                        </div>
                    </div>
                    <div class="subcategory-content">
                        <div class="activity-grid"></div>
                    </div>
                `;
                
                // Add Activity filters to the Subcategory Header
                const subFilterBar = renderHeaderFilters(items, "activity");
                subBlock.querySelector(".subcategory-header").appendChild(subFilterBar);

                const grid = subBlock.querySelector(".activity-grid");
                items.forEach(item => grid.appendChild(renderActivityCard(item)));
                subWrapper.appendChild(subBlock);
            }
        }
        container.appendChild(catBlock);
    }
}

function renderHeaderFilters(items, type) {
    const dropdown = document.createElement("div");
    dropdown.className = "filter-dropdown";
    
    // Prevent clicks on the filter bar from toggling the accordion
    dropdown.addEventListener("click", (e) => e.stopPropagation());

    const toggle = document.createElement("button");
    toggle.className = "filter-toggle";
    toggle.textContent = "Filter ▾";
    
    toggle.addEventListener("click", () => {
        const menu = dropdown.querySelector(".filter-menu");
        // Close other open menus
        document.querySelectorAll(".filter-menu.show").forEach(m => {
            if (m !== menu) m.classList.remove("show");
        });
        menu.classList.toggle("show");
    });

    dropdown.appendChild(toggle);

    const menu = document.createElement("div");
    menu.className = "filter-menu";

    items.forEach(item => {
        const option = document.createElement("div");
        option.className = "filter-item active";
        option.textContent = item.name;
        
        option.addEventListener("click", () => {
            option.classList.toggle("active");
            const isVisible = option.classList.contains("active");
            
            let target;
            if (type === "subcategory") {
                target = document.getElementById(item.id);
            } else {
                target = document.querySelector(`.activity-card[data-id="${item.id}"]`);
            }

            if (target) {
                target.style.display = isVisible ? "" : "none";
            }
        });

        menu.appendChild(option);
    });

    dropdown.appendChild(menu);
    return dropdown;
}

function renderActivityCard(item) {

    const card = document.createElement("div");
    card.className = "activity-card";
    card.dataset.name = item.name.toLowerCase();
    card.dataset.id = item.id;
    card.style.position = "relative"; // ensure tooltip absolute positioning works

    card.innerHTML = `
        <div class="act-name-wrapper">
            <span class="act-name">${item.name}</span>
            <span class="tooltip-icon" data-desc="${item.desc}" tabindex="0">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
            </span>
            <div class="tooltip-text">${item.desc}</div>
        </div>

        <div class="activity-sides">
            ${renderSide(item, "gs", "gh", "Giving")}
            ${renderSide(item, "rs", "rh", "Receiving")}
        </div>
    `;

    return card;
}

function renderSide(item, scalePrefix, triedPrefix, label) {
    return `
        <div class="side">
            <div class="side-header">
                <span class="row-label">${label}:</span>
                <span class="scale-selection-text" id="label-${scalePrefix}-${item.id}">
                    No Selection
                </span>
            </div>
            <input type="hidden" id="${scalePrefix}-${item.id}" value="0">
            <div class="scale" data-target="${scalePrefix}-${item.id}">
                ${renderDots()}
            </div>
        </div>
    `;
}

function renderDots() {
    return `
        <span class="dot val-0 selected" data-value="0"></span>
        <span class="dot val-6" data-value="6"></span>
        <span class="dot val-1" data-value="1"></span>
        <span class="dot val-2" data-value="2"></span>
        <span class="dot val-3" data-value="3"></span>
        <span class="dot val-4" data-value="4"></span>
        <span class="dot val-5" data-value="5"></span>
        
    `;
}

/* =========================================================
   EVENT LISTENERS
========================================================= */

function setupEventListeners() {

    /* Consolidated Click Handler for Accordions, Dots, and Tooltips */
    document.addEventListener("click", e => {
        // Close filter menus if clicking outside
        if (!e.target.closest(".filter-dropdown")) {
            document.querySelectorAll(".filter-menu.show").forEach(m => m.classList.remove("show"));
        }

        // --- Accordion & Sub-Accordion Logic ---
        const catHeader = e.target.closest(".category-header");
        if (catHeader) {
            const content = catHeader.nextElementSibling;
            const open = content.classList.toggle("open");
            const block = catHeader.closest(".category-block");
            if (block) block.classList.toggle("open", open);
            catHeader.querySelector(".chevron").style.transform = open ? "rotate(90deg)" : "rotate(0deg)";
            return;
        }

        const subHeader = e.target.closest(".subcategory-header");
        if (subHeader) {
            const content = subHeader.nextElementSibling;
            const open = content.classList.toggle("open");
            subHeader.querySelector(".sub-chevron").style.transform = open ? "rotate(90deg)" : "rotate(0deg)";
            subHeader.style.color = open ? "var(--accent-gold)" : "var(--text-secondary)";
            return;
        }

        // --- Scale & Dot Logic ---
        const scale = e.target.closest(".scale");
        
        // Close other expanded scales
        const expandedScales = document.querySelectorAll(".scale.expanded");
        if (!scale) {
            expandedScales.forEach(s => s.classList.remove("expanded"));
        } else {
            expandedScales.forEach(s => { if (s !== scale) s.classList.remove("expanded"); });
        }

        if (scale) {
            // If collapsed, expand it
            if (!scale.classList.contains("expanded")) {
                scale.classList.add("expanded");
                return;
            }

            // If expanded, check for dot selection
            const dot = e.target.closest(".dot");
            if (dot) {
                const value = parseInt(dot.dataset.value);
                const targetId = scale.dataset.target;
                const input = document.getElementById(targetId);
                if (input) input.value = value;
                scale.querySelectorAll(".dot").forEach(d => d.classList.toggle("selected", d === dot));
                updateSelectionLabel(targetId, value);
            }
            // Collapse after selection or if clicking empty space in scale
            scale.classList.remove("expanded");
            return;
        }

        // --- Tooltip Logic ---
        const clickedIcon = e.target.closest(".tooltip-icon");

        // Close all tooltips that aren't the one being toggled.
        // If the click was outside, this will close the last open one.
        document.querySelectorAll(".tooltip-text.active").forEach(activeText => {
            const parentIcon = activeText.parentElement.querySelector(".tooltip-icon");
            if (parentIcon !== clickedIcon) {
                activeText.classList.remove("active");
            }
        });

        // If an icon was clicked, toggle its specific tooltip.
        if (clickedIcon) {
            const textToToggle = clickedIcon.parentElement.querySelector(".tooltip-text");
            if (textToToggle) {
                textToToggle.classList.toggle("active");
            }
        }
    });

    let isMouseDown = false;
    document.addEventListener("mousedown", () => (isMouseDown = true));
    document.addEventListener("mouseup", () => (isMouseDown = false));

    // Keyboard accessibility: Show tooltip on focus
    document.addEventListener("focusin", e => {
        if (isMouseDown) return;
        const icon = e.target.closest(".tooltip-icon");
        if (icon) {
            const text = icon.parentElement.querySelector(".tooltip-text");
            if (text) text.classList.add("active"); // Simply show on focus
        }
    });

    /* Tabs */
    document.getElementById("tab-survey")?.addEventListener("click", () => showPage("survey-page", "tab-survey"));
    document.getElementById("tab-matrix")?.addEventListener("click", () => showPage("matrix-page", "tab-matrix"));

    /* Search */
    document.getElementById("searchInput")?.addEventListener("input", e => {
        filterActivities(e.target.value);
    });

    /* Generate Code */
    document.getElementById("btn-generate")?.addEventListener("click", generateShortCode);

    /* Compare */
    document.getElementById("btn-compare")?.addEventListener("click", runComparison);

    /* Sticky Legend Shrink */
    window.addEventListener("scroll", handleLegendShrink);
}

/* =========================================================
   SCALE LABEL UPDATE
========================================================= */

function updateSelectionLabel(targetId, value) {
    const label = document.getElementById("label-" + targetId);
    if (!label) return;

    // Fade out
    label.classList.add("fading-out");

    // Update text and fade back in
    setTimeout(() => {
        label.textContent = scaleLabels[value];
        label.classList.remove("fading-out");
    }, 200);
}

/* =========================================================
   LEGEND SHRINK
========================================================= */

function handleLegendShrink() {
    const legend = document.getElementById("sticky-legend");
    if (!legend) return;

    if (window.scrollY > 150) {
        legend.style.padding = "6px 12px";
        legend.style.fontSize = "0.75rem";
    } else {
        legend.style.padding = "12px 16px";
        legend.style.fontSize = "0.9rem";
    }
}

/* =========================================================
   SEARCH
========================================================= */

function filterActivities(query) {
    const q = query.toLowerCase();

    document.querySelectorAll(".activity-card").forEach(card => {
        const name = card.dataset.name;
        card.style.display = name.includes(q) ? "" : "none";
    });
}

/* =========================================================
   PAGE SWITCHING
========================================================= */

function showPage(pageId, tabId) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));

    document.getElementById(pageId).classList.add("active");
    document.getElementById(tabId).classList.add("active");
}

/* =========================================================
   SHORTCODE GENERATION
========================================================= */

function generateShortCode() {
    const name = document.getElementById("userName").value || "Anon";
    const responses = {};

    // Recursive helper to find all items in nested or flat structures
    const processData = (data) => {
        if (Array.isArray(data)) {
            data.forEach(item => {
                const gh = document.getElementById(`gh-${item.id}`);
                const gs = document.getElementById(`gs-${item.id}`);
                const rh = document.getElementById(`rh-${item.id}`);
                const rs = document.getElementById(`rs-${item.id}`);
                
                if (gs && rs) {
                    responses[item.id] = [
                        gh.checked ? 1 : 0,
                        parseInt(gs.value),
                        rh.checked ? 1 : 0,
                        parseInt(rs.value)
                    ];
                }
            });
        } else {
            Object.values(data).forEach(subData => processData(subData));
        }
    };

    processData(masterData);

    const blob = pako.deflate(JSON.stringify({ n: name, r: responses }));
    const code = btoa(String.fromCharCode.apply(null, blob));

    const output = document.getElementById("outputCode");
    output.textContent = code;
    document.getElementById("outputContainer").classList.remove("hidden");
}

/* =========================================================
   MATRIX – CARD RENDERING
========================================================= */

function runComparison() {
    const rawCodes = document.getElementById("compareBox").value.trim().split("\n");
    const participants = rawCodes.map(c => {
        try {
            const bin = new Uint8Array(atob(c.trim()).split("").map(x => x.charCodeAt(0)));
            return JSON.parse(pako.inflate(bin, { to: "string" }));
        } catch { return null; }
    }).filter(Boolean);

    const container = document.getElementById("matrix-results");
    container.innerHTML = "";
    if (participants.length < 2) {
        container.innerHTML = `<div class="matrix-empty">Enter at least two valid codes.</div>`;
        return;
    }

    const activities = [];

    // Recursive helper to collect all activity items for comparison
    const collectItems = (data) => {
        if (Array.isArray(data)) {
            data.forEach(item => {
                const participantResponses = participants.map(p => p.r[item.id] || [0,0,0,0]);
                const score = calculateCompatibility(participantResponses);
                if (score > 0) activities.push({ item, data: participantResponses, score });
            });
        } else {
            Object.values(data).forEach(subData => collectItems(subData));
        }
    };

    collectItems(masterData);
    activities.sort((a,b) => b.score - a.score);
    activities.forEach(a => {
        container.appendChild(renderMatrixCard(a.item, participants, a.data, a.score));
    });
}

// calculateCompatibility now supports any number of participants by
// averaging the pairwise compatibility score between all unique
// pairs.  This prevents the previous behaviour where only the first
// two participants were considered.
function calculateCompatibility(data) {
    if (data.length < 2) return 0;
    let total = 0;
    let pairs = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
            total += calculatePairScore(data[i], data[j]);
            pairs++;
        }
    }
    return pairs ? Math.round(total / pairs) : 0;
}

// helper that computes score between two response arrays
function calculatePairScore(a, b) {
    // a and b are [gh, gs, rh, rs] arrays
    const giveRecMatch =
        (a[1] >= 4 && b[3] >= 4) ||
        (b[1] >= 4 && a[3] >= 4);
    if (giveRecMatch) return 100;

    const moderate =
        (a[1] >= 3 && b[3] >= 3) ||
        (b[1] >= 3 && a[3] >= 3);
    if (moderate) return 60;

    return 0;
}

function renderMatrixCard(item, participants, data, score) {

    const card = document.createElement("div");
    card.className = "matrix-card";
    if (score >= 100) card.classList.add("strong-match");

    const title = document.createElement("h3");
    title.textContent = item.name;
    card.appendChild(title);

    const columns = document.createElement("div");
    columns.className = "matrix-columns";

    participants.forEach((p, index) => {
        const col = document.createElement("div");
        col.className = "matrix-column";

        col.innerHTML = `
            <h4>${p.n}</h4>
            ${renderMatrixRating("Giving", data[index][1])}
            ${renderMatrixRating("Receiving", data[index][3])}
        `;

        columns.appendChild(col);
    });

    card.appendChild(columns);

    const bar = document.createElement("div");
    bar.className = "matrix-compat-bar";
    bar.innerHTML = `<div class="matrix-compat-fill" style="width:${score}%"></div>`;
    card.appendChild(bar);

    return card;
}

function renderMatrixRating(label, value) {

    let level = "low";
    if (value >= 4) level = "high";
    else if (value >= 3) level = "medium";

    return `
        <div class="matrix-rating ${level}">
            <span class="label">${label}</span>
            <span class="value">${scaleLabels[value]}</span>
        </div>
    `;
}