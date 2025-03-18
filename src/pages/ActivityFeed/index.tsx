import { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { fetchActivities } from '../../api/fetchActivities.ts';
import { useInfiniteQuery } from '@tanstack/react-query';
import ActivityCard from '../../components/ActivityCard';
import { Tour } from '../../types.ts';

const Container = styled.main`
  display: grid;
  background-color: #f5f4e9;
  color: #242424;
  margin: 0 auto;
  gap: 50px;
  padding: 30px 50px;
  overflow-x: hidden;
`;

const Loader = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 18px;
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

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    observer.current.observe(loadMoreRef.current);
    return () => observer.current?.disconnect();
  }, [hasNextPage, fetchNextPage]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching activities</p>;

  return (
    <Container>
      {data?.pages.map((page) =>
        page.tours.map((tour: Tour, index: number) => (
          <ActivityCard key={index} {...tour} />
        ))
      )}
      {hasNextPage && <Loader ref={loadMoreRef}>Loading more...</Loader>}
      {isFetchingNextPage && <Loader>Fetching more activities...</Loader>}
    </Container>
  );
};

export default ActivityFeed;
