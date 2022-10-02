import { Label, Input } from './ContactFilter.styled';

export function ContactFilter({ filterValue, handleFilter }) {
  return (
    <>
      <Label>
        <Input
          type="text"
          placeholder="Find contacts name"
          value={filterValue}
          onChange={e => handleFilter(e.target.value)}
        />
      </Label>
    </>
  );
}
