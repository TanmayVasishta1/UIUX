"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface CarDetail {
  id: number;
  image: string;
  images?: string[];
  name: string;
  type: string;
  fuelType: string;
  price: string;
  mileage: string;
  engine: string;
  power: string;
  transmission: string;
  seating?: string;
  bootSpace?: string;
  colors: string[];
  features: string[];
  statePrices?: { [key: string]: string };
  variants?: {
    [variant: string]: {
      [region: string]: string;
    }
  };
  groundClearance?: string;
}

// This would typically come from an API or database
const carDetails: { [key: string]: CarDetail } = {
  // Skoda Kushaq
  "skoda-kushaq": {
    id: 4,
    image: "/images/16_skoda_kushaq_wp.jpg",
    images: [
      "/images/kushaq/skoda-kushaq-front.jpg",
      "/images/kushaq/skoda-kushaq-side.jpg",
      "/images/kushaq/skoda-kushaq-rear.jpg",
      "/images/kushaq/skoda-kushaq-interior.jpg"
    ],
    name: "Skoda Kushaq",
    type: "SUV",
    fuelType: "Petrol",
    transmission: "Manual/Automatic",
    price: "₹11,59,000",
    mileage: "17.7 kmpl",
    engine: "1.0L TSI",
    power: "113 bhp",
    seating: "5",
    bootSpace: "385L",
    colors: ["Orange", "White", "Silver", "Red"],
    features: [
      "Sunroof",
      "Touchscreen Infotainment",
      "6 Airbags",
      "Cruise Control",
      "Wireless Charging"
    ],
    variants: {
      "Active": {
        "Delhi": "₹11,59,000",
        "Mumbai": "₹11,79,000",
        "Bangalore": "₹12,09,000",
        "Chandigarh": "₹11,65,000",
        "Puducherry": "₹11,75,000"
      },
      "Style": {
        "Delhi": "₹13,20,000",
        "Mumbai": "₹13,40,000",
        "Bangalore": "₹13,60,000",
        "Chandigarh": "₹13,25,000",
        "Puducherry": "₹13,30,000"
      }
    },
    groundClearance: "188mm"
  },
  // Tata Curvv
  "tata-curvv": {
    id: 5,
    image: "/images/tata curv.jpeg",
    images: [
      "/images/tata-curvv/tata curv.jpeg",
      "/images/curvv/curvv.webp",
      "/images/curvv/curvvvv.jpg",
      "https://placehold.co/600x400/3366FF/white?text=Curvv+Side",
      "https://placehold.co/600x400/FFFF33/black?text=Curvv+Interior"
    ],
    name: "Tata Curvv",
    type: "SUV Coupe",
    fuelType: "Petrol/Diesel",
    transmission: "Manual/Automatic",
    price: "₹12,00,000",
    mileage: "18.5 kmpl (expected)",
    engine: "1.2L Turbo Petrol",
    power: "125 bhp",
    seating: "5",
    bootSpace: "400L",
    colors: ["Bronze", "Blue", "Black"],
    features: [
      "Coupe Design",
      "Panoramic Sunroof",
      "Connected Car Tech",
      "6 Airbags"
    ],
    variants: {
      "Base": {
        "Delhi": "₹12,00,000",
        "Mumbai": "₹12,20,000",
        "Bangalore": "₹12,50,000",
        "Chandigarh": "₹12,10,000",
        "Puducherry": "₹12,15,000"
      },
      "Top": {
        "Delhi": "₹13,10,000",
        "Mumbai": "₹13,30,000",
        "Bangalore": "₹13,60,000",
        "Chandigarh": "₹13,20,000",
        "Puducherry": "₹13,25,000"
      }
    },
    groundClearance: "200mm"
  },
  // Toyota Yaris
  "toyota-yaris": {
    id: 6,
    image: "/images/toyota yaris.png",
    images: [
      "/images/toyota-yaris/toyota yaris.png",
      "https://placehold.co/600x400/FF0000/white?text=Yaris+Front",
      "https://placehold.co/600x400/00FF00/white?text=Yaris+Side",
      "https://placehold.co/600x400/0000FF/white?text=Yaris+Interior"
    ],
    name: "Toyota Yaris",
    type: "Sedan",
    fuelType: "Petrol",
    transmission: "Manual/Automatic",
    price: "₹9,00,000",
    mileage: "17.1 kmpl",
    engine: "1.5L Petrol",
    power: "107 bhp",
    seating: "5",
    bootSpace: "476L",
    colors: ["White", "Silver", "Grey", "Red"],
    features: [
      "7 Airbags",
      "Touchscreen Infotainment",
      "Climate Control",
      "Rear Camera"
    ],
    variants: {
      "J": {
        "Delhi": "₹9,00,000",
        "Mumbai": "₹9,20,000",
        "Bangalore": "₹9,50,000",
        "Chandigarh": "₹9,10,000",
        "Puducherry": "₹9,15,000"
      },
      "V": {
        "Delhi": "₹10,10,000",
        "Mumbai": "₹10,30,000",
        "Bangalore": "₹10,60,000",
        "Chandigarh": "₹10,20,000",
        "Puducherry": "₹10,25,000"
      }
    },
    groundClearance: "175mm"
  },
  // Hyundai Verna
  "hyundai-verna": {
    id: 7,
    image: "/images/verna.jpg",
    images: [
      "/images/verna/verna.jpg",
      "/images/verna/verna interior.jpeg",
      "https://placehold.co/600x400/AA00AA/white?text=Verna+Front",
      "https://placehold.co/600x400/00AAAA/white?text=Verna+Rear"
    ],
    name: "Hyundai Verna",
    type: "Sedan",
    fuelType: "Petrol/Diesel",
    transmission: "Manual/Automatic",
    price: "₹10,90,000",
    mileage: "18.6 kmpl",
    engine: "1.5L Petrol",
    power: "115 bhp",
    seating: "5",
    bootSpace: "480L",
    colors: ["Black", "White", "Blue", "Grey"],
    features: [
      "Ventilated Seats",
      "Digital Cluster",
      "Sunroof",
      "6 Airbags"
    ],
    variants: {
      "S": {
        "Delhi": "₹10,90,000",
        "Mumbai": "₹11,10,000",
        "Bangalore": "₹11,30,000",
        "Chandigarh": "₹10,95,000",
        "Puducherry": "₹11,00,000"
      },
      "SX (O)": {
        "Delhi": "₹12,00,000",
        "Mumbai": "₹12,20,000",
        "Bangalore": "₹12,40,000",
        "Chandigarh": "₹12,05,000",
        "Puducherry": "₹12,10,000"
      }
    },
    groundClearance: "170mm"
  },
  // Skoda Slavia
  "skoda-slavia": {
    id: 8,
    image: "/images/slavia.jpg",
    images: [
      "/images/slavia/slavia.jpg",
      "/images/slavia/back.jpeg",
      "/images/slavia/interiorslavia.jpeg",
      "/images/slavia/slaviaa.jpeg",
      "https://placehold.co/600x400/123456/white?text=Slavia+Front",
      "https://placehold.co/600x400/654321/white?text=Slavia+Side"
    ],
    name: "Skoda Slavia",
    type: "Sedan",
    fuelType: "Petrol",
    transmission: "Manual/Automatic",
    price: "₹11,39,000",
    mileage: "18.7 kmpl",
    engine: "1.0L TSI Petrol",
    power: "115 bhp",
    seating: "5",
    bootSpace: "521L",
    colors: ["Red", "White", "Silver", "Blue"],
    features: [
      "Wireless Charging",
      "Sunroof",
      "6 Airbags",
      "Cruise Control"
    ],
    variants: {
      "Active": {
        "Delhi": "₹11,39,000",
        "Mumbai": "₹11,59,000",
        "Bangalore": "₹11,89,000",
        "Chandigarh": "₹11,45,000",
        "Puducherry": "₹11,50,000"
      },
      "Style": {
        "Delhi": "₹13,49,000",
        "Mumbai": "₹13,69,000",
        "Bangalore": "₹13,99,000",
        "Chandigarh": "₹13,55,000",
        "Puducherry": "₹13,60,000"
      }
    },
    groundClearance: "179mm"
  },
  "hyundai-creta": {
    id: 1,
    image: "/images/hyundai-creta-4k-sunset-2024-cars-su2.jpg",
    images: [
      "/images/creta/Hyundai Creta Front View.jpg",
      "/images/creta/Hyundai Creta Front Right View.jpg",
      "/images/creta/hyundai-creta-4k-sunset-2024-cars-su2.jpg",
      "https://placehold.co/600x400/FF5733/white?text=Creta+Interior",
      "https://placehold.co/600x400/33FF57/white?text=Creta+Rear"
    ],
    name: "Hyundai Creta",
    type: "SUV",
    fuelType: "Petrol",
    price: "₹14,50,000",
    mileage: "16.8 kmpl",
    engine: "1.5L",
    power: "113 bhp",
    transmission: "Manual",
    seating: "5",
    bootSpace: "433L",
    colors: ["White", "Black", "Silver", "Blue"],
    features: [
      "Sunroof",
      "Leather Seats",
      "Apple CarPlay",
      "Android Auto",
      "Cruise Control",
      "Parking Sensors"
    ],
    variants: {
      "E": {
        "Delhi": "₹14,50,000",
        "Mumbai": "₹15,20,000",
        "Bangalore": "₹14,80,000",
        "Chandigarh": "₹14,65,000",
        "Puducherry": "₹14,70,000"
      },
      "SX (O)": {
        "Delhi": "₹16,20,000",
        "Mumbai": "₹16,90,000",
        "Bangalore": "₹16,50,000",
        "Chandigarh": "₹16,35,000",
        "Puducherry": "₹16,40,000"
      }
    },
    groundClearance: "190mm"
  },
  "tata-nexon": {
    id: 2,
    image: "/images/cars/nexon.jpg",
    images: [
      "/images/nexon/Tata Nexon Front Left View.jpg",
      "/images/nexon/Tata Nexon Front View.jpg",
      "/images/nexon/download.jpeg",
      "/images/nexon/interiornexon.jpeg",
      "https://placehold.co/600x400/5500AA/white?text=Nexon+Side",
      "https://placehold.co/600x400/AA0055/white?text=Nexon+Interior"
    ],
    name: "Tata Nexon",
    type: "Compact SUV",
    fuelType: "Diesel",
    transmission: "Automatic",
    price: "₹9,60,000",
    mileage: "21.5 kmpl",
    engine: "1.5L",
    power: "108 bhp",
    colors: [],
    features: [],
    variants: {
      "XM": {
        "Delhi": "₹9,60,000",
        "Mumbai": "₹10,00,000",
        "Bangalore": "₹9,80,000",
        "Chandigarh": "₹9,75,000",
        "Puducherry": "₹9,80,000"
      },
      "XZA Plus": {
        "Delhi": "₹11,10,000",
        "Mumbai": "₹11,50,000",
        "Bangalore": "₹11,30,000",
        "Chandigarh": "₹11,25,000",
        "Puducherry": "₹11,30,000"
      }
    },
    groundClearance: "209mm"
  },
  "maruti-baleno": {
    id: 3,
    image: "/images/cars/baleno.jpg",
    images: [
      "/images/baleno/baleno.jpg",
      "/images/baleno/back.jpeg",
      "/images/baleno/download.jpeg",
      "/images/baleno/interior.jpeg",
      "https://placehold.co/600x400/0000FF/white?text=Baleno+Front",
      "https://placehold.co/600x400/00FF00/white?text=Baleno+Rear"
    ],
    name: "Maruti Suzuki Baleno",
    type: "Premium Hatchback",
    fuelType: "Petrol/CNG",
    transmission: "Manual/Automatic",
    price: "₹6,61,000",
    mileage: "22.9 kmpl",
    engine: "1.2L DualJet",
    power: "88 bhp",
    colors: [],
    features: [],
    variants: {
      "Sigma": {
        "Delhi": "₹8,90,000",
        "Mumbai": "₹9,30,000",
        "Bangalore": "₹9,10,000",
        "Chandigarh": "₹9,05,000",
        "Puducherry": "₹9,10,000"
      },
      "Alpha": {
        "Delhi": "₹10,20,000",
        "Mumbai": "₹10,60,000",
        "Bangalore": "₹10,40,000",
        "Chandigarh": "₹10,35,000",
        "Puducherry": "₹10,40,000"
      }
    },
    groundClearance: "170mm"
  }
};

