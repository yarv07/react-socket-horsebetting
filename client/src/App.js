import { useState, useEffect, useMemo, useCallback} from 'react';
import './App.css';
import { io } from 'socket.io-client';
import PD from './icons/PD.png';
import CR from './icons/CR.png'
import RB from './icons/RB.png'
import LC from './icons/LC.png'
import LA from './icons/LA.png'
import GG from './icons/GG.png'
import { ControlPanel } from './components/ControlPanel';
import { Race } from './components/Race';
import { useSocket } from './hooks';

const maxDistance = 1000;

const URL = "http://localhost:3002";

const socket = io(URL, { autoConnect: false });

const handleStart = () => {
  socket.emit('start');
}

const handleEnd = () => {
  socket.disconnect();
}

function App() {
  
  const [data, setData] = useState([]);
  
  useEffect(() => {
    socket.connect()
  }, []);

  socket.on('ticker', (round) => {
    setData(round);
  });

  const princessDianaRun = useCallback(() => {
    if(!data.length) return
    const result = data[0].distance / maxDistance * 100;
    return result
  }, [data]);

  const cricketRun = useCallback(() => {
    if(!data.length) return
    const result = data[1].distance / maxDistance * 100;
    return result
  }, [data]);

  const rebelRun = useCallback(() => {
    if(!data.length) return
    const result = data[2].distance / maxDistance * 100;
    return result
  }, [data]);

  const lucyRun = useCallback(() => {
    if(!data.length) return
    const result = data[3].distance / maxDistance * 100;
    return result
  }, [data]);

  const laceyRun = useCallback(() => {
    if(!data.length) return
    const result = data[4].distance / maxDistance * 100;
    return result
  }, [data]);

  const gingerRun = useCallback(() => {
    if(!data.length) return
    const result = data[5].distance / maxDistance * 100;
    return result
  }, [data]);

  const princessDiana = useMemo(() => princessDianaRun(), [princessDianaRun])
  const cricket = useMemo(() => cricketRun(), [cricketRun])
  const rebel = useMemo(() => rebelRun(), [rebelRun])
  const lucy = useMemo(() => lucyRun(), [lucyRun])
  const lacey = useMemo(() => laceyRun(), [laceyRun])
  const ginger = useMemo(() => gingerRun(), [gingerRun])

  return (
    <div>
      <button onClick={handleStart}>Start Race</button>
      <button onClick={handleEnd}>End Race</button>
      <br></br>
      <img className="horse" src={PD} alt="PrincessDiana" style={{transform: `translateX(calc(${princessDiana}vw - 55px)`}}/>
      <br></br>
      <img className="horse" src={CR} alt="PrincessDiana" style={{transform: `translateX(calc(${cricket}vw - 55px)`}}/>
      <br></br>
      <img className="horse" src={RB} alt="PrincessDiana" style={{transform: `translateX(calc(${rebel}vw - 55px)`}}></img>
      <br></br>
      <img className="horse" src={LC} alt="PrincessDiana" style={{transform: `translateX(calc(${lucy}vw - 55px)`}}></img>
      <br></br>
      <img className="horse" src={LA} alt="PrincessDiana" style={{transform: `translateX(calc(${lacey}vw - 55px)`}}></img>
      <br></br>
      <img className="horse" src={GG} alt="PrincessDiana" style={{transform: `translateX(calc(${ginger}vw - 55px)`}}></img>
    </div>
  );
}

export default App;


/* function App() {
  const [horses, setHorses] = useState([]);

  const { connect, disconnect, start } = useSocket(setHorses);

  return (
    <div>
      <ControlPanel
        start={start}
        connect={connect}
        disconnect={disconnect}
      />
      {horses.map((horse) => (
        <Race horseId={horse.name} distance={horse.distance} />
      ))}
    </div>
  );
}

export default App */