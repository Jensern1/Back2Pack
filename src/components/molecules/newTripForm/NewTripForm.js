import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';

const NewTripForm = ({ onClose, onAddTrip, setSelectedImage = () => {} }) => {
  const [username, setUsername] = useState('');
  const [tripName, setTripName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

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
    onAddTrip(newTrip);

    // Pass the image data to App component
    setSelectedImage(image);

    onClose();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(file);
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create a new trip</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input value={username} onChange={(event) => setUsername(event.target.value)} />
            </FormControl>
            <FormControl>
              <FormLabel>Trip name</FormLabel>
              <Input value={tripName} onChange={(event) => setTripName(event.target.value)} />
            </FormControl>
            <FormControl>
              <FormLabel>Image</FormLabel>
              <Input type="file" onChange={handleImageChange} accept="image/*" />
              {image && (
                <img src={URL.createObjectURL(image)} alt="Selected photo" height="100" />
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input value={description} onChange={(event) => setDescription(event.target.value)} />
            </FormControl>
            <Button mt={4} colorScheme="teal" type="submit">
              Create trip
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default NewTripForm;