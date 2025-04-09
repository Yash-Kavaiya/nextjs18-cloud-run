# Next.js 18 on Cloud Run

This is a [Next.js](https://nextjs.org/) 18 application configured for deployment on [Google Cloud Run](https://cloud.google.com/run).

## Features

- Next.js 18 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Containerized with Docker
- Configured for Google Cloud Run deployment

## Local Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Building for Production

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## Docker Build

```bash
# Build the Docker image
docker build -t nextjs18-cloud-run .

# Run the Docker container locally
docker run -p 8080:8080 nextjs18-cloud-run
```

## Deploying to Cloud Run

### Manual Deployment

```bash
# Build the Docker image
docker build -t gcr.io/YOUR_PROJECT_ID/nextjs18-cloud-run .

# Push the image to Google Container Registry
docker push gcr.io/YOUR_PROJECT_ID/nextjs18-cloud-run

# Deploy to Cloud Run
gcloud run deploy nextjs18-cloud-run \
  --image gcr.io/YOUR_PROJECT_ID/nextjs18-cloud-run \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

### Automated Deployment with Cloud Build

This repository includes a `cloudbuild.yaml` file that can be used to set up automated deployments with Google Cloud Build.

```bash
# Trigger a build and deployment
gcloud builds submit --config cloudbuild.yaml
```

## Environment Variables

To add environment variables, you can:

1. For local development: Create a `.env.local` file
2. For Cloud Run: Add them in the deployment command or through the console

```bash
gcloud run deploy nextjs18-cloud-run \
  --image gcr.io/YOUR_PROJECT_ID/nextjs18-cloud-run \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars="KEY1=VALUE1,KEY2=VALUE2"
```