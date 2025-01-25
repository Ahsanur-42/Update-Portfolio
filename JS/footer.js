document.addEventListener("DOMContentLoaded", () => {
    const footerContent = `
        <footer>
            <div class="footer">
                <div class="row">
                    <a href="https://www.facebook.com/mar.ahsan.33/" target="_blank" aria-label="Facebook">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/ahsanur_2456/" aria-label="Instagram" target="_blank">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://github.com/Ahsanur-42" target="_blank" aria-label="GitHub">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/md-ahsanur-rahaman/" aria-label="LinkedIn" target="_blank">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://x.com/ahsanur_rahaman" aria-label="Twitter" target="_blank">
                        <i class="fab fa-x-twitter"></i>
                    </a>
                </div>

                <div class="row">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#blogs">Blogs</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div class="row">
                    Copyright © 2025 Portfolio - All rights reserved || Designed By: Md.
                    Ahsanur Rahaman.
                </div>
            </div>
        </footer>
    `;

    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerContent;
    } else {
        console.error("Footer placeholder element not found.");
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = "<p>Footer loaded successfully!</p>";
    } else {
        console.error("Footer placeholder element not found.");
    }
});
