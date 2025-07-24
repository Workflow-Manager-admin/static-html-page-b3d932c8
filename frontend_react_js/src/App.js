import React, { useState, useEffect } from 'react';
import './App.css';

/**
 * PUBLIC_INTERFACE
 * Replicates the "Start with KAVIA AI" PDF as a React-based HTML page with themed styling,
 * preserving the structure, headings, and content as closely as possible.
 */
function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <header className="App-header" style={{paddingBottom:0}}>
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <h1 style={{letterSpacing:'0.04em', fontWeight:900, marginTop:32, marginBottom:0}}>Start with <span style={{color: 'var(--text-secondary)'}}>KAVIA AI</span></h1>
      </header>
      <main className="pdf-content" style={{maxWidth: 860, margin: '0 auto', padding: '36px 24px 64px 24px', background:'var(--bg-secondary)', borderRadius:24, boxShadow:'0 8px 24px 0 rgba(44,62,80,0.07)', fontSize:18}}>
        <h2 style={{marginTop:0}}>Code Generation Guide</h2>
        
        <ol style={{marginBottom:32, marginLeft: 20}}>
          <li>Create your first Web APP</li>
          <li>Step 1: Start from the Home Screen</li>
          <li>Step 2: Enter Your Prompt</li>
          <li>Step 3: Confirm Project Overview and Core features.</li>
          <li>Step 4: Let Kavia Prepare the Workspace</li>
          <li>Step 5: Collaborate with Kavia via Chat</li>
          <li>Step 6: Preview</li>
          <li>Step 7: Enabling the Edit Mode</li>
          <li>Step 8: Deployment</li>
          <li>Step 9: Terminate</li>
          <li>Ingest Existing Codebase</li>
          <li>Notable Points</li>
        </ol>

        <section>
          <h3>Sign into Kavia AI</h3>
          <ul>
            <li>Add your Referral Code → Sign into Kavia AI with a verifiable email id.</li>
          </ul>
          <b>Two Step Verification and Sign in</b>
          <ol>
            <li>Enable your access through set password link received via Welcome Mail</li>
            <li>Login to the portal using the Login URL in the Welcome Mail</li>
          </ol>
        </section>

        <section>
          <h2>Create your first Web APP</h2>
          <p>Let’s walk through the process of creating a simple website using Kavia. For this example, we'll build a basic web-based app.</p>
          <h3>Step 1: Start from the Home Screen</h3>
          <p>Navigate to the Home section from the left sidebar. At the center of the screen, you’re prompted with “What do you want to build today?”—ensure the Apps tab is selected. Scroll down to choose <strong>Web</strong> as the application type and <strong>React</strong> as the framework.</p>
          
          <h3>Step 2: Enter Your Prompt</h3>
          <p>
            In the input box, describe the app you want to create. In this tutorial:<br/>
            <code style={{display:'block',background:'#272822',color:'#fafafa',padding:'14px',borderRadius:10,margin:'14px 0',fontSize:16}}>
              Create a modern, responsive personal portfolio website for a freelance architect.<br />
              The site should include the following sections: Home, About Me, Projects, Skills, Contact...<br />
            </code>
            Kavia will process your request and begin building the app, including frontend and backend code, UI layout, and app logic.
          </p>
          
          <h3>Step 3: Confirm Project Overview and Core features</h3>
          <ul>
            <li>
              <b>Third-Party Integrations:</b> Connect your GitHub account by selecting it from the dropdown, or add it.
            </li>
            <li>
              <b>Database Integration:</b> Connect Supabase; a popup will guide the authentication and project creation.
            </li>
          </ul>

          <h3>Step 4: Let Kavia Prepare the Workspace</h3>
          <p>
            Click <strong>Start Implementation</strong> and wait for setup to complete.
          </p>
          <h3>Step 5: Collaborate with Kavia via Chat</h3>
          <ul>
            <li>Start by asking Kavia to create a plan.</li>
            <li>To use an image or document, upload PDF/JPG/PNG using the "+" icon near chat.</li>
          </ul>
          <h3>Step 6: Preview</h3>
          <p>Go to Preview to check the Live Application!</p>
          <h3>Step 7: Enabling the Edit Mode</h3>
          <p>Allows precise design and functionality adjustments in the preview. Remember to save changes, then click <b>Disable Edit Mode</b> once done.</p>
          <h3>Step 8: Deployment</h3>
          <p>
            Click the + button next to <b>Deploy</b>, select your container, configure settings, and <b>Create Frontend Deployment</b>.
            Kavia will deploy your app.
          </p>
          <h3>Step 9: Terminate</h3>
          <ul>
            <li><b>Save and Exit</b> – if your code is ready</li>
            <li><b>Discard and Exit</b> – if the session did not achieve your expectations</li>
            <li><b>Continue session</b> – to resume work later</li>
          </ul>
        </section>

        <section>
          <h2>Ingest Existing Codebase</h2>
          <ul>
            <li>
              Go to <b>Project List</b> &rarr; Click <b>Import</b>
            </li>
            <li>
              Provide Project Name and Description, choose Github repo, and select <b>Query</b> (to understand your code) or <b>Modify</b>.
            </li>
          </ul>
          <h3>1. Basic Querying</h3>
          <ul>
            <li>Select Repositories → Query → Basic Query</li>
            <li>Select Model (Clause 3.5 for Architecture; GPT 4.1 for cost efficiency)</li>
            <li>Prompt about code → visualize response → export or save</li>
          </ul>
          <h3>2. Advanced Query</h3>
          <ul>
            <li>Choose Deep Analysis, wait for setup, then provide document prompt</li>
          </ul>
          <h3>3. Code Maintenance</h3>
          <ul>
            <li>Select repositories → Start session</li>
            <li>Give instructions via prompt</li>
            <li>Preview (if supported), or create PR and test locally</li>
          </ul>
        </section>

        <section>
          <h2>Notable Points</h2>
          <ol>
            <li>Session automatically ends after 30 minutes of inactivity—terminate session to save code.</li>
            <li>GPT 4.1 is default, cheap and best for code generation.</li>
            <li>Best results: Use Web app + Supabase Integration for real-time apps.</li>
          </ol>
        </section>
      </main>
    </div>
  );
}

export default App;
