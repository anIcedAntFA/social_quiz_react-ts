import { useQuery } from '@tanstack/react-query';

import { MainApi } from 'src/service';

export default function useQuestion(id: string) {
  const mainApi = MainApi.getInstance();

  const { data } = useQuery(['question'], () => mainApi.getQuestion(id));

  return data?.data;
}
