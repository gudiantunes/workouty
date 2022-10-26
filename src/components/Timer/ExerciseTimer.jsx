import {
  faPauseCircle,
  faPlayCircle,
  faRotate,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { NoBgButton } from '../../components.styled/Button/Button';
import { RoundedWrapper } from '../../components.styled/Wrapper/Wrapper';

const ExerciseTimer = forwardRef((props, _ref) => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [time, setTime] = useState(0);

  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  function getIcon() {
    if (!isActive || isPaused) {
      return faPlayCircle;
    }
    if (!isPaused) {
      return faPauseCircle;
    }
  }

  useImperativeHandle(_ref, () => ({
    getTime: () => {
      return time;
    },
    done: !props.targetTime || isCompleted,
  }));

  function handleStartPause() {
    if (!isActive) {
      setIsActive(true);
    } else if (!isPaused) {
      setIsPaused(true);
    } else {
      setIsPaused(false);
    }
  }

  useEffect(() => {
    props.onTimeUpdate?.(time);

    if (!props.targetTime) return;

    if (time >= props.targetTime) {
      props.onTimerDone?.();
      setIsCompleted(true);
    }
  }, [time]);

  return (
    <RoundedWrapper className={props.className} active={isActive && !isPaused}>
      <span>
        Timer: {props.targetTime ? props.targetTime - time : time} seconds
      </span>
      <div style={{ display: 'flex', gap: '0.5em' }}>
        {time > 0 && (
          <NoBgButton
            active={isActive && !isPaused}
            onClick={() => {
              setIsPaused(false);
              setIsActive(false);
              setTime(0);
            }}
          >
            <FontAwesomeIcon icon={faRotate} />
          </NoBgButton>
        )}
        <NoBgButton onClick={handleStartPause} active={isActive && !isPaused}>
          <FontAwesomeIcon icon={getIcon()} />
        </NoBgButton>
      </div>
    </RoundedWrapper>
  );
});

export default ExerciseTimer;
