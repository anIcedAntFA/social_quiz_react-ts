import { useQuestion } from 'src/hooks';

export default function HomePage() {
  const data = useQuestion('gGzTBURqhajG');

  console.log(data);

  return <div>HomePage</div>;
}
