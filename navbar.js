document.addEventListener("DOMContentLoaded", function() {
    const navHTML = `
    <nav class="glass-nav">
        <div class="logo">
            <a href="index.html" style="display: flex; align-items: center; text-decoration: none;">
                <img src="logo-ggt.png" alt="Логотип ГГТ" class="nav-logo-img" style="height: 40px;">
            </a>
        </div>
        <div class="nav-links">
            <a href="index.html">Главная</a>
            <a href="achievements.html">Достижения</a>
            <a href="javascript:void(0)" onclick="openFeedback()" style="color: #00bfff;">💬 Связь</a>
            <a href="index.html" onclick="localStorage.clear()" style="color: var(--gold);">Выйти</a>
        </div>
    </nav>
    `;
    
    // Вставляем меню в самое начало body
    document.body.insertAdjacentHTML('afterbegin', navHTML);
});

// Функции для обратной связи (чтобы тоже были везде под рукой)
function openFeedback() {
    alert("Форма обратной связи в разработке");
    // Если решишь оставить модальное окно, его код тоже можно вставить сюда через JS
}
