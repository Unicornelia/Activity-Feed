import { render, screen } from '@testing-library/react';
import ImageGrid from '../ImageGrid';

describe('ImageGrid', () => {
  it('renders nothing when there are no images', () => {
    const { container } = render(<ImageGrid images={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders the correct number of images', () => {
    const mockImages = [
      { id: 1, src: 'https://example.com/image1.jpg', templated: true },
      { id: 2, src: 'https://example.com/image2.jpg', templated: true },
      { id: 3, src: 'https://example.com/image3.jpg', templated: true },
    ];

    render(<ImageGrid images={mockImages} />);
    const images = screen.getAllByRole('img');

    expect(images.length).toBe(3);
    expect(images[0]).toHaveAttribute('src', mockImages[0].src);
    expect(images[1]).toHaveAttribute('src', mockImages[1].src);
    expect(images[2]).toHaveAttribute('src', mockImages[2].src);
  });
});
