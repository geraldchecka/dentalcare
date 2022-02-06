import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import Layout from '../components/layout';
import { SectionGroup, SectionItem, TreatmentWrapper, TreatmentHeading, TreatmentDescription, TreatmentLogo } from '../styles/banner.styled';
import Footer from '../components/footer';
import { useEffect, useState } from 'react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

function MapContainer({ google }) {
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});
  const [infoWindow, setInfoWindow] = useState(true);
  // const [mapLoaded, setMapLoaded] = useState(false);

  function onClose() {
    setInfoWindow((state) => {
      if (state === true) {
        setActiveMarker(null);
        return false;
      }
    })
  }

  function onMarkerClick(props, marker, e) {
    // debugger;
    setActiveMarker(marker);
    setSelectedPlace(props);
    setInfoWindow(true);
  }

  // function idleDetect(props, x) {
  //   debugger;
  //   // setActiveMarker(marker);
  //   // setSelectedPlace(props);
  //   console.log(infoWindow);
  //   setInfoWindow(true);
  // }

  // function markerRef (marker) {
  //   debugger;
  //   console.log(marker);
  // }

  return (
    <div style={{ height: '200px' }}>
      {/* {mapLoaded &&  */}
        <Map
          google={google}
          zoom={18}
          style={mapStyles}
          // onIdle={idleDetect}
          initialCenter={
            {
              lat: 12.814731171572335,
              lng: 77.69026546074224
            }
          }
        >
          <Marker
            onClick={onMarkerClick}
            name={'Sri Sumukha Dental Care'}
            position={{
              lat: 12.814731171572335,
              lng: 77.69026546074224
            }}
            // ref={markerRef}
          />
          <InfoWindow
            marker={activeMarker}
            visible={infoWindow}
            // onClose={onClose}
          >
            <div>
              <h2>{selectedPlace.name}</h2>
              <pre>
                145-N, 1st Main Road
                Near Priyadarshini Petrol Bunk
                Bommasandra Industrial Area, Bommasandra,
                Bengaluru, 560099
                Karnataka
                India
              </pre>
            </div>
          </InfoWindow>
        </Map>
      {/* } */}
    </div>
  );
}

const GAW = GoogleApiWrapper({
  apiKey: 'AIzaSyCHzb46TJYTIGP_y0TNNQxVSZQFjgseQiM'
})(MapContainer);


export default function ContactUs() {
  return (
    <>
      <Layout showDetails/>
      <SectionGroup>
        <SectionItem>
          <TreatmentHeading>
            <h1>Contact Us</h1>
          </TreatmentHeading>
          <TreatmentWrapper>
            <TreatmentDescription>
            <p><b>TIMINGS:</b></p>
            <p style={{ marginBottom: "20px" }}>
              MONDAY - SATURDAY: 10:30AM - 2:30PM; 4:45PM - 8:30PM
              SUN:10:30AM - 2PM
            </p>
            <p><b>Reach us on:</b></p>
            <p style={{ marginBottom: "20px" }}>
              +91-9353912970
              +91-8147540263
            </p>
            </TreatmentDescription>
            <TreatmentDescription>
              <p><b>ADDRESS</b></p>
              <p style={{ marginBottom: "20px" }}>
                145-N, 1st Main Road
                Near Priyadarshini Petrol Bunk
                Bommasandra Industrial Area, Bommasandra,
                Bengaluru, 560099
                Karnataka
                India
              </p>
            </TreatmentDescription>
          </TreatmentWrapper>
        </SectionItem>
        <SectionItem>
          <div>
            <GAW />
          </div>
        </SectionItem>
      </SectionGroup>
    </>
  );
}