<!DOCTYPE html>
<html lang="he" dir="rtl">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>התחברות - יצירות דיגיטליות</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        background: linear-gradient(135deg, #0f172a, #0b1320);
        color: #fff;
        font-family: "Segoe UI", system-ui, Arial;
        min-height: 100vh;
      }

      .your-banner {
        width: 100%;
        max-width: 900px;
        height: 220px;
        margin: 0 auto 40px;
        border-radius: 20px;
        overflow: hidden;
        border: 3px solid #38bdf8;
      }
      .your-banner img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .login-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding: 30px 20px;
      }
      .login-container {
        width: 100%;
        max-width: 900px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .login-box {
        width: 100%;
        max-width: 450px;
        background: rgba(255, 255, 255, 0.05);
        padding: 40px;
        border-radius: 25px;
        border: 1px solid rgba(56, 189, 248, 0.15);
        margin-top: 30px;
      }
      .login-title {
        text-align: center;
        color: #38bdf8;
        font-size: 32px;
        margin-bottom: 30px;
      }
      input {
        width: 100%;
        padding: 16px 20px;
        margin-top: 20px;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.08);
        color: #fff;
        font-size: 17px;
      }
      .login-btn {
        margin-top: 25px;
        width: 100%;
        padding: 17px;
        border: none;
        border-radius: 12px;
        background: #38bdf8;
        color: #0f172a;
        cursor: pointer;
        font-weight: 800;
        font-size: 18px;
      }

      .main-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 40px 20px;
        display: none;
      }
      .creations-title {
        text-align: center;
        font-size: 40px;
        color: #38bdf8;
        margin-bottom: 50px;
      }
      .creations-list {
        display: flex;
        flex-direction: column;
        gap: 25px;
        padding: 20px;
        max-width: 800px;
        margin: 0 auto;
      }

      .creation-card {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 18px;
        padding: 30px;
        border: 1px solid rgba(56, 189, 248, 0.1);
        cursor: pointer;
        transition: all 0.3s ease;
      }
      .creation-card:hover {
        background: rgba(56, 189, 248, 0.08);
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(56, 189, 248, 0.2);
      }

      .creation-name {
        font-size: 26px;
        color: #fff;
        margin-bottom: 12px;
        font-weight: 700;
      }

      .page-content {
        padding: 40px;
        max-width: 900px;
        margin: 0 auto;
      }
      .back-btn {
        padding: 12px 25px;
        background: #38bdf8;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        margin-bottom: 30px;
      }

      .content-box {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 15px;
        padding: 30px;
        margin: 20px 0;
        text-align: center;
      }

      .action-btn {
        padding: 12px 25px;
        margin: 10px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        font-size: 16px;
        text-decoration: none;
        display: inline-block;
      }
      .download-btn {
        background: #38bdf8;
        color: white;
      }
      .view-btn {
        background: #475569;
        color: white;
      }
      .disabled-btn {
        background: #64748b;
        color: #94a3b8;
        cursor: not-allowed;
      }

      .audio-video-btn {
        background: linear-gradient(135deg, #8b5cf6, #7c3aed);
        color: white;
      }

      .logout-section {
        text-align: center;
        margin-top: 60px;
      }
      .logout-btn {
        padding: 15px 40px;
        background: rgba(255, 255, 255, 0.08);
        color: #fff;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 12px;
        cursor: pointer;
      }

      .user-info {
        text-align: center;
        margin-bottom: 30px;
        padding: 15px;
        background: rgba(56, 189, 248, 0.1);
        border-radius: 10px;
        color: #38bdf8;
        font-weight: 600;
      }

      .admin-badge {
        background: linear-gradient(135deg, #f59e0b, #d97706);
        color: white;
        padding: 5px 15px;
        border-radius: 20px;
        font-size: 14px;
        display: inline-block;
        margin-right: 10px;
      }

      .special-badge {
        background: linear-gradient(135deg, #8b5cf6, #7c3aed);
        color: white;
        padding: 5px 15px;
        border-radius: 20px;
        font-size: 14px;
        display: inline-block;
        margin-right: 10px;
      }

      .video-container {
        width: 100%;
        max-width: 800px;
        margin: 30px auto;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      }

      .video-container iframe {
        width: 100%;
        height: 450px;
        border: none;
      }
    </style>
  </head>
  <body>
    <!-- מסך התחברות -->
    <section class="login-section" id="loginSection">
      <div class="login-container">
        <div class="your-banner">
          <img
            src="https://i.ibb.co/KxZZxtgN/Lost-Connection-Band-Israel.jpg"
            alt="Lost Connection Band"
          />
        </div>
        <div class="login-box">
          <h2 class="login-title">כניסה למערכת</h2>
          <div
            id="errorAlert"
            style="
              display: none;
              color: #f87171;
              text-align: center;
              margin-bottom: 20px;
            "
          >
            שם משתמש או סיסמה לא נכונים
          </div>
          <input
            id="username"
            type="text"
            placeholder="הכנס שם משתמש"
            autofocus
          />
          <input id="password" type="password" placeholder="הכנס סיסמה" />
          <button class="login-btn" onclick="login()">התחבר למערכת</button>
        </div>
      </div>
    </section>

    <!-- מסך ראשי -->
    <div class="main-container" id="mainContainer">
      <div class="your-banner">
        <img
          src="https://i.ibb.co/KxZZxtgN/Lost-Connection-Band-Israel.jpg"
          alt="Lost Connection Band"
        />
      </div>

      <div id="userWelcome" class="user-info"></div>

      <h2 class="creations-title">📁 ספריית היצירות שלי</h2>

      <div class="creations-list">
        <div class="creation-card" onclick="openShapeOfYou()">
          <div class="creation-name">SHAPE OF YOU</div>
          <div style="color: #94a3b8; font-size: 16px; margin-top: 8px">
            Ed Sheeran | Lost Connection Band Cover
          </div>
        </div>

        <div class="creation-card" onclick="openCreation2()">
          <div class="creation-name">יצירה 2</div>
          <div style="color: #94a3b8; font-size: 16px; margin-top: 8px">
            פרויקט שני
          </div>
        </div>
      </div>

      <div class="logout-section">
        <button class="logout-btn" onclick="logout()">🔓 התנתק מהמערכת</button>
      </div>
    </div>

    <!-- דפים דינמיים -->
    <div id="pagesContainer"></div>
    <script>
      // משתמשים עם PDFים אישיים
      const users = [
        {
          name: "נתנאל",
          password: "נתנאלסיסמה",
          pdfUrl:
            "https://drive.google.com/file/d/1bOLg2TViF8-36u01JsVyJ3eqcx8Nvstt/view?usp=sharing",
          videoUrl: "https://youtu.be/-R_QdkLAJTI",
          role: "סקסופון טנור",
          instrument: "סקסופון",
          welcome: "ברוך הבא נתנאל! כאן ה-PDF האישי שלך",
        },
        {
          name: "אליאור",
          password: "אליאורסיסמה",
          pdfUrl:
            "https://drive.google.com/file/d/1WSVpCzpAwtL7-QijJgxShWFNy-Vp7ui6/view?usp=sharing",
          videoUrl: "https://youtu.be/o84HUOAESfY", // 👈 הוספתי את הקישור של אליאור
          role: "בריטון 2",
          instrument: "בריטון",
          welcome: "ברוך הבא אליאור! כאן ה-PDF האישי שלך",
        },
        {
          name: "לידור",
          password: "לידורסיסמה",
          pdfUrl:
            "https://drive.google.com/file/d/1MUK6ZcXhECYvT6dEFF0sc_WoQHUFXzQ-/view?usp=sharing",
          videoUrl: "https://youtu.be/dkDFHH829sc",
          role: "סקסופון אלט",
          instrument: "סקסופון",
          welcome: "ברוך הבא לידור! כאן ה-PDF האישי שלך",
        },
        {
          name: "ניצן",
          password: "ניצןסיסמה",
          pdfUrl:
            "https://drive.google.com/file/d/1EzO1-OSvjLhUUNizEm3TOmTCJJCc15JE/view?usp=sharing",
          videoUrl: "https://youtu.be/qsmdqtX8-qg",
          role: "בריטון 1",
          instrument: "בריטון",
          welcome: "ברוך הבא ניצן! כאן ה-PDF האישי שלך",
        },
        {
          name: "ינון",
          password: "ינוןסיסמה",
          pdfUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          videoUrl: "https://youtu.be/o84HUOAESfY", // אותו קישור כמו אליאור זמנית
          role: "תופים",
          instrument: "תופים",
          welcome: "ברוך הבא ינון! כאן ה-PDF האישי שלך",
        },
        {
          name: "administor",
          password: "אורי סיסמה בדוי",
          pdfUrl:
            "https://drive.google.com/file/d/1tC3jSIXqqYkYxSVHCF2bczLGnu3niHeS/view?usp=sharing",
          videoUrl: "https://youtu.be/VsExU_j28eM",
          role: "מנהל מערכת",
          instrument: "כלים",
          welcome: "ברוך הבא מנהל המערכת! גישה מלאה לכל הקבצים",
        },
      ];

      let currentUser = null;

      // התחברות
      function login() {
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const errorAlert = document.getElementById("errorAlert");
        errorAlert.style.display = "none";

        if (!username || !password) {
          errorAlert.textContent = "נא להזין שם משתמש וסיסמה";
          errorAlert.style.display = "block";
          return;
        }

        const user = users.find(
          (u) => u.name === username && u.password === password
        );
        if (user) {
          currentUser = user;
          document.getElementById("loginSection").style.display = "none";
          document.getElementById("mainContainer").style.display = "block";

          // הצג הודעת ברוך הבא עם סימן
          const adminBadge =
            user.name === "administor"
              ? '<span class="admin-badge">👑 מנהל</span>'
              : "";
          const lidorBadge =
            user.name === "לידור"
              ? '<span class="special-badge">🎵 אלט</span>'
              : "";
          const natanelBadge =
            user.name === "נתנאל"
              ? '<span class="special-badge" style="background: linear-gradient(135deg, #10b981, #059669);">🎵 טנור</span>'
              : "";
          const nitzanBadge =
            user.name === "ניצן"
              ? '<span class="special-badge" style="background: linear-gradient(135deg, #ec4899, #db2777);">🎵 בריטון ראשון</span>'
              : "";
          const eliorBadge =
            user.name === "אליאור"
              ? '<span class="special-badge" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8);">🎵 בריטון שני</span>'
              : "";

          document.getElementById("userWelcome").innerHTML = `
                          ${adminBadge}${lidorBadge}${natanelBadge}${nitzanBadge}${eliorBadge}👋 ${user.welcome}
                          <div style="font-size: 14px; color: #94a3b8; margin-top: 5px;">
                              תפקיד: ${user.role} | כלי: ${user.instrument}
                          </div>
                      `;
        } else {
          errorAlert.textContent = "שם משתמש או סיסמה לא נכונים";
          errorAlert.style.display = "block";
          document.getElementById("password").value = "";
        }
      }

      // התנתקות
      function logout() {
        currentUser = null;
        document.getElementById("loginSection").style.display = "flex";
        document.getElementById("mainContainer").style.display = "none";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("pagesContainer").innerHTML = "";
        document.getElementById("userWelcome").innerHTML = "";
      }

      // פונקציה לסגירת דף
      function closePage() {
        document.getElementById("pagesContainer").innerHTML = "";
        document.getElementById("mainContainer").style.display = "block";
      }

      // פונקציה לפתיחת SHAPE OF YOU
      function openShapeOfYou() {
        // בדוק אם למשתמש יש PDF אישי
        const hasPdf =
          currentUser.pdfUrl &&
          currentUser.pdfUrl !== "הכנס_כאן_את_קישור_הPDF_של_נתנאל" &&
          currentUser.pdfUrl !== "הכנס_כאן_את_קישור_הPDF_של_אליאור" &&
          currentUser.pdfUrl !== "הכנס_כאן_את_קישור_הPDF_של_ניצן" &&
          currentUser.pdfUrl !== "הכנס_כאן_את_קישור_הPDF_של_ינון";

        const isAdmin = currentUser.name === "administor";
        const isLidor = currentUser.name === "לידור";
        const isNatanel = currentUser.name === "נתנאל";
        const isNitzan = currentUser.name === "ניצן";
        const isElior = currentUser.name === "אליאור";
        const hasAudioVideo =
          isAdmin || isLidor || isNatanel || isNitzan || isElior;

        // בחר את הסרטון המתאים לפי המשתמש
        let audioVideoUrl;
        if (isAdmin) {
          audioVideoUrl =
            currentUser.videoUrl || "https://youtu.be/VsExU_j28eM";
        } else if (isLidor) {
          audioVideoUrl =
            currentUser.videoUrl || "https://youtu.be/dkDFHH829sc";
        } else if (isNatanel) {
          audioVideoUrl =
            currentUser.videoUrl || "https://youtu.be/-R_QdkLAJTI";
        } else if (isNitzan) {
          audioVideoUrl =
            currentUser.videoUrl || "https://youtu.be/qsmdqtX8-qg";
        } else if (isElior) {
          audioVideoUrl =
            currentUser.videoUrl || "https://youtu.be/o84HUOAESfY";
        } else {
          audioVideoUrl =
            currentUser.videoUrl || "https://youtu.be/-R_QdkLAJTI";
        }

        // יצירת קוד הטמעה מיוטיוב
        const videoId = audioVideoUrl.split("/").pop().split("?v=").pop();
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;

        const page = `
                      <div class="page-content">
                          <button class="back-btn" onclick="closePage()">← חזרה לרשימה</button>

                          <div class="user-info" style="margin-bottom: 20px;">
                              ${
                                isAdmin
                                  ? '<span class="admin-badge">👑 מנהל</span>'
                                  : ""
                              }
                              ${
                                isLidor
                                  ? '<span class="special-badge">🎵 אלט</span>'
                                  : ""
                              }
                              ${
                                isNatanel
                                  ? '<span class="special-badge" style="background: linear-gradient(135deg, #10b981, #059669);">🎵 טנור</span>'
                                  : ""
                              }
                              ${
                                isNitzan
                                  ? '<span class="special-badge" style="background: linear-gradient(135deg, #ec4899, #db2777);">🎵 בריטון ראשון</span>'
                                  : ""
                              }
                              ${
                                isElior
                                  ? '<span class="special-badge" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8);">🎵 בריטון שני</span>'
                                  : ""
                              }
                              👤 ${currentUser.name} - ${currentUser.role}
                          </div>

                          <h2 style="color: #38bdf8; text-align: center; margin-bottom: 30px;">🎵 SHAPE OF YOU - Ed Sheeran</h2>

                          <div class="your-banner" style="max-width: 800px; margin: 30px auto;">
                              <img src="https://i.ibb.co/KxZZxtgN/Lost-Connection-Band-Israel.jpg" alt="Lost Connection Band" />
                          </div>

                          <div class="content-box">
                              <div style="font-size: 60px; margin-bottom: 20px;">📄</div>
                              <h3 style="color: #38bdf8; margin-bottom: 15px;">PDF אישי של ${
                                currentUser.name
                              }</h3>
                              <p style="color: #94a3b8; margin-bottom: 25px;">
                                  תפקיד: ${currentUser.role}<br>
                                  כלי: ${currentUser.instrument}<br>
                                  <span style="color: #38bdf8; font-weight: 600;">הקובץ מותאם אישית עבורך!</span>
                              </p>

                              <div style="margin: 30px 0;">
                                  ${
                                    hasPdf
                                      ? `<a href="${currentUser.pdfUrl}" target="_blank" class="action-btn view-btn">
                                            👁️ פתח PDF בדפדפן
                                        </a>

                                        <a href="${currentUser.pdfUrl}" download="Shape-Of-You-${currentUser.name}.pdf" class="action-btn download-btn">
                                            ⬇️ הורד PDF אישי
                                        </a>`
                                      : `<button class="action-btn disabled-btn" disabled>
                                            👁️ פתח PDF בדפדפן
                                        </button>

                                        <button class="action-btn disabled-btn" disabled>
                                            ⬇️ הורד PDF אישי
                                        </button>`
                                  }
                                  
                                  ${
                                    hasAudioVideo
                                      ? `
                                  <button class="action-btn audio-video-btn" onclick="showAudioVideo()">
                                      🎵 PDF+שמע
                                  </button>`
                                      : ""
                                  }
                              </div>

                              ${
                                !hasPdf
                                  ? `
                                  <p style="color: #f87171; padding: 15px; background: rgba(239,68,68,0.1); border-radius: 10px; margin-top: 20px;">
                                      ⚠️ PDF אישי לא זמין כרגע. אנא עדכן את הקישור בקוד.
                                  </p>`
                                  : ""
                              }
                          </div>

                          <!-- אזור PDF+שמע (מוסתר תחילה) -->
                          <div id="audioVideoSection" style="display: none;">
                              <div class="content-box">
                                  <h3 style="color: #38bdf8; margin-bottom: 20px;">🎵 PDF + שמע - גרסה מלאה</h3>
                                  <p style="color: #94a3b8; margin-bottom: 20px;">
                                      כאן ניתן לצפות בווידאו המלא עם השמע ולפתוח את ה-PDF במקביל.<br>
                                      <span style="color: ${
                                        isAdmin
                                          ? "#f59e0b"
                                          : isLidor
                                          ? "#8b5cf6"
                                          : isNatanel
                                          ? "#10b981"
                                          : isNitzan
                                          ? "#ec4899"
                                          : isElior
                                          ? "#3b82f6"
                                          : "#38bdf8"
                                      }; font-weight: 600;">
                                          ${
                                            isAdmin
                                              ? "גישה למנהל המערכת"
                                              : isLidor
                                              ? "גישה לסקסופון אלט"
                                              : isNatanel
                                              ? "גישה לסקסופון טנור"
                                              : isNitzan
                                              ? "גישה לבריטון ראשון"
                                              : isElior
                                              ? "גישה לבריטון שני"
                                              : "גישה רגילה"
                                          }
                                      </span>
                                  </p>

                                  <div class="video-container">
                                      <iframe 
                                          src="${embedUrl}" 
                                          title="Shape Of You - Lost Connection Band" 
                                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                          allowfullscreen>
                                      </iframe>
                                  </div>

                                  <div style="margin-top: 30px;">
                                      <a href="${
                                        currentUser.pdfUrl
                                      }" target="_blank" class="action-btn view-btn">
                                          📄 פתח PDF במקביל לצפייה
                                      </a>
                                      <a href="${audioVideoUrl}" target="_blank" class="action-btn audio-video-btn">
                                          ↗️ פתח ביוטיוב מלא
                                      </a>
                                  </div>

                                  <div style="margin-top: 25px; padding: 15px; background: ${
                                    isAdmin
                                      ? "rgba(245,158,11,0.1)"
                                      : isLidor
                                      ? "rgba(139,92,246,0.1)"
                                      : isNatanel
                                      ? "rgba(16,185,129,0.1)"
                                      : isNitzan
                                      ? "rgba(236,72,153,0.1)"
                                      : isElior
                                      ? "rgba(59,130,246,0.1)"
                                      : "rgba(56,189,248,0.1)"
                                  }; border-radius: 10px;">
                                      <p style="color: ${
                                        isAdmin
                                          ? "#f59e0b"
                                          : isLidor
                                          ? "#c4b5fd"
                                          : isNatanel
                                          ? "#6ee7b7"
                                          : isNitzan
                                          ? "#f9a8d4"
                                          : isElior
                                          ? "#93c5fd"
                                          : "#38bdf8"
                                      }; font-size: 14px;">
                                          💡 טיפ: פתח את ה-PDF בחלון נפרד וצפה בסרטון במקביל לתרגול האינטראקציה.
                                      </p>
                                  </div>
                              </div>
                          </div>

                          <!-- קרדיטים -->
                          <div class="content-box">
                              <h3 style="color: #38bdf8; margin-bottom: 20px;">🎵 חברי הלהקה</h3>

                              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px; margin: 25px 0;">
                                  ${users
                                    .map(
                                      (user) => `
                                      <div style="background: ${
                                        user.name === currentUser.name
                                          ? "rgba(56,189,248,0.2)"
                                          : user.name === "administor"
                                          ? "rgba(245,158,11,0.2)"
                                          : user.name === "לידור"
                                          ? "rgba(139,92,246,0.2)"
                                          : user.name === "נתנאל"
                                          ? "rgba(16,185,129,0.2)"
                                          : user.name === "ניצן"
                                          ? "rgba(236,72,153,0.2)"
                                          : user.name === "אליאור"
                                          ? "rgba(59,130,246,0.2)"
                                          : "rgba(255,255,255,0.05)"
                                      };
                                          padding: 15px; border-radius: 10px; text-align: center; border: ${
                                            user.name === currentUser.name
                                              ? "2px solid #38bdf8"
                                              : user.name === "administor"
                                              ? "2px solid #f59e0b"
                                              : user.name === "לידור"
                                              ? "2px solid #8b5cf6"
                                              : user.name === "נתנאל"
                                              ? "2px solid #10b981"
                                              : user.name === "ניצן"
                                              ? "2px solid #ec4899"
                                              : user.name === "אליאור"
                                              ? "2px solid #3b82f6"
                                              : "none"
                                          };">
                                          <div style="color: ${
                                            user.name === currentUser.name
                                              ? "#fff"
                                              : user.name === "administor"
                                              ? "#fbbf24"
                                              : user.name === "לידור"
                                              ? "#c4b5fd"
                                              : user.name === "נתנאל"
                                              ? "#6ee7b7"
                                              : user.name === "ניצן"
                                              ? "#f9a8d4"
                                              : user.name === "אליאור"
                                              ? "#93c5fd"
                                              : "#38bdf8"
                                          }; font-weight: 600; font-size: 18px;">
                                              ${user.name} ${
                                        user.name === currentUser.name
                                          ? "👈"
                                          : user.name === "administor"
                                          ? "👑"
                                          : ""
                                      }
                                          </div>
                                          <div style="color: #94a3b8; font-size: 14px;">${
                                            user.role
                                          }</div>
                                          ${
                                            user.pdfUrl &&
                                            user.pdfUrl.includes(
                                              "drive.google.com"
                                            ) &&
                                            user.name === currentUser.name
                                              ? `<div style="color: #10b981; font-size: 12px; margin-top: 5px;">✓ PDF זמין</div>`
                                              : ""
                                          }
                                          ${
                                            user.name === "administor" ||
                                            user.name === "לידור" ||
                                            user.name === "נתנאל" ||
                                            user.name === "ניצן" ||
                                            user.name === "אליאור"
                                              ? `<div style="color: ${
                                                  user.name === "administor"
                                                    ? "#f59e0b"
                                                    : user.name === "לידור"
                                                    ? "#8b5cf6"
                                                    : user.name === "נתנאל"
                                                    ? "#10b981"
                                                    : user.name === "ניצן"
                                                    ? "#ec4899"
                                                    : "#3b82f6"
                                                }; font-size: 12px; margin-top: 5px;">🎵 PDF+שמע</div>`
                                              : ""
                                          }
                                      </div>
                                  `
                                    )
                                    .join("")}
                              </div>

                              <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
                                  <p style="color: #94a3b8; text-align: center;">
                                      <strong>עובד על ידי:</strong> נתנאל קיומוב הגבר
                                  </p>
                              </div>
                          </div>
                      </div>
                  `;

        document.getElementById("mainContainer").style.display = "none";
        document.getElementById("pagesContainer").innerHTML = page;

        // אם יש גישה ל-PDF+שמע, הוסף את הפונקציה showAudioVideo
        if (hasAudioVideo) {
          window.showAudioVideo = function () {
            document.getElementById("audioVideoSection").style.display =
              "block";
            document
              .getElementById("audioVideoSection")
              .scrollIntoView({ behavior: "smooth" });
          };
        }
      }

      // פונקציה לפתיחת יצירה 2
      function openCreation2() {
        const isAdmin = currentUser.name === "administor";
        const isLidor = currentUser.name === "לידור";
        const isNatanel = currentUser.name === "נתנאל";
        const isNitzan = currentUser.name === "ניצן";
        const isElior = currentUser.name === "אליאור";

        const page = `
                      <div class="page-content">
                          <button class="back-btn" onclick="closePage()">← חזרה לרשימה</button>

                          <div class="user-info" style="margin-bottom: 20px;">
                              ${
                                isAdmin
                                  ? '<span class="admin-badge">👑 מנהל</span>'
                                  : ""
                              }
                              ${
                                isLidor
                                  ? '<span class="special-badge">🎵 אלט</span>'
                                  : ""
                              }
                              ${
                                isNatanel
                                  ? '<span class="special-badge" style="background: linear-gradient(135deg, #10b981, #059669);">🎵 טנור</span>'
                                  : ""
                              }
                              ${
                                isNitzan
                                  ? '<span class="special-badge" style="background: linear-gradient(135deg, #ec4899, #db2777);">🎵 בריטון ראשון</span>'
                                  : ""
                              }
                              ${
                                isElior
                                  ? '<span class="special-badge" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8);">🎵 בריטון שני</span>'
                                  : ""
                              }
                              👤 ${currentUser.name} - ${currentUser.role}
                          </div>

                          <h2 style="color: #38bdf8; text-align: center; margin-bottom: 30px;">🎵 יצירה 2</h2>

                          <div class="content-box">
                              <div style="font-size: 60px; margin-bottom: 20px;">📁</div>
                              <h3 style="color: #38bdf8; margin-bottom: 15px;">יצירה מקורית</h3>
                              <p style="color: #94a3b8; margin-bottom: 25px;">
                                  יצירה מקורית של Lost Connection Band<br>
                                  <span style="color: #38bdf8; font-weight: 600;">בפיתוח - זמין בקרוב!</span>
                              </p>

                              <p style="color: #f87171; padding: 15px; background: rgba(239,68,68,0.1); border-radius: 10px;">
                                  ⚠️ יצירה זו עדיין בפיתוח ותהיה זמינה בקרוב
                              </p>
                          </div>
                      </div>
                  `;

        document.getElementById("mainContainer").style.display = "none";
        document.getElementById("pagesContainer").innerHTML = page;
      }

      // קיצורי מקלדת
      document.addEventListener("DOMContentLoaded", function () {
        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");

        usernameInput.focus();

        usernameInput.addEventListener("keypress", function (event) {
          if (event.key === "Enter") {
            event.preventDefault();
            passwordInput.focus();
          }
        });

        passwordInput.addEventListener("keypress", function (event) {
          if (event.key === "Enter") {
            event.preventDefault();
            login();
          }
        });
      });
    </script>
  </body>
</html>
