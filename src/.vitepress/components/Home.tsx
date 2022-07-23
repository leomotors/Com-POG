import { FunctionalComponent } from "vue";

interface HomeProps {
  contributors: string[];
}

const Home: FunctionalComponent<HomeProps> = ({ contributors }) => {
  return (
    <div>
      <p class="mt-12 text-center text-4xl font-bold">Contributors</p>

      <div class="flex flex-col items-center">
        {contributors.map((contributor) => (
          <p>{contributor}</p>
        ))}
      </div>
    </div>
  );
};

export default Home;
