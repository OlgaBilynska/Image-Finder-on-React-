import { Component } from 'react';
import ImageErrorView from 'components/ImageErrorView/ImageErrorView';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import { toast } from 'react-toastify';
import api from 'services/pixabay-api';
import css from './ImageInfo.module.css';

export default class ImageInfo extends Component {
  state = {
    images: null,
    error: null,
    status: 'idle',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;

    if (prevQuery !== nextQuery) {
      this.setState({ page: 1 });
      this.setState({ status: 'pending' });
      api
        .fetchFirstImages(nextQuery)
        .then(({ hits }) => {
          if (hits.length === 0) {
            throw Error(nextQuery);
          }
          this.setState({ images: hits, status: 'resolved' });
          return;
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  onPageChange = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
      }),
      () => {
        api
          .fetchLoadMore(this.props.query, this.state.page)
          .then(({ hits }) => {
            if (hits.length < 12) {
              toast('These are all the images by the category.');
            }
            this.setState(prevState => ({
              images: [...prevState.images, ...hits],
              status: 'resolved',
            }));
            return;
          })
          .catch(error => this.setState({ error, status: 'rejected' }));
      }
    );
  };

  render() {
    const { images, status } = this.state;
    const { query } = this.props;

    if (status === 'idle') {
      return <div className={css.choice}>Choose an image category here</div>;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <ImageErrorView query={query} />;
    }

    if (status === 'resolved') {
      return (
        <div className={css.resultMarkUp}>
          <ImageGallery hits={images} />
          <Button onClick={this.onPageChange} />
        </div>
      );
    }
  }
}
