const calendar = document.getElementById('calendar');
    const today = new Date();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const year = today.getFullYear();
    const month = today.getMonth();

    const selectedDates = new Set();

    for (let i = 1; i <= daysInMonth; i++) {
      const day = document.createElement('div');
      day.className = 'day';
      day.textContent = i;

      const dateKey = `${year}-${month + 1}-${i}`;
      day.dataset.date = dateKey;

      day.addEventListener('click', () => {
        if (selectedDates.has(dateKey)) {
          selectedDates.delete(dateKey);
          day.classList.remove('available');
        } else {
          selectedDates.add(dateKey);
          day.classList.add('available');
        }
      });

      calendar.appendChild(day);
    }

    function logAvailability() {
      console.log("Selected dates:", Array.from(selectedDates));
      alert("Selected dates:\n" + Array.from(selectedDates).join("\n"));
    }
function showSection(idToShow) {
  const sections = ['view-section', 'Access-section', 'calendar-section', 'prescription-section'];
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = (id === idToShow) ? 'block' : 'none';
  });
}