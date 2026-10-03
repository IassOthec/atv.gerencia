# NFT Gallery

A responsive NFT gallery built with React and Vite, inspired by the Frontend Mentor NFT Preview Card challenge.

## Features

- Responsive mobile, tablet and desktop layout
- Reusable `NFTCard` component
- `CardList` component rendering multiple NFT cards
- Responsive project header
- Card hover effects
- Entrance animations with Animate.css
- AI-ready image folder for replacing the included placeholder artwork
- GitHub Pages deployment configuration

## Technologies

- React
- Vite
- JavaScript
- CSS
- Animate.css
- Git
- GitHub
- GitHub Pages

## Project structure

```text
src/
├── components/
│   ├── Header/
│   ├── NFTCard/
│   └── CardList/
├── data/
│   └── nfts.js
├── App.jsx
└── main.jsx
```

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Git workflow

Suggested feature branches:

```text
feature/nft-card
feature/card-list
feature/header
```

Example English commits:

```text
feat: create NFT card component
feat: create card list component
feat: add card entrance animations
feat: create responsive header
docs: add project documentation
```

## GitHub Pages

Install the deployment package:

```bash
npm install
```

Then update the `homepage` field in `package.json` with your GitHub Pages URL and run:

```bash
npm run deploy
```

## Design reference

Inspired by the Frontend Mentor NFT Preview Card Component challenge:

https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U

## Animation

The project uses Animate.css:

https://animate.style/

## AI artwork

The image assets included in this starter are original SVG placeholders created for the project. For the assignment requirement, they can be replaced with artwork generated in Leonardo AI:

https://app.leonardo.ai/

## Author

Your Name

GitHub: https://github.com/your-username
