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

      /* עיצוב בסיסי */
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
      // משתמשים
      const users = [
        { name: "נתנאל", password: "נתנאלסיסמה" },
        { name: "אליאור", password: "אליאורסיסמה" },
        { name: "לידור", password: "לידורסיסמה" },
        { name: "ניצן", password: "ניצןסיסמה" },
        { name: "ינון", password: "ינוןסיסמה" },
      ];

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
          document.getElementById("loginSection").style.display = "none";
          document.getElementById("mainContainer").style.display = "block";
        } else {
          errorAlert.textContent = "שם משתמש או סיסמה לא נכונים";
          errorAlert.style.display = "block";
          document.getElementById("password").value = "";
        }
      }

      // התנתקות
      function logout() {
        document.getElementById("loginSection").style.display = "flex";
        document.getElementById("mainContainer").style.display = "none";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("pagesContainer").innerHTML = "";
      }

      // פונקציה לסגירת דף
      function closePage() {
        document.getElementById("pagesContainer").innerHTML = "";
        document.getElementById("mainContainer").style.display = "block";
      }

      // פונקציה לפתיחת SHAPE OF YOU
      function openShapeOfYou() {
        const pdfUrl =
          "https://drive.google.com/file/d/1MUK6ZcXhECYvT6dEFF0sc_WoQHUFXzQ-/view?usp=sharing";

        const page = `
                <div class="page-content">
                    <button class="back-btn" onclick="closePage()">← חזרה לרשימה</button>
                    
                    <h2 style="color: #38bdf8; text-align: center; margin-bottom: 30px;">🎵 SHAPE OF YOU - Ed Sheeran</h2>
                    
                    <div class="your-banner" style="max-width: 800px; margin: 30px auto;">
                        <img src="https://i.ibb.co/KxZZxtgN/Lost-Connection-Band-Israel.jpg" alt="Lost Connection Band" />
                    </div>
                    
                    <div class="content-box">
                        <div style="font-size: 60px; margin-bottom: 20px;">📄</div>
                        <h3 style="color: #38bdf8; margin-bottom: 15px;">תווים ומילים לשיר</h3>
                        <p style="color: #94a3b8; margin-bottom: 25px;">
                            מקור: Ed Sheeran<br>
                            ביצוע: Lost Connection Band
                        </p>
                        
                        <div style="margin: 30px 0;">
                            <a href="${pdfUrl}" target="_blank" class="action-btn view-btn">
                                👁️ פתח PDF בדפדפן
                            </a>
                            
                            <a href="${pdfUrl}" download="Shape-Of-You-Lost-Connection-Band.pdf" class="action-btn download-btn">
                                ⬇️ הורד PDF
                            </a>
                        </div>
                        
                        <div style="margin-top: 30px; padding: 20px; background: rgba(56,189,248,0.1); border-radius: 10px; text-align: center;">
                            <p style="color: #94a3b8; margin-bottom: 10px;">
                                <strong>הערה:</strong> הקובץ נמצא ב-Google Drive. אם ההורדה לא מתחילה אוטומטית:
                            </p>
                            <ol style="color: #94a3b8; text-align: right; padding-right: 20px; margin: 0 auto; display: inline-block;">
                                <li>פתח את הקישור בדפדפן</li>
                                <li>לחץ על "הורד" (סמל החץ למטה)</li>
                                <li>שמור את הקובץ במחשב</li>
                            </ol>
                        </div>
                    </div>
                    
                    <!-- קרדיטים -->
                    <div class="content-box">
                        <h3 style="color: #38bdf8; margin-bottom: 20px;">🎵 חברי הלהקה</h3>
                        
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px; margin: 25px 0;">
                            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; text-align: center;">
                                <div style="color: #38bdf8; font-weight: 600; font-size: 18px;">לידור</div>
                                <div style="color: #94a3b8; font-size: 14px;">סקסופון אלט</div>
                            </div>
                            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; text-align: center;">
                                <div style="color: #38bdf8; font-weight: 600; font-size: 18px;">נתנאל</div>
                                <div style="color: #94a3b8; font-size: 14px;">סקסופון טנור</div>
                            </div>
                            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; text-align: center;">
                                <div style="color: #38bdf8; font-weight: 600; font-size: 18px;">ינון</div>
                                <div style="color: #94a3b8; font-size: 14px;">תופים</div>
                            </div>
                            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; text-align: center;">
                                <div style="color: #38bdf8; font-weight: 600; font-size: 18px;">אליאור</div>
                                <div style="color: #94a3b8; font-size: 14px;">בריטון 2</div>
                            </div>
                            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; text-align: center;">
                                <div style="color: #38bdf8; font-weight: 600; font-size: 18px;">ניצן</div>
                                <div style="color: #94a3b8; font-size: 14px;">בריטון 1</div>
                            </div>
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
      }

      // פונקציה לפתיחת יצירה 2
      function openCreation2() {
        const page = `
                <div class="page-content">
                    <button class="back-btn" onclick="closePage()">← חזרה לרשימה</button>
                    
                    <h2 style="color: #38bdf8; text-align: center; margin-bottom: 30px;">🎵 יצירה 2</h2>
                    
                    <div class="content-box">
                        <div style="font-size: 60px; margin-bottom: 20px;">📁</div>
                        <h3 style="color: #38bdf8; margin-bottom: 15px;">יצירה מקורית</h3>
                        <p style="color: #94a3b8; margin-bottom: 25px;">
                            יצירה מקורית של Lost Connection Band
                        </p>
                        
                        <p style="color: #f87171; padding: 15px; background: rgba(239,68,68,0.1); border-radius: 10px;">
                            ⚠️ קישור ל-PDF לא זמין כרגע
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
