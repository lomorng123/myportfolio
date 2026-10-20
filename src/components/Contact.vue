<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title" v-reveal>Get In Touch</h2>
      <div class="contact-content" v-reveal>
        <p class="contact-text">
          I am currently seeking internship or junior roles. Whether you have an opportunity or just want to connect, my inbox is always open!
        </p>
        <div class="contact-details">
          <p>📞 +855-719-442-517</p>
          <p>📧 thoeunglomorng1@gmail.com</p>
          <p>📍 Russian Blvd, Sangkat Teukthla, Khan Sen Sok, Phnom Penh</p>
        </div>
        <a href="https://t.me/Lomorng123" class="btn-primary" v-magnetic>Say Hello</a>
        
        <div class="social-links">
          <a href="https://github.com/lomorng123" aria-label="GitHub" v-magnetic>GitHub</a>
          <a href="https://www.linkedin.com/in/lomorng-thoeung-93067638a/" aria-label="LinkedIn" v-magnetic>LinkedIn</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 150px 0;
  text-align: center;
}

.contact-content {
  max-width: 600px;
  margin: 0 auto;
}

.contact-text {
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.7;
}

.contact-details {
  margin-bottom: 3rem;
  color: var(--text-secondary);
  font-size: 1.05rem;
  text-align: left;
  display: inline-block;
  background: var(--surface-color);
  padding: 1.5rem 2.5rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.contact-details p {
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

.contact-details p:last-child {
  margin-bottom: 0;
}

.btn-primary {
  display: inline-block;
  padding: 1rem 2rem;
  background: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all var(--transition-fast);
  margin-bottom: 4rem;
}

.btn-primary:hover {
  background: rgba(56, 189, 248, 0.1);
  transform: translateY(-2px);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.social-links a {
  color: var(--text-secondary);
  font-weight: 400;
  font-size: 0.95rem;
  font-family: var(--font-body);
  transition: color var(--transition-fast);
}

.social-links a:hover {
  color: var(--primary-color);
}
</style>
