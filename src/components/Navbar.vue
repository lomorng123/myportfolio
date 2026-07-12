<template>
  <nav :class="['navbar', { 'scrolled': isScrolled }]">
    <div class="container nav-content">
      <div class="logo">Portfolio<span>.</span></div>
      <div class="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact" class="btn-contact">Contact</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.5rem 0;
  transition: all var(--transition-fast);
  background: transparent;
}

.navbar.scrolled {
  padding: 1rem 0;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  
  /* Shining Gradient Effect */
  background: linear-gradient(
    to right, 
    var(--text-primary) 20%, 
    var(--primary-color) 40%, 
    var(--secondary-color) 60%, 
    var(--text-primary) 80%
  );
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: shine 4s linear infinite;
}

@keyframes shine {
  to {
    background-position: 200% center;
  }
}

.logo span {
  color: var(--primary-color);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-links a {
  color: var(--text-secondary);
  font-weight: 400;
  font-size: 0.9rem;
  font-family: var(--font-body);
  transition: color var(--transition-fast);
}

.nav-links a:hover {
  color: var(--primary-color);
}

.btn-contact {
  color: var(--primary-color) !important;
  padding: 0.5rem 1rem;
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  font-weight: 500;
  transition: all var(--transition-fast);
}

.btn-contact:hover {
  background: rgba(56, 189, 248, 0.1);
}
</style>
