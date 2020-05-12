import * as React from 'react';
import {  RouteComponentProps } from 'react-router-dom';

class DetailsPage extends React.Component<DetailsPageProps, DetailsPageState> {
  render() {
    return (
      <main className="container">
        <h1>DetailsPage{this.props.match.params.id}</h1>
      </main>
    );
  }
}

interface DetailsPageProps extends RouteComponentProps<{id:string}> {}
interface DetailsPageState {}

export default DetailsPage;