/** @jsx h */
import { FunctionalComponent, h } from "vue";

interface HomeProps {
  contributors: string[];
}

const Home: FunctionalComponent<HomeProps> = ({ contributors }) => {
  return (
    <div>
      <p class="text-4xl font-bold text-center mt-12">Contributors</p>

      {contributors.map((c) => (
        <p>{c}</p>
      ))}
    </div>
  );
};

export default Home;
