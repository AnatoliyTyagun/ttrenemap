document.getElementById("profile").addEventListener("click", function() {
    window.location.href = "profile.html";
});

document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const button = document.getElementById('sb_mov');
    const arrow = button.querySelector('p');
    
    button.addEventListener('click', function() {
        const isOpen = sidebar.classList.toggle('open');
        
        if (isOpen) {
            button.style.left = '500px';
            arrow.textContent = '◀';
        } else {
            button.style.left = '20px';
            arrow.textContent = '▶';
        }
    });
});

//document.addEventListener('DOMContentLoaded', function() {
//    const svgObject = document.querySelector('.svg_svg');
//    const svgUrl = svgObject.getAttribute('data') || svgObject.querySelector('img').src;
//
//    // Загружаем SVG как текст и вставляем напрямую
//    fetch(svgUrl)
//        .then(response => response.text())
//        .then(svgText => {
//            // Создаем контейнер для SVG
//            const svgContainer = document.createElement('div');
//            svgContainer.className = 'svg_svg';
//            svgContainer.style.cssText = `
//                position: fixed;
//                left: 480px;
//                top: 0;
//                width: calc(100vw - 480px);
//                height: 100vh;
//                overflow: hidden;
//                z-index: -1;
//            `;
//
//            // Вставляем SVG
//            svgContainer.innerHTML = svgText;
//
//            // Заменяем object на наш контейнер
//            svgObject.parentNode.replaceChild(svgContainer, svgObject);
//
//            // Находим SVG элемент
//            const svgElement = svgContainer.querySelector('svg');
//
//            if (svgElement) {
//                // Делаем SVG интерактивным
//                svgElement.style.cssText = `
//                    width: 100%;
//                    height: 100%;
//                    cursor: grab;
//                    user-select: text;
//                    -webkit-user-select: text;
//                    -moz-user-select: text;
//                `;
//
//                // Устанавливаем viewBox если его нет
//                if (!svgElement.hasAttribute('viewBox')) {
//                    const width = svgElement.getAttribute('width') || '100%';
//                    const height = svgElement.getAttribute('height') || '100%';
//                    svgElement.setAttribute('viewBox', `0 0 ${width} ${height}`);
//                }
//
//                let isDragging = false;
//                let startX, startY;
//                let viewBox = svgElement.viewBox.baseVal;
//                let currentX = viewBox.x;
//                let currentY = viewBox.y;
//                let currentWidth = viewBox.width;
//                let currentHeight = viewBox.height;
//
//                svgElement.addEventListener('mousedown', function(e) {
//                    if (e.target.tagName === 'text' || e.target.tagName === 'tspan') {
//                        // Разрешаем выделение текста
//                        return;
//                    }
//
//                    isDragging = true;
//                    startX = e.clientX;
//                    startY = e.clientY;
//                    svgElement.style.cursor = 'grabbing';
//                    e.preventDefault();
//                });
//
//                svgElement.addEventListener('mousemove', function(e) {
//                    if (!isDragging) return;
//
//                    const dx = (e.clientX - startX) * (currentWidth / svgContainer.clientWidth);
//                    const dy = (e.clientY - startY) * (currentHeight / svgContainer.clientHeight);
//
//                    currentX -= dx;
//                    currentY -= dy;
//
//                    svgElement.setAttribute('viewBox',
//                        `${currentX} ${currentY} ${currentWidth} ${currentHeight}`);
//
//                    startX = e.clientX;
//                    startY = e.clientY;
//                    e.preventDefault();
//                });
//
//                svgElement.addEventListener('mouseup', function() {
//                    isDragging = false;
//                    svgElement.style.cursor = 'grab';
//                });
//
//                svgElement.addEventListener('mouseleave', function() {
//                    isDragging = false;
//                    svgElement.style.cursor = 'grab';
//                });
//
//                // Масштабирование колесиком мыши
//                svgElement.addEventListener('wheel', function(e) {
//                    e.preventDefault();
//
//                    const zoomIntensity = 0.1;
//                    const wheel = e.deltaY < 0 ? 1 : -1;
//                    const zoom = 1 + wheel * zoomIntensity;
//
//                    // Координаты курсора относительно SVG
//                    const rect = svgElement.getBoundingClientRect();
//                    const mouseX = e.clientX - rect.left;
//                    const mouseY = e.clientY - rect.top;
//
//                    // Трансформируем координаты в систему viewBox
//                    const x = currentX + (mouseX / rect.width) * currentWidth;
//                    const y = currentY + (mouseY / rect.height) * currentHeight;
//
//                    // Масштабируем
//                    currentWidth *= zoom;
//                    currentHeight *= zoom;
//                    currentX = x - (mouseX / rect.width) * currentWidth;
//                    currentY = y - (mouseY / rect.height) * currentHeight;
//
//                    svgElement.setAttribute('viewBox',
//                        `${currentX} ${currentY} ${currentWidth} ${currentHeight}`);
//                });
//            }
//        })
//        .catch(error => {
//            console.error('Ошибка загрузки SVG:', error);
//            // Если fetch не работает из-за CORS, используем альтернативный вариант
//            useAlternativeApproach(svgUrl);
//        });
//
//    function useAlternativeApproach(svgUrl) {
//        // Альтернатива: создаем iframe
//        const iframe = document.createElement('iframe');
//        iframe.className = 'svg_svg';
//        iframe.src = svgUrl;
//        iframe.style.cssText = `
//            position: fixed;
//            left: 480px;
//            top: 0;
//            width: calc(100vw - 480px);
//            height: 100vh;
//            border: none;
//            z-index: -1;
//        `;
//
//        svgObject.parentNode.replaceChild(iframe, svgObject);
//
//        // Для этого варианта нужно будет добавить скрипт внутрь iframe
//        // что сложнее из-за CORS
//    }
//});