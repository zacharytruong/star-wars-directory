import CharacterGrid from '@/components/CharacterGrid';

export default function Home() {
  return (
    <main>
      <h1>Homepage</h1>
      <button className="btn btn-primary">Go home</button>
      <CharacterGrid id="3" />
    </main>
  );
}
