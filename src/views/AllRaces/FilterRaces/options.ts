import { FilterTypes } from '../../../types/filter';

export const options = [
  {
    value: FilterTypes.UNFILTERED,
    label: 'none',
  },
  {
    value: FilterTypes.ACTIVE,
    label: 'active',
  },
  {
    value: FilterTypes.NOT_ACTIVE,
    label: 'not active',
  },
];
