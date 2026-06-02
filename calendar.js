// ===== calendar.js =====
// לוח שנה, אירועים ותזכורות

// ── קבועי EmailJS ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "service_l4a06re";
const EMAILJS_TEMPLATE_ID = "template_aei02n3";

// ── מצב גלובלי ───────────────────────────────────────────────────────────────
let calendarEvents = JSON.parse(localStorage.getItem("calendarEvents")) || [
  {
    id: 1,
    date: new Date().getDate(), month: new Date().getMonth(), year: new Date().getFullYear(),
    time: "19:00", description: "חזרה כללית", type: "חזרה",
  },
  {
    id: 2,
    date: new Date().getDate() + 3, month: new Date().getMonth(), year: new Date().getFullYear(),
    time: "18:30", description: "חזרת סקסופונים", type: "חזרת כלים",
  },
  {
    id: 3,
    date: new Date().getDate() + 7, month: new Date().getMonth(), year: new Date().getFullYear(),
    time: "20:00", description: "הופעה במועדון", type: "הופעה",
  },
];

localStorage.removeItem("reminders");
let reminders = {};

let currentMonth            = new Date().getMonth();
let currentYear             = new Date().getFullYear();
let notificationPermission  = false;
let reminderMinutesBefore   = parseInt(localStorage.getItem("reminderMinutesBefore")) || 60;

// ── שליחת מייל לכולם ─────────────────────────────────────────────────────────
function sendEmailToAll(eventName, eventTime, eventDate) {
  const usersWithEmail = users.filter(u => u.email && u.name !== "אדמין");

  if (usersWithEmail.length === 0) {
    console.log("אין משתמשים עם מייל רשום");
    return;
  }

  usersWithEmail.forEach(user => {
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      to_name:    user.name,
      to_email:   user.email,
      event_name: eventName,
      event_time: eventTime,
      event_date: eventDate,
    })
    .then(() => {
      console.log(`✅ מייל נשלח בהצלחה ל-${user.name} (${user.email})`);
    })
    .catch(err => {
      console.error(`❌ שגיאה בשליחה ל-${user.name}:`, err);
    });
  });
}

// ── פתיחת עמוד לוח שנה ───────────────────────────────────────────────────────
function openCalendar() {
  const isAdmin = currentUser.name === "אדמין";

  const page = `
    <div class="page-content">
      <button class="back-btn" onclick="closePage()">← חזרה לרשימה</button>

      <div class="user-info" style="margin-bottom:20px;">
        ${isAdmin ? '<span class="admin-badge">👑 מנהל</span>' : ""}
        ${getUserBadge(currentUser.name)}
        👤 ${currentUser.name} - ${currentUser.role}
      </div>

      <h2 style="color:#38bdf8;text-align:center;margin-bottom:30px;">📅 לוח שנה וזמנים</h2>

      <div class="content-box">
        <div style="font-size:60px;margin-bottom:20px;">📅</div>
        <h3 style="color:#38bdf8;margin-bottom:15px;">לוח אירועים וזמנים</h3>
        <p style="color:#94a3b8;margin-bottom:25px;">
          כאן תוכלו לראות את כל האירועים, החזרות וההופעות של הלהקה<br>
          <span style="color:#38bdf8;font-weight:600;">שעה לפני כל אירוע — כולם יקבלו מייל אוטומטי!</span>
        </p>

        ${buildCalendarButtons()}

        <div class="reminder-settings">
          <h4 style="color:#38bdf8;margin-bottom:10px;">⚙️ הגדרות תזכורת באתר:</h4>
          <p style="color:#94a3b8;font-size:14px;margin-bottom:10px;">בחר מתי לקבל תזכורת לפני כל אירוע:</p>
          <div class="reminder-options">
            ${[15, 30, 60, 120, 1440].map(m => `
              <button class="reminder-option-btn ${reminderMinutesBefore === m ? "active" : ""}"
                      onclick="setReminderTime(${m})">
                ${m === 1440 ? "יום לפני" : m < 60 ? m + " דקות לפני" : (m / 60) + " שעה/ות לפני"}
              </button>`).join("")}
          </div>
        </div>

        <div style="margin:30px 0;">
          ${isAdmin ? `
            <button class="action-btn edit-btn" onclick="openAddEventModal()">✏️ הוסף אירוע חדש</button>
            <button class="action-btn delete-events-btn" onclick="deleteAllEvents()">🗑️ מחק כל האירועים</button>
          ` : ""}
          <button class="action-btn reminder-all-btn" onclick="setRemindersForAllEvents()">
            ⏰ תזכורת לכל האירועים (באתר)
          </button>
        </div>

        ${!notificationPermission ? `
          <div class="permission-notice">
            <p>לתזכורות אמיתיות שפועלות גם כשהדפדפן סגור, יש לאשר קבלת התראות:</p>
            <button class="enable-notifications-btn" onclick="requestNotificationPermission()">✅ אפשר התראות</button>
          </div>` : ""}
      </div>

      <div id="calendarContainer" class="calendar-container"></div>
    </div>
  `;

  document.getElementById("mainContainer").style.display  = "none";
  document.getElementById("pagesContainer").innerHTML = page;
  renderCalendar();
}

