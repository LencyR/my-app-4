"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const products = [
  {
    id: 1,
    name: "Nixplay Edge",
    description: "Basic and black with high-resolution display",
    images: {
      black: <Image src="/images/black_frame.png" alt="Black Nixplay Edge" width={200} height={200} />,
      brown: <Image src="/images/brown_frame.png" alt="Brown Nixplay Edge" width={200} height={200} />,
      blue: <Image src="/images/blue_frame.png" alt="Blue Nixplay Edge" width={200} height={200} style={{ marginLeft: '1px', marginBottom: '-6.5px'}} />,
    },
    colors: ["black", "brown", "blue"],
    background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
  },
  {
    id: 2,
    name: "Nixplay Smart",
    description: "A smarter way to display your memories",
    images: {
      gold: <Image src="/images/gold-tablet.png" alt="Gold Nixplay Smart" width={200} height={200} />,
      pink: <Image src="/images/pink-tablet.png" alt="Pink Nixplay Smart" width={200} height={200} />,
      teal: <Image src="/images/teal-tablet.png" alt="Teal Nixplay Smart" width={200} height={200} style={{ marginLeft: '1px', marginBottom: '-6.5px' }} />,
    },
    colors: ["gold", "pink", "teal"],
    background: 'linear-gradient(to right, #00cdac, #004e92)',
  },
];

