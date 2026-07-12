<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title" v-reveal>About Me</h2>
      <div class="about-content">
        <div class="about-text" v-reveal>
          <p>
            Hello! My name is Thoeung Lomorng. I am currently a 3rd-year student and a passionate Full Stack Developer. I am skilled in building robust frontend interfaces using HTML, CSS, JavaScript, React JS, Vue JS, jQuery, Bootstrap, and Tailwind CSS.
          </p>
          <p>
            I specialize in building scalable backends with PHP and Laravel, while also crafting highly interactive frontend experiences using modern JavaScript frameworks like React and Vue. I thrive in environments where I can tackle complex problems and deliver clean, maintainable code.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul class="skills-list">
            <li>React JS</li>
            <li>Vue JS</li>
            <li>Laravel</li>
            <li>PHP</li>
            <li>MySQL</li>
          </ul>
          <div class="timeline-container">
            <div class="timeline-section">
              <h3>Experience</h3>
              <ul>
                <li>
                  <strong>Full Stack Developer (Internship)</strong>
                  <p>Developed responsive web applications and RESTful APIs using Laravel Sanctum.</p>
                  <p>Built complete CRUD systems, integrated Bakong KHQR payment for cashless transactions, and designed modern UI using React JS and Tailwind CSS.</p>
                </li>
              </ul>
            </div>

            <div class="timeline-section">
              <h3>Education</h3>
              <ul>
                <li>
                  <strong>Bachelor of Information Technology</strong>
                  <p>National Technical Training Institute (NTTI) | 2023 - Present</p>
                  <p class="mt-1 text-sm"><em>Currently a 3rd-year student.</em></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="about-image-wrapper" v-reveal>
          <div class="about-image">
            <img src="/my_photo.png" alt="Thoeung Lomorng" class="profile-img" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 100px 0;
}

.about-content {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
  align-items: center;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
  }
}

.about-text p {
  color: var(--text-secondary);
  font-size: 1.05rem;
  margin-bottom: 1.5rem;
}

/* Beautiful Pill Badges for Skills List */
.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 0;
  list-style: none;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
}

.skills-list li {
  background: rgba(56, 189, 248, 0.08);
  border: 1px solid rgba(56, 189, 248, 0.2);
  color: var(--primary-color);
  padding: 8px 18px;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: default;
  backdrop-filter: blur(4px);
}

.skills-list li:hover {
  background: rgba(56, 189, 248, 0.15);
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 5px 15px rgba(56, 189, 248, 0.25);
  border-color: rgba(56, 189, 248, 0.5);
  color: #fff;
}

.timeline-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.timeline-section {
  margin-top: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.timeline-section h3 {
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.timeline-section ul {
  list-style-type: none;
  padding: 0;
}

.timeline-section li {
  margin-bottom: 1.5rem;
}

.timeline-section strong {
  display: block;
  color: var(--primary-color);
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.timeline-section p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 0.25rem;
}

.about-image-wrapper {
  position: relative;
  max-width: 280px;
  margin: 0 auto;
}

.about-image {
  position: relative;
  border-radius: 8px;
  background-color: var(--primary-color);
  transition: all var(--transition-slow);
}

.about-image::before {
  content: '';
  position: absolute;
  top: 15px;
  left: 15px;
  width: 100%;
  height: 100%;
  border: 1px solid var(--primary-color);
  border-radius: 8px;
  z-index: -1;
  transition: all var(--transition-slow);
}

.about-image:hover {
  transform: translate(-4px, -4px);
}

.about-image:hover::before {
  transform: translate(8px, 8px);
}

.profile-img {
  width: 100%;
  border-radius: 8px;
  display: block;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1.1);
  transition: all var(--transition-slow);
}

.about-image:hover .profile-img {
  filter: none;
  mix-blend-mode: normal;
}
</style>
