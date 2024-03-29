import React from 'react';
import {Canvas, Circle, Fill} from '@shopify/react-native-skia';
import {useSharedValue} from 'react-native-reanimated';
import {GestureResponderEvent} from 'react-native';

const App = () => {
  const circleLocationX = useSharedValue(200);
  const circleLocationY = useSharedValue(200);

  const handleMoveEvent = (event: GestureResponderEvent) => {
    'worklet';
    const {locationX, locationY} = event.nativeEvent;
    circleLocationX.value = locationX;
    circleLocationY.value = locationY;
  };

  return (
    <>
      <Canvas
        style={{
          flex: 1,
          width: '100%',
          height: 'auto',
        }}
        onTouchStart={e => {
          console.log('onTouchStart');
          handleMoveEvent(e);
        }}
        onTouchMove={handleMoveEvent}
        onTouchEnd={e => {
          console.log('onTouchEnd');
        }}>
        <Fill color="#120a3d" />
        <Circle cx={circleLocationX} cy={circleLocationY} r={100} color="red" />
      </Canvas>
    </>
  );
};

export default App;
