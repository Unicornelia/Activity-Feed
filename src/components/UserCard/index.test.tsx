import { render, screen } from '@testing-library/react';
import UserCard from '../UserCard';
import { Avatar } from '../../types';

describe('UserCard', () => {
  const mockAvatar: Avatar = {
    src: 'https://example.com/avatar.jpg',
    templated: true,
  };
  const mockDisplayName = 'John Doe';
  const mockDate = 'March 18, 2025';

  it('renders the user avatar, name, and date correctly', () => {
    render(
      <UserCard
        avatar={mockAvatar}
        displayName={mockDisplayName}
        date={mockDate}
      />
    );

    const avatarImg = screen.getByRole('img', { name: mockDisplayName });
    expect(avatarImg).toBeInTheDocument();
    expect(avatarImg).toHaveAttribute('src', mockAvatar.src);

    expect(screen.getByText(mockDisplayName)).toBeInTheDocument();

    expect(screen.getByText(mockDate)).toBeInTheDocument();

    expect(screen.getByText(/went on an adventure/i)).toBeInTheDocument();
  });

  it('formats the avatar URL correctly', () => {
    const formattedUrl = mockAvatar.src.replace('{width}', '400');

    render(
      <UserCard
        avatar={mockAvatar}
        displayName={mockDisplayName}
        date={mockDate}
      />
    );

    const avatarImg = screen.getByRole('img', { name: mockDisplayName });
    expect(avatarImg).toHaveAttribute('src', formattedUrl);
  });
});
