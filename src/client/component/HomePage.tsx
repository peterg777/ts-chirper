import * as React from 'react';

class HomePage extends React.Component<HomePageProps, HomePageState> {
  render() {
    return (
      <main className="container">
        <h1>HomePage</h1>
      </main>
    );
  }
}

interface HomePageProps {}
interface HomePageState {}

export default HomePage;