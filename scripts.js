// Handle dot click and smooth scroll to sections
document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', function () {
        const target = document.querySelector(this.getAttribute('data-target'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add scroll event listener to update active dot
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const dots = document.querySelectorAll('.dot');
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
});