export default function CarDetailsPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const car = carDetails[slug];

  const [selectedVariant, setSelectedVariant] = useState<string>(
    car?.variants ? Object.keys(car.variants)[0] : ''
  );
  const [selectedRegion, setSelectedRegion] = useState<string>(
    car?.variants
      ? Object.keys(car.variants[selectedVariant || Object.keys(car.variants)[0]])[0]
      : car?.statePrices
        ? Object.keys(car.statePrices)[0]
        : ''
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [slug]);

  if (!car) {
    return (
      <main className="min-h-screen bg-neutral-900 text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">Car Not Found</h1>
      </main>
    );
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? (car.images?.length || 1) - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % (car.images?.length || 1)
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const currentImageSrc = Array.isArray(car.images) && car.images.length > 0
    ? car.images[currentImageIndex]
    : (car.image || '/images/no-car.png');

  return (
    <main className="min-h-screen bg-neutral-900 text-white relative">
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/cars-bg.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 pt-24">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/cars" className="text-orange-500 hover:underline">
            &larr; Back to Cars
          </Link>
          <h1 className="text-3xl font-bold">{car.name}</h1>
          <div />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
          <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg border border-neutral-700">
            <Image
              src={currentImageSrc}
              alt={car.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-opacity duration-300"
              priority
            />
            {car.images && car.images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors z-10"
                  aria-label="Previous image"
                >
                  &#8592;
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors z-10"
                  aria-label="Next image"
                >
                  &#8594;
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                  {car.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-gray-400'} transition-colors`}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="bg-neutral-800 rounded-xl p-8 shadow-lg border border-neutral-700">
            <h2 className="text-3xl font-bold mb-4">{car.name}</h2>
            <p className="text-gray-400 text-lg mb-6">
              {car.type} • {car.fuelType} • {car.transmission}
            </p>
            <p className="text-orange-500 text-4xl font-bold mb-6">
              {car.price}
            </p>

            {car.variants ? (
              <div className="mb-6 flex gap-4 items-end">
                <div className="flex-1">
                  <label htmlFor="variant-select" className="block text-sm font-medium text-gray-400 mb-2">
                    Variant:
                  </label>
                  <select
                    id="variant-select"
                    value={selectedVariant || Object.keys(car.variants)[0]}
                    onChange={(e) => setSelectedVariant(e.target.value)}
                    className="w-full rounded-md border border-gray-600 bg-neutral-700 text-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    {Object.keys(car.variants).map((variant) => (
                      <option key={variant} value={variant}>{variant}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <label htmlFor="region-select" className="block text-sm font-medium text-gray-400 mb-2">
                    Region:
                  </label>
                  <select
                    id="region-select"
                    value={selectedRegion || Object.keys(car.variants[selectedVariant || Object.keys(car.variants)[0]])[0]}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="w-full rounded-md border border-gray-600 bg-neutral-700 text-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    {Object.keys(car.variants[selectedVariant || Object.keys(car.variants)[0]]).map((region) => (
                      <option key={region} value={region}>{region}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <p className="text-white text-base font-medium mb-0">
                    Price: {car.variants[selectedVariant || Object.keys(car.variants)[0]][selectedRegion || Object.keys(car.variants[selectedVariant || Object.keys(car.variants)[0]])[0]]}
                  </p>
                </div>
              </div>
            ) : car.statePrices && Object.keys(car.statePrices).length > 0 && (
              <div className="mb-6">
                <label htmlFor="region-select" className="block text-sm font-medium text-gray-400 mb-2">
                  Price in Region:
                </label>
                <select
                  id="region-select"
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full rounded-md border border-gray-600 bg-neutral-700 text-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {Object.entries(car.statePrices).map(([state, price]) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                {selectedRegion && car.statePrices[selectedRegion] && (
                  <p className="mt-2 text-white text-base font-medium">
                    Price: {car.statePrices[selectedRegion]}
                  </p>
                )}
              </div>
            )}

            <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-6">
              <div>
                <p className="text-gray-400 text-sm mb-1">Engine</p>
                <p className="text-white text-base">{car.engine}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Power</p>
                <p className="text-white text-base">{car.power}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Mileage</p>
                <p className="text-white text-base">{car.mileage}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Ground Clearance</p>
                <p className="text-white text-base">{car.groundClearance}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Boot Space</p>
                <p className="text-white text-base">{car.bootSpace}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Seating</p>
                <p className="text-white text-base">{car.seating}</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3">Key Features</h3>
            <ul className="list-disc list-inside text-gray-300 mb-6 grid grid-cols-2 gap-y-2">
              {car.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-3">Available Colors</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {car.colors.map((color, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-neutral-700 text-sm rounded-full"
                >
                  {color}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/sell-car"
                className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-lg text-center font-medium hover:bg-orange-600 transition-colors"
              >
                Sell Your Car
              </Link>
              <Link
                href="/emi-calculator"
                className="flex-1 border border-orange-500 text-orange-500 py-3 px-6 rounded-lg text-center font-medium hover:bg-orange-500 hover:text-white transition-colors"
              >
                Calculate EMI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 