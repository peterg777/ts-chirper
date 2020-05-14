import * as React from 'react';




class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main className="container">
        <h1 className="text-center mt-5"> HomePage</h1>
        
        
      </main>
    );
  }
}
interface HomeProps { }

interface HomeState {

}


export default Home;