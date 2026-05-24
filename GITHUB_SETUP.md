# GitHub Repository Setup Instructions

Since the automated GitHub repository creation encountered permission issues, here are the steps to manually create and push your portfolio to GitHub:

## Step 1: Create a New Repository on GitHub

1. Go to [github.com/new](https://github.com/new)
2. Fill in the repository details:
   - **Repository name**: `ai-engineer-portfolio`
   - **Description**: `Neo-futuristic AI/ML Engineer portfolio website built with React, Framer Motion, and Tailwind CSS`
   - **Visibility**: Public
   - **Initialize repository**: Leave unchecked (we already have a local repo)
3. Click "Create repository"

## Step 2: Add Remote and Push Code

Once the repository is created, copy the HTTPS URL and run these commands:

```bash
# Navigate to project directory
cd /path/to/ai-engineer-portfolio

# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/ai-engineer-portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push the code
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Verify the Upload

1. Visit your repository on GitHub: `https://github.com/YOUR_USERNAME/ai-engineer-portfolio`
2. Verify that all files are present:
   - `client/` directory with React components
   - `server/` directory with Express setup
   - `package.json` and configuration files
   - `README.md` with documentation
   - `.gitignore` to exclude node_modules

## Step 4: Optional - Add GitHub Pages Deployment

To enable automatic deployment to GitHub Pages:

1. Go to repository **Settings** → **Pages**
2. Under "Build and deployment":
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `dist/public`
3. Click "Save"

Then set up a GitHub Actions workflow to auto-build and deploy:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'pnpm'
      
      - name: Install pnpm
        run: npm install -g pnpm
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Build
        run: pnpm build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/public
```

## Step 5: Add Additional Branches (Optional)

Create branches for different purposes:

```bash
# Development branch
git checkout -b develop
git push -u origin develop

# Feature branches
git checkout -b feature/add-blog
git push -u origin feature/add-blog
```

## Step 6: Set Up Branch Protection (Optional)

1. Go to repository **Settings** → **Branches**
2. Click "Add rule" under "Branch protection rules"
3. Apply rules to `main` branch:
   - Require pull request reviews
   - Require status checks to pass
   - Dismiss stale pull request approvals

## Troubleshooting

### "fatal: remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/ai-engineer-portfolio.git
```

### "Permission denied (publickey)"
Ensure your SSH keys are set up or use HTTPS with personal access token:
```bash
git remote set-url origin https://YOUR_USERNAME:YOUR_TOKEN@github.com/YOUR_USERNAME/ai-engineer-portfolio.git
```

### "Everything up-to-date" but files not showing
```bash
git status
git add -A
git commit -m "Add all files"
git push origin main
```

## Next Steps

After pushing to GitHub:

1. **Add topics** to your repository (Settings → About):
   - `portfolio`
   - `react`
   - `tailwind-css`
   - `framer-motion`
   - `ai`
   - `machine-learning`

2. **Create a GitHub Pages site** for additional documentation

3. **Set up GitHub Discussions** for community engagement

4. **Add GitHub Actions** for automated testing and deployment

5. **Create releases** when you make significant updates

---

For more information, see [GitHub's documentation on creating repositories](https://docs.github.com/en/get-started/quickstart/create-a-repo).
