export type PropertyTypology = "studio" | "2bhk" | "3bhk" | "4bhk";
export type LocationTier = "budget" | "prime" | "luxury";
export type PropertyFilterCategory = "all" | "apartments" | "houses";

export interface PropertyRoom {
  name: string;
  description: string;
  imageUrl: string;
  details: string[];
}

export interface PropertyItem {
  id: string;
  title: string;
  subTitle: string;
  typology: string;
  location: string;
  area: string;
  year: string;
  heroImage: string;
  aspect: string;
  brief: string;
  direction: string;
  materials: string[];
  keyFeatures: string[];
  rooms: PropertyRoom[];
  testimonial?: {
    quote: string;
    client: string;
    society: string;
  };
}

export interface BudgetInclusions {
  budgetFriendly: boolean;
  beautifulHouse: boolean;
  studioOption: boolean;
  quickResponse: boolean;
  landlordNegotiation: boolean;
  roomSetupHelp: boolean;
}

export function optimizeImageUrl(url: string, width = 1200, quality = 80): string {
  if (!url || !url.includes("images.unsplash.com")) return url;
  try {
    return `${url.split("?")[0]}?auto=format&fit=crop&w=${width}&q=${quality}`;
  } catch {
    return url;
  }
}

export function buildImageSrcSet(url: string): string {
  if (!url || !url.includes("images.unsplash.com")) return "";
  try {
    const base = url.split("?")[0];
    return `${base}?auto=format&fit=crop&w=480&q=75 480w, ${base}?auto=format&fit=crop&w=800&q=80 800w, ${base}?auto=format&fit=crop&w=1200&q=82 1200w, ${base}?auto=format&fit=crop&w=1800&q=85 1800w`;
  } catch {
    return "";
  }
}

export function buildWhatsAppUrl(whatsappNumber: string, message?: string): string {
  const encoded = encodeURIComponent(
    message ||
      "Hello Al-Barkat Estate Agents team, I am looking for properties in Andheri West, Mumbai and would like to speak with Mr. Mohammed Saud.",
  );
  return `https://wa.me/${whatsappNumber}?text=${encoded}`;
}

export function filterProperties(
  properties: PropertyItem[],
  category: PropertyFilterCategory,
): PropertyItem[] {
  if (category === "all") return properties;
  if (category === "apartments") {
    return properties.filter(
      (item) =>
        item.typology.includes("Studio") ||
        item.typology.includes("1 BHK") ||
        item.typology.includes("2"),
    );
  }
  return properties.filter(
    (item) =>
      item.typology.includes("3") ||
      item.typology.includes("4") ||
      item.typology.includes("House"),
  );
}

export function formatIndianCurrency(lakhs: number): string {
  if (lakhs >= 100) {
    return `₹${(lakhs / 100).toFixed(2)} Cr`;
  }
  return `₹${lakhs.toFixed(1)} L`;
}

export function calculatePropertyEstimate(
  carpetAreaSqft: number,
  inclusions: BudgetInclusions,
  tier: LocationTier,
): { low: string; high: string } {
  let ratePerSqFt = 26500;
  if (tier === "budget") ratePerSqFt = 21500;
  if (tier === "prime") ratePerSqFt = 26500;
  if (tier === "luxury") ratePerSqFt = 33000;

  let multiplier = 0.95;
  if (inclusions.budgetFriendly) multiplier -= 0.02;
  if (inclusions.beautifulHouse) multiplier += 0.03;
  if (inclusions.studioOption) multiplier -= 0.01;
  if (inclusions.quickResponse) multiplier += 0.01;

  const base = carpetAreaSqft * ratePerSqFt * multiplier;
  const lowLakhs = (base * 0.96) / 100000;
  const highLakhs = (base * 1.08) / 100000;

  return {
    low: formatIndianCurrency(lowLakhs),
    high: formatIndianCurrency(highLakhs),
  };
}
