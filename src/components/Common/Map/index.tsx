import { Map, Marker } from 'pigeon-maps';

interface Props {
  position: [number, number];
}

const MapComponent = ({ position }: Props) => {
  if (position[0] === 0) return null;
  return (
    <Map height={300} center={position} zoom={11}>
      <Marker width={50} anchor={position} />
    </Map>
  );
};

export default MapComponent;
