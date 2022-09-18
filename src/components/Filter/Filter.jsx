import { Label, Input } from './Filter.styled';

export function Filter({ filterValue, handleFilter }) {
  return (
    <Label>
      Find contacts name
      <Input
        type="text"
        value={filterValue}
        onChange={e => handleFilter(e.target.value)}
      />
    </Label>
  );
}