export default function Home() {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(products[0].colors[0]);
  const [showColorSwitcher, setShowColorSwitcher] = useState(false);
  const [animating, setAnimating] = useState(false);
  const firstSectionRef = useRef(null);

  const handleProductChange = (index) => {
    if (index !== selectedProductIndex) {
      setAnimating(true);
      setTimeout(() => {
        setSelectedProductIndex(index);
        setSelectedColor(products[index].colors[0]);
        setAnimating(false);
      }, 100);
    }
  };

  const handleNextProduct = () => {
    handleProductChange((selectedProductIndex + 1) % products.length);
  };

  const handlePrevProduct = () => {
    handleProductChange((selectedProductIndex - 1 + products.length) % products.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowColorSwitcher(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (firstSectionRef.current) {
      observer.observe(firstSectionRef.current);
    }

    return () => {
      if (firstSectionRef.current) {
        observer.unobserve(firstSectionRef.current);
      }
    };
  }, []);

  return (
    <div>
      <header className="shadow-md p-4 fixed w-full top-0 left-0 z-10 bg-white">
        <ul>
          <div className="flex justify-between items-center">
            <div className="flex space-x-2 items-center">
              <li><h1 className="font-bold text-xl">nuxplay</h1></li>
              <img
                src="https://yt3.googleusercontent.com/ytc/AIdro_k7RWEIXhS1uWBcJ9omrQIF5M-CM12rLkw6gL62R1I545M=s900-c-k-c0x00ffffff-no-rj"
                alt="nixplay-logo"
                className="w-[5vh] h-[5vh]" />
            </div>
            <div className="flex space-x-2 items-center">
              <li>
                <Image
                  src="/images/united.png"
                  alt="Description of the image"
                  width={30}
                  height={30}
                />
              </li>
              <li>
                <Image
                  src="/images/uk.png"
                  alt="Description of the image"
                  width={30}
                  height={30}
                />
              </li>
              <li>
                <Image
                  src="/images/german.png"
                  alt="Description of the image"
                  width={30}
                  height={30}
                />
              </li>
            </div>
          </div>
        </ul>
      </header>
      <main>
        <div className="snap-y snap-mandatory scroll-smooth h-screen">
          <section ref={firstSectionRef} className="snap-start h-screen flex justify-center items-center">
            <div className="space-y-10 ml-auto mr-auto">
              <div className="flex flex-col items-center space-y-2">
                <div className="flex justify-center items-center">
                  <h1 className="font-[900] text-2xl">nuxplay</h1>
                  <img
                    src="https://yt3.googleusercontent.com/ytc/AIdro_k7RWEIXhS1uWBcJ9omrQIF5M-CM12rLkw6gL62R1I545M=s900-c-k-c0x00ffffff-no-rj"
                    alt="nixplay-logo"
                    className="w-[5vh] h-[5vh]" />
                </div>
                <div>
                  <p className="text-2xl text-gray-500">Wi-FI Cloud Frames</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <h4 className="text-center">Connect With</h4>
                <div className="flex flex-wrap justify-center gap-6">
                  <img
                    src={"https://media.licdn.com/dms/image/D4D12AQHZxKsDUKUaSw/article-cover_image-shrink_720_1280/0/1701665466077?e=2147483647&v=beta&t=Wl56-vcVg44yZekqzdrrkz8vgUeD0c2K5QGG46wOKKg"}
                    alt="amazon-alexa"
                    className="w-[20vh] h-[15vh]" />
                  <img
                    src="https://download.logo.wine/logo/Flickr/Flickr-Logo.wine.png"
                    alt="flickr"
                    className="w-[10vh] h-[7vh] mt-7 mr-1" />
                  <Image src="/images/google-photos.png" alt="Google Photos" width={120} height={50} style={{ height: "90px", marginTop: '12px' }} />
                </div>
                <div className="flex flex-wrap justify-center gap-6 mt-2">
                  <Image src="/images/instagram.png" alt="Instagram" width={100} height={50} className="mt-[-10px]" />
                  <img
                    src="https://logolook.net/wp-content/uploads/2021/06/Facebook-Log%D0%BE.png"
                    alt="facebook"
                    className="w-[15vh] h-[10vh]" />
                  <img
                    src="https://logos-world.net/wp-content/uploads/2020/10/Dropbox-Logo.png"
                    alt="dropbox"
                    className="w-[15vh] h-[10vh]" />
                </div>
              </div>
            </div>
          </section>
          <section className="snap-start h-screen flex justify-center items-center"
            style={{ background: products[selectedProductIndex].background, position: 'relative', overflow: 'hidden' }}>
            
            {/* Vertical line */}
            <div className="absolute left-4 h-[88%] mt-[51px] border-l-2 border-black flex flex-col items-start justify-center z-10">
              {/* Product name indicators */}
              <div className="flex flex-col items-start pl-2">
                {products.map((product, index) => (
                  <div key={product.id} className="relative mb-4 ml-1 cursor-pointer" onClick={() => handleProductChange(index)}>
                    <span className={`text-lg ${selectedProductIndex === index ? 'font-bold' : ''}`} style={{ color: selectedProductIndex === index ? 'black' : 'black' }}>
                      {product.name}
                    </span>
                    {selectedProductIndex === index && (
                      <div className="absolute left-[-14.5px] top-1/2 transform -translate-y-1/2 bg-white w-1 h-4 rounded-full" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Current product */}
            <div className={`absolute w-full transition-all duration-300 ${animating ? '-translate-y-[100%] opacity-0' : 'translate-y-0 opacity-100'}`}>
              <div className="relative flex flex-col items-center">
                <div className="mt-10">
                  {products[selectedProductIndex].images[selectedColor]}
                </div>
                <div className="text-center mt-4 transition-all duration-300">
                  <h1>{products[selectedProductIndex].name}</h1>
                  <p>{products[selectedProductIndex].description}</p>
                  <button className="mt-4 px-4 py-2 bg-blue-500 text-white">Learn More</button>
                </div>
              </div>
            </div>

            {/* Next product */}
            <div className={`absolute w-full transition-all duration-300 ${animating ? 'translate-y-0 opacity-100' : 'translate-y-[100%] opacity-0'}`}>
              <div className="relative flex flex-col items-center">
                <div className="mt-10">
                  {products[(selectedProductIndex + 1) % products.length].images[selectedColor]}
                </div>
                <div className="text-center mt-4">
                  <h1>{products[(selectedProductIndex + 1) % products.length].name}</h1>
                  <p>{products[(selectedProductIndex + 1) % products.length].description}</p>
                  <button className="mt-4 px-4 py-2 bg-blue-500 text-white">Learn More</button>
                </div>
              </div>
            </div>

            {showColorSwitcher && (
              <div className="flex flex-col space-y-2 items-center absolute right-0 top-1/2 transform -translate-y-1/2 mr-4">
                {products[selectedProductIndex].colors.map((color) => (
                  <div
                    key={color}
                    className={`w-8 h-8 cursor-pointer rounded-full flex items-center justify-center ${selectedColor === color ? 'border-2 border-white' : ''}`}
                    style={{
                      backgroundColor:
                        color === "black" ? "#000" :
                        color === "brown" ? "#8B4513" :
                        color === "gold" ? "#FFD700" :
                        color === "pink" ? "#FFC0CB" :
                        color === "teal" ? "#008080" :
                        "#00008B",
                    }}
                    onClick={() => setSelectedColor(color)}
                  >
                    {selectedColor === color && <div className="w-full h-full rounded-full border-2 border-white" />}
                  </div>
                ))}
              </div>
            )}
            
            <div className="absolute bottom-4 left-8 flex space-y-2 flex-col z-10">
              <button onClick={handlePrevProduct} className="bg-black text-white p-3 w-12 rounded-full">↑</button>
              <button onClick={handleNextProduct} className="bg-black text-white p-3 w-12 rounded-full">↓</button>
            </div>
          </section>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}
