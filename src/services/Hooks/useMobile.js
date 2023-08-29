import { useWindowSize } from "@uidotdev/usehooks";
import { size } from "../../theme/breakpoints";

const useMobile = () => {
  const { width } = useWindowSize();
  return width <= size.tablet
};

export default useMobile;
