document.addEventListener('DOMContentLoaded', () => {
    const feed = document.querySelector('.video-feed');
    const feedItems = Array.from(document.querySelectorAll('.feed-item'));
    const paginationDotsContainer = document.querySelector('.pagination-dots');
    const startOverlay = document.getElementById('start-overlay');
    const startButton = document.getElementById('start-button');

    let currentIndex = 0; // Индекс текущего активного контейнера
    let userInteracted = false; // Флаг для разрешения автовоспроизведения аудио

    // --- Управление стартовым экраном и взаимодействием пользователя ---
    startButton.addEventListener('click', () => {
        userInteracted = true;
        startOverlay.style.display = 'none'; // Скрываем стартовый экран
        playActiveMedia(currentIndex); // Запускаем медиа для первого слайда
    }, { once: true }); // Обработчик сработает только один раз

    // --- Управление видимостью кнопок соцсетей ---
    document.querySelectorAll('.toggle-social').forEach(button => {
        button.addEventListener('click', () => {
            const socialLinks = button.nextElementSibling; // div с ссылками
            socialLinks.classList.toggle('hidden');
            button.querySelector('i').classList.toggle('fa-chevron-up');
            button.querySelector('i').classList.toggle('fa-chevron-down');
        });
    });

    // --- Обновление навигационных точек ---
    function updatePagination() {
        paginationDotsContainer.innerHTML = ''; // Очищаем старые точки
        feedItems.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === currentIndex) {
dot.classList.add('active');
            }
            // Переход к слайду по клику на точку
            dot.addEventListener('click', () => {
                feed.scrollTo({
                    top: index * window.innerHeight,
                    behavior: 'smooth'
                });
            });
            paginationDotsContainer.appendChild(dot);
        });
    }

    // --- Управление воспроизведением медиа ---
    function playActiveMedia(index) {
        feedItems.forEach((item, i) => {
            const video = item.querySelector('video');
            const audio = item.querySelector('audio');

            if (i === index) {
                // Воспроизводим активное видео
                video.currentTime = 0; // Начинаем видео с начала
                video.play().catch(e => console.error("Ошибка автовоспроизведения видео:", e));

                // Воспроизводим активное аудио (только если пользователь взаимодействовал)
                if (userInteracted && audio) {
                    audio.currentTime = 0; // Начинаем аудио с начала
                    audio.play().catch(e => console.error("Ошибка автовоспроизведения аудио:", e));
                }
            } else {
                // Останавливаем неактивное медиа
                video.pause();
                if (audio) audio.pause();
            }
        });
    }

    // --- Наблюдатель за пересечением для определения текущего слайда ---
    // Intersection Observer позволяет нам определить, какой элемент находится в видимой области
    const observerOptions = {
        root: feed, // Элемент, который является областью просмотра (наш .video-feed)
        rootMargin: '0px',
        threshold: 0.5 // Срабатывает, когда 50% элемента видно
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const newIndex = feedItems.indexOf(entry.target);
                if (newIndex !== currentIndex) {
                    currentIndex = newIndex;
                    updatePagination();
                    playActiveMedia(currentIndex);
                }
            }
        });
    }, observerOptions);

    // Начинаем наблюдение за каждым feed-item
    feedItems.forEach(item => {
        observer.observe(item);
    });

    // --- Логика бесконечной прокрутки ---
    // Это реализуется путем "телепортации" scrollTop, когда пользователь достигает конца/начала.
    // Обратите внимание: сам переход будет мгновенным, не плавным, т.к. мы меняем scrollTop.
    // Плавность между обычными элементами обеспечивается scroll-snap-type.
	let isResetting = false;

	feed.addEventListener('scroll', () => {
	  if (isResetting) return;

	  const st = feed.scrollTop;
	  const scrollHeight = feed.scrollHeight;
	  const clientHeight = feed.clientHeight;

	  if (st + clientHeight >= scrollHeight - 1) {
		isResetting = true;
		setTimeout(() => {
		  feed.scrollTo({ top: 0, behavior: 'auto' });
		  isResetting = false; // можно убрать, если нужно только один раз
		}, 100);
	  }
	});


    // --- Инициализация при загрузке страницы ---
    updatePagination(); // Создаем начальные навигационные точки
    // playActiveMedia(currentIndex); // НЕ ВЫЗЫВАЕМ ЗДЕСЬ, т.к. ждем клика по стартовому экрану
});



// Устанавливаем громкость в момент изменения ползунка

const allAudios = document.querySelectorAll('audio');
const volumeSlider = document.getElementById('volumeRange');

volumeSlider.addEventListener('input', () => {
  const volume = parseFloat(volumeSlider.value);
  allAudios.forEach(audio => {
    audio.volume = volume;
  });
});
