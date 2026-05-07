document.addEventListener("DOMContentLoaded", function() {
    // 1. Создаем HTML для навигации и скрытого окна связи
    const uiHTML = `
    <nav class="glass-nav">
        <div class="logo">
            <a href="index.html"><img src="logo-ggt.png" alt="Лого" style="height: 40px;"></a>
        </div>
        <div class="nav-links">
            <a href="index.html">Главная</a>
            <a href="students.html">Для студентов</a>
            <a href="achievements.html">Достижения</a>
            <a href="javascript:void(0)" onclick="openFeedback()" style="color: #00bfff;">💬 Связь</a>
        </div>
    </nav>

    <!-- МОДАЛЬНОЕ ОКНО -->
    <div id="feedback-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10000; backdrop-filter: blur(10px); align-items: center; justify-content: center;">
        <div class="glass-card" style="max-width: 400px; width: 90%; padding: 30px; border: 1px solid rgba(0, 191, 255, 0.3); position: relative;">
            <h2 style="color: var(--gold); text-align: center; margin-bottom: 20px; font-size: 1.2rem;">✉️ Сообщение</h2>
            <form id="feedback-form">
                <textarea id="fb-message" placeholder="Ваш вопрос..." required 
                    style="width: 100%; height: 120px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; color: white; padding: 12px; margin-bottom: 15px; font-family: inherit; resize: none; outline: none;"></textarea>
                <button type="submit" class="btn-primary" style="width: 100%; background: #00bfff; color: #000;">Отправить</button>
                <button type="button" onclick="closeFeedback()" style="width: 100%; margin-top: 10px; background: none; border: none; color: rgba(255,255,255,0.5); cursor: pointer;">Отмена</button>
            </form>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', uiHTML);

    // 2. Логика отправки
    document.getElementById('feedback-form').onsubmit = async function(e) {
        e.preventDefault();
        const msg = document.getElementById('fb-message').value;
        const user = localStorage.getItem('user_name') || 'Аноним';
        const group = localStorage.getItem('user_group') || 'Вне группы';

        const fData = new URLSearchParams();
        fData.append('entry.1458374118', `${user} (СВЯЗЬ)`); // ФИО
        fData.append('entry.1320096689', group);            // Группа
        fData.append('entry.1906150515', msg);              // Сообщение
        fData.append('entry.1688940307', 'ОС');             // Метка

        try {
            await fetch('https://google.com', {
                method: 'POST', mode: 'no-cors', body: fData
            });
            alert('Сообщение отправлено!');
            closeFeedback();
            document.getElementById('fb-message').value = '';
        } catch (err) {
            alert('Ошибка отправки');
        }
    };
});

// 3. Функции открытия/закрытия
function openFeedback() { document.getElementById('feedback-modal').style.display = 'flex'; }
function closeFeedback() { document.getElementById('feedback-modal').style.display = 'none'; }
