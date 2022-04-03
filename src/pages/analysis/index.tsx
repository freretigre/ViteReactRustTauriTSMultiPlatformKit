import {memo} from 'react';
import { Button, Input, Card } from 'antd';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { actions } from '../../redux/actions';
import Cards from '../../components/Cards';
import Calendars from '../../components/Calendars';
import PlotsMix from '../../components/Charts/PlotsMix';
import EffectFades from '../../components/Swiper/EffectFades';



import styles from './index.module.scss';


const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
];

const list = [
  ...itemData, 
  ...itemData, 
  ...itemData, 
  ...itemData, 
  ...itemData, 
  ...itemData, 
  ...itemData, 
  ...itemData, 
  ...itemData, 
  ...itemData, 
  ...itemData, 
  ...itemData, 
  ...itemData, 
  ...itemData, 
  ...itemData, 
  ...itemData,
]

const Index = memo(() => {
    const dispatch = useAppDispatch();
    const counter = useAppSelector((state) => state.counter.value);
    const { increment, decrement, incrementByAmount } = actions;


    const handleAdd = () => {
      dispatch(increment());
    }
    const handleDel = () => {
      dispatch(decrement());
     
    }

    const handleAsAdd = () => {
      dispatch(incrementByAmount(1));
    }

    console.log("counter: ", counter);

    return (
        <div className={styles.normal}>
            <EffectFades />
            <PlotsMix />
            <Calendars />
            <div className='btns'>
              <Button onClick={handleAdd}>加+</Button>
              <Input value={counter} />
              <Button onClick={handleDel}>减-</Button>
              <Button onClick={handleAsAdd}>加AS+</Button>
            </div>
            <Cards />
        </div>
    );
});

export default Index;
