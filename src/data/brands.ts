
import { Brand, BrandStyle } from '@/types';

// Helper function to generate random dates within a range
const randomDate = (start: Date, end: Date): string => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString();
};

// Placeholder image URLs - in a real app, these would be actual brand logos
const placeholderImages = [
  'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1618354691551-44de113f0164?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1618354691551-44de113f0164?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=400&h=400&fit=crop&q=80',
];

// All possible brand styles
const brandStyles: BrandStyle[] = [
  'streetwear', 'goth', 'luxury', 'vintage', 'minimalist', 'contemporary', 'hypebeast', 'athletic', 'sustainable'
];

// Actual brands list based on the user input
const saturnLaBrands = [
  { name: "Saturn Los Angeles", owner: true },
  { name: "gospel.core", owner: true },
  { name: "hand.curation", owner: true },
  { name: "kaitlyn kinis", owner: true },
  { name: "JAIME", owner: true },
  { name: "xuxu_world", owner: true },
  { name: "somar.us", owner: false },
  { name: "HYDB", owner: true },
  { name: "Cuts by lowheads", owner: true },
  { name: "kine.jkt", owner: true },
  { name: "shmuie", owner: false },
  { name: "berlinc.co", owner: false },
  { name: "heavenonearthstudios", owner: false },
  { name: "ssstufff.official", owner: false },
  { name: "liquidlagoon", owner: false },
  { name: "concrete_orchids", owner: false },
  { name: "shortsarchive", owner: false },
  { name: "eternal_artwear", owner: false },
  { name: "aliasonline.us", owner: false },
  { name: "twopockets", owner: false },
  { name: "nihil.ny", owner: false },
  { name: "fine.culture", owner: false },
  { name: "eternalloveworld", owner: false },
  { name: "hypedept/co", owner: false },
  { name: "babyev2k", owner: false },
  { name: "roypubliclabel", owner: false },
  { name: "decroes_", owner: false },
  { name: "peaceandwar89", owner: false },
  { name: "sixshooter.us", owner: false },
  { name: "fourfour.jpg", owner: false },
  { name: "qbsay", owner: false },
  { name: "california.arts", owner: false },
  { name: "friedrice_nyc", owner: false },
  { name: "profitminded.clo", owner: false },
  { name: "nlluoofficial", owner: false },
  { name: "outlw.usa", owner: false },
  { name: "oedemaa", owner: false },
  { name: "vengeance_studios", owner: false },
  { name: "chxmicalover", owner: false },
  { name: "attachmentsonline", owner: false },
  { name: "nonahme1", owner: false },
  { name: "fnkstudios", owner: false },
  { name: "lantiki_official", owner: false },
  { name: "gumisdum", owner: false },
  { name: "hwasan", owner: false },
  { name: "idle___time", owner: false },
  { name: "awaitedmilitia", owner: false },
  { name: "sensorydept", owner: false },
  { name: "drolandmiller", owner: false },
  { name: "loadingtofuture", owner: false },
  { name: "excess.us", owner: false },
  { name: "fortytwoco", owner: false },
  { name: "vadis.shop", owner: false },
  { name: "blan.nyc", owner: false },
  { name: "toofar.us", owner: false },
  { name: "allure.newyork", owner: false },
  { name: "hidden.season", owner: false },
  { name: "bevyi.us", owner: false },
  { name: "aiona.us", owner: false },
  { name: "vega9602k", owner: false },
  { name: "lowkey.industries", owner: false },
  { name: "chinatowncountryclub", owner: false },
  { name: "sketsaparis", owner: false },
  { name: "madebydovbt", owner: false },
  { name: "forevakaash", owner: false },
  { name: "corporate world", owner: false },
  { name: "iconaclub", owner: true },
  { name: "basketcase.gallery", owner: false },
  { name: "paradoxeparis", owner: false },
  { name: "emestudios", owner: false },
  { name: "maharishi", owner: false },
  { name: "__heavencanwait__", owner: false },
  { name: "sundae.school", owner: false },
  { name: "nomaintenance", owner: false },
  { name: "thegvgallery", owner: false },
  { name: "cozy.worldwidee", owner: false },
  { name: "poolhousenewyork", owner: false },
  { name: "hound.ac", owner: false },
  { name: "ditch", owner: false },
  { name: "forcesunseen", owner: false },
  { name: "Badson.us", owner: false },
  { name: "ArtificialFever", owner: false },
  { name: "rangercartel", owner: false },
  { name: "blanksbythirteen", owner: false },
  { name: "thirteenstudios", owner: false },
  { name: "nonforyaarchive", owner: false },
  { name: "vicinity.de", owner: false },
  { name: "shineluxarystudios", owner: false },
  { name: "rdvstudios", owner: false },
  { name: "alreadywritten", owner: false },
  { name: "intervalrapture", owner: false },
  { name: "deadatlantic", owner: false },
  { name: "mudmetal", owner: false },
  { name: "cyvist", owner: false },
  { name: "golfclub73", owner: false },
  { name: "worksofmadness", owner: false },
  { name: "misanthropestudios", owner: false },
  { name: "omneeworld", owner: false },
  { name: "personalfears", owner: false },
  { name: "2001odysey", owner: false },
  { name: "astonecoldstudiosproduction", owner: false },
  { name: "saeminium", owner: false },
  { name: "youngchickenpox", owner: false },
  { name: "cultureloss", owner: false },
  { name: "psdnyms", owner: false },
  { name: "winterhouse__", owner: false },
  { name: "awareness_society47", owner: false },
  { name: "another.state", owner: false },
  { name: "floatinnn", owner: false },
  { name: "bomiworks", owner: false },
  { name: "mosaic_shadow_print", owner: false },
  { name: "pythia", owner: false },
  { name: "whoiswhoknows", owner: false },
  { name: "stolenarts_", owner: false },
  { name: "spooky__woods", owner: false },
  { name: "22kilogram", owner: false },
  { name: "emptyspaces", owner: false },
  { name: "eraworldwideclub", owner: false },
  { name: "kontend1", owner: false },
  { name: "twofour.official", owner: false },
  { name: "solitairebrand", owner: false },
  { name: "sicrettuma_", owner: false },
  { name: "menacelosangeles", owner: false },
  { name: "phantomblue.xyz", owner: false },
  { name: "shitbysheff", owner: false },
  { name: "optimisticadolescence", owner: false },
  { name: "evotunes.xyz", owner: false },
  { name: "katpif_", owner: false },
  { name: "gadyonsh", owner: false },
  { name: "throneroomx", owner: false },
  { name: "ntmb_official", owner: false },
  { name: "miragearchives", owner: false },
  { name: "demiknj", owner: false },
  { name: "kantostarter", owner: false },
  { name: "Mutimer.com", owner: false },
  { name: "slovakiandreams", owner: false },
  { name: "corpdeslovakia", owner: false },
  { name: "insain.worldwide", owner: false },
  { name: "_chidlrenofthesun_", owner: false },
  { name: "lildenimjeanius", owner: false },
  { name: "septemberseventhstudios", owner: false },
  { name: "ihp.ihp.ihp", owner: false },
  { name: "pdf.channel", owner: false },
  { name: "yearsoftears", owner: false },
  { name: "bykodyphillips", owner: false },
  { name: "srrysora", owner: false },
  { name: "angel333online", owner: false },
  { name: "joy_divizn", owner: false },
  { name: "byjeshal", owner: false },
  { name: "derschutze london", owner: false },
  { name: "kyonijr", owner: false },
  { name: "nikbentelstudio", owner: false }
];

