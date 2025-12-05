<!DOCTYPE html>
<html lang="he" dir="rtl">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1"
    />
    <title>התחברות - יצירות דיגיטליות</title>
    <style>
      /* כל הסגנונות הקודמים נשארים עם תוספות */

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        background: linear-gradient(135deg, #0f172a, #0b1320);
        color: #fff;
        font-family: "Segoe UI", system-ui, Arial, sans-serif;
        min-height: 100vh;
        -webkit-tap-highlight-color: transparent;
      }

      /* מסך בחירת פלטפורמה */
      .platform-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding: 20px;
      }

      .platform-title {
        color: #38bdf8;
        font-size: 28px;
        margin-bottom: 40px;
        text-align: center;
      }

      .platform-options {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
        max-width: 400px;
      }

      .platform-btn {
        padding: 20px;
        border-radius: 15px;
        border: none;
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        transition: all 0.3s ease;
        background: rgba(255, 255, 255, 0.1);
        color: white;
        border: 2px solid rgba(56, 189, 248, 0.3);
      }

      .platform-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(56, 189, 248, 0.3);
      }

      .phone-btn {
        background: linear-gradient(135deg, #0ea5e9, #0284c7);
      }

      .pc-btn {
        background: linear-gradient(135deg, #8b5cf6, #7c3aed);
      }

      .platform-icon {
        font-size: 24px;
      }

      /* התאמה לנייד */
      @media (max-width: 768px) {
        .login-box {
          padding: 25px 20px;
          margin: 15px;
          width: calc(100% - 30px);
        }

        .your-banner {
          height: 150px;
          margin-bottom: 25px;
        }

        .login-title {
          font-size: 24px;
          margin-bottom: 20px;
        }

        input {
          padding: 14px 16px;
          font-size: 16px;
          margin-top: 15px;
        }

        .login-btn {
          padding: 16px;
          font-size: 17px;
          margin-top: 20px;
        }

        .creations-title {
          font-size: 28px;
          margin-bottom: 30px;
        }

        .creation-card {
          padding: 20px;
          margin: 0 15px;
        }

        .creation-name {
          font-size: 22px;
        }

        .page-content {
          padding: 20px;
        }

        .action-btn {
          padding: 10px 20px;
          margin: 5px;
          font-size: 14px;
        }

        .user-info {
          padding: 12px;
          font-size: 14px;
          margin: 15px;
        }

        .calendar-container {
          padding: 10px;
        }

        .day-cell {
          padding: 8px;
          min-height: 80px;
        }

        .day-number {
          font-size: 16px;
        }

        .event-item {
          font-size: 10px;
          padding: 3px 5px;
          margin-bottom: 3px;
        }

        .days-grid {
          gap: 5px;
        }

        .day-header {
          padding: 10px;
          font-size: 14px;
        }

        .calendar-header {
          padding: 15px;
          flex-direction: column;
          gap: 15px;
        }

        .calendar-title {
          font-size: 22px;
        }

        .month-navigation {
          width: 100%;
          justify-content: space-between;
        }

        .month-btn {
          padding: 8px 16px;
          font-size: 14px;
        }

        .device-buttons {
          flex-direction: column;
        }

        .ios-btn,
        .android-btn {
          width: 100%;
          justify-content: center;
        }
      }

      @media (max-width: 480px) {
        .your-banner {
          height: 120px;
        }

        .login-title {
          font-size: 22px;
        }

        .creations-title {
          font-size: 24px;
        }

        .creation-name {
          font-size: 20px;
        }

        .days-grid {
          grid-template-columns: repeat(7, 1fr);
          gap: 3px;
        }

        .day-cell {
          min-height: 70px;
          padding: 6px;
        }

        .day-number {
          font-size: 14px;
        }
      }

      /* סגנונות נוספים שנשארים ללא שינוי */
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

      .calendar-btn {
        background: linear-gradient(135deg, #10b981, #059669);
        color: white;
      }

      .reminder-all-btn {
        background: linear-gradient(135deg, #f59e0b, #d97706);
        color: white;
      }

      .delete-events-btn {
        background: linear-gradient(135deg, #ef4444, #dc2626);
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

      /* סגנונות לוח שנה */
      .calendar-container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px;
      }

      .calendar-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        padding: 20px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 15px;
      }

      .calendar-title {
        color: #38bdf8;
        font-size: 28px;
        font-weight: 700;
      }

      .month-navigation {
        display: flex;
        gap: 10px;
      }

      .month-btn {
        padding: 8px 20px;
        background: rgba(56, 189, 248, 0.2);
        color: #38bdf8;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
      }

      .days-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 10px;
        margin-bottom: 20px;
      }

      .day-header {
        text-align: center;
        padding: 15px;
        background: rgba(56, 189, 248, 0.1);
        border-radius: 10px;
        color: #38bdf8;
        font-weight: 600;
      }

      .day-cell {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        padding: 15px;
        min-height: 120px;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .day-cell:hover {
        background: rgba(56, 189, 248, 0.08);
        transform: translateY(-2px);
      }

      .day-number {
        font-size: 18px;
        font-weight: 700;
        color: #fff;
        margin-bottom: 8px;
      }

      .event-item {
        background: rgba(56, 189, 248, 0.15);
        border-radius: 6px;
        padding: 6px 10px;
        margin-bottom: 6px;
        font-size: 12px;
        color: #e2e8f0;
      }

      .event-time {
        color: #38bdf8;
        font-weight: 600;
      }

      .event-desc {
        color: #cbd5e1;
      }

      .empty-day {
        background: rgba(255, 255, 255, 0.02);
        cursor: default;
      }

      .empty-day:hover {
        background: rgba(255, 255, 255, 0.02);
        transform: none;
      }

      .today {
        background: rgba(56, 189, 248, 0.2);
        border: 2px solid #38bdf8;
      }

      .has-events {
        border-left: 4px solid #10b981;
      }

      /* סגנונות עריכה */
      .edit-controls {
        display: flex;
        gap: 10px;
        margin-top: 20px;
        padding: 20px;
        background: rgba(245, 158, 11, 0.1);
        border-radius: 10px;
        flex-wrap: wrap;
        justify-content: center;
      }

      .edit-btn {
        padding: 10px 20px;
        background: #f59e0b;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
      }

      .reminder-btn {
        padding: 10px 20px;
        background: linear-gradient(135deg, #8b5cf6, #7c3aed);
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        margin-top: 10px;
      }

      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        padding: 20px;
      }

      .modal-content {
        background: #1e293b;
        border-radius: 15px;
        padding: 30px;
        width: 100%;
        max-width: 500px;
        border: 2px solid #38bdf8;
        max-height: 90vh;
        overflow-y: auto;
      }

      .modal-title {
        color: #38bdf8;
        font-size: 24px;
        margin-bottom: 20px;
        text-align: center;
      }

      .form-group {
        margin-bottom: 20px;
      }

      .form-label {
        display: block;
        color: #94a3b8;
        margin-bottom: 8px;
        font-size: 14px;
      }

      .form-input,
      .form-select {
        width: 100%;
        padding: 12px;
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.08);
        color: #fff;
        font-size: 16px;
      }

      .form-select option {
        background: #1e293b;
        color: #fff;
      }

      .modal-buttons {
        display: flex;
        gap: 10px;
        margin-top: 30px;
      }

      .save-btn {
        flex: 1;
        padding: 12px;
        background: #10b981;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
      }

      .cancel-btn {
        flex: 1;
        padding: 12px;
        background: #64748b;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
      }

      .delete-btn {
        background: #ef4444;
        color: white;
        border: none;
        border-radius: 6px;
        padding: 4px 8px;
        font-size: 12px;
        cursor: pointer;
        margin-left: 5px;
      }

      .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        z-index: 1001;
        animation: slideIn 0.3s ease;
        font-family: "Segoe UI", system-ui, Arial;
      }

      .emergency-notification {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(15, 23, 42, 0.95);
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: fadeIn 0.5s ease;
      }

      .emergency-content {
        background: linear-gradient(135deg, #0f172a, #1e293b);
        padding: 40px;
        border-radius: 20px;
        text-align: center;
        max-width: 500px;
        width: 90%;
        border: 4px solid #38bdf8;
        box-shadow: 0 0 30px rgba(56, 189, 248, 0.6);
        animation: pulse 2s infinite;
      }

      .emergency-title {
        font-size: 32px;
        color: #38bdf8;
        margin-bottom: 15px;
        font-weight: 800;
      }

      .emergency-message {
        font-size: 20px;
        color: #fff;
        margin-bottom: 25px;
        line-height: 1.6;
      }

      .emergency-close {
        padding: 15px 30px;
        background: #38bdf8;
        color: white;
        border: none;
        border-radius: 10px;
        font-size: 18px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.3s;
      }

      .emergency-close:hover {
        background: #0ea5e9;
        transform: scale(1.05);
      }

      .event-type-badge {
        display: inline-block;
        padding: 2px 8px;
        border-radius: 4px;
        font-size: 11px;
        margin-left: 5px;
        font-weight: 600;
      }

      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes pulse {
        0% {
          box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.4);
        }
        70% {
          box-shadow: 0 0 0 15px rgba(56, 189, 248, 0);
        }
        100% {
          box-shadow: 0 0 0 0 rgba(56, 189, 248, 0);
        }
      }

      .permission-notice {
        background: rgba(245, 158, 11, 0.1);
        border: 1px solid #f59e0b;
        border-radius: 10px;
        padding: 15px;
        margin: 20px 0;
        text-align: center;
      }

      .permission-notice p {
        color: #fbbf24;
        margin-bottom: 10px;
      }

      .enable-notifications-btn {
        background: #f59e0b;
        color: white;
        border: none;
        border-radius: 8px;
        padding: 10px 20px;
        cursor: pointer;
        font-weight: 600;
      }

      .reminder-settings {
        background: rgba(56, 189, 248, 0.1);
        border-radius: 10px;
        padding: 20px;
        margin: 20px 0;
      }

      .reminder-options {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 15px;
        justify-content: center;
      }

      .reminder-option-btn {
        padding: 8px 15px;
        background: rgba(56, 189, 248, 0.2);
        color: #38bdf8;
        border: 1px solid #38bdf8;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.3s;
      }

      .reminder-option-btn.active {
        background: #38bdf8;
        color: white;
      }

      .reminder-option-btn:hover {
        background: #38bdf8;
        color: white;
      }

      /* סגנונות חדשים להוספה ליומן */
      .device-notice {
        background: rgba(56, 189, 248, 0.1);
        border-radius: 10px;
        padding: 20px;
        margin: 20px 0;
        border: 1px solid #38bdf8;
      }

      .device-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 15px;
        justify-content: center;
      }

      .ios-btn {
        background: linear-gradient(135deg, #000000, #333333);
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .android-btn {
        background: linear-gradient(135deg, #3ddc84, #0f9d58);
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .calendar-icon {
        font-size: 20px;
      }

      .instructions-modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        z-index: 10000;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
      }

      .instructions-content {
        background: #1e293b;
        border-radius: 15px;
        padding: 30px;
        max-width: 500px;
        width: 90%;
        border: 2px solid #38bdf8;
        max-height: 80vh;
        overflow-y: auto;
      }

      .instructions-title {
        color: #38bdf8;
        font-size: 24px;
        margin-bottom: 20px;
        text-align: center;
      }

      .instructions-steps {
        color: #94a3b8;
        line-height: 1.6;
        margin-bottom: 25px;
      }

      .instructions-steps ol {
        padding-right: 20px;
        margin-right: 10px;
      }

      .instructions-steps li {
        margin-bottom: 15px;
      }

      .instructions-close {
        padding: 12px 25px;
        background: #38bdf8;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        width: 100%;
        margin-top: 10px;
      }

      /* כפתור זיכרון התחברות */
      .remember-me {
        display: flex;
        align-items: center;
        margin-top: 15px;
        padding: 10px 0;
      }

      .remember-checkbox {
        margin-left: 10px;
        width: 20px;
        height: 20px;
      }

      .remember-label {
        color: #94a3b8;
        font-size: 15px;
      }
    </style>
  </head>
  <body>
    <!-- מסך בחירת פלטפורמה -->
    <section
      class="platform-section"
      id="platformSection"
      style="display: flex"
    >
      <h2 class="platform-title">📱 בחר את הפלטפורמה שלך</h2>
      <div class="platform-options">
        <button
          class="platform-btn phone-btn"
          onclick="selectPlatform('phone')"
        >
          <span class="platform-icon">📱</span>
          טלפון נייד
        </button>
        <button class="platform-btn pc-btn" onclick="selectPlatform('pc')">
          <span class="platform-icon">💻</span>
          מחשב
        </button>
      </div>
    </section>

    <!-- מסך התחברות -->
    <section class="login-section" id="loginSection" style="display: none">
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

          <div class="remember-me">
            <input type="checkbox" id="rememberMe" class="remember-checkbox" />
            <label for="rememberMe" class="remember-label">זכור אותי</label>
          </div>

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

        <div class="creation-card" onclick="openCalendar()">
          <div class="creation-name">📅 לוח שנה וזמנים</div>
          <div style="color: #94a3b8; font-size: 16px; margin-top: 8px">
            צפייה בתאריכים, זמנים וקביעת תזכורות
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
      // 1. מחק את כל התזכורות הקיימות
      localStorage.removeItem("reminders");
      let reminders = {};

      // משתנה לזכירת פלטפורמה
      let selectedPlatform = "";

      // משתנה לבדיקה אם יש משתמש זכור
      let rememberedUser = JSON.parse(localStorage.getItem("rememberedUser"));

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
          videoUrl: "https://youtu.be/o84HUOAESfY",
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
          videoUrl: "https://youtu.be/VsExU_j28eM",
          role: "תופים",
          instrument: "תופים",
          welcome: "ברוך הבא ינון! כאן ה-PDF האישי שלך",
        },
        {
          name: "אדמין",
          password: "אורי סיסמה בדוי",
          pdfUrl:
            "https://drive.google.com/file/d/1tC3jSIXqqYkYxSVHCF2bczLGnu3niHeS/view?usp=sharing",
          videoUrl: "https://youtu.be/VsExU_j28eM",
          role: "מנהל מערכת",
          instrument: "כלים",
          welcome: "ברוך הבא מנהל המערכת! גישה מלאה לכל הקבצים",
        },
      ];

      // אירועי לוח שנה
      let calendarEvents = JSON.parse(
        localStorage.getItem("calendarEvents")
      ) || [
        {
          id: 1,
          date: new Date().getDate(),
          month: new Date().getMonth(),
          year: new Date().getFullYear(),
          time: "19:00",
          description: "חזרה כללית",
          type: "חזרה",
        },
        {
          id: 2,
          date: new Date().getDate() + 3,
          month: new Date().getMonth(),
          year: new Date().getFullYear(),
          time: "18:30",
          description: "חזרת סקסופונים",
          type: "חזרת כלים",
        },
        {
          id: 3,
          date: new Date().getDate() + 7,
          month: new Date().getMonth(),
          year: new Date().getFullYear(),
          time: "20:00",
          description: "הופעה במועדון",
          type: "הופעה",
        },
      ];

      let currentUser = null;
      let currentMonth = new Date().getMonth();
      let currentYear = new Date().getFullYear();
      let notificationPermission = false;
      let reminderMinutesBefore = 60;

      // בדוק אם זה אייפון או אנדרואיד
      function isIOS() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      }

      function isAndroid() {
        return /Android/.test(navigator.userAgent);
      }

      // בחר פלטפורמה
      function selectPlatform(platform) {
        selectedPlatform = platform;
        localStorage.setItem("selectedPlatform", platform);

        document.getElementById("platformSection").style.display = "none";
        document.getElementById("loginSection").style.display = "flex";

        // אם יש משתמש זכור, מצא אותו אוטומטית
        if (rememberedUser) {
          document.getElementById("username").value = rememberedUser.username;
          document.getElementById("password").value = rememberedUser.password;
          document.getElementById("rememberMe").checked = true;

          // בדוק אם זה טלפון - הצע התחברות אוטומטית
          if (platform === "phone") {
            setTimeout(() => {
              if (confirm("מצאנו משתמש שמור. האם להכנס אוטומטית?")) {
                login();
              }
            }, 500);
          }
        }
      }

      // בדוק אם יש משתמש זכור בעת טעינה
      function checkRememberedUser() {
        const remembered = localStorage.getItem("rememberedUser");
        if (remembered) {
          const user = JSON.parse(remembered);
          rememberedUser = user;

          // בדוק אם יש פלטפורמה שמורה
          const savedPlatform = localStorage.getItem("selectedPlatform");
          if (savedPlatform) {
            selectedPlatform = savedPlatform;
            document.getElementById("platformSection").style.display = "none";
            document.getElementById("loginSection").style.display = "flex";

            // מלא את הטופס
            document.getElementById("username").value = user.username;
            document.getElementById("password").value = user.password;
            document.getElementById("rememberMe").checked = true;

            // הצע התחברות אוטומטית רק בטלפון
            if (savedPlatform === "phone") {
              setTimeout(() => {
                if (confirm("מצאנו משתמש שמור. האם להכנס אוטומטית?")) {
                  login();
                }
              }, 1000);
            }
          }
        }
      }

      // התחברות
      function login() {
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const rememberMe = document.getElementById("rememberMe").checked;
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

          // זכור משתמש אם ביקש
          if (rememberMe) {
            const userToRemember = {
              username: username,
              password: password,
            };
            localStorage.setItem(
              "rememberedUser",
              JSON.stringify(userToRemember)
            );
            rememberedUser = userToRemember;
          } else {
            // מחק זכרון אם לא ביקש
            localStorage.removeItem("rememberedUser");
            rememberedUser = null;
          }

          document.getElementById("loginSection").style.display = "none";
          document.getElementById("mainContainer").style.display = "block";

          // הצג הודעת ברוך הבא עם סימן
          const adminBadge =
            user.name === "אדמין"
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
          const yinonBadge =
            user.name === "ינון"
              ? '<span class="special-badge" style="background: linear-gradient(135deg, #f97316, #ea580c);">🥁 תופים</span>'
              : "";

          document.getElementById("userWelcome").innerHTML = `
                    ${adminBadge}${lidorBadge}${natanelBadge}${nitzanBadge}${eliorBadge}${yinonBadge}👋 ${
            user.welcome
          }
                    <div style="font-size: 14px; color: #94a3b8; margin-top: 5px;">
                        תפקיד: ${user.role} | כלי: ${user.instrument}
                    </div>
                    ${
                      selectedPlatform
                        ? `<div style="font-size: 12px; color: #64748b; margin-top: 5px;">
                        📱 פלטפורמה: ${
                          selectedPlatform === "phone" ? "טלפון" : "מחשב"
                        }
                    </div>`
                        : ""
                    }
                `;

          // התאם גודל אלמנטים לפלטפורמה
          if (selectedPlatform === "phone") {
            document.body.classList.add("mobile-optimized");
          } else {
            document.body.classList.remove("mobile-optimized");
          }
        } else {
          errorAlert.textContent = "שם משתמש או סיסמה לא נכונים";
          errorAlert.style.display = "block";
          document.getElementById("password").value = "";
        }
      }

      // התנתקות
      function logout() {
        // שאל האם למחוק זכרון
        if (rememberedUser && confirm("האם למחוק גם את זכרון ההתחברות?")) {
          localStorage.removeItem("rememberedUser");
          localStorage.removeItem("selectedPlatform");
          rememberedUser = null;
          selectedPlatform = "";
        }

        currentUser = null;
        document.getElementById("platformSection").style.display = "flex";
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("mainContainer").style.display = "none";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("pagesContainer").innerHTML = "";
        document.getElementById("userWelcome").innerHTML = "";
        document.getElementById("rememberMe").checked = false;
      }

      // שאר הפונקציות נשארות כמו שהיו...
      // (המשך הקוד נשאר זהה עם כל הפונקציות הקיימות)

      // התראה על מסך מלא - עם תמונה של הלהקה
      function showEmergencyReminder(reminder) {
        // סמן ששלחנו תזכורת
        reminder.notified = true;
        localStorage.setItem("reminders", JSON.stringify(reminders));

        // צור התראה על מסך מלא
        const emergencyAlert = document.createElement("div");
        emergencyAlert.className = "emergency-notification";
        emergencyAlert.innerHTML = `
                <div class="emergency-content">
                    <div style="width: 100px; height: 100px; margin: 0 auto 20px; border-radius: 15px; overflow: hidden; border: 3px solid #38bdf8;">
                        <img src="https://i.ibb.co/KxZZxtgN/Lost-Connection-Band-Israel.jpg" 
                             alt="Lost Connection Band" 
                             style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <h2 class="emergency-title" style="color: #fff;">תזכורת לאירוע</h2>
                    <p class="emergency-message" style="color: #fff; font-size: 20px;">
                        <strong style="color: #38bdf8; font-size: 24px;">${reminder.description}</strong><br>
                        <span style="font-size: 22px; margin-top: 10px; display: block;">
                            מתחיל בשעה ${reminder.time}
                        </span>
                    </p>
                    
                    <div style="margin-top: 20px;">
                        <button class="emergency-close" onclick="this.closest('.emergency-notification').remove()" style="margin-bottom: 10px;">
                            סגור
                        </button>
                        <button class="ios-btn" onclick="showCalendarInstructions('${reminder.description}', ${reminder.date}, ${reminder.month}, ${reminder.year}, '${reminder.time}')" style="width: 100%;">
                            <span class="calendar-icon">📅</span>
                            הוסף ליומן הטלפון
                        </button>
                    </div>
                </div>
            `;

        document.body.appendChild(emergencyAlert);

        // השמע צליל תזכורת עדין
        createGentleReminderSound();

        // רעד עדין אם אפשר
        if (navigator.vibrate) {
          navigator.vibrate([300, 100, 300]);
        }

        // גם שלח התראה מערכתית עם אותה תמונה
        if ("Notification" in window && Notification.permission === "granted") {
          const notification = new Notification(
            "🎵 Lost Connection Band - תזכורת",
            {
              body: `${reminder.description} מתחיל בשעה ${reminder.time}`,
              icon: "https://i.ibb.co/KxZZxtgN/Lost-Connection-Band-Israel.jpg",
              tag: `reminder-${reminder.eventId}`,
              requireInteraction: false,
              silent: false,
              vibrate: [200, 100, 200],
            }
          );

          notification.onclick = function () {
            window.focus();
            this.close();
          };
        }

        // סגור אוטומטית אחרי 60 שניות
        setTimeout(() => {
          if (emergencyAlert.parentNode) {
            emergencyAlert.parentNode.removeChild(emergencyAlert);
          }
        }, 60000);
      }

      // בדוק תזכורות שהגיע זמנן
      function checkReminders() {
        const now = new Date().getTime();

        for (const key in reminders) {
          const reminder = reminders[key];

          if (!reminder.notified && reminder.reminderTime <= now) {
            showEmergencyReminder(reminder);
          }
        }
      }

      // פונקציה ליצירת קישור להוספה ליומן
      function createCalendarLink(description, day, month, year, time) {
        const formattedDate = `${year}${String(month + 1).padStart(
          2,
          "0"
        )}${String(day).padStart(2, "0")}`;

        const [hours, minutes] = time.split(":");
        const formattedTime = `${hours}${minutes}00`;

        if (isIOS()) {
          return `data:text/calendar;charset=utf-8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ASUMMARY:${encodeURIComponent(
            description
          )}%0ADTSTART:${formattedDate}T${formattedTime}%0ADTEND:${formattedDate}T${
            parseInt(hours) + 1
          }${minutes}00%0ALOCATION:חזרת%20Lost%20Connection%20Band%0ADESCRIPTION:${encodeURIComponent(
            description
          )}%20-%20Lost%20Connection%20Band%0AEND:VEVENT%0AEND:VCALENDAR`;
        } else if (isAndroid()) {
          const endDate = new Date(
            year,
            month,
            day,
            parseInt(hours) + 1,
            parseInt(minutes)
          );
          const endFormatted =
            endDate.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

          const startDate = new Date(year, month, day, hours, minutes);
          const startFormatted =
            startDate.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

          return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
            description
          )}&dates=${formattedDate}T${formattedTime}/${formattedDate}T${
            parseInt(hours) + 1
          }${minutes}00&details=${encodeURIComponent(
            "חזרת Lost Connection Band"
          )}&location=חזרת%20Lost%20Connection%20Band`;
        } else {
          return `data:text/calendar;charset=utf-8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ASUMMARY:${encodeURIComponent(
            description
          )}%0ADTSTART:${formattedDate}T${formattedTime}%0ADTEND:${formattedDate}T${
            parseInt(hours) + 1
          }${minutes}00%0ALOCATION:חזרת%20Lost%20Connection%20Band%0ADESCRIPTION:${encodeURIComponent(
            description
          )}%20-%20Lost%20Connection%20Band%0AEND:VEVENT%0AEND:VCALENDAR`;
        }
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

        const isAdmin = currentUser.name === "אדמין";
        const isLidor = currentUser.name === "לידור";
        const isNatanel = currentUser.name === "נתנאל";
        const isNitzan = currentUser.name === "ניצן";
        const isElior = currentUser.name === "אליאור";
        const isYinon = currentUser.name === "ינון";
        const hasAudioVideo =
          isAdmin || isLidor || isNatanel || isNitzan || isElior || isYinon;

        let audioVideoUrl;
        if (isAdmin || isYinon) {
          audioVideoUrl = "https://youtu.be/VsExU_j28eM";
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
                        ${
                          isYinon
                            ? '<span class="special-badge" style="background: linear-gradient(135deg, #f97316, #ea580c);">🥁 תופים</span>'
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
                            ? `<p style="color: #f87171; padding: 15px; background: rgba(239,68,68,0.1); border-radius: 10px; margin-top: 20px;">
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
                                    : isYinon
                                    ? "#f97316"
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
                                        : isYinon
                                        ? "גישה לתופים"
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
                        </div>
                    </div>
                </div>
            `;

        document.getElementById("mainContainer").style.display = "none";
        document.getElementById("pagesContainer").innerHTML = page;

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
        const isAdmin = currentUser.name === "אדמין";
        const isLidor = currentUser.name === "לידור";
        const isNatanel = currentUser.name === "נתנאל";
        const isNitzan = currentUser.name === "ניצן";
        const isElior = currentUser.name === "אליאור";
        const isYinon = currentUser.name === "ינון";

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
                        ${
                          isYinon
                            ? '<span class="special-badge" style="background: linear-gradient(135deg, #f97316, #ea580c);">🥁 תופים</span>'
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

      // פונקציה לפתיחת לוח שנה
      function openCalendar() {
        const isAdmin = currentUser.name === "אדמין";

        const page = `
                <div class="page-content">
                    <button class="back-btn" onclick="closePage()">← חזרה לרשימה</button>

                    <div class="user-info" style="margin-bottom: 20px;">
                        ${
                          isAdmin
                            ? '<span class="admin-badge">👑 מנהל</span>'
                            : ""
                        }
                        ${getUserBadge(currentUser.name)}
                        👤 ${currentUser.name} - ${currentUser.role}
                    </div>

                    <h2 style="color: #38bdf8; text-align: center; margin-bottom: 30px;">📅 לוח שנה וזמנים</h2>

                    <div class="content-box">
                        <div style="font-size: 60px; margin-bottom: 20px;">📅</div>
                        <h3 style="color: #38bdf8; margin-bottom: 15px;">לוח אירועים וזמנים</h3>
                        <p style="color: #94a3b8; margin-bottom: 25px;">
                            כאן תוכלו לראות את כל האירועים, החזרות וההופעות של הלהקה<br>
                            <span style="color: #38bdf8; font-weight: 600;">ניתן לקבוע תזכורות לאירועים!</span>
                        </p>

                        ${showCalendarButtons()}

                        <div class="reminder-settings">
                            <h4 style="color: #38bdf8; margin-bottom: 10px;">⚙️ הגדרות תזכורת באתר:</h4>
                            <p style="color: #94a3b8; font-size: 14px; margin-bottom: 10px;">
                                בחר מתי לקבל תזכורת לפני כל אירוע:
                            </p>
                            <div class="reminder-options">
                                <button class="reminder-option-btn ${
                                  reminderMinutesBefore === 15 ? "active" : ""
                                }" onclick="setReminderTime(15)">15 דקות לפני</button>
                                <button class="reminder-option-btn ${
                                  reminderMinutesBefore === 30 ? "active" : ""
                                }" onclick="setReminderTime(30)">30 דקות לפני</button>
                                <button class="reminder-option-btn ${
                                  reminderMinutesBefore === 60 ? "active" : ""
                                }" onclick="setReminderTime(60)">שעה לפני</button>
                                <button class="reminder-option-btn ${
                                  reminderMinutesBefore === 120 ? "active" : ""
                                }" onclick="setReminderTime(120)">שעתיים לפני</button>
                                <button class="reminder-option-btn ${
                                  reminderMinutesBefore === 1440 ? "active" : ""
                                }" onclick="setReminderTime(1440)">יום לפני</button>
                            </div>
                        </div>

                        <div style="margin: 30px 0;">
                            ${
                              isAdmin
                                ? `
                                <button class="action-btn edit-btn" onclick="openAddEventModal()">
                                    ✏️ הוסף אירוע חדש
                                </button>
                                <button class="action-btn delete-events-btn" onclick="deleteAllEvents()">
                                    🗑️ מחק כל האירועים
                                </button>
                            `
                                : ""
                            }
                            
                            <button class="action-btn reminder-all-btn" onclick="setRemindersForAllEvents()">
                                ⏰ תזכורת לכל האירועים (באתר)
                            </button>
                        </div>
                        
                        ${
                          !notificationPermission
                            ? `
                            <div class="permission-notice">
                                <p>לתזכורות אמיתיות שפועלות גם כשהדפדפן סגור, יש לאשר קבלת התראות:</p>
                                <button class="enable-notifications-btn" onclick="requestNotificationPermission()">
                                    ✅ אפשר התראות
                                </button>
                            </div>
                        `
                            : ""
                        }
                    </div>

                    <div id="calendarContainer" class="calendar-container"></div>
                </div>
            `;

        document.getElementById("mainContainer").style.display = "none";
        document.getElementById("pagesContainer").innerHTML = page;

        window.renderCalendar = renderCalendar;
        window.openAddEventModal = openAddEventModal;
        window.prevMonth = prevMonth;
        window.nextMonth = nextMonth;
        window.openDayEvents = openDayEvents;
        window.setReminder = setReminder;
        window.setReminderTime = setReminderTime;
        window.saveEvent = saveEvent;
        window.cancelEvent = cancelEvent;
        window.deleteEvent = deleteEvent;
        window.deleteAllEvents = deleteAllEvents;
        window.setRemindersForAllEvents = setRemindersForAllEvents;
        window.requestNotificationPermission = requestNotificationPermission;

        renderCalendar();
      }

      // קביעת זמן תזכורת
      function setReminderTime(minutes) {
        reminderMinutesBefore = minutes;
        localStorage.setItem("reminderMinutesBefore", minutes);

        document.querySelectorAll(".reminder-option-btn").forEach((btn) => {
          btn.classList.remove("active");
        });
        event.target.classList.add("active");

        showNotification(`✅ תזכורת תיקבע ${minutes} דקות לפני כל אירוע`);
      }

      // בקש הרשאת התראות
      function requestNotificationPermission() {
        if ("Notification" in window) {
          Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
              notificationPermission = true;
              showNotification(
                "✅ התראות מאושרות! תזכורות יפעלו גם כשהדפדפן סגור."
              );
            }
          });
        } else {
          showNotification("הדפדפן שלך לא תומך בהתראות");
        }
      }

      // הגדר תזכורת לאירוע
      function setReminder(eventId, description, day, month, year, time) {
        const now = new Date();
        let eventDate = new Date(year, month, day);

        const [hours, minutes] = time.split(":").map(Number);
        eventDate.setHours(hours, minutes, 0, 0);

        if (eventDate <= now) {
          eventDate.setDate(eventDate.getDate() + 1);
        }

        let reminderTime = new Date(
          eventDate.getTime() - reminderMinutesBefore * 60 * 1000
        );

        if (reminderTime <= now) {
          reminderTime = new Date(now.getTime() + 5 * 60 * 1000);
        }

        const reminderKey = `${eventId}_${currentUser.name}`;

        reminders[reminderKey] = {
          eventId: eventId,
          description: description,
          reminderTime: reminderTime.getTime(),
          eventTime: eventDate.getTime(),
          userId: currentUser.name,
          notified: false,
          time: time,
          date: day,
          month: month,
          year: year,
          minutesBefore: reminderMinutesBefore,
        };

        localStorage.setItem("reminders", JSON.stringify(reminders));

        showCalendarInstructions(description, day, month, year, time);
        cancelEvent();
      }

      function getUserBadge(userName) {
        switch (userName) {
          case "לידור":
            return '<span class="special-badge">🎵 אלט</span>';
          case "נתנאל":
            return '<span class="special-badge" style="background: linear-gradient(135deg, #10b981, #059669);">🎵 טנור</span>';
          case "ניצן":
            return '<span class="special-badge" style="background: linear-gradient(135deg, #ec4899, #db2777);">🎵 בריטון ראשון</span>';
          case "אליאור":
            return '<span class="special-badge" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8);">🎵 בריטון שני</span>';
          case "ינון":
            return '<span class="special-badge" style="background: linear-gradient(135deg, #f97316, #ea580c);">🥁 תופים</span>';
          default:
            return "";
        }
      }

      // פונקציה לרינדור לוח שנה
      function renderCalendar() {
        const container = document.getElementById("calendarContainer");
        if (!container) return;

        const monthNames = [
          "ינואר",
          "פברואר",
          "מרץ",
          "אפריל",
          "מאי",
          "יוני",
          "יולי",
          "אוגוסט",
          "ספטמבר",
          "אוקטובר",
          "נובמבר",
          "דצמבר",
        ];
        const dayNames = ["א", "ב", "ג", "ד", "ה", "ו", "ש"];

        const firstDay = new Date(currentYear, currentMonth, 1);
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDay = firstDay.getDay();
        let adjustedStartingDay = startingDay === 0 ? 6 : startingDay - 1;

        let calendarHTML = `
                <div class="calendar-header">
                    <div class="calendar-title">${
                      monthNames[currentMonth]
                    } ${currentYear}</div>
                    <div class="month-navigation">
                        <button class="month-btn" onclick="prevMonth()">← חודש קודם</button>
                        <button class="month-btn" onclick="nextMonth()">חודש הבא →</button>
                    </div>
                </div>

                <div class="days-grid">
                    ${dayNames
                      .map((day) => `<div class="day-header">${day}</div>`)
                      .join("")}
            `;

        let dayCounter = 1;
        const today = new Date();

        for (let i = 0; i < adjustedStartingDay; i++) {
          calendarHTML += '<div class="day-cell empty-day"></div>';
        }

        for (let day = 1; day <= daysInMonth; day++) {
          const dayEvents = calendarEvents.filter(
            (event) =>
              event.date === day &&
              event.month === currentMonth &&
              event.year === currentYear
          );

          const isToday =
            day === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear();
          let dayClass = "day-cell";
          if (isToday) dayClass += " today";
          if (dayEvents.length > 0) dayClass += " has-events";

          calendarHTML += `
                    <div class="${dayClass}" onclick="openDayEvents(${day})">
                        <div class="day-number">${day}</div>
                        ${dayEvents
                          .slice(0, 2)
                          .map(
                            (event) => `
                            <div class="event-item">
                                <span class="event-time">${event.time}</span>
                                <span class="event-desc"> - ${
                                  event.description
                                }</span>
                                <span class="event-type-badge" style="background: ${getEventTypeColor(
                                  event.type
                                )}">${event.type}</span>
                            </div>
                        `
                          )
                          .join("")}
                        ${
                          dayEvents.length > 2
                            ? `<div class="event-item" style="background: rgba(99,102,241,0.2);">+${
                                dayEvents.length - 2
                              } עוד</div>`
                            : ""
                        }
                    </div>
                `;

          dayCounter++;
        }

        const totalCells = 42;
        const remainingCells = totalCells - (adjustedStartingDay + daysInMonth);
        for (let i = 0; i < remainingCells; i++) {
          calendarHTML += '<div class="day-cell empty-day"></div>';
        }

        calendarHTML += `</div>`;

        if (currentUser.name === "אדמין") {
          calendarHTML += `
                    <div class="edit-controls">
                        <button class="edit-btn" onclick="openAddEventModal()">✏️ הוסף אירוע חדש</button>
                        <button class="delete-events-btn" onclick="deleteAllEvents()">🗑️ מחק כל האירועים</button>
                    </div>
                `;
        }

        container.innerHTML = calendarHTML;
      }

      function getEventTypeColor(type) {
        const colors = {
          חזרה: "rgba(56, 189, 248, 0.3)",
          "חזרת כלים": "rgba(16, 185, 129, 0.3)",
          הופעה: "rgba(139, 92, 246, 0.3)",
          פגישה: "rgba(245, 158, 11, 0.3)",
          "אירוע מיוחד": "rgba(236, 72, 153, 0.3)",
          אחר: "rgba(148, 163, 184, 0.3)",
        };
        return colors[type] || "rgba(148, 163, 184, 0.3)";
      }

      function prevMonth() {
        currentMonth--;
        if (currentMonth < 0) {
          currentMonth = 11;
          currentYear--;
        }
        renderCalendar();
      }

      function nextMonth() {
        currentMonth++;
        if (currentMonth > 11) {
          currentMonth = 0;
          currentYear++;
        }
        renderCalendar();
      }

      function openDayEvents(day) {
        const dayEvents = calendarEvents.filter(
          (event) =>
            event.date === day &&
            event.month === currentMonth &&
            event.year === currentYear
        );

        const monthNames = [
          "ינואר",
          "פברואר",
          "מרץ",
          "אפריל",
          "מאי",
          "יוני",
          "יולי",
          "אוגוסט",
          "ספטמבר",
          "אוקטובר",
          "נובמבר",
          "דצמבר",
        ];

        let modalHTML = `
                <div class="modal-overlay" onclick="cancelEvent()">
                    <div class="modal-content" onclick="event.stopPropagation()">
                        <h3 class="modal-title">אירועים ליום ${day} ב${
          monthNames[currentMonth]
        }</h3>
                        
                        ${
                          dayEvents.length === 0
                            ? '<p style="color: #94a3b8; text-align: center; padding: 20px;">אין אירועים ביום זה</p>'
                            : dayEvents
                                .map(
                                  (event) => `
                                <div style="background: ${getEventTypeColor(
                                  event.type
                                )}; border-radius: 10px; padding: 15px; margin-bottom: 10px;">
                                    <div style="display: flex; justify-content: space-between; align-items: center;">
                                        <div>
                                            <div style="color: #fff; font-weight: 600; font-size: 18px;">${
                                              event.description
                                            }</div>
                                            <div style="color: #e2e8f0; font-size: 14px; margin-top: 5px;">🕐 ${
                                              event.time
                                            } | 📍 ${event.type}</div>
                                        </div>
                                        ${
                                          currentUser.name === "אדמין"
                                            ? `<button class="delete-btn" onclick="deleteEvent(${event.id})">מחק</button>`
                                            : ""
                                        }
                                    </div>
                                    <button class="reminder-btn" style="width: 100%; margin-top: 10px;" onclick="setReminder(${
                                      event.id
                                    }, '${
                                    event.description
                                  }', ${day}, ${currentMonth}, ${currentYear}, '${
                                    event.time
                                  }')">⏰ תזכורת לי</button>
                                </div>
                            `
                                )
                                .join("")
                        }
                        
                        <div class="modal-buttons">
                            ${
                              currentUser.name === "אדמין"
                                ? `<button class="save-btn" onclick="openAddEventModal(${day})">הוסף אירוע</button>`
                                : ""
                            }
                            <button class="cancel-btn" onclick="cancelEvent()">סגור</button>
                        </div>
                    </div>
                </div>
            `;

        document.body.insertAdjacentHTML("beforeend", modalHTML);
      }

      // פתח מודל להוספת אירוע
      function openAddEventModal(day = null) {
        if (currentUser.name !== "אדמין") {
          showNotification("רק מנהל המערכת יכול להוסיף אירועים");
          return;
        }

        const defaultDate = day
          ? `${currentYear}-${String(currentMonth + 1).padStart(
              2,
              "0"
            )}-${String(day).padStart(2, "0")}`
          : `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-01`;

        let modalHTML = `
                <div class="modal-overlay" onclick="cancelEvent()">
                    <div class="modal-content" onclick="event.stopPropagation()">
                        <h3 class="modal-title">הוספת אירוע חדש</h3>
                        
                        <div class="form-group">
                            <label class="form-label">תיאור האירוע</label>
                            <input type="text" id="eventDescription" class="form-input" placeholder="לדוגמה: חזרה כללית">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">תאריך</label>
                            <input type="date" id="eventDate" class="form-input" value="${defaultDate}">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">שעה</label>
                            <input type="time" id="eventTime" class="form-input" value="19:00">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">סוג האירוע</label>
                            <select id="eventType" class="form-select">
                                <option value="חזרה" style="color: black; background: white;">חזרה</option>
                                <option value="חזרת כלים" style="color: black; background: white;">חזרת כלים</option>
                                <option value="הופעה" style="color: black; background: white;">הופעה</option>
                                <option value="פגישה" style="color: black; background: white;">פגישה</option>
                                <option value="אירוע מיוחד" style="color: black; background: white;">אירוע מיוחד</option>
                                <option value="אחר" style="color: black; background: white;">אחר</option>
                            </select>
                        </div>
                        
                        <div class="modal-buttons">
                            <button class="save-btn" onclick="saveEvent()">שמור אירוע</button>
                            <button class="cancel-btn" onclick="cancelEvent()">ביטול</button>
                        </div>
                    </div>
                </div>
            `;

        document.body.insertAdjacentHTML("beforeend", modalHTML);
      }

      // שמור אירוע חדש
      function saveEvent() {
        const description = document.getElementById("eventDescription").value;
        const dateStr = document.getElementById("eventDate").value;
        const time = document.getElementById("eventTime").value;
        const type = document.getElementById("eventType").value;

        if (!description || !dateStr || !time) {
          showNotification("נא למלא את כל השדות");
          return;
        }

        const date = new Date(dateStr);
        const newEvent = {
          id: Date.now(),
          date: date.getDate(),
          month: date.getMonth(),
          year: date.getFullYear(),
          time: time,
          description: description,
          type: type,
        };

        calendarEvents.push(newEvent);
        localStorage.setItem("calendarEvents", JSON.stringify(calendarEvents));

        cancelEvent();
        renderCalendar();
        showNotification("האירוע נוסף בהצלחה!");
      }

      // מחק אירוע
      function deleteEvent(eventId) {
        if (currentUser.name !== "אדמין") {
          showNotification("רק מנהל המערכת יכול למחוק אירועים");
          return;
        }

        calendarEvents = calendarEvents.filter((event) => event.id !== eventId);
        localStorage.setItem("calendarEvents", JSON.stringify(calendarEvents));

        const modals = document.querySelectorAll(".modal-overlay");
        modals.forEach((modal) => modal.remove());

        renderCalendar();
        showNotification("האירוע נמחק בהצלחה");
      }

      // מחק את כל האירועים
      function deleteAllEvents() {
        if (currentUser.name !== "אדמין") {
          showNotification("רק מנהל המערכת יכול למחוק אירועים");
          return;
        }

        if (
          confirm(
            "האם אתה בטוח שברצונך למחוק את כל האירועים? פעולה זו אינה ניתנת לביטול!"
          )
        ) {
          calendarEvents = [];
          localStorage.setItem(
            "calendarEvents",
            JSON.stringify(calendarEvents)
          );
          renderCalendar();
          showNotification("כל האירועים נמחקו בהצלחה");
        }
      }

      // בטל/סגור מודל
      function cancelEvent() {
        const modals = document.querySelectorAll(".modal-overlay");
        modals.forEach((modal) => modal.remove());
      }

      // קבע תזכורות לכל האירועים העתידיים
      function setRemindersForAllEvents() {
        const now = new Date();
        let remindersSet = 0;

        const upcomingEvents = calendarEvents.filter((event) => {
          const eventDate = new Date(event.year, event.month, event.date);
          const [hours, minutes] = event.time.split(":").map(Number);
          eventDate.setHours(hours, minutes, 0, 0);
          return (
            eventDate > now &&
            eventDate < new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000)
          );
        });

        if (upcomingEvents.length === 0) {
          showNotification("אין אירועים עתידיים לחודש הקרוב");
          return;
        }

        upcomingEvents.forEach((event) => {
          const reminderKey = `${event.id}_${currentUser.name}`;

          if (!reminders[reminderKey]) {
            const eventDate = new Date(event.year, event.month, event.date);
            const [hours, minutes] = event.time.split(":").map(Number);
            eventDate.setHours(hours, minutes, 0, 0);

            const reminderTime = new Date(
              eventDate.getTime() - reminderMinutesBefore * 60 * 1000
            );

            if (reminderTime > now) {
              reminders[reminderKey] = {
                eventId: event.id,
                description: event.description,
                reminderTime: reminderTime.getTime(),
                eventTime: eventDate.getTime(),
                userId: currentUser.name,
                notified: false,
                time: event.time,
                date: event.date,
                month: event.month,
                year: event.year,
                minutesBefore: reminderMinutesBefore,
              };

              remindersSet++;
            }
          }
        });

        localStorage.setItem("reminders", JSON.stringify(reminders));
        showNotification(`✅ נקבעו ${remindersSet} תזכורות לאירועים עתידיים`);
      }

      // הצג כפתורים להוספה ליומן הטלפון
      function showCalendarButtons() {
        return `
                <div class="device-notice">
                    <p style="color: #38bdf8; text-align: center; margin-bottom: 15px; font-weight: 600;">
                        📱 לקבלת תזכורות אמינות גם כשהדפדפן סגור:
                    </p>
                    <p style="color: #94a3b8; font-size: 14px; text-align: center; margin-bottom: 15px;">
                        הוסף את האירועים ליומן הטלפון שלך
                    </p>
                    <div class="device-buttons">
                        <button class="ios-btn" onclick="showDeviceInstructions('ios')">
                            <span class="calendar-icon"></span>
                            לאייפון
                        </button>
                        <button class="android-btn" onclick="showDeviceInstructions('android')">
                            <span class="calendar-icon">🤖</span>
                            לאנדרואיד
                        </button>
                    </div>
                </div>
            `;
      }

      // הצג הוראות למכשיר ספציפי
      function showDeviceInstructions(deviceType) {
        let title = "";
        let steps = "";
        let buttonText = "";

        if (deviceType === "ios") {
          title = " הוספת אירועים ליומן באייפון";
          steps = `
                    <ol>
                        <li>לחץ על כל אירוע בלוח השנה</li>
                        <li>לחץ על כפתור "תזכורת לי"</li>
                        <li>בחר "הוסף ליומן הטלפון"</li>
                        <li>לחץ על "הורד קובץ יומן"</li>
                        <li>בחר "הוסף ליומן" מהתפריט</li>
                        <li>שמור את האירוע</li>
                    </ol>
                    <p style="color: #38bdf8; margin-top: 15px;">
                        האירוע יתווסף ליומן המובנה של האייפון שלך!
                    </p>
                `;
          buttonText = "הבנתי";
        } else {
          title = "🤖 הוספת אירועים ליומן באנדרואיד";
          steps = `
                    <ol>
                        <li>לחץ על כל אירוע בלוח השנה</li>
                        <li>לחץ על כפתור "תזכורת לי"</li>
                        <li>בחר "הוסף ליומן הטלפון"</li>
                        <li>לחץ על "פתח ביומן Google"</li>
                        <li>האירוע ייפתח ביומן Google</li>
                        <li>לחץ "שמור"</li>
                    </ol>
                    <p style="color: #38bdf8; margin-top: 15px;">
                        האירוע יתווסף ליומן Google שלך ויסינכרן עם כל המכשירים!
                    </p>
                `;
          buttonText = "הבנתי";
        }

        const instructionsHTML = `
                <div class="instructions-modal">
                    <div class="instructions-content">
                        <h3 class="instructions-title">${title}</h3>
                        <div class="instructions-steps">
                            ${steps}
                        </div>
                        <button class="instructions-close" onclick="this.closest('.instructions-modal').remove()">
                            ${buttonText}
                        </button>
                    </div>
                </div>
            `;

        document.body.insertAdjacentHTML("beforeend", instructionsHTML);
      }

      // פונקציה להוראות הוספה ליומן
      function showCalendarInstructions(description, day, month, year, time) {
        const isIOSDevice = isIOS();
        const isAndroidDevice = isAndroid();

        let instructionsHTML = "";

        if (isIOSDevice) {
          instructionsHTML = `
                    <div class="instructions-modal">
                        <div class="instructions-content">
                            <h3 class="instructions-title">📱 הוספה ליומן באייפון</h3>
                            <div class="instructions-steps">
                                <ol>
                                    <li>לחץ על הכפתור "הורד קובץ יומן"</li>
                                    <li>בחר "הוסף ליומן" מהתפריט שנפתח</li>
                                    <li>בדוק את פרטי האירוע ולחץ "שמור"</li>
                                    <li>האירוע יתווסף ליומן הטלפון שלך</li>
                                </ol>
                                <p style="color: #38bdf8; text-align: center; margin-top: 20px;">
                                    האירוע יתווסף ליום ${day}/${
            month + 1
          }/${year} בשעה ${time}
                                </p>
                            </div>
                            <a href="${createCalendarLink(
                              description,
                              day,
                              month,
                              year,
                              time
                            )}" download="lost-connection-event.ics" class="ios-btn" style="width: 100%; justify-content: center; text-decoration: none;">
                                <span class="calendar-icon">📥</span>
                                הורד קובץ יומן
                            </a>
                            <button class="instructions-close" onclick="this.closest('.instructions-modal').remove()">
                                סגור
                            </button>
                        </div>
                    </div>
                `;
        } else if (isAndroidDevice) {
          instructionsHTML = `
                    <div class="instructions-modal">
                        <div class="instructions-content">
                            <h3 class="instructions-title">📱 הוספה ליומן באנדרואיד</h3>
                            <div class="instructions-steps">
                                <ol>
                                    <li>לחץ על הכפתור "פתח ביומן Google"</li>
                                    <li>המערכת תפתח את יומן Google</li>
                                    <li>בדוק את פרטי האירוע ולחץ "שמור"</li>
                                    <li>האירוע יתווסף ליומן שלך באופן אוטומטי</li>
                                </ol>
                                <p style="color: #38bdf8; text-align: center; margin-top: 20px;">
                                    האירוע יתווסף ליום ${day}/${
            month + 1
          }/${year} בשעה ${time}
                                </p>
                            </div>
                            <a href="${createCalendarLink(
                              description,
                              day,
                              month,
                              year,
                              time
                            )}" target="_blank" class="android-btn" style="width: 100%; justify-content: center; text-decoration: none;">
                                <span class="calendar-icon">📅</span>
                                פתח ביומן Google
                            </a>
                            <button class="instructions-close" onclick="this.closest('.instructions-modal').remove()">
                                סגור
                            </button>
                        </div>
                    </div>
                `;
        } else {
          instructionsHTML = `
                    <div class="instructions-modal">
                        <div class="instructions-content">
                            <h3 class="instructions-title">💻 הוספה ליומן</h3>
                            <div class="instructions-steps">
                                <ol>
                                    <li>לחץ על הכפתור "הורד קובץ יומן"</li>
                                    <li>שמור את הקובץ במחשב שלך</li>
                                    <li>פתח את יומן הטלפון או המחשב שלך</li>
                                    <li>יבא את קובץ ה-.ics ליומן</li>
                                </ol>
                                <p style="color: #38bdf8; text-align: center; margin-top: 20px;">
                                    האירוע יתווסף ליום ${day}/${
            month + 1
          }/${year} בשעה ${time}
                                </p>
                            </div>
                            <a href="${createCalendarLink(
                              description,
                              day,
                              month,
                              year,
                              time
                            )}" download="lost-connection-event.ics" class="ios-btn" style="width: 100%; justify-content: center; text-decoration: none;">
                                <span class="calendar-icon">📥</span>
                                הורד קובץ יומן
                            </a>
                            <button class="instructions-close" onclick="this.closest('.instructions-modal').remove()">
                                סגור
                            </button>
                        </div>
                    </div>
                `;
        }

        // סגור את ההתראה הקודמת
        const existingAlert = document.querySelector(".emergency-notification");
        if (existingAlert) {
          existingAlert.remove();
        }

        document.body.insertAdjacentHTML("beforeend", instructionsHTML);
      }

      // פונקציית עזר לפורמט זמן
      function formatTime(date) {
        return date.toLocaleString("he-IL", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });
      }

      // צליל תזכורת עדין
      function createGentleReminderSound() {
        try {
          const audioContext = new (window.AudioContext ||
            window.webkitAudioContext)();

          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();

          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);

          oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime);
          oscillator.frequency.exponentialRampToValueAtTime(
            392.0,
            audioContext.currentTime + 0.5
          );

          oscillator.type = "sine";

          gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(
            0.01,
            audioContext.currentTime + 1
          );

          oscillator.start(audioContext.currentTime);
          oscillator.stop(audioContext.currentTime + 1);

          return audioContext;
        } catch (error) {
          console.error("לא ניתן ליצור צליל תזכורת:", error);
          return null;
        }
      }

      // הצג התראה
      function showNotification(message, isReminder = false) {
        const notification = document.createElement("div");
        notification.className = "notification";
        notification.innerHTML = message;

        if (isReminder) {
          notification.style.background = "#8b5cf6";
        }

        document.body.appendChild(notification);

        setTimeout(() => {
          notification.remove();
        }, 5000);
      }

      // פונקציה לסגירת דף
      function closePage() {
        document.getElementById("pagesContainer").innerHTML = "";
        document.getElementById("mainContainer").style.display = "block";
      }

      // טען הגדרות
      document.addEventListener("DOMContentLoaded", function () {
        // בדוק אם יש משתמש זכור
        checkRememberedUser();

        // אם אין משתמש זכור או פלטפורמה שמורה, הצג מסך בחירת פלטפורמה
        if (!rememberedUser || !localStorage.getItem("selectedPlatform")) {
          document.getElementById("platformSection").style.display = "flex";
          document.getElementById("loginSection").style.display = "none";
        }

        // טען זמן תזכורת שנשמר
        const savedMinutes = localStorage.getItem("reminderMinutesBefore");
        if (savedMinutes) {
          reminderMinutesBefore = parseInt(savedMinutes);
        }

        // בדוק תזכורות שהגיע זמנן
        setTimeout(checkReminders, 2000);

        // בדוק תזכורות כל 30 שניות
        setInterval(checkReminders, 30000);

        // קיצורי מקלדת
        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");

        if (usernameInput) {
          usernameInput.focus();
          usernameInput.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
              event.preventDefault();
              if (passwordInput) passwordInput.focus();
            }
          });
        }

        if (passwordInput) {
          passwordInput.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
              event.preventDefault();
              login();
            }
          });
        }

        // בדוק הרשאת התראות
        if ("Notification" in window) {
          notificationPermission = Notification.permission === "granted";
        }
      });
    </script>
  </body>
</html>
