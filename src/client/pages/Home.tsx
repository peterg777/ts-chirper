import * as React from 'react';
import { RouteComponentProps } from 'react-router';




class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="d-flex justify-content-center my-5">
        <img src="https://steamuserimages-a.akamaihd.net/ugc/537392605670937504/F71DE52063B19CDB4A7BAEF4460D7F75E05E8A75/" className="img-fluid" alt="Chirper logo"/>

      </section>
    );
  }
}
interface HomeProps extends RouteComponentProps{id:string} { }

interface HomeState {


}


export default Home;