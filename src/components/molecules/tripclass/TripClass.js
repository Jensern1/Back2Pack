class Trip {
  constructor(title, description, image, user, rating) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.user = user;
    this.rating = rating;
  }
  toString() {
    return this.title + "," + this.description;
  }
}

const tripConverter = {
  toFirestore: (trip) => {
    return {
      title: trip.title,
      description: trip.description,
      image: trip.image,
      user: trip.user,
      rating: trip.rating,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Trip(data.title, data.description, data.image, data.user, data.rating);
  },
};
