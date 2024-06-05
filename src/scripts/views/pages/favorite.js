import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItem } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="latest">
        <h1 class="latesthead">Your Favorite Restaurant</h1>
        <div id="empty_favorite" class="empty_favorite"></div>
    </div>
    <div id="content" class="content"></div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#content');
    const emptyrestaurant = document.querySelector('#empty_favorite');
    if (restaurants.length === 0) {
      emptyrestaurant.innerHTML = `
        You don't have any Favorite Restaurant
      `;
    }
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItem(restaurant);
    });
  },
};

export default Favorite;
