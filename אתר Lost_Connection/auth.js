// ===== auth.js =====
// ניהול התחברות, התנתקות וזיכרון משתמש

// רשימת המשתמשים
const users = [
  {
    name: "נתנאל", password: "NHK2012",
    pdfUrl:   "https://drive.google.com/file/d/1bOLg2TViF8-36u01JsVyJ3eqcx8Nvstt/view?usp=sharing",
    videoUrl: "https://youtu.be/-R_QdkLAJTI",
    role: "סקסופון טנור", instrument: "סקסופון",
    welcome: "ברוך הבא נתנאל! כאן ה-PDF האישי שלך",
  },
  {
    name: "אליאור", password: "036305415",
    pdfUrl:   "https://drive.google.com/file/d/1WSVpCzpAwtL7-QijJgxShWFNy-Vp7ui6/view?usp=sharing",
    videoUrl: "https://youtu.be/o84HUOAESfY",
    role: "בריטון 2", instrument: "בריטון",
    welcome: "ברוך הבא אליאור! כאן ה-PDF האישי שלך",
  },
  {
    name: "לידור", password: "1706",
    pdfUrl:   "https://drive.google.com/file/d/1MUK6ZcXhECYvT6dEFF0sc_WoQHUFXzQ-/view?usp=sharing",
    videoUrl: "https://youtu.be/dkDFHH829sc",
    role: "סקסופון אלט", instrument: "סקסופון",
    welcome: "ברוך הבא לידור! כאן ה-PDF האישי שלך",
  },
  {
    name: "ניצן", password: "lost connection 2026",
    pdfUrl:   "https://drive.google.com/file/d/1EzO1-OSvjLhUUNizEm3TOmTCJJCc15JE/view?usp=sharing",
    videoUrl: "https://youtu.be/qsmdqtX8-qg",
    role: "בריטון 1", instrument: "בריטון",
    welcome: "ברוך הבא ניצן! כאן ה-PDF האישי שלך",
  },
  {
    name: "ינון", password: "1234",
    pdfUrl:   "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    videoUrl: "https://youtu.be/VsExU_j28eM",
    role: "תופים", instrument: "תופים",
    welcome: "ברוך הבא ינון! כאן ה-PDF האישי שלך",
  },
  {
    name: "אדמין", password: "אורי סיסמה בדוי",
    pdfUrl:   "https://drive.google.com/file/d/1tC3jSIXqqYkYxSVHCF2bczLGnu3niHeS/view?usp=sharing",
    videoUrl: "https://youtu.be/VsExU_j28eM",
    role: "מנהל מערכת", instrument: "כלים",
    welcome: "ברוך הבא מנהל המערכת! גישה מלאה לכל הקבצים",
  },
];

let currentUser      = null;
let selectedPlatform = "";
let rememberedUser   = JSON.parse(localStorage.getItem("rememberedUser"));

// ── בחירת פלטפורמה ──────────────────────────────────────────────────────────
function selectPlatform(platform) {
  selectedPlatform = platform;
  localStorage.setItem("selectedPlatform", platform);

  document.getElementById("platformSection").style.display = "none";
  document.getElementById("loginSection").style.display   = "flex";

  if (rememberedUser) {
    document.getElementById("username").value  = rememberedUser.username;
    document.getElementById("password").value  = rememberedUser.password;
    document.getElementById("rememberMe").checked = true;

    if (platform === "phone") {
      setTimeout(() => {
        if (confirm("מצאנו משתמש שמור. האם להכנס אוטומטית?")) login();
      }, 500);
    }
  }
}

// ── בדיקה בטעינה ─────────────────────────────────────────────────────────────
function checkRememberedUser() {
  const remembered    = localStorage.getItem("rememberedUser");
  const savedPlatform = localStorage.getItem("selectedPlatform");

  if (!remembered || !savedPlatform) return;

  const user = JSON.parse(remembered);
  rememberedUser   = user;
  selectedPlatform = savedPlatform;

  document.getElementById("platformSection").style.display = "none";
  document.getElementById("loginSection").style.display   = "flex";
  document.getElementById("username").value  = user.username;
  document.getElementById("password").value  = user.password;
  document.getElementById("rememberMe").checked = true;

  if (savedPlatform === "phone") {
    setTimeout(() => {
      if (confirm("מצאנו משתמש שמור. האם להכנס אוטומטית?")) login();
    }, 1000);
  }
}

// ── התחברות ──────────────────────────────────────────────────────────────────
function login() {
  const username   = document.getElementById("username").value.trim();
  const password   = document.getElementById("password").value.trim();
  const rememberMe = document.getElementById("rememberMe").checked;
  const errorAlert = document.getElementById("errorAlert");

  errorAlert.style.display = "none";

  if (!username || !password) {
    errorAlert.textContent    = "נא להזין שם משתמש וסיסמה";
    errorAlert.style.display  = "block";
    return;
  }

  const user = users.find(u => u.name === username && u.password === password);

  if (!user) {
    errorAlert.textContent    = "שם משתמש או סיסמה לא נכונים";
    errorAlert.style.display  = "block";
    document.getElementById("password").value = "";
    return;
  }

  currentUser = user;

  if (rememberMe) {
    const save = { username, password };
    localStorage.setItem("rememberedUser", JSON.stringify(save));
    rememberedUser = save;
  } else {
    localStorage.removeItem("rememberedUser");
    rememberedUser = null;
  }

  document.getElementById("loginSection").style.display  = "none";
  document.getElementById("mainContainer").style.display = "block";

  // בניית הודעת ברוכים הבאים
  const isAdmin = user.name === "אדמין";
  const adminBadge = isAdmin ? '<span class="admin-badge">👑 מנהל</span>' : "";

  document.getElementById("userWelcome").innerHTML = `
    ${adminBadge}${getUserBadge(user.name)}
    👋 ${user.welcome}
    <div style="font-size:14px;color:#94a3b8;margin-top:5px;">
      תפקיד: ${user.role} | כלי: ${user.instrument}
    </div>
    ${selectedPlatform ? `<div style="font-size:12px;color:#64748b;margin-top:5px;">
      📱 פלטפורמה: ${selectedPlatform === "phone" ? "טלפון" : "מחשב"}
    </div>` : ""}
  `;

  if (selectedPlatform === "phone") {
    document.body.classList.add("mobile-optimized");
  } else {
    document.body.classList.remove("mobile-optimized");
  }
}

// ── התנתקות ──────────────────────────────────────────────────────────────────
function logout() {
  if (rememberedUser && confirm("האם למחוק גם את זכרון ההתחברות?")) {
    localStorage.removeItem("rememberedUser");
    localStorage.removeItem("selectedPlatform");
    rememberedUser   = null;
    selectedPlatform = "";
  }

  currentUser = null;
  document.getElementById("platformSection").style.display = "flex";
  document.getElementById("loginSection").style.display   = "none";
  document.getElementById("mainContainer").style.display  = "none";
  document.getElementById("username").value  = "";
  document.getElementById("password").value  = "";
  document.getElementById("pagesContainer").innerHTML = "";
  document.getElementById("userWelcome").innerHTML    = "";
  document.getElementById("rememberMe").checked = false;
}
