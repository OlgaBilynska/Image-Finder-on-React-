export default function ImageErrorView({ query }) {
  return (
    <div role="alert">
      <p>There is no category with this name {query}</p>
    </div>
  );
}
