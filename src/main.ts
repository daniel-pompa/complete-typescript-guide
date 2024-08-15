import './assets/css/style.css';
import typescriptLogo from './assets/images/typescript.svg';
import { insertCurrentYear } from './utils';
import { genericClassExamples, TITLE } from './examples/generics/generic-class';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main>
    <header>
      <h1>Complete TypeScript Guide</h1>
    </header>
    <section>
      <h2>${TITLE}</h2>
      <div class="container">
        <img src=${typescriptLogo} alt="TypeScript Logo" class="logo" />
        <p>Contact me via the following channels</p>
        <div class="social-media-container">
          <a
            href="https://github.com/daniel-pompa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://skillicons.dev/icons?i=github"
              alt="GitHub Logo"
              class="social-media"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-pompa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://skillicons.dev/icons?i=linkedin"
              alt="LinkedIn Logo"
              class="social-media"
            />
          </a>
        </div>
        <p>&copy; <span id="year"></span> Daniel Pompa Pareja</p>
      </div>
    </section>
  </main>
`;

insertCurrentYear('year');

// Add the example you want to use here
genericClassExamples();
