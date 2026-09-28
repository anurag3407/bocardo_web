This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Cloudflare Deployment

This project is configured for deployment to **Cloudflare Workers** using [`@opennextjs/cloudflare`](https://open-next.js.org/cloudflare) and [Wrangler](https://developers.cloudflare.com/workers/wrangler/).

### 1. Local Cloudflare Preview (workerd runtime)

To test the application locally in the Cloudflare `workerd` runtime:

```bash
# Build the Cloudflare Worker bundle
npm run build:worker

# Run the local Cloudflare dev server on port 8771
npm run dev:worker

# Or run both in a single step
npm run preview:worker
```

### 2. Deploy via Wrangler CLI

1. Authenticate with your Cloudflare account (one-time):
   ```bash
   npx wrangler login
   ```

2. Deploy directly:
   ```bash
   npm run deploy
   ```

### 3. Deploy via Cloudflare Dashboard (Git Integration)

1. Push your repository to GitHub or GitLab.
2. In the [Cloudflare Dashboard](https://dash.cloudflare.com/), go to **Compute (Workers) > Workers & Pages > Create > Connect Git**.
3. Select your repository.
4. Set the build configurations:
   - **Framework Preset**: None / Next.js
   - **Build Command**: `npm run build:worker`
   - **Build Output Directory**: `.open-next/assets` (Worker script loaded from `.open-next/worker.js` as defined in `wrangler.jsonc`)
   - **Root Directory**: `/`
5. Click **Save and Deploy**.

### 4. Continuous Deployment via GitHub Actions

A CI/CD workflow is included at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). To activate automatic deployments on `git push main`:
1. In your GitHub repository, navigate to **Settings > Secrets and variables > Actions**.
2. Add:
   - `CLOUDFLARE_API_TOKEN`: Cloudflare API token with `Workers:Edit` permissions.
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare Account ID (found on the right sidebar of the Cloudflare dashboard).

