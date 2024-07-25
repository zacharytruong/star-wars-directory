export default function ErrorFetching() {
  return (
    <div className="toast toast-start">
      <div role="alert" className="alert alert-error">
        <span className="text-white">
          Unable to fetch data, please try again in a few minutes.
        </span>
      </div>
    </div>
  );
}
