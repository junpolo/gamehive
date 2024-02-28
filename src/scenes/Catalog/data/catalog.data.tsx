import { Row } from "../hooks/game-catalog.hook";

export function createData(
  name: string,
  tag: string,
  ratings: string,
  release: string,
  price: number | string
) {
  return { name, tag, release, ratings, price };
}

export const rows: Row[] = [
  createData("Apex Legends", "Multiplayer", "95%", "Mar 05, 2024", "$100"),
  createData("Dota 2", "Action", "80%", "Mar 05, 2024", "$150"),
  createData("CSGO 2", "Free to play", "83%", "Mar 05, 2024", "$322"),
  createData("Hell Divers", "Adventure", "78%", "Mar 05, 2024", "$500"),
  createData("Destiny 2", "Adventure", "79%", "Mar 05, 2024", "$900"),
  createData("GTA VI", "Action", "91%", "Mar 05, 2024", "$265"),
  createData(
    "Sheepy: A Short Adventure",
    "Indie",
    "89%",
    "Mar 05, 2024",
    "$766"
  ),
  createData("Balatro", "Action", "91%", "Mar 05, 2024", "$615"),
  createData("Persona 3 Adventure", "Co-op", "93%", "Mar 05, 2024", "$235"),
  createData("Palworld", "Action", "92%", "Mar 05, 2024", "$345"),
  createData(
    "Please, Touch The Artwork 2",
    "Action",
    "79%",
    "Mar 05, 2024",
    "$367"
  ),
  createData(
    "No Case Should Remain Unsolved",
    "Action",
    "80%",
    "Mar 05, 2024",
    "$976"
  ),
  createData("Portal: Revolution", "Adventure", "80%", "Mar 05, 2024", "$672"),
  createData("100 Ninja Cats", "Action", "79%", "Mar 05, 2024", "$363"),

  createData("HoloCure - Save the Fans!", "PVP", "98%", "Mar 05, 2023", "$475"),
  createData("Pizza Tower", "Adventure", "95%", "Mar 05, 2023", "$855"),
  createData("Lethal Company", "Co-op", "83%", "Mar 05, 2023", "$562"),
  createData(
    "Cats Hidden in Jingle Jam",
    "Open World",
    "98%",
    "Mar 05, 2023",
    "$367"
  ),
  createData(
    "Cats Hidden in Paris",
    "Single Player",
    "87%",
    "Mar 05, 2023",
    "$984"
  ),
  createData("VPet", "Open World", "72%", "Mar 05, 2023", "$123"),
  createData("Resident Evil 4", "Open World", "83%", "Mar 05, 2023", "$152"),
  createData("DAVE THE DIVER", "Open World", "93%", "Mar 05, 2023", "$671"),
  createData("Baldur's Gate 3", "RPG", "98%", "Mar 05, 2023", "$155"),
  createData(
    "Papa's Freezeria Deluxe",
    "Open World",
    "79%",
    "Mar 05, 2023",
    "$167"
  ),
  createData("Volcano Princess", "Adventure", "79%", "Mar 05, 2023", "$616"),
  createData("Brotato", "Open World", "77%", "Mar 05, 2023", "$172"),
  createData("Crab Champions", "PVP", "80%", "Mar 05, 2023", "$123"),

  createData("Starfield", "Co-op", "100%", "Mar 05, 2022", "$612"),
];

export const tags = [
  "Multiplayer",
  "Action",
  "Free to play",
  "Adventure",
  "Open World",
  "Co-op",
  "RPG",
  "PVP",
  "Indie",
  "Single Player",
];
