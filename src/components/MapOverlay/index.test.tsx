import { render, screen } from '@testing-library/react';
import MapOverlay from '../MapOverlay';

describe('MapOverlay Component', () => {
  const mockVectorMap = {
    src: 'https://tourpic-vector.maps.komoot.net/r/small/image1.jpg',
    attribution: 'Map data © OpenStreetMap contributors',
  };

  it('renders the map image', () => {
    render(<MapOverlay vectorMap={mockVectorMap} />);
    const mapImage = screen.getByAltText('Map Snippet');
    expect(mapImage).toBeInTheDocument();
    expect(mapImage).toHaveAttribute('src', mockVectorMap.src);
  });
});
