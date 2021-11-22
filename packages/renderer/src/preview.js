import React from 'react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkReact from 'remark-react';
import RemarkCode from './remark-code';
import { defaultSchema } from 'hast-util-sanitize';
import './preview.css';
import 'github-markdown-css/github-markdown.css';
const schema = {
    ...defaultSchema,
    attributes: {
        ...defaultSchema.attributes,
        code: [...(defaultSchema.attributes?.code || []), 'className']
    }
};
const Preview = (props) => {
    const md = unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkReact, {
        createElement: React.createElement,
        sanitize: schema,
        remarkReactComponents: {
            code: RemarkCode
        }
    })
        .processSync(props.doc).result;
    return <div className='preview markdown-body'>{md}</div>;
};
export default Preview;
//# sourceMappingURL=preview.js.map