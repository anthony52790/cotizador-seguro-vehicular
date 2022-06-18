import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AddCover } from '../../components/AddCover';
import { Button } from '../../components/Button';
import { SpinnerPrice } from '../../components/SpinnerPrice';
import { Tab } from '../../components/Tab';
import { TabContent } from '../../components/TabContent';

import { useService } from '../../hooks/useService'
import './Quoter.scss'

export const Quoter = () => {

  const { data } = useService()
  const navigate = useNavigate();
  const [amount, setAmount] = useState(14300)
  const [totalPrice, setTotalPrice] = useState(20)
  const [activeTab, setActiveTab] = useState('1')
  const [coverageTire, setCoverageTire] = useState(false)
  const [coverageShock, setCoverageShock] = useState(false)
  const [coverageRun, setCoverageRun] = useState(false)

  return (
    <div className='quoter'>
      <div className='quoter__container'>
        <div className='quoter__sidebar'>
          <div className='sidebar__items'>
            <div className='sidebar__item'>
              <span className='sidebar__icon'>1</span>
              <p>Datos</p>
            </div>
            <div className='sidebar__item active'>
              <span className='sidebar__icon'>2</span>
              <p>Arma tu plan</p>
            </div>
          </div>
        </div>
        <div className='quoter__page-plan'>
          <div className='page-plan__content'>
            <Link to="/">
              <div className='page-plan__btn-back'>
                <span className='icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8" viewBox="0 0 6 8" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.06012 0.429053C4.8133 0.190316 4.41747 0.190316 4.17065 0.429053L0.939884 3.55405C0.686704 3.79894 0.686705 4.20106 0.939884 4.44595L4.17065 7.57095C4.41747 7.80968 4.8133 7.80968 5.06012 7.57095C5.3133 7.32606 5.3133 6.92394 5.06012 6.67905L2.29039 4L5.06012 1.32095C5.31329 1.07606 5.31329 0.673943 5.06012 0.429053Z" fill="#EF3340" />
                  </svg>
                </span>
                <p>VOLVER</p>
              </div>
            </Link>
            <div className='page-plan__box'>
              <div className='information__plan'>
                <div className='information__cover'>
                  <div className='information__card'>
                    <div className='information__name'>
                      <h1>¡Hola, <span>Juan</span></h1>
                      <p>Conoce las coberturas para tu plan</p>
                    </div>
                    <div className='card'>
                      <span className='card__imagen'></span>
                      <div className='card__model-card'>
                        <p>Placa: {data.placa}</p>
                        <h2>Wolkswagen 2019</h2>
                        <span>Golf</span>
                      </div>
                    </div>
                  </div>
                  <div className='information__calculation'>
                    <div className='calculator'>
                      <div className='calculator__box'>
                        <div className='calculator__maxmin'>
                          <h4>Indica la suma asegurada</h4>
                          <div className='calculator__number-max-min'>
                            MIN $12,500<span> | </span>MAX $16,5000
                          </div>
                        </div>
                        <SpinnerPrice
                          state={amount}
                          setState={setAmount}
                          symbol='$'
                          priceMin={12500}
                          priceMax={16500}
                          iteration={100}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='information__tabs'>
                    <h2>Agrega o quita coberturas</h2>
                    <div className='tabs'>
                      <div className='tabs__box'>
                        <div className='tab__items'>
                          <Tab index='1' action={setActiveTab} active={activeTab}>PROTEGE TU AUTO</Tab>
                          <Tab index='2' action={setActiveTab} active={activeTab}>PROTEGE A LOS QUE TE RODEAN</Tab>
                          <Tab index='3' action={setActiveTab} active={activeTab}>MEJORA TU PLAN</Tab>
                        </div>
                        <div className='tabs__body'>
                          <TabContent index='1' action={setActiveTab} active={activeTab}>
                            <div className='accordion'>
                              <div className='accordion__item' data-index='1'>
                                <div className='accordion__imagen'>
                                  <span className='accordion-image-1'></span>
                                </div>
                                <div className='accordion__title'>
                                  <button>
                                    Llanta robada
                                    <span className='accordion__icon-arrow'></span>
                                  </button>
                                </div>
                                <div className='accordion__box'>
                                  <AddCover
                                    active={coverageTire}
                                    setActive={setCoverageTire}
                                    totalPrice={totalPrice}
                                    setPrice={setTotalPrice}
                                    addCover={15}
                                  />
                                  <div className='accordion__description'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                  </div>
                                </div>
                              </div>
                              <div className='accordion__item' data-index='2' style={amount > 16000 ? { 'display': 'none' } : { 'display': 'block' }}>
                                <div className='accordion__imagen'>
                                  <span className='accordion-image-2'></span>
                                </div>
                                <div className='accordion__title'>
                                  <button>
                                    Choque y/o pasarte la luz roja
                                    <span className='accordion__icon-arrow'></span>
                                  </button>
                                </div>
                                <div className='accordion__box'>
                                  <AddCover
                                    active={coverageShock}
                                    setActive={setCoverageShock}
                                    totalPrice={totalPrice}
                                    setPrice={setTotalPrice}
                                    addCover={20}
                                  />
                                  <div className='accordion__description'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                  </div>
                                </div>
                              </div>
                              <div className='accordion__item' data-index='3'>
                                <div className='accordion__imagen'>
                                  <span className='accordion-image-3'></span>
                                </div>
                                <div className='accordion__title'>
                                  <button>
                                    ATROPELLO EN LA VIA EVITAMIENTO
                                    <span className='accordion__icon-arrow'></span>
                                  </button>
                                </div>
                                <div className='accordion__box'>
                                  <AddCover
                                    active={coverageRun}
                                    setActive={setCoverageRun}
                                    totalPrice={totalPrice}
                                    setPrice={setTotalPrice}
                                    addCover={50}
                                  />
                                  <div className='accordion__description'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                  </div>
                                </div>
                              </div>
                            </div>
                          </TabContent>
                          <TabContent index='2' action={setActiveTab} active={activeTab}>
                            VACIO 1
                          </TabContent>
                          <TabContent index='3' action={setActiveTab} active={activeTab}>
                            VACIO 2
                          </TabContent>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='information__amount'>
                  <div className='amount__content'>
                    <div className='amount__box'>
                      <h3>MONTO</h3>
                      <div className='amount'>{`$${totalPrice}`}</div>
                      <span>mensuales</span>
                    </div>
                    <div className='amount__description'>
                      <h2>El precio incluye</h2>
                      <div className='amount__item'>
                        <span className='icon-check'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.3178 0.927461C10.634 1.19502 10.6734 1.66825 10.4059 1.98446L4.90588 8.48446C4.76799 8.64742 4.56719 8.7439 4.3538 8.74972C4.14041 8.75555 3.93465 8.67016 3.78808 8.51497L0.954742 5.51497C0.670333 5.21383 0.683896 4.73915 0.985034 4.45474C1.28617 4.17033 1.76085 4.18389 2.04526 4.48503L4.30263 6.87519L9.2608 1.01554C9.52835 0.699339 10.0016 0.659903 10.3178 0.927461Z" fill="#43B748" />
                          </svg>
                        </span>
                        <p>Llanta de repuesto</p>
                      </div>
                      <div className='amount__item'>
                        <span className='icon-check'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.3178 0.927461C10.634 1.19502 10.6734 1.66825 10.4059 1.98446L4.90588 8.48446C4.76799 8.64742 4.56719 8.7439 4.3538 8.74972C4.14041 8.75555 3.93465 8.67016 3.78808 8.51497L0.954742 5.51497C0.670333 5.21383 0.683896 4.73915 0.985034 4.45474C1.28617 4.17033 1.76085 4.18389 2.04526 4.48503L4.30263 6.87519L9.2608 1.01554C9.52835 0.699339 10.0016 0.659903 10.3178 0.927461Z" fill="#43B748" />
                          </svg>
                        </span>
                        <p>Analisis de motor</p>
                      </div>
                      <div className='amount__item'>
                        <span className='icon-check'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.3178 0.927461C10.634 1.19502 10.6734 1.66825 10.4059 1.98446L4.90588 8.48446C4.76799 8.64742 4.56719 8.7439 4.3538 8.74972C4.14041 8.75555 3.93465 8.67016 3.78808 8.51497L0.954742 5.51497C0.670333 5.21383 0.683896 4.73915 0.985034 4.45474C1.28617 4.17033 1.76085 4.18389 2.04526 4.48503L4.30263 6.87519L9.2608 1.01554C9.52835 0.699339 10.0016 0.659903 10.3178 0.927461Z" fill="#43B748" />
                          </svg>
                        </span>
                        <p>Aros gratis</p>
                      </div>
                    </div>
                    <div className='button__next'>
                      <Button className='btn-red' onClick={() => { navigate('/gracias') }}>LO QUIERO</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}