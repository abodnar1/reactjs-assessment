import React, { useState, useEffect } from "react";
import { nineMonthsPassed } from "../../utils/dateUtils";
import Image from "../Image";
import PropTypes from "prop-types";

const propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  opened: PropTypes.string.isRequired
};

const FacilityImage = props => {
  const { image, name, opened } = props;
  // console.log("Opened State:", opened)
  const [isNew, setIsNew] = useState(false);
  // console.log("Is New State: ", isNew);

  useEffect(() => {
    const recentlyOpened = nineMonthsPassed(opened);
    //const recentlyOpened = !nineMonthsPassed(opened);
    // removed ! from line above to trigger the New label
    setIsNew(recentlyOpened);
    // console.log("Recently Opened: ", recentlyOpened);
  }, []);

  return (
    <div className="facility-card__container-img">
      <Image
        alt={`${name} facility`}
        className="facility-card__img"
        src={image}
      />
      {isNew && (
        <p aria-label="New Facility" className="facility-card__new">
          NEW
        </p>
      )}
    </div>
  );
};

FacilityImage.propTypes = propTypes;

export default FacilityImage;
