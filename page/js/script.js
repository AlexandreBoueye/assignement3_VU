const CalendarBody = document.getElementById('calendar-body');
const date = new Date();
const month = date.getMonth();
const year = date.getFullYear();

const firstDay = new Date(year, month, 1);
const lastDay = new Date(year, month + 1, 0);

const firstDayOfWeek = firstDay.getDay();
const lastDayOfWeek = lastDay.getDate();

// Create the rows for the calendar
for (let i = 0; i < lastDayOfWeek; i++) {
  const row = document.createElement('tr');
  for (let j = 0; j < 7; j++) {
    const cell = document.createElement('td');
    cell.textContent = i + j - firstDayOfWeek + 1;
    row.appendChild(cell);
  }
  CalendarBody.appendChild(row);
}

const calendarBody = document.getElementById('calendar-body');

// An object to store the events
const events = {};

// Add event listener to each cell to add events
calendarBody.addEventListener('click', event => {
  const target = event.target;
  if (target.tagName === 'TD') {
    const date = new Date(year, month, target.textContent);
    const eventId = date.toISOString();

    // If an event already exists on this date, delete it
    if (events[eventId]) {
      delete events[eventId];
      target.classList.remove('event');
    } else {
      // Add new event
      const eventName = prompt('Enter event name');
      if (eventName) {
        events[eventId] = { name: eventName, date };
        target.classList.add('event');
      }
    }
  }
});