// ── כפתורים להוספה ליומן הטלפון ─────────────────────────────────────────────
function buildCalendarButtons() {
  return `
    <div class="device-notice">
      <p style="color:#38bdf8;text-align:center;margin-bottom:15px;font-weight:600;">
        📱 לקבלת תזכורות אמינות גם כשהדפדפן סגור:
      </p>
      <p style="color:#94a3b8;font-size:14px;text-align:center;margin-bottom:15px;">
        הוסף את האירועים ליומן הטלפון שלך
      </p>
      <div class="device-buttons">
        <button class="ios-btn" onclick="showDeviceInstructions('ios')">
          <span class="calendar-icon"></span> לאייפון
        </button>
        <button class="android-btn" onclick="showDeviceInstructions('android')">
          <span class="calendar-icon">🤖</span> לאנדרואיד
        </button>
      </div>
    </div>`;
}

// ── הוראות לפי מכשיר ─────────────────────────────────────────────────────────
function showDeviceInstructions(deviceType) {
  const isIos = deviceType === "ios";
  const title = isIos ? " הוספת אירועים ליומן באייפון" : "🤖 הוספת אירועים ליומן באנדרואיד";
  const steps = isIos
    ? `<ol>
        <li>לחץ על כל אירוע בלוח השנה</li>
        <li>לחץ על כפתור "תזכורת לי"</li>
        <li>בחר "הוסף ליומן הטלפון"</li>
        <li>לחץ על "הורד קובץ יומן"</li>
        <li>בחר "הוסף ליומן" מהתפריט</li>
        <li>שמור את האירוע</li>
      </ol>
      <p style="color:#38bdf8;margin-top:15px;">האירוע יתווסף ליומן המובנה של האייפון שלך!</p>`
    : `<ol>
        <li>לחץ על כל אירוע בלוח השנה</li>
        <li>לחץ על כפתור "תזכורת לי"</li>
        <li>לחץ על "פתח ביומן Google"</li>
        <li>האירוע ייפתח ביומן Google</li>
        <li>לחץ "שמור"</li>
      </ol>
      <p style="color:#38bdf8;margin-top:15px;">האירוע יתווסף ליומן Google שלך ויסינכרן עם כל המכשירים!</p>`;

  document.body.insertAdjacentHTML("beforeend", `
    <div class="instructions-modal">
      <div class="instructions-content">
        <h3 class="instructions-title">${title}</h3>
        <div class="instructions-steps">${steps}</div>
        <button class="instructions-close" onclick="this.closest('.instructions-modal').remove()">הבנתי</button>
      </div>
    </div>`);
}

