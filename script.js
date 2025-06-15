document.querySelectorAll('.toggle-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        const details = btn.parentElement.querySelector('.job-details, .project-details');
        if (details) {
            details.classList.toggle('collapsed');
            if (details.classList.contains('collapsed')) {
                btn.textContent = 'Xem tất cả';
            } else {
                btn.textContent = 'Thu gọn';
            }
        }
    });
});
