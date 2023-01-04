export const loadBtn = {
    
    btn: document.querySelector(".load-btn"),
    btnImg: document.querySelector(".load-btn__img"),

    show() {
        this.btn.classList.remove("hidden");
    },

    hide() {
        this.btn.classList.add("hidden");
        this.btnImg.classList.remove("fa-spin")
    },

    enable() {
        this.btn.disabled = false;
        this.btnImg.classList.remove("fa-spin")
    },

    disable() {
        this.btn.disabled = true;
        this.btnImg.classList.add("fa-spin")
    },
    
};

export const clearBtn = {

    btn: document.querySelector(".search-form__clear-btn"),

    show() {
        this.btn.classList.remove("hidden");
    },

    hide() {
        this.btn.classList.add("hidden");
    },

};