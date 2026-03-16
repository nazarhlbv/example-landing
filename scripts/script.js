document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Логіка для головної кнопки
    const actionButton = document.querySelector('.action-button');
    if (actionButton) {
        actionButton.addEventListener('click', function() {
            console.log('Main CTA clicked');
        });
    }

    // 2. Логіка для FAQ (Акордеон)
    // Знаходимо всі кнопки з запитаннями
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Знаходимо батьківський елемент (.faq-item)
            const parentItem = this.parentElement;
            
            // Додаємо або забираємо клас 'active' (який в CSS показує/ховає текст)
            parentItem.classList.toggle('active');
        });
    });

    // 3. Обробка відправки форми
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Зупиняємо стандартну поведінку форми (щоб сторінка не перезавантажувалась)
            event.preventDefault();
            
            // Отримуємо значення з полів форми
            const name = document.getElementById('name').value;
            
            // Показуємо повідомлення про успішну відправку
            alert(`Thank you, ${name}! Your message has been sent successfully. We will contact you soon.`);
            
            // Очищаємо форму після відправки
            contactForm.reset();
        });
    }
    // 4. Логіка для бургер-меню
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    // НОВЕ: Знаходимо всі посилання всередині нашого меню навігації
    const navLinks = document.querySelectorAll('.navigation a');

    if (hamburger && navMenu) {
        // Відкриття та закриття меню по кліку на саму кнопку (три смужки)
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // НОВЕ: Проходимося по кожному посиланню в меню
        navLinks.forEach(function(link) {
            // Додаємо реакцію на клік для кожного окремого посилання
            link.addEventListener('click', function() {
                // Коли клікаємо на посилання, гарантовано забираємо клас 'active', щоб сховати меню
                navMenu.classList.remove('active');
            });
        });
    }
   // 5. Анімація появи елементів при прокрутці (Intersection Observer)
    
    // НОВЕ: Налаштування чутливості для нашого "шпигуна"
    const observerOptions = {
        threshold: 0.15 // Блок має з'явитися на екрані хоча б на 15%, щоб анімація спрацювала
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            // Якщо елемент перетнув поріг у 15% видимості
            if (entry.isIntersecting) {
                // Плавно показуємо його
                entry.target.classList.add('show-element');
                
                // НОВЕ: Припиняємо стежити за цим блоком (він вже з'явився, робота виконана)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions); // Додали налаштування сюди

    // Знаходимо всі приховані елементи
    const hiddenElements = document.querySelectorAll('.hidden-element');
    
    // Запускаємо стеження для кожного
    hiddenElements.forEach((el) => observer.observe(el));
});