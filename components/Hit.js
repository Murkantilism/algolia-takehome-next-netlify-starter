import { connectInfiniteHits } from "react-instantsearch-dom";

function Hit({ hits }) {
  function deleteEntry(entry) {
    console.log("DELETE ME: ", entry);
  }
  return (
    <li>
      {hits?.map(({ name, address, city, postal_code, state, objectID }) => (
        <>
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
        </>
      ))}
    </li>
  );
}

const CustomHit = connectInfiniteHits(Hit);
export default CustomHit;
