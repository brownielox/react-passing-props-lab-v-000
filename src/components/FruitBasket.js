import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({ filters, fruit, updateFilterCallback}) => {

  return (
   <div className="fruit-basket">
     <Filter filters={filters} handleChange={updateFilterCallback}/>
     <FilteredFruitList fruit={fruit} filters={filters}/>
   </div>
   );
}

  FruitBasket.defaultProps = {
    fruit: "",
    filters: "",
    currentFilter: "",
    updateFilterCallback: "",
  }

export default FruitBasket;
