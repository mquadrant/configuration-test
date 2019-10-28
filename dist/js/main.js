"use strict";
document.addEventListener("DOMContentLoaded", () => {
    setupTabs();
    templateSelect();
});
function setupTabs() {
    document.querySelectorAll(".tab-button").forEach(button => {
        button.addEventListener("click", () => {
            const btnGroup = button.parentElement;
            const tabsContainer = btnGroup ? btnGroup.parentElement : button;
            const container = tabsContainer ? tabsContainer.parentElement : btnGroup;
            const tabNumber = button.getAttribute("data-for-tab");
            const tabToActivate = container.querySelector(`.tab-content[data-tab="${tabNumber}"]`);
            btnGroup.querySelectorAll(".tab-button").forEach(button => {
                button.classList.remove("active");
            });
            container.querySelectorAll(".tab-content").forEach(tab => {
                tab.classList.remove("active");
            });
            button.classList.add("active");
            tabToActivate.classList.add("active");
        });
    });
}
function templateSelect() {
    document.querySelectorAll(".template-img").forEach(button => {
        button.addEventListener("click", () => {
            const template = button.parentElement;
            template.querySelectorAll(".template-img").forEach(button => {
                button.classList.remove("active");
            });
            button.classList.add("active");
        });
    });
}
//# sourceMappingURL=main.js.map