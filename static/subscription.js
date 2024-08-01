document.addEventListener('DOMContentLoaded', () => {
    const templateTabs = document.querySelectorAll('.subscription_box');
    templateTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const templateType = tab.dataset.template;
            localStorage.setItem('selectedTemplate', templateType);
            window.location.href = './detail_subscription.html';
        });
    });
});