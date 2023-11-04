import { useSelector, useDispatch } from 'react-redux';
import { filter } from '../../../src/redux/filterSlice';
import { LabelFilter, InputFilter } from '../Filter/Filter.styled';
import { getFilter } from '../../../src/redux/filterSlice';

export const Filter = () => {
  const filterValue = useSelector(getFilter);
  const value = filterValue.filter;
  const dispatch = useDispatch();

  const onFilterChange = event => {
    dispatch(filter(event.currentTarget.value));
  };

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
