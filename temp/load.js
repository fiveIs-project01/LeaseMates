
export default class Load {
  constructor(doc) {
    
    // CSS 로드
    const stylesheets = doc.querySelectorAll('link[rel="stylesheet"]');
    stylesheets.forEach(link => {
      // const newLink = document.createElement('link');
      // newLink.rel = 'stylesheet';
      // newLink.href = link.href;
      // document.head.appendChild(newLink);
      document.head.appendChild(link);
    });

    // JavaScript 로드
    const scripts = doc.querySelectorAll('script');
    scripts.forEach(script => {
      const newScript = document.createElement('script');
      newScript.src = script.src;
      newScript.type = script.type;
      document.head.appendChild(newScript);
    });
  }
}
