import { showElement, hideElement } from './js/add-remove-hidden-class';
import { refs } from './js/refs';
import { clearBtn, loadBtn } from './js/buttons';

const {
    formEl,
    inputEl,
    submitBtnEl,
    bodyPlaceholderEl,
    galleryEl } = refs;

// Makes "Clear input" button visible/hidden depending on input value
function toggleClearBtnEl(e) {
    const query = e.target.value;
    
    if (query === "") {
        clearBtn.hide();
    } else {
        clearBtn.show();
    };
};

// Clears input by pressing "Clear input" button
function clearInput() {
    formEl.reset();
    clearBtn.hide();
    inputEl.focus();
};

formEl.addEventListener("input", toggleClearBtnEl);
clearBtn.btn.addEventListener("click", clearInput);