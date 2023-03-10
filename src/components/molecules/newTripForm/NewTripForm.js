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

const NewTripForm = ({ onClose, onAddTrip, setSelectedImage = () => {} }) => {
  const [username, setUsername] = useState("");
  const [tripName, setTripName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTrip = {
      username: username,
      tripName: tripName,
      image: image,
      description: description,
    };

    // Add the new trip to the list of trips
    // This will depend on how you are currently managing the list of trips
    // For example, you might have a function in App that updates the state
    // with the new trip
    addTrip(newTrip);

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
        <ModalHeader>Add a new trip</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel>Trip name</FormLabel>
              <Input
                type="text"
                value={tripName}
                onChange={(event) => setTripName(event.target.value)}
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel>Image</FormLabel>
              <Input type="file" onChange={handleImageChange} required />
            </FormControl>

            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                required
              />
            </FormControl>
          </ModalBody>

          <Button type="submit">Add trip</Button>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default NewTripForm;
