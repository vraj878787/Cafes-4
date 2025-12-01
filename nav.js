/* nav.js - simple custom element inserted into light DOM so anchor links work reliably */
class CustomNav extends HTMLElement {
  connectedCallback(){
    // Build nav directly into light DOM (this) so anchors are part of page flow
    this.innerHTML = `
      <nav class="navbar" role="navigation" aria-label="Main navigation">
        <div class="navwrap">
          <a class="logo" href="#home">Velvet<span> Brew</span></a>
          <div class="navlinks" id="navlinks">
            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <a href="#gallery">Gallery</a>
            <a href="#reviews">Reviews</a>
            <a href="#visit">Visit</a>
          </div>
          <button class="btn-menu" id="menu-toggle" aria-label="Open menu"><i data-feather="menu"></i></button>
        </div>
      </nav>
    `;
    // ensure feather icons
    if(window.feather) feather.replace();

    const toggle = this.querySelector('#menu-toggle');
    const links = this.querySelector('#navlinks');

    toggle.addEventListener('click', () => {
      links.style.display = (links.style.display === 'flex') ? '' : 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '68px';
      links.style.left = '0';
      links.style.right = '0';
      links.style.background = 'rgba(245,239,230,0.98)';
      links.style.padding = '18px 12px';
      links.style.gap = '12px';
    });

    // Add smooth scroll behaviour for anchors (works for in-page links)
    this.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', (e)=>{
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
        // collapse mobile
        if(window.innerWidth < 760) links.style.display = '';
      });
    });

    // add elevation on scroll
    window.addEventListener('scroll', () => {
      const nav = this.querySelector('.navbar');
      if(window.scrollY > 20) nav.style.boxShadow = '0 6px 30px rgba(17,17,17,0.08)';
      else nav.style.boxShadow = 'none';
    });
  }
}
customElements.define('custom-nav', CustomNav);
