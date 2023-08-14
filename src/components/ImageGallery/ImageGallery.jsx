import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export default function ImageGallery({ hits }) {
  return (
    <ul className={css.gallery}>
      {hits &&
        hits.map(img => {
          return <ImageGalleryItem img={img} key={img.id} />;
        })}
    </ul>
  );
}
