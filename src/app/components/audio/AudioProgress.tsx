import { forwardRef } from 'react';
import classes from '@/app/components/audio/AudioProgress.module.css';

interface AudioProgressProps {
  onChange: () => void;
}

export default forwardRef<HTMLInputElement, AudioProgressProps>(function AudioProgress(
  { onChange },
  ref
) {
  return (
    <input
      type='range'
      defaultValue={0}
      ref={ref}
      onChange={onChange}
      className={classes.progressBar}
      step={0.1}
    />
  );
});
