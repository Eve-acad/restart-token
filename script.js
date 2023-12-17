document.addEventListener('DOMContentLoaded', function() {
    var buyButton = document.getElementById('buyButton');

    buyButton.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
    });

    buyButton.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });

    buyButton.addEventListener('click', function() {
        alert('Redirect to buy $RETARD');
        // Implement the actual buy logic or redirection here
    });
});
