import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helper';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class EditorComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            text: '',
            title: '',
            id: ''
        }
    }
    update = debounce(() => {
        //come back later
        this.props.noteUpdate(this.state.id, {
            title: this.state.title,
            body: this.state.text
        })
    }, 1500)
    updateBody = async (val) => {
        await this.setState({ text: val });
        this.update()
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.editorContainer}>
                <ReactQuill
                    value={this.state.text}
                    onChange={this.updateBody}>
                </ReactQuill>
            </div>
        )
    }

    componentDidMount = () => {
        this.setState({
            text: this.props.selectedNote.body,
            title: this.props.selectedNote.title,
            id: this.props.selectedNote.id
        })
    }

    componentDidUpdate = () => {
        if(this.props.selectedNote.id !== this.state.id){
            this.setState({
                text: this.props.selectedNote.body,
                title: this.props.selectedNote.title,
                id: this.props.selectedNote.id
            })
        }
    }

}

export default withStyles(styles)(EditorComponent)