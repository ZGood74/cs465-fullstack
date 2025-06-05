const mongoose = require('mongoose');
require('./db');
const Trip = mongoose.model('Trip');

const seedTrips = [
  {
    code: 'GR100',
    name: 'Gale Reef',
    length: 7,
    start: new Date(),
    resort: 'Coral Sands',
    perPerson: 1250,
    image: 'reef1.jpg',
    description: 'Sed et augue lorem. In sit amet placerat arcu. Mauris volutpat ipsum ac justo mollis vel vestibulum orci gravida. Vestibulum sit amet porttitor odio. Nulla facilisi. Fusce at pretium felis. Sed consequat libero ut turpis venenatis ut aliquam risus semper. Etiam convallis mi vel risus pretium sodales. Etiam nunc lorem ullamcorper vitae laoreet.'
  },
  {
    code: 'DR200',
    name: 'Dawson’s Reef',
    length: 5,
    start: new Date(),
    resort: 'Reef Point Inn',
    perPerson: 980,
    image: 'reef2.jpg',
    description: 'Integer magna leo, posuere et dignissim vitae, porttitor at odio. Pellentesque a metus nec magna placerat volutpat. Nunc nisi mi, elementum sit amet aliquet quis, tristique quis nisl. Curabitur odio lacus, blandit ut hendrerit vulputate, vulputate at est. Morbi aliquet viverra metus eu consectetur. In lorem dui, elementum sit amet convallis ac, tincidunt vel sapien.'
  },
  {
    code: 'CR300',
    name: 'Claire’s Reef',
    length: 6,
    start: new Date(),
    resort: 'Crystal Waters Resort',
    perPerson: 1120,
    image: 'reef3.jpg',
    description: 'Donec sed felis risus. Nulla facilisi. Donec a orci tellus, et auctor odio. Fusce ac orci nibh, quis semper arcu. Cras orci neque, euismod et accumsan ac, sagittis molestie lorem. Proin odio sapien, elementum at tempor non, vulputate eget libero. In hac habitasse platea dictumst. Integer purus justo, egestas eu consectetur eu, cursus in tortor.'
  }
];

Trip.deleteMany({})
  .then(() => Trip.insertMany(seedTrips))
  .then((docs) => {
    console.log(`Successfully seeded ${docs.length} trips.`);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error seeding trips:", err);
    mongoose.connection.close();
  });
