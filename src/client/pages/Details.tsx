import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

class Details extends React.Component<DetailsProps, DetailsState> {
  constructor(props: DetailsProps) {
    super(props);
    this.state = {
        chirps: []
    }
}

//chirps to be the backend chirps
async componentDidMount() {
    let r = await fetch('/api/chirps');
    let chirps = await r.json();
    this.setState({ chirps });
} 

handleDelete (id: string) {
    //DELETE REQUEST
    console.log(id)
    fetch(`/api/chirps/${id}`, {
        method: "DELETE",
    })
        .then(() => fetch('api/chirps'))
        .then(res => res.json())
        .then(chirps => this.setState({ chirps }))
        .catch(err => console.log(err))
}



render() {
    return (
        <section className="row">
            {this.state.chirps.map(chirp => {
                return (
                    <article key={chirp.id} className="col md-6">
                        <div className="card mt-3 shadow border-success">
                            <div className="card-body">
                                <button type="button" className="close" aria-label="Close" onClick={()=>this.handleDelete(chirp.id)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <h3 className="card-title">{chirp.name}</h3>
                                <div className="card-text">{chirp.message}</div>
                                <Link className="btn btn-sm btn-link btn-outline-success bg-light text-success" to={`/chirp/edit/${chirp.id}`}>Admin Chirp</Link>
                            </div>
                        </div>
                    </article>
                );
            })}
        </section>
    )
}
}


interface DetailsProps extends RouteComponentProps<{id:string}> {}
interface DetailsState {
id:string
name: string,
message: string
}


export default Details;