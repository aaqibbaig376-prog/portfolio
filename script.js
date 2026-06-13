// =========================================================================
// DATA CONFIGURATION MANAGEMENT ENGINE (Unified Content State Database)
// =========================================================================
const portfolioData = {
    profile: {
        fullName: "Mirza Aaqib Baig", 
        tagline: "Available for Opportunities",
        roleSummary: "A Computer Science & Engineering undergraduate with strong technical foundations and multiple certifications across ServiceNow platforms, Python Full Stack, and Java programming.", 
        email: "aaqibbaig376@gmail.com",
        phone: "+91 8309949511",
        linkedin: "https://www.linkedin.com/in/mirza-aaqib-baig-aba403348",
        aboutText: "I am a Computer Science & Engineering undergraduate with a strong technical foundation and verified hands-on expertise spanning multiple domains. I actively learn and adapt across platform ecosystems like ServiceNow, Python Full Stack architectures, and structural core concepts like Java and Object-Oriented Programming." 
    },
    skills: {
        programmingAndWeb: ["Java", "Python", "C Language", "HTML5", "CSS3", "JavaScript"], 
        platformsAndArchitecture: ["ServiceNow Platforms", "Git / GitHub", "Object-Oriented Programming (OOPs)", "Software Engineering Principles"] 
    },
    certifications: [
        {
            title: "Welcome to ServiceNow Micro-Certification", 
            issuer: "Issued by ServiceNow",
            filePath: "certs/servicenow.jpg"
        },
        {
            title: "Java Programming Certificate", 
            issuer: "CodeTantra • Core Fundamentals",
            filePath: "certs/java.jpg"
        },
        {
            title: "HTML NanoDegree Certification", 
            issuer: "PrepInsta • Advanced Layout Layouts",
            filePath: "certs/html.jpg"
        },
        {
            title: "EF SET English Certificate", 
            issuer: "Score: 62/100 • Verified C1 Advanced",
            filePath: "certs/english.jpg"
        }
    ],
    education: [
        {
            degree: "Bachelor Of Technology — Computer Science and Engineering", 
            institution: "G.Pullaiah College Of Engineering and Technology, Kurnool", 
            duration: "2023 - 2027",
            isCurrent: true
        },
        {
            degree: "Board Of Intermediate Education", 
            institution: "Narayana Jr College, Kurnool", 
            duration: "2021 - 2023",
            isCurrent: false
        },
        {
            degree: "Board Of Secondary Education (SSC)",
            institution: "Montessori E.M High School, Kurnool", 
            duration: "2020 - 2021",
            isCurrent: false
        }
    ]
};

