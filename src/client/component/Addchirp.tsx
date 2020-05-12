import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
class AddChirp extends React.Component<IAddchirpProps, IAddchirpState>{

}


export default AddChirp
interface IAddchirpProps extends RouteComponentProps {
    name: string,
    message: string
}

interface IAddchirpState {
    name: string,
    message: string
}