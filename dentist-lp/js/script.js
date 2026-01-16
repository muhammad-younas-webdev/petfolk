const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  
  if (window.scrollY > 10) {
    header.classList.add('is-scrolled');
  } else {
    header.classList.remove('is-scrolled');
  }
});

// FAQ toggle
document.querySelectorAll('.faq-trigger').forEach(button => {
  button.addEventListener('click', (e) => {
    const parent = button.parentElement;
    const isActive = parent.classList.contains('active');

    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
    });

    if (!isActive) {
      parent.classList.add('active');
    }

    e.stopPropagation();
  });
});

document.addEventListener('click', (e) => {

  if (!e.target.closest('.faq-item')) {
    document.querySelectorAll('.faq-item.active').forEach(item => {
      item.classList.remove('active');
    });
  }
});
