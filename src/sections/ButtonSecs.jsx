import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";

const ButtonSecs = () => {
  return (
    <div>
      <SectionTitle>Button</SectionTitle>
      <Button color="secondary" variant="" size="large" className="">
        Large
      </Button>
      <Button
        color="warning"
        variant="outlined"
        size="large"
        className="text-black"
      >
        Outlined
      </Button>
      <Button color="accent" variant="" size="regular" className="">
        Regular
      </Button>
      <Button
        color="accent"
        variant="outlined"
        size="regular"
        className="text-black"
      >
        Regular
      </Button>
      <Button color="accent" variant="" size="small" className="">
        Small
      </Button>
      <Button color="accent" variant="" size="small" className="rounded-lg">
        Small
      </Button>
    </div>
  );
};

export default ButtonSecs;
