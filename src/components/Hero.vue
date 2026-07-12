<template>
  <section id="home" class="hero" @mousemove="onHeroMouseMove">
    <!-- Parallax Particles -->
    <div class="particles-container">
      <div class="particle p1" :style="{ transform: `translate(${mouseOffsetX * -0.05}px, ${mouseOffsetY * -0.05}px)` }"></div>
      <div class="particle p2" :style="{ transform: `translate(${mouseOffsetX * 0.08}px, ${mouseOffsetY * 0.08}px)` }"></div>
      <div class="particle p3" :style="{ transform: `translate(${mouseOffsetX * -0.03}px, ${mouseOffsetY * -0.03}px)` }"></div>
      <div class="particle p4" :style="{ transform: `translate(${mouseOffsetX * 0.06}px, ${mouseOffsetY * 0.06}px)` }"></div>
    </div>

    <!-- Spotlight Glow -->
    <div class="spotlight" :style="{ background: `radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(56, 189, 248, 0.12), transparent 40%)` }"></div>

    <div class="container hero-content">
      <div class="hero-text" v-reveal>
        <div class="tilt-wrapper" :style="{ transform: `perspective(1000px) rotateX(${mouseOffsetY * -0.015}deg) rotateY(${mouseOffsetX * 0.015}deg)` }">
          <p class="greeting">Hi, my name is</p>
          <h1 class="name">{{ typedName }}</h1>
          <h1 class="role">
            <span class="jump-word" style="animation-delay: 0.1s">I</span>
            <span class="jump-word" style="animation-delay: 0.2s">build</span>
            <span class="jump-word" style="animation-delay: 0.3s">things</span>
            <span class="jump-word" style="animation-delay: 0.4s">for</span>
            <span class="jump-word" style="animation-delay: 0.5s">the</span>
            <span class="jump-word" style="animation-delay: 0.6s">web.</span>
          </h1>
          <p class="description">
            I'm a Full Stack Developer specializing in building exceptional digital experiences. Currently, I'm focused on developing robust web applications using React JS, Vue JS, Laravel, and modern backend technologies.
          </p>
          <div class="hero-actions">
            <a href="#projects" class="btn-primary" v-magnetic>Check out my work</a>
          </div>
        </div>
      </div>

      <!-- 3D Orbital Tech Visual -->
      <div class="hero-visual" v-reveal>
        <div class="orbit-container" :style="{ transform: `perspective(1000px) rotateX(${mouseOffsetY * -0.02}deg) rotateY(${mouseOffsetX * 0.02}deg)` }">
          <div class="orbit-center">
            <div class="core-pulse"></div>
          </div>
          <div class="orbit-ring ring-1">
            <div class="satellite sat-1"></div>
          </div>
          <div class="orbit-ring ring-2">
            <div class="satellite sat-2"></div>
            <div class="satellite sat-3"></div>
          </div>
          <div class="orbit-ring ring-3">
            <div class="satellite sat-4"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="background-grid"></div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const typedName = ref('');
const fullName = 'Thoeung Lomorng.';

// Parallax Mouse Effect
const mouseOffsetX = ref(0);
const mouseOffsetY = ref(0);
const mouseX = ref(-1000); // Start off-screen
const mouseY = ref(-1000);

const onHeroMouseMove = (e) => {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
  mouseOffsetX.value = e.clientX - window.innerWidth / 2;
  mouseOffsetY.value = e.clientY - window.innerHeight / 2;
};

onMounted(() => {
  let i = 0;
  const typeWriter = () => {
    if (i < fullName.length) {
      typedName.value += fullName.charAt(i);
      i++;
      setTimeout(typeWriter, 100); // Typing speed
    }
  };
  
  // Start the typing effect after a short delay
  setTimeout(typeWriter, 500);
});
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 80px;
  overflow: hidden;
}

/* Spotlight Effect */
.spotlight {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  mix-blend-mode: screen;
}

/* Tilt Wrapper */
.tilt-wrapper {
  transition: transform 0.1s ease-out;
  transform-style: preserve-3d;
}

/* Parallax Particles */
.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.particle {
  position: absolute;
  border-radius: 50%;
  background: var(--primary-color);
  box-shadow: 0 0 20px var(--primary-color);
  opacity: 0.6;
  transition: transform 0.1s linear;
}

