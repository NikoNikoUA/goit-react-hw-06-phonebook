import { LabelFilter, InputFilter } from '../Filter/Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <LabelFilter>
        Find contacts by name
        <InputFilter
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Filter by name..."
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        ></InputFilter>
      </LabelFilter>
    </>
  );
};
