import * as React from 'react'
import {  RouteComponentProps } from 'react-router-dom'

class IEditButton extends React.Component<IEditProps, IEditState>{
    constructor(props: IEditProps) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            name: '',
            message: ''
        }
    }
}


interface IEditProps extends RouteComponentProps<{id:string}>{}
interface IEditState {
    id: string,
    name: string,
    message: string
}

export default IEditButton;