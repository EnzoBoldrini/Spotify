import { CaretDoubleLeft, CaretDoubleRight, Play } from '@phosphor-icons/react' 

export function Controls() {
  return ( 
    <footer className="flex justify-between w-full">
      <button>
        <CaretDoubleLeft weight="fill" size={20} className="text-gray-300 m-1"/>
      </button>
      <button>
        <Play weight="fill" size={20} className="text-gray-300 m-1"/>
      </button>
      <button>
        <CaretDoubleRight weight="fill" size={20} className="text-gray-300 m-1"/>
      </button>
    </footer>    
  )
}