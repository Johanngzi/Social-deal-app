function generateCalendar(month, year) {
  const monthNames = [ "januari", "februari", "maart", "april", "mei", "juni",
    "juli", "augustus", "september", "oktober", "november", "december" ];
  const dayNames = ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"];
  const date = new Date(year, month, 1);
  const firstDayIndex = date.getDay() === 0 ? 6 : date.getDay() - 1; // Adjust for Monday as first day
  const lastDay = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const currentDayOfMonth = today.getDate();

  let daysHTML = "";
  for (let i = 0; i < firstDayIndex; i++) {
    daysHTML += `<div></div>`;
  }
  for (let d = 1; d <= lastDay; d++) {
    let dayClass = "";
    if (year === currentYear) {
      if (month === currentMonth && d >= currentDayOfMonth) {
        dayClass = "remaining-day";
      } else if (month > currentMonth) {
        dayClass = "remaining-day";
      }
    } else if (year > currentYear) {
      dayClass = "remaining-day";
    }
    daysHTML += `<div class="${dayClass}">${d}</div>`;
  }

  return `
    <div class="col-md-4">
      <div class="calendar">
        <h4>${monthNames[month]} ${year}</h4>
        <div class="day-names">
          ${dayNames.map(day => `<div>${day}</div>`).join('')}
        </div>
        <div class="days">
          ${daysHTML}
        </div>
      </div>
    </div>
  `;
}

function renderThreeMonthCalendar(startMonth, year) {
  const calendarRow = document.getElementById("calendarRow");
  let html = "";
  for (let i = 0; i < 3; i++) {
    let currentMonth = (startMonth + i) % 12;
    let currentYear = year + Math.floor((startMonth + i) / 12);
    html += generateCalendar(currentMonth, currentYear);
  }
  calendarRow.innerHTML = html;
}

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth(); // Get current month (0-11)
renderThreeMonthCalendar(currentMonth, currentYear);

