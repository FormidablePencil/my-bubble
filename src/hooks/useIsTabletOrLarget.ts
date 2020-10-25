import { useMediaQuery } from "@material-ui/core";

const useIsTabletOrLarget = () => useMediaQuery((theme: any) => theme.breakpoints.up('sm'));

export default useIsTabletOrLarget

