import { useContext } from 'react'
import AppContext from '../context/Context'

function useAppContext() {

    const context = useContext(AppContext);

    if(!context){
        throw new Error("useAppContext must be used inside AppContextProvider")
    }

  return context;
}

export default useAppContext;