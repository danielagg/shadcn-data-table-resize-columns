import { User } from "./columns";
import {
  randEmail,
  randFullName,
  randAddress,
  randLanguage,
  randFlightDetails,
} from "@ngneat/falso";

export const users: User[] = [];

for (let i = 0; i < 5; i++) {
  const address = randAddress();

  users.push({
    id: i,
    email: randEmail(),
    name: randFullName(),
    age: Math.floor(Math.random() * (90 - 21) + 21),
    address: `${address.street}, ${address.city}, ${
      address.zipCode
    }, ${address.country!}`,
    language: randLanguage(),
    airLine: randFlightDetails().airline,
    origin: `${randFlightDetails().origin.name}, ${
      randFlightDetails().origin.city
    }, ${randFlightDetails().origin.country}`,
    destination: `${randFlightDetails().destination.name}, ${
      randFlightDetails().destination.city
    }, ${randFlightDetails().destination.country}`,
  });
}
