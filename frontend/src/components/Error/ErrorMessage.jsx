const ErrorMessage = ({ message }) => {
  return (
    <div>
      <span className="bg-red-500 font-semibold rounded p-3 text-white">
        {message}
      </span>
    </div>
  );
};

export default ErrorMessage;
