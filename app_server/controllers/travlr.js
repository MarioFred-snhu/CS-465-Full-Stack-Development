const fs = require('fs');
const path = require('path');

const getTrips = () => {
  const filePath = path.join(__dirname, '..', '..', 'data', 'trips.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
};

const home = (req, res) => {
  res.render('index', {
    title: 'Travlr Getaways',
    headline: 'Your next adventure starts here',
    intro:
      'Plan your perfect getaway with curated trips, great rooms, and unforgettable experiences.',
    featuredTrips: [
      {
        name: 'Island Escape',
        duration: '5 nights',
        price: '$799',
        description: 'Beachfront stay with snorkeling and sunset cruise.'
      },
      {
        name: 'Mountain Adventure',
        duration: '3 nights',
        price: '$549',
        description: 'Guided hikes, scenic views, and cabin lodging.'
      },
      {
        name: 'City Weekend',
        duration: '2 nights',
        price: '$399',
        description: 'Downtown hotel, food tour, and museum passes.'
      }
    ],
    testimonials: [
      { quote: 'Best trip I’ve taken in years.', name: 'A. Johnson' },
      { quote: 'Easy booking and great recommendations.', name: 'M. Rivera' }
    ]
  });
};

const travel = (req, res) => {
  const trips = getTrips();

  res.render('travel', {
    title: 'Travlr Getaways',
    subtitle: 'Travel',
    trips
  });
};

const rooms = (req, res) => {
  res.render('rooms', {
    title: 'Travlr Getaways',
    subtitle: 'Rooms',
    intro: 'Choose from comfortable rooms designed for every travel style.',
    rooms: [
      {
        name: 'Standard Room',
        image: '/images/bg-adbox.png',
        price: '$129/night',
        description: 'Cozy and affordable with all essentials.'
      },
      {
        name: 'Ocean View Suite',
        image: '/images/bg-pattern.jpg',
        price: '$229/night',
        description: 'Spacious suite with a stunning view.'
      },
      {
        name: 'Family Room',
        image: '/images/bg-body.jpg',
        price: '$189/night',
        description: 'Extra space for families and groups.'
      }
    ]
  });
};

const meals = (req, res) => {
  res.render('meals', {
    title: 'Travlr Getaways',
    subtitle: 'Meals',
    intro: 'Enjoy a variety of fresh meals and local favorites during your stay.',
    meals: [
      {
        name: 'Breakfast Buffet',
        image: '/images/buffet.jpg',
        description: 'Fresh fruit, pastries, and hot options daily.'
      },
      {
        name: 'Seafood Special',
        image: '/images/buffet.jpg',
        description: 'Local catch prepared by our chefs.'
      },
      {
        name: 'Tropical Drinks',
        image: '/images/buffet.jpg',
        description: 'Signature mocktails and cocktails.'
      }
    ]
  });
};

const news = (req, res) => {
  res.render('news', {
    title: 'Travlr Getaways',
    subtitle: 'News',
    intro: 'Updates, travel tips, and announcements from Travlr Getaways.',
    posts: [
      {
        title: 'Spring Deals Are Live',
        author: 'Travlr Team',
        date: 'Mar 2026',
        summary: 'Save on select packages for a limited time.'
      },
      {
        title: 'Top 5 Beach Destinations',
        author: 'Travlr Team',
        date: 'Mar 2026',
        summary: 'Our picks for sun, sand, and relaxation.'
      }
    ],
    latest: [
      'Spring Deals Are Live',
      'Top 5 Beach Destinations',
      'New Room Renovations'
    ]
  });
};

const about = (req, res) => {
  res.render('about', {
    title: 'Travlr Getaways',
    subtitle: 'About'
  });
};

const contact = (req, res) => {
  res.render('contact', {
    title: 'Travlr Getaways',
    subtitle: 'Contact Us',
    intro: 'Send us a message and our team will get back to you soon.',
    address: '123 Travlr Lane, Paradise City, PC 12345',
    phone: '(555) 123-4567',
    email: 'info@travlrgetaways.com'
  });
};

module.exports = { home, travel, rooms, meals, news, about, contact };