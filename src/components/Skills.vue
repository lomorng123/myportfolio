<template>
  <section id="skills" class="skills">
    <div class="container">
      <h2 class="section-title" v-reveal>My Toolkit</h2>
      <div class="skills-grid">
        <div class="skill-category" v-for="(category, index) in skillsData" :key="category.name" v-reveal v-spotlight :class="`delay-${index + 1}`">
          <h3 class="category-title">{{ category.name }}</h3>
          <div class="skill-items">
            <div class="skill-item" v-for="skill in category.items" :key="skill">
              <span class="skill-icon">▹</span>
              {{ skill }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillsData = [
  {
    name: "Frontend",
    items: ["HTML5 & CSS3", "JavaScript", "React JS", "Vue JS", "Tailwind CSS", "Bootstrap", "jQuery"]
  },
  {
    name: "Backend",
    items: ["PHP", "Laravel Framework", "MySQL", "Microsoft SQL Server", "RESTful APIs (Sanctum)"]
  },
  {
    name: "Concepts & Tools",
    items: ["CRUD Systems", "Role-based Access Control", "Payment Integrations (KHQR)", "AJAX & DataTables"]
  }
];
</script>

<style scoped>
.skills {
  padding: 100px 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

.skill-category {
  background: var(--surface-color);
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  transition: transform var(--transition-slow), box-shadow var(--transition-slow);
  position: relative;
  overflow: hidden;
}

.skill-category::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  border-radius: inherit;
  background: radial-gradient(
    600px circle at var(--mouse-x, 0) var(--mouse-y, 0),
    rgba(56, 189, 248, 0.08),
    transparent 40%
  );
  z-index: 0;
  opacity: 0;
  transition: opacity var(--transition-fast);
  pointer-events: none;
}

.skill-category:hover::before {
  opacity: 1;
}

.skill-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  border-color: var(--surface-hover);
}

.category-title {
  position: relative;
  z-index: 1;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  display: inline-block;
  padding-bottom: 0.5rem;
}

.skill-items {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-family: var(--font-body);
}

.skill-item:hover {
  color: var(--primary-color);
}

.skill-icon {
  font-size: 0.8rem;
  color: var(--primary-color);
}
</style>
