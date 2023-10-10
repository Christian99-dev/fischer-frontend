import { useWindowSize } from "@uidotdev/usehooks";
import { size } from "../../theme/breakpoints";

const useDevice = () => {
  const { width } = useWindowSize();

  return {
    mobile:     width <= size.mobile,
    tablet_sm:  width > size.mobile && width <= size.tablet_sm,
    tablet:     width > size.tablet_sm && width <= size.tablet,
    laptop:     width > size.tablet && width <= size.laptop,
    desktop:    width > size.laptop && width <= size.desktop,
    desktopXL:  width > size.desktop
  };
};

export default useDevice;
