
        // CAROUSEL
        let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-slide');
        const indicators = document.querySelectorAll('.indicator');

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            indicators.forEach(indicator => indicator.classList.remove('active'));
            
            slides[index].classList.add('active');
            indicators[index].classList.add('active');
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        // Auto-play carousel
        setInterval(nextSlide, 5000);

        // Manual control
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });

        // COUNTER ANIMATION
        function animateCounter(element) {
            const target = parseInt(element.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.textContent = '+' + target;
                    clearInterval(timer);
                } else {
                    element.textContent = '+' + Math.floor(current);
                }
            }, 16);
        }

        // Intersection Observer for counters
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counters = entry.target.querySelectorAll('.stat-number');
                    counters.forEach(counter => {
                        if (counter.textContent === '0') {
                            animateCounter(counter);
                        }
                    });
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const statsSection = document.querySelector('.stats');
        if (statsSection) {
            counterObserver.observe(statsSection);
        }

        // SMOOTH SCROLL
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // FORM SUBMIT
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Aqui você pode integrar com um serviço de email ou backend
            console.log('Dados do formulário:', data);
            
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            this.reset();
        });

        // HEADER SCROLL EFFECT
        let lastScroll = 0;
        const header = document.querySelector('header');

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.style.padding = '15px 40px';
            } else {
                header.style.padding = '20px 40px';
            }
            
            lastScroll = currentScroll;
        });

        // PORTFOLIO GRID BLUR EFFECT
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        portfolioItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                portfolioItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.style.filter = 'blur(3px) brightness(0.5)';
                    }
                });
            });
            
            item.addEventListener('mouseleave', () => {
                portfolioItems.forEach(otherItem => {
                    otherItem.style.filter = 'none';
                });
            });
        });
