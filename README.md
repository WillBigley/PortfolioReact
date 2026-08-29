# William Bigley Portfolio

A responsive portfolio website built with React, TypeScript, Vite and CSS.

## Important customisation

Open:

`src/data/portfolio.ts`

Replace every placeholder beginning with:

- `YOUR-GITHUB-USERNAME`
- `YOUR-LINKEDIN-USERNAME`
- `YOUR-...-REPOSITORY`

Add your current CV to:

`public/William-Bigley-CV.pdf`

Only publish Shosha source code, screenshots or internal details if you have permission.

## Run locally

Install Node.js 20 or later, then open the project folder in Visual Studio Code.

In the terminal:

```bash
npm install
npm run dev
```

Vite will show a local address such as:

```text
http://localhost:5173
```

## Check the production build

```bash
npm run build
npm run preview
```

## Publish with GitHub Pages

### Option 1: Username site

Create a GitHub repository named:

```text
YOUR-GITHUB-USERNAME.github.io
```

Push this project to the repository.

In GitHub:

1. Open **Settings**
2. Open **Pages**
3. Under **Build and deployment**, select **GitHub Actions**

The included workflow will build and deploy the site.

Your site will be available at:

```text
https://YOUR-GITHUB-USERNAME.github.io/
```

### Option 2: Normal project repository

You can also use a repository such as:

```text
portfolio
```

Because `vite.config.ts` uses relative asset paths, it can be deployed as a project page.

## Useful commands

```bash
npm run dev
npm run build
npm run preview
```

## Project structure

```text
src/
├── components/
├── data/
├── App.tsx
├── main.tsx
├── styles.css
└── types.ts
```
