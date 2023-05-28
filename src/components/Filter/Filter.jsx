import { useDispatch, useSelector } from 'react-redux';
import { InputField, InputLabel } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = ({ target: { value } }) => {
    dispatch(setFilter(value.trimStart()));
  };

  return (
    <InputLabel>
      Find contacts by name
      <InputField type="text" value={filter} onChange={changeFilter} />
    </InputLabel>
  );
};
