import { useSelector, useDispatch } from 'react-redux';
import { filterValue } from '../../../src/redux/filterSlice';
import { LabelFilter, InputFilter } from '../Filter/Filter.styled';
import { getFilter } from '../../../src/redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const onFilterChange = event => {
    dispatch(filterValue(event.target.value));
  };

  const filter = useSelector(getFilter);

  return (
    <>
      <LabelFilter>
        Find contacts by name
        <InputFilter
          type="text"
          value={filter}
          onChange={onFilterChange}
          placeholder="Filter by name..."
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        ></InputFilter>
      </LabelFilter>
    </>
  );
};
