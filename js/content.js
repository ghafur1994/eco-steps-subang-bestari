class SpecialContentContact extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="info_section layout_padding2">
                <div class="container">
                <div class="info_items">
                    <div class="item ">
                    <div class="img-box box-1">
                        <img src="" alt="">
                    </div>
                    <div class="detail-box">
                        <p>
                        School Location: 
                        </p>
                        <p>
                        <span>Jalan Nova U5/81, Subang Bestari, 40150 Shah Alam, Selangor</span>
                        </p>
                    </div>
                    </div>
                    <a href="tel:+60378457401">
                    <div class="item ">
                        <div class="img-box box-2">
                        <img src="" alt="">
                        </div>
                        <div class="detail-box">
                        <p>
                            School Phone No.: 
                        </p>
                        <p>
                            03-7845 7401
                        </p>
                        </div>
                    </div>
                    </a>
                    <a href="mailto:bba8268@moe.gov.my.com">
                    <div class="item ">
                        <div class="img-box box-3">
                        <img src="" alt="">
                        </div>
                        <div class="detail-box">
                        <p>
                            School Email Address: 
                        </p>
                        <p>
                            bba8268@moe.gov.my.com
                        </p>
                        </div>
                    </div>
                    </a>
                </div>
                </div>
            </section>
        `
    }
}

customElements.define('special-content-contact', SpecialContentContact);