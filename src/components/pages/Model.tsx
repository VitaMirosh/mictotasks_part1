import {useParams} from 'react-router-dom';
import {adidasArr, FirmItem} from './Adidas.tsx';
import {pumaArr} from './Puma.tsx';

type CrossModels={
  adidas:FirmItem[]
  puma:FirmItem[]
}
const crossModels:CrossModels={
  adidas:adidasArr,
  puma:pumaArr
}

export const Model = () => {
  // const {id} = useParams<{ id: string }>()
  const {model,id }= useParams<{model:string ,id:string}>()
  const item = model && crossModels[model as keyof CrossModels].find(el => el.id ===id)

  return (
    <>
      {item ?
        <div style={{textAlign: 'center'}}>
          <h2>{item.model}</h2>
          <h4>{item.collection}</h4>
          <h3>{item.price}</h3>
          <img src={item.picture} alt={item.model}
               style={{width: '600px', height: 'auto', marginRight : '10px'}}/>

        </div> : 'Такой модели не cуществует!'
      }

    </>

  )
 }