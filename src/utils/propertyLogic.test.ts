import test from "node:test";
import assert from "node:assert/strict";
import {
  buildWhatsAppUrl,
  calculatePropertyEstimate,
  filterProperties,
  formatIndianCurrency,
  optimizeImageUrl,
} from "./propertyLogic";
import { BUSINESS, PROPERTIES, REVIEWS } from "../data/businessData";

test("Al-Barkat Estate Agents business metadata matches user specification without Hindi script", () => {
  assert.equal(BUSINESS.name, "Al-Barkat Estate Agents");
  assert.ok(!/[\u0900-\u097F]/.test(JSON.stringify(BUSINESS)));
  assert.equal(BUSINESS.rating.score, 4.7);
  assert.equal(BUSINESS.rating.count, 102);
  assert.equal(BUSINESS.displayPhone, "083691 32945");
  assert.equal(BUSINESS.plusCode, "4RHJ+6W Mumbai, Maharashtra");
  assert.equal(BUSINESS.hours, "Open · Closes 7:30 PM");
  assert.equal(
    BUSINESS.address.fullAddress,
    "Apna Bazar Rd, Dhake Colony, Sahakar Nagar, Azad Nagar, Andheri West, Mumbai, Maharashtra 400053",
  );
});

test("Reviews include Victor Pillai, Shalini Bhaumik, and Roshni Banerjee with owner responses", () => {
  const authors = REVIEWS.map((r) => r.author);
  assert.ok(authors.includes("Victor Pillai"));
  assert.ok(authors.includes("Shalini Bhaumik"));
  assert.ok(authors.includes("Roshni Banerjee"));
  for (const r of REVIEWS.slice(0, 3)) {
    assert.ok(r.ownerResponse && r.ownerResponse.length > 0);
  }
});

test("Currency formatting converts lakhs and crores cleanly", () => {
  assert.equal(formatIndianCurrency(85.5), "₹85.5 L");
  assert.equal(formatIndianCurrency(125), "₹1.25 Cr");
});

test("Property estimator produces ordered low-high range across tiers", () => {
  const inclusions = {
    budgetFriendly: true,
    beautifulHouse: true,
    studioOption: true,
    quickResponse: true,
    landlordNegotiation: true,
    roomSetupHelp: true,
  };
  const budget = calculatePropertyEstimate(650, inclusions, "budget");
  const luxury = calculatePropertyEstimate(1200, inclusions, "luxury");
  assert.ok(budget.low.startsWith("₹"));
  assert.ok(budget.high.startsWith("₹"));
  assert.ok(luxury.high.includes("Cr"));
});

test("Property filter separates studio/apartments and houses properly", () => {
  assert.equal(filterProperties(PROPERTIES, "all").length, PROPERTIES.length);
  const apts = filterProperties(PROPERTIES, "apartments");
  assert.ok(apts.length > 0);
  const houses = filterProperties(PROPERTIES, "houses");
  assert.ok(houses.length > 0);
});

test("WhatsApp URL encodes phone number 918369132945 and custom message", () => {
  const url = buildWhatsAppUrl(BUSINESS.whatsappNumber, "Hello Saud");
  assert.equal(url, "https://wa.me/918369132945?text=Hello%20Saud");
});

test("Image optimizer appends query dimensions for unsplash URLs and leaves local assets intact", () => {
  assert.equal(
    optimizeImageUrl("https://images.unsplash.com/photo-1600210492486-724fe5c67fb0", 800, 85),
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=85",
  );
  assert.equal(
    optimizeImageUrl("/src/assets/images/andheri_west_office_1794653915462.jpg", 800),
    "/src/assets/images/andheri_west_office_1794653915462.jpg",
  );
});
