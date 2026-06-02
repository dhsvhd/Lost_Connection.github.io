// ===== pages.js =====
// פתיחת דפי יצירות

// ── Shape of You ─────────────────────────────────────────────────────────────
function openShapeOfYou() {
  const u = currentUser;
  const isAdmin = u.name === "אדמין";

  const hasPdf =
    u.pdfUrl &&
    ![
      "הכנס_כאן_את_קישור_הPDF_של_נתנאל",
      "הכנס_כאן_את_קישור_הPDF_של_אליאור",
      "הכנס_כאן_את_קישור_הPDF_של_ניצן",
      "הכנס_כאן_את_קישור_הPDF_של_ינון",
    ].includes(u.pdfUrl);

  const hasAudioVideo = [
    "אדמין",
    "לידור",
    "נתנאל",
    "ניצן",
    "אליאור",
    "ינון",
  ].includes(u.name);

  const videoId = (u.videoUrl || "https://youtu.be/-R_QdkLAJTI")
    .split("/")
    .pop()
    .split("?v=")
    .pop();
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  // צבע גישה לפי תפקיד
  const roleColor =
    {
      אדמין: "#f59e0b",
      לידור: "#8b5cf6",
      נתנאל: "#10b981",
      ניצן: "#ec4899",
      אליאור: "#3b82f6",
      ינון: "#f97316",
    }[u.name] || "#38bdf8";

  const roleLabel =
    {
      אדמין: "גישה למנהל המערכת",
      לידור: "גישה לסקסופון אלט",
      נתנאל: "גישה לסקסופון טנור",
      ניצן: "גישה לבריטון ראשון",
      אליאור: "גישה לבריטון שני",
      ינון: "גישה לתופים",
    }[u.name] || "גישה רגילה";

  const page = `
    <div class="page-content">
      <button class="back-btn" onclick="closePage()">← חזרה לרשימה</button>

      <div class="user-info" style="margin-bottom:20px;">
        ${isAdmin ? '<span class="admin-badge">👑 מנהל</span>' : ""}
        ${getUserBadge(u.name)}
        👤 ${u.name} - ${u.role}
      </div>

      <h2 style="color:#38bdf8;text-align:center;margin-bottom:30px;">🎵 SHAPE OF YOU - Ed Sheeran</h2>

      <div class="your-banner" style="max-width:800px;margin:30px auto;">
        <img src="https://i.ibb.co/KxZZxtgN/Lost-Connection-Band-Israel.jpg" alt="Lost Connection Band" />
      </div>

      <div class="content-box">
        <div style="font-size:60px;margin-bottom:20px;">📄</div>
        <h3 style="color:#38bdf8;margin-bottom:15px;">PDF אישי של ${u.name}</h3>
        <p style="color:#94a3b8;margin-bottom:25px;">
          תפקיד: ${u.role}<br>כלי: ${u.instrument}<br>
          <span style="color:#38bdf8;font-weight:600;">הקובץ מותאם אישית עבורך!</span>
        </p>

        <div style="margin:30px 0;">
          ${
            hasPdf
              ? `<a href="${u.pdfUrl}" target="_blank" class="action-btn view-btn">👁️ פתח PDF בדפדפן</a>
               <a href="${u.pdfUrl}" download="Shape-Of-You-${u.name}.pdf" class="action-btn download-btn">⬇️ הורד PDF אישי</a>`
              : `<button class="action-btn disabled-btn" disabled>👁️ פתח PDF בדפדפן</button>
               <button class="action-btn disabled-btn" disabled>⬇️ הורד PDF אישי</button>`
          }

          ${
            hasAudioVideo
              ? `<button class="action-btn audio-video-btn" onclick="showAudioVideo()">🎵 PDF+שמע</button>`
              : ""
          }
        </div>

        ${
          !hasPdf
            ? `<p style="color:#f87171;padding:15px;background:rgba(239,68,68,0.1);border-radius:10px;margin-top:20px;">
          ⚠️ PDF אישי לא זמין כרגע. אנא עדכן את הקישור בקוד.</p>`
            : ""
        }
      </div>

      <!-- PDF+שמע (מוסתר) -->
      <div id="audioVideoSection" style="display:none;">
        <div class="content-box">
          <h3 style="color:#38bdf8;margin-bottom:20px;">🎵 PDF + שמע - גרסה מלאה</h3>
          <p style="color:#94a3b8;margin-bottom:20px;">
            כאן ניתן לצפות בווידאו המלא עם השמע ולפתוח את ה-PDF במקביל.<br>
            <span style="color:${roleColor};font-weight:600;">${roleLabel}</span>
          </p>
          <div class="video-container">
            <iframe src="${embedUrl}" title="Shape Of You - Lost Connection Band"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
          <div style="margin-top:30px;">
            <a href="${u.pdfUrl}" target="_blank" class="action-btn view-btn">📄 פתח PDF במקביל לצפייה</a>
            <a href="${u.videoUrl}" target="_blank" class="action-btn audio-video-btn">↗️ פתח ביוטיוב מלא</a>
          </div>
        </div>
      </div>
    </div>`;

  document.getElementById("mainContainer").style.display = "none";
  document.getElementById("pagesContainer").innerHTML = page;

  window.showAudioVideo = function () {
    const section = document.getElementById("audioVideoSection");
    section.style.display = "block";
    section.scrollIntoView({ behavior: "smooth" });
  };
}

// ── יצירה 2 ──────────────────────────────────────────────────────────────────
function openCreation2() {
  const u = currentUser;
  const isAdmin = u.name === "אדמין";

  const page = `
    <div class="page-content">
      <button class="back-btn" onclick="closePage()">← חזרה לרשימה</button>

      <div class="user-info" style="margin-bottom:20px;">
        ${isAdmin ? '<span class="admin-badge">👑 מנהל</span>' : ""}
        ${getUserBadge(u.name)}
        👤 ${u.name} - ${u.role}
      </div>

      <h2 style="color:#38bdf8;text-align:center;margin-bottom:30px;">🎵 יצירה 2</h2>

      <div class="content-box">
        <div style="font-size:60px;margin-bottom:20px;">📁</div>
        <h3 style="color:#38bdf8;margin-bottom:15px;">יצירה מקורית</h3>
        <p style="color:#94a3b8;margin-bottom:25px;">
          יצירה מקורית של Lost Connection Band<br>
          <span style="color:#38bdf8;font-weight:600;">בפיתוח - זמין בקרוב!</span>
        </p>
        <p style="color:#f87171;padding:15px;background:rgba(239,68,68,0.1);border-radius:10px;">
          ⚠️ יצירה זו עדיין בפיתוח ותהיה זמינה בקרוב
        </p>
      </div>
    </div>`;

  document.getElementById("mainContainer").style.display = "none";
  document.getElementById("pagesContainer").innerHTML = page;
}

// ── סגירת עמוד ───────────────────────────────────────────────────────────────
function closePage() {
  document.getElementById("pagesContainer").innerHTML = "";
  document.getElementById("mainContainer").style.display = "block";
}
