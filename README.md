# Retreats and Venues Front-end Assessment

This assignment will test your ability to design a page that's aesthetically pleasing to the eye. 

As an application in the same competitive arena as AirBnb, Booking.com, and others, visuals are important to us. In the absence of designers, it's important that our developers have a keen eye for detail in addition to their expertise in designing clean solutions. 

None of your code will be used on our website at any point.

## Getting Started

Fork or simply clone this repo to begin developing. 

```
gh repo clone retreatsandvenues/technical-assignment-cards
npm install
npm run dev
```

You may submit via a link to your own forked GitHub repo, or submit the code as a .zip file if you prefer not to expose it on your profile. 

Send submissions to the same email used in existing correspondence.

## The Assignment

This is a front-end-only assignment. The back-end has been mocked with data in `retreats.ts`.

You'll add two main areas to this page: 

```
|----------------------------|
|           FILTERS          |
|----------------------------|
|            CARDS           |
|             ...            |
|----------------------------|
```

### Filters

The filter section at the top should allow the user to type some search terms into an input box. 

The user may type search terms like: 
1. A single word, e.g. "Hilton"
2. Several words, e.g. "Hilton Miami"

Cards not matching any of the search terms (E.g. "Hilton" or "Miami") should not appear in the results. 

Do not implement any text filtering beyond this basic requirement. 

#### Additional Filter(s)

Optionally, you may add other filters you think would help the user to find retreats they're interested in. 

This is bonus only, if you want to show off how you'd design another filter.

### Cards

Users should be able to scroll through the cards representing each of the retreats. 

Emphasize the beauty of the retreats in your interface. The page should make the user _want_ to visit the retreats. 

The cards should contain some representation of all the data contained in `retreats.ts`. A description of the field is for your information only, not to be shown on the interface (unless you think it's useful).

In no particular order:

| Field | Description |
| --- | --- |
| title | Name of the retreat |
| description | Description of the retreat |
| cover_photo | Primary image |
| buyout_cost_usd | The cost to rent the entire retreat |
| private_single_cost_usd  | The cost for a single attendee to book a room |
| mins_to_airport  | Distance from the retreat to the airport |
| airport_code  | The nearest airport's airport code |
| num_beds | Number of beds in total at the retreat |
| num_bedrooms | Number of bedrooms in total at the retreat |
| website_url | The website url |
| country | Country where the retreat is located |

Certain pieces of data may be `null`, depending on the retreat, so it's important that the design is flexible to accommodate potential absence. 

All of the data available should be shown on the card, apart from the description which can be truncated. 

---

#### Hiding Retreats

Users should be able to hide retreats easily. Retreats should remain hidden as the user expands and reduces their filtering, but needn't remain hidden between page refreshes. 

## Other Notes

- Do not change any data in `retreats.ts`
- You are encouraged to create components as needed, outside `App.tsx`
- You are free to edit everything in `App.tsx`. I've left just enough code for a starting point.

## Styling

You are free to use any styling libraries you would like. 

Tailwind has been included in the project for your convenience, but you don't have to use it. 

