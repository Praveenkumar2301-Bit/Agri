# Vercel Deployment Guide

## Required: Set Root Directory

For this monorepo, you **must** set the Root Directory in Vercel:

1. Go to your project on [vercel.com](https://vercel.com)
2. **Settings** → **General**
3. **Root Directory** → Click **Edit**
4. Enter: `apps/web`
5. Save

This tells Vercel to use the Next.js app as the project root. Without this, you may see errors like "No Output Directory named 'public' found".

## Optional: Clear Output Directory

If you previously set **Output Directory** in Project Settings:

1. **Settings** → **General** → **Build & Development Settings**
2. **Output Directory** → Leave **empty** or remove any custom value
3. Next.js handles output automatically—do not set it to `public`

## Redeploy

After changing settings, trigger a new deployment from the **Deployments** tab.
