export default function ImageGalleryItem({ images }) {
  return (
    <div>
      {images &&
        images.hits.map(img => {
          const { id, largeImageURL, webformatURL, tags } = img;
          return (
            <li key={id} className="gallery-item">
              <a href={largeImageURL}>
                <img src={webformatURL} alt={tags} width="240" />
              </a>
            </li>
          );
        })}
    </div>
  );
}
