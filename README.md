# RecoveryLab

## Purpose

RecoveryLab is a website that helps athletes and gym-goers safely recover from injuries. It provides personalised training programmes, rehabilitation advice, mobility routines and recovery plans tailored to individual needs, and educates users on injury prevention so they can return to training safely.

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
- Alt text provided for all non-text content
- Semantic HTML used throughout for screen reader compatibility

## Responsive Design

The site is designed mobile-first and tested across the following breakpoints:

- Mobile: _TBC_
- Tablet: _TBC_
- Desktop: _TBC_

## User Stories

As a customer I would like to see clear navigation and structuring of the site I am visiting, the layout should be clear and easy to navigate, and I would like to be able to view clearly the purpose of the site and what it is offering me. As an injured athlete, I want a clear call-to-action on the homepage, so that I know what to do next (e.g. start assessment, book consultation).

## Tech Stack

_TBC_

## Testing Procedure

## Code Validation

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

## Manual Testing

_[This section still needs completing — see note below]_

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
