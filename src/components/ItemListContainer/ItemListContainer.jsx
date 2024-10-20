import PropTypes from 'prop-types';


function ItemListContainer({titulo}) {
  return (
    <div className="text-primary text-opacity-75">
      <h1>{titulo}</h1>
    </div>
  );
}

ItemListContainer.propTypes = {
  titulo: PropTypes.string.isRequired,
};

export default ItemListContainer;