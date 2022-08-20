import { TextField } from "@mui/material";
import { MdAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface IProps {
  searchQuery: string;
  handleSearch: () => void;
  buttonName: string;
  linkTo: string;
}

const TableHeader = ({
  searchQuery,
  handleSearch,
  buttonName,
  linkTo,
}: IProps) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <div>
        <TextField
          fullWidth
          id="quick_filter"
          label={"Quick Search"}
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <div
        role={"button"}
        className="btn-gradient-primary text-uppercase h-100 d-flex px-3 align-items-center justify-content-center"
        onClick={() => {
          navigate(linkTo);
        }}
      >
        <MdAdd size={24} className="me-2" /> {buttonName}
      </div>
    </div>
  );
};

export default TableHeader;
