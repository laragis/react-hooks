import { useEffect, useRef } from 'react';
import isEqual from 'lodash/isEqual.js';

export type IProps = Record<string, any>;

export default function useWhyDidYouUpdate(componentName: string, props: IProps, disableInProduction = true) {
  // Do not run under the production by default
  if (disableInProduction && process.env.NODE_ENV === 'production') return;
  const prevProps = useRef<IProps>({});

  useEffect(() => {
    if (prevProps.current) {
      const allKeys = Object.keys({ ...prevProps.current, ...props });
      const changedProps: IProps = {};

      allKeys.forEach((key) => {
        if (!isEqual(prevProps.current[key], props[key])) {
          changedProps[key] = {
            from: prevProps.current[key],
            to: props[key],
          };
        }
      });

      // If changesObj not empty then output to console
      if (Object.keys(changedProps).length) {
        console.log('[why-did-you-update]', componentName, changedProps);
      }
    }

    // Finally update previousProps with current props for next hook call
    prevProps.current = props;
  });
}
