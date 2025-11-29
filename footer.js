class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background: #1A1A1A;
                    color: #F5EFE6;
                    padding: 4rem 2rem;
                }
                
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 3rem;
                }
                
                .footer-logo {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #F5EFE6;
                    margin-bottom: 1.5rem;
                    display: block;
                }
                
                .footer-logo span {
                    color: #D4AF37;
                }
                
                .footer-about {
                    grid-column: span 2;
                }
                
                .footer-about p {
                    opacity: 0.8;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                
                .social-links a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: rgba(245, 239, 230, 0.1);
                    color: #F5EFE6;
                    transition: all 0.3s ease;
                }
                
                .social-links a:hover {
                    background: #D4AF37;
                    color: #1A1A1A;
                }
                
                .footer-heading {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                    color: #F5EFE6;
                }
                
                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                
                .footer-links a {
                    color: rgba(245, 239, 230, 0.8);
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                
                .footer-links a:hover {
                    color: #D4AF37;
                }
                
                .newsletter input {
                    width: 100%;
                    padding: 0.75rem;
                    margin-bottom: 1rem;
                    background: rgba(245, 239, 230, 0.1);
                    border: none;
                    border-radius: 4px;
                    color: #F5EFE6;
                }
                
                .newsletter button {
                    background: #D4AF37;
                    color: #1A1A1A;
                    border: none;
                    padding: 0.75rem 1.5rem;
                    border-radius: 4px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: background 0.3s ease;
                }
                
                .newsletter button:hover {
                    background: #F5EFE6;
                }
                
                .copyright {
                    grid-column: 1 / -1;
                    text-align: center;
                    margin-top: 3rem;
                    padding-top: 2rem;
                    border-top: 1px solid rgba(245, 239, 230, 0.1);
                    opacity: 0.6;
                }
                
                @media (max-width: 768px) {
                    .footer-container {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                    
                    .footer-about {
                        grid-column: span 1;
                    }
                    
                    .copyright {
                        margin-top: 2rem;
                        padding-top: 1.5rem;
                    }
                }
            </style>
            
            <div class="footer-container">
                <div class="footer-about">
                    <a href="/" class="footer-logo">Velvet<span>Brew</span></a>
                    <p>A family-run cafe known for homemade meals, freshly brewed tea, and a warm ambience that feels like home.</p>
                    <div class="social-links">
                        <a href="#"><i data-feather="instagram"></i></a>
                        <a href="#"><i data-feather="facebook"></i></a>
                        <a href="#"><i data-feather="twitter"></i></a>
                        <a href="#"><i data-feather="map-pin"></i></a>
                    </div>
                </div>
                
                <div>
                    <h3 class="footer-heading">Quick Links</h3>
                    <div class="footer-links">
                        <a href="/">Home</a>
                        <a href="#menu">Menu</a>
                        <a href="#gallery">Gallery</a>
                        <a href="#reviews">Reviews</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
                
                <div>
                    <h3 class="footer-heading">Opening Hours</h3>
                    <div class="footer-links">
                        <a href="#">Monday - Friday: 7am - 7pm</a>
                        <a href="#">Saturday - Sunday: 8am - 6pm</a>
                    </div>
                </div>
                
                <div class="newsletter">
                    <h3 class="footer-heading">Newsletter</h3>
                    <input type="email" placeholder="Your Email">
                    <button>Subscribe</button>
                </div>
                
                <div class="copyright">
                    <p>&copy; 2023 Velvet Brew Haven. All rights reserved.</p>
                </div>
            </div>
        `;
        
        // Initialize feather icons
        feather.replace();
    }
}

customElements.define('custom-footer', CustomFooter);