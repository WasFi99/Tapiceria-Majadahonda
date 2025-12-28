export const AMP_CSS = `
  /* Reset & Basics */
  :root {
    --primary: #333333;
    --secondary: #b45309;
    --muted: #f5f5f4;
    --background: #ffffff;
    --foreground: #0c0a09;
    --font-serif: "Times New Roman", serif;
    --font-sans: system-ui, -apple-system, sans-serif;
  }
  
  body {
    margin: 0;
    font-family: var(--font-sans);
    background: var(--background);
    color: var(--foreground);
    line-height: 1.5;
  }
  
  a { text-decoration: none; color: inherit; }
  ul { list-style: none; padding: 0; margin: 0; }
  h1, h2, h3, h4 { margin: 0; font-family: var(--font-serif); }
  p { margin: 0 0 1rem 0; }
  button { background: none; border: none; cursor: pointer; }
  
  /* Utilities */
  .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
  .relative { position: relative; }
  .absolute { position: absolute; }
  .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
  .z-0 { z-index: 0; }
  .z-10 { z-index: 10; }
  .z-50 { z-index: 50; }
  .overflow-hidden { overflow: hidden; }
  .object-cover { object-fit: cover; }
  
  /* Flexbox */
  .flex { display: flex; }
  .flex-col { flex-direction: column; }
  .flex-wrap { flex-wrap: wrap; }
  .items-center { align-items: center; }
  .justify-between { justify-content: space-between; }
  .justify-center { justify-content: center; }
  .gap-1 { gap: 0.25rem; }
  .gap-2 { gap: 0.5rem; }
  .gap-4 { gap: 1rem; }
  .gap-6 { gap: 1.5rem; }
  .gap-8 { gap: 2rem; }
  .gap-12 { gap: 3rem; }
  
  /* Spacing */
  .p-2 { padding: 0.5rem; }
  .p-4 { padding: 1rem; }
  .px-4 { padding-left: 1rem; padding-right: 1rem; }
  .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
  .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
  .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
  .py-8 { padding-top: 2rem; padding-bottom: 2rem; }
  .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
  .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
  .mx-auto { margin-left: auto; margin-right: auto; }
  .mt-4 { margin-top: 1rem; }
  .mt-8 { margin-top: 2rem; }
  .mt-12 { margin-top: 3rem; }
  .mb-4 { margin-bottom: 1rem; }
  .mb-6 { margin-bottom: 1.5rem; }
  .mb-8 { margin-bottom: 2rem; }
  .mb-10 { margin-bottom: 2.5rem; }
  .mb-12 { margin-bottom: 3rem; }
  
  /* Sizing */
  .w-full { width: 100%; }
  .h-full { height: 100%; }
  .w-5 { width: 1.25rem; }
  .h-5 { height: 1.25rem; }
  .w-6 { width: 1.5rem; }
  .h-6 { height: 1.5rem; }
  
  /* Hero Specific Heights */
  .h-\\[85vh\\] { height: 85vh; }
  .min-h-\\[500px\\] { min-height: 500px; }
  .min-h-\\[400px\\] { min-height: 400px; }
  
  .max-w-xs { max-width: 20rem; }
  .max-w-xl { max-width: 36rem; }
  .max-w-2xl { max-width: 42rem; }
  .max-w-3xl { max-width: 48rem; }
  .max-w-4xl { max-width: 56rem; }
  
  /* Typography */
  .font-serif { font-family: var(--font-serif); }
  .font-bold { font-weight: 700; }
  .font-medium { font-weight: 500; }
  .italic { font-style: italic; }
  .uppercase { text-transform: uppercase; }
  .tracking-wide { letter-spacing: 0.025em; }
  .tracking-widest { letter-spacing: 0.1em; }
  .text-center { text-align: center; }
  .text-xs { font-size: 0.75rem; }
  .text-sm { font-size: 0.875rem; }
  .text-lg { font-size: 1.125rem; }
  .text-xl { font-size: 1.25rem; }
  .text-2xl { font-size: 1.5rem; }
  .text-3xl { font-size: 1.875rem; }
  .text-4xl { font-size: 2.25rem; }
  
  /* Colors & Backgrounds */
  .text-primary { color: var(--primary); }
  .text-secondary { color: var(--secondary); }
  .text-white { color: #fff; }
  .text-muted-foreground { color: #666; }
  .text-stone-100 { color: #f5f5f4; }
  .text-stone-400 { color: #a8a29e; }
  
  .bg-primary { background-color: var(--primary); }
  .bg-secondary { background-color: var(--secondary); }
  .bg-white { background-color: #ffffff; }
  .bg-stone-50 { background-color: #fafaf9; }
  .bg-slate-900 { background-color: #0f172a; }
  .bg-background { background-color: var(--background); }
  .bg-black\\/50 { background-color: rgba(0, 0, 0, 0.5); }
  .bg-black\\/70 { background-color: rgba(0, 0, 0, 0.7); }
  
  /* Specific Brand Colors */
  .bg-\\[\\#25D366\\] { background-color: #25D366; }
  
  /* Borders & Effects */
  .border { border-width: 1px; border-style: solid; }
  .border-b { border-bottom-width: 1px; border-style: solid; }
  .border-stone-100 { border-color: #f5f5f4; }
  .border-stone-200 { border-color: #e7e5e4; }
  
  .rounded { border-radius: 0.25rem; }
  .rounded-md { border-radius: 0.375rem; }
  .rounded-xl { border-radius: 0.75rem; }
  .rounded-full { border-radius: 9999px; }
  
  .shadow-md { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
  .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
  .shadow-xl { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }
  .drop-shadow-md { filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)); }
  .drop-shadow-lg { filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)); }
  
  .opacity-70 { opacity: 0.7; }
  
  /* Header specific */
  .header { height: 80px; display: flex; align-items: center; border-bottom: 1px solid #e5e5e5; }
  .logo { font-size: 1.5rem; font-weight: bold; font-family: var(--font-serif); }
  .nav-link { font-size: 0.875rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; padding: 0.5rem; }
  .nav-link:hover { color: var(--secondary); }

  /* Responsive Display Logic */
  .hidden { display: none; }
  .block { display: block; }
  .inline-flex { display: inline-flex; }
  
  @media (min-width: 640px) { /* sm */
    .sm\\:flex-row { flex-direction: row; }
    .sm\\:text-xl { font-size: 1.25rem; }
    .sm\\:text-5xl { font-size: 3rem; }
    .sm\\:max-w-md { max-width: 28rem; }
  }
  
  @media (min-width: 768px) { /* md */
    .md\\:hidden { display: none; }
    .md\\:flex { display: flex; }
    .md\\:block { display: block; }
    .md\\:gap-12 { gap: 3rem; }
    .md\\:w-1\\/2 { width: 50%; }
    .md\\:w-1\\/3 { width: 33.333333%; }
    .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .md\\:text-6xl { font-size: 3.75rem; }
  }
  
  /* Sidebar */
  amp-sidebar { width: 300px; background: white; padding: 2rem; }
  .sidebar-close { position: absolute; top: 1rem; right: 1rem; font-size: 1.5rem; cursor: pointer; }
  
  /* Grid */
  .grid { display: grid; }
  .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
`;


