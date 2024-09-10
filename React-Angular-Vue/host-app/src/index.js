// import ReactApp from 'reactApp/App';
// import AngularComponent from 'angularApp/AngularComponent';


// // Dynamically import and render the components from each framework
// const loadApps = async () => {
//   const reactApp = await import('reactApp/App');
//   const angularComponent = await import('angularApp/AngularComponent');

  
//   document.getElementById('react-root').appendChild(reactApp.default);
//   document.getElementById('angular-root').appendChild(angularComponent.default);

// };

// loadApps();



import React from 'react';
import ReactDOM from 'react-dom';

const loadApps = async () => {
  try {
    // Dynamically import React App
    const { default: ReactApp } = await import('reactApp/App');
    
    // Render the React component using ReactDOM.render()
    const reactRoot = document.getElementById('react-root');
    ReactDOM.render(<ReactApp />, reactRoot);  // JSX for rendering React component

    
    const { default: AngularComponent } = await import('angularApp/AngularComponent');
    
  
    const angularRoot = document.getElementById('angular-root');
    angularRoot.innerHTML = '<app-root></app-root>';  

    // Bootstrapping Angular app
    const { AppModule } = await import('angularApp/AppModule');
    platformBrowserDynamic().bootstrapModule(AppModule);
    
  } catch (error) {
    console.error('Error loading remote apps:', error);
  }
};

loadApps();