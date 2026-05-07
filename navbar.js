document.addEventListener("DOMContentLoaded", function() {
    const navHTML = `
    <nav class="glass-nav">
        <div class="logo">
            <a href="index.html">
                <img src="logo-ggt.png" alt="Логотип ГГТ" style="height: 40px;">
            </a>
        </div>
        <div class="nav-links">
            <a href="index.html">Главная</a>
            <a href="students.html">Для студентов</a>
            <a href="achievements.html">Достижения</a>
            <a href="javascript:void(0)" onclick="openFeedback()" style="color: #00bfff;">💬 Связь</a>
        </div>
    </nav>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', navHTML);
});

// Функции для обратной связи
function openFeedback() {
    // Если на странице есть блок с id="feedback-modal", открываем его
    const modal = document.getElementById('feedback-modal');
    if (modal) {
        modal.style.display = 'flex';
    } else {
        alert("Форма связи временно недоступна на этой странице");
    }
}

function closeFeedback() {
    const modal = document.getElementById('feedback-modal');
    if (modal) modal.style.display = 'none';
}
