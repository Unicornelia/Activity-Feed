import { render, screen } from '@testing-library/react';
import ResponsiveImage from '../ResponsiveImage';

describe('ResponsiveImage', () => {
  it('renders the image with correct attributes', () => {
    const mockSrc = 'https://example.com/image-{width}x{height}.jpg';
    const mockAlt = 'Sample image';

    render(<ResponsiveImage src={mockSrc} alt={mockAlt} />);

    const imageElement = screen.getByRole('img');

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      'src',
      'https://example.com/image-400x400.jpg'
    );
    expect(imageElement).toHaveAttribute('alt', mockAlt);
    expect(imageElement).toHaveAttribute('loading', 'lazy');
  });
});
