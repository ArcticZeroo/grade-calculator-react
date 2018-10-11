import { Component } from 'react';
import * as React from 'react';
import EditorRow from './EditorRow';
import Button from '@material-ui/core/Button';
import Util from '../../api/Util';

interface IEditorViewProps {

}

interface IEditorViewState {
    rows: EditorRow[];
}

class EditorView extends Component<IEditorViewProps, IEditorViewState> {
    constructor(props: IEditorViewProps) {
        super(props);

        this.state = {
            rows: []
        };
    }

    componentDidMount(): void {
        this._createRow();
    }

    private _createRow(): void {
        this.setState({
           rows: [...this.state.rows, ]
        });
    }

    render(): Element {
        return (
            <div>
                <div>
                    {this.state.rows}
                </div>
                <div>
                    <Button onClick={this._createRow.bind(this)}>
                        Add row
                    </Button>
                </div>
            </div>
        );
    }
}

export default EditorView;