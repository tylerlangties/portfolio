import * as React from "react";
import Link from "next/link";

type Props = Omit<React.ComponentProps<typeof Link>, "href"> & {
  href: string;
};

const LinkBehavior = React.forwardRef<HTMLAnchorElement, Props>(
  function LinkBehavior(props, ref) {
    const { href, ...other } = props;
    return <Link ref={ref} href={href} {...other} />;
  }
);

export default LinkBehavior;
