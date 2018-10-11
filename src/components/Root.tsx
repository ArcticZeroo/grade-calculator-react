import * as React from 'react';
import EditorView from './editor/EditorView';

const Root = (): Element => (
    <html>
    <head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </head>
    <div className="App">
        <EditorView/>
    </div>
    </html>
);

export default Root;