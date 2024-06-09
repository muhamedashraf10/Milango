import {useQuery} from '@tanstack/react-query';

export default function useGetUserData() {
  return useQuery<CodeType | undefined>({
    queryKey: ['code'],
    queryFn: () => '',
  });
}
