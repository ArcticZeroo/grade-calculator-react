import Util from '../../api/Util';
import { Component } from 'react';
import * as React from 'react';

export default class EditorRow extends Component {
    private readonly _key: string;

    constructor(props = {}) {
        super(props);

        this._key = Util.getRandomQuadString();
    }

    render() {
        return (
            <div>test</div>
        );
    }
}