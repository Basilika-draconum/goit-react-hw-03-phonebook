import css from './filter.module.scss';
const Filter = ({ filter, onChange }) => {
  return (
    <div>
      <h6 className={css.title}>Find contacts by name</h6>
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        defaultValue={filter}
        onChange={onChange}
      />
    </div>
  );
};
export default Filter;
