/* footer.js - simple footer component */
class CustomFooter extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
      <footer class="section" style="background:var(--black);color:var(--cream);padding:36px 0">
        <div class="container" style="display:grid;grid-template-columns:1fr auto;align-items:center;gap:20px">
          <div>
            <div class="logo" style="color:var(--cream);font-size:1.05rem">Velvet<span style="color:var(--gold)"> Brew</span></div>
            <p style="max-width:680px;opacity:0.9">A family-run café known for homemade meals, freshly brewed tea, and a warm ambience.</p>
            <div style="margin-top:14px;display:flex;gap:12px">
              <a href="#" aria-label="instagram"><i data-feather="instagram"></i></a>
              <a href="#" aria-label="facebook"><i data-feather="facebook"></i></a>
              <a href="#" aria-label="twitter"><i data-feather="twitter"></i></a>
            </div>
          </div>
          <div style="text-align:right;opacity:0.85">
            <div>Open: Mon–Fri 7am–7pm</div>
            <div style="margin-top:8px">&copy; 2025 Velvet Brew Haven</div>
          </div>
        </div>
      </footer>
    `;
    if(window.feather) feather.replace();
  }
}
customElements.define('custom-footer', CustomFooter);
