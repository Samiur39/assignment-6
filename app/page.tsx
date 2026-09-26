import Hero from "./componants/Hero";
import Library from "./componants/Library";
import { getWorkouts } from "./lib/api";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <>
      <Hero />
      <Library workouts={workouts} />
    </>
  );
}