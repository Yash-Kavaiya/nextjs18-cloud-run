export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">About This Application</h1>
      
      <div className="max-w-2xl">
        <p className="mb-4">
          This is a demo Next.js 18 application configured for Google Cloud Run deployment.
          It showcases the latest features of Next.js 18 including improved App Router,
          server components, and more.
        </p>
        
        <p className="mb-4">
          The application is containerized using Docker and optimized for Cloud Run
          with the Next.js standalone output option.
        </p>
        
        <p className="mb-4">
          Technologies used:
        </p>
        
        <ul className="list-disc list-inside mb-4 ml-4">
          <li>Next.js 18</li>
          <li>React 18</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Docker</li>
          <li>Google Cloud Run</li>
        </ul>
      </div>
    </main>
  );
}