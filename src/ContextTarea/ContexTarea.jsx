import React from "react";
const TareasContext = React.createContext();
function TareasProvider() {
    return (
        <TareasContext.Provider>

        </TareasContext.Provider>
    )
}
<TareasContext.Consumer></TareasContext.Consumer>
export { TareasContext, TareasProvider }