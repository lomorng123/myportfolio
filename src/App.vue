<template>
  <div class="app-container" @mousemove="onMouseMove">
    <!-- Custom Cursor -->
    <div class="cursor-dot" :style="{ left: `${mouseX}px`, top: `${mouseY}px` }"></div>
    <div class="cursor-outline" :class="{ 'cursor-hover': isHovering }" :style="{ left: `${outlineX}px`, top: `${outlineY}px` }"></div>

    <!-- Animated Running Border -->
    <div class="screen-border">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- Attractive Animated Background -->
    <div class="ambient-bg">
      <div class="color-blob blob-1"></div>
      <div class="color-blob blob-2"></div>
      <div class="color-blob blob-3"></div>
    </div>

    <div class="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer class="footer">
        <div class="container">
          <p>Designed & Built by Thoeung Lomorng</p>
          <p class="footer-tech">Built with Vue 3 & Vite</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';

// Custom Cursor Logic
const mouseX = ref(window.innerWidth / 2);
const mouseY = ref(window.innerHeight / 2);
const outlineX = ref(window.innerWidth / 2);
const outlineY = ref(window.innerHeight / 2);
const isHovering = ref(false);

const onMouseMove = (e) => {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
  
  // Detect if hovering over clickable element
  const target = e.target;
  isHovering.value = !!target.closest('a, button, .project-card, .skill-category');
};

let animationFrame;
const animateOutline = () => {
  // Smooth lerp for trailing cursor
  outlineX.value += (mouseX.value - outlineX.value) * 0.15;
  outlineY.value += (mouseY.value - outlineY.value) * 0.15;
  animationFrame = requestAnimationFrame(animateOutline);
};

onMounted(() => {
  animateOutline();
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrame);
});
</script>

<style>
/* Global Cursor Hide */
body, a, button, .project-card, .skill-category {
  cursor: none !important;
}

/* Custom Cursor Styles */
.cursor-dot {
  position: fixed;
  width: 8px;
  height: 8px;
  background-color: var(--primary-color);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  transition: opacity 0.3s;
}

.cursor-outline {
  position: fixed;
  width: 40px;
  height: 40px;
  border: 1px solid var(--primary-color);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9998;
  transition: width 0.3s, height 0.3s, background-color 0.3s, border-color 0.3s;
}

.cursor-outline.cursor-hover {
  width: 60px;
  height: 60px;
  background-color: rgba(56, 189, 248, 0.1);
  border-color: transparent;
  backdrop-filter: blur(2px);
}

/* Animated Running Border */
.screen-border {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
}

.screen-border span {
  position: absolute;
  filter: drop-shadow(0 0 10px var(--primary-color));
}

.screen-border span:nth-child(1) {
  top: 0; left: 0; width: 100%; height: 3px;
  background: linear-gradient(to right, transparent, var(--primary-color));
  animation: run-top 4s linear infinite;
}
.screen-border span:nth-child(2) {
  top: 0; right: 0; width: 3px; height: 100%;
  background: linear-gradient(to bottom, transparent, var(--primary-color));
  animation: run-right 4s linear infinite;
  animation-delay: 1s;
}
.screen-border span:nth-child(3) {
  bottom: 0; right: 0; width: 100%; height: 3px;
  background: linear-gradient(to left, transparent, var(--primary-color));
  animation: run-bottom 4s linear infinite;
  animation-delay: 2s;
}
.screen-border span:nth-child(4) {
  bottom: 0; left: 0; width: 3px; height: 100%;
  background: linear-gradient(to top, transparent, var(--primary-color));
  animation: run-left 4s linear infinite;
  animation-delay: 3s;
}

@keyframes run-top {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
@keyframes run-right {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}
@keyframes run-bottom {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
@keyframes run-left {
  0% { transform: translateY(100%); }
  100% { transform: translateY(-100%); }
}
</style>

<style scoped>
.portfolio-app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

.footer {
  text-align: center;
  padding: 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer p {
  color: var(--text-secondary);
  font-family: var(--font-heading);
  font-size: 0.9rem;
}

.footer .footer-tech {
  font-size: 0.85rem;
  margin-top: 0.5rem;
}

/* Attractive Animated Background Styles */
.ambient-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  background: var(--bg-color);
  pointer-events: none;
}

.color-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.4;
  animation: blob-float 20s infinite alternate cubic-bezier(0.4, 0, 0.2, 1);
}

.blob-1 {
  top: -10%;
  left: -10%;
  width: 50vw;
  height: 50vw;
  background: rgba(56, 189, 248, 0.15); /* Primary cyan */
  animation-delay: 0s;
}

.blob-2 {
  bottom: -20%;
  right: -10%;
  width: 60vw;
  height: 60vw;
  background: rgba(129, 140, 248, 0.12); /* Secondary indigo */
  animation-delay: -5s;
}

.blob-3 {
  top: 40%;
  left: 50%;
  width: 40vw;
  height: 40vw;
  background: rgba(192, 132, 252, 0.1); /* Soft purple */
  transform: translateX(-50%);
  animation-delay: -10s;
}

@keyframes blob-float {
  0% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(5%, 5%) scale(1.05);
  }
  66% {
    transform: translate(-2%, 8%) scale(0.95);
  }
  100% {
    transform: translate(-5%, -2%) scale(1.02);
  }
}
</style>
