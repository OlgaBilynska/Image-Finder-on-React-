import { Component } from 'react';

export default class App extends Component {
  state = {
    image: null,
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });

    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=6725923-1edca42cf91687372f6490452&image_type=photo&orientation=horizontal&per_page=12'
    )
      .then(res => res.json())
      .then(image => this.setState({ image }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <>
        {this.state.loading && <h1>LOADING...</h1>}
        {this.state.image &&
          this.state.image.hits.map(hit => <div>{hit.id}</div>)}
      </>
    );
  }
}