// Generate a single brand
const generateBrand = (id: number, brandData: { name: string, owner: boolean }): Brand => {
  const style = brandStyles[Math.floor(Math.random() * brandStyles.length)];
  const name = brandData.name;
  const instagramHandle = name.toLowerCase().replace(/\s+|[^a-z0-9_]/g, '');
  const logoUrl = placeholderImages[id % placeholderImages.length];
  const featured = brandData.owner || Math.random() > 0.85; // Owners or about 15% of brands are featured
  
  // Generate dates spanning from the next 2 weeks to 6 months from now
  const today = new Date();
  const sixMonthsLater = new Date();
  sixMonthsLater.setMonth(today.getMonth() + 6);
  
  // Distribute drop dates to show the color coding in action
  let dropDate;
  const rand = Math.random();
  if (rand < 0.25) {
    // 25% of dates within a week (red)
    const oneWeekLater = new Date();
    oneWeekLater.setDate(today.getDate() + 7);
    dropDate = randomDate(today, oneWeekLater);
  } else if (rand < 0.60) {
    // 35% of dates within a month (yellow)
    const oneWeekLater = new Date();
    oneWeekLater.setDate(today.getDate() + 7);
    const oneMonthLater = new Date();
    oneMonthLater.setMonth(today.getMonth() + 1);
    dropDate = randomDate(oneWeekLater, oneMonthLater);
  } else {
    // 40% of dates beyond a month (green)
    const oneMonthLater = new Date();
    oneMonthLater.setMonth(today.getMonth() + 1);
    dropDate = randomDate(oneMonthLater, sixMonthsLater);
  }
  
  return {
    id: `brand-${id}`,
    name,
    style,
    logoUrl,
    instagramHandle,
    dropDate,
    featured,
    description: featured ? `${name} is a cutting-edge ${style} brand that's redefining fashion with bold designs and sustainable practices.` : undefined
  };
};

// Generate brands from the provided list
export const generateBrands = (): Brand[] => {
  return saturnLaBrands.map((brandData, i) => generateBrand(i, brandData));
};

// Export the generated brands
const brands: Brand[] = generateBrands();
export default brands;
