import homeHero from "../assets/images/hero/home-hero.jpg";
import productsHero from "../assets/images/hero/products-hero.jpg";
import resourcesHero from "../assets/images/hero/resources-hero.jpg";
import aboutHero from "../assets/images/hero/about-hero.jpg";
import categoryHero from "../assets/images/hero/category-hero.jpg";

import aboutFacility from "../assets/images/company/about-facility.jpg";
import homeLogistics from "../assets/images/company/home-logistics.jpg";

import catalogPreview from "../assets/images/resources/catalog-preview.jpg";

const siteImages = {
  home: {
    hero: homeHero,
    logistics: homeLogistics,
  },
  products: {
    hero: productsHero,
  },
  resources: {
    hero: resourcesHero,
    catalog: catalogPreview,
  },
  about: {
    hero: aboutHero,
    facility: aboutFacility,    
  },
  category: {
    hero: categoryHero,
  },
};

export default siteImages;