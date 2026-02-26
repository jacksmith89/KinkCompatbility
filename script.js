/* =========================================================
   MASTER DATA
========================================================= */

const masterData = {
    "Physical Sexual Acts": [
    { id: "P01", name: "Anal", desc: "Any sexual activity involving the anus." },
    { id: "P02", name: "Anal Chastity", desc: "Restricting anal sexual access using a device or agreement." },
    { id: "P03", name: "Anal Creampie", desc: "Ejaculation inside the anus during anal sex." },
    { id: "P04", name: "Anal Fingering", desc: "Stimulation of the anus using fingers." },
    { id: "P05", name: "Anal Fisting", desc: "Insertion of a hand into the anus for stimulation." },
    { id: "P06", name: "Anal Sex", desc: "Penetrative sexual activity involving the anus." },
    { id: "P07", name: "Anal Stretching", desc: "Gradual consensual expansion or training of anal comfort." },
    { id: "P08", name: "Ass Licking", desc: "Oral stimulation of the buttocks or anus." },
    { id: "P09", name: "Ass to Mouth", desc: "Transition from anal penetration to oral contact." },
    { id: "P10", name: "Pegging", desc: "Penetrative sex where a partner uses a strap-on." },
    { id: "P11", name: "Prostate Massage", desc: "Stimulation of the prostate for pleasure or medical benefit." },

    { id: "P12", name: "Group/Multi-Partner", desc: "Sexual activity involving more than two participants." },
    { id: "P13", name: "Gangbangs", desc: "One person engaging sexually with multiple partners." },
    { id: "P14", name: "Glory Hole", desc: "Sexual contact through a barrier opening." },
    { id: "P15", name: "Group Sex", desc: "Sexual activity involving multiple people." },
    { id: "P16", name: "Orgy", desc: "Large group sexual activity involving many participants." },
    { id: "P17", name: "Sex with Strangers", desc: "Consensual sexual activity with unfamiliar partners." },
    { id: "P18", name: "Swinging", desc: "Partnered individuals exchanging sexual partners consensually." },
    { id: "P19", name: "Threesomes", desc: "Sexual activity involving three participants." },

    { id: "P20", name: "Manual Stimulation", desc: "Sexual stimulation using hands." },
    { id: "P21", name: "Fingering", desc: "Manual stimulation of genitalia using fingers." },
    { id: "P22", name: "Handjobs", desc: "Manual stimulation of a penis using hands." },
    { id: "P23", name: "Masturbation", desc: "Self-stimulation for sexual pleasure." },
    { id: "P24", name: "Mutual Masturbation", desc: "Partners masturbating while observing each other." },
    { id: "P25", name: "Ordered to Masturbate", desc: "Being instructed to masturbate by a partner." },
    { id: "P26", name: "Tit Fucking", desc: "Penis stimulation between breasts." },

    { id: "P27", name: "Oral", desc: "Oral-genital sexual stimulation." },
    { id: "P28", name: "Blow Jobs", desc: "Oral stimulation of a penis." },
    { id: "P29", name: "Deep Throating", desc: "Deep oral penetration of the mouth and throat." },
    { id: "P30", name: "Eating Pussy", desc: "Oral stimulation of vulva and clitoris." },
    { id: "P31", name: "Face Fucking", desc: "Penile oral penetration with thrusting motion." },
    { id: "P32", name: "Face Riding", desc: "Sitting on a partner’s face for oral stimulation." },
    { id: "P33", name: "Gagging/Choked by Cock", desc: "Oral sex that approaches gag reflex limits." },
    { id: "P34", name: "Road Head", desc: "Receiving oral sex while in a moving vehicle." },
    { id: "P35", name: "Throat Fucking", desc: "Forceful or deep oral penetration of the throat." },

    { id: "P36", name: "Orgasm & Ejaculatory Focus", desc: "Activities centered around orgasm or ejaculation." },
    { id: "P37", name: "Being Cummed On", desc: "Partner ejaculating onto body surface." },
    { id: "P38", name: "Cum", desc: "Exposure to or handling of semen." },
    { id: "P39", name: "Edging", desc: "Approaching orgasm without climax." },
    { id: "P40", name: "Facials", desc: "Ejaculation onto the face." },
    { id: "P41", name: "Female Ejaculation", desc: "Release of fluid during female orgasm." },
    { id: "P42", name: "Multiple Orgasms", desc: "Experiencing more than one orgasm in a session." },
    { id: "P43", name: "Orgasm Control", desc: "Managing intensity or timing of orgasm." },
    { id: "P44", name: "Orgasm Denial", desc: "Preventing orgasm after sexual arousal." },
    { id: "P45", name: "Swallowing Cum", desc: "Oral ingestion of semen." },
    { id: "P46", name: "Tease & Denial", desc: "Alternating stimulation and withholding orgasm." },

    { id: "P47", name: "Vaginal/Genital Penetration", desc: "Penetrative sex involving genital entry." },
    { id: "P48", name: "Bareback", desc: "Sexual penetration without barrier protection." },
    { id: "P49", name: "Creampie", desc: "Ejaculation inside a partner during penetration." },
    { id: "P50", name: "Double Penetration", desc: "Two penetrative insertions simultaneously." },
    { id: "P51", name: "PiV Intercourse", desc: "Penis-in-vagina sexual intercourse." },
    { id: "P52", name: "Triple Penetration", desc: "Three simultaneous penetrations." },
    { id: "P53", name: "Vaginal Fisting", desc: "Insertion of a hand into the vagina." },
    { id: "P54", name: "Vaginal Stretching", desc: "Gradual consensual expansion of vaginal comfort." }
],
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
    5: "Favorite"
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

    for (const [category, items] of Object.entries(masterData)) {

        const block = document.createElement("div");
        block.className = "category-block";

        const header = document.createElement("div");
        header.className = "category-header";
        header.innerHTML = `
            ${category}
            <span class="chevron">▾</span>
        `;

        const content = document.createElement("div");
        content.className = "category-content";

        const grid = document.createElement("div");
        grid.className = "activity-grid";

        items.forEach(item => {
            grid.appendChild(renderActivityCard(item));
        });

        content.appendChild(grid);
        block.appendChild(header);
        block.appendChild(content);
        container.appendChild(block);
    }
}

