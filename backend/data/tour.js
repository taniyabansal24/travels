const tours = [
  {
    category: "Mountain",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna id dolor elementum ultrices.",
    types: [
      {
        name: "Himachal",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna id dolor elementum ultrices.",
        image: "/uploads/image-1716874126098.jpg",
        price: 5000,
        rating: 5,
        reviews: 100,
        location: "Himachal Pradesh",
        days: 5,
        nights: 4,
        title: "Mountain",
        photos: [
          {
            src: "https://images.unsplash.com/photo-1624358084630-f0880cb776a2?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            src: "https://images.unsplash.com/photo-1563124155-dbc34ba9bedb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D",
          },
          {
            src: "https://media.istockphoto.com/id/1005227506/photo/har-ki-pauri-is-a-famous-ghat-on-the-banks-of-the-ganges-in-haridwar-india.jpg?s=1024x1024&w=is&k=20&c=ogligY6KGUvn3-OUZ2d49Dk-wnu0CXf6wYddSYNaC2E=",
          },
          {
            src: "https://media.istockphoto.com/id/1044399860/photo/ganga-arthi-in-the-holy-city-of-rishikesh-in-uttarakhand-india-to-worship-river-ganga-ganges.jpg?s=1024x1024&w=is&k=20&c=H4n93UJhR8LPsa_aQdnv1A_BbGWVCQBjf-_mYMvIC44=",
          },
          {
            src: "https://media.istockphoto.com/id/1752927325/photo/lord-shiva-statue-on-the-banks-of-the-sacred-ganges-river-in-rishikesh-india.jpg?s=1024x1024&w=is&k=20&c=v6dsl2iSWOP02bnQg6dzNZI7V86odf5Eu6OemV4v6TU=",
          },
          {
            src: "https://media.istockphoto.com/id/825268350/photo/hardiwar.webp?b=1&s=170667a&w=0&k=20&c=O2GgcESUTZp-GfprLRKPX8OXWN_kr_fZ-31YB1NRduA=",
          },
        ],

        inclusions: [
          "Meal as per hotel Plan and drinks free too",
          "Return airport and round trip transfers",
          "Accommodation on twin sharing basis",
          "Enjoy Brussels day tours. Overnight Brussels",
        ],
        tourPlan: [
          {
            day: 1,
            name: "City Highlights",
            description:
              "Visit the city's main landmarks including museums, parks, and historical sites.",
            car: [
              {
                destination: "New Delhi to Haridwar",
                type: "Private Transport",
                model: "Swift",
                facilities: "3 seater, 2 Luggage Bags, First Aid",
                image:
                  "https://images.unsplash.com/photo-1511125357779-27038c647d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
              },
            ],
            sightseeing: [
              {
                name: "Haridwar",
                location: "Haridwar, India",
                places: ["Har Ki Pauri", "Chandi Devi", "Mansa Devi"],
                duration: "4 hr",
                placesCovered: 3,
                image:
                  "https://images.unsplash.com/photo-1511754863001-18d44abd0a93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D",
              },
            ],
            hotels: [
              {
                timming: "Check-in to Hotel in Near Shiv Murti Chowk @ 12 PM",
                name: "Umra Grace Hotel",
                ratings: "3",
                location: "near Shiv Murti Chowk",
                stayDate: "9th Aug 2024 - 10th Aug 2024",
                image:
                  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
              },
            ],
          },
          {
            day: 2,
            name: "Cultural Experience",
            description:
              "Explore the local culture through food, music, and art.",
            car: [
              {
                checkout: "Checkout from Hotel in Haridwar",
                destination: "Haridwar to Rishikesh",
                type: "private transport",
                model: "swift",
                facilities: "3 seater, 2 Luggage Bags, First Aid",
                image:
                  "https://images.unsplash.com/photo-1511125357779-27038c647d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
              },
            ],
            sightseeing: [
              {
                name: "Rishikesh",
                location: "Rishikesh, India",
                places: ["Bharat Mandir", "Parmarth Niketan", "Ram Jhula"],
                duration: "3 hr",
                placesCovered: 3,
                image:
                  "https://images.unsplash.com/photo-1588750765220-50603c3c0c7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D",
              },
            ],
            hotels: [
              {
                timming: "Check-in to Hotel in Tapovan @ 2 PM",
                name: "Hotel Rishikesh Grand",
                ratings: "3.5",
                location: "Tapovan",
                stayDate: "10th Aug 2024 - 11th Aug 2024",
                image:
                  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
              },
            ],
          },
          {
            day: 3,
            name: "Cultural Experience",
            description:
              "Explore the local culture through food, music, and art.",
            car: [
              {
                checkout: "Checkout from Hotel in Rishikesh",
                destination: "Rishikesh to Mussoorie",
                type: "Private transport",
                model: "Swift",
                facilities: "3 seater, 2 Luggage Bags, First Aid",
                image:
                  "https://images.unsplash.com/photo-1511125357779-27038c647d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
              },
            ],
            hotels: [
              {
                timming:
                  "Check-in to Hotel in Near Picture Palace Bus Stand @ 2 PM",
                name: "Umra Grace Hotel",
                ratings: "3",
                location: "near Shiv Murti Chowk",
                stayDate: "9th Aug 2024 - 10th Aug 2024",
                image:
                  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
              },
            ],
          },
        ],
        availableFrom: new Date("2024-06-01"),
        availableTill: new Date("2024-09-30"),
      },
      {
        name: "Ladakh",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna id dolor elementum ultrices.",
        image: "/uploads/image-1716874126098.jpg",
        price: 10000,
        rating: 4.8,
        reviews: 120,
        location: "Jammu and Kashmir",
        days: 6,
        nights: 5,
        title: "Mountain",
        photos: [
          {
            src: "https://images.unsplash.com/photo-1624358084630-f0880cb776a2?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            src: "https://images.unsplash.com/photo-1563124155-dbc34ba9bedb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D",
          },
          {
            src: "https://media.istockphoto.com/id/1005227506/photo/har-ki-pauri-is-a-famous-ghat-on-the-banks-of-the-ganges-in-haridwar-india.jpg?s=1024x1024&w=is&k=20&c=ogligY6KGUvn3-OUZ2d49Dk-wnu0CXf6wYddSYNaC2E=",
          },
          {
            src: "https://media.istockphoto.com/id/1044399860/photo/ganga-arthi-in-the-holy-city-of-rishikesh-in-uttarakhand-india-to-worship-river-ganga-ganges.jpg?s=1024x1024&w=is&k=20&c=H4n93UJhR8LPsa_aQdnv1A_BbGWVCQBjf-_mYMvIC44=",
          },
          {
            src: "https://media.istockphoto.com/id/1752927325/photo/lord-shiva-statue-on-the-banks-of-the-sacred-ganges-river-in-rishikesh-india.jpg?s=1024x1024&w=is&k=20&c=v6dsl2iSWOP02bnQg6dzNZI7V86odf5Eu6OemV4v6TU=",
          },
          {
            src: "https://media.istockphoto.com/id/825268350/photo/hardiwar.webp?b=1&s=170667a&w=0&k=20&c=O2GgcESUTZp-GfprLRKPX8OXWN_kr_fZ-31YB1NRduA=",
          },
        ],
        inclusions: [
          "Meal as per hotel Plan and drinks free too",
          "Return airport and round trip transfers",
          "Accommodation on twin sharing basis",
          "Enjoy Brussels day tours. Overnight Brussels",
        ],
        tourPlan: [
          {
            day: 1,
            name: "City Highlights",
            description:
              "Visit the city's main landmarks including museums, parks, and historical sites.",
            car: [
              {
                destination: "New Delhi to Haridwar",
                type: "Private Transport",
                model: "Swift",
                facilities: "3 seater, 2 Luggage Bags, First Aid",
                image:
                  "https://images.unsplash.com/photo-1511125357779-27038c647d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
              },
            ],
            sightseeing: [
              {
                name: "Haridwar",
                location: "Haridwar, India",
                places: ["Har Ki Pauri", "Chandi Devi", "Mansa Devi"],
                duration: "4 hr",
                placesCovered: 3,
                image:
                  "https://images.unsplash.com/photo-1511754863001-18d44abd0a93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D",
              },
            ],
            hotels: [
              {
                timming: "Check-in to Hotel in Near Shiv Murti Chowk @ 12 PM",
                name: "Umra Grace Hotel",
                ratings: "3",
                location: "near Shiv Murti Chowk",
                stayDate: "9th Aug 2024 - 10th Aug 2024",
                image:
                  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
              },
            ],
          },
          {
            day: 2,
            name: "Cultural Experience",
            description:
              "Explore the local culture through food, music, and art.",
            car: [
              {
                checkout: "Checkout from Hotel in Haridwar",
                destination: "Haridwar to Rishikesh",
                type: "private transport",
                model: "swift",
                facilities: "3 seater, 2 Luggage Bags, First Aid",
                image:
                  "https://images.unsplash.com/photo-1511125357779-27038c647d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
              },
            ],
            sightseeing: [
              {
                name: "Rishikesh",
                location: "Rishikesh, India",
                places: ["Bharat Mandir", "Parmarth Niketan", "Ram Jhula"],
                duration: "3 hr",
                placesCovered: 3,
                image:
                  "https://images.unsplash.com/photo-1588750765220-50603c3c0c7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D",
              },
            ],
            hotels: [
              {
                timming: "Check-in to Hotel in Tapovan @ 2 PM",
                name: "Hotel Rishikesh Grand",
                ratings: "3.5",
                location: "Tapovan",
                stayDate: "10th Aug 2024 - 11th Aug 2024",
                image:
                  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
              },
            ],
          },
          {
            day: 3,
            name: "Cultural Experience",
            description:
              "Explore the local culture through food, music, and art.",
            car: [
              {
                checkout: "Checkout from Hotel in Rishikesh",
                destination: "Rishikesh to Mussoorie",
                type: "Private transport",
                model: "Swift",
                facilities: "3 seater, 2 Luggage Bags, First Aid",
                image:
                  "https://images.unsplash.com/photo-1511125357779-27038c647d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
              },
            ],
            hotels: [
              {
                timming:
                  "Check-in to Hotel in Near Picture Palace Bus Stand @ 2 PM",
                name: "Umra Grace Hotel",
                ratings: "3",
                location: "near Shiv Murti Chowk",
                stayDate: "9th Aug 2024 - 10th Aug 2024",
                image:
                  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
              },
            ],
          },
        ],
        availableFrom: new Date("2024-06-15"),
        availableTill: new Date("2024-09-15"),
      },
      {
        name: "Kashmir",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna id dolor elementum ultrices.",
        image: "/uploads/image-1716874126098.jpg",
        price: 15000,
        rating: 4.5,
        reviews: 80,
        location: "Jammu and Kashmir",
        days: 7,
        nights: 6,
        title: "Mountain",
        photos: [
          {
            src: "https://images.unsplash.com/photo-1624358084630-f0880cb776a2?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            src: "https://images.unsplash.com/photo-1563124155-dbc34ba9bedb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D",
          },
          {
            src: "https://media.istockphoto.com/id/1005227506/photo/har-ki-pauri-is-a-famous-ghat-on-the-banks-of-the-ganges-in-haridwar-india.jpg?s=1024x1024&w=is&k=20&c=ogligY6KGUvn3-OUZ2d49Dk-wnu0CXf6wYddSYNaC2E=",
          },
          {
            src: "https://media.istockphoto.com/id/1044399860/photo/ganga-arthi-in-the-holy-city-of-rishikesh-in-uttarakhand-india-to-worship-river-ganga-ganges.jpg?s=1024x1024&w=is&k=20&c=H4n93UJhR8LPsa_aQdnv1A_BbGWVCQBjf-_mYMvIC44=",
          },
          {
            src: "https://media.istockphoto.com/id/1752927325/photo/lord-shiva-statue-on-the-banks-of-the-sacred-ganges-river-in-rishikesh-india.jpg?s=1024x1024&w=is&k=20&c=v6dsl2iSWOP02bnQg6dzNZI7V86odf5Eu6OemV4v6TU=",
          },
          {
            src: "https://media.istockphoto.com/id/825268350/photo/hardiwar.webp?b=1&s=170667a&w=0&k=20&c=O2GgcESUTZp-GfprLRKPX8OXWN_kr_fZ-31YB1NRduA=",
          },
        ],
        inclusions: [
          "Meal as per hotel Plan and drinks free too",
          "Return airport and round trip transfers",
          "Accommodation on twin sharing basis",
          "Enjoy Brussels day tours. Overnight Brussels",
        ],
        tourPlan: [
          {
            day: 1,
            name: "City Highlights",
            description:
              "Visit the city's main landmarks including museums, parks, and historical sites.",
            car: [
              {
                destination: "New Delhi to Haridwar",
                type: "Private Transport",
                model: "Swift",
                facilities: "3 seater, 2 Luggage Bags, First Aid",
                image:
                  "https://images.unsplash.com/photo-1511125357779-27038c647d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
              },
            ],
            sightseeing: [
              {
                name: "Haridwar",
                location: "Haridwar, India",
                places: ["Har Ki Pauri", "Chandi Devi", "Mansa Devi"],
                duration: "4 hr",
                placesCovered: 3,
                image:
                  "https://images.unsplash.com/photo-1511754863001-18d44abd0a93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D",
              },
            ],
            hotels: [
              {
                timming: "Check-in to Hotel in Near Shiv Murti Chowk @ 12 PM",
                name: "Umra Grace Hotel",
                ratings: "3",
                location: "near Shiv Murti Chowk",
                stayDate: "9th Aug 2024 - 10th Aug 2024",
                image:
                  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
              },
            ],
          },
          {
            day: 2,
            name: "Cultural Experience",
            description:
              "Explore the local culture through food, music, and art.",
            car: [
              {
                checkout: "Checkout from Hotel in Haridwar",
                destination: "Haridwar to Rishikesh",
                type: "private transport",
                model: "swift",
                facilities: "3 seater, 2 Luggage Bags, First Aid",
                image:
                  "https://images.unsplash.com/photo-1511125357779-27038c647d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
              },
            ],
            sightseeing: [
              {
                name: "Rishikesh",
                location: "Rishikesh, India",
                places: ["Bharat Mandir", "Parmarth Niketan", "Ram Jhula"],
                duration: "3 hr",
                placesCovered: 3,
                image:
                  "https://images.unsplash.com/photo-1588750765220-50603c3c0c7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D",
              },
            ],
            hotels: [
              {
                timming: "Check-in to Hotel in Tapovan @ 2 PM",
                name: "Hotel Rishikesh Grand",
                ratings: "3.5",
                location: "Tapovan",
                stayDate: "10th Aug 2024 - 11th Aug 2024",
                image:
                  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
              },
            ],
          },
          {
            day: 3,
            name: "Cultural Experience",
            description:
              "Explore the local culture through food, music, and art.",
            car: [
              {
                checkout: "Checkout from Hotel in Rishikesh",
                destination: "Rishikesh to Mussoorie",
                type: "Private transport",
                model: "Swift",
                facilities: "3 seater, 2 Luggage Bags, First Aid",
                image:
                  "https://images.unsplash.com/photo-1511125357779-27038c647d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
              },
            ],
            hotels: [
              {
                timming:
                  "Check-in to Hotel in Near Picture Palace Bus Stand @ 2 PM",
                name: "Umra Grace Hotel",
                ratings: "3",
                location: "near Shiv Murti Chowk",
                stayDate: "9th Aug 2024 - 10th Aug 2024",
                image:
                  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
              },
            ],
          },
        ],
        availableFrom: new Date("2024-05-01"),
        availableTill: new Date("2024-10-31"),
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna id dolor elementum ultrices.",
  },
  {
    category: "Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna id dolor elementum ultrices.",
    types: [
      {
        name: "Goa",
        description:
          "Enjoy the sun, sand, and sea in the tropical paradise of Goa.",
        image: "/uploads/image-1716874126098.jpg",
        price: 6000,
        rating: 4.7,
        reviews: 90,
        location: "Goa, India",
        days: 8,
        nights: 7,
        title: "Beach",
        photos: [
          {
            src: "https://images.unsplash.com/photo-1624358084630-f0880cb776a2?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            src: "https://images.unsplash.com/photo-1563124155-dbc34ba9bedb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D",
          },
          {
            src: "https://media.istockphoto.com/id/1005227506/photo/har-ki-pauri-is-a-famous-ghat-on-the-banks-of-the-ganges-in-haridwar-india.jpg?s=1024x1024&w=is&k=20&c=ogligY6KGUvn3-OUZ2d49Dk-wnu0CXf6wYddSYNaC2E=",
          },
          {
            src: "https://media.istockphoto.com/id/1044399860/photo/ganga-arthi-in-the-holy-city-of-rishikesh-in-uttarakhand-india-to-worship-river-ganga-ganges.jpg?s=1024x1024&w=is&k=20&c=H4n93UJhR8LPsa_aQdnv1A_BbGWVCQBjf-_mYMvIC44=",
          },
          {
            src: "https://media.istockphoto.com/id/1752927325/photo/lord-shiva-statue-on-the-banks-of-the-sacred-ganges-river-in-rishikesh-india.jpg?s=1024x1024&w=is&k=20&c=v6dsl2iSWOP02bnQg6dzNZI7V86odf5Eu6OemV4v6TU=",
          },
          {
            src: "https://media.istockphoto.com/id/825268350/photo/hardiwar.webp?b=1&s=170667a&w=0&k=20&c=O2GgcESUTZp-GfprLRKPX8OXWN_kr_fZ-31YB1NRduA=",
          },
        ],
        inclusions: [
          "Meal as per hotel Plan and drinks free too",
          "Return airport and round trip transfers",
          "Accommodation on twin sharing basis",
          "Enjoy Brussels day tours. Overnight Brussels",
        ],
        tourPlan: [
          {
            day: 1,
            name: "City Highlights",
            description:
              "Visit the city's main landmarks including museums, parks, and historical sites.",
            car: [
              {
                destination: "New Delhi to Haridwar",
                type: "Private Transport",
                model: "Swift",
                facilities: "3 seater, 2 Luggage Bags, First Aid",
                image:
                  "https://images.unsplash.com/photo-1511125357779-27038c647d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
              },
            ],
            sightseeing: [
              {
                name: "Haridwar",
                location: "Haridwar, India",
                places: ["Har Ki Pauri", "Chandi Devi", "Mansa Devi"],
                duration: "4 hr",
                placesCovered: 3,
                image:
                  "https://images.unsplash.com/photo-1511754863001-18d44abd0a93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D",
              },
            ],
            hotels: [
              {
                timming: "Check-in to Hotel in Near Shiv Murti Chowk @ 12 PM",
                name: "Umra Grace Hotel",
                ratings: "3",
                location: "near Shiv Murti Chowk",
                stayDate: "9th Aug 2024 - 10th Aug 2024",
                image:
                  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
              },
            ],
          },
          {
            day: 2,
            name: "Cultural Experience",
            description:
              "Explore the local culture through food, music, and art.",
            car: [
              {
                checkout: "Checkout from Hotel in Haridwar",
                destination: "Haridwar to Rishikesh",
                type: "private transport",
                model: "swift",
                facilities: "3 seater, 2 Luggage Bags, First Aid",
                image:
                  "https://images.unsplash.com/photo-1511125357779-27038c647d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
              },
            ],
            sightseeing: [
              {
                name: "Rishikesh",
                location: "Rishikesh, India",
                places: ["Bharat Mandir", "Parmarth Niketan", "Ram Jhula"],
                duration: "3 hr",
                placesCovered: 3,
                image:
                  "https://images.unsplash.com/photo-1588750765220-50603c3c0c7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D",
              },
            ],
            hotels: [
              {
                timming: "Check-in to Hotel in Tapovan @ 2 PM",
                name: "Hotel Rishikesh Grand",
                ratings: "3.5",
                location: "Tapovan",
                stayDate: "10th Aug 2024 - 11th Aug 2024",
                image:
                  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
              },
            ],
          },
          {
            day: 3,
            name: "Cultural Experience",
            description:
              "Explore the local culture through food, music, and art.",
            car: [
              {
                checkout: "Checkout from Hotel in Rishikesh",
                destination: "Rishikesh to Mussoorie",
                type: "Private transport",
                model: "Swift",
                facilities: "3 seater, 2 Luggage Bags, First Aid",
                image:
                  "https://images.unsplash.com/photo-1511125357779-27038c647d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
              },
            ],
            hotels: [
              {
                timming:
                  "Check-in to Hotel in Near Picture Palace Bus Stand @ 2 PM",
                name: "Umra Grace Hotel",
                ratings: "3",
                location: "near Shiv Murti Chowk",
                stayDate: "9th Aug 2024 - 10th Aug 2024",
                image:
                  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
              },
            ],
          },
        ],
        availableFrom: new Date("2024-11-01"),
        availableTill: new Date("2025-03-31"),
      },
      {
        name: "Maldives",
        description:
          "Experience the beauty of the tropical paradise of Maldives.",
        image: "/uploads/image-1716874126098.jpg",
        price: 12000,
        rating: 4.5,
        reviews: 80,
        location: "Maldives, India",
        days: 5,
        nights: 4,
        title: "Beach",
        photos: [
          {
            src: "https://images.unsplash.com/photo-1624358084630-f0880cb776a2?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            src: "https://images.unsplash.com/photo-1563124155-dbc34ba9bedb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D",
          },
          {
            src: "https://media.istockphoto.com/id/1005227506/photo/har-ki-pauri-is-a-famous-ghat-on-the-banks-of-the-ganges-in-haridwar-india.jpg?s=1024x1024&w=is&k=20&c=ogligY6KGUvn3-OUZ2d49Dk-wnu0CXf6wYddSYNaC2E=",
          },
          {
            src: "https://media.istockphoto.com/id/1044399860/photo/ganga-arthi-in-the-holy-city-of-rishikesh-in-uttarakhand-india-to-worship-river-ganga-ganges.jpg?s=1024x1024&w=is&k=20&c=H4n93UJhR8LPsa_aQdnv1A_BbGWVCQBjf-_mYMvIC44=",
          },
          {
            src: "https://media.istockphoto.com/id/1752927325/photo/lord-shiva-statue-on-the-banks-of-the-sacred-ganges-river-in-rishikesh-india.jpg?s=1024x1024&w=is&k=20&c=v6dsl2iSWOP02bnQg6dzNZI7V86odf5Eu6OemV4v6TU=",
          },
          {
            src: "https://media.istockphoto.com/id/825268350/photo/hardiwar.webp?b=1&s=170667a&w=0&k=20&c=O2GgcESUTZp-GfprLRKPX8OXWN_kr_fZ-31YB1NRduA=",
          },
        ],
        inclusions: [
          "Meal as per hotel Plan and drinks free too",
          "Return airport and round trip transfers",
          "Accommodation on twin sharing basis",
          "Enjoy Brussels day tours. Overnight Brussels",
        ],
        tourPlan: [
          {
            day: 1,
            name: "City Highlights",
            description:
              "Visit the city's main landmarks including museums, parks, and historical sites.",
            car: [
              {
                destination: "New Delhi to Haridwar",
                type: "Private Transport",
                model: "Swift",
                facilities: "3 seater, 2 Luggage Bags, First Aid",
                image:
                  "https://images.unsplash.com/photo-1511125357779-27038c647d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
              },
            ],
            sightseeing: [
              {
                name: "Haridwar",
                location: "Haridwar, India",
                places: ["Har Ki Pauri", "Chandi Devi", "Mansa Devi"],
                duration: "4 hr",
                placesCovered: 3,
                image:
                  "https://images.unsplash.com/photo-1511754863001-18d44abd0a93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D",
              },
            ],
            hotels: [
              {
                timming: "Check-in to Hotel in Near Shiv Murti Chowk @ 12 PM",
                name: "Umra Grace Hotel",
                ratings: "3",
                location: "near Shiv Murti Chowk",
                stayDate: "9th Aug 2024 - 10th Aug 2024",
                image:
                  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
              },
            ],
          },
          {
            day: 2,
            name: "Cultural Experience",
            description:
              "Explore the local culture through food, music, and art.",
            car: [
              {
                checkout: "Checkout from Hotel in Haridwar",
                destination: "Haridwar to Rishikesh",
                type: "private transport",
                model: "swift",
                facilities: "3 seater, 2 Luggage Bags, First Aid",
                image:
                  "https://images.unsplash.com/photo-1511125357779-27038c647d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
              },
            ],
            sightseeing: [
              {
                name: "Rishikesh",
                location: "Rishikesh, India",
                places: ["Bharat Mandir", "Parmarth Niketan", "Ram Jhula"],
                duration: "3 hr",
                placesCovered: 3,
                image:
                  "https://images.unsplash.com/photo-1588750765220-50603c3c0c7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D",
              },
            ],
            hotels: [
              {
                timming: "Check-in to Hotel in Tapovan @ 2 PM",
                name: "Hotel Rishikesh Grand",
                ratings: "3.5",
                location: "Tapovan",
                stayDate: "10th Aug 2024 - 11th Aug 2024",
                image:
                  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
              },
            ],
          },
          {
            day: 3,
            name: "Cultural Experience",
            description:
              "Explore the local culture through food, music, and art.",
            car: [
              {
                checkout: "Checkout from Hotel in Rishikesh",
                destination: "Rishikesh to Mussoorie",
                type: "Private transport",
                model: "Swift",
                facilities: "3 seater, 2 Luggage Bags, First Aid",
                image:
                  "https://images.unsplash.com/photo-1511125357779-27038c647d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
              },
            ],
            hotels: [
              {
                timming:
                  "Check-in to Hotel in Near Picture Palace Bus Stand @ 2 PM",
                name: "Umra Grace Hotel",
                ratings: "3",
                location: "near Shiv Murti Chowk",
                stayDate: "9th Aug 2024 - 10th Aug 2024",
                image:
                  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
              },
            ],
          },
        ],
        availableFrom: new Date("2024-12-01"),
        availableTill: new Date("2025-02-28"),
      },
      {
        name: "Phuket",
        description:
          "Explore the stunning beaches and lively nightlife of Phuket.",
        image: "/uploads/image-1716874126098.jpg",
        price: 18000,
        rating: 4.5,
        reviews: 80,
        location: "Phuket, Thailand",
        days: 6,
        nights: 5,
        title: "Beach",
        photos: [
          {
            src: "https://images.unsplash.com/photo-1624358084630-f0880cb776a2?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            src: "https://images.unsplash.com/photo-1563124155-dbc34ba9bedb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D",
          },
          {
            src: "https://media.istockphoto.com/id/1005227506/photo/har-ki-pauri-is-a-famous-ghat-on-the-banks-of-the-ganges-in-haridwar-india.jpg?s=1024x1024&w=is&k=20&c=ogligY6KGUvn3-OUZ2d49Dk-wnu0CXf6wYddSYNaC2E=",
          },
          {
            src: "https://media.istockphoto.com/id/1044399860/photo/ganga-arthi-in-the-holy-city-of-rishikesh-in-uttarakhand-india-to-worship-river-ganga-ganges.jpg?s=1024x1024&w=is&k=20&c=H4n93UJhR8LPsa_aQdnv1A_BbGWVCQBjf-_mYMvIC44=",
          },
          {
            src: "https://media.istockphoto.com/id/1752927325/photo/lord-shiva-statue-on-the-banks-of-the-sacred-ganges-river-in-rishikesh-india.jpg?s=1024x1024&w=is&k=20&c=v6dsl2iSWOP02bnQg6dzNZI7V86odf5Eu6OemV4v6TU=",
          },
          {
            src: "https://media.istockphoto.com/id/825268350/photo/hardiwar.webp?b=1&s=170667a&w=0&k=20&c=O2GgcESUTZp-GfprLRKPX8OXWN_kr_fZ-31YB1NRduA=",
          },
        ],
        inclusions: [
          "Meal as per hotel Plan and drinks free too",
          "Return airport and round trip transfers",
          "Accommodation on twin sharing basis",
          "Enjoy Brussels day tours. Overnight Brussels",
        ],
        tourPlan: [
          {
            day: 1,
            name: "City Highlights",
            description:
              "Visit the city's main landmarks including museums, parks, and historical sites.",
            car: [
              {
                destination: "New Delhi to Haridwar",
                type: "Private Transport",
                model: "Swift",
                facilities: "3 seater, 2 Luggage Bags, First Aid",
                image:
                  "https://images.unsplash.com/photo-1511125357779-27038c647d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
              },
            ],
            sightseeing: [
              {
                name: "Haridwar",
                location: "Haridwar, India",
                places: ["Har Ki Pauri", "Chandi Devi", "Mansa Devi"],
                duration: "4 hr",
                placesCovered: 3,
                image:
                  "https://images.unsplash.com/photo-1511754863001-18d44abd0a93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D",
              },
            ],
            hotels: [
              {
                timming: "Check-in to Hotel in Near Shiv Murti Chowk @ 12 PM",
                name: "Umra Grace Hotel",
                ratings: "3",
                location: "near Shiv Murti Chowk",
                stayDate: "9th Aug 2024 - 10th Aug 2024",
                image:
                  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
              },
            ],
          },
          {
            day: 2,
            name: "Cultural Experience",
            description:
              "Explore the local culture through food, music, and art.",
            car: [
              {
                checkout: "Checkout from Hotel in Haridwar",
                destination: "Haridwar to Rishikesh",
                type: "private transport",
                model: "swift",
                facilities: "3 seater, 2 Luggage Bags, First Aid",
                image:
                  "https://images.unsplash.com/photo-1511125357779-27038c647d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
              },
            ],
            sightseeing: [
              {
                name: "Rishikesh",
                location: "Rishikesh, India",
                places: ["Bharat Mandir", "Parmarth Niketan", "Ram Jhula"],
                duration: "3 hr",
                placesCovered: 3,
                image:
                  "https://images.unsplash.com/photo-1588750765220-50603c3c0c7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D",
              },
            ],
            hotels: [
              {
                timming: "Check-in to Hotel in Tapovan @ 2 PM",
                name: "Hotel Rishikesh Grand",
                ratings: "3.5",
                location: "Tapovan",
                stayDate: "10th Aug 2024 - 11th Aug 2024",
                image:
                  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
              },
            ],
          },
          {
            day: 3,
            name: "Cultural Experience",
            description:
              "Explore the local culture through food, music, and art.",
            car: [
              {
                checkout: "Checkout from Hotel in Rishikesh",
                destination: "Rishikesh to Mussoorie",
                type: "Private transport",
                model: "Swift",
                facilities: "3 seater, 2 Luggage Bags, First Aid",
                image:
                  "https://images.unsplash.com/photo-1511125357779-27038c647d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
              },
            ],
            hotels: [
              {
                timming:
                  "Check-in to Hotel in Near Picture Palace Bus Stand @ 2 PM",
                name: "Umra Grace Hotel",
                ratings: "3",
                location: "near Shiv Murti Chowk",
                stayDate: "9th Aug 2024 - 10th Aug 2024",
                image:
                  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
              },
            ],
          },
        ],
        availableFrom: new Date("2024-10-01"),
        availableTill: new Date("2025-03-31"),
      },
    ],
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    category: "Desert",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna id dolor elementum ultrices.",
    types: [
      {
        name: "Sahara-Desert",
        description: "Experience the vastness and beauty of the Sahara Desert.",
        image: "/uploads/image-1716874126098.jpg",
        price: 7000,
        rating: 4.9,
        reviews: 110,
        location: "North Africa",
        title: "Desert",
        days: 8,
        nights: 7,
        photos: [
          {
            src: "https://images.unsplash.com/photo-1624358084630-f0880cb776a2?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            src: "https://images.unsplash.com/photo-1563124155-dbc34ba9bedb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D",
          },
          {
            src: "https://media.istockphoto.com/id/1005227506/photo/har-ki-pauri-is-a-famous-ghat-on-the-banks-of-the-ganges-in-haridwar-india.jpg?s=1024x1024&w=is&k=20&c=ogligY6KGUvn3-OUZ2d49Dk-wnu0CXf6wYddSYNaC2E=",
          },
          {
            src: "https://media.istockphoto.com/id/1044399860/photo/ganga-arthi-in-the-holy-city-of-rishikesh-in-uttarakhand-india-to-worship-river-ganga-ganges.jpg?s=1024x1024&w=is&k=20&c=H4n93UJhR8LPsa_aQdnv1A_BbGWVCQBjf-_mYMvIC44=",
          },
          {
            src: "https://media.istockphoto.com/id/1752927325/photo/lord-shiva-statue-on-the-banks-of-the-sacred-ganges-river-in-rishikesh-india.jpg?s=1024x1024&w=is&k=20&c=v6dsl2iSWOP02bnQg6dzNZI7V86odf5Eu6OemV4v6TU=",
          },
          {
            src: "https://media.istockphoto.com/id/825268350/photo/hardiwar.webp?b=1&s=170667a&w=0&k=20&c=O2GgcESUTZp-GfprLRKPX8OXWN_kr_fZ-31YB1NRduA=",
          },
        ],
        inclusions: [
          "Meal as per hotel Plan and drinks free too",
          "Return airport and round trip transfers",
          "Accommodation on twin sharing basis",
          "Enjoy Brussels day tours. Overnight Brussels",
        ],
        tourPlan: [
          {
            day: 1,
            name: "City Highlights",
            description:
              "Visit the city's main landmarks including museums, parks, and historical sites.",
            car: [
              {
                destination: "New Delhi to Haridwar",
                type: "Private Transport",
                model: "Swift",
                facilities: "3 seater, 2 Luggage Bags, First Aid",
                image:
                  "https://images.unsplash.com/photo-1511125357779-27038c647d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
              },
            ],
            sightseeing: [
              {
                name: "Haridwar",
                location: "Haridwar, India",
                places: ["Har Ki Pauri", "Chandi Devi", "Mansa Devi"],
                duration: "4 hr",
                placesCovered: 3,
                image:
                  "https://images.unsplash.com/photo-1511754863001-18d44abd0a93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D",
              },
            ],
            hotels: [
              {
                timming: "Check-in to Hotel in Near Shiv Murti Chowk @ 12 PM",
                name: "Umra Grace Hotel",
                ratings: "3",
                location: "near Shiv Murti Chowk",
                stayDate: "9th Aug 2024 - 10th Aug 2024",
                image:
                  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
              },
            ],
          },
          {
            day: 2,
            name: "Cultural Experience",
            description:
              "Explore the local culture through food, music, and art.",
            car: [
              {
                checkout: "Checkout from Hotel in Haridwar",
                destination: "Haridwar to Rishikesh",
                type: "private transport",
                model: "swift",
                facilities: "3 seater, 2 Luggage Bags, First Aid",
                image:
                  "https://images.unsplash.com/photo-1511125357779-27038c647d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
              },
            ],
            sightseeing: [
              {
                name: "Rishikesh",
                location: "Rishikesh, India",
                places: ["Bharat Mandir", "Parmarth Niketan", "Ram Jhula"],
                duration: "3 hr",
                placesCovered: 3,
                image:
                  "https://images.unsplash.com/photo-1588750765220-50603c3c0c7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D",
              },
            ],
            hotels: [
              {
                timming: "Check-in to Hotel in Tapovan @ 2 PM",
                name: "Hotel Rishikesh Grand",
                ratings: "3.5",
                location: "Tapovan",
                stayDate: "10th Aug 2024 - 11th Aug 2024",
                image:
                  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
              },
            ],
          },
          {
            day: 3,
            name: "Cultural Experience",
            description:
              "Explore the local culture through food, music, and art.",
            car: [
              {
                checkout: "Checkout from Hotel in Rishikesh",
                destination: "Rishikesh to Mussoorie",
                type: "Private transport",
                model: "Swift",
                facilities: "3 seater, 2 Luggage Bags, First Aid",
                image:
                  "https://images.unsplash.com/photo-1511125357779-27038c647d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
              },
            ],
            hotels: [
              {
                timming:
                  "Check-in to Hotel in Near Picture Palace Bus Stand @ 2 PM",
                name: "Umra Grace Hotel",
                ratings: "3",
                location: "near Shiv Murti Chowk",
                stayDate: "9th Aug 2024 - 10th Aug 2024",
                image:
                  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
              },
            ],
          },
        ],
        availableFrom: new Date("2024-03-01"),
        availableTill: new Date("2024-05-31"),
      },
      {
        name: "Gobi Desert",
        description: "Experience the beauty and majesty of the Gobi Desert.",
        image: "/uploads/image-1716874126098.jpg",
        price: 14000,
        rating: 4.7,
        reviews: 90,
        location: "South Asia",
        title: "Desert",
        days: 5,
        nights: 4,
        photos: [
          {
            src: "https://images.unsplash.com/photo-1624358084630-f0880cb776a2?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            src: "https://images.unsplash.com/photo-1563124155-dbc34ba9bedb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D",
          },
          {
            src: "https://media.istockphoto.com/id/1005227506/photo/har-ki-pauri-is-a-famous-ghat-on-the-banks-of-the-ganges-in-haridwar-india.jpg?s=1024x1024&w=is&k=20&c=ogligY6KGUvn3-OUZ2d49Dk-wnu0CXf6wYddSYNaC2E=",
          },
          {
            src: "https://media.istockphoto.com/id/1044399860/photo/ganga-arthi-in-the-holy-city-of-rishikesh-in-uttarakhand-india-to-worship-river-ganga-ganges.jpg?s=1024x1024&w=is&k=20&c=H4n93UJhR8LPsa_aQdnv1A_BbGWVCQBjf-_mYMvIC44=",
          },
          {
            src: "https://media.istockphoto.com/id/1752927325/photo/lord-shiva-statue-on-the-banks-of-the-sacred-ganges-river-in-rishikesh-india.jpg?s=1024x1024&w=is&k=20&c=v6dsl2iSWOP02bnQg6dzNZI7V86odf5Eu6OemV4v6TU=",
          },
          {
            src: "https://media.istockphoto.com/id/825268350/photo/hardiwar.webp?b=1&s=170667a&w=0&k=20&c=O2GgcESUTZp-GfprLRKPX8OXWN_kr_fZ-31YB1NRduA=",
          },
        ],
        inclusions: [
          "Meal as per hotel Plan and drinks free too",
          "Return airport and round trip transfers",
          "Accommodation on twin sharing basis",
          "Enjoy Brussels day tours. Overnight Brussels",
        ],
        tourPlan: [
          {
            day: 1,
            name: "City Highlights",
            description:
              "Visit the city's main landmarks including museums, parks, and historical sites.",
            car: [
              {
                destination: "New Delhi to Haridwar",
                type: "Private Transport",
                model: "Swift",
                facilities: "3 seater, 2 Luggage Bags, First Aid",
                image:
                  "https://images.unsplash.com/photo-1511125357779-27038c647d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
              },
            ],
            sightseeing: [
              {
                name: "Haridwar",
                location: "Haridwar, India",
                places: ["Har Ki Pauri", "Chandi Devi", "Mansa Devi"],
                duration: "4 hr",
                placesCovered: 3,
                image:
                  "https://images.unsplash.com/photo-1511754863001-18d44abd0a93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D",
              },
            ],
            hotels: [
              {
                timming: "Check-in to Hotel in Near Shiv Murti Chowk @ 12 PM",
                name: "Umra Grace Hotel",
                ratings: "3",
                location: "near Shiv Murti Chowk",
                stayDate: "9th Aug 2024 - 10th Aug 2024",
                image:
                  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
              },
            ],
          },
          {
            day: 2,
            name: "Cultural Experience",
            description:
              "Explore the local culture through food, music, and art.",
            car: [
              {
                checkout: "Checkout from Hotel in Haridwar",
                destination: "Haridwar to Rishikesh",
                type: "private transport",
                model: "swift",
                facilities: "3 seater, 2 Luggage Bags, First Aid",
                image:
                  "https://images.unsplash.com/photo-1511125357779-27038c647d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
              },
            ],
            sightseeing: [
              {
                name: "Rishikesh",
                location: "Rishikesh, India",
                places: ["Bharat Mandir", "Parmarth Niketan", "Ram Jhula"],
                duration: "3 hr",
                placesCovered: 3,
                image:
                  "https://images.unsplash.com/photo-1588750765220-50603c3c0c7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D",
              },
            ],
            hotels: [
              {
                timming: "Check-in to Hotel in Tapovan @ 2 PM",
                name: "Hotel Rishikesh Grand",
                ratings: "3.5",
                location: "Tapovan",
                stayDate: "10th Aug 2024 - 11th Aug 2024",
                image:
                  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
              },
            ],
          },
          {
            day: 3,
            name: "Cultural Experience",
            description:
              "Explore the local culture through food, music, and art.",
            car: [
              {
                checkout: "Checkout from Hotel in Rishikesh",
                destination: "Rishikesh to Mussoorie",
                type: "Private transport",
                model: "Swift",
                facilities: "3 seater, 2 Luggage Bags, First Aid",
                image:
                  "https://images.unsplash.com/photo-1511125357779-27038c647d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
              },
            ],
            hotels: [
              {
                timming:
                  "Check-in to Hotel in Near Picture Palace Bus Stand @ 2 PM",
                name: "Umra Grace Hotel",
                ratings: "3",
                location: "near Shiv Murti Chowk",
                stayDate: "9th Aug 2024 - 10th Aug 2024",
                image:
                  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
              },
            ],
          },
        ],
        availableFrom: new Date("2024-04-01"),
        availableTill: new Date("2024-06-30"),
      },
    ],
    description:
      "Sed et urna id dolor elementum ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    category: "Camping",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna id dolor elementum ultrices.",
    types: [
      {
        name: "Camping",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna id dolor elementum ultrices.",
        image: "/uploads/image-1716874126098.jpg",
        price: 8000,
        rating: 4.9,
        reviews: 110,
        location: "North Africa",
        title: "Camping",
        days: 3,
        nights: 2,
        photos: [
          {
            src: "https://images.unsplash.com/photo-1624358084630-f0880cb776a2?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            src: "https://images.unsplash.com/photo-1563124155-dbc34ba9bedb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D",
          },
          {
            src: "https://media.istockphoto.com/id/1005227506/photo/har-ki-pauri-is-a-famous-ghat-on-the-banks-of-the-ganges-in-haridwar-india.jpg?s=1024x1024&w=is&k=20&c=ogligY6KGUvn3-OUZ2d49Dk-wnu0CXf6wYddSYNaC2E=",
          },
          {
            src: "https://media.istockphoto.com/id/1044399860/photo/ganga-arthi-in-the-holy-city-of-rishikesh-in-uttarakhand-india-to-worship-river-ganga-ganges.jpg?s=1024x1024&w=is&k=20&c=H4n93UJhR8LPsa_aQdnv1A_BbGWVCQBjf-_mYMvIC44=",
          },
          {
            src: "https://media.istockphoto.com/id/1752927325/photo/lord-shiva-statue-on-the-banks-of-the-sacred-ganges-river-in-rishikesh-india.jpg?s=1024x1024&w=is&k=20&c=v6dsl2iSWOP02bnQg6dzNZI7V86odf5Eu6OemV4v6TU=",
          },
          {
            src: "https://media.istockphoto.com/id/825268350/photo/hardiwar.webp?b=1&s=170667a&w=0&k=20&c=O2GgcESUTZp-GfprLRKPX8OXWN_kr_fZ-31YB1NRduA=",
          },
        ],
        inclusions: [
          "Meal as per hotel Plan and drinks free too",
          "Return airport and round trip transfers",
          "Accommodation on twin sharing basis",
          "Enjoy Brussels day tours. Overnight Brussels",
        ],
        tourPlan: [
          {
            day: 1,
            name: "City Highlights",
            description:
              "Visit the city's main landmarks including museums, parks, and historical sites.",
            car: [
              {
                destination: "New Delhi to Haridwar",
                type: "Private Transport",
                model: "Swift",
                facilities: "3 seater, 2 Luggage Bags, First Aid",
                image:
                  "https://images.unsplash.com/photo-1511125357779-27038c647d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
              },
            ],
            sightseeing: [
              {
                name: "Haridwar",
                location: "Haridwar, India",
                places: ["Har Ki Pauri", "Chandi Devi", "Mansa Devi"],
                duration: "4 hr",
                placesCovered: 3,
                image:
                  "https://images.unsplash.com/photo-1511754863001-18d44abd0a93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D",
              },
            ],
            hotels: [
              {
                timming: "Check-in to Hotel in Near Shiv Murti Chowk @ 12 PM",
                name: "Umra Grace Hotel",
                ratings: "3",
                location: "near Shiv Murti Chowk",
                stayDate: "9th Aug 2024 - 10th Aug 2024",
                image:
                  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
              },
            ],
          },
          {
            day: 2,
            name: "Cultural Experience",
            description:
              "Explore the local culture through food, music, and art.",
            car: [
              {
                checkout: "Checkout from Hotel in Haridwar",
                destination: "Haridwar to Rishikesh",
                type: "private transport",
                model: "swift",
                facilities: "3 seater, 2 Luggage Bags, First Aid",
                image:
                  "https://images.unsplash.com/photo-1511125357779-27038c647d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
              },
            ],
            sightseeing: [
              {
                name: "Rishikesh",
                location: "Rishikesh, India",
                places: ["Bharat Mandir", "Parmarth Niketan", "Ram Jhula"],
                duration: "3 hr",
                placesCovered: 3,
                image:
                  "https://images.unsplash.com/photo-1588750765220-50603c3c0c7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D",
              },
            ],
            hotels: [
              {
                timming: "Check-in to Hotel in Tapovan @ 2 PM",
                name: "Hotel Rishikesh Grand",
                ratings: "3.5",
                location: "Tapovan",
                stayDate: "10th Aug 2024 - 11th Aug 2024",
                image:
                  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
              },
            ],
          },
          {
            day: 3,
            name: "Cultural Experience",
            description:
              "Explore the local culture through food, music, and art.",
            car: [
              {
                checkout: "Checkout from Hotel in Rishikesh",
                destination: "Rishikesh to Mussoorie",
                type: "Private transport",
                model: "Swift",
                facilities: "3 seater, 2 Luggage Bags, First Aid",
                image:
                  "https://images.unsplash.com/photo-1511125357779-27038c647d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
              },
            ],
            hotels: [
              {
                timming:
                  "Check-in to Hotel in Near Picture Palace Bus Stand @ 2 PM",
                name: "Umra Grace Hotel",
                ratings: "3",
                location: "near Shiv Murti Chowk",
                stayDate: "9th Aug 2024 - 10th Aug 2024",
                image:
                  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
              },
            ],
          },
        ],
        availableFrom: new Date("2024-05-01"),
        availableTill: new Date("2024-09-30"),
      },
    ],
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
];

export default tours;
