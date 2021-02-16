const CONFIG = {
  HEADING: "Hotchkiss Tier: Tier rank Hotchkiss classes", // for the top of the page
  META: {
    // for social sharing, search engine results, etc.
    TITLE: `Hotchkiss Tier: Tier rank Hotchkiss classes`,
    DESCRIPTION: `All in the title`,
    URL: `https://hotchkiss-tier.vercel.app/`,
    SITE_NAME: `Hotchkiss Tier`,
    IMAGE_URL: `https://hotchkiss-tier.vercel.app/screenshot.png`, // full path, not relative
    IMAGE_ALT_TEXT: `Example tier list of Hotchkiss classes`,
  },
  INITIAL_TIERS: {
    // object containing tier : list of classes
    S: [], // course IDs
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
    INPUT_PLACEHOLDER: "Search to add courses",
    NO_RESULTS_MESSAGE: "No results :(",
    LOADING_MESSAGE: "Loading...",
  },
  SOURCE_CODE_URL: "https://github.com/katmh/mitier",
};

export default CONFIG;
