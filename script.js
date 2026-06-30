var glowingBook = document.getElementById('glowing-book');
var openBook = document.getElementById('open-book');
var keyWords = Array.from(document.querySelectorAll('.open-book td span'));
var overlay = document.getElementById('fade-overlay');

glowingBook.addEventListener('click', function () {
    openBook.classList.add('active');
});

keyWords.forEach(function (word) {
    word.addEventListener('click', function () {
        if (!word.classList.contains('active')) {
            word.classList.add('active');
        }

        var bothActive = keyWords.every(function (item) {
            return item.classList.contains('active');
        });

        if (bothActive) {
            overlay.classList.add('active');
            setTimeout(() => {
                window.location.href = "home/index.html"
            }, 1000);
        }
    });
});