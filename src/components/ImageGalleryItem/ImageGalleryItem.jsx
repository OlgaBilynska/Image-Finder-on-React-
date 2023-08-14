import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { tags, largeImageURL, webformatURL } = this.props.img;
    const { showModal } = this.state;

    return (
      <li className={css.imageGalleryItem}>
        {showModal && (
          <Modal onClick={this.toggleModal}>
            <img alt={tags} src={largeImageURL} />
          </Modal>
        )}
        <img
          onClick={this.toggleModal}
          className={css.imageGalleryItemImage}
          src={webformatURL}
          alt={tags}
          width="240"
        />
      </li>
    );
  }
}
