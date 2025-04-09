export default function Features() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Next.js 18 Features</h1>
      
      <div className="max-w-2xl">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">App Router</h2>
          <p>
            Next.js 18 includes an improved App Router built on React Server Components,
            which supports layouts, nested routing, loading states, error handling, and more.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Server Components</h2>
          <p>
            React Server Components allow you to write UI that can be rendered and optionally cached on the server.
            They reduce the client-side JavaScript bundle size and enable direct access to server-side resources.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Streaming</h2>
          <p>
            Next.js 18 supports streaming, which allows you to progressively render UI from the server.
            This helps improve both actual and perceived loading performance.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Turbopack</h2>
          <p>
            Next.js 18 includes an improved version of Turbopack, a Rust-based successor to Webpack
            that provides significantly faster development experience.
          </p>
        </div>
      </div>
    </main>
  );
}