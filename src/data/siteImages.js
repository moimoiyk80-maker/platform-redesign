import homeHero from "../assets/images/hero/home-hero.png";
import productsHero from "../assets/images/hero/products-hero.png";
import resourcesHero from "../assets/images/hero/resources-hero.png";
import aboutHero from "../assets/images/hero/about-hero.png";
import categoryHero from "../assets/images/hero/category-hero.png";

import aboutFacility from "../assets/images/company/about-facility.png";
import homeLogistics from "../assets/images/company/home-logistics.png";

import catalogPreview from "../assets/images/resources/catalog-preview.png";

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