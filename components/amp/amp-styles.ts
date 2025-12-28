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
  
  /* Utilities */
  .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
  .text-center { text-align: center; }
  .flex { display: flex; }
  .flex-col { flex-direction: column; }
  .items-center { align-items: center; }
  .justify-between { justify-content: space-between; }
  .justify-center { justify-content: center; }
  .gap-2 { gap: 0.5rem; }
  .gap-4 { gap: 1rem; }
  .gap-6 { gap: 1.5rem; }
  .py-8 { padding-top: 2rem; padding-bottom: 2rem; }
  .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
  .px-4 { padding-left: 1rem; padding-right: 1rem; }
  .w-full { width: 100%; }
  .font-bold { font-weight: 700; }
  .uppercase { text-transform: uppercase; }
  .tracking-widest { letter-spacing: 0.1em; }
  .text-sm { font-size: 0.875rem; }
  .text-xl { font-size: 1.25rem; }
  .text-3xl { font-size: 1.875rem; }
  
  /* Colors */
  .text-primary { color: var(--primary); }
  .text-secondary { color: var(--secondary); }
  .text-white { color: #fff; }
  .text-muted-foreground { color: #666; }
  .bg-primary { background-color: var(--primary); }
  .bg-secondary { background-color: var(--secondary); }
  .bg-stone-50 { background-color: #fafaf9; }
  .bg-white { background-color: #ffffff; }

  /* Header specific */
  .header { height: 80px; display: flex; align-items: center; border-bottom: 1px solid #e5e5e5; }
  .logo { font-size: 1.5rem; font-weight: bold; font-family: var(--font-serif); }
  .nav-link { font-size: 0.875rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; padding: 0.5rem; }
  
  /* Sidebar */
  amp-sidebar { width: 300px; background: white; padding: 2rem; }
  .sidebar-close { position: absolute; top: 1rem; right: 1rem; font-size: 1.5rem; cursor: pointer; }
`;
