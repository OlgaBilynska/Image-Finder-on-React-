import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ images }) {
  return (
    <ul className="gallery">
      <ImageGalleryItem images={images} />
    </ul>
  );
}
