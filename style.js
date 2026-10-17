// Toggle Sidebar Functionality
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    if (sidebar && overlay) {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

// Optional helper for select donation buttons on donate/home page
document.addEventListener('DOMContentLoaded', () => {
    const amtButtons = document.querySelectorAll('.amt-btn');
    amtButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            amtButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
});