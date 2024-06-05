import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetail } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <div class="detail_container">
            <h2 class="detail_head">Detail Page</h2>
        </div>
        <div id="detail_content" class="detail_content"></div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detail_content');

    restaurantContainer.innerHTML = createRestaurantDetail(data.restaurant);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      data,
    });
  },
};

export default Detail;
