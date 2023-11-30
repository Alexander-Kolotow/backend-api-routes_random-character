import Chance from "chance";

const chance = new Chance();

export default function handleRandomCharacter(request, response) {

  if (request.url === '/api/random-character') {
    const randomCharacter = {
      firstName: chance.first(),
      lastName: chance.last(),
      gender: chance.gender(),
      age: chance.age(),
      email: chance.email(),
      twitter: `${chance.twitter()}`,
      geohash: chance.geohash(),
    };

    response.status(200).json(randomCharacter);
  } else {
    response.status(404).end("Page not found");
  }
};

