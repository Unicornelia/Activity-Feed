import { FC, useEffect, useMemo, useRef } from 'react';
import styled from 'styled-components';
import { fetchActivities } from '../../api/fetchActivities.ts';
import { useInfiniteQuery } from '@tanstack/react-query';
import ActivityCard from '../../components/ActivityCard';
import { Tour } from '../../types.ts';
import { theme } from '../../styles/theme.ts';

const Container = styled.main`
  display: grid;
  background-color: ${theme.colors.background};
  color: ${theme.colors.primary};
  margin: 0 auto;
  gap: 40px;
  padding: 30px 50px;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 20px;
    gap: 30px;
  }

  @media (max-width: 480px) {
    padding: 15px;
    gap: 20px;
  }
`;

const Loader = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 1rem;
  font-weight: 500;
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
`;

const ActivityFeed: FC = () => {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    initialData: undefined,
    initialPageParam: 0,
    queryKey: ['tours'],
    queryFn: fetchActivities,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? false,
    retry: 3,
  });

  const observer = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!loadMoreRef.current || !hasNextPage) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    observer.current.observe(loadMoreRef.current);
    return () => observer.current?.disconnect();
  }, [hasNextPage, fetchNextPage]);

  const allTours = useMemo(
    () => data?.pages.flatMap((page) => page.tours) ?? [],
    [data]
  );

  if (isLoading) return <Message>Loading...</Message>;
  if (error) return <Message>Error fetching activities</Message>;

  return (
    <Container>
      {allTours.map((tour: Tour, index: number) => (
        <ActivityCard key={tour.id || index} {...tour} />
      ))}
      {hasNextPage && <Loader ref={loadMoreRef}>Loading more...</Loader>}
      {isFetchingNextPage && <Loader>Fetching more activities...</Loader>}
    </Container>
  );
};

export default ActivityFeed;
