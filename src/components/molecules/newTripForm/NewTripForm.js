import React, { useState } from "react";
import { db, addTrip } from "../../../sources/firebase.js";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import style from "./NewTripForm.module.scss";

const NewTripForm = ({ onClose, onAddTrip, setSelectedImage = () => { } }) => {
  const [username, setUsername] = useState("");
  const [tripName, setTripName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [length, setLength] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTrip = {
      username: username,
      tripName: tripName,
      image: image,
      description: description,
      price: price,
      length: length,
      rating: rating,
    };

    // Add the new trip to the list of trips
    // This will depend on how you are currently managing the list of trips
    // For example, you might have a function in App that updates the state
    // with the new trip
    addTrip(newTrip);
    onAddTrip();

    // Pass the image data to App component
    setSelectedImage(image);

    onClose();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader(); // Create a new FileReader object

    reader.onload = (event) => {
      const imageUrl = event.target.result; // Extract the URL from the FileReader result
      setImage(imageUrl);
    };

    reader.readAsDataURL(file); // Read the file as a data URL
  };

  return (
    <Modal isOpen onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="25px" >Add a new trip</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit} className={style.form}>
            <FormControl className={style.formControl}>
              <FormLabel>Username</FormLabel>
              <Input
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className={style.input}
              />
            </FormControl>
            <FormControl className={style.formControl}>
              <FormLabel>Trip name</FormLabel>
              <Input
                value={tripName}
                onChange={(event) => setTripName(event.target.value)}
                className={style.input}
              />
            </FormControl>
            <FormControl className={style.formControl}>
              <FormLabel>Image</FormLabel>
              <Input
                type="file"
                onChange={handleImageChange}
                accept="image/*"
                className={style.input}
              />
              {/* {image && (
                <img src={URL.createObjectURL(image)} alt="Selected photo" height="100" className={style.image} />
              )} */}
            </FormControl>
            <FormControl className={style.formControl}>
              <FormLabel>Description</FormLabel>
              <Input
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className={style.input}
              />
            </FormControl>
            <FormControl className={style.formControl}>
              <FormLabel>Price</FormLabel>
              <Input
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                className={style.input}
              />
            </FormControl>
            <FormControl className={style.formControl}>
              <FormLabel>Length (in days)</FormLabel>
              <Input
                value={length}
                onChange={(event) => setLength(event.target.value)}
                className={style.input}
              />
            </FormControl>
            <FormControl className={style.formControl}>
              <FormLabel>Rating</FormLabel>
              <div className={style.stars}>
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    onClick={() => setRating(index + 1)}
                    className={style.star}
                  >
                    {index < rating ? "★" : "☆"}
                  </span>
                ))}
              </div>
            </FormControl>
            <Button
              mt={4}
              colorScheme="teal"
              type="submit"
              className={style.button}
            >
              Create trip
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal >
  );
};

export default NewTripForm;
