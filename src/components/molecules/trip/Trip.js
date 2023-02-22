import React from "react";
import style from "./Trip.module.scss";

function Trip({ username, tripName, image, description }) {
  return (
    <div className={style.trip}>
      <div className={style["trip-header"]}>
        <h2>{tripName}</h2>
        <h3>by {username}</h3>
      </div>
      <div className={style["trip-images"]}>
        <img src={image} alt={tripName} className={style["trip-image"]} />
      </div>

      <div className={style["trip-description"]}>
        <p>{description}</p>
      </div>
    </div>
  );
}


// import { Grid, GridItem, Box, Image, Text } from "@chakra-ui/react";

// function Trip({ username, tripName, image, description }) {
//   return (
//     <Grid className={style.trip}
//       templateColumns="repeat(2, 1fr)"
//       gap={6}
//       borderWidth="1px"
//       borderRadius="md"
//       overflow="hidden"
//       padding="4"
//     >
//       <GridItem colSpan={1}>
//         <Box className={style["trip-header"]}>
//           <Text fontSize="xl" fontWeight="bold">
//             {tripName}
//           </Text>
//           <Text color="gray.500">by {username}</Text>
//         </Box>
//       </GridItem>
//       <GridItem colSpan={1}>
//         <Image src={image} alt={tripName} borderRadius="md" />
//       </GridItem>
//       <GridItem colSpan={2}>
//         <Text mt="4" fontSize="md">
//           {description}
//         </Text>
//       </GridItem>
//     </Grid>
//   );
// }


export default Trip;
