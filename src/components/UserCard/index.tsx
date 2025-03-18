import styled from 'styled-components';
import { Avatar } from '../../types.ts';
import { FC } from 'react';
import { theme } from '../../styles/theme.ts';

const Card = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
  align-items: center;
  gap: 10px;
  padding: 0 0 10px 0;
  width: fit-content;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  @media (max-width: 480px) {
    grid-template-columns: 30px auto;
    img {
      width: 30px;
      height: 30px;
    }
  }
`;

const Description = styled.div`
  display: grid;
  gap: 5px;
  color: ${theme.colors.primary};
  justify-items: baseline;
`;

const Name = styled.a`
  cursor: pointer;
  color: ${theme.colors.accent};
`;

const Datum = styled.span`
  color: ${theme.colors.greyText};
  font-weight: 400;
`;

type UserCardProps = {
  avatar: Avatar;
  displayName: string;
  date: string;
};

const UserCard: FC<UserCardProps> = ({ displayName, date, avatar }) => {
  const formatImageUrl = (
    url: string,
    params: { height?: number; width?: number }
  ) => {
    return url.replace(
      /{(\w+)}/g,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      (_, key) => params[key]?.toString() || `{${key}}`
    );
  };

  const avatarUrl = formatImageUrl(avatar.src, { width: 400 });

  return (
    <Card>
      <img src={avatarUrl} alt={displayName} className="avatar" />
      <Description>
        <span>
          <Name>{displayName}</Name> went on an adventure
        </span>
        <Datum>{date}</Datum>
      </Description>
    </Card>
  );
};

export default UserCard;
