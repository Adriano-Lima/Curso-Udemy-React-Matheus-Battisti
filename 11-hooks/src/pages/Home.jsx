import HookUseState from "../components/HookUseState"
import HooksUseReducer from "../components/HookUseReducer"
import HookUseEffect from "../components/HookUseEffect"
import HookUseRef from "../components/HookUseref"
import HookUseCallback from "../components/HookUseCallBack"
import HookUseMemo from '../components/HookUseMemo'
import HookUseEffectLayout from '../components/HookUseEffectLayout'
import HookUseImperativeHandle from '../components/HookUseImperativeHandle'
import HookCustom from '../components/HookCustom'


//useContext
import { useContext } from "react"
import { SomeContext } from "../components/HookUseContext"



const Home = () => {
    const { contextValue } = useContext(SomeContext)
    return (
        <div>
            <h1>Home</h1>
            <hr />
            <HookUseState />
            <HooksUseReducer />
            <HookUseEffect />
            <h2>UseContext</h2>
            <p>Valor do contexto: {contextValue}</p>
            <hr />
            <HookUseRef />
            <HookUseCallback />
            <HookUseMemo />
            <HookUseEffectLayout />
            <HookUseImperativeHandle />
            <HookCustom />
        </div>
    )
}

export default Home