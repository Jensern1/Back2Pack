import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import style from './NewTripForm.module.scss';

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
        <form onSubmit={handleSubmit} className={style.form}>
        <FormControl className={style.formControl}>
            <FormLabel>Username</FormLabel>
            <Input value={username} onChange={(event) => setUsername(event.target.value)} className={style.input} />
        </FormControl>
        <FormControl className={style.formControl}>
            <FormLabel>Trip name</FormLabel>
            <Input value={tripName} onChange={(event) => setTripName(event.target.value)} className={style.input} />
        </FormControl>
        <FormControl className={style.formControl}>
            <FormLabel>Image</FormLabel>
            <Input type="file" onChange={handleImageChange} accept="image/*" className={style.input} />
            {image && (
            <img src={URL.createObjectURL(image)} alt="Selected photo" height="100" className={style.image} />
            )}
        </FormControl>
        <FormControl className={style.formControl}>
            <FormLabel>Description</FormLabel>
            <Input value={description} onChange={(event) => setDescription(event.target.value)} className={style.input} />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit" className={style.button}>
            Create trip
        </Button>
        </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default NewTripForm;