// ── רינדור לוח שנה ──────────────────────────────────────────────────────────
function renderCalendar() {
  const container = document.getElementById("calendarContainer");
  if (!container) return;

  const monthNames = ["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"];
  const dayNames   = ["א","ב","ג","ד","ה","ו","ש"];

  const firstDay      = new Date(currentYear, currentMonth, 1);
  const daysInMonth   = new Date(currentYear, currentMonth + 1, 0).getDate();
  const startDay      = firstDay.getDay();
  const adjustedStart = startDay === 0 ? 6 : startDay - 1;
  const today         = new Date();

  let html = `
    <div class="calendar-header">
      <div class="calendar-title">${monthNames[currentMonth]} ${currentYear}</div>
      <div class="month-navigation">
        <button class="month-btn" onclick="prevMonth()">← חודש קודם</button>
        <button class="month-btn" onclick="nextMonth()">חודש הבא →</button>
      </div>
    </div>
    <div class="days-grid">
      ${dayNames.map(d => `<div class="day-header">${d}</div>`).join("")}
      ${Array(adjustedStart).fill('<div class="day-cell empty-day"></div>').join("")}
  `;

  for (let day = 1; day <= daysInMonth; day++) {
    const dayEvents = calendarEvents.filter(e => e.date === day && e.month === currentMonth && e.year === currentYear);
    const isToday   = day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
    let cls = "day-cell";
    if (isToday)           cls += " today";
    if (dayEvents.length)  cls += " has-events";

    html += `
      <div class="${cls}" onclick="openDayEvents(${day})">
        <div class="day-number">${day}</div>
        ${dayEvents.slice(0, 2).map(ev => `
          <div class="event-item">
            <span class="event-time">${ev.time}</span>
            <span class="event-desc"> - ${ev.description}</span>
            <span class="event-type-badge" style="background:${getEventTypeColor(ev.type)}">${ev.type}</span>
          </div>`).join("")}
        ${dayEvents.length > 2 ? `<div class="event-item" style="background:rgba(99,102,241,0.2);">+${dayEvents.length - 2} עוד</div>` : ""}
      </div>`;
  }

  const remaining = 42 - (adjustedStart + daysInMonth);
  html += Array(remaining).fill('<div class="day-cell empty-day"></div>').join("") + "</div>";

  if (currentUser.name === "אדמין") {
    html += `
      <div class="edit-controls">
        <button class="edit-btn" onclick="openAddEventModal()">✏️ הוסף אירוע חדש</button>
        <button class="delete-events-btn" onclick="deleteAllEvents()">🗑️ מחק כל האירועים</button>
      </div>`;
  }

  container.innerHTML = html;
}

function prevMonth() {
  currentMonth--;
  if (currentMonth < 0) { currentMonth = 11; currentYear--; }
  renderCalendar();
}
function nextMonth() {
  currentMonth++;
  if (currentMonth > 11) { currentMonth = 0; currentYear++; }
  renderCalendar();
}

