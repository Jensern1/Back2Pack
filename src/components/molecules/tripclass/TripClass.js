class Trip {
  constructor(tripName, description, image, user, rating, length, price) {
    this.tripName = tripName;
    this.description = description;
    this.image = image;
    this.username = usernamee;
    this.rating = rating;
    this.length = length;
    this.price = price;
  }
  toString() {
    return this.title + "," + this.description;
  }
}

const tripConverter = {
  toFirestore: (trip) => {
    return {
      tripName: trip.tripName,
      description: trip.description,
      image: trip.image,
      username: trip.username,
      rating: trip.rating,
      length: trip.length,
      price: trip.price,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    console.log(data);
    return new Trip(
      data.tripName,
      data.description,
      data.image,
      data.username,
      data.length,
      data.price,
      data.rating
    );
  },
};