.p1 { width: 8px; height: 8px; top: 20%; left: 15%; animation: float 6s ease-in-out infinite; }
.p2 { width: 15px; height: 15px; top: 60%; left: 80%; background: var(--secondary-color); box-shadow: 0 0 20px var(--secondary-color); animation: float 8s ease-in-out infinite reverse; }
.p3 { width: 5px; height: 5px; top: 75%; left: 10%; animation: float 5s ease-in-out infinite 1s; }
.p4 { width: 12px; height: 12px; top: 30%; left: 75%; animation: float 7s ease-in-out infinite 2s; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.hero-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  width: 100%;
  gap: 2rem;
}

.hero-text {
  flex: 1;
  max-width: 600px;
}

/* 3D Orbital Tech Visual */
.hero-visual {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 400px;
}

.orbit-container {
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.1s ease-out;
  transform-style: preserve-3d;
}

.orbit-center {
  width: 60px;
  height: 60px;
  background: var(--primary-color);
  border-radius: 50%;
  box-shadow: 0 0 40px var(--primary-color);
  position: absolute;
  z-index: 10;
}

.core-pulse {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--primary-color);
  animation: pulse-core 2s infinite ease-in-out alternate;
}

.orbit-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  animation: spin linear infinite;
  transform-style: preserve-3d;
}

.ring-1 { width: 180px; height: 180px; animation-duration: 10s; }
.ring-2 { width: 280px; height: 280px; animation-duration: 15s; animation-direction: reverse; }
.ring-3 { width: 380px; height: 380px; border: 1px solid rgba(255, 255, 255, 0.05); animation-duration: 25s; }

.satellite {
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: var(--secondary-color);
  box-shadow: 0 0 15px var(--secondary-color);
}

/* Position satellites on rings */
.sat-1 { top: -7.5px; left: 50%; transform: translateX(-50%); }
.sat-2 { background: #61dafb; box-shadow: 0 0 15px #61dafb; top: 50%; left: -7.5px; transform: translateY(-50%); }
.sat-3 { background: #42b883; box-shadow: 0 0 15px #42b883; top: 50%; left: 100%; transform: translate(-50%, -50%); }
.sat-4 { background: #ff2d20; box-shadow: 0 0 15px #ff2d20; top: 100%; left: 50%; transform: translate(-50%, -50%); }

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes pulse-core {
  0% { transform: scale(0.9); box-shadow: 0 0 20px var(--primary-color); }
  100% { transform: scale(1.2); box-shadow: 0 0 60px var(--primary-color); }
}

@media (max-width: 992px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
  .hero-text {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .name {
    justify-content: center;
  }
  .hero-visual {
    transform: scale(0.6);
    margin-top: -50px;
    min-height: auto;
  }
}

.greeting {
  color: var(--primary-color);
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
}

.name, .role {
  font-size: clamp(40px, 8vw, 70px);
  line-height: 1.1;
  font-weight: 700;
}

.name {
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
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
  animation: name-shine 5s linear infinite;
  filter: drop-shadow(0 0 15px rgba(56, 189, 248, 0.4));
}

@keyframes name-shine {
  to {
    background-position: 200% center;
  }
}

.role {
  font-size: clamp(40px, 8vw, 70px);
  line-height: 1.1;
  font-weight: 700;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
}

.jump-word {
  display: inline-block;
  margin-right: 0.3em;
  animation: jump 3s infinite cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes jump {
  0%, 20%, 100% { transform: translateY(0); }
  10% { 
    transform: translateY(-15px); 
    color: var(--primary-color); 
  }
}

.description {
  color: var(--text-secondary);
  font-size: 1.15rem;
  max-width: 540px;
  margin-bottom: 3rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

.btn-primary {
  display: inline-block;
  padding: 1rem 1.75rem;
  background: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn-primary:hover {
  background: rgba(56, 189, 248, 0.1);
  transform: translateY(-2px);
}

/* Professional Background Grid */
.background-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-size: 50px 50px;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, black 20%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 20%, transparent 100%);
  pointer-events: none;
}
</style>
