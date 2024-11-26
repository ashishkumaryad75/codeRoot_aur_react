export default function TabButton(props) {
  return (<>
    <li>
      <button>{props.children}</button>
    </li><li>
      <button>{props.label}</button>
    </li>
  </>
  );
}
