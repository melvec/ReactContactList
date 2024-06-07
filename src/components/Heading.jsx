import { Filter } from "./Filter";
import { Search } from "./Search";

const Heading = ({ onSearch }) => {
  return (
    <div>
      <Search onSearch={onSearch} />
    </div>
  );
};

export default Heading;
