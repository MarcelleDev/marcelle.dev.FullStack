// Add some interactive effects
document.addEventListener('mousemove', function(e) {
    const cursor = e.clientX / window.innerWidth;
    const cursorY = e.clientY / window.innerHeight;
    
    // Slightly move background elements based on mouse position
    const lines = document.querySelectorAll('.line, .vertical-line, .curve');
    lines.forEach((line, index) => {
        const speed = (index + 1) * 0.5;
        const currentTransform = line.style.transform || '';
        // Reset and apply new transform
        line.style.transform = currentTransform.replace(/translate\([^)]*\)/g, '') + 
                             ` translate(${cursor * speed}px, ${cursorY * speed}px)`;
    });
});

// Download CV functionality - CORRIGIDO
document.getElementById('downloadCV').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Create animation
    this.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        this.style.transform = 'scale(1)';
        
        // Tentar baixar o arquivo
        const link = document.createElement('a');
        link.href = 'assets/marcelle_dev_pt.pdf';
        link.download = 'Marcelle_Dev_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Feedback visual
        this.innerHTML = 'Baixando...';
        setTimeout(() => {
            this.innerHTML = 'Baixar CV';
        }, 2000);
        
    }, 150);
});

// REMOVIDO o preventDefault() dos links sociais - agora funcionam normalmente
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.1)';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});