// script.js - enhanced interactions: lightbox, show more reviews, reservations, small UX improvements
document.addEventListener('DOMContentLoaded', function(){

  // Lightbox (gallery)
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const closeBtn = document.getElementById('close-lightbox');
  document.querySelectorAll('.gallery-item').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const img = btn.querySelector('img');
      if(!img) return;
      lightboxImage.src = img.src;
      lightbox.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  });
  closeBtn.addEventListener('click', ()=>{ lightbox.classList.add('hidden'); document.body.style.overflow=''; });
  lightbox.addEventListener('click', (e)=>{ if(e.target===lightbox) { lightbox.classList.add('hidden'); document.body.style.overflow=''; } });

  // Show more reviews (simple demo: appends 4 more)
  const showMoreBtn = document.getElementById('show-more-reviews');
  if(showMoreBtn){
    showMoreBtn.addEventListener('click', function(){
      // disable button UI
      this.disabled = true;
      this.textContent = 'Loading...';

      // simulate fetching more reviews
      setTimeout(()=>{
        const rail = document.querySelector('.reviews-rail');
        for(let i=0;i<4;i++){
          const art = document.createElement('article');
          art.className = 'review-card animate-fade-up';
          art.innerHTML = `<div class="stars">★★★★★</div><p class="review-text">"Great place — highly recommend!"</p><footer class="review-meta"><strong>Guest</strong> — Web Review</footer>`;
          rail.appendChild(art);
        }
        this.textContent = 'All Reviews Loaded';
        this.disabled = true;
      }, 700);
    });
  }

  // Reservation form (local demo handling)
  const reservation = document.getElementById('reservation-form');
  if(reservation){
    reservation.addEventListener('submit', function(e){
      e.preventDefault();
      const data = new FormData(reservation);
      // simple validation
      if(!data.get('name') || !data.get('contact')) {
        alert('Please add name and contact.');
        return;
      }
      // show success (in real product you'd POST to api)
      reservation.querySelector('.full').textContent = 'Requesting...';
      setTimeout(()=>{
        reservation.reset();
        reservation.querySelector('.full').textContent = 'Request Reservation';
        alert('Reservation requested. We will confirm shortly.');
      }, 900);
    });
  }

  // Reduce hero parallax motion for small devices and add subtle transform on scroll
  const heroImage = document.querySelector('.hero-image');
  window.addEventListener('scroll', () => {
    const sc = window.scrollY;
    if(heroImage){
      heroImage.style.transform = `scale(${1 + Math.min(sc/6000, 0.04)}) translateY(${Math.min(sc/8, 30)}px)`;
    }
  }, {passive:true});

  // Accessibility: keyboard close for lightbox (Esc)
  window.addEventListener('keydown', (e)=>{ if(e.key === 'Escape'){ if(!lightbox.classList.contains('hidden')) { lightbox.classList.add('hidden'); document.body.style.overflow=''; } } });

  // Small enhancement: prefers-reduced-motion respects
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(prefersReduced){
    document.querySelectorAll('.animate-fade-up').forEach(el=>el.style.animation='none');
  }
});
