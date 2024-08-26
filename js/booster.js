document.addEventListener('DOMContentLoaded', () => {
    // Обработчик для кнопки закрытия вкладки
    document.getElementById('close-button').addEventListener('click', function() {
        if (window.opener) {
            window.opener.saveGameState(); // Сохраняем состояние игры
            window.close(); // Закрываем вкладку Booster
        } else {
            window.location.href = '../index.html'; // Перенаправление на главную страницу
        }
    });

    // Обработчик клика по кнопке "Максимальное количество шагов"
    document.getElementById('max-steps').addEventListener('click', function() {
        if (window.opener && typeof window.opener.addMaxSteps === 'function') {
            window.opener.addMaxSteps(); // Увеличиваем количество шагов
            window.opener.saveGameState(); // Сохранение состояния игры после увеличения шагов
        }
    });

    // Сохраняем состояние перед закрытием окна/вкладки
    window.addEventListener('beforeunload', () => {
        if (window.opener) {
            window.opener.saveGameState(); // Сохранение состояния игры перед закрытием вкладки
        }
    });
});

function showSection(sectionId) {
    // Скрываем все секции
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');

    // Показываем выбранную секцию
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}
