document.addEventListener('DOMContentLoaded', () => {
    const templateTabs = document.querySelectorAll('.login_btn');
    templateTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            window.location.href = './main.html';
        });
    });
});