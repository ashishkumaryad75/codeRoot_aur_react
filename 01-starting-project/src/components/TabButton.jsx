export default function TabButton(props) {
  return (
    <>
      <li>
        <button
          className={props.isSelected ? "active" : ""}
          onClick={props.onSelect}
        >
          {props.label ? props.label : props.children}
        </button>
      </li>{" "}
      {/* Rendering both types of components in the same li or in the same button.  */}
      {/* <li>
        <button className={props.isSelected  ? 'active' :''} onClick={props.onSelect}>{props.label}</button>
      </li> */}
    </>
  );
}
