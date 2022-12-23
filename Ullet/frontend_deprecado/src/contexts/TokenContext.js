import React, { useState } from "react";

const TokenContext = React.createContext();

export function TokenProvider(props) {
  const { children } = props;

  const [token, setToken] = useState(null);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
}

export default TokenContext;
