import React from 'react';

const Classes = () => {
  const classes = [
    {
      title: "Strength Training",
      image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      time: "Mon, Wed, Fri - 9:00 AM"
    },
    {
      title: "HIIT",
      image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      time: "Tue, Thu - 10:00 AM"
    },
    {
      title: "Yoga",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      time: "Daily - 7:00 AM"
    }
  ];

  return (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Classes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join our diverse range of classes led by expert instructors
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((cls, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img
                src={cls.image}
                alt={cls.title}
                className="w-full h-96 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2">{cls.title}</h3>
                <p className="text-gray-300">{cls.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;