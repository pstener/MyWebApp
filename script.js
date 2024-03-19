document.getElementById('showDateTime').addEventListener('click', function() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById('dateTime').textContent = `Current Date and Time: ${dateTimeString}`;
});