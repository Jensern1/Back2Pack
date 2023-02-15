class Trip {
  constructor(title, description) {
    this.title = title;
    this.description = description;
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
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Trip(data.title, data.description);
  },
};
