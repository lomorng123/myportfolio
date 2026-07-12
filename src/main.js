import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// Custom directive for scroll reveal animation
app.directive('reveal', {
  mounted(el) {
    el.classList.add('reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Optional: only animate once
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });
    
    observer.observe(el);
  }
})

// Custom directive for mouse spotlight effect on cards
app.directive('spotlight', {
  mounted(el) {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty('--mouse-x', `${x}px`);
      el.style.setProperty('--mouse-y', `${y}px`);
    });
  }
})

// Custom directive for magnetic button effect
app.directive('magnetic', {
  mounted(el) {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transition = 'none';
      el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    el.addEventListener('mouseleave', () => {
      el.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      el.style.transform = 'translate(0px, 0px)';
    });
  }
})

app.mount('#app')
