document.addEventListener("DOMContentLoaded", function() {
    // Добавляем стили анимации и навигации
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .glass-nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 15px 0;
            background: rgba(13, 27, 42, 0.8); /* Твой темно-синий */
            backdrop-filter: blur(10px);
            z-index: 1000;
            border-bottom: 1px solid rgba(255, 204, 0, 0.2);
            animation: fadeInDown 0.8s ease-out; /* ЗАПУСК АНИМАЦИИ */
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
        }

        .nav-links a {
            color: #fff;
            text-decoration: none;
            margin-left: 25px;
            font-weight: 500;
            transition: 0.3s;
            font-size: 0.95rem;
        }

        .nav-links a:hover {
            color: #ffcc00; /* Твой желтый */
        }
    `;
    document.head.appendChild(style);

    // Сама структура (уже без формы связи)
    const uiHTML = `
    <nav class="glass-nav">
        <div class="nav-container">
            <div class="logo">
                <a href="index.html">
                    <img src="logo-ggt.png" alt="Лого" style="height: 30px; width: auto;">
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
