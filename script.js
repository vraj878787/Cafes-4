document.addEventListener('DOMContentLoaded', function() {
    // Initialize lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeButton = document.getElementById('close-lightbox');
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    // Open lightbox when gallery image is clicked
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            lightboxImage.src = this.src;
            lightboxImage.alt = this.alt;
            lightbox.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close lightbox
    closeButton.addEventListener('click', function() {
        lightbox.classList.add('hidden');
        document.body.style.overflow = '';
    });
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.add('hidden');
            document.body.style.overflow = '';
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-fade-up');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Check scroll position on load
    window.addEventListener('load', animateOnScroll);
    // Check scroll position on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Show more reviews functionality
    const showMoreBtn = document.querySelector('.bg-accent');
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function() {
            // In a real implementation, this would fetch more reviews from an API
            this.textContent = 'All Reviews Loaded';
            this.classList.add('opacity-50');
            this.style.cursor = 'default';
        });
    }
});