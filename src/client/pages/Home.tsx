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
        <img src="https://steamuserimages-a.akamaihd.net/ugc/537392605670937504/F71DE52063B19CDB4A7BAEF4460D7F75E05E8A75/" className="img-fluid" alt="Chirper logo" />
        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/13517269&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      </section>
    );
  }
}
interface HomeProps extends RouteComponentProps{id:string} {}

interface HomeState {


        }


export default Home;