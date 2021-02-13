const CONFIG = {
  HEADING: "Hotchkiss Tier: Tier rank Hotchkiss classes", // for the top of the page
  META: {
    // for social sharing, search engine results, etc.
    TITLE: `Hotchkiss Tier: Tier rank Hotchkiss classes`,
    DESCRIPTION: `All in the title`,
    URL: `https://hotchkiss-tier.vercel.app/`,
    SITE_NAME: `Hotchkiss Tier`,
    IMAGE_URL: `https://mitier.vercel.app/screenshot.jpg`, // full path, not relative
    IMAGE_ALT_TEXT: `Example tier list of MIT classes`, // FIXME: update this
  },
  INITIAL_TIERS: {
    // object containing tier : list of classes
    S: ["8.01", "8.02", "18.01", "18.02", "7.012", "5.111"], // course IDs
    A: [],
    B: [],
    C: [],
    D: [],
  },
  TIER_COLORS: {
    // thanks https://colorswall.com/palette/3297/
    S: "#ff7f7e",
    A: "#ffbf7f",
    B: "#ffdf80",
    C: "#feff7f",
    D: "#beff7f",
  },
  SEARCH: {
    INPUT_PLACEHOLDER: "Search courses",
    NO_RESULTS_MESSAGE: "No results :(",
    LOADING_MESSAGE: "Loading...",
  },
};

export default CONFIG;
