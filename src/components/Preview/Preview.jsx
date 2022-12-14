import React, { useContext} from "react";
import { selectedContext } from "../../App";
import Icons from '../../asstets/img/icons.svg';
import './Preview.module.scss';



export const  Preview = ({data}) => {
  const { selected, setSelected} = useContext(selectedContext)
  return (
    <li className="preview">
        <a 
        onClick={() => setSelected(data.id)}
        className={`preview__link ${selected === data.id ? 'preview__link--active' : ''} `} href={`#${data.id}`}>
          <div className="preview__circle">
          <figure className="preview__fig">
            <img src={data.image_url} alt="Test" />
          </figure>
          </div>
          <div className="preview__data">
            <h4 className="preview__title">{data.title}</h4>
            <p className="preview__publisher">{data.publisher}</p>
            {
              data.key ? (
                <div className="preview__user-generated">
                <svg>
                  <use href={`${Icons}#icon-user`}></use>
                </svg>
              </div>
              ) : ('')
            }
          
          </div>
        </a>
      </li>
)
}

