document.addEventListener("DOMContentLoaded", function() {
    const uiHTML = `
    <nav class="glass-nav">
        <div class="nav-container">
            <div class="logo">
                <a href="index.html">
                    <img src="logo-ggt.png" alt="Лого" style="height: 40px; width: auto;">
                </a>
            </div>
            <div class="nav-links">
                <a href="index.html">Главная</a>
                <a href="students.html">Для студентов</a>
                <a href="achievements.html">Достижения</a>
            </div>
        </div>
    </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', uiHTML);
});
