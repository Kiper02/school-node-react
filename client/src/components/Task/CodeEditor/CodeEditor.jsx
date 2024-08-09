import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import {sublime} from '@uiw/codemirror-theme-sublime'
import {python} from '@codemirror/lang-python'

function CodeEditor({type}) {
  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val, viewUpdate) => {
    setValue(val);
  }, []);

  

  const getLangauge = () => {
    const language = type.toLowerCase();
    switch (language) {
        case 'javascript':
            return javascript({jsx: true})
        case 'python':
            return python();
        default:
            return javascript({jsx: true});
    }
  }

  return (
    <CodeMirror 
        value={value} 
        height="200px" 
        extensions={[getLangauge()]} 
        onChange={onChange} 
        theme={sublime}
    />
  )
}
export default CodeEditor;
