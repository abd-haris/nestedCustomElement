class BlogList extends HTMLElement {
  constructor() {
    super();

    this._blogList = [];

    this._style = document.createElement("style");
  }

  setBlogList(value) {
    this._blogList = value;

    this.render();
  }

  updateStyle() {
    this._style.textContent = `
    blog-item {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr
      gap: 1rem;
    }
    `;
  }

  render() {
    this.updateStyle();

    this.innerHTML = `
    ${this._style.outerHTML}

    <div class="blog-item">
        <h5 class="blog__title">
          <a href="#">Cara Memulai Belajar Pemrograman</a>
        </h5>
        <div class="blog__description">
          <p>Panduan untuk pemula yang ingin memulai belajar pemrograman.</p>
        </div>
      </div>
 
      <div class="blog-item">
        <h5 class="blog__title">
          <a href="#">Tips Efektif dalam Pengembangan Web</a>
        </h5>
        <div class="blog__description">
          <p>Tips dan trik untuk menjadi pengembang web yang lebih baik.</p>
        </div>
      </div>
 
      <div class="blog-item">
        <h5 class="blog__title">
          <a href="#">Mengenal Konsep Web Component</a>
        </h5>
        <div class="blog__description">
          <p>Pengenalan singkat tentang Web Component dan komponen-komponennya.</p>
        </div>
      </div>
    `;
  }
}

customElements.define("blog-list", BlogList);
