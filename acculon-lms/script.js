// Tab Switching System
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });

    document.getElementById(`${tabId}-tab`).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Gradebook Mock Data & Logic
const initialStudents = [
    { id: 1, name: "Alice Johnson", quiz: 92, lab: 88, midterm: 85 },
    { id: 2, name: "Marcus Chen", quiz: 78, lab: 82, midterm: 79 },
    { id: 3, name: "Sarah Jenkins", quiz: 95, lab: 96, midterm: 94 },
    { id: 4, name: "David Kim", quiz: 84, lab: 90, midterm: 88 },
    { id: 5, name: "Elena Rodriguez", quiz: 65, lab: 70, midterm: 72 }
];

function loadGradebook() {
    const tbody = document.getElementById('gradebook-body');
    tbody.innerHTML = '';

    initialStudents.forEach(student => {
        const overall = Math.round((student.quiz * 0.3) + (student.lab * 0.3) + (student.midterm * 0.4));
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${student.name}</strong></td>
            <td><input type="number" class="gradebook-input" value="${student.quiz}" data-id="${student.id}" data-type="quiz"></td>
            <td><input type="number" class="gradebook-input" value="${student.lab}" data-id="${student.id}" data-type="lab"></td>
            <td><input type="number" class="gradebook-input" value="${student.midterm}" data-id="${student.id}" data-type="midterm"></td>
            <td><strong><span id="overall-${student.id}">${overall}%</span></strong></td>
        `;
        tbody.appendChild(tr);
    });
}

function saveGrades() {
    alert("Acculon LMS Server: Grades successfully saved and synced to cloud storage!");
}

// Attention Assessment Standards Data
const standards = [
    { code: "PHY-KIN-01", name: "Vector decomposition and projectile motion", score: 89 },
    { code: "PHY-NEW-02", name: "Newton's second law applied to friction systems", score: 76 },
    { code: "PHY-ENG-03", name: "Conservation of mechanical energy calculations", score: 92 },
    { code: "PHY-WAV-04", name: "Wave interference and Doppler effect principles", score: 81 }
];

function loadAttentionStandards() {
    const container = document.getElementById('standards-list');
    container.innerHTML = '';

    standards.forEach(std => {
        const div = document.createElement('div');
        div.className = 'standard-bar';
        div.innerHTML = `
            <div class="standard-info">
                <span><strong>${std.code}:</strong> ${std.name}</span>
                <span>${std.score}% Mastery</span>
            </div>
            <div class="progress-track">
                <div class="progress-fill" style="width: ${std.score}%;"></div>
            </div>
        `;
        container.appendChild(div);
    });
}

function runDiagnostic() {
    alert("Attention Assessment: Re-scanning student diagnostic benchmarks across all active classrooms...");
}

// Initialize on page load
window.onload = function() {
    loadGradebook();
    loadAttentionStandards();
};
