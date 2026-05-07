document.addEventListener("DOMContentLoaded", function() {
    const navHTML = `
    <nav class="glass-nav">
        <div class="nav-container">
            <div class="logo">
                <a href="index.html">
                    <img src="logo-ggt.png" alt="Лого" style="height: 45px; width: auto;">
                </a>
            </div>
            <div class="nav-links">
                <a href="index.html">Главная</a>
                <a href="students.html">Студентам</a>
                <a href="achievements.html">Достижения</a>
                <a href="javascript:void(0)" onclick="openFeedback()" class="nav-contact">💬 Связь</a>
            </div>
        </div>
    </nav>

    <!-- МОДАЛЬНОЕ ОКНО С ПОЛЯМИ -->
    <div id="feedback-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); z-index: 10000; backdrop-filter: blur(12px); align-items: center; justify-content: center;">
        <div class="glass-card" style="max-width: 400px; width: 90%; padding: 30px; border: 1px solid rgba(0, 191, 255, 0.3);">
            <h2 style="color: var(--gold); text-align: center; margin-bottom: 20px; font-size: 1.2rem;">✉️ Обратная связь</h2>
            <form id="feedback-form" style="display: flex; flex-direction: column; gap: 12px;">
                
                <input type="text" id="fb-name" placeholder="Ваше Имя" required 
                    style="width: 100%; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: white; padding: 10px; font-family: inherit; outline: none;">
                
                <input type="text" id="fb-group" placeholder="Группа" required 
                    style="width: 100%; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: white; padding: 10px; font-family: inherit; outline: none;">
                
                <input type="tel" id="fb-phone" placeholder="Телефон" required 
                    style="width: 100%; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: white; padding: 10px; font-family: inherit; outline: none;">
                
                <textarea id="fb-message" placeholder="Ваше сообщение..." required 
                    style="width: 100%; height: 100px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: white; padding: 10px; font-family: inherit; resize: none; outline: none;"></textarea>
                
                <button type="submit" class="btn-primary" style="width: 100%; background: #00bfff; color: #000; font-weight: bold; margin-top: 10px;">Отправить</button>
                <button type="button" onclick="closeFeedback()" style="background: none; border: none; color: rgba(255,255,255,0.5); cursor: pointer; font-size: 0.8rem;">Отмена</button>
            </form>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', uiHTML);

    // Логика отправки
    document.getElementById('feedback-form').onsubmit = async function(e) {
        e.preventDefault();
        
        const name = document.getElementById('fb-name').value;
        const group = document.getElementById('fb-group').value;
        const phone = document.getElementById('fb-phone').value;
        const msg = document.getElementById('fb-message').value;

        const fData = new URLSearchParams();
        // Склеиваем ФИО и Телефон, чтобы в таблице не терять инфу
        fData.append('entry.1458374118', `${name} (тел: ${phone})`); 
        fData.append('entry.1320096689', group);
        fData.append('entry.1906150515', msg);
        fData.append('entry.1688940307', 'СВЯЗЬ'); 

        try {
            await fetch('https://docs.google.com/forms/d/e/1FAIpQLSfiEZoHThkT4Za9B_LJ50TJTSYxuG0DklY9CSiMjq92vKANhA/formResponse', {
                method: 'POST', mode: 'no-cors', body: fData
            });
            alert('Спасибо! Мы свяжемся с вами.');
            closeFeedback();
            document.getElementById('feedback-form').reset();
        } catch (err) {
            alert('Ошибка при отправке');
        }
    };
});

function openFeedback() { document.getElementById('feedback-modal').style.display = 'flex'; }
function closeFeedback() { document.getElementById('feedback-modal').style.display = 'none'; }
