export interface RetreatType {
  id: number;
  title: string;
  description: string;
  cover_photo: {
    file: {
      url: string;
    };
    attachment_id: number;
    thumbnail?: {
      url: string;
    };
    medium?: {
      url: string;
    };
    large?: {
      url: string;
    };
    medium_large?: {
      url: string;
    };
  };
  buyout_cost_usd: number | null;
  airport_code: string | null;
  mins_to_airport: number | null;
  private_single_cost_usd: number | null;
  num_beds: number;
  num_bedrooms: number;
  website_url: string;
  country: string;
  recommended_tags?: string[];
}

const retreats = [
  {
    id: 247822,
    title: "Naum Tulum",
    description:
      "Naum is the perfect location for your next wellness retreat or private event.\r\n\r\nNaum is a canvas for the exploration of music, art and wellness. Deep dive into a healing retreat or create the event you have always been dreaming of.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Naum-Tulum-retreat-venue-mexico-hero-photo1.jpeg",
      },
      attachment_id: 248413,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Naum-Tulum-retreat-venue-mexico-hero-photo1-150x150.jpeg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Naum-Tulum-retreat-venue-mexico-hero-photo1-300x169.jpeg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Naum-Tulum-retreat-venue-mexico-hero-photo1-1024x575.jpeg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Naum-Tulum-retreat-venue-mexico-hero-photo1-768x431.jpeg",
      },
    },
    buyout_cost_usd: 2000,
    airport_code: "CUN",
    mins_to_airport: 38,
    private_single_cost_usd: null,
    num_beds: 57,
    num_bedrooms: 56,
    website_url: "https://naumtulum.com",
    country: "Mexico",
  },
  {
    id: 247745,
    title: "Sowilo Retreat",
    description:
      "Welcome to our enchanting all-inclusive mountain retreat, where ordinary fades away and well-being takes center stage. Nestled amidst nature's embrace, our cozy tiny houses and cabins beckon you to experience the serenity and rejuvenating power of the great outdoors.\r\n\r\nIndulge in the ultimate relaxation with our all-inclusive service, treating you to delectable healthy cuisine and snug accommodations. Our charming tiny houses offer the luxurious comfort of a hotel room, complete with a beautiful shower, petite kitchenette, and a spacious bed enveloped in a warm and inviting atmosphere. Perfect for families or groups of friends seeking an unforgettable getaway.\r\n\r\nElevate your culinary adventures with our fully equipped kitchen and outdoor grill, inviting you to sizzle up some delights during your stay. Delight in the convenience of a la carte breakfast and dinner, served in our cozy Eatery or delivered straight to your unit.\r\n\r\nRecharge your body and soul at our on-site studio, practice yoga or workouts both morning and evening. Step outside and explore the breathtaking hiking trail winding around our property, inviting you to immerse yourself in nature's splendor.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Sowilo-Retreat-retreat-venue-united-states-hero-photo.jpeg",
      },
      attachment_id: 247959,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Sowilo-Retreat-retreat-venue-united-states-hero-photo-150x150.jpeg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Sowilo-Retreat-retreat-venue-united-states-hero-photo-300x200.jpeg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Sowilo-Retreat-retreat-venue-united-states-hero-photo-1024x683.jpeg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Sowilo-Retreat-retreat-venue-united-states-hero-photo-768x512.jpeg",
      },
    },
    buyout_cost_usd: 5000,
    airport_code: "LAX",
    mins_to_airport: 51,
    private_single_cost_usd: null,
    num_beds: 259,
    num_bedrooms: 216,
    website_url: "https://www.sowiloretreat.us/",
    country: "United States",
  },
  {
    id: 246496,
    title: "MGallery The Bodrum Hotel Yalikavak",
    description:
      "Boutique hotels with personality for a remarkable travel experience\r\n\r\nWelcome to our luxurious five star beach hotel in the heart of Bodrum, Turkey! Our hotel offers an unparalleled vacation experie nce with its stunning beachfront location, world class amenities, and exceptional service. As you step into our grand lobby, you'll be greeted by our friendly staff and instantly transported to a world of art and luxury.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/MG-1.jpg",
      },
      attachment_id: 246553,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/MG-1-150x150.jpg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/MG-1-300x143.jpg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/MG-1-1024x488.jpg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/MG-1-768x366.jpg",
      },
    },
    buyout_cost_usd: 100000,
    airport_code: "IST",
    mins_to_airport: 82,
    private_single_cost_usd: 350,
    num_beds: 113,
    num_bedrooms: 60,
    website_url: "https://www.mgallerybodrum.com/",
    country: "Türkiye",
    recommended_tags: [
      "Internally Recommended",
      "Internally Recommended - Corporate Venue",
      "Quote Requested - Corporate",
    ],
  },
  {
    id: 244279,
    title: "The Lodge at Schroon Lake",
    description:
      "Discover the joy of the Adirondack Mountains at an expansive lakeside resort teeming with outdoor play, family activities, great food, and good times. The Lodge at Schroon Lake is a beautiful 36-acre hotel on the west shore of Schroon Lake. Following a $21-million renovation, the resort features 116 rooms, 32 of which are pet-friendly, including hotel rooms, standalone cabins and chalets, and upscale glamping sites.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/the-lodge-at-schroon-hero.jpg",
      },
      attachment_id: 244280,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/the-lodge-at-schroon-hero-150x150.jpg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/the-lodge-at-schroon-hero-300x200.jpg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/the-lodge-at-schroon-hero-1024x683.jpg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/the-lodge-at-schroon-hero-768x512.jpg",
      },
    },
    buyout_cost_usd: null,
    airport_code: "JFK",
    mins_to_airport: 76,
    private_single_cost_usd: 215,
    num_beds: 128,
    num_bedrooms: 111,
    website_url: "https://www.lodgeatschroonlake.com/",
    country: "United States",
  },
  {
    id: 243869,
    title: "Shangri – Las Yanuca Island, Fiji",
    description:
      "Inspiration on the horizon, nature at your doorstep nestled on the private Yanuca Island, Shangri-La Yanuca Island, Fiji offers the essence of an exclusive island hideaway yet is conveniently connected to the mainland by a causeway. The 443 ocean view guest rooms take their inspiration from a traditional Fijian village featuring rich elements of local culture and nature.\n",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Shangri-Las-Yanuca-Island-retreat-venue-fiji-best-photo-1-1-1.jpg",
      },
      attachment_id: 243876,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Shangri-Las-Yanuca-Island-retreat-venue-fiji-best-photo-1-1-1-150x150.jpg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Shangri-Las-Yanuca-Island-retreat-venue-fiji-best-photo-1-1-1-300x200.jpg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Shangri-Las-Yanuca-Island-retreat-venue-fiji-best-photo-1-1-1-1024x682.jpg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Shangri-Las-Yanuca-Island-retreat-venue-fiji-best-photo-1-1-1-768x511.jpg",
      },
    },
    buyout_cost_usd: null,
    airport_code: "NAN",
    mins_to_airport: 101,
    private_single_cost_usd: 233,
    num_beds: 304,
    num_bedrooms: 208,
    website_url: "https://www.shangri-la.com/yanucaisland/fijianresort/",
    country: "Fiji",
  },
  {
    id: 243862,
    title: "DoubleTree Resort by Hilton Hotel",
    description:
      "South Pacific views from our beachfront hotel in Fiji\n\nOverlooking the Mamanuca Islands, our beachfront hotel in Fiji offers an oasis of tranquility less than 30 minutes from Nadi International Airport. We have a lagoon-style pool overlooking the ocean, tennis courts, and a fitness center. We also offer cultural experiences, sightseeing tours, horseback riding and paintballing.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/DoubleTree-Resort-by-Hilton-Hotel-Fiji-Sonaisali-Island-retreat-venue-fiji-best-photo-1-2.jpg",
      },
      attachment_id: 243865,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/DoubleTree-Resort-by-Hilton-Hotel-Fiji-Sonaisali-Island-retreat-venue-fiji-best-photo-1-2-150x150.jpg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/DoubleTree-Resort-by-Hilton-Hotel-Fiji-Sonaisali-Island-retreat-venue-fiji-best-photo-1-2-300x200.jpg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/DoubleTree-Resort-by-Hilton-Hotel-Fiji-Sonaisali-Island-retreat-venue-fiji-best-photo-1-2-1024x682.jpg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/DoubleTree-Resort-by-Hilton-Hotel-Fiji-Sonaisali-Island-retreat-venue-fiji-best-photo-1-2-768x511.jpg",
      },
    },
    buyout_cost_usd: null,
    airport_code: "NAN",
    mins_to_airport: 101,
    private_single_cost_usd: 235,
    num_beds: 155,
    num_bedrooms: 148,
    website_url:
      "https://www.hilton.com/en/hotels/nansidi-doubletree-resort-fiji-sonaisali-island/",
    country: "Fiji",
  },
  {
    id: 243840,
    title: "Crowne Plaza Fiji Nadi Bay Resort & Spa",
    description:
      "Fiji’s newest premium resort experience.\n\nFind your sanctuary at the Crowne Plaza Fiji Nadi Bay Resort & Spa, Fiji’s newest resort experience! Situated in Nadi Bay along the stunning Wailoaloa Beach, our location offers both a serene and picturesque beachfront experience, coupled with easy access to exciting activities and attractions.\n\nFrom our premium rooms to oceanview suites, all our 324 rooms are designed to provide you with the utmost comfort and a restful night's sleep. For families, our spacious family rooms offer the perfect blend of convenience and relaxation, ensuring a memorable experience for all.\n\nIf you’re coming for business, our meeting and event spaces are equipped to host successful gatherings of any size and with the addition of our new convention centre, we are the ideal destination for conference and corporate functions.\n\nEnjoy leisurely moments at one of our pools or simply bask under the tropical sun with direct beach access to Wailoaloa Beach on our doorstep. Our kids and teens clubs offer exciting activities and entertainment to keep them engaged and happy throughout their stay.\n\nWhether you’re rejuvenating in our spa, savouring the premium offering at our whiskey bar, or having your retail therapy fix at the newly built retail arcade, there is always something to delight your senses.\n\nImmerse yourself in the warmth of our Fijian hospitality at Crowne Plaza Fiji Nadi Resort & Spa.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Crowne-Plaza-Fiji-Nadi-Bay-Resort-Spa-retreat-venue-fiji-best-photo-1.jpg",
      },
      attachment_id: 243842,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Crowne-Plaza-Fiji-Nadi-Bay-Resort-Spa-retreat-venue-fiji-best-photo-1-150x150.jpg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Crowne-Plaza-Fiji-Nadi-Bay-Resort-Spa-retreat-venue-fiji-best-photo-1-300x200.jpg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Crowne-Plaza-Fiji-Nadi-Bay-Resort-Spa-retreat-venue-fiji-best-photo-1-1024x682.jpg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Crowne-Plaza-Fiji-Nadi-Bay-Resort-Spa-retreat-venue-fiji-best-photo-1-768x512.jpg",
      },
    },
    buyout_cost_usd: null,
    airport_code: "NYN",
    mins_to_airport: 70,
    private_single_cost_usd: 235,
    num_beds: 260,
    num_bedrooms: 244,
    website_url:
      "https://www.ihg.com/crowneplaza/hotels/us/en/nadi/nannb/hoteldetail",
    country: "Fiji",
  },
  {
    id: 243838,
    title: "Fiji Marriott Resort Momi Bay",
    description:
      "Escape to Fiji Marriott Resort Momi Bay, where tranquil waters and relaxation await. Situated on the western coast of Viti Levu in Momi Bay, our Fijian owned 5-star resort offers everything you need for a Fiji getaway. Spend your days lounging on our lagoon beaches, swim in one of our three pools or relax with a massage at our hotels Quan spa. Whilst your kids play in the Turtles Kids Club or splash in the children's pool, head over to one of our restaurants for an evening of oceanfront dining. Explore a multitude of exotic natural attractions and world-class diving and surfing spots within minutes of our Fiji hotel. If you are planning a business or social event near Nadi, take advantage of our stylish indoor venues or picturesque outdoor locations. In the evening, unwind in one of our resorts romantic overwater bures or well-appointed guest rooms with views of the ocean or lagoon from every window. Whatever your reason for visiting Fiji, find your ultimate island retreat at Fiji Marriott Resort Momi Bay.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Fiji-Marriott-Resort-Momi-Bay-retreat-venue-fiji-best-photo-1.jpg",
      },
      attachment_id: 243839,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Fiji-Marriott-Resort-Momi-Bay-retreat-venue-fiji-best-photo-1-150x150.jpg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Fiji-Marriott-Resort-Momi-Bay-retreat-venue-fiji-best-photo-1-300x200.jpg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Fiji-Marriott-Resort-Momi-Bay-retreat-venue-fiji-best-photo-1-1024x684.jpg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Fiji-Marriott-Resort-Momi-Bay-retreat-venue-fiji-best-photo-1-768x513.jpg",
      },
    },
    buyout_cost_usd: null,
    airport_code: "NAN",
    mins_to_airport: 102,
    private_single_cost_usd: 246,
    num_beds: 94,
    num_bedrooms: 65,
    website_url:
      "https://www.marriott.com/en-us/hotels/nanmc-fiji-marriott-resort-momi-bay/overview/",
    country: "Fiji",
  },
  {
    id: 243819,
    title: "Sheraton Fiji Golf & Beach Resort",
    description:
      "Step into our revitalized Sheraton Fiji Golf & Beach Resort, a multi-award-winning Fijian-owned resort is a convenient 30-minute scenic commute from Nadi International Airport. Renowned for its infamous ‘Cola Vina’ (Welcome) echoing far and wide across the resort, welcoming guests to the rhythmic beats of the “Lali” (Fijian drum) and a big BULA from friendly local hosts. Immerse into a symphony of unforgettable experiences whether lounging on beaches, teeing off at the 18-hole Championship Golf Course, playing a hand of tennis, savoring delicious cuisines and local sustainable dining options, swimming in lagoon-style pools, rejuvenation in our sister-spa or exploring Fiji’s culture, and edu-taining kids club where every moment resonates with island vibrancy. Weave every personalized experience into your celebrations or corporate gatherings at our flexible ballrooms, including the Denarau Island Convention Center or enliven the ambiance at our al fresco venues.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Sheraton-Fiji-Golf-Beach-Resort-retreat-venue-fiji-best-photo-1-1.jpg",
      },
      attachment_id: 243837,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Sheraton-Fiji-Golf-Beach-Resort-retreat-venue-fiji-best-photo-1-1-150x150.jpg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Sheraton-Fiji-Golf-Beach-Resort-retreat-venue-fiji-best-photo-1-1-300x200.jpg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Sheraton-Fiji-Golf-Beach-Resort-retreat-venue-fiji-best-photo-1-1-1024x683.jpg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Sheraton-Fiji-Golf-Beach-Resort-retreat-venue-fiji-best-photo-1-1-768x512.jpg",
      },
    },
    buyout_cost_usd: null,
    airport_code: "FGA",
    mins_to_airport: 89,
    private_single_cost_usd: 250,
    num_beds: 67,
    num_bedrooms: 43,
    website_url:
      "https://www.marriott.com/en-us/hotels/nansi-sheraton-fiji-golf-and-beach-resort/overview/",
    country: "Fiji",
  },
  {
    id: 243816,
    title: "Warwick Fiji",
    description:
      "Ideally situated in the heart of the Coral Coast with white sand beaches and crystal-clear lagoons, the five-star Warwick Fiji resort offers an authentic experience unlike any other. The Warwick Fiji won’t just set the standard for your Fijian experience, it will exceed it… as we have been doing for nearly 40 years.\n\nPerfect for family holidays, weddings or honeymoon, our luxury hotel 5 star accommodations set the standard for exclusive beachfront resorts in Fiji, providing everything you expect from the Warwick name. With some of the highest rated restaurants in all of Fiji in one location, enjoy pre-dinner drinks at our beautiful Sunset Terrace bar, a romantic dinner at the famous Wicked Walu, our private island seafood restaurant, take in a show-stopping teppanyaki performance or indulge in mouth-watering sushi at Sazanami, partake in a flavorful plate of pasta and other Italian creations at Pappagallo, or experience the wide variety the buffet offers at Bula Brasserie before finishing the evening with after dinner drinks at our Hibiscus lounge.\n\nWith both family and adults only facilities, this tropical all-inclusive family resort overlooking the beach welcomes you with traditional decor and wooden carvings that reflect classic Fijian style. The Warwick Fiji offers a wide variety of activities including the Warwick Spa, 2 pools with pool bars, water sports and a supervised kids club. For those looking for an off resort experience, the resort is within close proximity to Biausevu waterfall, Sigatoka river safari, Sigatoka Sands Dunes and Kula Wild Park. Guests can also immerse in a variety of cultural experiences with local village tours or enjoy an afternoon of shopping at Sigatoka town.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Warwick-Fiji-retreat-venue-fiji-best-photo-1.jpg",
      },
      attachment_id: 243817,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Warwick-Fiji-retreat-venue-fiji-best-photo-1-150x150.jpg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Warwick-Fiji-retreat-venue-fiji-best-photo-1-300x200.jpg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Warwick-Fiji-retreat-venue-fiji-best-photo-1-1024x683.jpg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Warwick-Fiji-retreat-venue-fiji-best-photo-1-768x512.jpg",
      },
    },
    buyout_cost_usd: null,
    airport_code: "NAN",
    mins_to_airport: 101,
    private_single_cost_usd: 179,
    num_beds: 50,
    num_bedrooms: 33,
    website_url: "https://www.warwickhotels.com/warwick-fiji",
    country: "Fiji",
  },
  {
    id: 243813,
    title: "InterContinental Fiji Golf Resort & Spa",
    description:
      "A luxurious sanctuary in Fiji\n\nThe iconic InterContinental Fiji is nestled amongst 35 acres of tropical gardens located along one of the best beaches in the world, Natadola Beach. The beach overlooks the Pacific Ocean and is protected by a reef that creates an aqua-blue ocean-facing lagoon. Authentic Fijian hospitality enhances exceptional elevated dining experiences at our award-winning restaurant, Navo. Relax with a swim at one of our three pools, indulge in our spa or enjoy water sports and scuba diving.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/InterContinental-Fiji-Golf-Resort-Spa-retreat-venue-fiji-best-photo-1.webp",
      },
      attachment_id: 243814,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/InterContinental-Fiji-Golf-Resort-Spa-retreat-venue-fiji-best-photo-1-150x150.webp",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/InterContinental-Fiji-Golf-Resort-Spa-retreat-venue-fiji-best-photo-1-300x169.webp",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/InterContinental-Fiji-Golf-Resort-Spa-retreat-venue-fiji-best-photo-1-1024x576.webp",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/InterContinental-Fiji-Golf-Resort-Spa-retreat-venue-fiji-best-photo-1-768x432.webp",
      },
    },
    buyout_cost_usd: null,
    airport_code: "YPO",
    mins_to_airport: 107,
    private_single_cost_usd: 207,
    num_beds: 404,
    num_bedrooms: 286,
    website_url:
      "https://www.ihg.com/intercontinental/hotels/us/en/natadola/nanha/hoteldetail",
    country: "Fiji",
  },
  {
    id: 243753,
    title: "Sofitel Fiji Resort and Spa",
    description:
      "Sofitel Fiji Resort and Spa is located on a beautiful Denarau Island. Our Fiji beach resort offers Waitui Bar & Grill our new adults' only poolside signature dining experience, SUKA our vibrant beach bar, offering over 30 house-made infused rums, SOLIS our beachside seafood restaurant, Republik Night Club, Niu Kids Beach Club a brand new children's club to enjoy on the family side of the resort, Teenage Zone for 12 to 16 year old guests with a X-Box, PlayStation & arcade games.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/DJI_0068-1.jpg",
      },
      attachment_id: 243756,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/DJI_0068-1-150x150.jpg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/DJI_0068-1-300x169.jpg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/DJI_0068-1-1024x575.jpg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/DJI_0068-1-768x431.jpg",
      },
    },
    buyout_cost_usd: null,
    airport_code: "TSP",
    mins_to_airport: 80,
    private_single_cost_usd: 330,
    num_beds: 382,
    num_bedrooms: 225,
    website_url: "https://www.sofitel-fiji.com/",
    country: "Fiji",
  },
  {
    id: 243447,
    title: "Epicurean Atlanta, Autograph Collection",
    description:
      "Epicurean Atlanta, Autograph Collection is filled with culinary-inspired design elements, from butcher block to brushed metals. Foodies love our 178 hotel rooms, each with an artisanal pantry and eclectic furnishings. Revel in our AAA Four Diamond hotel's luxury amenities, including our gorgeous events lawn and the Sky Terrace, which offers sweeping views of Midtown Atlanta. Visit the innovative Epicurean Theatre, where guests watch, listen and learn from a curated lineup of chefs, winemakers, mixologists and artists. Host weddings and meetings in Atlanta, GA in 11,000 square feet of indoor and outdoor venues. Then explore the vibrant arts hub that is Midtown, home to Piedmont Park and the Atlanta Botanical Gardens. The epicurean spirit is alive and well at our luxury boutique hotel on West Peachtree Street. We provide a sanctuary for the connoisseurs of life where each taste and sip takes you on a new journey of discovery.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/epicurean-atlanta-autograph.jpg",
      },
      attachment_id: 243646,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/epicurean-atlanta-autograph-150x150.jpg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/epicurean-atlanta-autograph-300x214.jpg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/epicurean-atlanta-autograph-1024x731.jpg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/epicurean-atlanta-autograph-768x548.jpg",
      },
    },
    buyout_cost_usd: null,
    airport_code: "LAX",
    mins_to_airport: 112,
    private_single_cost_usd: 452,
    num_beds: 31,
    num_bedrooms: 21,
    website_url: "https://www.epicureanhotelatlanta.com/",
    country: "United States",
  },
  {
    id: 243446,
    title: "The Starling Atlanta Midtown by Hilton",
    description:
      "A unique stay minutes from downtown. In the heart of Midtown Atlanta, we are next to Colony Square with several restaurants, shops, and featured events. The High Museum of Art, MODA, Piedmont Park, and Atlanta Botanical Gardens are all within a mile of our hotel. Downtown attractions are less than 15 minutes away. Our hotel offers 45,000 sq. ft. of meeting space and a seasonal outdoor pool.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/The-Starling-Atlanta-Midtown-retreat-venue-united-states-hero-photo.jpeg",
      },
      attachment_id: 246593,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/The-Starling-Atlanta-Midtown-retreat-venue-united-states-hero-photo-150x150.jpeg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/The-Starling-Atlanta-Midtown-retreat-venue-united-states-hero-photo-300x188.jpeg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/The-Starling-Atlanta-Midtown-retreat-venue-united-states-hero-photo-1024x640.jpeg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/The-Starling-Atlanta-Midtown-retreat-venue-united-states-hero-photo-768x480.jpeg",
      },
    },
    buyout_cost_usd: null,
    airport_code: "LAX",
    mins_to_airport: 72,
    private_single_cost_usd: 156,
    num_beds: 59,
    num_bedrooms: 58,
    website_url:
      "https://www.hilton.com/en/hotels/atltwqq-the-starling-atlanta-midtown/",
    country: "United States",
  },
  {
    id: 233056,
    title: "Discovery Kartika Plaza Hotel, Bali",
    description:
      "Set amidst an oasis of 8 hectares of tropical gardens with swaying coconut palms, Discovery Kartika Plaza Hotel, Bali has a wide choice of restaurants, excellent sporting facilities and it’s very own Discovery Shopping Mall. It is ideally situated within walking distance of shops, restaurants and entertainment facilities and is conveniently positioned for international conferences and incentives. Right on the beachfront of popular South Kuta, the Discovery Kartika Plaza Hotel, Bali offers a mix of 318 Ocean Facing Rooms including Suites and Luxury Beachfront Villas.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/DKPH_header_1.jpg",
      },
      attachment_id: 243747,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/DKPH_header_1-150x150.jpg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/DKPH_header_1-300x141.jpg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/DKPH_header_1-1024x480.jpg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/DKPH_header_1-768x360.jpg",
      },
    },
    buyout_cost_usd: null,
    airport_code: "DPS",
    mins_to_airport: 57,
    private_single_cost_usd: 150,
    num_beds: 171,
    num_bedrooms: 155,
    website_url: "https://www.discoverykartikaplaza.com/",
    country: "Indonesia",
  },
  {
    id: 232501,
    title: "Salamander Middleburg Resort",
    description:
      "Nestled within the heart of Virginia’s horse and wine country, just one hour from Washington, D.C., on over 340 breathtaking acres, Salamander Middleburg is the first destination resort in the D.C. area to receive the Forbes Five-Star Award and the only Forbes Five-Star spa in Virginia. Exuding supreme luxury with equal parts gracious hospitality and historic charm, Salamander Middleburg offers boundless and inspiring activities that will delight guests including treetop zip-lining, the renowned Salamander Spa, and outstanding wineries.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/salamander-resort-spa-2.jpg",
      },
      attachment_id: 232507,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/salamander-resort-spa-2-150x150.jpg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/salamander-resort-spa-2-300x200.jpg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/salamander-resort-spa-2-1024x682.jpg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/salamander-resort-spa-2-768x512.jpg",
      },
    },
    buyout_cost_usd: null,
    airport_code: "LAX",
    mins_to_airport: 43,
    private_single_cost_usd: 650,
    num_beds: 291,
    num_bedrooms: 200,
    website_url: "https://salamanderresort.com/",
    country: "United States",
  },
  {
    id: 231324,
    title: "Hilton Garden Inn New York Manhattan",
    description:
      "Boasting a 24-hour fitness centre and 24-hour business centre, Hilton Garden Inn New York Manhattan East is located just 2 km from Times Square. Free WiFi access is available.\r\n\r\nEach room includes a work desk and flat-screen cable TV. Select rooms feature a city view.\r\n\r\nHilton Garden Inn Manhattan East has a 24-hour front desk. There are also laundry facilities.\r\n\r\nOn-site dining is available at the Garden Grille and Bar. Additional dining options are located within walking distance of the property.\r\n\r\nHilton Garden Inn New York Manhattan East is 966 metres from the Rockefeller Center and 1.1 km from the United Nations Headquarters. Guests at the Hilton Garden Inn will find 2 subway stations within 322 metres, which gives them access to trains E, M and 6. Times Square is 2 km away.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Manhattan-Midtown-East-retreat-venue-united-states-hero-photo1.jpeg",
      },
      attachment_id: 233039,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Manhattan-Midtown-East-retreat-venue-united-states-hero-photo1-150x150.jpeg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Manhattan-Midtown-East-retreat-venue-united-states-hero-photo1-300x199.jpeg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Manhattan-Midtown-East-retreat-venue-united-states-hero-photo1-1024x680.jpeg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Manhattan-Midtown-East-retreat-venue-united-states-hero-photo1-768x510.jpeg",
      },
    },
    buyout_cost_usd: null,
    airport_code: "BHO",
    mins_to_airport: 106,
    private_single_cost_usd: null,
    num_beds: 416,
    num_bedrooms: 227,
    website_url:
      "https://www.hilton.com/en/hotels/nycmegi-hilton-garden-inn-new-york-manhattan-midtown-east/",
    country: "United States",
    recommended_tags: ["Recommended by Tourism Board/CVB"],
  },
  {
    id: 227923,
    title: "Padma Ubud",
    description:
      "Nestled within an unspoiled river valley and overlooking the enchanting forests of Payangan, the 149-room Padma Resort Ubud is an expansive and tranquil luxury destination. Located north of Ubud, Bali’s celebrated capital of arts and culture, Padma Resort Ubud features all the five-star amenities and facilities one would expect from the renowned Padma hospitality brand, including stunning views from every room or suite, a first-class spa, an awe-inspiring 89-metre infinity swimming pool with panoramic views, signature world-class dining and modern event venues.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/padma-resort-ubud-1.jpg",
      },
      attachment_id: 243985,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/padma-resort-ubud-1-150x150.jpg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/padma-resort-ubud-1-300x200.jpg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/padma-resort-ubud-1-1024x682.jpg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/padma-resort-ubud-1-768x511.jpg",
      },
    },
    buyout_cost_usd: null,
    airport_code: "POL",
    mins_to_airport: 43,
    private_single_cost_usd: 250,
    num_beds: 406,
    num_bedrooms: 221,
    website_url: "https://padmaresortubud.com/index.php",
    country: "Indonesia",
    recommended_tags: ["Internally Recommended - Corporate Venue"],
  },
  {
    id: 227921,
    title: "Wyndham Tamansari Jivva Resort Bali",
    description:
      "Breathe in deep when you reach our Wyndham Tamansari Jivva Resort Bali and feel an unparalleled sense of relaxation as you tour our resort grounds for the first time. Whether you are looking out at the crashing waves on Lepang beach or resting on a lounge chair by our pool, you will feel refreshed by the tranquil atmosphere of our breathtaking Bali location. Take in sunsets with one of our delicious signature cocktails in hand, and soothe your soul with the sounds of lapping waves as you indulge fully in Bali's boundless natural beauty.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/jivva-bali-aerial-of-spa_S.jpg",
      },
      attachment_id: 243982,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/jivva-bali-aerial-of-spa_S-150x150.jpg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/jivva-bali-aerial-of-spa_S-300x168.jpg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/jivva-bali-aerial-of-spa_S-1024x575.jpg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/jivva-bali-aerial-of-spa_S-768x431.jpg",
      },
    },
    buyout_cost_usd: null,
    airport_code: "IUO",
    mins_to_airport: 77,
    private_single_cost_usd: 120,
    num_beds: 320,
    num_bedrooms: 186,
    website_url: "https://wyndhamjivvabali.com/",
    country: "Indonesia",
    recommended_tags: ["Internally Recommended - Corporate Venue"],
  },
  {
    id: 227786,
    title: "Maya Sanur Resort and Spa",
    description:
      "Step from lush tropical gardens onto white-sand beach and feel the gentle caress of the sea breeze as you tread the boardwalk of this former fishing village. From the moment you arrive, contemporary flourishes are counter-balanced by iconic Balinese design elements.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/main-hero-drone.jpg",
      },
      attachment_id: 243993,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/main-hero-drone-150x150.jpg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/main-hero-drone-300x169.jpg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/main-hero-drone-1024x576.jpg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/main-hero-drone-768x432.jpg",
      },
    },
    buyout_cost_usd: null,
    airport_code: "YUU",
    mins_to_airport: 71,
    private_single_cost_usd: 180,
    num_beds: 186,
    num_bedrooms: 174,
    website_url: "https://mayaresorts.com/sanur",
    country: "Indonesia",
    recommended_tags: ["Internally Recommended - Corporate Venue"],
  },
  {
    id: 227524,
    title: "The Mansion Ubud",
    description:
      "The Mansion Hotel & Spa is one of Bali’s rare gems. Set in a tropical lush green park estate, it offers outstanding hospitality and the extensive facilities of a luxury resort. The Mansion is a registered five stars luxury hotel. The Mansion is situated in the artist community of Penestanan on the Sayan Ridge just a few minutes drive from the center of Ubud, the island’s cultural center. Total of 79 rooms and villas located in the middle of the Ubud area. With a ballroom and facilities suitable for functions of up to 200 guests, a number of suites and luxurious, private grounds, The Mansion is an ideal venue for corporate functions, product launches, conferences and weddings.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/67973653.jpg",
      },
      attachment_id: 243988,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/67973653-150x150.jpg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/67973653-300x188.jpg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/67973653-768x482.jpg",
      },
    },
    buyout_cost_usd: null,
    airport_code: "TYR",
    mins_to_airport: 101,
    private_single_cost_usd: 120,
    num_beds: 200,
    num_bedrooms: 163,
    website_url: "https://themansionbali.com/",
    country: "Indonesia",
    recommended_tags: [
      "Internally Recommended - Corporate Venue",
      "Quote Requested - Corporate",
    ],
  },
  {
    id: 227179,
    title: "The Laguna",
    description:
      "Discover The Laguna, a Luxury Collection Resort & Spa, Nusa Dua, Bali, nestled near the pristine white-sand beaches of the area. Our opulent 5-star hotel promises to create cherished moments for our guests, encapsulating the very essence of Balinese arts, history, heritage, cuisine, and culture. Immerse yourself in our resort's recent transformation and take full advantage of our outstanding amenities, including seven lagoon-shaped swimming pools, six resort restaurants and bars, and a rejuvenating spa dedicated to your well-being. Whether you prefer a spacious hotel room, a lagoon access suite, or a luxurious villa at our Nusa Dua haven, you'll be greeted by contemporary designs in each accommodation. You can also envision a romantic Bali wedding in our breathtaking event spaces, capable of hosting gatherings and meetings of all sizes. Our knowledgeable hotel staff will gladly guide you to the captivating activities that Bali has to offer, from snorkeling in crystal-clear waters to seaside massages",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/The-Laguna_Areal-Shot-.webp",
      },
      attachment_id: 243975,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/The-Laguna_Areal-Shot--150x150.webp",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/The-Laguna_Areal-Shot--300x169.webp",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/The-Laguna_Areal-Shot--1024x576.webp",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/The-Laguna_Areal-Shot--768x432.webp",
      },
    },
    buyout_cost_usd: null,
    airport_code: "EER",
    mins_to_airport: 52,
    private_single_cost_usd: 240,
    num_beds: 110,
    num_bedrooms: 84,
    website_url:
      "https://www.marriott.com/en-us/hotels/dpslc-the-laguna-a-luxury-collection-resort-and-spa-nusa-dua-bali/overview/",
    country: "Indonesia",
    recommended_tags: ["Quote Requested - Corporate"],
  },
  {
    id: 226255,
    title: "Estepona Hotel & Resort Spa",
    description:
      "It is located on the beachfront, awarded each year with the blue flag.\r\n\r\nSpacious rooms for your family to enjoy in a unique enclave with a large expanse of gardens with palm trees, flowers and vegetation. Located on the outskirts of the beautiful city of Estepona and its charming port, close to Sotogrande, Ronda, Gibraltar, Tarifa, Marbella and the exclusive Puerto Banús.\r\n\r\nIt is an ideal place to live a unique and quality experience on the Costa del Sol, with a unique climate between the Atlantic Ocean and the Mediterranean Sea, protected by the imposing Sierra Bermeja.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Estepona-Hotel-Spa-Resort-retreat-venue-spain-hero-photo1.jpeg",
      },
      attachment_id: 226445,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Estepona-Hotel-Spa-Resort-retreat-venue-spain-hero-photo1-150x150.jpeg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Estepona-Hotel-Spa-Resort-retreat-venue-spain-hero-photo1-300x200.jpeg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Estepona-Hotel-Spa-Resort-retreat-venue-spain-hero-photo1-1024x683.jpeg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/Estepona-Hotel-Spa-Resort-retreat-venue-spain-hero-photo1-768x512.jpeg",
      },
    },
    buyout_cost_usd: null,
    airport_code: "MAD",
    mins_to_airport: 89,
    private_single_cost_usd: 210,
    num_beds: 406,
    num_bedrooms: 322,
    website_url: "https://www.esteponaresort.com/",
    country: "Spain",
  },
  {
    id: 226254,
    title: "Hotel Molina Lario",
    description:
      "The recently built hotel is formed by two refurbished 19th century buildings retaining their original facade and a third completely new building, combining to create a unique hotel in the hub of the city. Its 103 rooms exude comfort and tranquillity, and every last detail is taken care.\r\n\r\nThe hotel also has 6 function meeting-rooms, holding up to 220 people, which are ideal for meetings and private receptions. All are fully equipped and can be organized as desired. At the Restaurant & Bar you will find top quality cooking along with a long list of wines you can enjoy either in the calm of our outdoor terrace El Patio or at your leisure inside the restaurant.\r\n\r\nThe Molina Lario hotel is a 4 star hotel that has a privileged location in the heart of Malaga right opposite the Cathedral, a few meters from the Port, the Picasso Museum and the city's pedestrian district. It is a charming hotel in the center of the city, consisting of two renovated buildings with original facade of the 19th century and a third completely new building, which make up an unique hotel complex.\r\n\r\nIts 103 rooms, very bright and with different styles, are designed to make you feel at home and so you do not miss anything because they have multiple details. In addition, the hotel is fully integrated into the historic center of the city so you can enjoy your stay like as a citizen.\r\n\r\nThe hotel offers a wide gastronomic offer in the restaurant Matiz and in its pleasant Patio where you can taste Mediterranean cuisine based on updated versions of traditional Andalusian recipes, until a selection of tapas in the bar, or a variety of cocktails on the roof terrace, The TOP.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/hotel-molina-lario-retreat-venue-spain-exterior.jpeg",
      },
      attachment_id: 226292,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/hotel-molina-lario-retreat-venue-spain-exterior-150x150.jpeg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/hotel-molina-lario-retreat-venue-spain-exterior-300x200.jpeg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/hotel-molina-lario-retreat-venue-spain-exterior-1024x683.jpeg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/hotel-molina-lario-retreat-venue-spain-exterior-768x512.jpeg",
      },
    },
    buyout_cost_usd: 50000,
    airport_code: "BAR",
    mins_to_airport: 47,
    private_single_cost_usd: 220,
    num_beds: 384,
    num_bedrooms: 264,
    website_url: "https://galleryhoteles.com",
    country: "Spain",
  },
  {
    id: 226105,
    title: "Tekanda Lodge",
    description:
      "Tekanda Lodge is a beautiful hilltop lodge surrounded by its own jungle and privately-owned tea estate, a haven of wildlife and tranquillity yet only minutes from Sri Lanka’s finest beaches.\nThe space and natural environment create a unique atmosphere of peace, restoration and creativity, making it an ideal location for retreats. \n\nLocated near Ahangama, renowned for its relaxed beachside restaurants and cafes, the lodge can sleep 10-12 in five spacious bedrooms and a cabana.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/siriwanchmprn_TEKANDA_EXTERIOR_2023-3-1.jpg",
      },
      attachment_id: 226107,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/siriwanchmprn_TEKANDA_EXTERIOR_2023-3-1-150x150.jpg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/siriwanchmprn_TEKANDA_EXTERIOR_2023-3-1-300x206.jpg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/siriwanchmprn_TEKANDA_EXTERIOR_2023-3-1-1024x704.jpg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/siriwanchmprn_TEKANDA_EXTERIOR_2023-3-1-768x528.jpg",
      },
    },
    buyout_cost_usd: 1500,
    airport_code: "CMB",
    mins_to_airport: 67,
    private_single_cost_usd: 250,
    num_beds: 257,
    num_bedrooms: 177,
    website_url: "https://tekandalodge.com",
    country: "Sri Lanka",
  },
  {
    id: 225722,
    title: "Tulus Hati Ubud Retreat",
    description:
      "\nABOUT US\n​\n\n \n\nThe private boutique retreat resort Tulus Hati , which translates to sincere pure heart, was built with the intention of providing a peaceful, safe and comfortable time for all who will stay here.\n\n\nThe circular shape in which the buildings are built is meant to resemble a mother's womb, where something new, unique and magnificent is born. At the same time, we all feel safe here and receive everything we need for our evolution of growth and the final step of rebirth.\n\n These are the main essences that we at Tulus Hati want to provide to everyone who decides to\nspend their time in Bali in the family atmosphere of our resort.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/DJI_0301.jpg",
      },
      attachment_id: 225723,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/DJI_0301-150x150.jpg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/DJI_0301-300x169.jpg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/DJI_0301-1024x576.jpg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/03/DJI_0301-768x432.jpg",
      },
    },
    buyout_cost_usd: 1290,
    airport_code: "EER",
    mins_to_airport: 106,
    private_single_cost_usd: 110,
    num_beds: 311,
    num_bedrooms: 199,
    website_url: "https://www.tulus-hati.com/",
    country: "Indonesia",
  },
  {
    id: 224731,
    title: "Chateau Grande Hotel",
    description:
      "The Château Grande Hotel offers an extraordinary level of refinement in a destination setting for intimate meetings, executive retreats and corporate events. Whether you’re planning a shift in corporate strategy, an acquisition, pumping up the sales team, or celebrating a company win, Chateau Grande offers unparalleled corporate event facilities, lodging & cuisine in a single premier destination located in the heart of the tri-state.\r\n\r\nOur business events are produced by James Beard award-winning chef, David Burke, known for his culinary inventiveness and savory mastery. You may have seen him on TV’s Top Chef Masters and is the only American to ever win the prestigious Meilleurs Ouvriers de France Diplome d’Honneur. When you entrust your affair to Chef Burke and his seasoned team — whether it is an executive retreat for 8 or a celebration for 200 — rest assured your moment will be memorable and world class.\r\n\r\nChateau Grande offers well appointed suites and premium rooms for entertaining, networking, and of course, profound slumber. Often the best breakthroughs happen in these private spaces as we roll up our sleeves, speak with candor, and get down to the heart of the matter.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Chateau-Grande-Hotel-retreat-venue-united-states-hero-photo-1.jpeg",
      },
      attachment_id: 224883,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Chateau-Grande-Hotel-retreat-venue-united-states-hero-photo-1-150x150.jpeg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Chateau-Grande-Hotel-retreat-venue-united-states-hero-photo-1-300x228.jpeg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Chateau-Grande-Hotel-retreat-venue-united-states-hero-photo-1-1024x779.jpeg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Chateau-Grande-Hotel-retreat-venue-united-states-hero-photo-1-768x584.jpeg",
      },
    },
    buyout_cost_usd: null,
    airport_code: "BOS",
    mins_to_airport: 80,
    private_single_cost_usd: 320,
    num_beds: 294,
    num_bedrooms: 288,
    website_url: "https://www.chateaugrande.com",
    country: "United States",
  },
  {
    id: 224730,
    title: "NH Collection Vittorio Veneto",
    description:
      "The new NH Collection Roma Centro hotel, the refurbished long-established NH Leonardo da Vinci hotel, is an elegant 4-star hotel featuring a chic atmosphere that blends in with modern style. The hotel is in a quiet location in the centre of Rome, very close to the Vatican City, the impressive Castel Sant’Angelo, the enchanting Piazza del Popolo and the banks of the river Tevere. Thanks to its strategic and easily accessible location, guests at this sophisticated hotel can choose a most exclusive shopping experience in the Prati district and visit the major places of interest in the Eternal City.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/NH-Collection-Vittorio-Veneto-retreat-venue-italy-exterior.jpeg",
      },
      attachment_id: 224796,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/NH-Collection-Vittorio-Veneto-retreat-venue-italy-exterior-150x150.jpeg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/NH-Collection-Vittorio-Veneto-retreat-venue-italy-exterior-300x253.jpeg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/NH-Collection-Vittorio-Veneto-retreat-venue-italy-exterior-1024x864.jpeg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/NH-Collection-Vittorio-Veneto-retreat-venue-italy-exterior-768x648.jpeg",
      },
    },
    buyout_cost_usd: null,
    airport_code: "ROM",
    mins_to_airport: 46,
    private_single_cost_usd: 250,
    num_beds: 347,
    num_bedrooms: 195,
    website_url: "https://www.nh-hotels.com/en/hotel/nh-collection-roma-centro",
    country: "Italy",
  },
  {
    id: 224150,
    title: "Meliá Marbella Banús",
    description:
      "A magnificent location opens up a world of possibilities to guests in the best part of Marbella. Choose a destination with 300 days of sunshine every year. Enjoy them in an elegant hotel located near all the most exclusive boutiques. A hotel that allows you to get away from the outside world in its magnificent wellness area. Or to savour delicious local cuisine full of intense flavours and subtle nuances.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Melia-Marbella-Banus-retreat-venue-spain-aerial.jpeg",
      },
      attachment_id: 224429,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Melia-Marbella-Banus-retreat-venue-spain-aerial-150x150.jpeg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Melia-Marbella-Banus-retreat-venue-spain-aerial-300x225.jpeg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Melia-Marbella-Banus-retreat-venue-spain-aerial-1024x768.jpeg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Melia-Marbella-Banus-retreat-venue-spain-aerial-768x576.jpeg",
      },
    },
    buyout_cost_usd: null,
    airport_code: "MAD",
    mins_to_airport: 79,
    private_single_cost_usd: 150,
    num_beds: 332,
    num_bedrooms: 227,
    website_url:
      "https://www.melia.com/en/hotels/spain/marbella/melia-marbella-banus",
    country: "Spain",
  },
  {
    id: 224149,
    title: "Barceló Fuerteventura Mar",
    description:
      "The recently refurbished 4-star Barceló Fuerteventura Mar is part of the new Barceló Fuerteventura Beach Resort, one resort with four different hotels designed to provide guests with a complete experience and personalised service. Overlooking the beach in Caleta de Fuste and sheltered by a peaceful bay, the hotel is the perfect setting for a relaxing family holiday. Its proximity to the marina makes it a great place to enjoy sports and leisure activities.  Discover the resort that has it all!\r\n\r\n\r\nFor those looking for an even more unique experience, there is also the option to book a room in one of the exclusive Royal Level hotels, one for families and one exclusively for adults, which offer first-class service, special privileges and private Royal Level areas.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Barcelo-Fuerteventura-Mar-retreat-venue-spain-hero-photo2-1.jpeg",
      },
      attachment_id: 224354,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Barcelo-Fuerteventura-Mar-retreat-venue-spain-hero-photo2-1-150x150.jpeg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Barcelo-Fuerteventura-Mar-retreat-venue-spain-hero-photo2-1-300x200.jpeg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Barcelo-Fuerteventura-Mar-retreat-venue-spain-hero-photo2-1-1024x683.jpeg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Barcelo-Fuerteventura-Mar-retreat-venue-spain-hero-photo2-1-768x512.jpeg",
      },
    },
    buyout_cost_usd: null,
    airport_code: "VAL",
    mins_to_airport: 79,
    private_single_cost_usd: 201,
    num_beds: 98,
    num_bedrooms: 58,
    website_url: "https://www.barcelo.com",
    country: "Spain",
  },
  {
    id: 223058,
    title: "Lundy Farm",
    description:
      "Lundy Farm is a stunning 62-acre luxury nature retreat with a regenerative organic farm & greenhouse that is surrounded by 30,000 acres of forest.\n\nThere are multiple options for rentals to accommodate groups of different sizes between our two villas (The Lundy House & The Carriage House), and can even be a venue for your special event.\n\nIn any case, a stay will not only give you access to 62 acres of pristine woods and farm land, but also:\n\n- 30 person Yoga & Wellness Room\n- Massage Room\n- Gym\n- Commercial Kitchen\n- Sauna\n- Heated Pool\n- Tennis Court\n- Pickleball Court\n- Basketball Court\n- Game Room with a pool table, shuffle board, darts, and board games\n- Walking Trails\n- Fire Pits\n- A Swimming Hole\n- And more!\n\nWe sleep up to 25 guests in two villas, and can host additional day-of guests.\n\nThis is the perfect venue for groups seeking privacy & peace in a gorgeous, nature-immersed setting with all the amenities of a small resort.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Aerial-view-of-property.jpg",
      },
      attachment_id: 223059,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Aerial-view-of-property-150x150.jpg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Aerial-view-of-property-300x194.jpg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Aerial-view-of-property-1024x662.jpg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Aerial-view-of-property-768x497.jpg",
      },
    },
    buyout_cost_usd: 5000,
    airport_code: "SFO",
    mins_to_airport: 113,
    private_single_cost_usd: null,
    num_beds: 342,
    num_bedrooms: 190,
    website_url: "https://www.lundy-farm.com/",
    country: "United States",
  },
  {
    id: 220966,
    title: "Hotel Honucai",
    description:
      "Hello, welcome to Hotel Honucai, your home on the seafront. The place where your story in Mallorca begins, away from the hectic pace of life to reconnect with you and nature, in an authentic way.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Hotel-Honucai-retreat-venue-spain-best-photo-1.jpg",
      },
      attachment_id: 221152,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Hotel-Honucai-retreat-venue-spain-best-photo-1-150x150.jpg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Hotel-Honucai-retreat-venue-spain-best-photo-1-300x200.jpg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Hotel-Honucai-retreat-venue-spain-best-photo-1-1024x683.jpg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Hotel-Honucai-retreat-venue-spain-best-photo-1-768x512.jpg",
      },
    },
    buyout_cost_usd: null,
    airport_code: "BET",
    mins_to_airport: 49,
    private_single_cost_usd: 100,
    num_beds: 105,
    num_bedrooms: 78,
    website_url: "https://www.hotelhonucai.com/",
    country: "Spain",
    recommended_tags: [
      "VC Premium - Venue Booked",
      "Venue Booked",
      "Venue Booked - Corporate",
    ],
  },
  {
    id: 220780,
    title: "Royal Blue Resort & Spa Crete",
    description:
      "The 5-star The Royal Blue a Luxury Beach Resort is a tranquil exclusive resort on the northern coast of Crete. A private bay, 38 pools, 4 restaurants and 4 bars are found within its 70-acre premises. Free WiFi is available throughout.\r\n\r\nThe Royal Blue a Luxury Beach Resort’s superior rooms are stylishly decorated in warm and soothing tones and offer sea or garden views. They all feature flat-screen TVs, and spacious bathrooms with 2 sinks. Upon arrival, all guests are greeted with a welcome drink.\r\n\r\nThe Pure Senses Spa offers massage, hydrotherapies, facial and body treatments. Guests will find a tennis court, as well as mini golf and soccer courts within the premises. Colorful gardens extend throughout the resort, while natural stone has been used to blend harmoniously with the surroundings.\r\n\r\nGourmet enthusiasts will savor the fresh approach to food and cooking styles from China and Japan or indulge in authentic Greek, Italian, Spanish and European flavors. Alternatively, experiment with Indian sensations or sample the purity of seafood or meat; the choice is varied and diverse.\r\n\r\nOnly 14 mi from Rethymnon and 34 mi from Heraklion, The Royal Blue a Luxury Beach Resort offers easy access to both Chania and Heraklion airports.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/The-Royal-Blue-Resort-Spa-Crete-retreat-venue-greece-hero-photo.jpeg",
      },
      attachment_id: 221175,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/The-Royal-Blue-Resort-Spa-Crete-retreat-venue-greece-hero-photo-150x150.jpeg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/The-Royal-Blue-Resort-Spa-Crete-retreat-venue-greece-hero-photo-300x159.jpeg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/The-Royal-Blue-Resort-Spa-Crete-retreat-venue-greece-hero-photo-1024x544.jpeg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/The-Royal-Blue-Resort-Spa-Crete-retreat-venue-greece-hero-photo-768x408.jpeg",
      },
    },
    buyout_cost_usd: 380000,
    airport_code: "ATH",
    mins_to_airport: 54,
    private_single_cost_usd: 180,
    num_beds: 105,
    num_bedrooms: 59,
    website_url: "https://theroyalblue.troulisroyalcollection.com/",
    country: "Greece",
  },
  {
    id: 220778,
    title: "Porto Vista Hotel (San Diego)",
    description:
      "Tucked in the heart of Little Italy, only four blocks from San Diego harbor, the Porto Vista Hotel offers a breezy gateway to everything the city has to offer. Whatever you'd like to do, see, taste, or try is only minutes from this hotel on the edge of Downtown San Diego. The quaint bistros, shops and art galleries of Little Italy are right outside our doors. A two-minute cab or trolley ride gets you to Petco Park and the vibrant Gaslamp nightlife district, Old Town San Diego, the museums of Balboa Park, and Qualcomm Stadium. As a truly unique choice among affordable hotels in San Diego the Porto Vista features impeccable service in a dynamic central location. Shuttle service is provided to nearby locations including Airport, Cruise Terminal, Convention Center, Amtrak, Gaslamp Quarter/Horton Plaza. Some",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Porto-Vista-Hotel-San-Diego-retreat-venue-united-states-hero-photo.jpeg",
      },
      attachment_id: 221279,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Porto-Vista-Hotel-San-Diego-retreat-venue-united-states-hero-photo-150x150.jpeg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Porto-Vista-Hotel-San-Diego-retreat-venue-united-states-hero-photo-300x200.jpeg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Porto-Vista-Hotel-San-Diego-retreat-venue-united-states-hero-photo-1024x682.jpeg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Porto-Vista-Hotel-San-Diego-retreat-venue-united-states-hero-photo-768x512.jpeg",
      },
    },
    buyout_cost_usd: 26410,
    airport_code: "GAA",
    mins_to_airport: 94,
    private_single_cost_usd: 139,
    num_beds: 64,
    num_bedrooms: 45,
    website_url: "https://www.portovistasd.com",
    country: "United States",
  },
  {
    id: 219802,
    title: "Hotel Bohinj",
    description:
      'Hotel Bohinj, among guests being reffered to as "the spectacular hotel", is nestled amidst the amazing nature of Triglav National Park. Completely renovated in 2021, it combines alpine style, a touch of cultural heritage and a youthful spirit. \r\nThe hotel is located in Ribčev Laz on Lake Bohinj and is an excellent starting point for various activities, with its location on a small hill and at the same time represents an intimate and calm ambience. \r\nIt offers modern rooms with breathtaking views of the lake and the surrounding mountains, a restaurant, rural room, wellness center, conference room and spacious garden with a fireplace for socializing. The culinary offer is based on traditional Slovenian cuisine with modern inputs with an emphasis on local dishes and products.\r\nWith our offer we take you through local\r\nspecialties, culinary specialties and the experience of authentic Bohinj.',
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/listing-uploads/cover/2024/02/Hotel_Bohinj_Charlotte_Garrousse_50mm_20240119_18_23_29.jpg",
      },
      attachment_id: 220788,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/listing-uploads/cover/2024/02/Hotel_Bohinj_Charlotte_Garrousse_50mm_20240119_18_23_29-150x150.jpg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/listing-uploads/cover/2024/02/Hotel_Bohinj_Charlotte_Garrousse_50mm_20240119_18_23_29-300x200.jpg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/listing-uploads/cover/2024/02/Hotel_Bohinj_Charlotte_Garrousse_50mm_20240119_18_23_29-1024x683.jpg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/listing-uploads/cover/2024/02/Hotel_Bohinj_Charlotte_Garrousse_50mm_20240119_18_23_29-768x512.jpg",
      },
    },
    buyout_cost_usd: 13000,
    airport_code: "LJU",
    mins_to_airport: 62,
    private_single_cost_usd: 190,
    num_beds: 58,
    num_bedrooms: 42,
    website_url: "https://hotelbohinj.si/en/",
    country: "Slovenia",
  },
  {
    id: 218896,
    title: "Lone Mountain Ranch",
    description:
      "one Mountain Ranch has a garden, shared lounge, a restaurant and bar in Big Sky. This 3-star resort offers ski-to-door access and a concierge service. The accommodation features a 24-hour front desk, airport transfers, a business centre and free WiFi.\r\n\r\nThe resort offers a children's playground. Guests at Lone Mountain Ranch will be able to enjoy activities in and around Big Sky, like hiking and skiing.\r\n\r\nThe accommodation provides a laundry service, as well as business facilities like fax and photocopying.\r\n\r\nThe nearest airport is Bozeman Yellowstone International Airport, 76 km from Lone Mountain Ranch.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Lone-Mountain-Ranch-retreat-venue-united-states-hero-photo.jpeg",
      },
      attachment_id: 219184,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Lone-Mountain-Ranch-retreat-venue-united-states-hero-photo-150x150.jpeg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Lone-Mountain-Ranch-retreat-venue-united-states-hero-photo-300x200.jpeg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Lone-Mountain-Ranch-retreat-venue-united-states-hero-photo-1024x683.jpeg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Lone-Mountain-Ranch-retreat-venue-united-states-hero-photo-768x512.jpeg",
      },
    },
    buyout_cost_usd: 350000,
    airport_code: "FLD",
    mins_to_airport: 114,
    private_single_cost_usd: 800,
    num_beds: 182,
    num_bedrooms: 137,
    website_url: "https://lonemountainranch.com/",
    country: "United States",
  },
  {
    id: 218351,
    title: "Kimpton Harper",
    description:
      "Housed in a Fort Worth landmark that was built in 1921, the Kimpton Harper Hotel effortlessly blends the city’s rich history with modern style. Head up to the 24th-floor lobby, where views of the city and the Texan plains unfold before you and a lively bar scene beckons with craft cocktails and elevated bites. Savor contemporary Italian cooking at il Modo, our bustling ground-floor restaurant. Guest rooms feature handcrafted furniture and thoughtfully curated local art, creating a laid-back, luxurious retreat: the perfect place to unwind after exploring the city where the West begins.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Kimpton-Harper-retreat-venue-united-states-hero-photo.jpeg",
      },
      attachment_id: 218355,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Kimpton-Harper-retreat-venue-united-states-hero-photo-150x150.jpeg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Kimpton-Harper-retreat-venue-united-states-hero-photo-300x169.jpeg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Kimpton-Harper-retreat-venue-united-states-hero-photo-1024x578.jpeg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Kimpton-Harper-retreat-venue-united-states-hero-photo-768x434.jpeg",
      },
    },
    buyout_cost_usd: 10000,
    airport_code: "FLA",
    mins_to_airport: 33,
    private_single_cost_usd: 199,
    num_beds: 351,
    num_bedrooms: 264,
    website_url: "https://www.theharperfortworth.com/",
    country: "United States",
  },
  {
    id: 217967,
    title: "NYLO Las Colinas by Hilton",
    description:
      "Our industrial-chic hotel features loft-style rooms in the business hub of Las Colinas, minutes from US-114 and the President George Bush Turnpike. Enjoy a boutique hotel with a unique loft experience near Irving Convention Center and the Toyota Music Factory. Have a relaxing evening in our poolside courtyard.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/NYLO-Las-Colinas-Hotel-retreat-venue-united-states-hero-photo.jpeg",
      },
      attachment_id: 218143,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/NYLO-Las-Colinas-Hotel-retreat-venue-united-states-hero-photo-150x150.jpeg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/NYLO-Las-Colinas-Hotel-retreat-venue-united-states-hero-photo-300x200.jpeg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/NYLO-Las-Colinas-Hotel-retreat-venue-united-states-hero-photo-1024x683.jpeg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/NYLO-Las-Colinas-Hotel-retreat-venue-united-states-hero-photo-768x512.jpeg",
      },
    },
    buyout_cost_usd: 10000,
    airport_code: "SEA",
    mins_to_airport: 20,
    private_single_cost_usd: 169,
    num_beds: 344,
    num_bedrooms: 199,
    website_url:
      "https://www.hilton.com/en/hotels/daligup-nylo-las-colinas-hotel/",
    country: "United States",
  },
  {
    id: 217629,
    title: "Gull Cove Lodge",
    description:
      "We are a small off-grid family owned lodge nestled in the Tongass rainforest on an island in Southeast Alaska.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Gull-Cove-Lodge-retreat-venue-united-states-hero-photo.jpeg",
      },
      attachment_id: 218200,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Gull-Cove-Lodge-retreat-venue-united-states-hero-photo-150x150.jpeg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Gull-Cove-Lodge-retreat-venue-united-states-hero-photo-300x200.jpeg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Gull-Cove-Lodge-retreat-venue-united-states-hero-photo-1024x683.jpeg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/Gull-Cove-Lodge-retreat-venue-united-states-hero-photo-768x512.jpeg",
      },
    },
    buyout_cost_usd: 7194,
    airport_code: "POR",
    mins_to_airport: 39,
    private_single_cost_usd: null,
    num_beds: 211,
    num_bedrooms: 191,
    website_url: "https://www.gullcove.com",
    country: "United States",
  },
  {
    id: 217614,
    title: "Hotel Lulu, BW Premier Collection",
    description:
      "Enjoy carefree California living with a delightfully modern twist at the newly reimagined Hotel Lulu®, a BW Premier Collection by Best Western property. Ideally located hotel by Disneyland® Anaheim CA, walking distance. Minutes from Anaheim Convention Center, making it one of the best hotels by Disneyland. Immerse yourself in the magic of Disney and create lasting memories at our conveniently situated hotel by Disneyland. Hotel Lulu offers everything for your family to keep the fun going all vacation long.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/0b9528345de44b2c2f98ab0e2ba31b4b.LULU_Header_Birdseye2-1.jpg",
      },
      attachment_id: 217640,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/0b9528345de44b2c2f98ab0e2ba31b4b.LULU_Header_Birdseye2-1-150x150.jpg",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/0b9528345de44b2c2f98ab0e2ba31b4b.LULU_Header_Birdseye2-1-300x162.jpg",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/0b9528345de44b2c2f98ab0e2ba31b4b.LULU_Header_Birdseye2-1-1024x553.jpg",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/0b9528345de44b2c2f98ab0e2ba31b4b.LULU_Header_Birdseye2-1-768x415.jpg",
      },
    },
    buyout_cost_usd: 58972,
    airport_code: "OHI",
    mins_to_airport: 108,
    private_single_cost_usd: 159,
    num_beds: 271,
    num_bedrooms: 151,
    website_url: "https://www.hotellulu.com",
    country: "United States",
  },
  {
    id: 217520,
    title: "HALL Arts Hotel",
    description:
      "Welcome to the award-winning HALL Arts Hotel. A departure from traditional expressions of luxury, we promise our guests an elevated experience filled with warmth, authenticity and attentiveness, where expectations are exceeded in every interaction and daily inspiration can be found throughout our art-filled spaces. We invite you to explore all that the hotel and surrounding Dallas Arts District has to offer and hope your stay is truly one-of-a-kind.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/HALL-Arts-Hotel-Dallas-retreat-venue-united-states-hero-photo.jpeg",
      },
      attachment_id: 218029,
    },
    buyout_cost_usd: null,
    airport_code: "SLC",
    mins_to_airport: 63,
    private_single_cost_usd: 309,
    num_beds: 113,
    num_bedrooms: 58,
    website_url: "https://www.hallartshotel.com",
    country: "United States",
  },
  {
    id: 217519,
    title: "Dallas/Fort Worth Marriott Hotel & Golf Club",
    description:
      "Located in scenic north Fort Worth, the Marriott Hotel & Golf Club at Champions Circle provides a resort feel with spacious rooms & modern meeting spaces. The onsite BigShots Golf, and The Paddock event barn, overlook the 18-hole championship golf course. The hotel complex is adjacent to Texas Motor Speedway and Tanger Outlet Mall. Close to Alliance Airport and popular attractions, including Sundance Square & the Fort Worth Stockyards. Please make yourself at home in one of our beautifully appointed rooms, featuring sleek decor, plush bedding, and floor-to-ceiling windows with breathtaking views. Practice your swing at our 18-hole championship course designed by Jay Morrish, The Golf Club at Champions Circle is genuinely one of a kind. We also offer an outdoor pool & indoor fitness center. In-between activities, savor a delicious breakfast or dinner at our Jackdaw restaurant and bar.",
    cover_photo: {
      file: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/DallasFort-Worth-Marriott-Hotel-Golf-Club-at-Champions-Circle-retreat-venue-united-states-hero-photo2.webp",
      },
      attachment_id: 217703,
      thumbnail: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/DallasFort-Worth-Marriott-Hotel-Golf-Club-at-Champions-Circle-retreat-venue-united-states-hero-photo2-150x150.webp",
      },
      medium: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/DallasFort-Worth-Marriott-Hotel-Golf-Club-at-Champions-Circle-retreat-venue-united-states-hero-photo2-300x225.webp",
      },
      large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/DallasFort-Worth-Marriott-Hotel-Golf-Club-at-Champions-Circle-retreat-venue-united-states-hero-photo2-1024x768.webp",
      },
      medium_large: {
        url: "https://retreatsandvenues.com/wp-content/uploads/2024/02/DallasFort-Worth-Marriott-Hotel-Golf-Club-at-Champions-Circle-retreat-venue-united-states-hero-photo2-768x576.webp",
      },
    },
    buyout_cost_usd: null,
    airport_code: null,
    mins_to_airport: 36,
    private_single_cost_usd: 159,
    num_beds: 293,
    num_bedrooms: 179,
    website_url:
      "https://www.marriott.com/en-us/hotels/dfwmc-dallas-fort-worth-marriott-hotel-and-golf-club-at-champions-circle/overview/",
    country: "United States",
  },
];

export default retreats;
