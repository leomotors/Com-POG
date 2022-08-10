import { FunctionalComponent as FC } from "vue";

interface HomeProps {
  contributors: string[];
}

const Home: FC<HomeProps> = ({ contributors }) => {
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
