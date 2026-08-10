# RecoveryLab

## Purpose

RecoveryLab is a website that helps athletes and gym-goers safely recover from injuries. It provides personalised training programmes, rehabilitation advice, mobility routines and recovery plans tailored to individual needs, and educates users on injury prevention so they can return to training safely.

## Target Audience

18–45 year old athletes, gym-goers, runners, footballers, weightlifters, CrossFit athletes and anyone recovering from injury who wants to:

- Learn about common injuries
- Find a recovery programme suited to them
- Improve mobility and flexibility
- Build strength safely
- Understand when they are ready to return to sport
- Contact a coach for a personalised recovery plan

## Site Owner Goals

- Build trust within the fitness industry
- Generate new coaching clients
- Sell personalised rehabilitation programmes
- Encourage visitors to book consultations
- Grow an online community

## User Stories

**As an injured athlete, I want to apply for a recovery consultation through a short online form, so that I can get expert help without a lengthy or complicated sign-up process.**

**As a gym-goer recovering from injury, I want to browse a library of common injuries, so that I understand my condition before applying for a consultation.**

## Site Owner Story

**As the site owner, I want visitors to find clear, trustworthy information before booking, so that they feel confident applying for a consultation.**

## Features

- Home page with hero section and call-to-action
- Recovery Plan
- Injury library
- Contact page
- About page

## Navigation

Home | Recovery Plan | Injury Library | Contact| About 

## Design System

### Colour Palette

| Colour | Hex |
|---|---|
| Dark Blue | `#163A5F` |
| Emerald Green | `#2E8B57` |
| Orange | `#F97316` |
| White | `#FFFFFF` |
| Dark Grey | `#333333` |

### Typography

- **Headings:** Poppins Bold
- **Body:** Open Sans

## UX Design Rationale

_This section will be expanded once wireframes and mockups are complete. It will cover:_

- Information hierarchy and how content is prioritised on each page
- User flow through the site (from landing to booking a consultation)
- Interaction feedback (hover states, form validation, confirmation messages)
- Accessibility decisions (contrast ratios, alt text, keyboard navigation)
- How the design allows users to initiate and control actions (e.g. no forced pop-ups or autoplay media)

Wireframes and mockups will be added to a `/design` directory and referenced here as they are produced.

### Homepage Wireframe

![Homepage wireframe – desktop and mobile](design/recoverylab-homepage-wireframe.svg)

The homepage wireframe shows the main navigation (Homepage, Recovery Plan, Injury Library, Contact, About), a clear visual hierarchy from hero to feature cards to footer, and consistent card styling across the three feature highlights. The mobile layout collapses the navigation into a menu icon and restacks the feature cards vertically, preserving the same content order and priority as desktop.

## Accessibility

- Colour combinations checked against WCAG AA contrast requirements (4.5:1 minimum for body text)
- Alt text provided for all meaningful, content-bearing images (logo, feature icons, injury diagrams)
- Decorative background images (hero and testimonials sections) were implemented using CSS `background-image` rather than HTML `<img>` tags. This is a deliberate accessibility choice: since these images are purely atmospheric and convey no information beyond visual mood, WCAG guidance recommends excluding decorative images from screen reader content entirely, rather than describing them. CSS backgrounds achieve this automatically, as they are not exposed to assistive technology
- Semantic HTML used throughout for screen reader compatibility

## Responsive Design

The site is designed mobile-first and tested across the following breakpoints:

- Mobile: up to 768px (single-column layout, collapsed hamburger navigation)
- Tablet/Desktop: 769px and above (multi-column layouts, full horizontal navigation)

The primary breakpoint (`max-width: 768px`) was chosen to comfortably cover common mobile and small-tablet screen widths, with the layout scaling fluidly above that point rather than relying on additional fixed breakpoints.

## Tech Stack

- **HTML5** — semantic markup throughout
- **CSS3** — custom, hand-written styles (no framework), using media queries for responsive design
- **JavaScript (vanilla)** — interactivity, form validation, questionnaire logic
- **Google Fonts** — Poppins (headings), Open Sans (body)

No CSS/JS frameworks are used for this unit, in order to directly demonstrate front-end fundamentals (semantic HTML, custom CSS, and vanilla JS) as required by the assessment criteria.

## Testing Procedure

Testing was carried out in two forms throughout this project: automated code validation using industry-standard tools, and manual testing of functionality, navigation, and responsiveness across devices and browsers.

### Code Validation

Validation was a continuous process throughout development, not left until the end — issues were noted and fixed at the point of discovery to prevent small problems compounding later. In the final stage of development, formal validation tools were used to systematically confirm the codebase met web standards.

### HTML Validation — [validator.w3.org](https://validator.w3.org)

Each page (Home, Recovery Plan, Injury Library, Contact, About) was validated individually via the deployed GitHub Pages URLs. All five pages returned:

