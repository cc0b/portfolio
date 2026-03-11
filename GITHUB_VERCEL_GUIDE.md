# GitHub & Vercel Quick Start Guide

## What is GitHub?

GitHub is a platform for hosting code repositories. It's like a cloud backup for your code with version control built in. You can:
- Store your code safely in the cloud
- Track changes over time
- Collaborate with others
- Show your code to employers/recruiters

## What is Vercel?

Vercel is a hosting platform specifically built for Next.js apps. It:
- Automatically deploys your app whenever you push code to GitHub
- Hosts your website on a fast, global network
- Gives you a free subdomain (your-portfolio.vercel.app) or custom domain
- Handles SSL certificates automatically
- Provides analytics and performance monitoring

## Step-by-Step: GitHub + Vercel Setup

### Part 1: Create a GitHub Repository

1. **Go to [github.com](https://github.com)** and sign in (or create an account)

2. **Create a new repository**:
   - Click the "+" icon in the top-right corner
   - Select "New repository"
   - Repository name: `portfolio-website` (or whatever you prefer)
   - Description: "My personal portfolio website"
   - **Important**: Select "Public" (so recruiters can see your code)
   - Do NOT check "Initialize this repository with:" options
   - Click "Create repository"

3. **You'll see setup instructions**. Follow these commands on your computer**:

   ```bash
   # Navigate to your portfolio project folder
   cd ~/path/to/portfolio-starter
   
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Create first commit
   git commit -m "Initial commit: Portfolio website"
   
   # Rename branch to main (GitHub standard)
   git branch -M main
   
   # Add remote repository (replace YOUR_USERNAME and REPO_NAME)
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
   
   # Push to GitHub
   git push -u origin main
   ```

4. **Go back to your GitHub repository page** and refresh. Your code is now live on GitHub!

### Part 2: Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com)** and sign in with GitHub
   - Click "Sign up" if you don't have an account
   - Select "Continue with GitHub"
   - Authorize Vercel to access your GitHub account

2. **Import your project**:
   - Click "New Project"
   - You should see your `portfolio-website` repository listed
   - Click "Import"
   - Vercel will auto-detect it's a Next.js project (no changes needed)
   - Click "Deploy"

3. **Wait for deployment** (usually 1-2 minutes)
   - You'll see a progress indicator
   - Once complete, you'll get a URL like `https://portfolio-website.vercel.app`

4. **Visit your live site**!

### Part 3: Automatic Deployments

**From now on**, every time you:
1. Make changes to your code
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update about section"
   git push
   ```

Vercel **automatically rebuilds and deploys** your website. No additional steps needed!

## Common Questions

### Q: How do I update my portfolio?

A: 
1. Edit files on your computer
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update project description"
   git push
   ```
3. Vercel automatically redeploys (usually within 1-2 minutes)
4. Your live site updates!

### Q: Can I use a custom domain?

A: Yes! In Vercel project settings:
1. Go to your Vercel project dashboard
2. Navigate to "Settings" → "Domains"
3. Enter your custom domain
4. Follow instructions to update DNS records
5. Your site is now live at yourdomain.com

### Q: Is it free?

A: **Yes, completely free!**
- GitHub: Free for public repositories
- Vercel: Free tier includes unlimited deployments and good performance

### Q: Can recruiters see my code?

A: Yes! Since your repository is public, anyone can:
- View your code on GitHub
- See your commit history
- Clone your repository
- This is great for showing your work!

### Q: What if deployment fails?

A: Check Vercel's logs:
1. Go to your Vercel project
2. Click on the failed deployment
3. View the logs to see what went wrong
4. Common issues:
   - Missing dependencies (run `npm install`)
   - Typos in code (check for errors)
   - Environment variables (set them in Vercel settings if needed)

### Q: How do I add environment variables?

A: In Vercel dashboard:
1. Go to "Settings" → "Environment Variables"
2. Add key-value pairs (e.g., `NEXT_PUBLIC_API_URL = https://api.example.com`)
3. Redeploy

### Q: Can I undo changes?

A: **Through Git**, yes:
```bash
# See commit history
git log

# Revert to a previous commit
git revert <commit-hash>
git push
```

### Q: How do I check my site's performance?

A: Vercel provides built-in analytics:
1. Go to your Vercel project
2. Click "Analytics" tab
3. See page views, response times, etc.

## Workflow Summary

```
Edit Code
    ↓
git add .
git commit -m "message"
git push
    ↓
GitHub receives changes
    ↓
Vercel detects changes
    ↓
Vercel rebuilds & deploys
    ↓
Your live site updates! ✨
```

## Useful Git Commands

```bash
# Check status
git status

# See what you changed
git diff

# Undo uncommitted changes
git checkout -- .

# Undo last commit (keep changes)
git reset --soft HEAD~1

# See commit history
git log

# Clone someone else's repo
git clone https://github.com/username/repo.git
```

## Next Steps

1. ✅ Create GitHub account
2. ✅ Create portfolio repository
3. ✅ Push your code to GitHub
4. ✅ Create Vercel account
5. ✅ Connect GitHub repo to Vercel
6. ✅ Share your live portfolio URL!

---

**Need help?**
- GitHub Docs: https://docs.github.com
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs

Good luck! 🚀
