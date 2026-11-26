# Portfolio website template

A responsive portfolio with a dark palette, a left-side hamburger menu, and animated tech badges. The HTML is self-contained.

## Customize

Edit `portfolio-preview.html` to change the name, bio, stack, projects, and contact links. Open the file in a browser to preview it locally. Replace the example projects and contact placeholders before sharing the finished portfolio.

## Deploy to GitHub Pages

1. Put `portfolio-preview.html` and `.github/workflows/pages.yml` on the repository's `main` branch.
2. In the repository, go to **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. In **Actions**, select **Deploy portfolio to GitHub Pages → Run workflow** and choose `main`.
4. After the run succeeds, open the URL shown in the deployment. Later pushes to `main` that change the HTML or the workflow deploy automatically.

The workflow packages only the HTML as `index.html`. No dependencies or deployment secrets are required.