// =========================================================================
// RUNTIME DESKTOP COMPILER CORE (Appends State Data Arrays into DOM Elements)
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
    const data = portfolioData;

    // Mapping Personal profile strings safely without text span fragments
    document.getElementById('hero-tagline').innerText = data.profile.tagline;
    document.getElementById('hero-name').innerText = data.profile.fullName;
    document.getElementById('hero-summary').innerText = data.profile.roleSummary;
    document.getElementById('hero-linkedin').href = data.profile.linkedin;
    document.getElementById('about-text').innerText = data.profile.aboutText;
    document.getElementById('footer-name').innerText = data.profile.fullName;
    
    // Mapping contact parameters
    document.getElementById('contact-email').href = `mailto:${data.profile.email}`;
    document.getElementById('text-email').innerText = data.profile.email;
    document.getElementById('contact-phone').href = `tel:${data.profile.phone.replace(/\s+/g, '')}`;
    document.getElementById('text-phone').innerText = data.profile.phone;

    // Compiling Programming list entries
    const progContainer = document.getElementById('skills-prog-container');
    progContainer.innerHTML = ''; 
    data.skills.programmingAndWeb.forEach(skill => {
        progContainer.innerHTML += `<span class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-gray-300 text-xs px-3 py-1.5 rounded border border-slate-200 dark:border-gray-700">${skill}</span>`;
    });

    // Compiling Architectures list items
    const platformContainer = document.getElementById('skills-platform-container');
    platformContainer.innerHTML = '';
    data.skills.platformsAndArchitecture.forEach(skill => {
        platformContainer.innerHTML += `<span class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-gray-300 text-xs px-3 py-1.5 rounded border border-slate-200 dark:border-gray-700">${skill}</span>`;
    });

    // Generating Card nodes dynamically inside Certifications
    const certsContainer = document.getElementById('certs-container');
    certsContainer.innerHTML = '';
    data.certifications.forEach((cert, targetIndex) => {
        const layoutCardTemplate = `
            <div data-index="${targetIndex}" class="cert-card-trigger p-5 bg-white dark:bg-[#1E293B]/60 rounded-xl border border-slate-200 dark:border-gray-800 flex items-start gap-4 cursor-pointer hover:border-red-600/40 dark:hover:border-red-600/40 hover:shadow-md transition-all group">
                <div class="text-red-600 text-xl mt-1 group-hover:scale-110 transition-transform"><i class="fa-solid fa-certificate"></i></div>
                <div class="flex-1">
                    <h4 class="text-slate-950 dark:text-white font-semibold group-hover:text-red-600 transition-colors">${cert.title}</h4>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">${cert.issuer}</p>
                    <span class="text-[10px] text-red-600 font-medium mt-2 inline-flex items-center gap-1"><i class="fa-solid fa-eye"></i> View Credential</span>
                </div>
            </div>`;
        certsContainer.innerHTML += layoutCardTemplate;
    });

    // Generating Linear sequence timeline track coordinates
    const educationTimeline = document.getElementById('education-timeline');
    educationTimeline.innerHTML = '';
    data.education.forEach(edu => {
        const pointColorClass = edu.isCurrent ? 'bg-red-600' : 'bg-slate-400 dark:bg-gray-700';
        const pillColorClass = edu.isCurrent ? 'bg-red-600/10 text-red-600 border border-red-600/20' : 'bg-slate-200 dark:bg-gray-800 text-slate-600 dark:text-gray-400';
        const nodeLayoutTemplate = `
            <div class="relative pl-10 group">
                <div class="absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full ${pointColorClass} ring-4 ring-slate-50 dark:ring-[#0B0F19] transition-all group-hover:scale-110"></div>
                <div class="flex flex-wrap justify-between items-start gap-2">
                    <div>
                        <h3 class="text-lg font-bold text-slate-950 dark:text-white">${edu.degree}</h3>
                        <p class="text-sm text-slate-600 dark:text-slate-400">${edu.institution}</p>
                    </div>
                    <span class="text-xs font-semibold px-2.5 py-1 rounded ${pillColorClass}">${edu.duration}</span>
                </div>
            </div>`;
        educationTimeline.innerHTML += nodeLayoutTemplate;
    });

    // Initialize Event Listeners for Dynamic Cards
    document.querySelectorAll('.cert-card-trigger').forEach(card => {
        card.addEventListener('click', (e) => {
            const index = card.getAttribute('data-index');
            const item = data.certifications[index];
            openCertModal(item.title, item.filePath);
        });
    });
});

// =========================================================================
// MODE TOGGLE & UI INTERFACE ENGINE (Fixed Theme Selector Logic)
// =========================================================================
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;

// Initialize theme state reliably (Default to Dark Mode)
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'dark') {
        htmlElement.classList.add('dark');
        themeIcon.className = 'fa-solid fa-sun text-lg';
    } else {
        htmlElement.classList.remove('dark');
        themeIcon.className = 'fa-solid fa-moon text-lg';
    }
}
initTheme();

// Click listener configuration to trigger manual tailwind adjustments
themeToggleBtn.addEventListener('click', () => {
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        themeIcon.className = 'fa-solid fa-moon text-lg';
    } else {
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        themeIcon.className = 'fa-solid fa-sun text-lg';
    }
});

// Mobile Toggler
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (menuBtn) {
    menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
}

// =========================================================================
// INTERACTIVE POPUP MODAL ENGINE (Direct Image Assignment & Safe Error Fallback)
// =========================================================================
const modal = document.getElementById('cert-modal');
const modalContent = document.getElementById('modal-content');
const modalTitle = document.getElementById('modal-title');
const modalImg = document.getElementById('modal-img');
const modalPlaceholder = document.getElementById('modal-placeholder');
const modalDownload = document.getElementById('modal-download');
const modalCloseBtn = document.getElementById('modal-close-btn');

function openCertModal(title, src) {
    modalTitle.innerText = title;
    modalDownload.href = src;
    
    // Assign the file directly to the image element
    if (src) {
        modalImg.src = src;
        modalImg.classList.remove('hidden');
        modalPlaceholder.classList.add('hidden');
    } else {
        modalImg.removeAttribute('src');
        modalImg.classList.add('hidden');
        modalPlaceholder.classList.remove('hidden');
    }
    
    // Fallback: If image link fails to resolve or file is missing from the folder
    modalImg.onerror = function() {
        modalImg.removeAttribute('src');
        modalImg.classList.add('hidden');
        modalPlaceholder.classList.remove('hidden');
    };

    // Open animations
    modal.classList.remove('invisible', 'opacity-0');
    modalContent.classList.remove('scale-95');
    document.body.style.overflow = 'hidden';
}

function closeCertModal() {
    modal.classList.add('invisible', 'opacity-0');
    modalContent.classList.add('scale-95');
    document.body.style.overflow = '';
}

if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeCertModal);
if (modal) modal.addEventListener('click', (e) => { if(e.target === modal) closeCertModal(); });