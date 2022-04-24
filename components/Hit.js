import { connectInfiniteHits } from "react-instantsearch-dom";
import { algoliaIndexApi } from "../pages/index";

function Hit({ hits }) {
  function deleteEntry(entryId) {
    console.log("DELETE ME: ", entryId);
    // TODO: Uncomment once using env variables to pass an admin API key
    //algoliaIndexApi.deleteObject(entryId);
  }
  return (
    <>
      {hits?.map(({ name, address, city, postal_code, state, objectID }) => (
        <li>
          <span style={{ "font-weight": "700" }}>{name}</span>
          {address}, {city} {state} {postal_code}
          <button
            onClick={() => {
              deleteEntry(objectID);
            }}
            style={{ "background-color": "red", color: "white" }}
          >
            DEL "{name?.slice(0, 5)}.." (ID: {objectID})
          </button>
        </li>
      ))}
    </>
  );
}

const CustomHit = connectInfiniteHits(Hit);
export default CustomHit;