> Document checking completed. No errors or warnings to show.

### CSS Validation — [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator)

The site's single stylesheet (`assets/css/style.css`) was validated via its live URL and returned no errors or warnings.

### JavaScript Validation — [jshint.com](https://jshint.com)

The site's JavaScript (`assets/js/script.js`) was pasted into JSHint for linting. The first run returned 13 warnings, all related to ES6 syntax:
'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
'template literal syntax' is only available in ES6 (use 'esversion: 6').

These warnings were caused by JSHint's default configuration targeting ES5, an older JavaScript standard that predates `const`, `let`, arrow functions, and template literals. Adding `/* jshint esversion: 6 */` at the top of the file configured the linter to check against ES6 — the standard actually used in this project — which resolved all 13 warnings. This confirmed the JavaScript itself contained no genuine errors, the warnings were a linter configuration mismatch, not a code defect.

### Manual Testing

Testing was carried out continuously throughout development rather than only at the end, with issues identified and resolved as soon as they were discovered. Formal cross-browser and device testing was carried out once each page's core build was complete.

### Devices & Browsers Tested

| Device | Browser | Notes |
|---|---|---|
| MacBook Pro (desktop) | Safari | Primary development/testing browser |
| MacBook Pro (desktop) | Opera | Used to cross-check rendering consistency |
| iPhone (mobile) | Safari | Used to test responsive breakpoint and mobile navigation |

### Test Cases — User Story Validation

| User Story | Test | Result |
|---|---|---|
| As an injured athlete, I want to apply for a recovery consultation through a short online form | Submit form with all required fields completed | ✅ Confirmation message displays, form resets |
| | Submit form with required fields left empty | ✅ Red error messages appear per field, submission blocked |
| | Submit form with an invalid email format | ✅ "Please enter a valid email address" error shown |
| As a gym-goer recovering from injury, I want to browse a library of common injuries | Navigate to Injury Library and view all 6 entries | ✅ All entries display with heading, description, and diagram |
| Site-wide navigation | Click each nav link on desktop | ✅ All links navigate to the correct page |
| | Open/close mobile menu via hamburger icon | ✅ Menu toggles open and closed, `aria-expanded` updates correctly |
| Responsive layout | Resize browser below 768px width | ✅ Nav collapses to hamburger, feature cards stack, layout remains readable |

### Bugs Found & Fixed

| Bug | Cause | Fix |
|---|---|---|
| Stylesheet not loading; page rendered unstyled | Duplicated quotation marks on multiple HTML attributes (e.g. `rel=""stylesheet"`), corrupting the `<link>` tag | Corrected all malformed attribute quotes across `index.html` |
| Mobile navigation menu overlapped the hamburger toggle button | `.main-nav` remained a row-based flex container on mobile instead of wrapping | Added `flex-wrap: wrap` and `flex-basis: 100%` to force the menu onto its own line |
| Hamburger icon rendered below the nav menu instead of above it | Missing `order` values on flex children | Set explicit `order` values on `.nav-toggle` and `.nav-menu` |
| Hero background image not displaying | Invalid space between `linear-gradient` and its opening parenthesis, invalidating the CSS declaration | Removed the space so the function syntax was valid |
| CSS syntax errors cascading across the stylesheet | A missing semicolon after one property value | Added the missing semicolon; confirmed fix via VS Code's Problems panel |
| JSHint reported 13 warnings on `script.js` | Linter defaulted to ES5, flagging valid ES6 syntax (`const`, `let`, arrow functions, template literals) as errors | Added `/* jshint esversion: 6 */` to the top of the file, resolving all warnings |

All bugs listed above were identified through manual testing in-browser and resolved before final deployment. No known issues remain in the current build.

## Deployment

This site is deployed using **GitHub Pages**, directly from the `main` branch of this repository.

**Steps taken to deploy:**
1. Pushed the completed project to the `main` branch on GitHub
2. In the repository, navigated to **Settings > Pages**
3. Under **Source**, selected the `main` branch and the `/ (root)` folder
4. Saved, and GitHub Pages automatically built and published the site
5. The live site is available at: `https://s-azzouz.github.io/recovery-lab/`

Any future changes pushed to `main` are automatically redeployed by GitHub Pages within a few minutes.

## Attribution

- **Background images** (hero and testimonials sections) sourced from [Unsplash](https://unsplash.com), free to use under the Unsplash License.
- **Fonts**: Poppins and Open Sans, sourced from [Google Fonts](https://fonts.google.com), free to use under the Open Font License.
- **Icons and diagrams**: all icons, the site logo, and the injury body-diagrams are custom-made SVGs created specifically for this project.
- No other external code libraries or frameworks were used; all HTML, CSS, and JavaScript were hand-written.

## Development Process

This project is developed using Git, with a separate commit for each feature or major adjustment. Commit messages describe what changed and why.