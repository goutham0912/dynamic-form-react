import ReactJson from "react-json-view";

const JsonViewer = ({ json, edit, updateJson }) => {
  return (
    <div>
      {edit ? (
        <ReactJson
          src={json}
          onEdit={(e) => {
            updateJson(e.updated_src);
          }}
          onAdd={(e) => updateJson(e.updated_src)}
          onDelete={(e) => updateJson(e.updated_src)}
          enableClipboard={false}
        ></ReactJson>
      ) : (
        <ReactJson src={json} enableClipboard={false}></ReactJson>
      )}
    </div>
  );
};

export default JsonViewer;
