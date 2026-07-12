<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2 class="section-title" v-reveal>Some Things I've Built</h2>
      <div class="projects-grid">
        <div class="project-card" v-for="(project, index) in projects" :key="project.title" v-reveal v-spotlight :class="`delay-${index + 1}`">
          <div class="project-image">
            <img :src="project.image" :alt="project.title" />
            <div class="overlay"></div>
          </div>
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <ul class="project-tech">
              <li v-for="tech in project.tech" :key="tech">{{ tech }}</li>
            </ul>
            <div class="project-links">
              <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer" class="btn-icon">🔗 Live Demo</a>
              <a href="#" class="btn-icon">📁 Source Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: "Laravel E-Commerce & Payment API",
    description: "A full-featured e-commerce platform. Developed user authentication, role-based access control, and a comprehensive dashboard. Implemented secure RESTful APIs using Laravel Sanctum and integrated Bakong KHQR payment for cashless transactions.",
    image: "/project_ecommerce.png",
    tech: ["React JS", "Laravel", "PHP", "MySQL", "Sanctum", "KHQR"],
    link: "https://e-commerce-self-pi-65.vercel.app/"
  },
  {
    title: "Food Delivery Platform",
    description: "A dynamic food delivery application. Built complete CRUD systems with AJAX, DataTables, and image upload functionality. Designed modern, mobile-friendly user interfaces ensuring highly responsive web application experiences.",
    image: "/project_food.png",
    tech: ["React JS", "Vite", "Tailwind CSS", "Bootstrap", "AJAX"],
    link: "https://food-delivery-pi-lyart.vercel.app/"
  }
];
</script>

<style scoped>
.projects {
  padding: 100px 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .project-content {
    padding: 1.5rem;
  }
}

.project-card {
  background: var(--surface-color);
  border-radius: 8px;
  border: 1px solid var(--border-color);
  overflow: hidden;
  transition: transform var(--transition-slow), box-shadow var(--transition-slow);
  display: flex;
  flex-direction: column;
  position: relative;
}

.project-card::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  border-radius: inherit;
  background: radial-gradient(
    600px circle at var(--mouse-x, 0) var(--mouse-y, 0),
    rgba(255, 255, 255, 0.08),
    transparent 40%
  );
  z-index: 10;
  opacity: 0;
  transition: opacity var(--transition-fast);
  pointer-events: none;
}

.project-card:hover::before {
  opacity: 1;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
}

.project-image {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  border-bottom: 1px solid var(--border-color);
  background-color: #ffffff;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform var(--transition-slow);
}

.project-card:hover .project-image img {
  transform: scale(1.02);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.3);
  transition: opacity var(--transition-slow);
}

.project-card:hover .overlay {
  opacity: 0;
}

.project-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-title {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.project-description {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  flex-grow: 1;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
  margin-bottom: 1.5rem;
}

.project-tech li {
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.project-links {
  display: flex;
  gap: 1rem;
}

.btn-icon {
  font-size: 0.85rem;
  color: var(--text-primary);
  font-weight: 500;
}

.btn-icon:hover {
  color: var(--primary-color);
}
</style>
