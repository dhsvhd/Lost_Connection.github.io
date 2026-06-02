// ===== utils.js =====
// פונקציות עזר קטנות שמשמשות בכל הקובצים

// זיהוי מכשיר
function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

function isAndroid() {
  return /Android/.test(navigator.userAgent);
}

// הצג התראה קצרה על המסך
function showNotification(message, isReminder = false) {
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.innerHTML = message;
  if (isReminder) notification.style.background = "#8b5cf6";
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 5000);
}

// פורמט תאריך ושעה בעברית
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
    const audioContext = new (
      window.AudioContext || window.webkitAudioContext
    )();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(
      392.0,
      audioContext.currentTime + 0.5,
    );
    oscillator.type = "sine";

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioContext.currentTime + 1,
    );

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 1);

    return audioContext;
  } catch (error) {
    console.error("לא ניתן ליצור צליל תזכורת:", error);
    return null;
  }
}

// החזר Badge לפי שם משתמש
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

// צבע לפי סוג אירוע
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

// צור קישור / קובץ ics להוספה ליומן
function createCalendarLink(description, day, month, year, time) {
  const formattedDate = `${year}${String(month + 1).padStart(2, "0")}${String(day).padStart(2, "0")}`;
  const [hours, minutes] = time.split(":");
  const formattedTime = `${hours}${minutes}00`;

  if (isAndroid()) {
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(description)}&dates=${formattedDate}T${formattedTime}/${formattedDate}T${parseInt(hours) + 1}${minutes}00&details=${encodeURIComponent("חזרת Lost Connection Band")}&location=חזרת%20Lost%20Connection%20Band`;
  }

  // iOS + PC → קובץ .ics
  return `data:text/calendar;charset=utf-8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ASUMMARY:${encodeURIComponent(description)}%0ADTSTART:${formattedDate}T${formattedTime}%0ADTEND:${formattedDate}T${parseInt(hours) + 1}${minutes}00%0ALOCATION:חזרת%20Lost%20Connection%20Band%0ADESCRIPTION:${encodeURIComponent(description)}%20-%20Lost%20Connection%20Band%0AEND:VEVENT%0AEND:VCALENDAR`;
}

// הצג הוראות הוספה ליומן (iOS / Android / PC)
function showCalendarInstructions(description, day, month, year, time) {
  const isIOSDevice = isIOS();
  const isAndroidDevice = isAndroid();

  let title, steps, btnHTML;
  const calLink = createCalendarLink(description, day, month, year, time);
  const dateStr = `${day}/${month + 1}/${year}`;

  if (isIOSDevice) {
    title = "📱 הוספה ליומן באייפון";
    steps = `<ol>
      <li>לחץ על הכפתור "הורד קובץ יומן"</li>
      <li>בחר "הוסף ליומן" מהתפריט שנפתח</li>
      <li>בדוק את פרטי האירוע ולחץ "שמור"</li>
      <li>האירוע יתווסף ליומן הטלפון שלך</li>
    </ol>
    <p style="color:#38bdf8;text-align:center;margin-top:20px;">האירוע יתווסף ל-${dateStr} בשעה ${time}</p>`;
    btnHTML = `<a href="${calLink}" download="lost-connection-event.ics" class="ios-btn" style="width:100%;justify-content:center;text-decoration:none;">
      <span class="calendar-icon">📥</span> הורד קובץ יומן</a>`;
  } else if (isAndroidDevice) {
    title = "📱 הוספה ליומן באנדרואיד";
    steps = `<ol>
      <li>לחץ על הכפתור "פתח ביומן Google"</li>
      <li>האירוע ייפתח ביומן Google</li>
      <li>לחץ "שמור"</li>
    </ol>
    <p style="color:#38bdf8;text-align:center;margin-top:20px;">האירוע יתווסף ל-${dateStr} בשעה ${time}</p>`;
    btnHTML = `<a href="${calLink}" target="_blank" class="android-btn" style="width:100%;justify-content:center;text-decoration:none;">
      <span class="calendar-icon">📅</span> פתח ביומן Google</a>`;
  } else {
    title = "💻 הוספה ליומן";
    steps = `<ol>
      <li>לחץ על הכפתור "הורד קובץ יומן"</li>
      <li>שמור את הקובץ במחשב שלך</li>
      <li>יבא את קובץ ה-.ics ליומן שלך</li>
    </ol>
    <p style="color:#38bdf8;text-align:center;margin-top:20px;">האירוע יתווסף ל-${dateStr} בשעה ${time}</p>`;
    btnHTML = `<a href="${calLink}" download="lost-connection-event.ics" class="ios-btn" style="width:100%;justify-content:center;text-decoration:none;">
      <span class="calendar-icon">📥</span> הורד קובץ יומן</a>`;
  }

  // סגור התראה קיימת
  document.querySelector(".emergency-notification")?.remove();

  document.body.insertAdjacentHTML(
    "beforeend",
    `
    <div class="instructions-modal">
      <div class="instructions-content">
        <h3 class="instructions-title">${title}</h3>
        <div class="instructions-steps">${steps}</div>
        ${btnHTML}
        <button class="instructions-close" onclick="this.closest('.instructions-modal').remove()">סגור</button>
      </div>
    </div>
  `,
  );
}