// ── פתיחת אירועי יום ────────────────────────────────────────────────────────
function openDayEvents(day) {
  const monthNames = ["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"];
  const dayEvents  = calendarEvents.filter(e => e.date === day && e.month === currentMonth && e.year === currentYear);

  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal-overlay" onclick="cancelEvent()">
      <div class="modal-content" onclick="event.stopPropagation()">
        <h3 class="modal-title">אירועים ליום ${day} ב${monthNames[currentMonth]}</h3>
        ${dayEvents.length === 0
          ? '<p style="color:#94a3b8;text-align:center;padding:20px;">אין אירועים ביום זה</p>'
          : dayEvents.map(ev => `
              <div style="background:${getEventTypeColor(ev.type)};border-radius:10px;padding:15px;margin-bottom:10px;">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <div>
                    <div style="color:#fff;font-weight:600;font-size:18px;">${ev.description}</div>
                    <div style="color:#e2e8f0;font-size:14px;margin-top:5px;">🕐 ${ev.time} | 📍 ${ev.type}</div>
                  </div>
                  ${currentUser.name === "אדמין" ? `<button class="delete-btn" onclick="deleteEvent(${ev.id})">מחק</button>` : ""}
                </div>
                <button class="reminder-btn" style="width:100%;margin-top:10px;"
                  onclick="setReminder(${ev.id},'${ev.description}',${day},${currentMonth},${currentYear},'${ev.time}')">
                  ⏰ תזכורת לי
                </button>
              </div>`).join("")}
        <div class="modal-buttons">
          ${currentUser.name === "אדמין" ? `<button class="save-btn" onclick="openAddEventModal(${day})">הוסף אירוע</button>` : ""}
          <button class="cancel-btn" onclick="cancelEvent()">סגור</button>
        </div>
      </div>
    </div>`);
}

// ── הוספת / עריכת אירוע (אדמין בלבד) ────────────────────────────────────────
function openAddEventModal(day = null) {
  if (currentUser.name !== "אדמין") { showNotification("רק מנהל המערכת יכול להוסיף אירועים"); return; }

  const defaultDate = day
    ? `${currentYear}-${String(currentMonth + 1).padStart(2,"0")}-${String(day).padStart(2,"0")}`
    : `${currentYear}-${String(currentMonth + 1).padStart(2,"0")}-01`;

  document.body.insertAdjacentHTML("beforeend", `
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
            <option>חזרה</option>
            <option>חזרת כלים</option>
            <option>הופעה</option>
            <option>פגישה</option>
            <option>אירוע מיוחד</option>
            <option>אחר</option>
          </select>
        </div>
        <div class="modal-buttons">
          <button class="save-btn" onclick="saveEvent()">שמור אירוע</button>
          <button class="cancel-btn" onclick="cancelEvent()">ביטול</button>
        </div>
      </div>
    </div>`);
}

function saveEvent() {
  const description = document.getElementById("eventDescription").value;
  const dateStr     = document.getElementById("eventDate").value;
  const time        = document.getElementById("eventTime").value;
  const type        = document.getElementById("eventType").value;

  if (!description || !dateStr || !time) { showNotification("נא למלא את כל השדות"); return; }

  const date = new Date(dateStr);
  calendarEvents.push({
    id: Date.now(),
    date: date.getDate(), month: date.getMonth(), year: date.getFullYear(),
    time, description, type,
  });
  localStorage.setItem("calendarEvents", JSON.stringify(calendarEvents));
  cancelEvent();
  renderCalendar();
  showNotification("האירוע נוסף בהצלחה!");
}

function deleteEvent(eventId) {
  if (currentUser.name !== "אדמין") { showNotification("רק מנהל המערכת יכול למחוק אירועים"); return; }
  calendarEvents = calendarEvents.filter(e => e.id !== eventId);
  localStorage.setItem("calendarEvents", JSON.stringify(calendarEvents));
  document.querySelectorAll(".modal-overlay").forEach(m => m.remove());
  renderCalendar();
  showNotification("האירוע נמחק בהצלחה");
}

function deleteAllEvents() {
  if (currentUser.name !== "אדמין") { showNotification("רק מנהל המערכת יכול למחוק אירועים"); return; }
  if (confirm("האם אתה בטוח שברצונך למחוק את כל האירועים? פעולה זו אינה ניתנת לביטול!")) {
    calendarEvents = [];
    localStorage.setItem("calendarEvents", JSON.stringify(calendarEvents));
    renderCalendar();
    showNotification("כל האירועים נמחקו בהצלחה");
  }
}

function cancelEvent() {
  document.querySelectorAll(".modal-overlay").forEach(m => m.remove());
}

// ── תזכורות ──────────────────────────────────────────────────────────────────
function setReminderTime(minutes) {
  reminderMinutesBefore = minutes;
  localStorage.setItem("reminderMinutesBefore", minutes);
  document.querySelectorAll(".reminder-option-btn").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");
  showNotification(`✅ תזכורת תיקבע ${minutes} דקות לפני כל אירוע`);
}

function requestNotificationPermission() {
  if (!("Notification" in window)) { showNotification("הדפדפן שלך לא תומך בהתראות"); return; }
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      notificationPermission = true;
      showNotification("✅ התראות מאושרות! תזכורות יפעלו גם כשהדפדפן סגור.");
    }
  });
}

function setReminder(eventId, description, day, month, year, time) {
  const now       = new Date();
  const eventDate = new Date(year, month, day, ...time.split(":").map(Number), 0, 0);

  if (eventDate <= now) eventDate.setDate(eventDate.getDate() + 1);

  let reminderTime = new Date(eventDate.getTime() - reminderMinutesBefore * 60 * 1000);
  if (reminderTime <= now) reminderTime = new Date(now.getTime() + 5 * 60 * 1000);

  const key = `${eventId}_${currentUser.name}`;
  reminders[key] = {
    eventId, description, time, date: day, month, year,
    reminderTime: reminderTime.getTime(),
    eventTime:    eventDate.getTime(),
    userId:       currentUser.name,
    notified:     false,
    minutesBefore: reminderMinutesBefore,
  };
  localStorage.setItem("reminders", JSON.stringify(reminders));

  showCalendarInstructions(description, day, month, year, time);
  cancelEvent();
}

function setRemindersForAllEvents() {
  const now   = new Date();
  const limit = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
  let count   = 0;

  calendarEvents
    .filter(ev => {
      const d = new Date(ev.year, ev.month, ev.date, ...ev.time.split(":").map(Number));
      return d > now && d < limit;
    })
    .forEach(ev => {
      const key = `${ev.id}_${currentUser.name}`;
      if (reminders[key]) return;

      const eventDate    = new Date(ev.year, ev.month, ev.date, ...ev.time.split(":").map(Number));
      const reminderTime = new Date(eventDate.getTime() - reminderMinutesBefore * 60 * 1000);
      if (reminderTime <= now) return;

      reminders[key] = {
        eventId: ev.id, description: ev.description,
        time: ev.time, date: ev.date, month: ev.month, year: ev.year,
        reminderTime: reminderTime.getTime(),
        eventTime:    eventDate.getTime(),
        userId:       currentUser.name,
        notified:     false,
        minutesBefore: reminderMinutesBefore,
      };
      count++;
    });

  localStorage.setItem("reminders", JSON.stringify(reminders));
  showNotification(count ? `✅ נקבעו ${count} תזכורות לאירועים עתידיים` : "אין אירועים עתידיים לחודש הקרוב");
}

// ── בדיקת תזכורות + שליחת מייל ─────────────────────────────────────────────
function showEmergencyReminder(reminder) {
  reminder.notified = true;
  localStorage.setItem("reminders", JSON.stringify(reminders));

  // שלח מייל לכולם שעה לפני
  const dateStr = `${reminder.date}/${reminder.month + 1}/${reminder.year}`;
  sendEmailToAll(reminder.description, reminder.time, dateStr);

  const el = document.createElement("div");
  el.className = "emergency-notification";
  el.innerHTML = `
    <div class="emergency-content">
      <div style="width:100px;height:100px;margin:0 auto 20px;border-radius:15px;overflow:hidden;border:3px solid #38bdf8;">
        <img src="https://i.ibb.co/KxZZxtgN/Lost-Connection-Band-Israel.jpg"
             alt="Lost Connection Band" style="width:100%;height:100%;object-fit:cover;">
      </div>
      <h2 class="emergency-title" style="color:#fff;">תזכורת לאירוע</h2>
      <p class="emergency-message" style="color:#fff;font-size:20px;">
        <strong style="color:#38bdf8;font-size:24px;">${reminder.description}</strong><br>
        <span style="font-size:22px;margin-top:10px;display:block;">מתחיל בשעה ${reminder.time}</span>
      </p>
      <p style="color:#10b981;font-size:14px;margin-bottom:15px;">📧 מייל תזכורת נשלח לכל חברי הלהקה</p>
      <button class="emergency-close" onclick="this.closest('.emergency-notification').remove()" style="margin-bottom:10px;">סגור</button>
      <button class="ios-btn" onclick="showCalendarInstructions('${reminder.description}',${reminder.date},${reminder.month},${reminder.year},'${reminder.time}')" style="width:100%;">
        <span class="calendar-icon">📅</span> הוסף ליומן הטלפון
      </button>
    </div>`;
  document.body.appendChild(el);

  createGentleReminderSound();
  navigator.vibrate?.([300, 100, 300]);

  if ("Notification" in window && Notification.permission === "granted") {
    const n = new Notification("🎵 Lost Connection Band - תזכורת", {
      body: `${reminder.description} מתחיל בשעה ${reminder.time}`,
      icon: "https://i.ibb.co/KxZZxtgN/Lost-Connection-Band-Israel.jpg",
      tag:  `reminder-${reminder.eventId}`,
    });
    n.onclick = () => { window.focus(); n.close(); };
  }

  setTimeout(() => el.parentNode?.removeChild(el), 60000);
}

function checkReminders() {
  const now = new Date().getTime();
  for (const key in reminders) {
    const r = reminders[key];
    if (!r.notified && r.reminderTime <= now) showEmergencyReminder(r);
  }
}
