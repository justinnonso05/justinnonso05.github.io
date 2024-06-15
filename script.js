document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('.cover')
    const menuContainer = document.querySelector('.menu-container');
    const body = document.body;

    setTimeout(() => {
        element.style.display = 'none'
    },8000);

    menuContainer.addEventListener('click', () => {
        body.classList.toggle('show-menu');
    });

    const links = document.querySelectorAll('.slide-menu a');

    links.forEach(link => {
        link.addEventListener('click', () => {
            body.classList.toggle('show-menu');
            //times.classList.remove('active');
            //bars.classList.add('show')
        }); 
    });

    window.addEventListener('scroll', function() {
        body.classList.remove('show-menu');
        var header = document.getElementById('header');
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    // ..........elements Animation..................
    const elements = document.querySelectorAll('.element');

    const observerOptions = {
      root: null, // Use the document’s viewport as the container
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the element is visible
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing the element
        }
      });
    }, observerOptions);
  
    elements.forEach(element => {
      observer.observe(element);
    });
    // ...............numCounter............

    const counters = document.querySelectorAll('.count');
    const speed = 150; // The lower the slower

    const countUp = (counter) => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    };

    const observer2 = new IntersectionObserver((entries, observer2) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                countUp(counter);
                observer2.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5
    });

    counters.forEach(counter => {
        observer2.observe(counter);
    });
});


