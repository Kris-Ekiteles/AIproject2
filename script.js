document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeIcon.textContent = '🌞';
    } else {
        themeIcon.textContent = '🌙';
    }
    
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDark = body.classList.contains('dark-theme');
        
        themeIcon.textContent = isDark ? '🌞' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
    
    // Product card interactions
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('view-btn')) {
                // Handle card click (could navigate to product page)
                console.log('Product clicked');
            }
        });
    });
    
    // Quick view and add to cart buttons would have actual functionality here
    const quickViewBtns = document.querySelectorAll('.view-btn');
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    
    quickViewBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            // In a real app, this would show a modal with product details
            alert('Quick view feature would show product details here');
        });
    });
    
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            // In a real app, this would add the product to cart
            const productName = btn.closest('.product-card').querySelector('h3').textContent;
            alert(`Added ${productName} to cart`);
        });
    });
});