document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    const folderViews = document.querySelectorAll('.folder-view');

    sidebarItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetFolder = this.getAttribute('data-folder');
            
            // Remove active class from all sidebar items and folder views
            sidebarItems.forEach(sidebar => sidebar.classList.remove('active'));
            folderViews.forEach(folder => folder.style.display = 'none');
            
            // Add active class to clicked sidebar item and show corresponding folder
            this.classList.add('active');
            document.getElementById(targetFolder).style.display = 'block';
        });
    });

    // Update time in menu bar
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        document.getElementById('current-time').textContent = timeString;
    }
    
    updateTime();
    setInterval(updateTime, 1000);

    // File item click effects
    const fileItems = document.querySelectorAll('.file-item');
    fileItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px)';
            }, 100);
        });
    });
});
