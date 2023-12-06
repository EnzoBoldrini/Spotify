import capa from '../../assets/capa.jpg'
import { Controls } from './subcomponets/Controls'
import {Header} from './subcomponets/Header'
import { ProgressBar } from './subcomponets/ProgressBar'


export function Spotify() {
  return (
    <div className=" bg-dark cyan w-full max-w-[200px] rounded-lg px-5 py-14">
      <div className="flex flex-col gap-7 justify-center items-center">
        <Header
          folder={capa}
          artists="Artist"
          name="Nome"
        />
        <ProgressBar/>
        <Controls/>
      </div>
    </div>
  ) 
}

