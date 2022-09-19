import React from 'react';
import { Label, Input } from 'components/filterForm/FilterForm.module';

const FilterForm = ({ filteredValue, onSearch }) => {
  return (
    <>
      <Label>
        Find contacts by name
        <Input value={filteredValue} onChange={onSearch} type="text" />
      </Label>
    </>
  );
};

export default FilterForm;
