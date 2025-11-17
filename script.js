// Slide Navigation System
class SlideShow {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;

        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.slideNumber = document.getElementById('slideNumber');
        this.progressFill = document.getElementById('progressFill');

        this.init();
    }

    init() {
        // Show first slide
        this.showSlide(0);

        // Add event listeners
        this.prevBtn.addEventListener('click', () => this.previousSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));

        // Touch support for mobile
        this.setupTouchSupport();

        // Update progress
        this.updateProgress();
    }

    showSlide(index) {
        // Remove active class from all slides
        this.slides.forEach(slide => slide.classList.remove('active'));

        // Ensure index is within bounds
        if (index < 0) {
            this.currentSlide = 0;
        } else if (index >= this.totalSlides) {
            this.currentSlide = this.totalSlides - 1;
        } else {
            this.currentSlide = index;
        }

        // Add active class to current slide
        this.slides[this.currentSlide].classList.add('active');

        // Scroll to top of slide
        this.slides[this.currentSlide].scrollTop = 0;

        // Update UI
        this.updateSlideNumber();
        this.updateProgress();
        this.updateButtons();
    }

    nextSlide() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.showSlide(this.currentSlide + 1);
        }
    }

    previousSlide() {
        if (this.currentSlide > 0) {
            this.showSlide(this.currentSlide - 1);
        }
    }

    updateSlideNumber() {
        this.slideNumber.textContent = `${this.currentSlide + 1} / ${this.totalSlides}`;
    }

    updateProgress() {
        const progress = ((this.currentSlide + 1) / this.totalSlides) * 100;
        this.progressFill.style.width = `${progress}%`;
    }

    updateButtons() {
        // Disable prev button on first slide
        this.prevBtn.disabled = this.currentSlide === 0;
        this.prevBtn.style.opacity = this.currentSlide === 0 ? '0.5' : '1';
        this.prevBtn.style.cursor = this.currentSlide === 0 ? 'not-allowed' : 'pointer';

        // Disable next button on last slide
        this.nextBtn.disabled = this.currentSlide === this.totalSlides - 1;
        this.nextBtn.style.opacity = this.currentSlide === this.totalSlides - 1 ? '0.5' : '1';
        this.nextBtn.style.cursor = this.currentSlide === this.totalSlides - 1 ? 'not-allowed' : 'pointer';
    }

    handleKeyPress(e) {
        switch(e.key) {
            case 'ArrowRight':
            case ' ': // Space bar
            case 'PageDown':
                e.preventDefault();
                this.nextSlide();
                break;
            case 'ArrowLeft':
            case 'PageUp':
                e.preventDefault();
                this.previousSlide();
                break;
            case 'Home':
                e.preventDefault();
                this.showSlide(0);
                break;
            case 'End':
                e.preventDefault();
                this.showSlide(this.totalSlides - 1);
                break;
            case 'Escape':
                // Optional: Add fullscreen toggle
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                }
                break;
            case 'f':
            case 'F':
                // Toggle fullscreen
                this.toggleFullscreen();
                break;
        }
    }

    setupTouchSupport() {
        let touchStartX = 0;
        let touchEndX = 0;

        const slideContainer = document.querySelector('.slide-container');

        slideContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        slideContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });

        const handleSwipe = () => {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swiped left - next slide
                    this.nextSlide();
                } else {
                    // Swiped right - previous slide
                    this.previousSlide();
                }
            }
        };

        this.handleSwipe = handleSwipe;
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log('Fullscreen not supported');
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

    // Public method to go to specific slide
    goToSlide(index) {
        this.showSlide(index);
    }
}

// Initialize slideshow when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const slideShow = new SlideShow();

    // Make slideShow globally accessible for debugging
    window.slideShow = slideShow;

    // Add some animation on load
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // Console welcome message
    console.log('%c🎓 RAG 완벽 가이드', 'font-size: 20px; font-weight: bold; color: #667eea;');
    console.log('%c키보드 단축키:', 'font-weight: bold; margin-top: 10px;');
    console.log('→ / Space / PageDown: 다음 슬라이드');
    console.log('← / PageUp: 이전 슬라이드');
    console.log('Home: 첫 슬라이드');
    console.log('End: 마지막 슬라이드');
    console.log('F: 전체화면 토글');
    console.log('Esc: 전체화면 종료');
    console.log('\n특정 슬라이드로 이동: slideShow.goToSlide(숫자)');
});

// Optional: Add presentation mode
document.addEventListener('keydown', (e) => {
    // Press 'P' to enter presentation mode (hide controls)
    if (e.key === 'p' || e.key === 'P') {
        const controls = document.querySelector('.controls');
        controls.style.display = controls.style.display === 'none' ? 'flex' : 'none';
    }
});

// Auto-save current slide position to localStorage
window.addEventListener('beforeunload', () => {
    if (window.slideShow) {
        localStorage.setItem('ragSlidePosition', window.slideShow.currentSlide);
    }
});

// Restore slide position on load
window.addEventListener('load', () => {
    const savedPosition = localStorage.getItem('ragSlidePosition');
    if (savedPosition && window.slideShow) {
        setTimeout(() => {
            window.slideShow.goToSlide(parseInt(savedPosition));
        }, 200);
    }
});

// Add smooth fade effect
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease';
