import React from 'react';
import ReactDOM from 'react-dom';
import {FavoriteFoods} from "./foods.js"


ReactDOM.render(
	<FavoriteFoods>
        <li>Sushi Burrito</li>
        <li>Rhubarb Pie</li>
        <li>Broiled Grapefruit</li>
    </FavoriteFoods>, 
	document.getElementById('root')
);