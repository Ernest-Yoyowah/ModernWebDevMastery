let keyboards = [
  { id: "1", brand: "Yamaha", model: "PSR-E373" },
  { id: "2", brand: "Casio", model: "CTK-2550" },
  { id: "3", brand: "Roland", model: "FP-30X" },
  { id: "4", brand: "Korg", model: "B2" },
  { id: "5", brand: "Alesis", model: "Recital Pro" },
];

let keyboardists = [
  { id: "1", name: "Ernest", verified: true },
  { id: "2", name: "Nii", verified: false },
  { id: "3", name: "Yoyowah", verified: true },
];

let reviews = [
  {
    id: "1",
    rating: 9,
    content: "Excellent sound quality and features.",
    keyboardist_id: "1",
    keyboard_id: "2",
  },
  {
    id: "2",
    rating: 10,
    content: "Great for beginners and pros alike.",
    keyboardist_id: "2",
    keyboard_id: "1",
  },
  {
    id: "3",
    rating: 7,
    content: "Good value for the price.",
    keyboardist_id: "3",
    keyboard_id: "3",
  },
  {
    id: "4",
    rating: 5,
    content: "Decent, but not the best in its class.",
    keyboardist_id: "2",
    keyboard_id: "4",
  },
  {
    id: "5",
    rating: 8,
    content: "Solid performance and features.",
    keyboardist_id: "2",
    keyboard_id: "5",
  },
  {
    id: "6",
    rating: 7,
    content: "Good for practice sessions.",
    keyboardist_id: "1",
    keyboard_id: "2",
  },
  {
    id: "7",
    rating: 10,
    content: "Top-notch quality and sound.",
    keyboardist_id: "3",
    keyboard_id: "1",
  },
];

export default { keyboards, keyboardists, reviews };
