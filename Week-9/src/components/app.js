import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";

export default function App() {
  const [userInput, setUserInput] = React.useState("");
  const [list, setList] = React.useState([]);
  function updateInput(value) {
    setUserInput(value);
  }
  function addItem() {
    if (userInput !== "") {
      const tempUserInput = {
        id: Math.random(),
        value: userInput,
        checked: false,
      };

      // Update list
      const tempList = [...list];
      tempList.push(tempUserInput);

      setList(tempList);
      console.log(list);
      setUserInput("");
    }
  }

  function markChecked(key) {
    const tempList = [...list];

    let index;
    let value = tempList.find((el, i) => {
		index = i
      return el.id === key;

    });
	if(index ==undefined){return}
    console.log(index);
    tempList[index] = { ...tempList[index], checked: true };
    setList(tempList);
    console.log(tempList);
  }

  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3rem",
          fontWeight: "bolder",
        }}
      >
        TODO LIST
      </Row>
      <hr />
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="add item . . . "
              size="lg"
              value={userInput}
              onChange={(item) => updateInput(item.target.value)}
              aria-label="add something"
              aria-describedby="basic-addon2"
            />
            {/* <InputGroup.Append> */}
            <Button variant="dark" size="lg" onClick={() => addItem()}>
              ADD
            </Button>
            {/* </InputGroup.Append> */}
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <ListGroup>
            {/* map over and print items */}
            {list.map((item) => {
              return (
                <ListGroup.Item
                  variant="dark"
                //   action

                >
                  <div key="default-checkbox" className="mb-3">
                    <Form.Check
                      disabled={item.checked}
                      type="checkbox"
                      id={item.id}
                      label={item.value}
					  onChange={() => markChecked(item.id)}
                    />

                  </div>
                 </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