function renderActivityCard(item) {

    const card = document.createElement("div");
    card.className = "activity-card";
    card.dataset.name = item.name.toLowerCase();
    card.style.position = "relative"; // ensure tooltip absolute positioning works

    card.innerHTML = `
        <div class="act-name-wrapper">
            <span class="act-name">${item.name}</span>
            <span class="tooltip-icon" data-desc="${item.desc}" tabindex="0">1</span>
            <div class="tooltip-text">${item.desc}</div>
        </div>

        ${renderSide(item, "gs", "gh", "Giving")}
        ${renderSide(item, "rs", "rh", "Receiving")}
    `;

    return card;
}

function renderSide(item, scalePrefix, triedPrefix, label) {
    return `
        <div class="side">
            <span class="row-label">${label}</span>
            <div class="row-content">
                <input type="hidden" id="${scalePrefix}-${item.id}" value="0">
                <div class="scale" data-target="${scalePrefix}-${item.id}">
                    ${renderDots()}
                </div>
                <label class="tried">
                    <input type="checkbox" id="${triedPrefix}-${item.id}">
                    <span class="switch"></span>
                    <span class="tried-label">Tried?</span>
                </label>
            </div>
            <div class="scale-selection-text" id="label-${scalePrefix}-${item.id}">
                No Selection
            </div>
        </div>
    `;
}

function renderDots() {
    return `
        <span class="dot val-0 selected" data-value="0"></span>
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

    /* Accordion */
    document.addEventListener("click", e => {
        const header = e.target.closest(".category-header");
        if (!header) return;

        const content = header.nextElementSibling;
        const open = content.classList.toggle("open");

        const chevron = header.querySelector(".chevron");
        if (chevron) {
            chevron.style.transform = open ? "rotate(180deg)" : "rotate(0deg)";
        }
    });

    /* Dot Selection */
    document.addEventListener("click", e => {
        const dot = e.target.closest(".dot");
        if (!dot) return;

        const scale = dot.closest(".scale");
        if (!scale) return;

        const value = parseInt(dot.dataset.value);
        const targetId = scale.dataset.target;
        const input = document.getElementById(targetId);

        if (input) input.value = value;

        scale.querySelectorAll(".dot").forEach(d =>
            d.classList.toggle("selected", d === dot)
        );

        updateSelectionLabel(targetId, value);
    });

    /* Tooltip toggle (click/tap) */
    document.addEventListener("click", e => {
        const icon = e.target.closest(".tooltip-icon");
        const insideTooltip = e.target.closest(".tooltip-text");
        if (!icon) {
            if (insideTooltip) return; // clicking inside open tooltip should not close it
            // click outside icon hides any open tooltips
            document.querySelectorAll(".tooltip-text.active").forEach(t => t.classList.remove("active"));
            return;
        }

        e.stopPropagation();
        const text = icon.parentElement.querySelector(".tooltip-text");
        if (text) {
            text.classList.toggle("active");
        }
    });

    /* Keyboard support: show on focus, hide on blur */
    document.addEventListener("focusin", e => {
        const icon = e.target.closest(".tooltip-icon");
        if (icon) {
            const text = icon.parentElement.querySelector(".tooltip-text");
            if (text) text.classList.add("active");
        }
    });
    document.addEventListener("focusout", e => {
        const icon = e.target.closest(".tooltip-icon");
        if (icon) {
            const text = icon.parentElement.querySelector(".tooltip-text");
            if (text) text.classList.remove("active");
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
        } catch {
            return null;
        }
    }).filter(Boolean);

    const container = document.getElementById("matrix-results");
    container.innerHTML = "";

    if (participants.length < 2) {
        container.innerHTML = `<div class="matrix-empty">Enter at least two valid codes.</div>`;
        return;
    }

    const activities = [];

    Object.values(masterData).forEach(items => {
        items.forEach(item => {
            const data = participants.map(p => p.r[item.id] || [0,0,0,0]);

            const score = calculateCompatibility(data);

            if (score > 0) {
                activities.push({ item, data, score });
            }
        });
    });

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