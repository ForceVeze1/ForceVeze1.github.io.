
document.addEventListener('DOMContentLoaded', function() {
  // Массив с фотографиями (замените на свои)
  const galleryImages = [
    'img/ConvertedPNG0.png',
    'img/ConvertedPNG0.png',
    'img/ConvertedPNG0.png',
    'img/ConvertedPNG0.png',
    'images/gym5.jpg'
  ];
  
  const slider = document.querySelector('.gallery-slider');
  const dotsContainer = document.querySelector('.gallery-dots');
  let currentSlide = 0;
  
  // Создаем слайды
  galleryImages.forEach((img, index) => {
    // Добавляем слайд
    const slide = document.createElement('div');
    slide.className = 'gallery-slide';
    slide.innerHTML = `<img src="${img}" alt="Фото клуба ${index + 1}">`;
    slider.appendChild(slide);
    
    // Добавляем точку
    const dot = document.createElement('div');
    dot.className = 'gallery-dot';
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });
  
  // Функция переключения слайдов
  function goToSlide(slideIndex) {
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    currentSlide = slideIndex;
    
    // Обновляем активную точку
    document.querySelectorAll('.gallery-dot').forEach((dot, index) => {
      dot.classList.toggle('active', index === slideIndex);
    });
  }
  
  // Кнопки навигации
  document.querySelector('.gallery-next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % galleryImages.length;
    goToSlide(currentSlide);
  });
  
  document.querySelector('.gallery-prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + galleryImages.length) % galleryImages.length;
    goToSlide(currentSlide);
  });
  
  // Автопрокрутка (опционально)
  let slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % galleryImages.length;
    goToSlide(currentSlide);
  }, 5000);
  
  // Останавливаем автопрокрутку при наведении
  slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
  slider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % galleryImages.length;
      goToSlide(currentSlide);
    }, 5000);
  });
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


function openTelegram(trainerId) {
            // Замените эти ссылки на реальные ссылки на Telegram-аккаунты
            const telegramLinks = {
                trainer1: 'https://t.me/alex_makhov',
                trainer2: 'https://t.me/alex_makhov',
                trainer3: 'https://t.me/alex_makhov'
            };
            
            // Проверяем, есть ли ссылка для выбранного тренера
            if (telegramLinks[trainerId]) {
                window.open(telegramLinks[trainerId], '_blank');
            } else {
                alert('Ссылка на Telegram этого тренера недоступна');
            }
        }