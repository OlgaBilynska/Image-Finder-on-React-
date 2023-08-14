import { Component } from 'react';
import ImageErrorView from 'components/ImageErrorView/ImageErrorView';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';

export default class ImageInfo extends Component {
  state = {
    images: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;

    if (prevQuery !== nextQuery) {
      console.log('Props have changed');

      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?q=${nextQuery}&page=1&key=6725923-1edca42cf91687372f6490452&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(images => {
          if (images.totalHits === 0) {
            throw Error(nextQuery);
          }
          this.setState({ images, status: 'resolved' });
          return;
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { images, status } = this.state;
    const { query } = this.props;

    if (status === 'idle') {
      return <div>Choose an image category here.</div>;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <ImageErrorView query={query} />;
    }

    if (status === 'resolved') {
      return <ImageGallery images={images} />;
    }
  }
}
