import { useSelector, useDispatch } from 'react-redux';
import { filterValue } from '../../../src/redux/filterSlice';
import { LabelFilter, InputFilter } from '../Filter/Filter.styled';
import { getFilter } from '../../../src/redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const onFilterChange = event => {
    const filtered = dispatch(filterValue(event.target.value));
    console.log(filtered);
  };

  const filter = useSelector(getFilter);
  console.log(filter);
  const value = filter.filterValue;
  console.log(value);

  return (
    <>
      <LabelFilter>
        Find contacts by name
        <InputFilter
          type="text"
          value={value}
          onChange={onFilterChange}
          placeholder="Filter by name..."
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        ></InputFilter>
      </LabelFilter>
    </>
  );
};
