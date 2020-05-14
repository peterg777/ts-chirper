import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

class Compose extends React.Component<ComposeProps, ComposeState>{
    constructor(props: ComposeProps) {
        super(props); {
            this.state={
                name:'',
                message: ''
            }
        }
    }

    

    handleSubmit = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()
        let newChirp = this.state;
        // let formData= new FormData()
        fetch('/api/chirps', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newChirp)
        }).then(() => this.props.history.push('/'))
       
    }

    render() {
        return (
            <div className="container border border-dark mt-5 shadow p-3 mb-5 bg-white rounded">
                <form>
                    <div className="form-group">
                        <label  htmlFor="name" className="input-label">Username:</label>
                        <input type="text" className="form-control" id="name" value={this.state.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ name: e.target.value })}></input>
                        <label htmlFor="message" className="input-label">Message:</label>
                        <input type="text" className="form-control" id="message" value={this.state.message} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ message: e.target.value })}></input>
                        <button className="btn btn-success mt-3" type="submit" onClick={this.handleSubmit}>Add Chirp At Your Own Risk!</button>
                    </div>
                </form>
            </div>
        )
    }
}



export default Compose
interface ComposeProps extends RouteComponentProps {
    name: string,
    message: string
}

interface ComposeState {
    name: string,
    message: string
}