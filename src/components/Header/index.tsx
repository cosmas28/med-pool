import * as React from "react";

import {Button} from "components/Button";

interface Props {
  city: string;
}

export const Header: React.FunctionComponent<Props> = ({city}) => (
  <div>
    Hello {city}
    <Button disabled={true} onClick={() => alert("testing")}>Hit me</Button>
  </div>
);
