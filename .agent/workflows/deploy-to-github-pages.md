---
description: How to deploy the Next.js portfolio to GitHub Pages
---

1. **Initialize Git (if not already done)**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a Repository on GitHub**
   - Go to [GitHub.com/new](https://github.new)
   - Create a new repository (e.g., `portfolio`)
   - Do **not** initialize with README, .gitignore, or License (you already have them).

3. **Push your code**
   ```bash
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
   git push -u origin main
   ```

4. **Configure GitHub Pages**
   - Go to your repository on GitHub.
   - Click **Settings** > **Pages** (in the sidebar).
   - Under **Build and deployment**, select **GitHub Actions** from the Source dropdown.
   - The custom workflow `Deploy to GitHub Pages` should automatically be picked up.

5. **Verify Deployment**
   - Go to the **Actions** tab in your repository to see the build progress.
   - Once finished, your site will be live at `https://<YOUR_USERNAME>.github.io/<REPO_NAME>` (or just `github.io` if it's your main user site).
