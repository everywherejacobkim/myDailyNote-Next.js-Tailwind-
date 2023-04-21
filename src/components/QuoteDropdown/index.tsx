import Dropdown from "react-bootstrap/Dropdown";

const items = ["life", "love", "happiness", "wisdom", "sports", "technology"];


function QuoteDropdown({
  chosenQuote,
  setChosenQuote,
}: {
  chosenQuote: string[];
  setChosenQuote: React.Dispatch<React.SetStateAction<string[]>>;
}): JSX.Element {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {chosenQuote}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {items.map((item, index) => (
          <Dropdown.Item
            key={index}
            onClick={() => setChosenQuote([item])}
          >
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
  
export default QuoteDropdown;
