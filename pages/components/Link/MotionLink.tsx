import React from "react";
import { Link } from "react-scroll";

type Props = {
    children?: React.ReactNode;
  }

const RefLink: React.FC<any> = React.forwardRef((props, ref) => (
    <Link
        ref={ref}
        {...props}
    >
    </Link>
))

export default RefLink;