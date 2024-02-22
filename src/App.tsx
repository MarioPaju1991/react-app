// import ListGroup from "./components/ListGroup";
// // . means current folder
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  // let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My button</Button>
    </div>
  );
}

export default App;

/* <ListGroup
  items={items}
  heading="Cities"
  onSelectItem={handleSelectItem}
/> */
