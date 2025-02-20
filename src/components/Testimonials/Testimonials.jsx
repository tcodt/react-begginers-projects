import { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    { quote: "This is a great product!", author: "John Doe" },
    { quote: "I love using this service!", author: "Jane Smith" },
    { quote: "The support team is amazing!", author: "Bob Johnson" },
    {
      quote: "I've seen significant improvements since using this!",
      author: "Alice Brown",
    },
    {
      quote: "The features are so intuitive and easy to use!",
      author: "Mike Davis",
    },
    {
      quote: "I've already recommended this to my friends!",
      author: "Emily Chen",
    },
    { quote: "The quality is top-notch!", author: "David Lee" },
    { quote: "I'm so glad I made the switch!", author: "Sophia Patel" },
    {
      quote: "The team is always innovating and improving!",
      author: "Olivia Kim",
    },
    {
      quote: "I feel confident in my decision to use this!",
      author: "Jackson Hall",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white rounded shadow-md p-4 w-[400px] border border-slate-200">
        <div className="text-lg text-gray-800 font-medium">
          {testimonials[currentIndex].quote}
        </div>
        <div className="text-base text-gray-600 font-medium italic">
          - {testimonials[currentIndex].author}
        </div>

        <div className="flex items-center justify-between mt-4">
          <button
            className="bg-sky-500 rounded py-2 px-4 text-white text-base font-medium cursor-pointer hover:bg-sky-600 transition"
            onClick={handlePrevClick}
          >
            Prev
          </button>
          <button
            className="bg-sky-500 rounded py-2 px-4 text-white text-base font-medium cursor-pointer hover:bg-sky-600 transition"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
