import { useSelector, useDispatch } from "react-redux";
import { Button } from "../Button/Button";
import { setStatusFilter } from "../../redux/actions";

import { statusFilters } from "../../redux/constants";

export const StatusFilter = () => {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.statusFilter);

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <div>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
