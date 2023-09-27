import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const errorData = useRouteError();
  console.log(errorData);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{errorData.data || errorData.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
