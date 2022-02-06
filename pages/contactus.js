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
              <span>Bommasandra Industrial Area, Bommsandra, Karnataka</span>
            </div>
          </InfoWindow>
        </Map>
      {/* } */}
    </div>
  );
}

const GAW = GoogleApiWrapper({
  apiKey: 'AIzaSyCG18M1HoDrvD5BsO0LENN7a9TWwQdq7Fg'
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
              <span>Location Required</span>
              <GAW />
            </TreatmentDescription>
            {/* <TreatmentLogo>
              <img src="/dental-fillings.jpeg" />
            </TreatmentLogo> */}
          </TreatmentWrapper>
        </SectionItem>
      </SectionGroup>
      <Footer />
    </>
  );
}