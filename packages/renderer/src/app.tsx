import React, { useState, useCallback } from 'react';
import Editor from './editor';
import Preview from './preview';
import './app.css';
const App = () => {
    const [doc, setDoc] = useState('# Hello, World!\n');
    const handleDocChange = useCallback(newDoc => {
        setDoc(newDoc);
    }, []);
    return (<div className='app'>
      <Editor onChange={handleDocChange} initialDoc={doc}/>
      <Preview doc={doc}/>
    </div>);
};
export default App;
//# sourceMappingURL=app.js.map