# A little birthday universe for Ayushi 🌷

A cute, pastel, multi-page birthday surprise made with plain HTML, CSS and JavaScript. No framework, build step, backend, or paid subscription needed.

## Pages

- `index.html` — welcome screen
- `letter.html` — birthday letter with a gentle, slightly flirty line
- `memories.html` — appreciation cards
- `cake.html` — interactive cake, wish moment, and confetti
- `style.css` — shared design and responsive styling
- `script.js` — cake interaction and confetti

## Run it locally

1. Download and unzip the project.
2. Open the `ayushi-birthday-surprise` folder.
3. Double-click `index.html` to open it in your browser.

## Personalize it further

### Change the letter

Open `letter.html` and edit the paragraphs inside `<article class="letter-card">`. Keep it honest and use details that are actually true about your friendship.

### Add photos

Create a folder called `photos`, add your images, then add image markup to `memories.html`. Only add photos you have permission to share. GitHub Pages sites are publicly accessible.

### Change colors

Edit the CSS variables at the top of `style.css`, especially `--bg`, `--pink`, `--rose`, and `--lilac`.

## Publish free with GitHub Pages

1. Upload the contents of this folder to the repository root.
2. Open repository **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Choose branch **main** and folder **/(root)**, then click **Save**.
5. Wait for deployment. Under Settings → Pages, click **Visit site**.

Your address will look like `https://YOUR-GITHUB-USERNAME.github.io/ayushi-birthday-surprise/`.

## Important

- The site is static, so it does not collect form submissions or personal information.
- Anyone with the published URL can view the website. Avoid private messages or photos you would not want public.
- Google Fonts is an optional online font source; if it is unavailable, the site falls back to standard fonts.

## Photo files and deployment

The gallery in `memories.html` is already wired to these filenames:
- `photos/ayushi-1.jpg`
- `photos/ayushi-2.jpg`
- `photos/ayushi-3.jpg`

Add photos that you have permission to share with those exact names. Until those files are added, the gallery shows pretty placeholder cards.

A GitHub Actions workflow at `.github/workflows/pages.yml` publishes the static site on every push to `main`. On the repository's **Settings → Pages** screen, ensure the Pages source/build setup allows GitHub Actions, and check **Actions** for the deployment result. If the project has never had Pages enabled, the first deployment may require choosing **GitHub Actions** as the build and deployment source in Settings → Pages.
