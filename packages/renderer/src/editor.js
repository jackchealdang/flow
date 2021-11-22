import React, { useCallback, useEffect } from 'react';
import useCodeMirror from './use-codemirror';
import './editor.css';
const Editor = (props) => {
    const { onChange, initialDoc } = props;
    const handleChange = useCallback(state => onChange(state.doc.toString()), [onChange]);
    const [refContainer, editorView] = useCodeMirror({
        initialDoc: initialDoc,
        onChange: handleChange
    });
    useEffect(() => {
        if (editorView) {
            //Do nothing for now
        }
    }, [editorView]);
    return <div className='editor-wrapper' ref={refContainer}></div>;
};
export default Editor;
//# sourceMappingURL=editor.js.map