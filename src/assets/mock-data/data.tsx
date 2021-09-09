import MyLibraryData from "../../components/organisms/MyLibrary/MyLibrary";

const data = [
  {
    id: 1,
    imgSrc:
      "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg",
    imgAlt: "The Fate of Food",
    name: "The Fate of Food",
    author: "Amanda Little",
    readTime: "12-minute read",
    category: "Entrepreneurship",
    readCount: "",
    status: "F",
  },
  {
    id: 5,
    imgSrc:
      "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg",
    imgAlt: "Bring Your Human to Work",
    name: "Bring Your Human to Work",
    author: "Erica Keswin",
    readTime: "13-minute read",
    readCount: "19.1k",
    status: "CR",
  },
  {
    name: "Akshith",
    author: "Test",
    category: "Fiction",
    readCount: "12.1 K",
    readTime: "13",
    imgSrc:
      "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg",
    id: 7,
    status: "CR",
  },
  {
    id: 2,
    imgSrc:
      "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg",
    imgAlt: "Lives of the Stoic",
    name: "Lives of the Stoic",
    author: "Ryan Holiday, Stephen Hansel",
    readTime: "13-minute read",
    readCount: "",
    status: "CR",
  },
  {
    id: 3,
    imgSrc:
      "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg",
    imgAlt: "Loving Your Business",
    name: "Loving Your Business",
    author: "Debbie King",
    readTime: "13-minute read",
    readCount: "",
    status: "F",
  },
  {
    name: "Demo Book2",
    author: "Test2",
    category: "Science",
    readCount: "12.1 K",
    readTime: "15",
    imgSrc:
      "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg",
    status: "F",
    id: 8,
  },
  {
    name: "Demo Book1",
    author: "Test1",
    category: "Fiction",
    readCount: "12.1 K",
    readTime: "15",
    imgSrc:
      "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg",
    status: "F",
    id: 9,
  },
  {
    name: "Demo Book4",
    author: "Test4",
    category: "Entrepreneurship",
    readCount: "12.1 K",
    readTime: "15",
    imgSrc:
      "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg",
    status: "F",
    id: 12,
  },
  {
    id: 1,
    imgSrc:
      "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg",
    imgAlt: "The Fate of Food",
    name: "The Fate of Food",
    author: "Amanda Little",
    readTime: "12-minute read",
    category: "Entrepreneurship",
    readCount: "",
    status: "",
  },
  {
    id: 2,
    imgSrc:
      "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg",
    imgAlt: "Lives of the Stoic",
    name: "Lives of the Stoic",
    author: "Ryan Holiday, Stephen Hansel",
    readTime: "13-minute read",
    readCount: "",
    status: "",
  },
  {
    id: 3,
    imgSrc:
      "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg",
    imgAlt: "Loving Your Business",
    name: "Loving Your Business",
    author: "Debbie King",
    readTime: "13-minute read",
    readCount: "",
    status: "",
  },
  {
    id: 4,
    imgSrc:
      "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg",
    imgAlt: "Bring Your Human to Work",
    name: "Bring Your Human to Work",
    author: "Erica Keswin",
    readTime: "15-minute read",
    readCount: "1.1k",
    status: "E",
  },
  {
    id: 5,
    imgSrc:
      "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg",
    imgAlt: "Bring Your Human to Work",
    name: "Bring Your Human to Work",
    author: "Erica Keswin",
    readTime: "13-minute read",
    readCount: "19.1k",
    status: "",
  },
  {
    id: 6,
    imgSrc:
      "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg",
    imgAlt: "Bring Your Human to Work",
    name: "Bring Your Human to Work",
    author: "Erica Keswin",
    readTime: "12-minute read",
    readCount: "11k",
    status: "E",
  },
  {
    name: "Akshith",
    author: "Test",
    category: "Fiction",
    readCount: "12.1 K",
    readTime: "13",
    imgSrc:
      "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg",
    id: 7,
    status: "",
  },
  {
    name: "Demo Book2",
    author: "Test2",
    category: "Science",
    readCount: "12.1 K",
    readTime: "15",
    imgSrc:
      "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg",
    status: "",
    id: 8,
  },
  {
    name: "Demo Book1",
    author: "Test1",
    category: "Fiction",
    readCount: "12.1 K",
    readTime: "15",
    imgSrc:
      "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg",
    status: "",
    id: 9,
  },
  {
    name: "Demo Book2",
    author: "Test2",
    category: "Science",
    readCount: "12.1 K",
    readTime: "15",
    imgSrc:
      "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg",
    status: "",
    id: 10,
  },
  {
    name: "Demo Book3",
    author: "Test3",
    category: "Entrepreneurship",
    readCount: "12.1 K",
    readTime: "14",
    imgSrc:
      "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg",
    status: "E",
    id: 11,
  },
  {
    name: "Demo Book4",
    author: "Test4",
    category: "Entrepreneurship",
    readCount: "12.1 K",
    readTime: "15",
    imgSrc:
      "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg",
    status: "",
    id: 12,
  },
];

export const myLibraryData=[
  {
    name: "Demo Book4",
    author: "Test4",
    category: "Entrepreneurship",
    readCount: "12.1 K",
    readTime: "15",
    imgSrc:
      "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg",
    status: "",
    id: 12,
  },
  {
    name: "Demo Book4",
    author: "Test4",
    category: "Entrepreneurship",
    readCount: "12.1 K",
    readTime: "15",
    imgSrc:
      "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg",
    status: "",
    id: 12,
  },
];
export default data;
