import * as React from "react";

interface Props {
  city: string;
}

export const Header: React.FunctionComponent<Props> = ({city}) => (
  <div>
    Hello {city}
  </div>
);
