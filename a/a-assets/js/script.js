// header.js - Mobile Menu Functionality
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile-menu');
const MOBILE_BREAKPOINT = 900; // breakpoint matching CSS

// Function to close mobile menu
function closeMenu() {
  hamburger.classList.remove('open');
  menu.classList.remove('open');
  document.documentElement.style.overflow = '';
}

// Toggle menu on hamburger click
hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  menu.classList.toggle('open', isOpen);
  document.documentElement.style.overflow = isOpen ? 'hidden' : '';
});

// Close menu on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menu.classList.contains('open')) {
    closeMenu();
  }
});

// Close menu when clicking outside menu content
menu.addEventListener('click', e => {
  if (e.target === menu) closeMenu();
});

// Close mobile menu automatically on resize above breakpoint
window.addEventListener('resize', () => {
  if (window.innerWidth > MOBILE_BREAKPOINT && menu.classList.contains('open')) {
    closeMenu();
  }
});
// End of header.js

// script.js - Reviews Slider Initialization
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".reviews-nav-next",
        prevEl: ".reviews-nav-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
    },
});


// team members
const modal = document.getElementById("memberModal");
const modalClose = document.getElementById("modalClose");
const modalImg = document.getElementById("modalImg");
const modalName = document.getElementById("modalName");
const modalRole = document.getElementById("modalRole");
const modalEducation = document.getElementById("modalEducation");
const modalPassion = document.getElementById("modalPassion");
const modalHobbies = document.getElementById("modalHobbies");

function openMemberModal(member) {
  const hidden = member.querySelector(".member-hidden-content");
  const img = member.querySelector("img");

  modalImg.src = img.src;
  modalImg.alt = img.alt;
  modalName.textContent = member.querySelector(".member-name").textContent;
  modalRole.textContent = member.querySelector(".member-role").textContent;
  modalEducation.textContent = hidden.querySelector(".education").textContent;
  modalPassion.textContent = hidden.querySelector(".passion").textContent;
  modalHobbies.textContent = hidden.querySelector(".hobbies").textContent;

  modal.style.display = "flex";
}

document.querySelectorAll(".member-bio").forEach((btn) => {
  btn.addEventListener("click", () => {
    openMemberModal(btn.closest(".team-member"));
  });
});

document.querySelectorAll(".team-member img").forEach((img) => {
  img.addEventListener("click", () => {
    openMemberModal(img.closest(".team-member"));
  });
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// faq js
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const content = item.querySelector('.faq-content');

  item.addEventListener('click', () => {
    faqItems.forEach(i => {
      const c = i.querySelector('.faq-content');
      if (i !== item) {
        i.classList.remove('active');
        c.style.height = 0;
      }
    });

    if (item.classList.contains('active')) {
      content.style.height = 0;
      item.classList.remove('active');
    } else {
      item.classList.add('active');
      content.style.height = content.scrollHeight + "px";
    }
  });

  window.addEventListener('resize', () => {
    if (item.classList.contains('active')) {
      content.style.height = content.scrollHeight + "px";
    }
  });
});