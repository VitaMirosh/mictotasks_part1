import {useParams} from 'react-router-dom';
import {adidasArr, AdidasItem} from './Adidas.tsx';


export const Model = () => {
  const {id} = useParams<{ id: string }>()
  const item = adidasArr.find((arrId: AdidasItem) => arrId.id === id)
  return (
    <>
      {item ?
        <div style={{textAlign: 'center'}}>
          <h2>{item.model}</h2>
          <h4>{item.collection}</h4>
          <h3>{item.price}</h3>
          <img src={item.picture} alt={item.model}
               style={{width: '600px', height: 'auto', marginRight : '10px'}}/>

        </div> : 'Модель не найдена'
      }

    </>

  )
}