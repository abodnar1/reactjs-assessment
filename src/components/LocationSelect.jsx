import React, { useEffect } from "react";
import { connect } from "react-redux";
import { pickedLocation } from "../actions/facilityActions";

const LocationSelect = props => {
  const { locations } = props;

  useEffect(() => {}, [props.locations]);

    return (
      <div className="container">
        <nav className="location-select__container">
          <label className="location-select__label" htmlFor="location-selector">
            Change Facility Location
          </label>
          <select
            id="location-selector"
            className="location-select__select"
          >
            <option 
              className="location-select__option" 
              value="all">
                View All
            </option>
            {locations !== undefined && locations.map(location => 
              <option 
                className="location-select__option" 
                key={location.id} 
                value={location.name}
              >
                View {location.name}
              </option>
            )}
          </select>
        </nav>
      </div>
    );

  return null;
};

const mapStateToProps = state => ({
  locations: state.facilities.list.locations
});

export default connect(
  mapStateToProps
)(LocationSelect);
